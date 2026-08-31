import type { Project } from "@/content/projects";
import type { Course } from "@/content/coursework";

export function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function ProjectTile({ project }: { project: Project }) {
  return (
    <article
      id={slugify(project.title)}
      className="group scroll-mt-24 flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-[0_10px_40px_-20px_rgba(58,74,58,0.35)]"
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={project.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-display text-xl leading-snug text-foreground">{project.title}</h3>
        <p className="text-[13px] italic text-muted-foreground">{project.subtitle}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.links.map((l) => (
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
      </div>
    </article>
  );
}

export function ProjectGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">{children}</div>
  );
}

export function CourseTile({ course }: { course: Course }) {
  return (
    <article className="rounded-md border border-border bg-card px-3.5 py-3">
      <h3 className="font-body text-[14px] font-medium leading-snug text-foreground">
        <a
          href={`https://explorecourses.stanford.edu/search?q=${course.code.replace(/\s+/g, "")}&academicYear=${course.academicYear ?? "20242025"}`}
          target="_blank"
          rel="noreferrer"
          className="underline decoration-border underline-offset-2 transition-colors hover:text-primary hover:decoration-primary"
        >
          {course.title}
        </a>
      </h3>
    </article>
  );
}

export function PageHeader({ title, blurb }: { title: string; blurb?: string }) {
  return (
    <header className="mb-10 max-w-3xl">
      <h1 className="font-display text-4xl leading-tight text-foreground md:text-5xl">{title}</h1>
      {blurb && <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{blurb}</p>}
    </header>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-6 py-12 md:px-10 md:py-16">{children}</div>;
}