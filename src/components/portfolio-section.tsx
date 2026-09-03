import type { Project } from "@/content/projects";
import { slugify } from "@/components/project-tile";

function ProjectRow({ project }: { project: Project }) {
  return (
    <article
      id={slugify(project.title)}
      className="group flex scroll-mt-24 flex-col gap-3 border-b border-border py-4 last:border-b-0 sm:flex-row sm:items-center sm:gap-5"
    >
      <div className="h-20 w-full shrink-0 overflow-hidden rounded-md bg-muted sm:h-24 sm:w-48">
        <img
          src={project.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[12px] italic text-muted-foreground">{project.subtitle}</p>
        <h3 className="mt-0.5 font-display text-lg leading-snug text-foreground sm:text-xl">
          {project.title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2 sm:shrink-0 sm:justify-end">
        {project.links.map((l) => (
          <a
            key={l.url}
            href={l.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-primary/40 bg-sage px-3 py-1.5 text-[13px] font-medium text-forest transition-colors hover:border-primary hover:bg-sage/70"
          >
            {l.label} <span aria-hidden>→</span>
          </a>
        ))}
      </div>
    </article>
  );
}

export function PortfolioSection({
  id,
  title,
  blurb,
  projects,
}: {
  id: string;
  title: string;
  blurb?: string;
  projects: Project[];
}) {
  return (
    <section id={id} className="mb-14 scroll-mt-20">
      <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-border pb-2">
        <h2 className="font-body text-[13px] font-semibold uppercase tracking-[0.15em] text-foreground">
          {title}
        </h2>
        {blurb && <p className="text-[12px] italic text-muted-foreground">{blurb}</p>}
      </div>

      <div>
        {projects.map((project) => (
          <ProjectRow key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
