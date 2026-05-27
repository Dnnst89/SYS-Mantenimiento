export const SECTOR_LIST = [
  {
    slugEs: "residencial",
    slugEn: "residential",
<<<<<<< HEAD
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80&auto=format&fit=crop",
=======
    src: "/imgLanding/ResidencialL.png",
>>>>>>> a8f8ba6 (Se actualizaron las imagenes del landing)
    alt: {
      es: "Vivienda de lujo al anochecer con piscina e iluminación cálida",
      en: "Luxury home at dusk with pool and warm lighting",
    },
    titles: { es: "Residencial", en: "Residential" },
    heroAccent: { es: "Residenciales", en: "Residential" },
    heroTagline: {
      es: "Conocé algunos de los trabajos que hemos realizado para hogares en todo Costa Rica. Calidad, compromiso y atención al detalle en cada proyecto.",
      en: "See some of the work we have done for homes across Costa Rica. Quality, commitment, and attention to detail on every project.",
    },
    descriptions: {
      es: "Servicios de mantenimiento para conjuntos habitacionales, casas y comunidades cerradas. Más información próximamente.",
      en: "Maintenance services for housing complexes, houses, and gated communities. More information coming soon.",
    },
  },
  {
    slugEs: "comercial",
    slugEn: "commercial",
<<<<<<< HEAD
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80&auto=format&fit=crop",
=======
    src: "/imgLanding/ComercialL.png",
>>>>>>> a8f8ba6 (Se actualizaron las imagenes del landing)
    alt: {
      es: "Espacio de oficina moderno",
      en: "Modern office interior",
    },
    titles: { es: "Comercial", en: "Commercial" },
    heroAccent: { es: "Comerciales", en: "Commercial" },
    heroTagline: {
      es: "Conocé proyectos y mantenimientos que hemos llevado adelante para empresas y locales comerciales en Costa Rica. Soluciones que funcionan día a día.",
      en: "Explore projects and maintenance we have delivered for businesses and retail spaces in Costa Rica. Solutions built for day-to-day operations.",
    },
    descriptions: {
      es: "Mantenimiento para oficinas, retail y espacios comerciales. Más información próximamente.",
      en: "Maintenance for offices, retail, and commercial spaces. More information coming soon.",
    },
  },
  {
    slugEs: "industrial",
    slugEn: "industrial",
<<<<<<< HEAD
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80&auto=format&fit=crop",
=======
    src: "/imgLanding/IndustrialL.png",
>>>>>>> a8f8ba6 (Se actualizaron las imagenes del landing)
    alt: {
      es: "Instalación industrial",
      en: "Industrial facility",
    },
    titles: { es: "Industrial", en: "Industrial" },
    heroAccent: { es: "Industriales", en: "Industrial" },
    heroTagline: {
      es: "Te mostramos intervenciones en plantas, bodegas y líneas de producción donde priorizamos seguridad, continuidad y eficiencia operativa.",
      en: "A look at work in plants, warehouses, and production lines where we prioritize safety, uptime, and operational efficiency.",
    },
    descriptions: {
      es: "Soporte de mantenimiento para plantas, bodegas y operaciones industriales. Más información próximamente.",
      en: "Maintenance support for plants, warehouses, and industrial operations. More information coming soon.",
    },
  },
  {
    slugEs: "institucional",
    slugEn: "institutional",
<<<<<<< HEAD
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80&auto=format&fit=crop",
=======
    src: "/imgLanding/InstitucionalL.png",
>>>>>>> a8f8ba6 (Se actualizaron las imagenes del landing)
    alt: {
      es: "Edificio institucional",
      en: "Institutional building",
    },
    titles: { es: "Institucional", en: "Institutional" },
    heroAccent: { es: "Institucionales", en: "Institutional" },
    heroTagline: {
      es: "Referentes de proyectos para instituciones públicas, educativas y corporativas, con el rigor y la planificación que cada organización merece.",
      en: "Examples of work for public, educational, and corporate institutions—with the rigor and planning every organization deserves.",
    },
    descriptions: {
      es: "Mantenimiento para instituciones públicas, educativas y corporativas. Más información próximamente.",
      en: "Maintenance for public, educational, and corporate institutions. More information coming soon.",
    },
  },
];

export function getSectorBySlugEs(slug) {
  return SECTOR_LIST.find((s) => s.slugEs === slug) ?? null;
}

export function getSectorBySlugEn(slug) {
  return SECTOR_LIST.find((s) => s.slugEn === slug) ?? null;
}

/** @param {'es' | 'en'} locale */
export function getSectorGridItems(locale) {
  return SECTOR_LIST.map((s) => ({
    href: locale === "en" ? `/en/sectors/${s.slugEn}` : `/sectores/${s.slugEs}`,
    label: s.titles[locale],
    alt: s.alt[locale],
    src: s.src,
  }));
}

export function sectorStaticSlugEs() {
  return SECTOR_LIST.map((s) => ({ slug: s.slugEs }));
}

export function sectorStaticSlugEn() {
  return SECTOR_LIST.map((s) => ({ slug: s.slugEn }));
}

/** @returns {string | null} */
export function alternateLocalePathForSectorPathname(normalizedPath) {
  const esMatch = /^\/sectores\/([^/]+)$/.exec(normalizedPath);
  if (esMatch) {
    const s = getSectorBySlugEs(esMatch[1]);
    return s ? `/en/sectors/${s.slugEn}` : null;
  }
  const enMatch = /^\/en\/sectors\/([^/]+)$/.exec(normalizedPath);
  if (enMatch) {
    const s = getSectorBySlugEn(enMatch[1]);
    return s ? `/sectores/${s.slugEs}` : null;
  }
  return null;
}
