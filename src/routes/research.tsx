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
        eyebrow="🧪 Engineering Research"
        title="Laboratory research with faculty mentors."
        blurb="Electrochemical stripping of ammonia, colloidal nanoparticle synthesis, and bacterial diagnostics for viruses."
      />
      <ProjectGrid>
        {researchProjects.map((p) => (
          <ProjectTile key={p.title} project={p} />
        ))}
      </ProjectGrid>
    </PageShell>
  );
}