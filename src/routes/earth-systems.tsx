import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell, ProjectGrid, ProjectTile } from "@/components/project-tile";
import { earthSystemsProjects } from "@/content/projects";

export const Route = createFileRoute("/earth-systems")({
  head: () => ({
    meta: [
      { title: "Earth System Science & Systems Thinking — Sarah Yribarren" },
      { name: "description", content: "Systems-level investigations: lithium scarcity in EVs, semiconductor supply chains, LCA of lightweight materials, and ocean acidification." },
      { property: "og:title", content: "Earth System Science & Systems Thinking" },
      { property: "og:description", content: "Systems-level investigations of technology and the environment." },
    ],
  }),
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