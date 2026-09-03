import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/project-tile";
import { PortfolioSection } from "@/components/portfolio-section";
import {
  capstoneProjects,
  researchProjects,
  physicsProjects,
  earthSystemsProjects,
  lawPolicyProjects,
} from "@/content/projects";

export const Route = createFileRoute("/portfolio")({
  component: Page,
});

const sections = [
  { id: "capstone", emoji: "⚙️", title: "Senior Capstone Projects", blurb: "ChemE major: three quarters, three projects", projects: capstoneProjects },
  { id: "research", emoji: "🧪", title: "Engineering Research", blurb: "Laboratory research with faculty mentors", projects: researchProjects },
  { id: "physics", emoji: "⚛️", title: "Physics & Technology", blurb: "Quantitative explorations of cool tech", projects: physicsProjects },
  { id: "earth-systems", emoji: "🌎", title: "Earth Systems", blurb: "Systems-level investigations", projects: earthSystemsProjects },
  { id: "law-policy", emoji: "⚖️", title: "Law, Policy & Environmental Justice", blurb: "Interdisciplinary work on natural resources", projects: lawPolicyProjects },
];

function Page() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const visibleSections = activeSection ? sections.filter((s) => s.id === activeSection) : sections;
  const projectCount = sections.reduce((sum, s) => sum + s.projects.length, 0);

  return (
    <PageShell>
      <PageHeader title="Stanford Project Portfolio" />
      <p className="-mt-6 mb-10 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        {projectCount} projects, {sections.length} groups
      </p>

      <nav className="mb-12 flex flex-wrap gap-3">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              type="button"
              onClick={() => setActiveSection(isActive ? null : section.id)}
              className={`rounded-full border px-4 py-2 text-[14px] font-medium transition-colors ${
                isActive
                  ? "border-primary bg-sage text-forest"
                  : "border-border bg-background text-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {section.emoji} {section.title}
            </button>
          );
        })}
      </nav>

      {visibleSections.map((section) => (
        <PortfolioSection key={section.id} id={section.id} title={section.title} blurb={section.blurb} projects={section.projects} />
      ))}

      <footer className="mt-20 border-t border-border pt-6 text-[12px] text-muted-foreground">
        © 2026 Sarah Yribarren. All content and media on this site are protected.
      </footer>
    </PageShell>
  );
}
