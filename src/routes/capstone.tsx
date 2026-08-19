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
        eyebrow="⚙️ Senior Capstone Projects"
        title="ChemE major: three quarters, three projects."
        blurb="Direct lithium extraction plant design, desalination membranes from PET, and biofuel production in E. coli."
      />
      <ProjectGrid>
        {capstoneProjects.map((p) => (
          <ProjectTile key={p.title} project={p} />
        ))}
      </ProjectGrid>
    </PageShell>
  );
}