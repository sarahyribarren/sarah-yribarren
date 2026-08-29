import { Award, Calendar, MapPin, User } from "lucide-react";
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
  const hasLeadershipRow =
    (entry.leadershipRoles && entry.leadershipRoles.length > 0) ||
    (entry.mutedRoles && entry.mutedRoles.length > 0);

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

      {hasLeadershipRow && (
        <div className="mt-4 flex flex-wrap gap-2">
          {entry.leadershipRoles?.map((r, i) => (
            <span
              key={`lr-${i}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-[oklch(0.72_0.1_145)] bg-[oklch(0.93_0.05_148)] px-2.5 py-1 text-[11px] font-medium leading-none text-[oklch(0.4_0.08_130)]"
            >
              <User className="h-3.5 w-3.5 shrink-0 text-[oklch(0.62_0.16_145)]" aria-hidden />
              {r}
            </span>
          ))}
          {entry.mutedRoles?.map((r, i) => (
            <span
              key={`mr-${i}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-[oklch(0.72_0.01_260)] bg-[oklch(0.92_0.01_260)] px-2.5 py-1 text-[11px] font-medium leading-none text-[oklch(0.4_0.01_260)]"
            >
              <User className="h-3.5 w-3.5 shrink-0 text-[oklch(0.55_0.01_260)]" aria-hidden />
              {r}
            </span>
          ))}
        </div>
      )}

      {entry.awards && entry.awards.length > 0 && (
        <div className={`${hasLeadershipRow ? "mt-2" : "mt-4"} flex flex-wrap gap-2`}>
          {entry.awards.map((a, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 rounded-full border border-[oklch(0.72_0.1_85)] bg-[oklch(0.93_0.05_88)] px-2.5 py-1 text-[11px] font-medium leading-none text-[oklch(0.4_0.08_70)]"
            >
              <Award className="h-3.5 w-3.5 shrink-0 text-[oklch(0.62_0.16_82)]" aria-hidden />
              {a}
            </span>
          ))}
        </div>
      )}

      {entry.links && entry.links.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2 border-t border-border pt-4">
          {entry.links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-border bg-background/60 px-3 py-1 text-[12px] font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {l.label} <span aria-hidden>→</span>
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

function Banner({ text, color }: { text: string; color?: "default" | "green" }) {
  const isGreen = color === "green";
  return (
    <span
      className={
        isGreen
          ? "inline-block rounded-full border border-primary/40 bg-sage px-4 py-2 text-[13px] font-medium leading-snug text-forest"
          : "inline-block rounded-full border border-border bg-background px-4 py-2 text-[13px] italic leading-snug text-muted-foreground"
      }
    >
      {text}
    </span>
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
          const isMilestone = entry.kind === "milestone";

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
                  {isMilestone ? (
                    <Banner text={entry.banner ?? entry.role} color={entry.bannerColor} />
                  ) : (
                    <>
                      <MobilePhoto entry={entry} tiltStart={tiltStart} />
                      <Card entry={entry} />
                    </>
                  )}
                </div>

                {/* Desktop layout */}
                {isMilestone ? (
                  cardLeft ? (
                    <div className="relative hidden md:block md:pr-[calc(50%+2.5rem)]">
                      <span aria-hidden className="absolute right-1/2 top-[13px] h-px w-10 bg-border" />
                      <Banner text={entry.banner ?? entry.role} color={entry.bannerColor} />
                    </div>
                  ) : (
                    <div className="relative hidden md:block md:pl-[calc(50%+2.5rem)]">
                      <span aria-hidden className="absolute left-1/2 top-[13px] h-px w-10 bg-border" />
                      <Banner text={entry.banner ?? entry.role} color={entry.bannerColor} />
                    </div>
                  )
                ) : photos.length > 0 ? (
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
