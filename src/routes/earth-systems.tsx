import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell, ProjectGrid, ProjectTile } from "@/components/project-tile";
import { earthSystemsProjects } from "@/content/projects";

export const Route = createFileRoute("/earth-systems")({
  component: Page,
});

function Page() {
  return (
    <PageShell>
      <PageHeader
        title="Earth Systems Science & Systems Thinking"
        blurb="Systems-level investigations"
      />
      <ProjectGrid>
        {earthSystemsProjects.map((p) => (
          <ProjectTile key={p.title} project={p} />
        ))}
      </ProjectGrid>
    </PageShell>
  );
}