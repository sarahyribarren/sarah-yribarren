export type CourseLink = { label: string; url: string };

export type Course = {
  title: string;
  code: string;
  links?: CourseLink[];
};

export type CourseCategory = {
  title: string;
  courses: Course[];
};

export const courseworkCategories: CourseCategory[] = [
  {
    title: "🧪 Chemical Engineering",
    courses: [
      { title: "Introduction to Chemical Engineering", code: "CHEMENG 20" },
      {
        title: "Chemical Engineering for Sustainability",
        code: "CHEMENG 65Q",
        links: [{ label: "Techno-Economic Analysis", url: "https://drive.google.com/file/d/1ZvaIr7vBD53NhKSqDwkf-HYrYbwTE6Ka/view?usp=sharing" }],
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
        links: [
          { label: "LithiumX Report", url: "https://drive.google.com/file/d/1CNYiRwq9Z3uGfxm36vzyUuoptc06sqEh/view?usp=sharing" },
          { label: "⁴He Supply Report", url: "https://drive.google.com/file/d/1bJelKHTDOjXNC6nRJcwPq9qDNXzegKJa/view?usp=sharing" },
          { label: "Haber-Bosch Report", url: "https://drive.google.com/file/d/167UJXmR9UFKFcN9DFR_noiX0CRZJ8CwP/view?usp=sharing" },
        ],
      },
      {
        title: "Chemical Engineering Laboratory A",
        code: "CHEMENG 185A",
        links: [
          { label: "Biosynthesis: Final Report", url: "https://drive.google.com/file/d/1b66zc_P3jdWkD9KKSSydYDGS707oDDTQ/view?usp=sharing" },
          { label: "Biosynthesis: Slide Deck", url: "https://drive.google.com/file/d/1vUcQW3Ffg8diB6uSjV7iG2s_WieWYYIl/view?usp=sharing" },
        ],
      },
      {
        title: "Chemical Engineering Laboratory B",
        code: "CHEMENG 185B",
        links: [
          { label: "Desalination: Proposal", url: "https://drive.google.com/file/d/1_Aw3BWpNW_3CDEiQSdBwrp3szVNrfFy9/view?usp=sharing" },
          { label: "Desalination: Slide Deck", url: "https://drive.google.com/file/d/1y0xopeeSOrwK-dypi_Dp4ERGKD7YvypS/view?usp=sharing" },
          { label: "Desalination: Presentation", url: "https://drive.google.com/file/d/1SQ3MAjKC1deayANsTTfI-RqxgpgiLkPO/view?usp=sharing" },
        ],
      },
      { title: "Undergraduate Research in Chemical Engineering", code: "CHEMENG 190" },
    ],
  },
  {
    title: "🌍 Interdisciplinary Earth and Environmental Sciences",
    courses: [
      { title: "Understand Energy", code: "EARTHSYS 103" },
      { title: "Environmental Science and Technology", code: "CEE 70" },
      {
        title: "Technometabolism: Technology, Society, and the Anthropocene",
        code: "STS 200J",
        links: [{ label: "Dynamic Website", url: "https://a-semiconductor-sts200.vev.site/sts200j-ks/" }],
      },
      {
        title: "Life Cycle Assessment for Complex Systems",
        code: "CEE 226",
        links: [
          { label: "Final Report", url: "https://drive.google.com/file/d/1UaHMqdxN56ZZaXbTVzmQ0C1pwnFBHgyX/view?usp=sharing" },
          { label: "Final Poster", url: "https://drive.google.com/file/d/1Pr5-dkFjV7VipsnyoqAuDx_2NPUM2DYi/view?usp=sharing" },
        ],
      },
      {
        title: "Imagining Adaptive Societies",
        code: "SUSTAIN 231",
        links: [{ label: "Expository Essay", url: "https://drive.google.com/file/d/1v8Gmwlk09vtet3v_zTXecYU6DsK2Ogzi/view?usp=sharing" }],
      },
      { title: "Coevolution of Earth and Life", code: "EARTHSYS 4" },
      { title: "Science of Soils", code: "EARTHSYS 155" },
      { title: "Adaptation", code: "EARTHSYS 183" },
      { title: "Directed Individual Study in Earth Systems", code: "EARTHSYS 297" },
    ],
  },
  {
    title: "⚗️ Chemistry",
    courses: [
      { title: "Chemical Principles: From Molecules to Solids", code: "CHEM 31M" },
      { title: "Structure and Reactivity of Organic Molecules", code: "CHEM 33" },
      { title: "Understanding the Natural and Unnatural World Through Chemistry", code: "CHEM 121" },
    ],
  },
  {
    title: "⚖️ Law and Policy",
    courses: [
      { title: "Natural Resources Law & Policy", code: "LAW 2506" },
      {
        title: "Policy Practicum: Thinking in Systems",
        code: "LAW 809W",
        links: [
          { label: "Systems Map (Dynamic)", url: "https://kumu.io/sarahyribarren/boomtown-economic-dynamics-after-resource-discovery#final-draft" },
          { label: "Written Explanation", url: "https://drive.google.com/file/d/1OXNfXw5tZGADurzrEdxP2jdq0y9tKspf/view?usp=sharing" },
        ],
      },
      {
        title: "Law and Governance in ESG Strategy",
        code: "LAW 1088",
        links: [{ label: "Paper", url: "https://drive.google.com/file/d/1L_0i-XxJb6rFX9zVQ93Y5GH59k-pZbtf/view?usp=sharing" }],
      },
      { title: "Elements of Policy Analysis", code: "LAW 7846" },
      {
        title: "Climate Politics: Science and Global Governance",
        code: "INTLPOL 271",
        links: [{ label: "Paper", url: "https://drive.google.com/file/d/1aLjscrsiHFMfuFT9fdHISWWAX63bZ3SN/view?usp=sharing" }],
      },
    ],
  },
  {
    title: "📐 Physics and Math",
    courses: [
      { title: "Mechanics", code: "PHYSICS 41E" },
      { title: "Electricity & Magnetism", code: "PHYSICS 43" },
      {
        title: "Physics of Energy",
        code: "PHYSICS 240",
        links: [
          { label: "Redox Flow Battery Report", url: "http://large.stanford.edu/courses/2024/ph240/yribarren1/" },
          { label: "Green Graphite Report", url: "http://large.stanford.edu/courses/2024/ph240/yribarren2/" },
        ],
      },
      { title: "Calculus", code: "MATH 21" },
      { title: "Vector Calculus for Engineers", code: "CME 100A" },
      { title: "Ordinary Differential Equations for Engineers", code: "CME 102A" },
      { title: "Linear Algebra and Partial Differential Equations for Engineers", code: "CME 104" },
    ],
  },
  {
    title: "🧬 Biology and Bioengineering",
    courses: [
      { title: "Biochemistry & Molecular Biology", code: "BIO 83" },
      { title: "Cell Biology", code: "BIO 86" },
      { title: "Introduction to Bioengineering", code: "BIOE 80" },
      { title: "Inventing Synthetic Biosystems", code: "BIOE 195A" },
    ],
  },
  {
    title: "✍️ Science Communication",
    courses: [
      { title: "Intermediate Writing: Introduction to Science Communication", code: "PWR 91NSC" },
      {
        title: "Environmental Justice Storytelling: Writing for Impact",
        code: "EARTHSYS 91EJ",
        links: [
          { label: "Paper", url: "https://drive.google.com/file/d/10LIgok5I-5jwOVHutN8dPugs207nQrYc/view?usp=sharing" },
          { label: "Video Essay", url: "https://youtu.be/Cgl4AvLB2O8" },
        ],
      },
    ],
  },
];
