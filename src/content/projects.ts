export type ProjectLink = { label: string; url: string };
export type Project = {
  title: string;
  subtitle: string;
  image: string;
  links: ProjectLink[];
  route: string;
};

import img01 from "@/assets/photos/image01.jpg";
import img02 from "@/assets/photos/image02.jpg";
import img03 from "@/assets/photos/image03.jpg";
import img05 from "@/assets/photos/image05.jpg";
import img07 from "@/assets/photos/image07.jpg";
import img08 from "@/assets/photos/image08.jpg";
import img09 from "@/assets/photos/image09.jpg";
import img10 from "@/assets/photos/image10.jpg";
import img11 from "@/assets/photos/image11.jpg";
import img12 from "@/assets/photos/image12.jpg";
import img13 from "@/assets/photos/image13.jpg";
import img14 from "@/assets/photos/image14.jpg";
import img17 from "@/assets/photos/image17.jpg";
import img18 from "@/assets/photos/image18.jpg";
import img19 from "@/assets/photos/image19.jpg";
import img20 from "@/assets/photos/image20.jpg";
import img21 from "@/assets/photos/image21.jpg";
import img25 from "@/assets/photos/image25.jpg";
import img35 from "@/assets/photos/image35.jpg";
import img36 from "@/assets/photos/image36.jpg";
import img37 from "@/assets/photos/image37.jpg";

export const capstoneProjects: Project[] = [
  {
    title: "Enhancing Biosynthesis and Extraction of Fatty Acid Ethyl Esters in E. coli",
    subtitle: "CHEMENG 185A: Chemical Engineering Lab A",
    image: img05,
    route: "/capstone",
    links: [
      { label: "Final Report", url: "https://drive.google.com/file/d/1b66zc_P3jdWkD9KKSSydYDGS707oDDTQ/view?usp=sharing" },
      { label: "Final Slide Deck", url: "https://drive.google.com/file/d/1vUcQW3Ffg8diB6uSjV7iG2s_WieWYYIl/view?usp=sharing" },
    ],
  },
  {
    title: "Greener Synthesis of Nanofiltration Desalination Membranes from Upcycled PET Waste",
    subtitle: "CHEMENG 185A: Chemical Engineering Lab B",
    image: img02,
    route: "/capstone",
    links: [
      { label: "Project Proposal", url: "https://drive.google.com/file/d/1_Aw3BWpNW_3CDEiQSdBwrp3szVNrfFy9/view?usp=sharing" },
      { label: "Final Slide Deck", url: "https://drive.google.com/file/d/1y0xopeeSOrwK-dypi_Dp4ERGKD7YvypS/view?usp=sharing" },
      { label: "Final Presentation", url: "https://drive.google.com/file/d/1SQ3MAjKC1deayANsTTfI-RqxgpgiLkPO/view?usp=sharing" },
    ],
  },
  {
    title: "LithiumX: Recovering Lithium from Oil & Gas Produced Water",
    subtitle: "CHEMENG 180: Chemical Engineering Plant Design",
    image: img03,
    route: "/capstone",
    links: [
      { label: "Final Report", url: "https://drive.google.com/file/d/1CNYiRwq9Z3uGfxm36vzyUuoptc06sqEh/view?usp=sharing" },
      { label: "Final Slide Deck", url: "https://drive.google.com/file/d/1iSU-2xwVs2Q45xDo9oMTQyoKLsqIhM6O/view?usp=sharing" },
    ],
  },
];

