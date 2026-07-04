/** Textos del pie de página (ES / EN). */

const FOOTER = {
  es: {
    taglineLead: "Mantenimiento integral",
    taglineBody:
      "Somos una empresa especializada en mantenimiento y construcción de viviendas, condominios y edificaciones comerciales e industriales.",
    coverageLine: "Cobertura en todo el país",
    quickLinks: "En el sitio",
    cotizarLabel: "Cotización",
    servicesTitle: "Rubros frecuentes",
    services: [
      "Electromecánica; motores, electricidad residencial, comercial e industrial.",
      "Mantenimiento de equipos eléctricos.",
      "Jardinería y áreas exteriores",
      "Iluminación inteligente.",
      "Soldadura: soldadura tipo arco. ",
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
