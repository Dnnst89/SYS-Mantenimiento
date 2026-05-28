/**
 * Contenido de la grilla “Explorá por categoría” en la página de inicio (diseño dedicado).
 * Las rutas siguen enlazando a las páginas de sector existentes.
 */

const LIST = [
  {
    slugEs: "residencial",
    slugEn: "residential",
    icon: "home",
    image:
      "/imgLanding/ResidencialL.png",
    alt: {
      es: "Fachada moderna de un edificio con paredes exteriores en tonos negro y verde",
      en: "Modern facade of a building with exterior walls in black and green tones.",
    },
    titles: { es: "Residencial", en: "Residential" },
    descriptions: {
      es: "Soluciones integrales para hogares. Remodelaciones, mantenimiento y más.",
      en: "End-to-end solutions for homes. Remodeling, maintenance, and more.",
    },
  },
  {
    slugEs: "comercial",
    slugEn: "commercial",
    icon: "office",
    image:
      "/imgLanding/ComercialL.png",
    alt: {
      es: "Interior de una cafetería moderna y acogedora llamada Elements Cafe",
      en: "Interior of a modern and cozy cafe called Elements Cafe.",
    },
    titles: { es: "Comercial", en: "Commercial" },
    descriptions: {
      es: "Espacios funcionales y modernos para tu negocio. Calidad que se nota.",
      en: "Functional, modern spaces for your business. Quality you can feel.",
    },
  },
  {
    slugEs: "industrial",
    slugEn: "industrial",
    icon: "factory",
    image:
      "/imgLanding/IndustrialL.png",
    alt: {
      es: "Interior de una amplia estructura u obra gris techada con láminas metálicas",
      en: "Interior of a large structure or unfinished building roofed with metal sheets.",
    },
    titles: { es: "Industrial", en: "Industrial" },
    descriptions: {
      es: "Mantenimiento y soluciones técnicas para la industria. Eficiencia garantizada.",
      en: "Maintenance and technical solutions for industry. Efficiency guaranteed.",
    },
  },
  {
    slugEs: "institucional",
    slugEn: "institutional",
    icon: "columns",
    image:
      "/imgLanding/InstitucionalL.png",
    alt: {
      es: "Nave industrial o taller que destaca una gran grúa pórtico móvil de color amarillo",
      en: "Industrial building or workshop featuring a large yellow mobile gantry crane",
    },
    titles: { es: "Institucional", en: "Institutional" },
    descriptions: {
      es: "Proyectos para instituciones y organizaciones. Compromiso y seriedad.",
      en: "Projects for institutions and organizations. Commitment and rigor.",
    },
  },
];

/** @param {'es' | 'en'} locale */
export function getProjectsCategoryCards(locale) {
  return LIST.map((item) => ({
    href:
      locale === "en" ?
        `/en/sectors/${item.slugEn}`
      : `/sectores/${item.slugEs}`,
    title: item.titles[locale],
    description: item.descriptions[locale],
    image: item.image,
    imageAlt: item.alt[locale],
    icon: item.icon,
  }));
}
