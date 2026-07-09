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
    rights: "Todos los derechos reservados."
  },
  en: {
    taglineLead: "Comprehensive maintenance",
    taglineBody:
      "We are a company specializing in the maintenance and construction of homes, condominiums, and commercial and industrial buildings.",
    coverageLine: "Nationwide coverage",
    quickLinks: "On this site",
    cotizarLabel: "Request a quote",
    servicesTitle: "Common trades",
    services: [
      "Electromechanics: motors; residential, commercial, and industrial electrical systems.",
      "Maintenance of electrical equipment.",
      "Landscaping and outdoor areas.",
      "Smart lighting.",
      "Welding: arc welding.",
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
