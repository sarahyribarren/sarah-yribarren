import img29 from "@/assets/photos/image29.jpg";
import img15 from "@/assets/photos/image15.jpg";
import img73 from "@/assets/photos/image73.jpg";
import img03 from "@/assets/photos/image03.jpg";
import img02 from "@/assets/photos/image02.jpg";
import img05 from "@/assets/photos/image05.jpg";
import img61 from "@/assets/photos/image61.jpg";
import img32 from "@/assets/photos/image32.jpg";
import img45 from "@/assets/photos/image45.jpg";
import img06 from "@/assets/photos/image06.jpg";

export type TimelineEntry = {
  year: string;
  org: string;
  role: string;
  location?: string;
  dateRange?: string;
  description: string;
  bullets: [string, string, string];
  photo?: string;
  kind: "education" | "experience" | "credential";
};

const TBD: [string, string, string] = ["[add bullet]", "[add bullet]", "[add bullet]"];

export const timeline: TimelineEntry[] = [
  {
    year: "2026",
    org: "Stanford University",
    role: "M.S. Earth Systems",
    location: "Stanford, CA",
    dateRange: "Sep 2025 – Jun 2026",
    description:
      "Interdisciplinary master's with an emphasis on Technology Supply Chains — bridging materials, policy, and industrial systems.",
    bullets: TBD,
    photo: img29,
    kind: "education",
  },
  {
    year: "2026",
    org: "Red Metals",
    role: "Chemical Engineer",
    location: "Charleston, SC",
    dateRange: "Jun – Sep 2026",
    description:
      "Copper recycling startup. Designing unit processes and factory layout for a recycled copper wire-to-rod line, and standing up safe SOPs for equipment commissioning.",
    bullets: TBD,
    kind: "experience",
  },
  {
    year: "2026",
    org: "Professional",
    role: "Certifications",
    dateRange: "2026",
    description:
      "Engineer in Training (CA NCEES) · DELE Spanish B2 · SAChE Safety Certificate (AIChE).",
    bullets: TBD,
    kind: "credential",
  },
  {
    year: "2025",
    org: "WindAid Institute",
    role: "Rural Electrification Engineer",
    location: "Trujillo, Peru",
    dateRange: "Nov 2025 – Jan 2026",
    description:
      "Built and installed an off-grid wind turbine for a rural Andean community, and led a battery redesign migrating the system from VRLA to AGM cells.",
    bullets: TBD,
    photo: img73,
    kind: "experience",
  },
  {
    year: "2025",
    org: "Stanford University",
    role: "B.S. Chemical Engineering",
    location: "Stanford, CA",
    dateRange: "Sep 2021 – Jun 2025",
    description:
      "Notation in Science Communication, graduated with Distinction. AIChE Distinguished Service Award.",
    bullets: TBD,
    photo: img15,
    kind: "education",
  },
  {
    year: "2024",
    org: "Doerr School of Sustainability",
    role: "Graduate Teaching Assistant",
    location: "Stanford, CA",
    dateRange: "Sep 2024 – Jun 2025",
    description:
      "TA'd three courses across renewable power, climate technology, and human-environment systems — ENERGY 102, ESS 166/266, and EARTHSYS 112/212.",
    bullets: TBD,
    photo: img06,
    kind: "experience",
  },
  {
    year: "2024",
    org: "Senior Capstone",
    role: "Direct Lithium Extraction Plant Design",
    dateRange: "Spring 2024",
    description:
      "Full ChemE plant design recovering Li₂CO₃ from oil & gas produced water in AspenPlus; techno-economic analysis showed a 2.8-year breakeven and 392.9% ROI.",
    bullets: TBD,
    photo: img03,
    kind: "experience",
  },
  {
    year: "2024",
    org: "Senior Capstone",
    role: "Greener Desalination Membranes",
    dateRange: "Nov 2023 – Mar 2024",
    description:
      "Synthesized PET-based nanofiltration membranes using bio-solvent Cyrene in place of NMP, achieving smaller pore size and higher Na⁺ rejection.",
    bullets: TBD,
    photo: img02,
    kind: "experience",
  },
  {
    year: "2023",
    org: "Senior Capstone",
    role: "FAEE Biosynthesis in E. coli",
    dateRange: "Sep – Dec 2023",
    description:
      "Enhanced biosynthesis and extraction of fatty acid ethyl esters in engineered E. coli as a renewable-fuel precursor pathway.",
    bullets: TBD,
    photo: img05,
    kind: "experience",
  },
  {
    year: "2023",
    org: "Savor Foods",
    role: "Process Optimization Intern",
    location: "San Jose, CA",
    dateRange: "Jun – Sep 2023",
    description:
      "Climate-tech startup making carbon-neutral fats. Optimized the industrial scale-up of paraffin oxidation to improve yield and safety at pilot scale.",
    bullets: TBD,
    kind: "experience",
  },
  {
    year: "2023",
    org: "Tarpeh Lab, Stanford",
    role: "Electrochemical Separations Researcher",
    dateRange: "Sep 2022 – Dec 2023",
    description:
      "Piloted a hand-built electrochemical stripping system to separate ammonia from wastewater, with CV and FIA analysis for cell performance.",
    bullets: TBD,
    photo: img61,
    kind: "experience",
  },
  {
    year: "2023",
    org: "Uytengsu Teaching Labs",
    role: "Lab Safety Officer",
    location: "Stanford, CA",
    dateRange: "Sep 2023 – Mar 2025",
    description:
      "Oversaw after-hours lab safety for undergraduate ChemE senior projects across three quarters of capstone work.",
    bullets: TBD,
    kind: "experience",
  },
  {
    year: "2022",
    org: "Cargnello Group, Stanford",
    role: "Nanoparticle Synthesis Researcher",
    dateRange: "Jun – Sep 2022",
    description:
      "Schlenk-line synthesis and washing of high-entropy alloy nanoparticles for heterogeneous catalysis studies.",
    bullets: TBD,
    photo: img32,
    kind: "experience",
  },
  {
    year: "2022",
    org: "Ng Humanities House & SSEA",
    role: "Resident Assistant",
    location: "Stanford, CA",
    dateRange: "Jun 2022 – Jun 2023",
    description:
      "Community programming, mentorship, and on-call support for pre-frosh engineering students and a humanities-focused dorm.",
    bullets: TBD,
    kind: "experience",
  },
  {
    year: "2020",
    org: "iGEM + Stanford Med Catalyst",
    role: "Bioengineering Researcher",
    dateRange: "Apr 2020 – Jun 2021",
    description:
      "Engineered B. subtilis to fluoresce upon detecting a specific DNA sequence. Earned an iGEM Gold Medal, a $40K Med Catalyst grant, and provisional patent US63104140.",
    bullets: TBD,
    photo: img45,
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