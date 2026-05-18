/** @typedef {{ src: string; alt: { es: string; en: string } }} HomeBrandItem */

const files = [
  {
    file: "Color Visión S.A.png",
    alt: { es: "Color Visión S.A.", en: "Color Visión S.A." },
  },
  {
    file: "Ecoplaza Villareal S.A.jpeg",
    alt: { es: "Ecoplaza Villareal S.A.", en: "Ecoplaza Villareal S.A." },
  },
  {
    file: "Granalto Bohorquez S.A.png",
    alt: { es: "Granalto Bohorquez S.A.", en: "Granalto Bohorquez S.A." },
  },
  {
    file: "Industrias Panorama S.A..png",
    alt: { es: "Industrias Panorama S.A.", en: "Industrias Panorama S.A." },
  },
  {
    file: "Solar World S.A.jpg",
    alt: { es: "Solar World S.A.", en: "Solar World S.A." },
  },
  {
    file: "Porceramica SRL.png",
    alt: { es: "Porcerámica SRL", en: "Porceramica SRL" },
  },
  {
    file: "tecnikids.svg",
    alt: { es: "Tecnikids", en: "Tecnikids" },
  },
];

/** @type {HomeBrandItem[]} */
export const homeBrandItems = files.map(({ file, alt }) => ({
  src: `/brands/${encodeURIComponent(file)}`,
  alt,
}));
