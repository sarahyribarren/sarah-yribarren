import { Award, Calendar, MapPin } from "lucide-react";
import type { TimelineCard as TimelineCardType, TimelineEntry } from "@/content/timeline";

const TILTS = ["rotate-[-3deg]", "rotate-[2.5deg]", "rotate-[-2deg]", "rotate-[3deg]"];

function PhotoStack({
  photos,
  tiltStart,
  size,
}: {
  photos: string[];
  tiltStart: number;
  size: number;
}) {
  return (
    <div className="relative flex items-center">
      {photos.map((src, i) => {
        const tilt = TILTS[(tiltStart + i) % TILTS.length];
        return (
          <div
            key={src + i}
            style={{ width: size, marginLeft: i === 0 ? 0 : -size * 0.35 }}
            className={`group/photo relative shrink-0 cursor-default transition-transform duration-300 ease-out will-change-transform hover:z-30 hover:rotate-0 hover:scale-[1.6] ${tilt}`}
          >
            <div className="overflow-hidden rounded-sm border-[6px] border-card shadow-[0_10px_25px_-10px_rgba(58,74,58,0.4)] ring-1 ring-border transition-shadow duration-300 group-hover/photo:shadow-[0_25px_45px_-15px_rgba(58,74,58,0.5)]">
              <img src={src} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function PhotoPanel({ entry, tiltStart, align }: { entry: TimelineCardType; tiltStart: number; align: "start" | "end" }) {
  const photos = entry.photos ?? [];
  if (photos.length === 0) return null;

  const size = photos.length > 2 ? 160 : photos.length > 1 ? 185 : 235;

  return (
    <div className={`hidden md:flex md:items-center ${align === "start" ? "md:justify-start" : "md:justify-end"} h-full`}>
      <PhotoStack photos={photos} tiltStart={tiltStart} size={size} />
    </div>
  );
}

function MobilePhoto({ entry, tiltStart }: { entry: TimelineCardType; tiltStart: number }) {
  const photos = entry.photos ?? [];
  if (photos.length === 0) return null;
  const size = photos.length > 2 ? 110 : photos.length > 1 ? 150 : 195;
  return (
    <div className="mb-4 flex justify-center md:hidden">
      <PhotoStack photos={photos} tiltStart={tiltStart} size={size} />
    </div>
  );
}

function Card({ entry }: { entry: TimelineCardType }) {
  return (
    <article className="group rounded-lg border border-border bg-card p-6 transition-shadow duration-300 hover:shadow-[0_20px_50px_-25px_rgba(58,74,58,0.4)]">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-muted-foreground">
        {entry.dateRange && (
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" aria-hidden />
            {entry.dateRange}
          </span>
        )}
        {entry.location && (
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" aria-hidden />
            {entry.location}
          </span>
        )}
      </div>

      <h3 className="mt-3 font-display text-2xl leading-tight text-foreground">{entry.role}</h3>

      {entry.awards && entry.awards.length > 0 && (
        <div className="mt-3 flex flex-col gap-1.5 rounded-md border border-amber-300/70 bg-amber-50 px-3 py-2">
          {entry.awards.map((a, i) => (
            <div key={i} className="flex items-start gap-2 text-[12px] font-medium leading-snug text-amber-900">
              <Award className="mt-[1px] h-3.5 w-3.5 shrink-0 text-amber-500" aria-hidden />
              <span>{a}</span>
            </div>
          ))}
        </div>
      )}

      {entry.description && (
        <p className="mt-2 text-[14px] leading-relaxed text-foreground/80">{entry.description}</p>
      )}

      <ul className="mt-4 space-y-1.5">
        {entry.bullets.map((b, i) => (
          <li key={i} className="flex gap-2.5 text-[12.5px] leading-relaxed text-foreground/70">
            <span aria-hidden className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-primary" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function RailDot({ blink }: { blink?: boolean }) {
  return (
    <span className="relative flex h-3 w-3">
      {blink && (
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-90" />
      )}
      <span className="relative inline-flex h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
    </span>
  );
}

export function TimelineList({ entries }: { entries: TimelineEntry[] }) {
  let tiltCounter = 0;

  return (
    <div className="relative">
      {/* Center rail (desktop) / left rail (mobile) */}
      <div
        aria-hidden
        className="absolute top-0 bottom-0 w-px bg-border left-4 md:left-1/2 md:-translate-x-1/2"
      />

      <ol className="space-y-10 md:space-y-14">
        {entries.map((entry, i) => {
          const photos = entry.photos ?? [];
          const tiltStart = tiltCounter;
          tiltCounter += Math.max(photos.length, 0);
          const cardLeft = entry.side === "left";

          return (
            <li key={i} className="relative">
              <div className="relative">
                {/* Dot on rail */}
                <div className="absolute left-4 top-6 z-10 -translate-x-1/2 md:left-1/2">
                  <RailDot blink={entry.current} />
                </div>

                {/* Connector stub: rail -> card (mobile) */}
                <span aria-hidden className="absolute left-4 top-[27px] hidden h-px w-8 bg-border max-md:block" />

                {/* Mobile stacked layout */}
                <div className="pl-12 md:hidden">
                  <MobilePhoto entry={entry} tiltStart={tiltStart} />
                  <Card entry={entry} />
                </div>

                {/* Desktop layout */}
                {photos.length > 0 ? (
                  <div className="hidden md:grid md:grid-cols-2 md:gap-10">
                    {cardLeft ? (
                      <>
                        <div className="relative pr-6">
                          <span aria-hidden className="absolute right-0 top-[27px] h-px w-6 bg-border" />
                          <Card entry={entry} />
                        </div>
                        <div className="pl-6">
                          <PhotoPanel entry={entry} tiltStart={tiltStart} align="start" />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="pr-6">
                          <PhotoPanel entry={entry} tiltStart={tiltStart} align="end" />
                        </div>
                        <div className="relative pl-6">
                          <span aria-hidden className="absolute left-0 top-[27px] h-px w-6 bg-border" />
                          <Card entry={entry} />
                        </div>
                      </>
                    )}
                  </div>
                ) : cardLeft ? (
                  <div className="relative hidden md:block md:pr-[calc(50%+2.5rem)]">
                    <span aria-hidden className="absolute right-1/2 top-[27px] h-px w-10 bg-border" />
                    <Card entry={entry} />
                  </div>
                ) : (
                  <div className="relative hidden md:block md:pl-[calc(50%+2.5rem)]">
                    <span aria-hidden className="absolute left-1/2 top-[27px] h-px w-10 bg-border" />
                    <Card entry={entry} />
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
