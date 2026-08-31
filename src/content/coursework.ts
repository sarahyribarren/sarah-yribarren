export type CourseProject = { label: string; projectTitle?: string; route?: string; url?: string };

export type Course = {
  title: string;
  code: string;
  academicYear?: string;
  projects?: CourseProject[];
};

export type CourseCategory = {
  title: string;
  courses: Course[];
};

export const courseworkCategories: CourseCategory[] = [
  {
    title: "🧪  Chemical Engineering",
    courses: [
      { title: "Introduction to Chemical Engineering", code: "CHEMENG 20" },
      {
        title: "Chemical Engineering for Sustainability",
        code: "CHEMENG 65Q",
        projects: [
          {
            label: "PHB Techno-Economic Analysis",
            projectTitle: "Techno-Economic Analysis of the Microbial Production of PHB",
            route: "/physics",
          },
        ],
      },
      { title: "Chemical Process Modeling, Dynamics, and Control", code: "CHEMENG 100" },
      { title: "Introduction to Chemical Engineering Thermodynamics", code: "CHEMENG 110A" },
      { title: "Multi-Component and Multi-Phase Thermodynamics", code: "CHEMENG 110B" },
      { title: "Fluid Mechanics", code: "CHEMENG 120A" },
      { title: "Energy and Mass Transport", code: "CHEMENG 120B" },
      { title: "Microkinetics—Molecular Principles of Chemical Kinetics", code: "CHEMENG 130A" },
      { title: "Introduction to Kinetics and Reactor Design", code: "CHEMENG 130B" },
      {
        title: "Chemical Engineering Plant Design",
        code: "CHEMENG 180",
        projects: [
          {
            label: "Direct Lithium Extraction",
            projectTitle: "LithiumX: Recovering Lithium from Oil & Gas Produced Water",
            route: "/capstone",
          },
          {
            label: "Helium Supply & Lunar Mining",
            projectTitle: "Dwindling ⁴He Supply on Earth & Feasibility of Mining Lunar ³He",
            route: "/physics",
          },
          {
            label: "Haber-Bosch Energy Use",
            projectTitle: "Haber-Bosch Process & Energy Consumption",
            route: "/physics",
          },
        ],
      },
      {
        title: "Chemical Engineering Laboratory A",
        code: "CHEMENG 185A",
        projects: [
          {
            label: "Biosynthesis of Fatty Acid Esters",
            projectTitle: "Enhancing Biosynthesis and Extraction of Fatty Acid Ethyl Esters in E. coli",
            route: "/capstone",
          },
        ],
      },
      {
        title: "Chemical Engineering Laboratory B",
        code: "CHEMENG 185B",
        projects: [
          {
            label: "Greener Desalination Membranes",
            projectTitle: "Greener Synthesis of Nanofiltration Desalination Membranes from Upcycled PET Waste",
            route: "/capstone",
          },
        ],
      },
      { title: "Undergraduate Research in Chemical Engineering", code: "CHEMENG 190" },
    ],
  },
  {
    title: "🌎  Interdisciplinary Earth and Environmental Sciences",
    courses: [
      { title: "Understand Energy", code: "EARTHSYS 103" },
      { title: "Environmental Science and Technology", code: "CEE 70" },
      {
        title: "Technometabolism: Technology, Society, and the Anthropocene",
        code: "STS 200J",
        projects: [
          {
            label: "Semiconductor Technometabolism",
            projectTitle:
              "Technometabolism of Semiconductors: Material, Energy, Water, Waste, Labor, and Information Flows",
            route: "/earth-systems",
          },
        ],
      },
      {
        title: "Life Cycle Assessment for Complex Systems",
        code: "CEE 226",
        projects: [
          {
            label: "Rivian EV Lightweighting LCA",
            projectTitle: "Lightweighting of Rivian Electric Vehicles: Comparing Life-Cycle CO₂e of Four Materials",
            route: "/earth-systems",
          },
        ],
      },
      {
        title: "Imagining Adaptive Societies",
        code: "SUSTAIN 231",
        projects: [
          {
            label: "Tech & Worker Exploitation",
            projectTitle: "The Role of Technology in Eliminating Worker Exploitation in Adaptive Societies",
            route: "/law-policy",
          },
        ],
      },
      { title: "Coevolution of Earth and Life", code: "EARTHSYS 4" },
      { title: "Science of Soils", code: "EARTHSYS 155" },
      { title: "Adaptation", code: "EARTHSYS 183" },
      { title: "Directed Individual Study in Earth Systems", code: "EARTHSYS 297" },
    ],
  },
  {
    title: "⚗️  Chemistry",
    courses: [
      { title: "Chemical Principles: From Molecules to Solids", code: "CHEM 31M", academicYear: "20222023" },
      { title: "Structure and Reactivity of Organic Molecules", code: "CHEM 33" },
      { title: "Understanding the Natural and Unnatural World Through Chemistry", code: "CHEM 121" },
    ],
  },
  {
    title: "⚖️  Law and Policy",
    courses: [
      { title: "Natural Resources Law & Policy", code: "LAW 2506" },
      {
        title: "Policy Practicum: Thinking in Systems",
        code: "LAW 809W",
        projects: [
          {
            label: "Mining Boomtown Dynamics",
            projectTitle:
              "Boomtown Economic Dynamics After Resource Discovery: Systems Map and Policy Recommendations",
            route: "/law-policy",
          },
        ],
      },
      {
        title: "Law and Governance in ESG Strategy",
        code: "LAW 1088",
        projects: [
          {
            label: "ESG Law & Geochemical Fingerprinting",
            projectTitle:
              "Scientific Evidence & Technological Innovation in ESG Law: Enforcing the UFLPA with Geochemical Fingerprinting",
            route: "/law-policy",
          },
        ],
      },
      { title: "Elements of Policy Analysis", code: "LAW 7846" },
      {
        title: "Climate Politics: Science and Global Governance",
        code: "INTLPOL 271",
        projects: [
          {
            label: "Ocean Acidification Science",
            projectTitle: "Tracing the Development of Scientific Knowledge Around Ocean Acidification",
            route: "/earth-systems",
          },
        ],
      },
    ],
  },
  {
    title: "📐  Physics and Math",
    courses: [
      { title: "Mechanics", code: "PHYSICS 41E" },
      { title: "Electricity & Magnetism", code: "PHYSICS 43" },
      {
        title: "Physics of Energy",
        code: "PHYSICS 240",
        projects: [
          {
            label: "Redox Flow Batteries",
            projectTitle: "Aqueous Organic Redox Flow Batteries for Grid Energy Storage",
            route: "/physics",
          },
          {
            label: "Green Graphite from Biomass",
            projectTitle: "Biomass-Derived \"Green\" Graphite for US Domestic Supply",
            route: "/physics",
          },
        ],
      },
      { title: "Calculus", code: "MATH 21" },
      { title: "Vector Calculus for Engineers", code: "CME 100A" },
      { title: "Ordinary Differential Equations for Engineers", code: "CME 102A" },
      { title: "Linear Algebra and Partial Differential Equations for Engineers", code: "CME 104" },
    ],
  },
  {
    title: "🧬  Biology and Bioengineering",
    courses: [
      { title: "Biochemistry & Molecular Biology", code: "BIO 83" },
      { title: "Cell Biology", code: "BIO 86" },
      { title: "Introduction to Bioengineering", code: "BIOE 80" },
      { title: "Inventing Synthetic Biosystems", code: "BIOE 195A" },
    ],
  },
  {
    title: "✍️  Science Communication",
    courses: [
      {
        title: "Intermediate Writing: Introduction to Science Communication",
        code: "PWR 91NSC",
        projects: [
          {
            label: "Literature Review and Short Story Using Microbes",
            url: "https://stanford.digication.com/sarahyribarren-eportfolio/literature-review-and-short-story-using-microbes-1",
          },
        ],
      },
      {
        title: "Environmental Justice Storytelling: Writing for Impact",
        code: "EARTHSYS 91EJ",
        projects: [
          {
            label: "Sanitation Access & Clean Water",
            projectTitle: "The World's Most Unappreciated Privilege: Sanitation Access and Clean Water",
            route: "/law-policy",
          },
        ],
      },
    ],
  },
];
