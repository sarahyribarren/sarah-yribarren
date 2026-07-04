import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell, ProjectGrid, ProjectTile } from "@/components/project-tile";
import { physicsProjects } from "@/content/projects";

export const Route = createFileRoute("/physics")({
  head: () => ({
    meta: [
      { title: "Physics & Technology — Sarah Yribarren" },
      { name: "description", content: "Quantitative explorations of energy technology: flow batteries, biomass-derived graphite, lunar helium mining, Haber-Bosch, and PHB production." },
      { property: "og:title", content: "Physics & Technology" },
      { property: "og:description", content: "Quantitative explorations of cool tech — energy storage, materials, and process engineering." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="⚛️ Physics & Technology"
        title="Quantitative explorations of cool tech."
        blurb="Aqueous organic flow batteries, biomass-derived graphite, plastic production from waste biogas, helium mining on the Moon, and Haber-Bosch energy consumption."
      />
      <ProjectGrid>
        {physicsProjects.map((p) => (
          <ProjectTile key={p.title} project={p} />
        ))}
      </ProjectGrid>
    </PageShell>
  );
}