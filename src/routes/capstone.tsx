import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell, ProjectGrid, ProjectTile } from "@/components/project-tile";
import { capstoneProjects } from "@/content/projects";

export const Route = createFileRoute("/capstone")({
  head: () => ({
    meta: [
      { title: "Senior Capstone Projects — Sarah Yribarren" },
      { name: "description", content: "Three ChemE senior capstone projects: FAEE biosynthesis in E. coli, greener PET-based desalination membranes, and lithium recovery from produced water." },
      { property: "og:title", content: "Senior Capstone Projects" },
      { property: "og:description", content: "Three ChemE senior capstone projects at Stanford: biosynthesis, membranes, and lithium recovery." },
    ],
  }),
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