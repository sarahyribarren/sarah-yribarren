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
            day. I am passionate about supply chains, manufacturing, agriculture, and designing
            processes and systems for a more sustainable, equitable, and just world.
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

      {/* Awards & Leadership — compact, subtle */}
      <section className="mt-14 flex flex-wrap gap-x-12 gap-y-4">
        <div className="max-w-md">
          <p className="mb-1.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
            Awards & Honors
          </p>
          <p className="text-[12px] leading-relaxed text-muted-foreground">
            {awards.join(" · ")}
          </p>
        </div>

        <div className="max-w-md">
          <p className="mb-1.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
            Leadership
          </p>
          <p className="text-[12px] leading-relaxed text-muted-foreground">
            {leadership.map((l) => `${l.role}, ${l.org}`).join(" · ")}
          </p>
        </div>
      </section>

      {/* Quote — a small afterthought before the timeline */}
      <p className="mt-14 text-center text-[13px] italic tracking-wide text-muted-foreground/60">
        "The best way to predict the future is to invent it."
      </p>

      {/* Timeline */}
      <section className="mt-10">
        <div className="mb-6 flex items-baseline justify-between border-b border-border pb-3">
          <h2 className="font-display text-3xl text-foreground">Timeline</h2>
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            2020 → present
          </span>
        </div>

        <p className="mb-10 max-w-3xl text-[14px] leading-relaxed text-foreground/80">
          My current position is as a Chemical Process Engineer at Red Metals, a copper
          refining startup in Charleston, South Carolina. As one of the first hires, I have had
          a lot of ownership, making important design decisions, setting up process models,
          procuring and commissioning equipment, and watching our factory go from empty to
          production-scale. Before starting this job in June 2026, I spent 7 months in South
          America between August 2025 and March 2026. After finishing my final Stanford course
          in Chile, I enrolled in a local Spanish school in Bolivia and volunteered for a
          renewable energy nonprofit in Peru, with some adventuring in-between. Before that, I
          was finishing my Master of Science in Earth Systems at Stanford, where I was a
          Teaching Assistant for three courses and took on interdisciplinary coursework and
          projects focused on technology supply chains. My Bachelor of Science was in Chemical
          Engineering where in my senior year I completed three substantial capstone projects.
          During my junior and senior years, I was a Lab Safety Officer in the teaching labs and
          refounded the Stanford ChemE Car team. I worked part-time during the junior year as a
          research assistant studying electrochemical separations. Before, I spent a summer as a
          research assistant on a catalytic nanoparticle synthesis project. After, I worked as a
          Process Optimization at an early-stage climate tech startup called Savor. My first
          scientific research position was in May 2020, where I took a gap year during the
          pandemic to work in a bioengineering lab on the Stanford campus.
        </p>

        <TimelineList entries={timeline} />
      </section>

      <footer className="mt-20 border-t border-border pt-6 text-[12px] text-muted-foreground">
        © 2026 Sarah Yribarren. All content and media on this site are protected.
      </footer>
    </PageShell>
  );
}
