import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell, CourseTile } from "@/components/project-tile";
import { courseworkCategories } from "@/content/coursework";

export const Route = createFileRoute("/coursework")({
  component: Page,
});

function Page() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const courseCount = courseworkCategories.reduce((sum, c) => sum + c.courses.length, 0);

  const allCourses = courseworkCategories.flatMap((category) =>
    category.courses.map((course) => ({ course, category: category.title })),
  );
  const visibleCourses = activeCategory
    ? allCourses.filter((c) => c.category === activeCategory)
    : allCourses;

  return (
    <PageShell>
      <PageHeader title="Stanford Coursework" />
      <p className="-mt-6 mb-10 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        {courseCount} courses, across {courseworkCategories.length} subject areas
      </p>

      <nav className="mb-12 flex flex-wrap gap-3">
        {courseworkCategories.map((category) => {
          const isActive = activeCategory === category.title;
          return (
            <button
              key={category.title}
              type="button"
              onClick={() => setActiveCategory(isActive ? null : category.title)}
              className={`rounded-full border px-4 py-2 text-[14px] font-medium transition-colors ${
                isActive
                  ? "border-primary bg-sage text-forest"
                  : "border-border bg-background text-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {category.title}
            </button>
          );
        })}
      </nav>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {visibleCourses.map(({ course }) => (
          <CourseTile key={course.code} course={course} />
        ))}
      </div>

      <footer className="mt-20 border-t border-border pt-6 text-[12px] text-muted-foreground">
        © 2026 Sarah Yribarren. All content and media on this site are protected.
      </footer>
    </PageShell>
  );
}
