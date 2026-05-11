const SECTOR_LIST = [
  {
    slugEs: "residencial",
    slugEn: "residential",
    src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    alt: {
      es: "Vivienda residencial vista aérea",
      en: "Residential housing aerial view",
    },
    titles: { es: "Residencial", en: "Residential" },
    descriptions: {
      es: "Servicios de mantenimiento para conjuntos habitacionales, casas y comunidades cerradas. Más información próximamente.",
      en: "Maintenance services for housing complexes, houses, and gated communities. More information coming soon.",
    },
  },
  {
    slugEs: "comercial",
    slugEn: "commercial",
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    alt: {
      es: "Espacio de oficina moderno",
      en: "Modern office interior",
    },
    titles: { es: "Comercial", en: "Commercial" },
    descriptions: {
      es: "Mantenimiento para oficinas, retail y espacios comerciales. Más información próximamente.",
      en: "Maintenance for offices, retail, and commercial spaces. More information coming soon.",
    },
  },
  {
    slugEs: "industrial",
    slugEn: "industrial",
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    alt: {
      es: "Instalación industrial",
      en: "Industrial facility",
    },
    titles: { es: "Industrial", en: "Industrial" },
    descriptions: {
      es: "Soporte de mantenimiento para plantas, bodegas y operaciones industriales. Más información próximamente.",
      en: "Maintenance support for plants, warehouses, and industrial operations. More information coming soon.",
    },
  },
  {
    slugEs: "institucional",
    slugEn: "institutional",
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    alt: {
      es: "Edificio institucional",
      en: "Institutional building",
    },
    titles: { es: "Institucional", en: "Institutional" },
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
