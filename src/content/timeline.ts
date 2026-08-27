import img04 from "@/assets/photos/image04.jpg";
import img15 from "@/assets/photos/image15.jpg";
import img23 from "@/assets/photos/image23.jpg";
import img28 from "@/assets/photos/image28.jpg";
import img29 from "@/assets/photos/image29.jpg";
import img31 from "@/assets/photos/image31.jpg";
import img34 from "@/assets/photos/image34.jpg";
import img38 from "@/assets/photos/image38.jpg";
import img39 from "@/assets/photos/image39.jpg";
import img42 from "@/assets/photos/image42.jpg";
import img43 from "@/assets/photos/image43.jpg";
import img45 from "@/assets/photos/image45.jpg";
import img49 from "@/assets/photos/image49.jpg";
import img57 from "@/assets/photos/image57.jpg";
import img58 from "@/assets/photos/image58.jpg";
import img59 from "@/assets/photos/image59.jpg";
import img60 from "@/assets/photos/image60.jpg";
import img61 from "@/assets/photos/image61.jpg";
import img62 from "@/assets/photos/image62.jpg";
import img63 from "@/assets/photos/image63.jpg";
import img67 from "@/assets/photos/image67.jpg";
import img70 from "@/assets/photos/image70.jpg";
import img71 from "@/assets/photos/image71.jpg";
import img72 from "@/assets/photos/image72.jpg";
import img73 from "@/assets/photos/image73.jpg";
import img74 from "@/assets/photos/image74.jpg";
import img76 from "@/assets/photos/image76.jpg";
import img81 from "@/assets/photos/image81.jpg";
import img82 from "@/assets/photos/image82.jpg";
import img83 from "@/assets/photos/image83.jpg";
import img84 from "@/assets/photos/image84.jpg";
import img86 from "@/assets/photos/image86.jpg";
import img87 from "@/assets/photos/image87.jpg";
import img88 from "@/assets/photos/image88.jpg";
import img89 from "@/assets/photos/image89.jpg";
import img90 from "@/assets/photos/image90.jpg";

export type TimelineCard = {
  kind: "education" | "experience" | "credential";
  side: "left" | "right";
  year: string;
  role: string;
  location?: string;
  dateRange?: string;
  description?: string;
  bullets: string[];
  photos?: string[];
  current?: boolean;
};

export type TimelineEntry = TimelineCard;

