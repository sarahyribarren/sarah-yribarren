import type { Course } from "@/content/coursework";

export function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
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