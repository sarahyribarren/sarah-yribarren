import type { GeoProjection } from "d3-geo";
import blueMarbleUrl from "@/assets/maps/blue-marble-topo-bathy-5400.jpg";

// NASA Blue Marble (topography + bathymetry, Dec 2004), public domain:
// https://visibleearth.nasa.gov/images/73909. It's an equirectangular image, so every
// screen pixel is mapped back through the Equal Earth projection to find its source pixel.

type Source = { data: Uint8ClampedArray; w: number; h: number };

let source: Promise<Source> | null = null;

export function loadSatellite(): Promise<Source> {
  source ??= new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const c = document.createElement("canvas");
      c.width = img.naturalWidth;
      c.height = img.naturalHeight;
      const ctx = c.getContext("2d")!;
      ctx.drawImage(img, 0, 0);
      resolve({ data: ctx.getImageData(0, 0, c.width, c.height).data, w: c.width, h: c.height });
    };
    img.onerror = reject;
    img.src = blueMarbleUrl;
  });
  return source;
}

export type View = { k: number; x: number; y: number };

/** Draw the satellite image onto `canvas` for the given projection and zoom transform. */
export function renderSatellite(
  canvas: HTMLCanvasElement,
  src: Source,
  projection: GeoProjection,
  spherePath: string,
  view: View,
  w: number,
  h: number,
) {
  const dpr = DPR();
  const W = Math.round(w * dpr);
  const H = Math.round(h * dpr);
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d")!;
  const out = ctx.createImageData(W, H);
  const o = out.data;
  const s = src.data;
  const sw = src.w;
  const sh = src.h;
  const invert = projection.invert!;

  for (let py = 0; py < H; py++) {
    const my = (py / dpr - view.y) / view.k;
    for (let px = 0; px < W; px++) {
      const ll = invert([(px / dpr - view.x) / view.k, my]);
      if (!ll || Number.isNaN(ll[0]) || Number.isNaN(ll[1])) continue;

      // Bilinear sample so deep zooms soften rather than turn blocky.
      const fx = ((ll[0] + 180) / 360) * sw - 0.5;
      const fy = ((90 - ll[1]) / 180) * sh - 0.5;
      const x0 = Math.min(sw - 1, Math.max(0, Math.floor(fx)));
      const y0 = Math.min(sh - 1, Math.max(0, Math.floor(fy)));
      const x1 = Math.min(sw - 1, x0 + 1);
      const y1 = Math.min(sh - 1, y0 + 1);
      const ax = Math.min(1, Math.max(0, fx - x0));
      const ay = Math.min(1, Math.max(0, fy - y0));
      const i00 = (y0 * sw + x0) * 4;
      const i10 = (y0 * sw + x1) * 4;
      const i01 = (y1 * sw + x0) * 4;
      const i11 = (y1 * sw + x1) * 4;
      const j = (py * W + px) * 4;
      for (let c = 0; c < 3; c++) {
        o[j + c] = (s[i00 + c] * (1 - ax) + s[i10 + c] * ax) * (1 - ay) + (s[i01 + c] * (1 - ax) + s[i11 + c] * ax) * ay;
      }
      o[j + 3] = 255;
    }
  }
  ctx.putImageData(out, 0, 0);

  // The inverse projection clamps points outside the globe onto its edge; trim them with the outline.
  ctx.save();
  ctx.globalCompositeOperation = "destination-in";
  ctx.setTransform(dpr * view.k, 0, 0, dpr * view.k, dpr * view.x, dpr * view.y);
  ctx.fill(new Path2D(spherePath));
  ctx.restore();
}

// Zoomed-in imagery comes from Web Mercator tiles; each tile is drawn with an affine transform fitted to where
// its corners land on Equal Earth. Tiles are small once you're zoomed in, so that local fit is visually exact.
//
// With an Esri API key in VITE_ESRI_KEY (see .env.example) this uses Esri World Imagery: a fast CDN with
// rooftop-level detail. Without one it falls back to Sentinel-2 cloudless 2016 by EOX (CC BY 4.0,
// https://s2maps.eu), ~10 m/pixel, served more slowly.
const ESRI_KEY = import.meta.env.VITE_ESRI_KEY as string | undefined;

