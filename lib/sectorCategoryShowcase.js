const IMG = {
  r1: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80&auto=format&fit=crop",
  r2: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=80&auto=format&fit=crop",
  r3: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1400&q=80&auto=format&fit=crop",
  r4: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=80&auto=format&fit=crop",
  r5: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1400&q=80&auto=format&fit=crop",
  r6: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&q=80&auto=format&fit=crop",
};

const SHARED_FILTERS = [
  { id: "todos", es: "Todos", en: "All" },
  { id: "remodelaciones", es: "Remodelaciones", en: "Remodeling" },
  { id: "mantenimiento", es: "Mantenimiento", en: "Maintenance" },
  { id: "reparaciones", es: "Reparaciones", en: "Repairs" },
  { id: "ampliaciones", es: "Ampliaciones", en: "Extensions" },
];

const OVERRIDES = {
  residencial: {
    projects: [
      {
        id: "escazu",
        tags: ["todos", "remodelaciones"],
        kicker: { es: "REMODELACIÓN COMPLETA", en: "FULL REMODEL" },
        title: { es: "Casa Habitación • Escazú", en: "Single-family home • Escazú" },
        client: { es: "Juan Pérez", en: "John Pérez" },
        location: { es: "Escazú, San José", en: "Escazú, San José" },
        year: "2024",
        services: {
          es: "Remodelación de cocina, pisos, baños y área social.",
          en: "Kitchen, flooring, bathrooms, and social area remodeling.",
        },
        imageAlts: {
          es: [
            "Fachada y área exterior de vivienda",
            "Cocina remodelada",
            "Sala de estar",
            "Baño principal",
            "Detalle de pisos",
            "Área social",
          ],
          en: [
            "Home exterior",
            "Remodeled kitchen",
            "Living room",
            "Main bathroom",
            "Flooring detail",
            "Social area",
          ],
        },
        images: [IMG.r1, IMG.r2, IMG.r3, IMG.r4, IMG.r5, IMG.r6],
      },
      {
        id: "curridabat-mant",
        tags: ["todos", "mantenimiento"],
        kicker: { es: "MANTENIMIENTO INTEGRAL", en: "FULL MAINTENANCE" },
        title: { es: "Condominio • Curridabat", en: "Condominium • Curridabat" },
        client: { es: "Administración conjunto", en: "HOA management" },
        location: { es: "Curridabat, San José", en: "Curridabat, San José" },
        year: "2023",
        services: {
          es: "Planes periódicos de áreas comunes, iluminación y revisión de instalaciones.",
          en: "Periodic plans for common areas, lighting, and systems inspection.",
        },
        imageAlts: {
          es: ["Ingreso condominio", "Pasillos", "Área verde", "Estacionamiento", "Lobby"],
          en: ["Condominium entrance", "Hallways", "Green area", "Parking", "Lobby"],
        },
        images: [IMG.r3, IMG.r4, IMG.r1, IMG.r5, IMG.r2],
      },
    ],
  },
};

function pickLocale(obj, locale) {
  return obj[locale] ?? obj.es;
}

function defaultProjectsForSector(sector) {
  return [
    {
      id: sector.slugEs,
      tags: ["todos", "mantenimiento"],
      kicker: {
        es: "REFERENCIA DE SECTOR",
        en: "SECTOR SHOWCASE",
      },
      title: {
        es: `Proyecto destacado — ${sector.titles.es}`,
        en: `Featured project — ${sector.titles.en}`,
      },
      client: {
        es: "Cliente corporativo",
        en: "Corporate client",
      },
      location: {
        es: "Costa Rica",
        en: "Costa Rica",
      },
      year: "2024",
      services: {
        es: sector.descriptions.es,
        en: sector.descriptions.en,
      },
      imageAlts: {
        es: [sector.alt.es, sector.alt.es, sector.alt.es],
        en: [sector.alt.en, sector.alt.en, sector.alt.en],
      },
      images: [sector.src, sector.src, sector.src],
    },
  ];
}

/**
 * @param {'es' | 'en'} locale
 * @param {object} sector
 */
export function getSectorCategoryShowcase(locale, sector) {
  const slug = sector.slugEs;
  const ov = OVERRIDES[slug];
  const projectsRaw = ov?.projects ?? defaultProjectsForSector(sector);

  const filters = SHARED_FILTERS.map((f) => ({
    id: f.id,
    label: locale === "en" ? f.en : f.es,
  }));

  const projects = projectsRaw.map((p) => ({
    id: p.id,
    tags: p.tags,
    kicker: pickLocale(p.kicker, locale),
    title: pickLocale(p.title, locale),
    client: pickLocale(p.client, locale),
    location: pickLocale(p.location, locale),
    year: p.year,
    services: pickLocale(p.services, locale),
    images: p.images.map((src, i) => ({
      src,
      alt: (pickLocale(p.imageAlts, locale)[i] ?? pickLocale(p.imageAlts, locale)[0]) || sector.alt[locale],
    })),
  }));

  return {
    filters,
    sortLabel: locale === "en" ? "Sort by:" : "Ordenar por:",
    sortOptions: [
      {
        id: "recent",
        label: locale === "en" ? "Newest" : "Más recientes",
      },
      {
        id: "oldest",
        label: locale === "en" ? "Oldest" : "Más antiguos",
      },
    ],
    projects,
    detailLabels: {
      client: locale === "en" ? "Client" : "Cliente",
      location: locale === "en" ? "Location" : "Ubicación",
      year: locale === "en" ? "Year" : "Año",
      services: locale === "en" ? "Services performed" : "Servicios realizados",
    },
    galleryMore:
      locale === "en" ? "View more images" : "Ver más imágenes",
  };
}

/** @param {'es' | 'en'} locale */
export function getSectorPageBottomCta(locale) {
  if (locale === "en") {
    return {
      title: "Got a project in mind?",
      subtitle: "We are ready to help you make it a reality.",
      cta: "Request a quote",
      href: "/en/contact",
    };
  }
  return {
    title: "¿Tenés un proyecto en mente?",
    subtitle: "Estamos listos para ayudarte a hacerlo realidad.",
    cta: "Solicitar cotización",
    href: "/contacto",
  };
}
