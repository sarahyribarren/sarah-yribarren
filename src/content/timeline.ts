export type TimelineEntry = {
  year: string;
  title: string;
  detail?: string;
  kind: "education" | "experience" | "credential";
};

export const timeline: TimelineEntry[] = [
  {
    year: "2026",
    title: "M.S. Earth Systems, Stanford University",
    detail: "Interdisciplinary emphasis on Technology Supply Chains.",
    kind: "education",
  },
  {
    year: "Jun – Sep 2026",
    title: "Chemical Engineer, Red Metals",
    detail:
      "Copper recycling startup in Charleston, SC. Designing unit processes and factory layout for a recycled copper wire → rod line; coordinating equipment setup and safe SOPs.",
    kind: "experience",
  },
  {
    year: "2026",
    title: "Certifications",
    detail: "Engineer in Training (CA NCEES) · DELE Spanish B2 · SAChE Certificate (AIChE).",
    kind: "credential",
  },
  {
    year: "Nov 2025 – Jan 2026",
    title: "Rural Electrification Engineer, WindAid Institute",
    detail:
      "Trujillo, Peru. Built and installed an off-grid wind turbine in a rural Andean community; led a battery redesign from VRLA to AGM cells.",
    kind: "experience",
  },
  {
    year: "2025",
    title: "B.S. Chemical Engineering, Stanford University",
    detail: "Notation in Science Communication, with Distinction.",
    kind: "education",
  },
  {
    year: "Sep 2024 – Jun 2025",
    title: "Graduate Teaching Assistant, Doerr School of Sustainability",
    detail:
      "ENERGY 102 (Fundamentals of Renewable Power), ESS 166/266 (Can Technology Save the World?), EARTHSYS 112/212 (Human Society & Environmental Change).",
    kind: "experience",
  },
  {
    year: "Spring 2024",
    title: "Direct Lithium Extraction — Senior Capstone",
    detail:
      "Full ChemE plant design recovering Li₂CO₃ from oil & gas produced water. AspenPlus simulation, TEA showed 2.8-yr breakeven and 392.9% ROI.",
    kind: "experience",
  },
  {
    year: "Nov 2023 – Mar 2024",
    title: "Polymer Membrane Synthesis — Senior Capstone",
    detail:
      "Greener synthesis of PET-based desalination membranes by replacing NMP with bio-solvent Cyrene; smaller pore size and higher Na⁺ rejection.",
    kind: "experience",
  },
  {
    year: "Sep – Dec 2023",
    title: "FAEE Biosynthesis — Senior Capstone",
    detail: "Enhancing biosynthesis and extraction of fatty acid ethyl esters in E. coli.",
    kind: "experience",
  },
  {
    year: "Jun – Sep 2023",
    title: "Process Optimization Intern, Savor Foods",
    detail:
      "Climate-tech startup, San Jose. Optimized industrial scale-up of paraffin oxidation for carbon-neutral fat production.",
    kind: "experience",
  },
  {
    year: "Sep 2022 – Dec 2023",
    title: "Electrochemical Separations Researcher, Tarpeh Lab",
    detail:
      "Pilot scale-up of an electrochemical stripping system separating ammonia from wastewater; hand-built cells, CV + FIA analysis.",
    kind: "experience",
  },
  {
    year: "Sep 2023 – Mar 2025",
    title: "Lab Safety Officer, Uytengsu Teaching Labs",
    detail: "Oversaw after-hours safety for undergraduate ChemE projects.",
    kind: "experience",
  },
  {
    year: "Jun – Sep 2022",
    title: "Nanoparticle Synthesis, Cargnello Group",
    detail: "Schlenk-line synthesis of high-entropy alloy nanoparticles for catalysis.",
    kind: "experience",
  },
  {
    year: "Jun 2022 – Jun 2023",
    title: "Resident Assistant, Ng Humanities House & SSEA",
    detail: "Community programming and mentorship for pre-frosh engineering students.",
    kind: "experience",
  },
  {
    year: "Apr 2020 – Jun 2021",
    title: "Bioengineering Researcher, iGEM + Stanford Medicine Catalyst",
    detail:
      "Engineered B. subtilis to fluoresce on a specific DNA sequence. iGEM Gold Medal · $40K Med Catalyst grant · provisional patent US63104140.",
    kind: "experience",
  },
];

export const awards = [
  "AIChE Distinguished Service Award",
  "Outstanding Service for the Earth Systems Program",
  "Cap & Gown Society Leader Award",
  "Alumni Association Award of Excellence",
  "SDSS Dean's Coterminal Fellowship",
  "Academic Distinction — Notation in Science Communication",
  "iGEM Gold Medal",
];

export const leadership = [
  { role: "President", org: "AIChE (American Institute of Chemical Engineers)" },
  { role: "Founder & President", org: "Chem-E-Car Team" },
  { role: "Captain & Coach", org: "Ethics Bowl" },
  { role: "President", org: "Stanford Practical Ethics Club (SPEC)" },
  { role: "Section Leader", org: "Leland Stanford Junior University Marching Band" },
];