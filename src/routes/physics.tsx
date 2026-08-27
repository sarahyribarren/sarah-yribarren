import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell, ProjectGrid, ProjectTile } from "@/components/project-tile";
import { physicsProjects } from "@/content/projects";

export const Route = createFileRoute("/physics")({
  component: Page,
});

function Page() {
  return (
    <PageShell>
      <PageHeader
        title="Physics & Technology"
        blurb="Quantitative explorations of cool tech"
      />
      <ProjectGrid>
        {physicsProjects.map((p) => (
          <ProjectTile key={p.title} project={p} />
        ))}
      </ProjectGrid>
    </PageShell>
  );
}