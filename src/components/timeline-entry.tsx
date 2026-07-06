import { Building2, Calendar, MapPin, GraduationCap, Award } from "lucide-react";
import type { TimelineEntry } from "@/content/timeline";

function PhotoPanel({ entry }: { entry: TimelineEntry }) {
  if (entry.photo) {
    return (
      <div className="overflow-hidden rounded-lg border border-border shadow-[0_20px_60px_-30px_rgba(58,74,58,0.35)]">
        <img
          src={entry.photo}
          alt={`${entry.role} — ${entry.org}`}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover"
        />
      </div>
    );
  }
  return (
    <div className="photo-placeholder aspect-[4/3] w-full rounded-lg border border-border shadow-[0_20px_60px_-30px_rgba(58,74,58,0.25)]">
      <div className="photo-placeholder-grain" aria-hidden />
      <div className="absolute inset-0 flex items-end justify-end p-3">
        <span className="text-[10px] italic tracking-wide text-forest/50">photo coming soon</span>
      </div>
    </div>
  );
}

function Card({ entry }: { entry: TimelineEntry }) {
  const OrgIcon = entry.kind === "education" ? GraduationCap : entry.kind === "credential" ? Award : Building2;
  return (
    <article className="group rounded-lg border border-border bg-card p-6 transition-shadow duration-300 hover:shadow-[0_20px_50px_-25px_rgba(58,74,58,0.4)]">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-muted-foreground">
        <span className="inline-flex items-center gap-1.5 font-medium text-primary">
          <OrgIcon className="h-3.5 w-3.5" aria-hidden />
          {entry.org}
        </span>
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

      <p className="mt-2 text-[14px] leading-relaxed text-foreground/80">{entry.description}</p>

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

export function TimelineList({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="relative">
      {/* Center rail (desktop) / left rail (mobile) */}
      <div
        aria-hidden
        className="absolute top-0 bottom-0 w-px bg-border left-4 md:left-1/2 md:-translate-x-1/2"
      />

      <ol className="space-y-14 md:space-y-20">
        {entries.map((entry, i) => {
          const cardLeft = i % 2 === 0;
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
                <span className={`block rounded-full ring-4 ring-background ${dotClass}`} />
              </div>
              <div className="absolute left-4 top-12 z-10 hidden -translate-x-1/2 md:block md:left-1/2">
                <span className="rounded-full border border-border bg-background px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {entry.year}
                </span>
              </div>

              {/* Mobile stacked layout */}
              <div className="pl-12 md:hidden">
                <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {entry.year}
                </p>
                <div className="mb-4">
                  <PhotoPanel entry={entry} />
                </div>
                <Card entry={entry} />
              </div>

              {/* Desktop zig-zag layout */}
              <div className="hidden md:grid md:grid-cols-2 md:gap-16">
                {cardLeft ? (
                  <>
                    <div className="pr-4">
                      <Card entry={entry} />
                    </div>
                    <div className="pl-4">
                      <PhotoPanel entry={entry} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="pr-4">
                      <PhotoPanel entry={entry} />
                    </div>
                    <div className="pl-4">
                      <Card entry={entry} />
                    </div>
                  </>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}