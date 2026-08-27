import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell, ProjectGrid, ProjectTile } from "@/components/project-tile";
import { researchProjects } from "@/content/projects";

export const Route = createFileRoute("/research")({
  component: Page,
});

function Page() {
  return (
    <PageShell>
      <PageHeader
        title="Engineering Research"
        blurb="Laboratory research with faculty mentors"
      />
      <ProjectGrid>
        {researchProjects.map((p) => (
          <ProjectTile key={p.title} project={p} />
        ))}
      </ProjectGrid>
    </PageShell>
  );
}