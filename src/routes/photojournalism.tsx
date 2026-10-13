import { createFileRoute } from "@tanstack/react-router";
import { StoryMap } from "@/components/story-map";
import { stories } from "@/content/stories";

export const Route = createFileRoute("/photojournalism")({
  component: Page,
});

function Page() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 md:px-8 md:py-12">
      <h1 className="mb-6 font-body text-[22px] font-medium tracking-tight text-foreground md:text-[26px]">shot by iPhone</h1>
      <StoryMap stories={stories} />
    </div>
  );
}
