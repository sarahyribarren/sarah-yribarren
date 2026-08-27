import { Calendar, MapPin } from "lucide-react";
import type { TimelineCard as TimelineCardType, TimelineEntry } from "@/content/timeline";

const TILTS = ["rotate-[-3deg]", "rotate-[2.5deg]", "rotate-[-2deg]", "rotate-[3deg]"];

function PhotoPanel({ entry, tiltIndex, align }: { entry: TimelineCardType; tiltIndex: number; align: "start" | "end" }) {
  if (!entry.photo) return null;
  const tilt = TILTS[tiltIndex % TILTS.length];

  return (
    <div className={`hidden md:flex md:items-center ${align === "start" ? "md:justify-start" : "md:justify-end"} h-full`}>
      <div
        className={`group/photo w-[65%] max-w-[200px] cursor-default transition-transform duration-300 ease-out will-change-transform hover:z-20 hover:rotate-0 hover:scale-[1.6] ${tilt}`}
      >
        <div className="overflow-hidden rounded-sm border-[6px] border-card shadow-[0_10px_25px_-10px_rgba(58,74,58,0.4)] ring-1 ring-border transition-shadow duration-300 group-hover/photo:shadow-[0_25px_45px_-15px_rgba(58,74,58,0.5)]">
          <img
            src={entry.photo}
            alt={entry.role}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

function MobilePhoto({ entry, tiltIndex }: { entry: TimelineCardType; tiltIndex: number }) {
  if (!entry.photo) return null;
  const tilt = TILTS[tiltIndex % TILTS.length];
  return (
    <div className="mb-4 flex justify-center md:hidden">
      <div className={`w-[55%] max-w-[180px] transition-transform duration-300 hover:z-20 hover:rotate-0 hover:scale-[1.5] ${tilt}`}>
        <div className="overflow-hidden rounded-sm border-[6px] border-card shadow-[0_10px_25px_-10px_rgba(58,74,58,0.4)] ring-1 ring-border">
          <img
            src={entry.photo}
            alt={entry.role}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </div>
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

function RailDot({ dotClass, pulse }: { dotClass: string; pulse?: boolean }) {
  return (
    <span className="relative flex items-center justify-center">
      {pulse && (
        <span
          aria-hidden
          className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-primary/60"
        />
      )}
      <span className={`relative block rounded-full ring-4 ring-background ${dotClass}`} />
    </span>
  );
}

export function TimelineList({ entries }: { entries: TimelineEntry[] }) {
  let photoTiltIndex = 0;

  return (
    <div className="relative">
      {/* Center rail (desktop) / left rail (mobile) */}
      <div
        aria-hidden
        className="absolute top-0 bottom-0 w-px bg-border left-4 md:left-1/2 md:-translate-x-1/2"
      />

      <ol className="space-y-10 md:space-y-14">
        {entries.map((entry, i) => {
          if (entry.kind === "note") {
            return (
              <li key={i} className="relative flex justify-center py-1">
                <div className="rounded-xl border border-border/70 bg-background/80 px-6 py-3 text-center">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground/70">
                    {entry.dateRange}
                  </p>
                  <p className="mt-1 text-[11px] italic leading-snug text-muted-foreground">
                    {entry.lines[0]}
                    <br />
                    {entry.lines[1]}
                  </p>
                </div>
              </li>
            );
          }

          const hasPhoto = Boolean(entry.photo);
          const cardLeft = hasPhoto ? photoTiltIndex % 2 === 0 : false;
          const tiltIndex = photoTiltIndex;
          if (hasPhoto) photoTiltIndex += 1;

          const dotClass =
            entry.kind === "education"
              ? "h-3 w-3 bg-primary"
              : entry.kind === "credential"
                ? "h-2.5 w-2.5 bg-foreground/60"
                : "h-3 w-3 border border-primary bg-background";

          return (
            <li key={i} className="relative">
              {/* Dot + year on rail */}
              <div className="absolute left-4 top-6 z-10 -translate-x-1/2 md:left-1/2">
                <RailDot dotClass={dotClass} pulse={entry.current} />
              </div>
              <div className="absolute left-4 top-12 z-10 hidden -translate-x-1/2 md:block md:left-1/2">
                <span className="rounded-full border border-border bg-background px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {entry.year}
                </span>
              </div>

              {/* Connector stub: rail -> card (mobile) */}
              <span
                aria-hidden
                className="absolute left-4 top-[27px] hidden h-px w-8 bg-border max-md:block"
              />

              {/* Mobile stacked layout */}
              <div className="pl-12 md:hidden">
                <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {entry.year}
                </p>
                <MobilePhoto entry={entry} tiltIndex={tiltIndex} />
                <Card entry={entry} />
              </div>

              {/* Desktop layout */}
              {hasPhoto ? (
                <div className="hidden md:grid md:grid-cols-2 md:gap-10">
                  {cardLeft ? (
                    <>
                      <div className="relative pr-6">
                        <span
                          aria-hidden
                          className="absolute right-0 top-[27px] h-px w-6 bg-border"
                        />
                        <Card entry={entry} />
                      </div>
                      <div className="pl-6">
                        <PhotoPanel entry={entry} tiltIndex={tiltIndex} align="start" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="pr-6">
                        <PhotoPanel entry={entry} tiltIndex={tiltIndex} align="end" />
                      </div>
                      <div className="relative pl-6">
                        <span
                          aria-hidden
                          className="absolute left-0 top-[27px] h-px w-6 bg-border"
                        />
                        <Card entry={entry} />
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div className="relative hidden md:block md:pl-[calc(50%+2.5rem)]">
                  <span
                    aria-hidden
                    className="absolute left-1/2 top-[27px] h-px w-10 bg-border"
                  />
                  <Card entry={entry} />
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
