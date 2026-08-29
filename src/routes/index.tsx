import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/project-tile";
import { timeline, extracurriculars, leadership } from "@/content/timeline";
import { headshot } from "@/content/projects";
import { TimelineList } from "@/components/timeline-entry";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <PageShell>
      {/* Hero: portrait + intro */}
      <section className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(220px,300px)_1fr] md:gap-14">
        <div className="mx-auto w-full max-w-[300px] md:mx-0">
          <div className="overflow-hidden rounded-lg border border-border bg-muted shadow-[0_20px_60px_-30px_rgba(58,74,58,0.4)]">
            <img src={headshot} alt="Sarah Yribarren" className="aspect-[4/5] w-full object-cover" />
          </div>
        </div>

        <div>
          <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Hello, I'm
          </p>
          <h1 className="font-display text-5xl leading-[1.05] text-foreground md:text-6xl">
            Sarah Yribarren
          </h1>
          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-foreground/80">
            I'm a Chemical Engineer and Earth Systems Scientist working at the intersection of
            technological innovation and environmental systems, passionate about building
            towards a more sustainable, equitable, and just world.
          </p>
          <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-foreground/80">
            Welcome to my Stanford portfolio! View my past projects grouped by topic in the
            sidebar, and peruse a dynamic version of my resume below.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:sarahyribarren@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-[15px] font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/sarah-yribarren/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-[15px] font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              LinkedIn <span aria-hidden>→</span>
            </a>
            <a
              href="https://stanford.digication.com/sarahyribarren-eportfolio/home"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-[15px] font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Science Communication ePortfolio <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Leadership — compact, subtle */}
      <section className="mt-14">
        <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
          Leadership
        </p>
        <ul className="space-y-1 text-[12px] leading-relaxed text-muted-foreground">
          {leadership.map((l) => (
            <li key={l.org}>{l.role}, {l.org}</li>
          ))}
        </ul>
      </section>

      {/* Timeline */}
      <section className="mt-14">
        <div className="mb-6 flex items-baseline justify-between border-b border-border pb-3">
          <h2 className="font-display text-3xl text-foreground">Timeline</h2>
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            2020 → present
          </span>
        </div>

        <TimelineList entries={timeline} />
      </section>

      {/* Extracurriculars & Bonus Content */}
      <section className="mt-14">
        <div className="mb-6 flex items-baseline justify-between border-b border-border pb-3">
          <h2 className="font-display text-3xl text-foreground">Extracurriculars & Bonus Content</h2>
        </div>

        <TimelineList entries={extracurriculars} />
      </section>

      <footer className="mt-20 border-t border-border pt-6 text-[12px] text-muted-foreground">
        © 2026 Sarah Yribarren. All content and media on this site are protected.
      </footer>
    </PageShell>
  );
}
