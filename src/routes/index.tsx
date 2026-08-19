import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/project-tile";
import { timeline, awards, leadership } from "@/content/timeline";
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
          <p className="mt-4 text-center text-[11px] uppercase tracking-[0.18em] text-muted-foreground md:text-left">
            Stanford · ChemE '25 · Earth Systems '26
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
            I'm a chemical engineer and Earth systems researcher working at the intersection
            of technological innovation and environmental systems — from electrochemical
            wastewater treatment and desalination membranes to ESG law and semiconductor
            supply chains.
          </p>
          <p className="mt-4 max-w-xl text-[15px] italic leading-relaxed text-muted-foreground">
            This work is just the beginning. I'm seeking high-impact, mission-driven roles at
            the intersection of technology and environmental systems. Open to work.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="mt-20">
        <div className="mb-8 flex items-baseline justify-between border-b border-border pb-3">
          <h2 className="font-display text-3xl text-foreground">Timeline</h2>
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            2020 → present
          </span>
        </div>

        <TimelineList entries={timeline} />
      </section>

      {/* Awards */}
      <section className="mt-20 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-4 font-display text-2xl text-foreground">Awards & Honors</h2>
          <ul className="space-y-2 text-[14px] leading-relaxed text-foreground/85">
            {awards.map((a) => (
              <li key={a} className="flex gap-3">
                <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-display text-2xl text-foreground">Leadership</h2>
          <ul className="space-y-2 text-[14px] leading-relaxed text-foreground/85">
            {leadership.map((l) => (
              <li key={l.org}>
                <span className="font-medium text-foreground">{l.role}</span>
                <span className="text-muted-foreground"> — {l.org}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section className="mt-20 rounded-lg border border-border bg-card p-6 md:p-8">
        <h2 className="font-display text-2xl text-foreground">Get in touch</h2>
        <p className="mt-2 text-[14px] text-muted-foreground">
          The best ways to reach me or read more of my work.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <a
            href="mailto:sarahyribarren@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-[13px] font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            sarahyribarren@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/sarah-yribarren/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-[13px] font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            LinkedIn <span aria-hidden>→</span>
          </a>
          <a
            href="https://stanford.digication.com/sarahyribarren-eportfolio/home"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-[13px] font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            NSC ePortfolio <span aria-hidden>→</span>
          </a>
        </div>
      </section>

      <footer className="mt-20 border-t border-border pt-6 text-[12px] text-muted-foreground">
        © 2026 Sarah Yribarren. All content and media on this site are protected.
      </footer>
    </PageShell>
  );
}
