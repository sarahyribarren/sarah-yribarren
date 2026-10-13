export type Story = {
  /** Country name as it appears in the world map data (e.g. "United States of America"). */
  country: string;
  /** US state name (e.g. "Alaska", "District of Columbia"); only used for the United States. */
  region?: string;
  /** City, town, or named location the story is pinned to. */
  place: string;
  /** Neighborhood within the place (e.g. "Barranco" in Lima). Places with areas open up into them on the map. */
  area?: string;
  /** [longitude, latitude] */
  coords: [number, number];
  url: string;
  title?: string;
  date?: string;
  cover?: string;
};

import alaskaGlacier from "@/assets/photos/alaska-glacier.jpg";

const US = "United States of America";
const PLACEHOLDER_URL = "https://substack.com";

// Shorthand for one placeholder story at a place; pass `extra` for a title, area, cover, etc.
const at = (country: string, place: string, coords: [number, number], extra: Partial<Story> = {}): Story => ({
  country,
  place,
  coords,
  url: PLACEHOLDER_URL,
  ...extra,
});

// PLACEHOLDER ENTRIES — swap links and photos for the real stories. Coordinates are approximate.
export const stories: Story[] = [
  // Mexico
  at("Mexico", "Ciudad de México", [-99.13, 19.43]),
  at("Mexico", "Mérida", [-89.62, 20.97]),
  at("Mexico", "Chichén Itzá", [-88.57, 20.68]),
  at("Mexico", "Izamal", [-89.02, 20.93]),
  at("Mexico", "Celestún", [-90.4, 20.86]),

  // Panama
  at("Panama", "Panama City", [-79.52, 8.98]),

  // Colombia
  at("Colombia", "Medellín", [-75.57, 6.25]),
  at("Colombia", "Cartagena", [-75.51, 10.39]),
  at("Colombia", "Salento", [-75.57, 4.64]),
  at("Colombia", "Santa Rosa de Cabal", [-75.62, 4.87]),
  at("Colombia", "Pereira", [-75.69, 4.81]),
  at("Colombia", "Santa Marta", [-74.2, 11.24]),

  // Peru
  at("Peru", "Celendín", [-78.15, -6.87]),
  at("Peru", "Cajamarca", [-78.51, -7.16]),
  at("Peru", "Baños del Inca", [-78.46, -7.16]),
  at("Peru", "Chachapoyas", [-77.87, -6.23]),
  at("Peru", "Trujillo", [-79.03, -8.11]),
  at("Peru", "Huanchaco", [-79.12, -8.08]),
  at("Peru", "Puerto Malabrigo", [-79.43, -7.7]),
  at("Peru", "Salpo", [-78.61, -8.0]),
  at("Peru", "Huaraz", [-77.53, -9.53]),
  at("Peru", "Macashca", [-77.5, -9.56]),
  at("Peru", "Lake Churup", [-77.42, -9.48]),
  at("Peru", "Lima", [-77.02, -12.15], { area: "Barranco" }),
  at("Peru", "Lima", [-77.03, -12.12], { area: "Miraflores" }),
  at("Peru", "Lima", [-77.07, -12.09], { area: "Magdalena del Mar" }),
  at("Peru", "Lima", [-77.03, -12.05], { area: "Centro Histórico" }),
  at("Peru", "Lima", [-76.94, -12.08], { area: "La Molina" }),
  at("Peru", "Lima", [-77.09, -12.08], { area: "San Miguel" }),
  at("Peru", "Lima", [-76.92, -12.03], { area: "Ate" }),
  at("Peru", "Paracas", [-76.25, -13.83]),
  at("Peru", "Ica", [-75.73, -14.07]),
  at("Peru", "Huacachina", [-75.76, -14.09]),
  at("Peru", "Arequipa", [-71.54, -16.41]),
  at("Peru", "Iquitos", [-73.25, -3.75]),
  at("Peru", "Cusco", [-71.97, -13.53], { title: "Market in San Martín" }),
  at("Peru", "Saqsaywaman", [-71.98, -13.51]),
  at("Peru", "Tipón", [-71.78, -13.57]),
  at("Peru", "Chinchero", [-72.05, -13.39], { title: "Alpaca weavers collective" }),
  at("Peru", "Maras", [-72.16, -13.33]),
  at("Peru", "Moray", [-72.2, -13.33]),
  at("Peru", "Ollantaytambo", [-72.26, -13.26]),
  at("Peru", "Aguas Calientes", [-72.52, -13.15]),
  at("Peru", "Machu Picchu", [-72.55, -13.16]),

  // Bolivia
  at("Bolivia", "La Paz", [-68.15, -16.5]),
  at("Bolivia", "El Alto", [-68.19, -16.5]),
  at("Bolivia", "Huayna Potosí", [-68.15, -16.26]),
  at("Bolivia", "Salar de Uyuni", [-67.49, -20.13]),
  at("Bolivia", "Potosí", [-65.75, -19.58], { title: "Artisanal mine inside Cerro Rico" }),
  at("Bolivia", "Sucre", [-65.26, -19.05]),
  at("Bolivia", "Chuquisaca", [-65.1, -19.2], { title: "Host mom's countryside home" }),

  // Chile
  at("Chile", "San Pedro de Atacama", [-68.2, -22.91]),
  at("Chile", "Valparaíso", [-71.62, -33.05]),
  at("Chile", "Las Cruces", [-71.62, -33.5]),
  at("Chile", "Santiago", [-70.67, -33.45]),
  at("Chile", "Talca", [-71.66, -35.43]),
  at("Chile", "Valdivia", [-73.25, -39.81]),
  at("Chile", "Puerto Varas", [-72.98, -41.32]),

  // Uzbekistan
  at("Uzbekistan", "Tashkent", [69.24, 41.3]),
  at("Uzbekistan", "Samarkand", [66.96, 39.65]),
  at("Uzbekistan", "Bukhara", [64.42, 39.77]),
  at("Uzbekistan", "Khiva", [60.36, 41.38]),
  at("Uzbekistan", "Nukus", [59.6, 42.46]),
  at("Uzbekistan", "Aral Sea (Karakalpakstan)", [59.02, 43.77]),

  // Spain
  at("Spain", "Madrid", [-3.7, 40.42]),
  at("Spain", "Barcelona", [2.17, 41.39]),

  // Thailand
  at("Thailand", "Bangkok", [100.5, 13.75]),
  at("Thailand", "Chiang Mai", [98.99, 18.79]),

  // Vietnam
  at("Vietnam", "Hanoi", [105.85, 21.03]),
  at("Vietnam", "Hội An", [108.33, 15.88]),

  // United States
  at(US, "Juneau", [-134.42, 58.3], { region: "Alaska", cover: alaskaGlacier }),
  at(US, "Seattle", [-122.33, 47.61], { region: "Washington" }),
  at(US, "San Francisco", [-122.42, 37.77], { region: "California" }),
  at(US, "Charleston", [-79.93, 32.78], { region: "South Carolina" }),
  at(US, "New River Gorge", [-81.08, 38.07], { region: "West Virginia" }),
  at(US, "Shenandoah", [-78.45, 38.53], { region: "Virginia" }),
  at(US, "Washington, DC", [-77.04, 38.9], { region: "District of Columbia" }),
  at(US, "Baltimore", [-76.61, 39.29], { region: "Maryland" }),
  at(US, "Asheville", [-82.55, 35.6], { region: "North Carolina" }),
  at(US, "Savannah", [-81.1, 32.08], { region: "Georgia" }),
  at(US, "Philadelphia", [-75.17, 39.95], { region: "Pennsylvania" }),
];
