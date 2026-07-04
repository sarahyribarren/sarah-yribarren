import img04 from "@/assets/photos/image04.jpg";
import img06 from "@/assets/photos/image06.jpg";
import img15 from "@/assets/photos/image15.jpg";
import img16 from "@/assets/photos/image16.jpg";
import img22 from "@/assets/photos/image22.jpg";
import img23 from "@/assets/photos/image23.jpg";
import img24 from "@/assets/photos/image24.jpg";
import img26 from "@/assets/photos/image26.jpg";
import img28 from "@/assets/photos/image28.jpg";
import img29 from "@/assets/photos/image29.jpg";
import img30 from "@/assets/photos/image30.jpg";
import img31 from "@/assets/photos/image31.jpg";
import img32 from "@/assets/photos/image32.jpg";
import img33 from "@/assets/photos/image33.jpg";
import img34 from "@/assets/photos/image34.jpg";
import img38 from "@/assets/photos/image38.jpg";
import img39 from "@/assets/photos/image39.jpg";
import img42 from "@/assets/photos/image42.jpg";
import img43 from "@/assets/photos/image43.jpg";
import img44 from "@/assets/photos/image44.jpg";
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

export type Photo = { image: string; caption: string };
export type GallerySection = { title: string; note?: string; photos: Photo[] };

export const galleryIntro =
  "A little look into how I made the most of my life at Stanford.";

export const gallerySections: GallerySection[] = [
  {
    title: "🎓 Graduation",
    photos: [
      { image: img29, caption: "Masters graduation — received the Outstanding Service to the Earth Systems Program award." },
      { image: img15, caption: "Bachelors graduation — received the AIChE Distinguished Service award." },
      { image: img26, caption: "Presenting my Notation in Science Communication ePortfolio, for which I graduated with Distinction." },
    ],
  },
  {
    title: "🎷 The Stanford Band (LSJUMB)",
    note: "Extracurricular",
    photos: [
      { image: img22, caption: "Playing tenor saxophone at the first football game of the year." },
      { image: img16, caption: "Cheering on Women's Volleyball." },
      { image: img50, caption: "The Tree was sick once for a March Madness game… so I took over." },
    ],
  },
  {
    title: "🗣️ Ethics Bowl",
    photos: [
      { image: img30, caption: "The year I was Team Captain — first year winning Regionals (virtual comp)." },
      { image: img24, caption: "Became a Coach — the 2nd year in an ongoing 4-year CA champion streak." },
      { image: img52, caption: "Intense full-day case review session before a big competition." },
    ],
  },
  {
    title: "🧪 AIChE",
    photos: [
      { image: img55, caption: "Bi-annual activities fair recruiting." },
      { image: img51, caption: "My signature event — each quarter, ChemE trivia for the undergraduate community." },
      { image: img56, caption: "AIChE bonfire — one of many socials." },
    ],
  },
  {
    title: "🚗 Chem-E-Car",
    photos: [
      { image: img34, caption: "Recruiting at the first ChemE Car info session after starting it as a new registered VSO." },
      { image: img28, caption: "Integrating the zinc-air battery and stopping mechanism with the 3-D printed chassis… or trying." },
      { image: img04, caption: "First year was experimental and our car was not functional for competition — but we learned a LOT." },
    ],
  },
  {
    title: "♻️ Capstone: Greener Desalination Membranes from Plastic Waste",
    note: "Lab projects",
    photos: [
      { image: img23, caption: "Trying an electrospinning technique to get PET fibers from solution." },
      { image: img31, caption: "Light microscopy for initial screening of our desalination membranes." },
      { image: img49, caption: "Running saltwater through our desalination membranes." },
    ],
  },
  {
    title: "🧫 Capstone: Biosynthesis of FAEEs in E. coli",
    photos: [
      { image: img48, caption: "Mid-extraction photo break." },
      { image: img46, caption: "Late night analyzing our GC-MS data." },
      { image: img47, caption: "Group photo with the lab section + TA." },
    ],
  },
  {
    title: "⚡️ Tarpeh Lab: Electrochemical Stripping of Ammonia",
    photos: [
      { image: img61, caption: "Setting up the electrochemical cell and pumps for an experiment." },
      { image: img62, caption: "Waiting between pH measurements (in purple lab chic)." },
      { image: img63, caption: "Testing off-grid solar operation of the cell." },
    ],
  },
  {
    title: "⚗️ Cargnello Group: Nanoparticle Synthesis for Catalysis",
    photos: [
      { image: img32, caption: "Being real while we wash the nanoparticles with EtOH." },
      { image: img38, caption: "Group photo with the project team." },
      { image: img67, caption: "Setting up some synthesis experiments." },
    ],
  },
  {
    title: "🧬 iGEM: Engineering Cells to Detect Viral Sequences",
    photos: [
      { image: img45, caption: "First time meeting the crew after 3 months of virtual work." },
      { image: img43, caption: "With our source bacterial cultures." },
      { image: img44, caption: "Lab photoshoot after receiving $40,000 funding from Med Catalyst." },
    ],
  },
  {
    title: "🇨🇱 Chile — Stanford Summer Course on Sustainability",
    note: "Study & work abroad",
    photos: [
      { image: img58, caption: "At the Stanford center in Santiago." },
      { image: img59, caption: "Hydroelectric plant powered by Andean glacial melt." },
      { image: img60, caption: "Landfill near Santiago with biogas electricity generation." },
    ],
  },
  {
    title: "🇧🇴 Bolivia — Spanish Intensive in Sucre",
    photos: [
      { image: img70, caption: "My Bolivian host family of 6 weeks." },
      { image: img71, caption: "Practical Spanish lessons in the market with my private teacher." },
      { image: img72, caption: "Lunch and language games." },
    ],
  },
  {
    title: "🇵🇪 Peru — WindAid Institute Engineer-Volunteer, Trujillo",
    photos: [
      { image: img73, caption: "With the electrical box I built, after installing in the community." },
      { image: img76, caption: "Sanding down the wind turbine after fabricating in a mold with resin." },
      { image: img74, caption: "In the rural Andes with the fully-deployed wind turbine behind me." },
    ],
  },
  {
    title: "🌎 Bonus Abroad",
    photos: [
      { image: img33, caption: "After touring an active artisanal mine in Potosí, Bolivia." },
      { image: img77, caption: "Maras Salt Mines in southeast Peru, overlooking evaporation ponds." },
      { image: img79, caption: "Largest high-altitude geothermal geyser field in Atacama Desert, Chile." },
    ],
  },
  {
    title: "⚛️ \"Understand Energy\" Course Field Trips",
    note: "Other programs & opportunities",
    photos: [
      { image: img06, caption: "Walking inside cooling towers at a decommissioned nuclear plant." },
      { image: img53, caption: "In-depth tour of The Geysers geothermal power plant." },
      { image: img54, caption: "Touring the hydroelectric facilities at Shasta Dam." },
    ],
  },
  {
    title: "🌽 FUEL Program",
    photos: [
      { image: img57, caption: "Visit to an industrial organic farm and experimental field in Salinas." },
      { image: img39, caption: "Capitol building in Sacramento — meeting policymakers about sustainability and agriculture." },
      { image: img42, caption: "Tour of an organic farm incubator program in Salinas." },
    ],
  },
];