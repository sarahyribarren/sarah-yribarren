import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell, ProjectGrid, ProjectTile } from "@/components/project-tile";
import { capstoneProjects } from "@/content/projects";

export const Route = createFileRoute("/capstone")({
  component: Page,
});

function Page() {
  return (
    <PageShell>
      <PageHeader
        title="Senior Capstone Projects"
        blurb="ChemE major: three quarters, three projects"
      />
      <ProjectGrid>
        {capstoneProjects.map((p) => (
          <ProjectTile key={p.title} project={p} />
        ))}
      </ProjectGrid>
    </PageShell>
  );
}