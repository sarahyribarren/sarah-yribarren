import img04 from "@/assets/photos/image04.jpg";
import img06 from "@/assets/photos/image06.jpg";
import img16 from "@/assets/photos/image16.jpg";
import img22 from "@/assets/photos/image22.jpg";
import img23 from "@/assets/photos/image23.jpg";
import img24 from "@/assets/photos/image24.jpg";
import img28 from "@/assets/photos/image28.jpg";
import img29 from "@/assets/photos/image29.jpg";
import img30 from "@/assets/photos/image30.jpg";
import img31 from "@/assets/photos/image31.jpg";
import img33 from "@/assets/photos/image33.jpg";
import img34 from "@/assets/photos/image34.jpg";
import img38 from "@/assets/photos/image38.jpg";
import img39 from "@/assets/photos/image39.jpg";
import img42 from "@/assets/photos/image42.jpg";
import img43 from "@/assets/photos/image43.jpg";
import img45 from "@/assets/photos/image45.jpg";
import img46 from "@/assets/photos/image46.jpg";
import img47 from "@/assets/photos/image47.jpg";
import img48 from "@/assets/photos/image48.jpg";
import img49 from "@/assets/photos/image49.jpg";
import img50 from "@/assets/photos/image50.jpg";
import img51 from "@/assets/photos/image51.jpg";
import img52 from "@/assets/photos/image52.jpg";
import img53 from "@/assets/photos/image53.jpg";
import img54 from "@/assets/photos/image54.jpg";
import img55 from "@/assets/photos/image55.jpg";
import img56 from "@/assets/photos/image56.jpg";
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
import img77 from "@/assets/photos/image77.jpg";
import img79 from "@/assets/photos/image79.jpg";
import img81 from "@/assets/photos/image81.jpg";
import img82 from "@/assets/photos/image82.jpg";
import img83 from "@/assets/photos/image83.jpg";
import img84 from "@/assets/photos/image84.jpg";
import img86 from "@/assets/photos/image86.jpg";
import img87 from "@/assets/photos/image87.jpg";
import img91 from "@/assets/photos/image91.jpg";
import img92 from "@/assets/photos/image92.jpg";
import img93 from "@/assets/photos/image93.jpg";
import img94 from "@/assets/photos/image94.jpg";
import img95 from "@/assets/photos/image95.jpg";
import img96 from "@/assets/photos/image96.jpg";
import img97 from "@/assets/photos/image97.jpg";
import img98 from "@/assets/photos/image98.jpg";
import img99 from "@/assets/photos/image99.jpg";
import img100 from "@/assets/photos/image100.jpg";
import imgAlaska from "@/assets/photos/alaska-glacier.jpg";

export type TimelineCard = {
  kind: "education" | "experience" | "credential" | "milestone";
  side: "left" | "right";
  role: string;
  location?: string;
  dateRange?: string;
  description?: string;
  bullets: string[];
  photos?: string[];
  current?: boolean;
  awards?: string[];
  leadershipRoles?: string[];
  mutedRoles?: string[];
  links?: { label: string; url: string }[];
  banner?: string;
  bannerColor?: "default" | "green";
};

export type TimelineEntry = TimelineCard;

