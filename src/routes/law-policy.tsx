import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell, ProjectGrid, ProjectTile } from "@/components/project-tile";
import { lawPolicyProjects } from "@/content/projects";

export const Route = createFileRoute("/law-policy")({
  head: () => ({
    meta: [
      { title: "Law, Policy & Environmental Justice — Sarah Yribarren" },
      { name: "description", content: "Interdisciplinary work on natural resources: boomtown economics, ESG law with geochemical fingerprinting, Rhyolite Ridge Li-B mine, sanitation access, and worker exploitation." },
      { property: "og:title", content: "Law, Policy & Environmental Justice" },
      { property: "og:description", content: "Interdisciplinary work at the intersection of natural resources, law, and equity." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="⚖️ Law, Policy & Environmental Justice"
        title="Interdisciplinary work on natural resources."
        blurb="Resource boomtown economics, geochemical fingerprinting for ESG law, an ESG plan for the Nevada Li-B mine, global sanitation & water access, and technology & worker exploitation."
      />
      <ProjectGrid>
        {lawPolicyProjects.map((p) => (
          <ProjectTile key={p.title} project={p} />
        ))}
      </ProjectGrid>
    </PageShell>
  );
}