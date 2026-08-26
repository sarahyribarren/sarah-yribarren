export type Course = {
  title: string;
  code: string;
  description: string;
};

export type CourseCategory = {
  title: string;
  courses: Course[];
};

export const courseworkCategories: CourseCategory[] = [
  {
    title: "Chemical Engineering",
    courses: [
      {
        title: "Introduction to Chemical Engineering",
        code: "CHEMENG 20",
        description: "First look at mass and energy balances, and the chemical engineer's toolkit for analyzing processes.",
      },
      {
        title: "Chemical Engineering for Sustainability",
        code: "CHEMENG 65Q",
        description: "Freshman seminar applying chemical engineering principles to sustainability and resource challenges.",
      },
      {
        title: "Chemical Process Modeling, Dynamics, and Control",
        code: "CHEMENG 100",
        description: "Dynamic modeling of chemical processes and the feedback control strategies used to run them safely.",
      },
      {
        title: "Introduction to Chemical Engineering Thermodynamics",
        code: "CHEMENG 110A",
        description: "Classical thermodynamics — energy, entropy, and equilibrium — applied to chemical process systems.",
      },
      {
        title: "Multi-Component and Multi-Phase Thermodynamics",
        code: "CHEMENG 110B",
        description: "Phase equilibria and thermodynamics of mixtures, underpinning separations and reactor design.",
      },
      {
        title: "Fluid Mechanics",
        code: "CHEMENG 120A",
        description: "Momentum transport and fluid flow in the pipes, pumps, and vessels of process plants.",
      },
      {
        title: "Energy and Mass Transport",
        code: "CHEMENG 120B",
        description: "Heat and mass transfer fundamentals for designing exchangers, reactors, and separation units.",
      },
      {
        title: "Microkinetics — Molecular Principles of Chemical Kinetics",
        code: "CHEMENG 130A",
        description: "Molecular-level treatment of reaction rates and mechanisms underlying industrial kinetics.",
      },
      {
        title: "Introduction to Kinetics and Reactor Design",
        code: "CHEMENG 130B",
        description: "Reaction engineering and the design of batch, CSTR, and plug-flow reactors.",
      },
      {
        title: "Chemical Engineering Plant Design",
        code: "CHEMENG 180",
        description: "Capstone-style design of a full chemical process plant, from PFDs to economic analysis.",
      },
      {
        title: "Chemical Engineering Laboratory A",
        code: "CHEMENG 185A",
        description: "Hands-on experimental lab pairing bench-scale chemical engineering with a capstone research project.",
      },
      {
        title: "Chemical Engineering Laboratory B",
        code: "CHEMENG 185B",
        description: "Second-quarter continuation of capstone lab research, from experiment design through final reporting.",
      },
      {
        title: "Undergraduate Research in Chemical Engineering",
        code: "CHEMENG 190",
        description: "Independent research credit conducted within a chemical engineering faculty lab.",
      },
    ],
  },
  {
    title: "Biology & Bioengineering",
    courses: [
      {
        title: "Biochemistry & Molecular Biology",
        code: "BIO 83",
        description: "Core biochemistry of proteins, enzymes, and metabolism, with a molecular biology foundation.",
      },
      {
        title: "Cell Biology",
        code: "BIO 86",
        description: "Structure and function of the eukaryotic cell, from organelles to cell signaling.",
      },
      {
        title: "Introduction to Bioengineering",
        code: "BIOE 80",
        description: "Survey of bioengineering design principles across synthetic biology, devices, and therapeutics.",
      },
      {
        title: "Inventing Synthetic Biosystems",
        code: "BIOE 195A",
        description: "Design and build of engineered biological systems using synthetic biology tools.",
      },
    ],
  },
  {
    title: "Math & Physics",
    courses: [
      {
        title: "Mechanics",
        code: "PHYSICS 41E",
        description: "Newtonian mechanics — kinematics, forces, energy, and momentum — for engineers.",
      },
      {
        title: "Electricity & Magnetism",
        code: "PHYSICS 43",
        description: "Electric and magnetic fields, circuits, and electromagnetic waves.",
      },
      {
        title: "Physics of Energy",
        code: "PHYSICS 240",
        description: "Physical principles underlying energy generation, conversion, and storage technologies.",
      },
      {
        title: "Calculus",
        code: "MATH 21",
        description: "Foundational single- and multi-variable calculus sequence.",
      },
      {
        title: "Vector Calculus for Engineers",
        code: "CME 100A",
        description: "Vector calculus tools — gradients, divergence, and line/surface integrals — for engineering analysis.",
      },
      {
        title: "Ordinary Differential Equations for Engineers",
        code: "CME 102A",
        description: "Solution methods for ODEs, with applications to engineering dynamics and systems.",
      },
      {
        title: "Linear Algebra and Partial Differential Equations for Engineers",
        code: "CME 104",
        description: "Linear algebra and PDE methods used throughout engineering modeling and simulation.",
      },
    ],
  },
  {
    title: "Chemistry",
    courses: [
      {
        title: "Chemical Principles: From Molecules to Solids",
        code: "CHEM 31M",
        description: "General chemistry covering bonding and structure from the molecular to the solid-state scale.",
      },
      {
        title: "Structure and Reactivity of Organic Molecules",
        code: "CHEM 33",
        description: "Organic chemistry fundamentals — structure, mechanism, and reactivity.",
      },
      {
        title: "Understanding the Natural and Unnatural World Through Chemistry",
        code: "CHEM 121",
        description: "Chemistry's role in natural systems and human-made materials and technologies.",
      },
    ],
  },
  {
    title: "Writing: Science Communication",
    courses: [
      {
        title: "Intermediate Writing: Introduction to Science Communication",
        code: "PWR 91NSC",
        description: "Foundational course in translating technical and scientific work for public audiences.",
      },
      {
        title: "Environmental Justice Storytelling: Writing for Impact",
        code: "EARTHSYS 91EJ",
        description: "Narrative writing course centered on environmental justice and impact-driven storytelling.",
      },
    ],
  },
  {
    title: "A Few \"Fun\" Courses",
    courses: [
      {
        title: "Public Speaking",
        code: "ENGR 203",
        description: "Practical training in oral communication and presentation for technical audiences.",
      },
      {
        title: "Emergency Management Skills",
        code: "EMED 101",
        description: "Hands-on emergency response and management skills for real-world crisis situations.",
      },
      {
        title: "Social Dance I",
        code: "DANCE 46",
        description: "Introductory partner social dance technique across several dance styles.",
      },
      {
        title: "Introduction to Instrumental Composition",
        code: "MUSIC 113",
        description: "Fundamentals of composing original music for instruments.",
      },
    ],
  },
  {
    title: "Interdisciplinary Earth and Environmental Sciences",
    courses: [
      {
        title: "Understand Energy",
        code: "EARTHSYS 103",
        description: "Interdisciplinary survey of energy systems, resources, and the transition to low-carbon power.",
      },
      {
        title: "Environmental Science and Technology",
        code: "CEE 70",
        description: "Engineering approaches to environmental problems in air, water, and soil systems.",
      },
      {
        title: "Technometabolism: Technology, Society, and the Anthropocene",
        code: "STS 200J",
        description: "Critical look at how technology, society, and material flows co-evolve in the Anthropocene.",
      },
      {
        title: "Life Cycle Assessment for Complex Systems",
        code: "CEE 226",
        description: "Methods for quantifying environmental impacts of products and systems across their full life cycle.",
      },
      {
        title: "Imagining Adaptive Societies",
        code: "SUSTAIN 231",
        description: "Systems-thinking seminar on designing societies that can adapt to environmental change.",
      },
      {
        title: "Coevolution of Earth and Life",
        code: "EARTHSYS 4",
        description: "Deep-time history of how Earth's geology, climate, and life have shaped one another.",
      },
      {
        title: "Science of Soils",
        code: "EARTHSYS 155",
        description: "Soil formation, chemistry, and ecology, and their role in agriculture and climate.",
      },
      {
        title: "Adaptation",
        code: "EARTHSYS 183",
        description: "Examines how ecological and human systems adapt to environmental and climate change.",
      },
      {
        title: "Directed Individual Study in Earth Systems",
        code: "EARTHSYS 297",
        description: "Independent study project within the Earth Systems program.",
      },
    ],
  },
  {
    title: "Law and Policy",
    courses: [
      {
        title: "Natural Resources Law & Policy",
        code: "LAW 2506",
        description: "Legal frameworks governing the use and management of natural resources.",
      },
      {
        title: "Policy Practicum: Thinking in Systems",
        code: "LAW 809W",
        description: "Applied systems-thinking practicum for analyzing and shaping public policy.",
      },
      {
        title: "Law and Governance in ESG Strategy",
        code: "LAW 1068",
        description: "How legal and governance structures shape corporate ESG strategy and accountability.",
      },
      {
        title: "Elements of Policy Analysis",
        code: "LAW 7846",
        description: "Core frameworks and tools for analyzing public policy options and tradeoffs.",
      },
      {
        title: "Climate Politics: Science and Global Governance",
        code: "INTLPOL 271",
        description: "Intersection of climate science and the international politics of global climate governance.",
      },
    ],
  },
];