export const timeline: TimelineEntry[] = [
  {
    kind: "experience",
    side: "right",
    role: "Chemical Engineer @ Red Metals",
    location: "Charleston, SC",
    dateRange: "Jun 2026 – Present",
    current: true,
    bullets: [
      "Designing unit processes and factory layout for industrial process (scrap Cu → Cu rod) focusing on metallurgical refining",
      "Building PFDs and process simulations; running energy and mass balances",
      "Procuring process equipment, coordinating commissioning, writing safe SOPs",
      "Prolific building with AI systems (Claude, Gemini) to streamline research and factory workflow",
    ],
    photos: [img87, img82],
  },
  {
    kind: "experience",
    side: "left",
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
    role: "Study Abroad @ Stanford Santiago Campus",
    location: "Santiago, Chile 🇨🇱",
    dateRange: "Aug 2025",
    bullets: [
      "Completed final course for degree: \"Chile's Pathway to a Sustainable Future\"",
      "Engaged with guest lecturers on a wide range of urban/rural sustainability topics",
      "Field trips to marine and agricultural research centers, hydro and biogas power plants, and more",
    ],
    photos: [img60, img59, img58],
  },
  {
    kind: "education",
    side: "right",
    role: "Master of Science in Earth Systems",
    location: "Stanford University",
    dateRange: "Jan 2024 – Aug 2025",
    bullets: [
      "Interdisciplinary self-designed program with emphasis on Technology Supply Chains (Advisor: Scott Fendorf) - Coterminal Degree",
    ],
    awards: ["Outstanding Service for the Earth Systems Program"],
    leadershipRoles: ["Wellness Liaison (Coterm)"],
    photos: [img29, img83],
  },
  {
    kind: "experience",
    side: "right",
    role: "Teaching Assistant @ Energy Resource Engineering Dept.",
    location: "Stanford University",
    dateRange: "Mar 2025 – Jun 2025",
    bullets: [
      "\"Fundamentals of Renewable Power\"",
      "Survey course deep-diving into engineering and related issues for wind, solar, biomass, geothermal, tidal and wave power technologies",
    ],
  },
  {
    kind: "experience",
    side: "right",
    role: "Teaching Assistant @ Earth System Science Dept.",
    location: "Stanford University",
    dateRange: "Mar 2025 – Jun 2025",
    bullets: [
      "\"Will Technology Save the World?: Environmental Ethics and Techno-Optimism\"",
      "Interdisciplinary course teaching applied environmental ethics and critical analysis of the risks, benefits, and societal impacts of technological solutions to environmental problems",
    ],
  },
  {
    kind: "experience",
    side: "left",
    role: "Environmental Leadership Forum @ TomKat Center",
    location: "Stanford University",
    dateRange: "Jan 2025 – Mar 2025",
    bullets: [
      "Visited crop and dairy farms to speak with farmers and ranchers",
      "Met with policymakers and lawyers at the Capitol in Sacramento to discuss agricultural policy",
      "Attended guest lectures from other stakeholders, e.g. former Head of CA Department of Water Resources",
    ],
    photos: [img57, img42, img39],
  },
  {
    kind: "experience",
    side: "right",
    role: "Teaching Assistant @ Earth Systems Dept.",
    location: "Stanford University",
    dateRange: "Sep 2024 – Dec 2024",
    bullets: [
      "\"Human Society and Environmental Change\"",
      "Interdisciplinary examination of human-environment interactions through the lenses of economics, policy, culture, history, and governance",
    ],
  },

  {
    kind: "education",
    side: "left",
    role: "Bachelor of Science in Chemical Engineering",
    location: "Stanford University",
    dateRange: "Sep 2019 – Jun 2024",
    bullets: [],
    awards: [
      "AIChE Distinguished Service Award",
      "Alumni Association Award of Excellence",
      "Cap & Gown Society Leader Award",
    ],
    leadershipRoles: ["President of Stanford's AIChE Chapter (Junior, Senior)"],
    photos: [img93, img91],
  },
  {
    kind: "education",
    side: "left",
    role: "Notation in Science Communication",
    location: "Stanford University",
    dateRange: "Sep 2022 – May 2024",
    bullets: [
      "Certificate through the Program for Writing & Rhetoric department",
      "Took specific co-curricular courses, and completed digital ePortfolio",
    ],
    awards: ["with Distinction"],
    links: [
      { label: "ePortfolio", url: "https://stanford.digication.com/sarahyribarren-eportfolio/home" },
    ],
    photos: [img92],
  },
  {
    kind: "experience",
    side: "left",
    role: "Direct Lithium Extraction Researcher (Capstone)",
    location: "Stanford University",
    dateRange: "Mar 2024 – Jun 2024",
    bullets: [
      "Designed plant that recovers lithium carbonate from oil and gas wastewater",
      "Built PFD / PF&ID diagrams for extraction, separation, purification processes",
      "Modeled energy and mass balances for unit operations, simulated in Aspen",
      "Conducted literature reviews, capital cost estimations, equipment sizing analysis",
      "Outcome: Techno-economic analysis indicated 2.8 years to breakeven, 3 years for payback, and 392.9% ROI netting >$200 million of profit over 10-years, producing 2000 tonnes of Li₂CO₃ per year",
    ],
    links: [
      { label: "Final Report", url: "https://drive.google.com/file/d/1CNYiRwq9Z3uGfxm36vzyUuoptc06sqEh/view?usp=sharing" },
      { label: "Final Slide Deck", url: "https://drive.google.com/file/d/1iSU-2xwVs2Q45xDo9oMTQyoKLsqIhM6O/view?usp=sharing" },
    ],
  },
  {
    kind: "experience",
    side: "left",
    role: "Polymer Membrane Synthesis Researcher (Capstone)",
    location: "Stanford University",
    dateRange: "Jan 2024 – Mar 2024",
    bullets: [
      "Synthesized polymer membranes for desalination from PET, tested with benchtop desalination setup",
      "Outcome: Developed greener synthesis method for desalination membranes by replacing NMP with Cyrene",
    ],
    links: [
      { label: "Project Proposal", url: "https://drive.google.com/file/d/1_Aw3BWpNW_3CDEiQSdBwrp3szVNrfFy9/view?usp=sharing" },
      { label: "Final Slide Deck", url: "https://drive.google.com/file/d/1y0xopeeSOrwK-dypi_Dp4ERGKD7YvypS/view?usp=sharing" },
      { label: "Final Presentation", url: "https://drive.google.com/file/d/1SQ3MAjKC1deayANsTTfI-RqxgpgiLkPO/view?usp=sharing" },
    ],
    photos: [img23, img31, img49],
  },
  {
    kind: "experience",
    side: "left",
    role: "Biosynthesis Researcher (Capstone)",
    location: "Stanford University",
    dateRange: "Sep 2023 – Dec 2023",
    bullets: [
      "Engineered E. coli to biosynthesize fatty acid ethyl esters (FAEEs) as a renewable diesel-range biofuel",
      "Outcome: Quantified FAEE yield via extraction and GC-MS analysis across strain and culture conditions",
    ],
    links: [
      { label: "Final Report", url: "https://drive.google.com/file/d/1b66zc_P3jdWkD9KKSSydYDGS707oDDTQ/view?usp=sharing" },
      { label: "Final Slide Deck", url: "https://drive.google.com/file/d/1vUcQW3Ffg8diB6uSjV7iG2s_WieWYYIl/view?usp=sharing" },
    ],
    photos: [img48, img46, img47],
  },
  {
    kind: "experience",
    side: "right",
    role: "ChemE Car",
    location: "Stanford University",
    dateRange: "Sep 2023 – Mar 2025",
    bullets: [
      "Refounded Stanford's Chem-E-Car team as a newly registered VSO, recruited and trained a team from scratch, and obtained $7,000 annual grant",
      "Designed and built a shoebox-sized car powered by a zinc-air battery, with a chemically-controlled stopping mechanism, integrated onto a 3-D printed chassis",
      "Outcome: First competition season was experimental and the car wasn't functional; the team walked away with critical engineering lessons that shaped a win the following year",
    ],
    leadershipRoles: ["Founder (Junior)", "Coordinator (Senior)"],
    photos: [img34, img28, img04],
  },
  {
    kind: "experience",
    side: "left",
    role: "Lab Safety Officer @ Uytengsu Teaching Labs",
    location: "Stanford University",
    dateRange: "Sep 2023 – Mar 2025",
    bullets: [
      "Oversaw safety of student projects after-hours, including handling of waste and mechanical/electrical equipment",
      "Proactively prevented dangerous situations, and managed uncertainties and emergencies (including once evacuating for a gas leak)",
    ],
    photos: [img94, img99],
  },
  {
    kind: "experience",
    side: "right",
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
    role: "Electrochemical Separations Researcher @ Tarpeh Lab",
    location: "Stanford University",
    dateRange: "Sep 2022 – Dec 2023",
    bullets: [
      "Assisted in pilot-level scaleup of electrochemical stripping (ECS) system to separate ammonia from wastewater",
      "Built electrochemical cells by hand to test various configurations of membranes, electrodes, and pump system",
      "Ran experiments using potentiostat & cyclic voltammetry, analysis with colorimetric flow-injection analysis (FIA)",
      "Outcome: Reported on effects of varying parameters on NH₄⁺ current efficiency to optimize annular cell operation",
    ],
    links: [
      { label: "Abstract", url: "https://iopscience.iop.org/article/10.1149/MA2023-01271763mtgabs" },
      { label: "Mid-Year Update Slides", url: "https://drive.google.com/file/d/1gd5G-As0zuAPUBThoyxV2xGTZJWp0JFS/view?usp=sharing" },
      { label: "Tableau Map", url: "https://public.tableau.com/app/profile/sarah.yribarren/viz/MapofTarpehLabContactsAroundtheWorldRefreshedDaily/Sheet1" },
    ],
    photos: [img61, img63, img62],
  },
  {
    kind: "experience",
    side: "right",
    role: "Residential Assistant @ Ng Humanities House",
    location: "Stanford University",
    dateRange: "Sep 2022 – Jun 2023",
    bullets: [
      "Coordinated humanities-themed events for students (e.g. guest speakers, field trips)",
      "Managed building issues and resident conflicts throughout the year",
    ],
    photos: [img96],
  },
  {
    kind: "experience",
    side: "left",
    role: "Nanoparticle Synthesis Researcher @ Cargnello Group",
    location: "Stanford University",
    dateRange: "Jun 2022 – Sep 2022",
    bullets: [
      "Synthesized high-entropy alloy (HEA) nanoparticles using Schlenk line synthesis techniques",
      "Outcome: Drew conclusions about mechanism of formation & influence of process variables on product",
    ],
    links: [
      { label: "Final Poster", url: "https://drive.google.com/file/d/1WcEJ_tGeN_-AHlsAKoxaFNgxE5U0ArXZ/view?usp=sharing" },
    ],
    photos: [img67, img86, img38],
  },
  {
    kind: "experience",
    side: "right",
    role: "Residential Assistant @ Engineering Academy",
    location: "Stanford University",
    dateRange: "Jun 2022 – Aug 2022",
    bullets: [
      "Stanford Summer Engineering Academy (SSEA) was designed for pre-frosh from low-income and/or first-generation backgrounds",
      "Mentored students taking pre-calculus and chemistry during transition",
      "Coordinated events, tutoring sessions, and socials",
    ],
    photos: [img95],
  },
  {
    kind: "experience",
    side: "left",
    role: "Bioengineering Researcher @ Endy Lab / iGEM",
    location: "Stanford University",
    dateRange: "May 2020 – Jun 2021",
    bullets: [
      "Engineered B. subtilis to fluoresce upon detecting a specific DNA sequence",
      "Outcome: Earned an iGEM Gold Medal, a $40K translational research grant (Stanford Med Catalyst), and filed provisional patent US63104140",
    ],
    awards: ["Gold Medal @ iGEM Jamboree", "Best Education", "Nominated for Best Diagnostic"],
    links: [
      { label: "Website", url: "https://2020.igem.org/Team:Stanford" },
      { label: "Poster", url: "https://2020.igem.org/Team:Stanford/Poster" },
    ],
    photos: [img45, img43, img84],
  },
];