export const researchProjects: Project[] = [
  {
    title: "Scaling an Electrochemical Nitrogen Recovery Process from Benchtop to Pilot Wastewater Plant",
    subtitle: "Tarpeh Lab, with Dr. Kindle Williams",
    image: img08,
    route: "/research",
    links: [
      { label: "Abstract", url: "https://iopscience.iop.org/article/10.1149/MA2023-01271763mtgabs" },
      { label: "Mid-Year Update Slides", url: "https://drive.google.com/file/d/1gd5G-As0zuAPUBThoyxV2xGTZJWp0JFS/view?usp=sharing" },
      { label: "Tableau Map", url: "https://public.tableau.com/app/profile/sarah.yribarren/viz/MapofTarpehLabContactsAroundtheWorldRefreshedDaily/Sheet1" },
    ],
  },
  {
    title: "Investigating the Mechanism of Formation of High-Entropy Alloy Nanoparticles",
    subtitle: "Cargnello Lab, with Dr. Evan Gardner",
    image: img09,
    route: "/research",
    links: [
      { label: "Final Poster", url: "https://drive.google.com/file/d/1WcEJ_tGeN_-AHlsAKoxaFNgxE5U0ArXZ/view?usp=sharing" },
    ],
  },
  {
    title: "SEED: Self-Replicating Environmentally-Embedded Diagnostic",
    subtitle: "iGEM student team, with Prof. Drew Endy and Prof. Stanley Qi",
    image: img07,
    route: "/research",
    links: [
      { label: "Website", url: "https://2020.igem.org/Team:Stanford" },
      { label: "Poster", url: "https://2020.igem.org/Team:Stanford/Poster" },
    ],
  },
];

export const physicsProjects: Project[] = [
  {
    title: "Aqueous Organic Redox Flow Batteries for Grid Energy Storage",
    subtitle: "PHYSICS 240: Introduction to the Physics of Energy",
    image: img13,
    route: "/physics",
    links: [{ label: "Quantitative Report", url: "http://large.stanford.edu/courses/2024/ph240/yribarren1/" }],
  },
  {
    title: "Dwindling ⁴He Supply on Earth & Feasibility of Mining Lunar ³He",
    subtitle: "CHEMENG 180: Chemical Engineering Plant Design",
    image: img14,
    route: "/physics",
    links: [{ label: "Quantitative Report", url: "https://drive.google.com/file/d/1bJelKHTDOjXNC6nRJcwPq9qDNXzegKJa/view?usp=sharing" }],
  },
  {
    title: "Biomass-Derived \"Green\" Graphite for US Domestic Supply",
    subtitle: "PHYSICS 240: Introduction to the Physics of Energy",
    image: img12,
    route: "/physics",
    links: [{ label: "Quantitative Report", url: "http://large.stanford.edu/courses/2024/ph240/yribarren2/" }],
  },
  {
    title: "Haber-Bosch Process & Energy Consumption",
    subtitle: "CHEMENG 180: Chemical Engineering Plant Design",
    image: img10,
    route: "/physics",
    links: [{ label: "Quantitative Report", url: "https://drive.google.com/file/d/167UJXmR9UFKFcN9DFR_noiX0CRZJ8CwP/view?usp=sharing" }],
  },
  {
    title: "Techno-Economic Analysis of the Microbial Production of PHB",
    subtitle: "CHEMENG 65Q: Chemical Engineering for Sustainability",
    image: img11,
    route: "/physics",
    links: [{ label: "Techno-Economic Analysis", url: "https://drive.google.com/file/d/1ZvaIr7vBD53NhKSqDwkf-HYrYbwTE6Ka/view?usp=sharing" }],
  },
];

