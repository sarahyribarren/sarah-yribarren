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
        </div>

        <div>
          <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Hello, I'm
          </p>
          <h1 className="font-display text-5xl leading-[1.05] text-foreground md:text-6xl">
            Sarah Yribarren
          </h1>
          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-foreground/80">
            I'm a chemical engineer and Earth systems scientist working at the intersection of
            technological innovation and environmental systems. I love being in dynamic and
            fast-moving environments where I have no choice but to learn something new every
            day. I am passionate about technology supply chains, manufacturing, and designing
            processes and systems towards a more sustainable, equitable, and just world.
          </p>
          <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-foreground/80">
            This website is a portfolio of my education at Stanford. Do not hesitate to reach
            out if you want to connect. Always open to new opportunities.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:sarahyribarren@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-[15px] font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              sarahyribarren@gmail.com
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
              NSC ePortfolio <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="mt-20 rounded-lg border border-primary/20 bg-secondary/50 px-6 py-10 text-center md:px-10">
        <p className="mx-auto max-w-2xl font-display text-2xl italic leading-snug text-foreground md:text-3xl">
          "The best way to predict the future is to invent it."
        </p>
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

      <footer className="mt-20 border-t border-border pt-6 text-[12px] text-muted-foreground">
        © 2026 Sarah Yribarren. All content and media on this site are protected.
      </footer>
    </PageShell>
  );
}
