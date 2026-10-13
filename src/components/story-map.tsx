import { memo, useEffect, useMemo, useRef, useState } from "react";
import { geoEqualEarth, geoPath, type GeoPath } from "d3-geo";
import { zoom as d3zoom, zoomIdentity, type ZoomBehavior } from "d3-zoom";
import { select } from "d3-selection";
import "d3-transition";
import { feature } from "topojson-client";
import type { Topology } from "topojson-specification";
import worldTopo from "world-atlas/countries-50m.json";
import statesTopo from "us-atlas/states-10m.json";
import { X } from "lucide-react";
import type { Story } from "@/content/stories";
import {
  DETAIL_ATTRIBUTION,
  MAX_DETAIL_K,
  drawDetail,
  loadSatellite,
  onTileLoad,
  prefetchDetail,
  renderSatellite,
  type View,
} from "@/components/satellite";

/** Countries whose sub-regions (states) open up when the country is clicked. */
const HAS_REGIONS = "United States of America";
const displayName = (country: string) => (country === HAS_REGIONS ? "United States" : country);

const world = worldTopo as unknown as Topology;
const COUNTRIES = (feature(world, world.objects.countries) as GeoJSON.FeatureCollection).features;
const us = statesTopo as unknown as Topology;
const STATES = (feature(us, us.objects.states) as GeoJSON.FeatureCollection).features;
const SPHERE = { type: "Sphere" } as const;

const DOT_K = 2.5;
const LABEL_K = 40;
const MAX_K = MAX_DETAIL_K;
const PANEL_W = 340;

// Satellite palette: white outlines and a light veil for your countries, red for places.
const INK = "#b3ac9c";
const OUTLINE = "#ffffff";
const PENCIL = "#d4542a";

type Area = { name: string; coords: [number, number] };
type Place = { name: string; country: string; region?: string; coords: [number, number]; areas: Area[]; stories: Story[] };
type Selection = { country?: string; region?: string; place?: string; area?: string };
type Hover = { label: string; x: number; y: number } | null;
type Bounds = [[number, number], [number, number]];

const unionBounds = (list: Bounds[]): Bounds => [
  [Math.min(...list.map((b) => b[0][0])), Math.min(...list.map((b) => b[0][1]))],
  [Math.max(...list.map((b) => b[1][0])), Math.max(...list.map((b) => b[1][1]))],
];

export const formatCoords = ([lng, lat]: [number, number]) =>
  `${Math.abs(lat).toFixed(2)}°${lat >= 0 ? "N" : "S"} ${Math.abs(lng).toFixed(2)}°${lng >= 0 ? "E" : "W"}`;

type AtlasProps = {
  path: GeoPath;
  covered: Set<string>;
  coveredRegions: Set<string>;
  showRegions: boolean;
  washOpacity: number;
  onHover: (label: string | null, e?: React.MouseEvent) => void;
  onCountry: (name: string) => void;
  onRegion: (name: string) => void;
  /** Called when the pointer first enters a country/state, before any click. */
  onIntent: (kind: "country" | "region", name: string) => void;
};

const washProps = (active: boolean) => ({
  vectorEffect: "non-scaling-stroke" as const,
  className: active ? "cursor-pointer transition-[fill] duration-300" : undefined,
});

// The static layers. Memoized so zoom frames only move the parent <g>, not re-render these paths.
const Atlas = memo(function Atlas({ path, covered, coveredRegions, showRegions, washOpacity, onHover, onCountry, onRegion, onIntent }: AtlasProps) {
  const [hovered, setHovered] = useState<string | null>(null);
  const hoverHandlers = (name: string, label: string, onClick: (n: string) => void) => ({
    onMouseEnter: () => onIntent(onClick === onRegion ? "region" : "country", name),
    onMouseMove: (e: React.MouseEvent) => {
      setHovered(name);
      onHover(label, e);
    },
    onMouseLeave: () => {
      setHovered(null);
      onHover(null);
    },
    onClick: () => onClick(name),
  });

  return (
    <>
      <g>
        {COUNTRIES.filter((f) => covered.has(f.properties?.name) && !(showRegions && f.properties?.name === HAS_REGIONS)).map((f) => {
          const name = f.properties?.name as string;
          return (
            <path
              key={name}
              d={path(f) ?? ""}
              fill={OUTLINE}
              fillOpacity={(hovered === name ? 0.4 : 0.16) * washOpacity}
              stroke={OUTLINE}
              strokeOpacity={0.9 * washOpacity}
              strokeWidth={1}
              {...washProps(true)}
              {...hoverHandlers(name, displayName(name), onCountry)}
            />
          );
        })}
        {showRegions &&
          STATES.map((f) => {
            const name = f.properties?.name as string;
            const active = coveredRegions.has(name);
            return (
              <path
                key={name}
                d={path(f) ?? ""}
                fill={active ? OUTLINE : "transparent"}
                fillOpacity={(hovered === name ? 0.4 : 0.16) * washOpacity}
                stroke={OUTLINE}
                strokeOpacity={(active ? 0.9 : 0.35) * washOpacity}
                strokeWidth={active ? 1 : 0.6}
                {...washProps(active)}
                {...(active ? hoverHandlers(name, name, onRegion) : {})}
              />
            );
          })}
      </g>

      <path d={path(SPHERE) ?? ""} fill="none" stroke={INK} strokeWidth={0.8} vectorEffect="non-scaling-stroke" />
    </>
  );
});