export const timeline: TimelineEntry[] = [
  {
    kind: "experience",
    side: "right",
    year: "2026",
    role: "Chemical Engineer @ Red Metals",
    location: "Charleston, SC",
    dateRange: "Jun 2026 – Present",
    current: true,
    bullets: [
      "Designing unit processes and factory layout for industrial process (scrap Cu → Cu rod)",
      "Building PFDs and process simulations; running energy and mass balances",
      "Procuring process equipment, coordinating commissioning, writing safe SOPs",
      "Prolific building with AI systems (Claude, Gemini) to streamline research and factory workflow",
    ],
    photos: [img87, img82],
  },
  {
    kind: "experience",
    side: "left",
    year: "2025",
    role: "Rural Electrification Project Engineer @ WindAid",
    location: "Trujillo, La Libertad, Peru 🇵🇪",
    dateRange: "Nov 2025 – Jan 2026",
    bullets: [
      "Constructed off-grid wind turbine in workshop (welding, casting resin, building generator, etc.)",
      "Installed in rural Andean community for basic electricity needs",
      "Initiated project to optimize battery systems, changing from VRLA lead-acid to AGM (gel) batteries",
    ],
    photos: [img76, img74, img73],
  },
  {
    kind: "experience",
    side: "left",
    year: "2025",
    role: "Spanish Language Intensive @ Local School",
    location: "Sucre, Chuquisaca, Bolivia 🇧🇴",
    dateRange: "Sep 2025 – Nov 2025",
    bullets: [
      "Daily 4 hour lessons with private 1-on-1 tutor",
      "Lived with Bolivian host family",
      "Achieved B2-level Spanish from this foundation",
    ],
    photos: [img72, img71, img70],
  },
  {
    kind: "education",
    side: "left",
    year: "2025",
    role: "Study Abroad @ Stanford Santiago Campus",
    location: "Santiago, Chile 🇨🇱",
    dateRange: "Aug 2025",
    bullets: [
      "Completed final course for M.S. degree: \"Chile's Pathway to a Sustainable Future\"",
      "Engaged with guest lecturers on a wide range of rural and urban sustainability topics",
      "Field trips to marine and agricultural research centers, hydro and biogas power plants, and more.",
    ],
    photos: [img60, img59, img58],
  },
  {
    kind: "education",
    side: "right",
    year: "2024",
    role: "Master of Science in Earth Systems",
    location: "Stanford University",
    dateRange: "Jan 2024 – Jun 2025",
    bullets: [
      "Interdisciplinary masters program with emphasis on Technology Supply Chains",
    ],
    photos: [img29, img83],
  },
  {
    kind: "experience",
    side: "right",
    year: "2025",
    role: "Teaching Assistant @ Energy Resource Engineering Dept.",
    location: "Stanford University",
    dateRange: "Mar 2025 – Jun 2025",
    bullets: [
      "\"Fundamentals of Renewable Power\"",
      "Survey course deep-diving into engineering and related issues for wind, solar, biomass, geothermal, tidal and wave power technologies.",
    ],
    photos: [img88],
  },
  {
    kind: "experience",
    side: "right",
    year: "2025",
    role: "Teaching Assistant @ Earth System Science Dept.",
    location: "Stanford University",
    dateRange: "Mar 2025 – Jun 2025",
    bullets: [
      "\"Will Technology Save the World?: Environmental Ethics and Techno-Optimism\"",
      "Interdisciplinary course teaching applied environmental ethics and critical analysis of the risks, benefits, and societal impacts of technological solutions to environmental problems.",
    ],
    photos: [img89],
  },
  {
    kind: "experience",
    side: "right",
    year: "2025",
    role: "Environmental Leadership Forum (FUEL) @ TomKat Center",
    location: "Stanford University",
    dateRange: "Jan 2025 – Mar 2025",
    bullets: [
      "Visited crop and dairy farms to speak with farmers and ranchers (Marin and Salinas)",
      "Met with policymakers and lawyers at the Capitol in Sacramento to discuss agricultural policy",
      "Attended guest lectures from other stakeholders, e.g. former Head of CA Department of Water Resources",
    ],
    photos: [img57, img42, img39],
  },
  {
    kind: "experience",
    side: "right",
    year: "2024",
    role: "Teaching Assistant @ Earth Systems Dept.",
    location: "Stanford University",
    dateRange: "Sep 2024 – Dec 2024",
    bullets: [
      "\"Human Society and Environmental Change\"",
      "Interdisciplinary examination of human-environment interactions through the lenses of economics, policy, culture, history, and governance.",
    ],
    photos: [img90],
  },
  {
    kind: "education",
    side: "left",
    year: "2019",
    role: "Bachelor of Science in Chemical Engineering",
    location: "Stanford University",
    dateRange: "Sep 2019 – Jun 2024",
    bullets: [
      "Graduated from the Notation in Science Communication program, with Distinction",
    ],
    photos: [img15],
  },
  {
    kind: "experience",
    side: "left",
    year: "2024",
    role: "Direct Lithium Extraction Researcher (Capstone)",
    location: "Stanford University",
    dateRange: "Mar 2024 – Jun 2024",
    bullets: [
      "Designed plant from scratch which recovers lithium carbonate from oil and gas wastewater",
      "Built PFD and PF&ID diagrams for extraction, separation, and purification processes",
      "Modeled energy and mass balances for unit operation design and simulated in AspenPlus",
      "Conducted literature reviews, capital cost estimations, and equipment sizing analysis",
      "Outcome: Techno-economic analysis indicated 2.8 years to breakeven, 3 years for payback, and 392.9% ROI netting >$200 million of profit over 10-years, producing 2000 tonnes of Li₂CO₃ per year",
    ],
  },
  {
    kind: "experience",
    side: "left",
    year: "2023",
    role: "Polymer Membrane Synthesis Researcher (Capstone)",
    location: "Stanford University",
    dateRange: "Nov 2023 – Mar 2024",
    bullets: [
      "Synthesized polymer membranes for desalination from PET, tested with benchtop desalination setup",
      "Outcome: Developed greener synthesis method for desalination membranes by replacing NMP with Cyrene",
    ],
    photos: [img23, img31, img49],
  },
  {
    kind: "experience",
    side: "right",
    year: "2023",
    role: "Lab Safety Officer @ Uytengsu Teaching Labs",
    location: "Stanford University",
    dateRange: "Sep 2023 – Mar 2025",
    bullets: [
      "Oversaw safety of student projects after-hours, including handling of waste and mechanical/electrical equipment",
      "Proactively prevented dangerous situations, and managed uncertainties and emergencies",
    ],
  },
  {
    kind: "experience",
    side: "right",
    year: "",
    role: "ChemE Car",
    location: "Stanford University",
    bullets: [],
    photos: [img34, img28, img04],
  },
  {
    kind: "experience",
    side: "right",
    year: "2023",
    role: "Process Optimization Intern @ Savor",
    location: "San Jose, CA",
    dateRange: "Jun 2023 – Sep 2023",
    bullets: [
      "Optimized process for industrial scale-up of paraffin oxidation reaction for carbon-neutral fat production",
      "Designed and ran catalytic synthesis experiments; assisted chemistry team in Python analysis of GC-MS data",
      "Navigated various dynamic tasks in startup environment, including reactor and equipment setup",
      "Outcome: Delivered actionable data on 4 primary variables to inform engineering decisions about process design",
    ],
    photos: [img81],
  },
  {
    kind: "experience",
    side: "left",
    year: "2022",
    role: "Electrochemical Separations Researcher @ Tarpeh Lab",
    location: "Stanford University",
    dateRange: "Sep 2022 – Dec 2023",
    bullets: [
      "Assisted in pilot-level scaleup of electrochemical stripping (ECS) system to separate ammonia from wastewater",
      "Built electrochemical cells by hand to test various configurations of membranes, electrodes, and pump system",
      "Ran experiments using potentiostat & cyclic voltammetry, analysis with colorimetric flow-injection analysis (FIA)",
      "Outcome: Reported on effects of varying parameters on NH₄⁺ current efficiency to optimize annular cell operation",
    ],
    photos: [img61, img62, img63],
  },
  {
    kind: "experience",
    side: "left",
    year: "2022",
    role: "Nanoparticle Synthesis @ Cargnello Group",
    location: "Stanford University",
    dateRange: "Jun 2022 – Sep 2022",
    bullets: [
      "Synthesized high-entropy alloy (HEA) nanoparticles using Schlenk line synthesis techniques",
      "Outcome: Drew conclusions about mechanism of formation & influence of process variables on product",
    ],
    photos: [img86, img38, img67],
  },
  {
    kind: "experience",
    side: "left",
    year: "2020",
    role: "Bioengineering Researcher @ Endy Lab / iGEM",
    location: "Stanford University",
    dateRange: "May 2020 – Jun 2021",
    bullets: [
      "Engineered B. subtilis to fluoresce upon detecting a specific DNA sequence.",
      "Earned an iGEM Gold Medal, a $40K Med Catalyst grant, and filed provisional patent US63104140.",
    ],
    photos: [img84, img43, img45],
  },
];

export const awards = [
  "AIChE Distinguished Service Award",
  "Outstanding Service for the Earth Systems Program",
  "Cap & Gown Society Leader Award",
  "Alumni Association Award of Excellence",
  "Academic Distinction in Notation in Science Communication Program",
];

export const leadership = [
  { role: "President", org: "AIChE (American Institute of Chemical Engineers)" },
  { role: "Founder & President", org: "Chem-E-Car Team" },
  { role: "Captain & Coach", org: "Ethics Bowl" },
  { role: "President", org: "Stanford Practical Ethics Club (SPEC)" },
  { role: "Section Leader", org: "Leland Stanford Junior University Marching Band" },
];
