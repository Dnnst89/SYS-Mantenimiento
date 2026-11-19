/**
 * Contenido editorial y catálogo visual por sector (páginas /sectores/[slug] y /en/sectors/[slug]).
 * Las fotos del catálogo son referencia (Unsplash); sustituí por obra propia cuando tengas el material.
 */

const U = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

const PH = {
  home1: U("1600585154340-be6161a56a0c"),
  home2: U("1600566753190-17f0baa2a6c3"),
  home3: U("1600573472550-8090b5e0745e"),
  home4: U("1600607687939-ce8a6c25118c"),
  home5: U("1600047509807-ba8f99d2cdde"),
  home6: U("1600210492486-724fe5c67fb0"),
  office1: U("1497366216548-37526070297c"),
  office2: U("1497215728101-856f4ea74b67"),
  office3: U("1542744173-8e7e5348bb03"),
  office4: U("1486406146926-c627a92ad1ab"),
  ind1: U("1581091226825-a6a2a5aee158"),
  ind2: U("1581092918056-0c4eae3a2c77"),
  ind3: U("1504917595217-d51f4461d4c2"),
  ind4: U("1565193569785-98e4f1bb1d7e"),
  inst1: U("1480714378408-67cf0d13bc1b"),
  inst2: U("1464933005-5acf6c52e51d"),
  inst3: U("1503389156-cc6ddb53e58a"),
  inst4: U("1524758631214-e9492cdb9c02"),
};

const SECTOR_ALIASES = {
  residencial: "residencial",
  residential: "residencial",
  comercial: "comercial",
  commercial: "comercial",
  industrial: "industrial",
  institucional: "institucional",
  institutional: "institucional",
};

/** @param {Record<'es' | 'en', string> | string | undefined} obj @param {'es' | 'en'} locale */
function pick(obj, locale) {
  if (obj == null) return "";
  if (typeof obj === "string") return obj;
  return obj[locale] ?? obj.es ?? "";
}

/** Acepta un texto ("residencial") o el objeto del sector (con slugEs / slugEn). */
function resolveSectorKey(sector) {
  const candidates =
    typeof sector === "string"
      ? [sector]
      : [sector?.slugEs, sector?.slugEn, sector?.slug, sector?.id, sector?.key];

  for (const c of candidates) {
    const key = SECTOR_ALIASES[String(c ?? "").toLowerCase()];
    if (key) return key;
  }
  return null;
}

function localizeProject(p, locale) {
  const images = p.images?.length ? p.images : [p.src];
  const title = pick(p.title, locale);
  const location = pick(p.location, locale);

  return {
    id: p.id,
    category: p.category,
    categoryLabel: pick(p.categoryLabel, locale),
    title,
    client: pick(p.client, locale),
    location,
    year: p.year,
    services: pick(p.services, locale),
    src: p.src ?? images[0],
    images,
    alt: [title, location].filter(Boolean).join(" — "),
  };
}

