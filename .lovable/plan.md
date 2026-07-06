# Timeline redesign — centered zig-zag with paired photos

## What changes

Replace the current left-rail timeline on `/` with a **centered vertical rail** where each entry is a two-column row: a **card on one side** and a **photo panel on the other**, alternating (zig-zag) down the page. The card is the focus, the photo is roughly equal visual weight (not a small thumbnail), and a dot on the center rail marks each entry with the year label just under it.

## Row anatomy

```text
     ┌──────────────┐    │
     │   PHOTO      │    ●  2025
     │              │    │      ┌─────────────────────────┐
     │              │    │      │ 🏛  Stanford University │
     └──────────────┘    │      │ 📅  Sep 2024 – Jun 2025 │
                         │      │ ─────────────────────── │
                         │      │  Graduate Teaching Assistant
                         │      │  2–3 line description…
                         │      │  • [add bullet]
                         │      │  • [add bullet]
                         │      │  • [add bullet]
                         │      └─────────────────────────┘
```

- **Card**: small eyebrow row (org icon + org name • date • location), sage hairline, `font-display` title, 2–3 line description in body, then 3 bullets in a smaller font (~13px) with sage dots. Rounded, cream card on sand background, soft sage-shadow on hover.
- **Photo panel**: same height as the card, rounded, sage border, `object-cover`. When no matching gallery photo exists, render a **sage-toned abstract placeholder** — a soft `linear-gradient` on `--sage`/`--sand` with a faint noise/grain overlay and a tiny italic "photo coming soon" label bottom-right (kept quiet).
- **Center rail**: 1px `--hairline` line, filled sage dot for education, outlined dot for experience, small dot for credential. Year sits just under the dot in small caps.
- **Mobile (<768px)**: rail slides to the left, photo stacks on top of card, no alternation.

## Content model

Extend `src/content/timeline.ts`:

```ts
type TimelineEntry = {
  year: string;
  org: string;              // "Stanford University"
  role: string;             // "Graduate Teaching Assistant"
  location?: string;        // "Stanford, CA"
  dateRange?: string;       // "Sep 2024 – Jun 2025"
  description: string;      // 2–3 lines, prose
  bullets: [string, string, string];  // exactly 3
  photo?: string;           // import from src/assets/photos/*
  kind: "education" | "experience" | "credential";
};
```

Populate `description` from the CV summary I already have. Populate `bullets` with `"[add bullet]"` × 3 for every entry so it's obvious what to fill in later. Keep the existing 15 entries; add matching gallery photos where the connection is clear (iGEM, WindAid, Tarpeh lab, Chem-E-Car, LSJUMB, teaching, etc.), placeholder otherwise.

## Files touched

- `src/content/timeline.ts` — new schema, populated data.
- `src/components/timeline-entry.tsx` — new component; owns the two-column row, alternation via `index % 2`, mobile stacking, placeholder photo panel.
- `src/routes/index.tsx` — replace the current `<ol>` block with the new component; keep the section header ("Timeline · 2020 → present") and everything else on the page.
- `src/styles.css` — add a `.photo-placeholder` utility (sage gradient + grain).

## What stays the same

Sidebar, palette, fonts, hero, awards, leadership, contact, all sub-routes, gallery — untouched. Only the About-page timeline changes.

## Ideas I'd suggest on top (not building unless you say yes)

1. **Filter chips** above the timeline — All / Education / Experience / Leadership — subtle toggle that fades rows in/out.
2. **Sticky year gutter** — as you scroll, the currently-visible year floats in the top-left of the rail. Very Tom Critchlow.
3. **"Now" pill** at the top of the rail for anything currently active (Red Metals, Stanford M.S.), making it feel alive rather than archival.
4. **Hover-to-expand card** — collapsed shows description only; hover/tap expands to reveal bullets. Keeps the page shorter.

Tell me which (if any) of those four you want and I'll fold them in during the build.
