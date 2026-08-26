import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell, CourseTile } from "@/components/project-tile";
import { courseworkCategories } from "@/content/coursework";

export const Route = createFileRoute("/coursework")({
  component: Page,
});

function Page() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="📝 Coursework"
        title="Four years, one degree map."
        blurb="Courses from my B.S. in Chemical Engineering and M.S. in Earth Systems, grouped by area."
      />

      <div className="space-y-14">
        {courseworkCategories.map((category) => (
          <section key={category.title}>
            <h2 className="mb-6 font-display text-2xl text-foreground border-b border-border pb-2">
              {category.title}
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