/** @type {Record<string, object>} */
const DETAIL = {
  // =======================================================================
  // 1. SECTOR RESIDENCIAL
  // =======================================================================
  residencial: {
    leadHeading: { es: "Panorama", en: "Overview" },
    metaDescription: {
      es: "Mantenimiento y proyectos residenciales en Costa Rica...",
      en: "Residential maintenance and projects in Costa Rica...",
    },
    intro: { es: "...", en: "..." },
    approachTitle: { es: "Cómo trabajamos", en: "How we work" },
    approachItems: [],
    servicesTitle: { es: "...", en: "..." },
    services: [],
    processTitle: { es: "...", en: "..." },
    processSteps: [],
    catalogTitle: { es: "Catálogo de obra", en: "Work catalog" },
    catalogSubtitle: { es: "...", en: "..." },
    catalog: [
      { src: PH.home1, alt: { es: "Fachada", en: "Facade" }, gridClass: "col-span-2 row-span-2" },
      { src: PH.home2, alt: { es: "Interior", en: "Interior" }, gridClass: "col-span-1 row-span-1" },
    ],
    projects: [
      {
        id: "res-1",
        category: "construccion",
        categoryLabel: { es: "Instalación Eléctrica", en: "Electrical Installation" },
        title: { es: "Instalación de Portón Eléctrico", en: "Electric Gate Installation" },
        client: { es: "Particular", en: "Private Client" },
        location: { es: "Grecia, Alajuela", en: "Grecia, Alajuela" },
        year: "2026",
        services: {
          es: "Montaje, cableado y configuración completa de sistema de portón automatizado.",
          en: "Installation, wiring and full configuration of an automated gate system.",
        },
        src: "/proyectos/residencial/porton-1.webp",
        images: [
          "/proyectos/residencial/porton-1.webp",
          "/proyectos/residencial/porton-2.webp",
          "/proyectos/residencial/porton-3.webp",
        ],
      },
      {
        id: "res-2",
        category: "otros",
        categoryLabel: { es: "Acabados", en: "Finishing" },
        title: { es: "Trabajos de Pintura Residencial", en: "Residential Painting Works" },
        client: { es: "Particular", en: "Private Client" },
        location: { es: "Liberia, Guanacaste", en: "Liberia, Guanacaste" },
        year: "2024",
        services: {
          es: "Preparación de superficies, resane y aplicación de pintura de alta calidad.",
          en: "Surface preparation, patching and high-quality paint application.",
        },
        src: "/proyectos/residencial/pintura-1.webp",
        images: [
          "/proyectos/residencial/pintura-1.webp",
          "/proyectos/residencial/pintura-2.webp",
          "/proyectos/residencial/pintura-3.webp",
        ],
      },
      {
        id: "res-3",
        category: "remodelaciones",
        categoryLabel: { es: "Estructuras", en: "Structures" },
        title: { es: "Fabricación de Cochera", en: "Garage Construction" },
        client: { es: "Particular", en: "Private Client" },
        location: { es: "Santa Ana", en: "Santa Ana" },
        year: "2026",
        services: {
          es: "Diseño y fabricación de estructura para cochera con techado de policarbonato.",
          en: "Design and fabrication of a garage structure with a polycarbonate roof.",
        },
        src: "/proyectos/residencial/garaje-1.webp",
        images: [
          "/proyectos/residencial/garaje-1.webp",
          "/proyectos/residencial/garaje-2.webp",
          "/proyectos/residencial/garaje-3.webp",
        ],
      },
      {
        id: "res-4",
        category: "construccion",
        categoryLabel: { es: "Instalación Eléctrica", en: "Electrical Installation" },
        title: { es: "Instalación Eléctrica Completa", en: "Full Electrical Installation" },
        client: { es: "Particular", en: "Private Client" },
        location: { es: "Desamparados, San José", en: "Desamparados, San Jose" },
        year: "2026",
        services: {
          es: "Diseño e instalación de sistema eléctrico residencial completo desde cero.",
          en: "Design and installation of a complete residential electrical system from scratch.",
        },
        src: "/proyectos/residencial/construccion-1.webp",
        images: [
          "/proyectos/residencial/construccion-1.webp",
          "/proyectos/residencial/construccion-2.webp",
          "/proyectos/residencial/construccion-3.webp",
        ],
      },
    ],
  },

  // =======================================================================
  // 2. SECTOR COMERCIAL
  // =======================================================================
  comercial: {
    leadHeading: { es: "Panorama", en: "Overview" },
    metaDescription: { es: "Mantenimiento comercial.", en: "Commercial maintenance." },
    intro: { es: "...", en: "..." },
    approachTitle: { es: "...", en: "..." },
    approachItems: [],
    servicesTitle: { es: "...", en: "..." },
    services: [],
    processTitle: { es: "...", en: "..." },
    processSteps: [],
    catalogTitle: { es: "Catálogo", en: "Catalog" },
    catalogSubtitle: { es: "...", en: "..." },
    catalog: [
      { src: PH.office1, alt: { es: "Oficina", en: "Office" }, gridClass: "col-span-2 row-span-2" },
    ],
    projects: [
      {
        id: "com-1",
        category: "construccion",
        categoryLabel: { es: "Carpintería", en: "Carpentry" },
        title: { es: "Fabricación de Clósets", en: "Closet Manufacturing" },
        client: { es: "Hotel", en: "Hotel" },
        location: { es: "Playa Hermosa, Guanacaste", en: "Playa Hermosa, Guanacaste" },
        year: "2026",
        services: {
          es: "Diseño, fabricación y ensamble de clósets a medida.",
          en: "Design, fabrication and assembly of custom-made closets.",
        },
        src: "/proyectos/comercial/closets-1.webp",
        images: [
          "/proyectos/comercial/closets-1.webp",
          "/proyectos/comercial/closets-2.webp",
        ],
      },
      {
        id: "com-2",
        category: "mejoras",
        categoryLabel: { es: "Restauración", en: "Restoration" },
        title: { es: "Restauración de Mesas", en: "Table Restoration" },
        client: { es: "Restaurante", en: "Restaurant" },
        location: { es: "Playa Hermosa, Guanacaste", en: "Playa Hermosa, Guanacaste" },
        year: "2025",
        services: {
          es: "Lijado, sellado y aplicación de barniz en mobiliario comercial.",
          en: "Sanding, sealing and varnishing of commercial furniture.",
        },
        src: "/proyectos/comercial/mesa-1.webp",
        images: ["/proyectos/comercial/mesa-1.webp"],
      },
      {
        id: "com-3",
        category: "construccion",
        categoryLabel: { es: "Instalación Eléctrica", en: "Electrical Installation" },
        title: {
          es: "Instalación de Circuito Eléctrico y Extractor",
          en: "Electrical Circuit & Extractor Installation",
        },
        client: { es: "Sala de Patinaje (City Mall)", en: "Skating Rink (City Mall)" },
        location: { es: "City Mall, Alajuela", en: "City Mall, Alajuela" },
        year: "2026",
        services: {
          es: "Instalación de circuito de fuerza y extractor de aire.",
          en: "Installation of a power circuit and an air extractor.",
        },
        src: "/proyectos/institucional/citymall-1.webp",
        images: [
          "/proyectos/institucional/citymall-1.webp",
          "/proyectos/institucional/citymall-2.webp",
          "/proyectos/institucional/citymall-3.webp",
        ],
      },
      {
        id: "com-4",
        category: "mejoras",
        categoryLabel: { es: "Iluminación", en: "Lighting" },
        title: { es: "Instalación de Iluminación", en: "Lighting Installation" },
        client: { es: "Multi Centro", en: "Multi Centro" },
        location: { es: "Desamparados", en: "Desamparados" },
        year: "2025",
        services: {
          es: "Colocación de sistemas lumínicos eficientes.",
          en: "Installation of energy-efficient lighting systems.",
        },
        src: "/proyectos/comercial/multicentro-1.webp",
        images: [
          "/proyectos/comercial/multicentro-1.webp",
          "/proyectos/comercial/multicentro-2.webp",
        ],
      },
    ],
  },

  // =======================================================================
  // 3. SECTOR INDUSTRIAL
  // =======================================================================
  industrial: {
    leadHeading: { es: "Panorama", en: "Overview" },
    metaDescription: { es: "Mantenimiento industrial.", en: "Industrial maintenance." },
    intro: { es: "...", en: "..." },
    approachTitle: { es: "...", en: "..." },
    approachItems: [],
    servicesTitle: { es: "...", en: "..." },
    services: [],
    processTitle: { es: "...", en: "..." },
    processSteps: [],
    catalogTitle: { es: "Catálogo", en: "Catalog" },
    catalogSubtitle: { es: "...", en: "..." },
    catalog: [
      { src: PH.ind1, alt: { es: "Nave", en: "Warehouse" }, gridClass: "col-span-2 row-span-2" },
    ],
    projects: [
      {
        id: "ind-1",
        category: "mantenimiento",
        categoryLabel: { es: "Electricidad Industrial", en: "Industrial Electricity" },
        title: {
          es: "Optimización Eléctrica de Infraestructura",
          en: "Electrical Infrastructure Optimization",
        },
        client: { es: "Centro Comercial", en: "Shopping Center" },
        location: { es: "Heredia", en: "Heredia" },
        year: "2026",
        services: {
          es: "Corrección de terminales, cambio de cableado de aluminio por cobre y torqueo.",
          en: "Terminal corrections, replacement of aluminum wiring with copper, and torque verification.",
        },
        src: "/proyectos/industrial/terminales-1.webp",
        images: [
          "/proyectos/industrial/terminales-1.webp",
          "/proyectos/industrial/terminales-2.webp",
          "/proyectos/industrial/terminales-3.webp",
        ],
      },
      {
        id: "ind-2",
        category: "mantenimiento",
        categoryLabel: { es: "Mecánica", en: "Mechanics" },
        title: {
          es: "Cambio de Transmisión de Lavadora Automática",
          en: "Automatic Washing Machine Transmission Replacement",
        },
        client: { es: "Centro de Lavado", en: "Laundry Center" },
        location: { es: "Coyol, Alajuela", en: "Coyol, Alajuela" },
        year: "2026",
        services: {
          es: "Sustitución y calibración de transmisión de lavadora industrial.",
          en: "Replacement and calibration of an industrial washing machine transmission.",
        },
        src: "/proyectos/industrial/lava-1.webp",
        images: [
          "/proyectos/industrial/lava-1.webp",
          "/proyectos/industrial/lava-2.webp",
          "/proyectos/industrial/lava-3.webp",
          "/proyectos/industrial/lava-4.webp",
          "/proyectos/industrial/lava-5.webp",
        ],
      },
      {
        id: "ind-3",
        category: "construccion",
        categoryLabel: { es: "Instalación de Tanque de Agua", en: "Water Tank Installation" },
        title: { es: "Instalación de Tanque de Agua", en: "Water Tank Installation" },
        client: { es: "Particular", en: "Private Client" },
        location: { es: "Desamparados, Alajuela", en: "Desamparados, Alajuela" },
        year: "2026",
        services: {
          es: "Montaje e interconexión de tanque de agua industrial.",
          en: "Assembly and piping connection of an industrial water tank.",
        },
        src: "/proyectos/industrial/tanque-1.webp",
        images: ["/proyectos/industrial/tanque-1.webp"],
      },
      {
        id: "ind-4",
        category: "construccion",
        categoryLabel: { es: "Iluminación / Rótulos", en: "Lighting / Signage" },
        title: {
          es: "Instalación de Rótulos con Iluminación LED",
          en: "LED Signage Installation",
        },
        client: { es: "Ecoplaza Villa Real", en: "Ecoplaza Villa Real" },
        location: { es: "Pozos de Santa Ana", en: "Pozos de Santa Ana" },
        year: "2025",
        services: {
          es: "Montaje estructural y conexión eléctrica de rótulos LED.",
          en: "Structural mounting and electrical connection of LED signs.",
        },
        src: "/proyectos/comercial/rotulo-1.webp",
        images: [
          "/proyectos/comercial/rotulo-1.webp",
          "/proyectos/comercial/rotulo-2.webp",
        ],
      },
      {
        id: "ind-5",
        category: "construccion",
        categoryLabel: {
          es: "Instalación Eléctrica Industrial",
          en: "Industrial Electrical Installation",
        },
        title: {
          es: "Instalación Eléctrica Industrial",
          en: "Industrial Electrical Installation",
        },
        client: { es: "Igloo", en: "Igloo" },
        location: { es: "Desamparados, Alajuela", en: "Desamparados, Alajuela" },
        year: "2025",
        services: {
          es: "Acometidas, canalización y cableado para sistemas de potencia.",
          en: "Service entrances, conduit and wiring for power systems.",
        },
        src: "/proyectos/industrial/instaelec-1.webp",
        images: [
          "/proyectos/industrial/instaelec-1.webp",
          "/proyectos/industrial/instaelec-2.webp",
        ],
      },
    ],
  },

  // =======================================================================
  // 4. SECTOR INSTITUCIONAL
  // =======================================================================
  institucional: {
    leadHeading: { es: "Panorama", en: "Overview" },
    metaDescription: { es: "Mantenimiento institucional.", en: "Institutional maintenance." },
    intro: { es: "...", en: "..." },
    approachTitle: { es: "...", en: "..." },
    approachItems: [],
    servicesTitle: { es: "...", en: "..." },
    services: [],
    processTitle: { es: "...", en: "..." },
    processSteps: [],
    catalogTitle: { es: "Catálogo", en: "Catalog" },
    catalogSubtitle: { es: "...", en: "..." },
    catalog: [
      { src: PH.inst1, alt: { es: "Edificio", en: "Building" }, gridClass: "col-span-2 row-span-2" },
    ],
    projects: [
      {
        id: "inst-1",
        category: "construccion",
        categoryLabel: { es: "Maquinaria", en: "Machinery" },
        title: { es: "Instalación de Grúa", en: "Crane Installation" },
        client: { es: "Prefalum", en: "Prefalum" },
        location: { es: "Alajuela", en: "Alajuela" },
        year: "2025",
        services: {
          es: "Montaje mecánico, anclaje seguro y alimentación de grúa.",
          en: "Mechanical assembly, secure anchoring and power supply for a crane.",
        },
        src: "/proyectos/institucional/grua-1.webp",
        images: ["/proyectos/institucional/grua-1.webp"],
      },
      {
        id: "inst-2",
        category: "construccion",
        categoryLabel: { es: "Iluminación", en: "Lighting" },
        title: { es: "Instalación de Lámparas", en: "Lamp Installation" },
        client: { es: "Centro Educacional", en: "Educational Center" },
        location: { es: "Alajuela", en: "Alajuela" },
        year: "2024",
        services: {
          es: "Sustitución y colocación de luminarias para aulas.",
          en: "Replacement and installation of classroom light fixtures.",
        },
        src: "/proyectos/institucional/lamparas-1.webp",
        images: ["/proyectos/institucional/lamparas-1.webp"],
      },
      {
        id: "inst-3",
        category: "construccion",
        categoryLabel: { es: "Movilidad Eléctrica", en: "Electric Mobility" },
        title: {
          es: "Instalación de Cargador para Vehículos Eléctricos de 240V",
          en: "240V EV Charger Installation",
        },
        client: { es: "Entidad del Gobierno", en: "Government Entity" },
        location: { es: "Llano de Alajuela", en: "Llano de Alajuela" },
        year: "2025",
        services: {
          es: "Canalización, protecciones y cableado para estación de carga.",
          en: "Conduit, protections and wiring for an EV charging station.",
        },
        src: "/proyectos/residencial/cargador-1.webp",
        images: [
          "/proyectos/residencial/cargador-1.webp",
          "/proyectos/residencial/cargador-2.webp",
        ],
      },
    ],
  },
};

export function getSectorPageDetail(locale, sector) {
  const key = resolveSectorKey(sector);
  const raw = key ? DETAIL[key] : null;
  if (!raw) return null;

  return {
    slug: key,
    leadHeading: pick(raw.leadHeading, locale),
    metaDescription: pick(raw.metaDescription, locale),
    intro: pick(raw.intro, locale),
    approachTitle: pick(raw.approachTitle, locale),
    approachItems: (raw.approachItems ?? []).map((t) => pick(t, locale)),
    servicesTitle: pick(raw.servicesTitle, locale),
    services: (raw.services ?? []).map((t) => pick(t, locale)),
    processTitle: pick(raw.processTitle, locale),
    processSteps: (raw.processSteps ?? []).map((s) => ({
      title: pick(s.title, locale),
      body: pick(s.body, locale),
    })),
    catalogTitle: pick(raw.catalogTitle, locale),
    catalogSubtitle: pick(raw.catalogSubtitle, locale),
    catalog: (raw.catalog ?? []).map((c) => ({
      src: c.src,
      alt: pick(c.alt, locale),
      gridClass: c.gridClass,
    })),
    projects: (raw.projects ?? []).map((p) => localizeProject(p, locale)),
  };
}