export const DETAIL_ATTRIBUTION = ESRI_KEY
  ? "Imagery: NASA Blue Marble · Esri, Maxar, Earthstar Geographics, and the GIS User Community"
  : "Imagery: NASA Blue Marble · Sentinel-2 cloudless by EOX IT Services GmbH (contains modified Copernicus Sentinel data 2016)";
const tileUrl = (z: number, x: number, y: number) =>
  ESRI_KEY
    ? `https://ibasemaps-api.arcgis.com/arcgis/rest/services/World_Imagery/MapServer/tile/${z}/${y}/${x}?token=${ESRI_KEY}`
    : `https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless_3857/default/g/${z}/${y}/${x}.jpg`;
const MIN_TILE_Z = 5;
const MAX_TILE_Z = ESRI_KEY ? 18 : 14;
/** How far the map may zoom: deep enough to use the sharpest tiles available. */
export const MAX_DETAIL_K = ESRI_KEY ? 40000 : 2500;
const MAX_TILES = 120;

const tiles = new Map<string, HTMLImageElement>();
const tileListeners = new Set<() => void>();

/** Subscribe to tile arrivals (from any request, including prefetches). Returns an unsubscribe function. */
export function onTileLoad(listener: () => void) {
  tileListeners.add(listener);
  return () => void tileListeners.delete(listener);
}

const ready = (img?: HTMLImageElement) => (img && img.complete && img.naturalWidth ? img : null);

function requestTile(z: number, x: number, y: number) {
  const key = `${z}/${x}/${y}`;
  let img = tiles.get(key);
  if (!img) {
    img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => tileListeners.forEach((l) => l());
    img.src = tileUrl(z, x, y);
    tiles.set(key, img);
  }
  return ready(img);
}

const tileLon = (x: number, z: number) => (x / 2 ** z) * 360 - 180;
const tileLat = (y: number, z: number) => (Math.atan(Math.sinh(Math.PI * (1 - (2 * y) / 2 ** z))) * 180) / Math.PI;
const lonToX = (lon: number, z: number) => ((lon + 180) / 360) * 2 ** z;
const latToY = (lat: number, z: number) => {
  const r = (Math.max(-85, Math.min(85, lat)) * Math.PI) / 180;
  return ((1 - Math.log(Math.tan(r) + 1 / Math.cos(r)) / Math.PI) / 2) * 2 ** z;
};

type TileRange = { z: number; x0: number; x1: number; y0: number; y1: number };

/** Which tiles (and at what zoom level) cover the screen for this view, or null when zoomed out too far. */
function visibleTiles(projection: GeoProjection, view: View, w: number, h: number, dpr: number): TileRange | null {
  const invert = projection.invert!;
  const toScreen = (lon: number, lat: number) => {
    const [px, py] = projection([lon, lat])!;
    return [px * view.k + view.x, py * view.k + view.y];
  };

  // Sample the screen to find which longitudes/latitudes are visible.
  const lons: number[] = [];
  const lats: number[] = [];
  for (let i = 0; i <= 8; i++) {
    for (let j = 0; j <= 8; j++) {
      const sx = (w * i) / 8;
      const sy = (h * j) / 8;
      const ll = invert([(sx - view.x) / view.k, (sy - view.y) / view.k]);
      if (!ll || Number.isNaN(ll[0]) || Number.isNaN(ll[1])) continue;
      const [bx, by] = toScreen(ll[0], ll[1]);
      if (Math.abs(bx - sx) > 1 || Math.abs(by - sy) > 1) continue; // off the globe
      lons.push(ll[0]);
      lats.push(ll[1]);
    }
  }
  if (lons.length < 4) return null;

  // Pick the tile zoom whose pixels roughly match screen pixels at the center of the view.
  const center = invert([(w / 2 - view.x) / view.k, (h / 2 - view.y) / view.k]);
  if (!center || Number.isNaN(center[0])) return null;
  const [ax, ay] = toScreen(center[0], center[1]);
  const [bx, by] = toScreen(center[0] + 0.01, center[1]);
  const pxPerDegree = (Math.hypot(bx - ax, by - ay) / 0.01) * dpr;
  let z = Math.min(MAX_TILE_Z, Math.ceil(Math.log2((pxPerDegree * 360) / 256)));
  if (z < MIN_TILE_Z) return null;

  const pad = 0.2;
  const minLon = Math.max(-180, Math.min(...lons) - pad);
  const maxLon = Math.min(180, Math.max(...lons) + pad);
  const minLat = Math.max(-85, Math.min(...lats) - pad);
  const maxLat = Math.min(85, Math.max(...lats) + pad);
  const range = (): TileRange => ({
    z,
    x0: Math.floor(lonToX(minLon, z)),
    x1: Math.min(2 ** z - 1, Math.floor(lonToX(maxLon, z))),
    y0: Math.floor(latToY(maxLat, z)),
    y1: Math.min(2 ** z - 1, Math.floor(latToY(minLat, z))),
  });
  let r = range();
  while ((r.x1 - r.x0 + 1) * (r.y1 - r.y0 + 1) > MAX_TILES && z > MIN_TILE_Z) {
    z--;
    r = range();
  }
  return r;
}