export const extracurriculars: TimelineEntry[] = [
  {
    kind: "experience",
    side: "left",
    role: "Captain & Coach @ Stanford Ethics Bowl",
    location: "Stanford University",
    dateRange: "Sep 2019 – Mar 2025",
    bullets: [
      "Competed for three years in a collaborative, debate-style competition focused on modeling civil discourse",
      "Constructed and argued philosophical frameworks for wide variety of social, economic, political, and ethical issues",
      "Outcome: team won CA Regionals as Team Captain, streak continued during time as Coach (now at 5-year win streak)",
      "Bonus Outcome: as Captain, was interviewed by Bulletin of Atomic Scientists for framework on ethics of science communication for the Doomsday Clock",
    ],
    leadershipRoles: ["Team Captain (Sophomore)", "Coach (Junior, Coterm)"],
    mutedRoles: ["Competitor (Frosh, Gap)"],
    links: [
      { label: "Feature Interview by the Bulletin of Atomic Scientists", url: "https://thebulletin.org/2022/06/some-disagree-that-it-is-100-seconds-to-midnight-these-undergrads-held-a-debate/" },
    ],
    photos: [img30, img24, img52],
  },
  {
    kind: "experience",
    side: "right",
    role: "Section Leader @ Leland Stanford Junior University Marching Band (LSJUMB)",
    location: "Stanford University",
    dateRange: "Sep 2022 – Jun 2025",
    bullets: [
      "Played tenor saxophone at football games and other athletic events",
      "Led section as Section Leader",
    ],
    leadershipRoles: ["Section Leader (Senior)"],
    photos: [img22, img16, img50],
  },
  {
    kind: "experience",
    side: "left",
    role: "Co-President @ Stanford's Undergraduate AIChE (American Institute of Chemical Engineers) Chapter",
    location: "Stanford University",
    dateRange: "Sep 2022 – Jun 2024",
    bullets: [
      "Bi-annual activities fair recruiting",
      "Signature event — quarterly ChemE trivia for the undergraduate community",
      "AIChE bonfire — one of many socials",
    ],
    photos: [img56, img51, img55],
  },
  {
    kind: "education",
    side: "right",
    role: "\"Understand Energy\" Course",
    location: "Stanford University",
    dateRange: "Sep 2022 – Dec 2023",
    bullets: [
      "Took field trips to a decommissioned nuclear plant, The Geysers geothermal power plant, and Shasta Dam",
      "Made a big impact in my intellectual journey by fostering interest in energy technologies and industries",
    ],
    photos: [img06, img53, img54],
  },
  {
    kind: "experience",
    side: "left",
    role: "Bonus Abroad Experiences!",
    location: "Bolivia 🇧🇴 · Peru 🇵🇪 · Chile 🇨🇱",
    bullets: [
      "Toured an active artisanal mine in Potosí, Bolivia",
      "Visited the Maras Salt Mines in southeast Peru, overlooking evaporation ponds",
      "Explored the largest high-altitude geothermal geyser field in the Atacama Desert, Chile",
      "Studied glacial soils near Juneau, Alaska for Science of Soils (EARTHSYS 155)",
    ],
    photos: [img33, img77, img79, imgAlaska],
  },
  {
    kind: "experience",
    side: "right",
    role: "Bonus Stanford Experiences!",
    location: "Stanford University",
    bullets: [
      "Explored the campus steam tunnels",
      "Fountain hopping around campus",
      "Indoor rock climbing",
    ],
    photos: [img97, img98, img100],
  },
];

export const leadership = [
  { role: "President", org: "AIChE (American Institute of Chemical Engineers)" },
  { role: "Founder & President", org: "Chem-E-Car Team" },
  { role: "Captain & Coach", org: "Ethics Bowl" },
  { role: "President", org: "Stanford Practical Ethics Club (SPEC)" },
  { role: "Section Leader", org: "Leland Stanford Junior University Marching Band" },
];
