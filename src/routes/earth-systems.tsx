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
        eyebrow="🌎 Earth System Science & Systems Thinking"
        title="Systems-level investigations."
        blurb="Lithium scarcity in the EV industry, semiconductor supply chains, LCA of lightweight materials for EVs, and ocean acidification & climate change."
      />
      <ProjectGrid>
        {earthSystemsProjects.map((p) => (
          <ProjectTile key={p.title} project={p} />
        ))}
      </ProjectGrid>
    </PageShell>
  );
}