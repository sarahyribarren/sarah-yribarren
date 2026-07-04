
# Sarah Yribarren — Personal Site Remake

A sidebar-driven personal website inspired by Tom Critchlow's notebook layout, with an "About" landing page featuring a portrait + resume-style timeline (Pranathy-inspired), and sidebar sections that swap the main window to your existing project tiles.

## Visual direction — Sage & Sand

- Background: `#f5f0e8` (warm cream)
- Surface / card: `#faf7f0`
- Muted panel: `#dce5d4` (soft sage)
- Accent: `#7d9b76` (sage green)
- Deep accent: `#3a4a3a` (forest, used for text + timeline rail)
- Hairline: `#c9d1c1`

Typography (loaded via `<link>` in `__root.tsx`, per Tailwind v4 rules):
- Display: **Instrument Serif** — elegant editorial headings
- Body: **Inter Tight** — clean neutral
- Labels / years: body font, tracked wide, small caps feel

Motif: hairline rules, generous whitespace, retained emoji glyphs (⚙️ 🧪 ⚛️ 🌎 ⚖️ 📸), subtle fade-in on route change.

## Layout

```text
┌───────────────┬──────────────────────────────────────┐
│ SIDEBAR       │ MAIN                                 │
│               │                                      │
│ Sarah         │  ┌────────┐  Timeline                │
│ Yribarren     │  │ PHOTO  │  ● 2026 — MS Earth Sys   │
│ small tagline │  │        │  │       (Stanford)      │
│               │  └────────┘  ● 2026 — Red Metals     │
│ ─── nav ───   │  Intro copy   │  Chemical Engineer   │
│ About         │               ● 2025–26 — WindAid    │
│ Senior        │               ● 2025 — BS ChemE      │
│  Capstone     │               ● ...                  │
│ Engineering   │                                      │
│  Research     │  Awards & Honors                     │
│ Physics &     │                                      │
│  Technology   │  Clubs & Leadership                  │
│ Earth Systems │                                      │
│ Law, Policy   │  Contact: email · LinkedIn · NSC     │
│  & EJ         │           ePortfolio                 │
│ Photo Gallery │                                      │
└───────────────┴──────────────────────────────────────┘
```

Mobile: sidebar collapses to a hamburger via `SidebarTrigger` in a slim top bar.

## Routes

- `/` — About + timeline + awards + leadership + contact
- `/capstone` — Senior Capstone Projects (3 tiles)
- `/research` — Engineering Research (3 tiles)
- `/physics` — Physics & Technology (5 tiles)
- `/earth-systems` — Earth System Science & Systems Thinking (4 tiles)
- `/law-policy` — Law, Policy & Environmental Justice (5 tiles)
- `/gallery` — Photo Gallery grouped by section

Every route sets its own `head()` (title, description, og:title, og:description).

## Landing page — timeline entries (from your CV)

Two rails on one vertical timeline: **Education** dots (sage-filled) interleaved with **Experience** dots (sage-outlined). Years in small caps on the left, title + one-line summary on the right.

- **2026** — MS, Earth Systems, Stanford *(Interdisciplinary emphasis: Technology Supply Chains)*
- **Jun–Sep 2026** — Chemical Engineer, Red Metals (Copper Recycling Startup, Charleston SC)
- **2026** — Engineer in Training (CA NCEES) · DELE Spanish B2 · SAChE Certificate
- **Nov 2025 – Jan 2026** — Rural Electrification Project Engineer, WindAid Institute (Trujillo, Peru)
- **2025** — BS, Chemical Engineering, Stanford *(Notation in Science Communication, with Distinction)*
- **Sep 2024 – Jun 2025** — Graduate TA, Stanford Doerr School of Sustainability (ENERGY 102, ESS 166/266, EARTHSYS 112/212)
- **Spring 2024** — Direct Lithium Extraction — Senior Capstone (ChemE Plant Design)
- **Nov 2023 – Mar 2024** — Polymer Membrane Synthesis — Senior Capstone (PET → desalination membranes with Cyrene)
- **Sep – Dec 2023** — FAEE Biosynthesis — Senior Capstone
- **Jun – Sep 2023** — Process Optimization Intern, Savor Foods (Climate Tech, San Jose CA)
- **Sep 2022 – Dec 2023** — Electrochemical Separations Researcher, Tarpeh Lab
- **Sep 2023 – Mar 2025** — Lab Safety Officer / "Lifeguard", Uytengsu Teaching Labs
- **Jun – Sep 2022** — Nanoparticle Synthesis, Cargnello Group (Schlenk line HEA synthesis)
- **Jun 2022 – Jun 2023** — Resident Assistant, Ng Humanities House & SSEA
- **Apr 2020 – Jun 2021** — Bioengineering Researcher, Stanford iGEM + Medicine Catalyst *(iGEM Gold Medal · $40K Med Catalyst grant · provisional patent US63104140)*

### Awards & Honors (compact block below timeline)
AIChE Distinguished Service Award · Outstanding Service for the Earth Systems Dept. · Cap & Gown Leader Award · Alumni Association Award of Excellence · SDSS Dean's Coterminal Fellowship · iGEM Gold Medal

### Clubs & Leadership (chip row)
AIChE — President · Chem-E-Car Team — Founder & President · Ethics Bowl — Captain & Coach · Practical Ethics Club (SPEC) — President · LSJUMB — Section Leader

### Contact
sarahyribarren@gmail.com · LinkedIn · NSC ePortfolio

## Project pages

Each pulls from `src/content/projects.ts` and renders a `<ProjectTile />` grid: hero image, title, course/lab subtitle, link chips. Content and links preserved verbatim from your Carrd (Google Drive PDFs, iGEM, Tableau, Kumu, YouTube, `large.stanford.edu`, etc.).

## Photo gallery page

Masonry grouped grid with section headings: 🎓 Graduation, 🎷 LSJUMB, 🗣️ Ethics Bowl, 🧪 AIChE, 🚗 Chem-E-Car, capstone lab work (♻️ 🧫), Tarpeh Lab, Cargnello Group, iGEM, 🇨🇱 Chile, 🇧🇴 Bolivia, 🇵🇪 Peru, bonus abroad, ⚛️ Understand Energy field trips, 🌽 FUEL, 💼 Part-time jobs. Captions preserved verbatim.

## Technical

- `src/components/app-sidebar.tsx` — shadcn `Sidebar` primitives + `Link` + `useRouterState` for active state.
- `__root.tsx` — wrap `<Outlet />` in `SidebarProvider`, slim top bar with `SidebarTrigger` for mobile, fonts + real head metadata (replace "Lovable App").
- New route files: rewrite `index.tsx` as the About page; add `capstone.tsx`, `research.tsx`, `physics.tsx`, `earth-systems.tsx`, `law-policy.tsx`, `gallery.tsx`.
- Content in typed TS files:
  - `src/content/timeline.ts` — entries above
  - `src/content/projects.ts` — 5 section arrays of project tiles
  - `src/content/gallery.ts` — grouped photo entries
  - `src/content/about.ts` — awards, leadership, contact
- Design tokens in `src/styles.css` under `@theme inline` (oklch values) + `--font-display`, `--font-body`. Fonts loaded via `<link>` in root head.
- Images: download the ~40 photos from your Carrd (`sarahyribarren.carrd.co/assets/images/imageNN.jpg`) into `src/assets/` and reference directly (small enough for repo). Headshot `image01.jpg` on the About page.
- Small motion: CSS-only fade-in on route change; no extra deps.

## Not doing

- No backend / Cloud (fully static content).
- No CMS — content is typed TS, trivial to edit later.
- Keeping every external link exactly as-is.
