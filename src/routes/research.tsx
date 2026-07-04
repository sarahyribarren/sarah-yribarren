import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell, ProjectGrid, ProjectTile } from "@/components/project-tile";
import { researchProjects } from "@/content/projects";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Engineering Research — Sarah Yribarren" },
      { name: "description", content: "Laboratory research with faculty mentors: electrochemical ammonia stripping, colloidal nanoparticle synthesis, and bacterial diagnostics for viruses." },
      { property: "og:title", content: "Engineering Research" },
      { property: "og:description", content: "Lab research at Stanford: Tarpeh Lab, Cargnello Group, and iGEM." },
    ],
  }),
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