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
      es: "Edificio comercial de porceramica ",
      en: "Commercial building made of porcelain tiles.",
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
      es: "Cafeteria con instalacion de lamparas e iluminacion",
      en: "Cafeteria with lamp and lighting installation.",
    },
    titles: { es: "Comercial", en: "Commercial" },
    descriptions: {
      es: "Espacios funcionales y modernos para tu negocio. Calidad que se nota",
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
      es: "Taller de metalmecánica, con instalacion electrica en proceso",
      en: "Metalworking workshop, with electrical installation in progress.",
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
      es: "Grua portica, tipo puente",
      en: "Gantry crane, bridge type",
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
