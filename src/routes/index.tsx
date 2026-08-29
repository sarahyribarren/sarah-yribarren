import { createFileRoute } from "@tanstack/react-router";
import { Award, User } from "lucide-react";
import { PageShell } from "@/components/project-tile";
import { timeline, extracurriculars } from "@/content/timeline";
import { headshot } from "@/content/projects";
import { TimelineList } from "@/components/timeline-entry";

function BadgeLegend() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-[oklch(0.72_0.1_85)] bg-[oklch(0.93_0.05_88)] px-2.5 py-1 text-[11px] font-medium leading-none text-[oklch(0.4_0.08_70)]">
        <Award className="h-3.5 w-3.5 shrink-0 text-[oklch(0.62_0.16_82)]" aria-hidden />
        Awards & Honors
      </span>
      <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-sage px-2.5 py-1 text-[11px] font-medium leading-none text-forest">
        <User className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
        Leadership
      </span>
    </div>
  );
}

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
          <p className="mt-2 text-center text-[11px] tracking-wide text-muted-foreground">
            ChemE BS · Earth Systems MS
          </p>
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
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-sage px-5 py-2.5 text-[15px] font-medium text-forest transition-colors duration-200 hover:border-primary/50 hover:bg-sage/70"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/sarah-yribarren/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-sage px-5 py-2.5 text-[15px] font-medium text-forest transition-colors duration-200 hover:border-primary/50 hover:bg-sage/70"
            >
              LinkedIn <span aria-hidden>→</span>
            </a>
            <a
              href="https://stanford.digication.com/sarahyribarren-eportfolio/home"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-sage px-5 py-2.5 text-[15px] font-medium text-forest transition-colors duration-200 hover:border-primary/50 hover:bg-sage/70"
            >
              Science Communication ePortfolio <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mt-14">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-border pb-3">
          <h2 className="font-display text-3xl text-foreground">Timeline</h2>
          <BadgeLegend />
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