export const earthSystemsProjects: Project[] = [
  {
    title: "Lithium Scarcity in the EV Industry",
    subtitle: "PWR 2: Rhetoric of Mobility",
    image: img25,
    route: "/earth-systems",
    links: [
      { label: "Final Paper", url: "https://drive.google.com/file/d/1CwabXIMi0V4-DxC8_Ag6iegT5J5bcQo3/view?usp=sharing" },
      { label: "Final Slide Deck", url: "https://drive.google.com/file/d/1ak1Nv-wg6uZh64Uj1PCJVhc2qXhE5elg/view?usp=sharing" },
      { label: "Final Presentation", url: "https://drive.google.com/file/d/1lc1MiREzBN1gJ5dRMHvWv3BQd9vUTYix/view?usp=sharing" },
    ],
  },
  {
    title: "Tracing the Development of Scientific Knowledge Around Ocean Acidification",
    subtitle: "INTLPOL 271: Climate Politics — Science and Global Governance",
    image: img35,
    route: "/earth-systems",
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/1aLjscrsiHFMfuFT9fdHISWWAX63bZ3SN/view?usp=sharing" }],
  },
  {
    title: "Technometabolism of Semiconductors: Material, Energy, Water, Waste, Labor, and Information Flows",
    subtitle: "STS 200J: Technology, Society, and the Anthropocene",
    image: img36,
    route: "/earth-systems",
    links: [{ label: "Dynamic Website", url: "https://a-semiconductor-sts200.vev.site/sts200j-ks/" }],
  },
  {
    title: "Lightweighting of Rivian Electric Vehicles: Comparing Life-Cycle CO₂e of Four Materials",
    subtitle: "CEE 266: Life Cycle Assessment for Complex Systems",
    image: img37,
    route: "/earth-systems",
    links: [
      { label: "Final Report", url: "https://drive.google.com/file/d/1UaHMqdxN56ZZaXbTVzmQ0C1pwnFBHgyX/view?usp=sharing" },
      { label: "Final Poster", url: "https://drive.google.com/file/d/1Pr5-dkFjV7VipsnyoqAuDx_2NPUM2DYi/view?usp=sharing" },
    ],
  },
];

export const lawPolicyProjects: Project[] = [
  {
    title: "Boomtown Economic Dynamics After Resource Discovery: Systems Map and Policy Recommendations",
    subtitle: "LAW 809W: Policy Practicum — Thinking in Systems",
    image: img17,
    route: "/law-policy",
    links: [
      { label: "Systems Map (Dynamic)", url: "https://kumu.io/sarahyribarren/boomtown-economic-dynamics-after-resource-discovery#final-draft" },
      { label: "Written Explanation", url: "https://drive.google.com/file/d/1OXNfXw5tZGADurzrEdxP2jdq0y9tKspf/view?usp=sharing" },
    ],
  },
  {
    title: "The World's Most Unappreciated Privilege: Sanitation Access and Clean Water",
    subtitle: "EARTHSYS 91EJ: Environmental Justice Storytelling — Writing for Impact",
    image: img20,
    route: "/law-policy",
    links: [
      { label: "Paper", url: "https://drive.google.com/file/d/10LIgok5I-5jwOVHutN8dPugs207nQrYc/view?usp=sharing" },
      { label: "Video Essay", url: "https://youtu.be/Cgl4AvLB2O8" },
    ],
  },
  {
    title: "Scientific Evidence & Technological Innovation in ESG Law: Enforcing the UFLPA with Geochemical Fingerprinting",
    subtitle: "LAW 1088: Law and Governance in ESG Strategy",
    image: img19,
    route: "/law-policy",
    links: [{ label: "Paper", url: "https://drive.google.com/file/d/1L_0i-XxJb6rFX9zVQ93Y5GH59k-pZbtf/view?usp=sharing" }],
  },
  {
    title: "The Role of Technology in Eliminating Worker Exploitation in Adaptive Societies",
    subtitle: "SUSTAIN 231: Imagining Adaptive Societies",
    image: img21,
    route: "/law-policy",
    links: [{ label: "Expository Essay", url: "https://drive.google.com/file/d/1v8Gmwlk09vtet3v_zTXecYU6DsK2Ogzi/view?usp=sharing" }],
  },
  {
    title: "Philanthropic Fund for Community Needs at the Rhyolite Ridge Li-B Mine",
    subtitle: "EARTHSYS 212: Human Society and Environmental Change",
    image: img18,
    route: "/law-policy",
    links: [
      { label: "Equity Action Plan", url: "https://drive.google.com/file/d/1btvDhU7VSa5PpKf95wXxY4LP0aywbaeY/view?usp=sharing" },
      { label: "Summary Slide Deck", url: "https://drive.google.com/file/d/1GiB9887rfAbnMH0ZM7qJLHwCOpx3Q8_H/view?usp=sharing" },
    ],
  },
];

export const headshot = img01;