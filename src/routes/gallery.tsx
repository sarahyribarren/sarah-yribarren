import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/project-tile";
import { gallerySections, galleryIntro } from "@/content/gallery";

export const Route = createFileRoute("/gallery")({
  component: Page,
});

function Page() {
  return (
    <PageShell>
      <PageHeader title="Photo Gallery" blurb={galleryIntro} />

      <div className="space-y-16">
        {gallerySections.map((section) => (
          <section key={section.title}>
            {section.note && (
              <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                {section.note}
              </p>
            )}
            <h2 className="mb-6 font-display text-2xl text-foreground border-b border-border pb-2">
              {section.title}
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {section.photos.map((p, i) => (
                <figure key={i} className="flex flex-col">
                  <div className="overflow-hidden rounded-md border border-border bg-muted">
                    <img
                      src={p.image}
                      alt={p.caption}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="mt-2 text-[13px] italic leading-relaxed text-muted-foreground">
                    {p.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        ))}
      </div>

      <footer className="mt-20 border-t border-border pt-6 text-[12px] text-muted-foreground">
        © 2026 Sarah Yribarren. All content and media on this site are protected.
      </footer>
    </PageShell>
  );
}