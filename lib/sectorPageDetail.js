/**
 * Contenido editorial y catálogo visual por sector (páginas /sectores/[slug] y /en/sectors/[slug]).
 * Las fotos son referencia (Unsplash); sustituí por obra propia cuando tengas el material.
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

/** @param {Record<'es' | 'en', string>} obj @param {'es' | 'en'} locale */
function pick(obj, locale) {
  return obj[locale] ?? obj.es;
}

/** @type {Record<string, object>} */
const DETAIL = {
  residencial: {
    leadHeading: { es: "Panorama", en: "Overview" },
    metaDescription: {
      es: "Mantenimiento y proyectos residenciales en Costa Rica: comunidades cerradas, casas y remodelaciones. Catálogo de trabajos y experiencia SYS.",
      en: "Residential maintenance and projects in Costa Rica: gated communities, homes, and remodeling. Work catalog and SYS experience.",
    },
    intro: {
      es: "En residencial no solo “arreglamos”: planificamos con vos, cuidamos la convivencia del conjunto y dejamos registro claro de cada intervención. Trabajamos con administraciones de condominio, propietarios y equipos de obra para que cocinas, baños, áreas comunes e instalaciones sigan funcionando sin sorpresas.",
      en: "In residential work we do not just fix things—we plan with you, respect community life, and keep a clear record of every intervention. We work with HOA boards, homeowners, and site teams so kitchens, bathrooms, common areas, and systems keep running without surprises.",
    },
    approachTitle: { es: "Cómo trabajamos", en: "How we work" },
    approachItems: [
      {
        es: "Diagnóstico claro antes de cotizar: qué falla, qué riesgos hay y qué opciones existen.",
        en: "Clear diagnostics before quoting: what failed, risks, and available options.",
      },
      {
        es: "Coordinación con vecinos y portería: horarios, ruido mínimo y áreas protegidas.",
        en: "Coordination with neighbors and front desk: schedules, low noise, protected areas.",
      },
      {
        es: "Entrega documentada: checklist, fotos del estado final y recomendaciones de uso.",
        en: "Documented handover: checklist, photos of the finished state, and care tips.",
      },
    ],
    servicesTitle: { es: "Lo que más pedís en hogares", en: "What homes ask us for most" },
    services: [
      { es: "Mantenimiento correctivo y preventivo en áreas comunes", en: "Corrective and preventive maintenance in common areas" },
      { es: "Baños y cocinas: filtraciones, iluminación, carpintería ligera", en: "Bathrooms and kitchens: leaks, lighting, light carpentry" },
      { es: "Pintura, impermeabilización y detalles de acabado", en: "Painting, waterproofing, and finishing details" },
      { es: "Acompañamiento en remodelaciones llave en mano", en: "Support for turnkey remodeling" },
    ],
    processTitle: { es: "Proceso típico", en: "Typical process" },
    processSteps: [
      {
        title: { es: "1. Visita y escucha", en: "1. Site visit" },
        body: {
          es: "Recorremos el espacio, priorizamos urgencias y alineamos expectativas con presupuesto.",
          en: "We walk the space, prioritize urgency, and align expectations with budget.",
        },
      },
      {
        title: { es: "2. Propuesta y agenda", en: "2. Proposal and schedule" },
        body: {
          es: "Cotización por ítems, plazos realistas y ventanas de trabajo acordadas.",
          en: "Itemized quote, realistic timelines, and agreed work windows.",
        },
      },
      {
        title: { es: "3. Ejecución y cierre", en: "3. Delivery and closeout" },
        body: {
          es: "Equipo en terreno, comunicación durante la obra y cierre con revisión conjunta.",
          en: "Field team, updates during work, and joint walkthrough at closeout.",
        },
      },
    ],
    catalogTitle: { es: "Catálogo de obra", en: "Work catalog" },
    catalogSubtitle: {
      es: "Un vistazo a tipologías de intervención y acabados que solemos manejar en proyectos residenciales.",
      en: "A look at intervention types and finishes we often handle in residential projects.",
    },
    catalog: [
      { src: PH.home1, alt: { es: "Fachada y área exterior", en: "Facade and outdoor area" }, gridClass: "col-span-2 row-span-2" },
      { src: PH.home2, alt: { es: "Interior living", en: "Living interior" }, gridClass: "col-span-1 row-span-1" },
      { src: PH.home3, alt: { es: "Detalle arquitectónico", en: "Architectural detail" }, gridClass: "col-span-1 row-span-1" },
      { src: PH.home4, alt: { es: "Espacio social", en: "Social space" }, gridClass: "col-span-2 row-span-1 md:col-span-1 md:row-span-2" },
      { src: PH.home5, alt: { es: "Dormitorio / madera", en: "Bedroom / woodwork" }, gridClass: "col-span-1 row-span-1" },
      { src: PH.home6, alt: { es: "Baño principal", en: "Main bathroom" }, gridClass: "col-span-1 row-span-1" },
      { src: PH.home4, alt: { es: "Cocina integral", en: "Full kitchen" }, gridClass: "col-span-2 row-span-1" },
      { src: PH.home5, alt: { es: "Iluminación y texturas", en: "Lighting and textures" }, gridClass: "col-span-1 row-span-1" },
      { src: PH.home3, alt: { es: "Pasillos condominio", en: "Condominium hallways" }, gridClass: "col-span-1 row-span-1" },
      { src: PH.home1, alt: { es: "Remodelación integral", en: "Full remodel" }, gridClass: "col-span-2 row-span-1" },
    ],
  },
  comercial: {
    leadHeading: { es: "Panorama", en: "Overview" },
    metaDescription: {
      es: "Mantenimiento comercial en Costa Rica: oficinas, retail y locales. Planes, correctivos y refuerzos para que tu operación no se detenga.",
      en: "Commercial maintenance in Costa Rica: offices, retail, and storefronts. Plans and repairs so operations keep moving.",
    },
    intro: {
      es: "Los espacios comerciales viven mucho tráfico: iluminación, climatización, baños públicos y fachadas se desgastan rápido. Armamos planes por criticidad (lo que no puede fallar vs. lo mejorable) y dejamos trazabilidad para tu administración o franquicia.",
      en: "Commercial spaces see heavy traffic—lighting, HVAC, restrooms, and façades wear fast. We tier work by criticality (cannot-fail vs. nice-to-have) and leave traceability for your ops or franchise team.",
    },
    approachTitle: { es: "Enfoque operativo", en: "Operations-first" },
    approachItems: [
      {
        es: "Ventanas de trabajo fuera de hora pico cuando el negocio lo requiere.",
        en: "Work windows outside peak hours when the business needs it.",
      },
      {
        es: "Coordinación con proveedores de marca y estándos corporativos.",
        en: "Coordination with brand vendors and corporate standards.",
      },
      {
        es: "Reportes breves para gerencia: qué se hizo, qué sigue y fotos.",
        en: "Short management reports: what was done, what is next, and photos.",
      },
    ],
    servicesTitle: { es: "Rubros frecuentes", en: "Common scopes" },
    services: [
      { es: "Correctivos urgentes y refuerzos de seguridad", en: "Urgent repairs and safety reinforcements" },
      { es: "Iluminación, tableros menores y señalética", en: "Lighting, minor panels, and signage" },
      { es: "Baños de clientes y áreas de descanso", en: "Customer restrooms and break areas" },
      { es: "Preparación de locales para apertura o traspaso", en: "Store prep for opening or handover" },
    ],
    processTitle: { es: "Cómo arrancamos", en: "How we start" },
    processSteps: [
      {
        title: { es: "1. Mapa de activos", en: "1. Asset map" },
        body: {
          es: "Identificamos puntos críticos del local u oficina y su historial.",
          en: "We identify critical points of the site and its history.",
        },
      },
      {
        title: { es: "2. Plan por prioridad", en: "2. Priority plan" },
        body: {
          es: "Bloques de trabajo y presupuestos alineados a temporadas comerciales.",
          en: "Work blocks and budgets aligned with commercial seasons.",
        },
      },
      {
        title: { es: "3. Ejecución medible", en: "3. Measurable delivery" },
        body: {
          es: "Indicadores simples: tiempos de respuesta, cierres y satisfacción.",
          en: "Simple KPIs: response times, closures, and satisfaction.",
        },
      },
    ],
    catalogTitle: { es: "Referencias visuales", en: "Visual references" },
    catalogSubtitle: {
      es: "Estilos de espacio donde solemos intervenir: oficinas abiertas, retail y coworkings.",
      en: "Space styles we often work in: open offices, retail, and coworking.",
    },
    catalog: [
      { src: PH.office1, alt: { es: "Oficina corporativa", en: "Corporate office" }, gridClass: "col-span-2 row-span-2" },
      { src: PH.office2, alt: { es: "Sala de reuniones", en: "Meeting room" }, gridClass: "col-span-1 row-span-1" },
      { src: PH.office3, alt: { es: "Espacio colaborativo", en: "Collaborative space" }, gridClass: "col-span-1 row-span-1" },
      { src: PH.office4, alt: { es: "Lobby y accesos", en: "Lobby and access" }, gridClass: "col-span-2 row-span-1" },
      { src: PH.office2, alt: { es: "Detalle mobiliario", en: "Furniture detail" }, gridClass: "col-span-1 row-span-1" },
      { src: PH.office1, alt: { es: "Pasillo vidriado", en: "Glass corridor" }, gridClass: "col-span-1 row-span-1" },
    ],
  },
  industrial: {
    leadHeading: { es: "Panorama", en: "Overview" },
    metaDescription: {
      es: "Mantenimiento industrial: plantas, bodegas y líneas. Énfasis en seguridad, continuidad y trabajo ordenado en terreno.",
      en: "Industrial maintenance: plants, warehouses, and lines. Safety, uptime, and disciplined field work.",
    },
    intro: {
      es: "En industrial el costo del paro es alto. Por eso combinamos inspecciones programadas, repuestos críticos y comunicación directa con jefatura de planta. Cada intervención busca reducir riesgos eléctricos, mecánicos y de orden y limpieza.",
      en: "In industrial settings downtime is expensive. We combine scheduled inspections, critical spares, and direct communication with plant leadership. Every job targets electrical, mechanical, and housekeeping risks.",
    },
    approachTitle: { es: "Prioridades en planta", en: "On-site priorities" },
    approachItems: [
      {
        es: "Bloqueo y etiquetado cuando aplica; permisos de trabajo coordinados.",
        en: "Lockout/tagout when applicable; coordinated work permits.",
      },
      {
        es: "Registro de hallazgos y recomendaciones para siguiente ventana.",
        en: "Findings log and recommendations for the next window.",
      },
      {
        es: "Equipos mínimos invasivos: andamios, elevación y señalización visible.",
        en: "Low-invasion crews: scaffolding, lifts, and clear signage.",
      },
    ],
    servicesTitle: { es: "Ámbitos de intervención", en: "Intervention areas" },
    services: [
      { es: "Correctivos en estructuras, puertas y cerramientos", en: "Structural, doors, and enclosure repairs" },
      { es: "Iluminación industrial y revisiones eléctricas menores", en: "Industrial lighting and minor electrical reviews" },
      { es: "Orden, señalización y preparación de auditorías", en: "Housekeeping, signage, and audit prep" },
      { es: "Apoyo en paradas programadas", en: "Support during planned shutdowns" },
    ],
    processTitle: { es: "Flujo de trabajo", en: "Work flow" },
    processSteps: [
      {
        title: { es: "1. Brief de seguridad", en: "1. Safety brief" },
        body: {
          es: "Riesgos del día, EPI y puntos de encuentro de emergencia.",
          en: "Daily risks, PPE, and emergency muster points.",
        },
      },
      {
        title: { es: "2. Intervención focalizada", en: "2. Focused work" },
        body: {
          es: "Equipos asignados por especialidad con supervisor en terreno.",
          en: "Teams assigned by specialty with on-site supervision.",
        },
      },
      {
        title: { es: "3. Cierre técnico", en: "3. Technical closeout" },
        body: {
          es: "Entrega a mantenimiento de planta con observaciones y fotos.",
          en: "Handover to plant maintenance with notes and photos.",
        },
      },
    ],
    catalogTitle: { es: "Ambientes de planta", en: "Plant environments" },
    catalogSubtitle: {
      es: "Imágenes de referencia de talleres, líneas y bodegas de gran formato.",
      en: "Reference imagery of workshops, lines, and large warehouses.",
    },
    catalog: [
      { src: PH.ind1, alt: { es: "Taller con operarios", en: "Workshop with crew" }, gridClass: "col-span-2 row-span-2" },
      { src: PH.ind2, alt: { es: "Línea y maquinaria", en: "Line and machinery" }, gridClass: "col-span-1 row-span-1" },
      { src: PH.ind3, alt: { es: "Bodega logística", en: "Logistics warehouse" }, gridClass: "col-span-1 row-span-1" },
      { src: PH.ind4, alt: { es: "Detalle técnico", en: "Technical detail" }, gridClass: "col-span-2 row-span-1" },
      { src: PH.ind2, alt: { es: "Seguridad industrial", en: "Industrial safety" }, gridClass: "col-span-1 row-span-1" },
      { src: PH.ind1, alt: { es: "Mantenimiento en curso", en: "Maintenance in progress" }, gridClass: "col-span-1 row-span-1" },
    ],
  },
  institucional: {
    leadHeading: { es: "Panorama", en: "Overview" },
    metaDescription: {
      es: "Mantenimiento institucional: edificios públicos, educativos y corporativos. Planificación, transparencia y cumplimiento de normativa.",
      en: "Institutional maintenance: public, educational, and corporate buildings. Planning, transparency, and compliance.",
    },
    intro: {
      es: "Las instituciones necesitan proveedores que hablen el mismo idioma que compras y mantenimiento: plazos claros, documentación y respeto a protocolos de acceso. Acompañamos desde licitaciones técnicas hasta ejecución con bitácoras compartidas.",
      en: "Institutions need vendors who speak procurement and facilities language: clear timelines, documentation, and access protocols. We support from technical bids to execution with shared logs.",
    },
    approachTitle: { es: "Cumplimiento y claridad", en: "Compliance and clarity" },
    approachItems: [
      {
        es: "Cotizaciones desglosadas y comparables entre periodos.",
        en: "Itemized quotes comparable across periods.",
      },
      {
        es: "Coordinación con seguridad física y TI en accesos.",
        en: "Coordination with physical security and IT for access.",
      },
      {
        es: "Reserva de espacios y comunicación a usuarios finales.",
        en: "Space booking and communication to end users.",
      },
    ],
    servicesTitle: { es: "Servicios típicos", en: "Typical services" },
    services: [
      { es: "Mantenimiento de edificios de oficinas y campus", en: "Office towers and campus maintenance" },
      { es: "Aulas, laboratorios y bibliotecas", en: "Classrooms, labs, and libraries" },
      { es: "Áreas de atención al público y filas", en: "Public service areas and queues" },
      { es: "Eventos institucionales: montaje y desmontaje apoyado", en: "Institutional events: setup and teardown support" },
    ],
    processTitle: { es: "Modelo de gestión", en: "Management model" },
    processSteps: [
      {
        title: { es: "1. Diagnóstico institucional", en: "1. Institutional assessment" },
        body: {
          es: "Inventario de activos críticos y calendario anual sugerido.",
          en: "Critical asset inventory and suggested annual calendar.",
        },
      },
      {
        title: { es: "2. Ejecución por lotes", en: "2. Batched execution" },
        body: {
          es: "Agrupamos trabajos para minimizar interrupciones a usuarios.",
          en: "We batch work to minimize disruption to users.",
        },
      },
      {
        title: { es: "3. Informe de cierre", en: "3. Closeout report" },
        body: {
          es: "Evidencias, costos y lecciones aprendidas para el siguiente periodo.",
          en: "Evidence, costs, and lessons learned for the next cycle.",
        },
      },
    ],
    catalogTitle: { es: "Arquitectura institucional", en: "Institutional architecture" },
    catalogSubtitle: {
      es: "Referencias de volumetría y espacios donde solemos operar.",
      en: "Reference massing and spaces where we typically operate.",
    },
    catalog: [
      { src: PH.inst1, alt: { es: "Torre de oficinas", en: "Office tower" }, gridClass: "col-span-2 row-span-2" },
      { src: PH.inst2, alt: { es: "Espacio público", en: "Public space" }, gridClass: "col-span-1 row-span-1" },
      { src: PH.inst3, alt: { es: "Campus educativo", en: "Educational campus" }, gridClass: "col-span-1 row-span-1" },
      { src: PH.inst4, alt: { es: "Interior institucional", en: "Institutional interior" }, gridClass: "col-span-2 row-span-1" },
      { src: PH.inst2, alt: { es: "Circulaciones", en: "Circulation" }, gridClass: "col-span-1 row-span-1" },
      { src: PH.inst1, alt: { es: "Fachada y acceso", en: "Facade and entry" }, gridClass: "col-span-1 row-span-1" },
    ],
  },
};

/**
 * @param {'es' | 'en'} locale
 * @param {{ slugEs: string }} sector
 */
export function getSectorPageDetail(locale, sector) {
  const raw = DETAIL[sector.slugEs];
  if (!raw) return null;

  return {
    leadHeading: pick(raw.leadHeading, locale),
    metaDescription: pick(raw.metaDescription, locale),
    intro: pick(raw.intro, locale),
    approachTitle: pick(raw.approachTitle, locale),
    approachItems: raw.approachItems.map((t) => pick(t, locale)),
    servicesTitle: pick(raw.servicesTitle, locale),
    services: raw.services.map((t) => pick(t, locale)),
    processTitle: pick(raw.processTitle, locale),
    processSteps: raw.processSteps.map((step) => ({
      title: pick(step.title, locale),
      body: pick(step.body, locale),
    })),
    catalogTitle: pick(raw.catalogTitle, locale),
    catalogSubtitle: pick(raw.catalogSubtitle, locale),
    catalog: raw.catalog.map((c) => ({
      src: c.src,
      alt: pick(c.alt, locale),
      gridClass: c.gridClass,
    })),
  };
}
