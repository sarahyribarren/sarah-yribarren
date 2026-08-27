import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell, ProjectGrid, ProjectTile } from "@/components/project-tile";
import { lawPolicyProjects } from "@/content/projects";

export const Route = createFileRoute("/law-policy")({
  component: Page,
});

function Page() {
  return (
    <PageShell>
      <PageHeader
        title="Law, Policy, and Environmental Justice"
        blurb="Interdisciplinary work on natural resources"
      />
      <ProjectGrid>
        {lawPolicyProjects.map((p) => (
          <ProjectTile key={p.title} project={p} />
        ))}
      </ProjectGrid>
    </PageShell>
  );
}