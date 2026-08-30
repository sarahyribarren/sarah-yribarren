import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell, CourseTile } from "@/components/project-tile";
import { courseworkCategories } from "@/content/coursework";

export const Route = createFileRoute("/coursework")({
  component: Page,
});

function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function Page() {
  const courseCount = courseworkCategories.reduce((sum, c) => sum + c.courses.length, 0);

  return (
    <PageShell>
      <PageHeader title="Stanford Coursework" />

      <p className="-mt-6 mb-8 text-[12px] uppercase tracking-[0.2em] text-muted-foreground/70">
        {courseCount} courses across {courseworkCategories.length} areas
      </p>

      <nav className="mb-12 flex flex-wrap gap-3">
        {courseworkCategories.map((category) => (
          <a
            key={category.title}
            href={`#${slugify(category.title)}`}
            className="rounded-full border border-border bg-background px-4 py-2 text-[14px] font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {category.title}
          </a>
        ))}
      </nav>

      <div className="space-y-12">
        {courseworkCategories.map((category) => (
          <section key={category.title} id={slugify(category.title)} className="scroll-mt-20">
            <h2 className="mb-5 font-display text-2xl text-foreground border-b border-border pb-2">
              {category.title}
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {category.courses.map((course) => (
                <CourseTile key={course.code} course={course} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <footer className="mt-20 border-t border-border pt-6 text-[12px] text-muted-foreground">
        © 2026 Sarah Yribarren. All content and media on this site are protected.
      </footer>
    </PageShell>
  );
}