export function StoryMap({ stories }: { stories: Story[] }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const gRef = useRef<SVGGElement>(null);
  const zoomRef = useRef<ZoomBehavior<SVGSVGElement, unknown> | null>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [view, setView] = useState({ k: 1, x: 0, y: 0 });
  const k = view.k;
  const [hover, setHover] = useState<Hover>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const renderedView = useRef<View | null>(null);
  const [satellite, setSatellite] = useState<Awaited<ReturnType<typeof loadSatellite>> | null>(null);
  const [selection, setSelection] = useState<Selection>({});

  const places = useMemo(() => {
    const byPlace = new Map<string, Place>();
    stories.forEach((s) => {
      const key = `${s.country}|${s.place}`;
      const existing = byPlace.get(key);
      const place = existing ?? { name: s.place, country: s.country, region: s.region, coords: s.coords, areas: [], stories: [] };
      place.stories.push(s);
      if (s.area && !place.areas.some((a) => a.name === s.area)) place.areas.push({ name: s.area, coords: s.coords });
      byPlace.set(key, place);
    });
    // A place split into areas (e.g. Lima's neighborhoods) sits at the middle of them.
    byPlace.forEach((p) => {
      if (p.areas.length)
        p.coords = [0, 1].map((i) => p.areas.reduce((sum, a) => sum + a.coords[i], 0) / p.areas.length) as [number, number];
    });
    return [...byPlace.values()];
  }, [stories]);

  const covered = useMemo(() => new Set(stories.map((s) => s.country)), [stories]);
  const coveredRegions = useMemo(() => new Set(stories.flatMap((s) => (s.region ? [s.region] : []))), [stories]);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setSize({ w: entry.contentRect.width, h: entry.contentRect.height }));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const projection = useMemo(
    () => geoEqualEarth().fitExtent([[16, 16], [Math.max(size.w - 16, 17), Math.max(size.h - 16, 17)]], SPHERE),
    [size],
  );
  const path = useMemo(() => geoPath(projection), [projection]);

  useEffect(() => {
    loadSatellite().then(setSatellite, (err) => console.error("Satellite image failed to load", err));
  }, []);

  // Reprojecting the image is too slow to redo every zoom frame, so stretch the last render with CSS
  // while zooming and redraw it sharply once zooming pauses.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !satellite || !size.w) return;
    const rv = renderedView.current;
    if (rv) {
      const r = view.k / rv.k;
      canvas.style.transform = `translate(${view.x - rv.x * r}px, ${view.y - rv.y * r}px) scale(${r})`;
    }
    let frame = 0;
    let unsubscribe = () => {};
    const sphere = path(SPHERE) ?? "";
    const detail = () => drawDetail(canvas, projection, sphere, view, size.w, size.h);
    const timer = setTimeout(() => {
      renderSatellite(canvas, satellite, projection, sphere, view, size.w, size.h);
      renderedView.current = view;
      canvas.style.transform = "";
      detail();
      // Tiles arrive one by one; batch their redraws to one per frame.
      unsubscribe = onTileLoad(() => {
        frame ||= requestAnimationFrame(() => {
          frame = 0;
          detail();
        });
      });
    }, rv ? 80 : 0);
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(frame);
      unsubscribe();
    };
  }, [view, satellite, projection, path, size]);

  useEffect(() => {
    if (!svgRef.current || !size.w) return;
    const z = d3zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, MAX_K])
      .translateExtent([[0, 0], [size.w, size.h]])
      .on("zoom", (e) => {
        gRef.current?.setAttribute("transform", e.transform.toString());
        setView({ k: e.transform.k, x: e.transform.x, y: e.transform.y });
      });
    // A resize rebuilds the projection, so start back at the full globe.
    select(svgRef.current).call(z).call(z.transform, zoomIdentity).on("dblclick.zoom", null);
    zoomRef.current = z;
  }, [size]);

  const targetFor = ([[x0, y0], [x1, y1]]: Bounds, maxK: number) => {
    // On desktop the story panel floats over the right side of the map; frame around it.
    const panel = window.matchMedia("(min-width: 768px)").matches ? PANEL_W : 0;
    const pad = 60;
    const availW = size.w - panel - pad * 2;
    const availH = size.h - pad * 2;
    const scale = Math.max(1, Math.min(maxK, availW / Math.max(x1 - x0, 1e-6), availH / Math.max(y1 - y0, 1e-6)));
    return zoomIdentity
      .translate(pad + availW / 2, pad + availH / 2)
      .scale(scale)
      .translate(-(x0 + x1) / 2, -(y0 + y1) / 2);
  };

  // Start downloading a destination's imagery early: on hover, and again when the zoom begins.
  const prefetchFor = (bounds: Bounds, maxK: number) => {
    const t = targetFor(bounds, maxK);
    prefetchDetail(projection, { k: t.k, x: t.x, y: t.y }, size.w, size.h);
  };

  const zoomTo = (bounds: Bounds, maxK: number) => {
    const svg = svgRef.current;
    const z = zoomRef.current;
    if (!svg || !z) return;
    const t = targetFor(bounds, maxK);
    // Fetch the destination's imagery now so it downloads during the animation, not after.
    prefetchDetail(projection, { k: t.k, x: t.x, y: t.y }, size.w, size.h);
    select(svg).transition().duration(900).call(z.transform, t);
  };

  const pointBounds = (pts: [number, number][]): Bounds =>
    unionBounds(pts.map((p) => projection(p)!).map(([x, y]) => [[x, y], [x, y]] as Bounds));

  // Where each level of the map zooms to, as [bounds, max zoom].
  const countryFrame = (country: string): [Bounds, number] => {
    const pts = places.filter((p) => p.country === country).map((p) => p.coords);
    const shape = COUNTRIES.find((f) => f.properties?.name === country);
    // The US spans Alaska to the East Coast; frame its stories rather than its full outline.
    return [country === HAS_REGIONS || !shape ? pointBounds(pts) : unionBounds([path.bounds(shape), pointBounds(pts)]), 20];
  };
  const regionFrame = (region: string): [Bounds, number] => {
    const shape = STATES.find((f) => f.properties?.name === region);
    return [shape ? path.bounds(shape) : pointBounds(places.filter((p) => p.region === region).map((p) => p.coords)), 40];
  };
  // Places zoom to about city scale; places with areas (Lima) frame all their neighborhoods.
  const placeFrame = (place: Place): [Bounds, number] =>
    place.areas.length ? [pointBounds(place.areas.map((a) => a.coords)), 2500] : [pointBounds([place.coords]), Math.max(k, 150)];
  const areaFrame = (area: Area): [Bounds, number] => [pointBounds([area.coords]), 2500];

  const selectCountry = (country: string) => {
    zoomTo(...countryFrame(country));
    setSelection({ country });
  };

  const selectRegion = (region: string) => {
    zoomTo(...regionFrame(region));
    setSelection({ country: HAS_REGIONS, region });
  };

  const selectPlace = (place: Place) => {
    zoomTo(...placeFrame(place));
    setSelection({ country: place.country, region: place.region, place: place.name });
  };

  const selectArea = (place: Place, area: Area) => {
    zoomTo(...areaFrame(area));
    setSelection({ country: place.country, region: place.region, place: place.name, area: area.name });
  };

  const resetView = () => {
    if (svgRef.current && zoomRef.current) select(svgRef.current).transition().duration(900).call(zoomRef.current.transform, zoomIdentity);
    setSelection({});
  };

  // Stable callbacks so the memoized atlas doesn't re-render on every zoom frame.
  const handlers = useRef({ selectCountry, selectRegion, countryFrame, regionFrame, prefetchFor });
  handlers.current = { selectCountry, selectRegion, countryFrame, regionFrame, prefetchFor };
  const onIntent = useMemo(
    () => (kind: "country" | "region", name: string) => {
      const h = handlers.current;
      h.prefetchFor(...(kind === "country" ? h.countryFrame(name) : h.regionFrame(name)));
    },
    [],
  );
  const onCountry = useMemo(() => (name: string) => handlers.current.selectCountry(name), []);
  const onRegion = useMemo(() => (name: string) => handlers.current.selectRegion(name), []);
  const onHover = useMemo(
    () => (label: string | null, e?: React.MouseEvent) => {
      const rect = wrapRef.current?.getBoundingClientRect();
      setHover(label && e && rect ? { label, x: e.clientX - rect.left, y: e.clientY - rect.top } : null);
    },
    [],
  );

  const inCountry = selection.country ? places.filter((p) => p.country === selection.country) : [];
  const inScope = selection.region ? inCountry.filter((p) => p.region === selection.region) : inCountry;
  const openPlace = selection.place ? inScope.find((p) => p.name === selection.place) : undefined;
  const visibleStories = (openPlace ? openPlace.stories : inScope.flatMap((p) => p.stories)).filter(
    (s) => !selection.area || s.area === selection.area,
  );
  const regions = selection.country === HAS_REGIONS && !selection.region ? [...new Set(inCountry.map((p) => p.region!))].sort() : [];
  const chips = regions.length
    ? regions.map((r) => ({ key: r, label: r, frame: () => regionFrame(r), onClick: () => selectRegion(r) }))
    : openPlace?.areas.length && !selection.area
      ? openPlace.areas.map((a) => ({ key: a.name, label: a.name, frame: () => areaFrame(a), onClick: () => selectArea(openPlace, a) }))
      : !selection.place && inScope.length > 1
      ? inScope.map((p) => ({ key: p.name, label: p.name, frame: () => placeFrame(p), onClick: () => selectPlace(p) }))
      : [];

  const trail = [
    selection.country && { label: displayName(selection.country), onClick: () => selectCountry(selection.country!) },
    selection.region && { label: selection.region, onClick: () => selectRegion(selection.region!) },
    openPlace && { label: openPlace.name, onClick: () => selectPlace(openPlace) },
    selection.area && { label: selection.area },
  ].filter(Boolean) as { label: string; onClick?: () => void }[];

  return (
    <div className="relative">
      <div ref={wrapRef} className="relative h-[52vh] min-h-[320px] w-full overflow-hidden md:h-[80vh]">
        <canvas
          ref={canvasRef}
          className="pointer-events-none absolute left-0 top-0 origin-top-left"
          style={{ width: size.w, height: size.h }}
        />
        {size.w > 0 && (
          <svg ref={svgRef} width={size.w} height={size.h} className="relative block cursor-grab active:cursor-grabbing">
            <g ref={gRef}>
              <Atlas
                path={path}
                covered={covered}
                coveredRegions={coveredRegions}
                showRegions={selection.country === HAS_REGIONS}
                // Outlines are low-detail, so they fade out once real imagery takes over.
                washOpacity={k < 4 ? 1 : k < 10 ? 0.6 : k < 50 ? 0.3 : 0}
                onHover={onHover}
                onCountry={onCountry}
                onRegion={onRegion}
                onIntent={onIntent}
              />
            </g>
            {/* Dots are drawn in screen space; at deep zoom, tiny shapes inside a huge transform render as blobs. */}
            <g>
              {(k >= DOT_K || selection.country) &&
                places.flatMap((p) =>
                  p.name === selection.place && p.areas.length
                    ? p.areas.map((a) => ({
                        key: p.name + a.name,
                        name: a.name,
                        coords: a.coords,
                        active: a.name === selection.area,
                        frame: () => areaFrame(a),
                        onClick: () => selectArea(p, a),
                      }))
                    : [
                        {
                          key: p.country + p.name,
                          name: p.name,
                          coords: p.coords,
                          active: p.name === selection.place && !p.areas.length,
                          frame: () => placeFrame(p),
                          onClick: () => selectPlace(p),
                        },
                      ],
                ).map((dot) => {
                  const [px, py] = projection(dot.coords)!;
                  const x = px * k + view.x;
                  const y = py * k + view.y;
                  return (
                    <g key={dot.key} className="fade-in">
                      {dot.active && <circle cx={x} cy={y} r={9} fill="none" stroke="#ffffff" strokeWidth={1.5} />}
                      <circle
                        cx={x}
                        cy={y}
                        r={3.5}
                        fill={PENCIL}
                        stroke="#ffffff"
                        strokeWidth={1.5}
                        className="cursor-pointer"
                        onMouseEnter={() => prefetchFor(...dot.frame())}
                        onMouseMove={(e) => onHover(dot.name, e)}
                        onMouseLeave={() => onHover(null)}
                        onClick={(e) => {
                          e.stopPropagation();
                          dot.onClick();
                        }}
                      />
                      {k >= LABEL_K && (
                        <text
                          x={x + 7}
                          y={y + 4}
                          fontSize={11}
                          className="pointer-events-none select-none"
                          fill="#ffffff"
                          style={{ paintOrder: "stroke", stroke: "rgba(0,0,0,0.6)", strokeWidth: 3 }}
                        >
                          {dot.name}
                        </text>
                      )}
                    </g>
                  );
                })}
            </g>
          </svg>
        )}

        {hover && (
          <div
            className="pointer-events-none absolute z-10 -translate-x-1/2 whitespace-nowrap text-[12px] font-medium text-white"
            style={{ left: hover.x, top: hover.y - 30, textShadow: "0 1px 4px rgba(0,0,0,0.7)" }}
          >
            {hover.label}
          </div>
        )}
      </div>

      {selection.country && (
        <aside className="fade-in flex max-h-[80vh] flex-col bg-background/90 backdrop-blur-md md:absolute md:right-4 md:top-4 md:bottom-4 md:w-[320px] md:rounded-sm md:shadow-[0_8px_30px_oklch(0_0_0/0.08)]">
          <div className="flex items-start justify-between gap-3 px-5 pt-5">
            <nav className="flex flex-wrap items-baseline gap-x-2 text-[17px] font-medium leading-tight tracking-tight text-foreground">
              {trail.map((t, i) => (
                <span key={t.label} className="flex items-baseline gap-x-2">
                  {i > 0 && <span className="text-muted-foreground/50">/</span>}
                  {t.onClick && i < trail.length - 1 ? (
                    <button type="button" onClick={t.onClick} className="text-muted-foreground hover:text-foreground">
                      {t.label}
                    </button>
                  ) : (
                    <span>{t.label}</span>
                  )}
                </span>
              ))}
            </nav>
            <button type="button" onClick={resetView} aria-label="Back to world" className="mt-1 text-muted-foreground hover:text-foreground">
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 pb-5 pt-4">
            {chips.length > 0 && (
              <div className="mb-5 flex flex-wrap gap-x-4 gap-y-1.5">
                {chips.map((c) => (
                  <button
                    key={c.key}
                    type="button"
                    onClick={c.onClick}
                    onMouseEnter={() => prefetchFor(...c.frame())}
                    className="text-[13px] text-muted-foreground hover:text-foreground"
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            )}

            <ul className="space-y-7">
              {visibleStories.map((s) => (
                <li key={s.place + (s.area ?? "") + s.url + (s.title ?? "")}>
                  <a href={s.url} target="_blank" rel="noreferrer" className="group block">
                    <div className="overflow-hidden rounded-sm">
                      {s.cover ? (
                        <img
                          src={s.cover}
                          alt={s.title ?? s.place}
                          className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                      ) : (
                        <div className="photo-placeholder aspect-[4/5] w-full">
                          <div className="photo-placeholder-grain" />
                        </div>
                      )}
                    </div>
                    <div className="mt-2.5 flex items-start justify-between gap-3">
                      <div>
                        {s.title && (
                          <p className="text-[15px] font-medium leading-snug tracking-tight text-foreground group-hover:text-primary">{s.title}</p>
                        )}
                        <p className="mt-0.5 text-[12px] text-muted-foreground">
                          {[s.area, s.place, s.region ?? displayName(s.country)].filter(Boolean).join(", ")}
                        </p>
                        <p className="mt-1 text-[11px] tabular-nums text-muted-foreground/70">
                          {formatCoords(s.coords)}
                          {s.date && ` · ${s.date}`}
                        </p>
                      </div>
                      <span aria-hidden className="text-muted-foreground group-hover:text-foreground">↗</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      )}

      <p className="mt-2 text-right text-[10px] text-muted-foreground/70">{DETAIL_ATTRIBUTION}</p>
    </div>
  );
}
