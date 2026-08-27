export type Course = {
  title: string;
  code: string;
};

export type CourseCategory = {
  title: string;
  courses: Course[];
};

export const courseworkCategories: CourseCategory[] = [
  {
    title: "Chemical Engineering",
    courses: [
      { title: "Introduction to Chemical Engineering", code: "CHEMENG 20" },
      { title: "Chemical Engineering for Sustainability", code: "CHEMENG 65Q" },
      { title: "Chemical Process Modeling, Dynamics, and Control", code: "CHEMENG 100" },
      { title: "Introduction to Chemical Engineering Thermodynamics", code: "CHEMENG 110A" },
      { title: "Multi-Component and Multi-Phase Thermodynamics", code: "CHEMENG 110B" },
      { title: "Fluid Mechanics", code: "CHEMENG 120A" },
      { title: "Energy and Mass Transport", code: "CHEMENG 120B" },
      { title: "Microkinetics—Molecular Principles of Chemical Kinetics", code: "CHEMENG 130A" },
      { title: "Introduction to Kinetics and Reactor Design", code: "CHEMENG 130B" },
      { title: "Chemical Engineering Plant Design", code: "CHEMENG 180" },
      { title: "Chemical Engineering Laboratory A", code: "CHEMENG 185A" },
      { title: "Chemical Engineering Laboratory B", code: "CHEMENG 185B" },
      { title: "Undergraduate Research in Chemical Engineering", code: "CHEMENG 190" },
    ],
  },
  {
    title: "Interdisciplinary Earth and Environmental Sciences",
    courses: [
      { title: "Understand Energy", code: "EARTHSYS 103" },
      { title: "Environmental Science and Technology", code: "CEE 70" },
      { title: "Technometabolism: Technology, Society, and the Anthropocene", code: "STS 200J" },
      { title: "Life Cycle Assessment for Complex Systems", code: "CEE 226" },
      { title: "Imagining Adaptive Societies", code: "SUSTAIN 231" },
      { title: "Coevolution of Earth and Life", code: "EARTHSYS 4" },
      { title: "Science of Soils", code: "EARTHSYS 155" },
      { title: "Adaptation", code: "EARTHSYS 183" },
      { title: "Directed Individual Study in Earth Systems", code: "EARTHSYS 297" },
    ],
  },
  {
    title: "Chemistry",
    courses: [
      { title: "Chemical Principles: From Molecules to Solids", code: "CHEM 31M" },
      { title: "Structure and Reactivity of Organic Molecules", code: "CHEM 33" },
      { title: "Understanding the Natural and Unnatural World Through Chemistry", code: "CHEM 121" },
    ],
  },
  {
    title: "Law and Policy",
    courses: [
      { title: "Natural Resources Law & Policy", code: "LAW 2506" },
      { title: "Policy Practicum: Thinking in Systems", code: "LAW 809W" },
      { title: "Law and Governance in ESG Strategy", code: "LAW 1068" },
      { title: "Elements of Policy Analysis", code: "LAW 7846" },
      { title: "Climate Politics: Science and Global Governance", code: "INTLPOL 271" },
    ],
  },
  {
    title: "Physics and Math",
    courses: [
      { title: "Mechanics", code: "PHYSICS 41E" },
      { title: "Electricity & Magnetism", code: "PHYSICS 43" },
      { title: "Physics of Energy", code: "PHYSICS 240" },
      { title: "Calculus", code: "MATH 21" },
      { title: "Vector Calculus for Engineers", code: "CME 100A" },
      { title: "Ordinary Differential Equations for Engineers", code: "CME 102A" },
      { title: "Linear Algebra and Partial Differential Equations for Engineers", code: "CME 104" },
    ],
  },
  {
    title: "Biology and Bioengineering",
    courses: [
      { title: "Biochemistry & Molecular Biology", code: "BIO 83" },
      { title: "Cell Biology", code: "BIO 86" },
      { title: "Introduction to Bioengineering", code: "BIOE 80" },
      { title: "Inventing Synthetic Biosystems", code: "BIOE 195A" },
    ],
  },
  {
    title: "Science Communication",
    courses: [
      { title: "Intermediate Writing: Introduction to Science Communication", code: "PWR 91NSC" },
      { title: "Environmental Justice Storytelling: Writing for Impact", code: "EARTHSYS 91EJ" },
    ],
  },
];
