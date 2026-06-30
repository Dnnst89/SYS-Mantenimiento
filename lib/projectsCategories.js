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
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80&auto=format&fit=crop",
    alt: {
      es: "Casa moderna al atardecer con piscina",
      en: "Modern home at dusk with pool",
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
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80&auto=format&fit=crop",
    alt: {
      es: "Pasillo de oficina con vidrio e iluminación",
      en: "Bright modern office corridor with glass walls",
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
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80&auto=format&fit=crop",
    alt: {
      es: "Taller industrial con operario",
      en: "Industrial workshop with worker",
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
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=900&q=80&auto=format&fit=crop",
    alt: {
      es: "Rascacielos de vidrio vistos desde abajo",
      en: "Glass skyscrapers seen from street level",
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