const DPR = () => Math.min(window.devicePixelRatio || 1, 1.5);

/** Start downloading the tiles a view will need, e.g. the destination of a zoom animation. */
export function prefetchDetail(projection: GeoProjection, view: View, w: number, h: number) {
  const r = visibleTiles(projection, view, w, h, DPR());
  if (!r) return;
  for (let x = r.x0; x <= r.x1; x++) for (let y = r.y0; y <= r.y1; y++) requestTile(r.z, x, y);
}

/**
 * Draw high-resolution satellite tiles over the visible area once zoomed in. Tiles still downloading are
 * stood in for by an enlarged piece of a coarser tile already in the cache, so the view sharpens in place.
 * Call again when tiles arrive (see onTileLoad).
 */
export function drawDetail(canvas: HTMLCanvasElement, projection: GeoProjection, spherePath: string, view: View, w: number, h: number) {
  const dpr = canvas.width / w;
  const r = visibleTiles(projection, view, w, h, dpr);
  if (!r) return;
  const { z } = r;
  const toScreen = (lon: number, lat: number) => {
    const [px, py] = projection([lon, lat])!;
    return [px * view.k + view.x, py * view.k + view.y];
  };

  const ctx = canvas.getContext("2d")!;
  ctx.save();
  ctx.setTransform(dpr * view.k, 0, 0, dpr * view.k, dpr * view.x, dpr * view.y);
  ctx.clip(new Path2D(spherePath));
  for (let x = r.x0; x <= r.x1; x++) {
    for (let y = r.y0; y <= r.y1; y++) {
      let img = requestTile(z, x, y);
      let src = { sx: 0, sy: 0, size: 256 };
      for (let dz = 1; !img && dz <= 6 && z - dz >= 0; dz++) {
        img = ready(tiles.get(`${z - dz}/${x >> dz}/${y >> dz}`));
        const size = 256 >> dz;
        src = { sx: (x - ((x >> dz) << dz)) * size, sy: (y - ((y >> dz) << dz)) * size, size };
      }
      if (!img) continue;
      const [tlx, tly] = toScreen(tileLon(x, z), tileLat(y, z));
      const [trx, try_] = toScreen(tileLon(x + 1, z), tileLat(y, z));
      const [blx, bly] = toScreen(tileLon(x, z), tileLat(y + 1, z));
      ctx.setTransform(
        (dpr * (trx - tlx)) / 256,
        (dpr * (try_ - tly)) / 256,
        (dpr * (blx - tlx)) / 256,
        (dpr * (bly - tly)) / 256,
        dpr * tlx,
        dpr * tly,
      );
      // A hair of overlap hides seams between neighboring tiles.
      ctx.drawImage(img, src.sx, src.sy, src.size, src.size, -0.3, -0.3, 256.6, 256.6);
    }
  }
  ctx.restore();
}
