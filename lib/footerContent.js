/** Textos del pie de página (ES / EN). */

const FOOTER = {
  es: {
    taglineLead: "Mantenimiento integral",
    taglineBody:
      "Fontanería, techos, jardinería, electromecánica, carpintería y apoyo multidisciplinario para residencial, comercial e industrial.",
    coverageLine: "Cobertura en Costa Rica · Coordinación desde el Valle Central.",
    quickLinks: "En el sitio",
    cotizarLabel: "Cotización",
    servicesTitle: "Rubros frecuentes",
    services: [
      "Fontanería, drenajes y filtraciones",
      "Techos e impermeabilización",
      "Jardinería y áreas exteriores",
      "Electromecánica y apoyos en planta",
      "Carpintería, acabados y obra menor",
    ],
    contactTitle: "Contacto",
    whatsappLabel: "WhatsApp",
    legalSuffix: "SYS Mantenimiento · Costa Rica",
    rights: "Todos los derechos reservados.",
  },
  en: {
    taglineLead: "Comprehensive maintenance",
    taglineBody:
      "Plumbing, roofing, landscaping, electromechanical, carpentry, and multidisciplinary support for residential, commercial, and industrial sites.",
    coverageLine: "Coverage across Costa Rica · Coordination from the Central Valley.",
    quickLinks: "On this site",
    cotizarLabel: "Request a quote",
    servicesTitle: "Common trades",
    services: [
      "Plumbing, drains, and leaks",
      "Roofing and waterproofing",
      "Landscaping and outdoor areas",
      "Electromechanical and plant support",
      "Carpentry, finishes, and minor works",
    ],
    contactTitle: "Contact",
    whatsappLabel: "WhatsApp",
    legalSuffix: "SYS Mantenimiento · Costa Rica",
    rights: "All rights reserved.",
  },
};

/** @param {'es' | 'en'} locale */
export function getFooterCopy(locale) {
  return FOOTER[locale === "en" ? "en" : "es"];
}
