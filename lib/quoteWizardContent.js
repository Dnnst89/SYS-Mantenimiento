import { WHATSAPP_PHONE } from "@/lib/whatsappContact";

export const QUOTE_WIZARD_HREF = {
  es: "/cotizar",
  en: "/en/cotizar",
};

/** @param {'es' | 'en'} locale */
export function getQuoteWizardHref(locale) {
  return locale === "en" ? QUOTE_WIZARD_HREF.en : QUOTE_WIZARD_HREF.es;
}

/**
 * @typedef {{
 *   need: string;
 *   scope: string;
 *   timeline: string;
 *   location: string;
 *   budget: string;
 *   name: string;
 *   phone: string;
 *   company: string;
 *   notes: string;
 * }} QuoteWizardValues
 */

/** @param {'es' | 'en'} locale @param {QuoteWizardValues} v */
export function buildQuoteWhatsAppMessage(locale, v) {
  const L = quoteWizardCopy[locale].messageLabels;
  const lines = [
    L.header,
    "",
    `${L.need} ${v.need.trim()}`,
    `${L.scope} ${v.scope}`,
    `${L.timeline} ${v.timeline}`,
    `${L.location} ${v.location.trim()}`,
    `${L.budget} ${v.budget}`,
    `${L.name} ${v.name.trim()}`,
    `${L.phone} ${v.phone.trim()}`,
    v.company.trim() ? `${L.company} ${v.company.trim()}` : "",
    v.notes.trim() ? `${L.notes} ${v.notes.trim()}` : "",
    "",
    L.footer,
  ];
  const text = lines.filter(Boolean).join("\n");
  if (text.length > 1600) return `${text.slice(0, 1550)}…\n[${L.truncated}]`;
  return text;
}

/** @param {string} text */
export function whatsappHrefWithText(text) {
  return `https://wa.me/${WHATSAPP_PHONE}?${new URLSearchParams({ text }).toString()}`;
}

export const quoteWizardCopy = {
  es: {
    pageTitle: "Cotización guiada",
    sideEyebrow: "SYS Mantenimiento",
    sideHeadWhite: "Pedí cotización",
    sideHeadAccent: "en pocos pasos.",
    sideBody:
      "Contanos el alcance, el lugar y el plazo: con eso te respondemos con pasos concretos.",
    backHome: "Volver al inicio",
    stepLabel: "Paso {n} de {total}",
    reviewStepLabel: "Resumen",
    next: "Siguiente",
    back: "Anterior",
    openWhatsapp: "Abrir WhatsApp con mi pedido",
    reviewTitle: "Listo para enviar",
    reviewHint: "Revisá el resumen y tocá el botón para enviarlo por WhatsApp.",
    messageLabels: {
      header: "*Cotización — SYS Mantenimiento*",
      need: "• Necesidad:",
      scope: "• Tipo de trabajo:",
      timeline: "• Plazo deseado:",
      location: "• Ubicación:",
      budget: "• Presupuesto referencial:",
      name: "• Nombre:",
      phone: "• Teléfono:",
      company: "• Empresa:",
      notes: "• Notas:",
      footer: "_Mensaje generado desde sysmantenimiento.com_",
      truncated: "mensaje recortado",
    },
    steps: [
      {
        key: "need",
        title: "¿Qué necesitás?",
        hint: "Contanos el tipo de mantenimiento, instalación o problema (aunque sea a grandes rasgos).",
        placeholder:
          "Ej.: mantenimiento de áreas comunes en edificio, filtración en techo, jardinería mensual…",
      },
      {
        key: "scope",
        title: "Tipo de trabajo",
        hint: "Elegí la opción que mejor encaje.",
      },
      {
        key: "timeline",
        title: "¿En cuánto tiempo lo necesitás?",
        hint: "Así priorizamos la respuesta.",
      },
      {
        key: "location",
        title: "Ubicación",
        hint: "Provincia, cantón o dirección aproximada (no hace falta el punto exacto en este paso).",
        placeholder: "Ej.: San José, Escazú / Guanacaste, Liberia…",
      },
      {
        key: "budget",
        title: "Presupuesto referencial",
        hint: "Rango orientativo; la cotización formal puede variar según visita técnica.",
      },
      {
        key: "contact",
        title: "Tus datos de contacto",
        hint: "Para que podamos responderte si hace falta aclarar algo.",
      },
    ],
    scopePlaceholder: "Seleccioná una opción",
    scopeOptions: [
      {
        value: "Mantenimiento puntual / correctivo",
        label: "Mantenimiento puntual o correctivo",
      },
      { value: "Plan recurrente / preventivo", label: "Plan recurrente o preventivo" },
      { value: "Obra o proyecto acotado", label: "Obra o proyecto acotado" },
      { value: "Urgencia / parada de operación", label: "Urgencia o riesgo de parada" },
      { value: "Aún no lo tengo claro", label: "Aún no lo tengo claro" },
    ],
    timelinePlaceholder: "Seleccioná plazo",
    timelineOptions: [
      { value: "Lo antes posible (urgente)", label: "Lo antes posible (urgente)" },
      { value: "Esta semana", label: "Esta semana" },
      { value: "En 2 a 4 semanas", label: "En 2 a 4 semanas" },
      { value: "En 1 a 3 meses", label: "En 1 a 3 meses" },
      { value: "Flexible / por definir", label: "Flexible / por definir" },
    ],
    budgetPlaceholder: "Seleccioná un rango",
    budgetOptions: [
      { value: "Menos de ₡500.000", label: "Menos de ₡500.000" },
      { value: "₡500.000 – ₡2.000.000", label: "₡500.000 – ₡2.000.000" },
      { value: "₡2.000.000 – ₡5.000.000", label: "₡2.000.000 – ₡5.000.000" },
      { value: "Más de ₡5.000.000", label: "Más de ₡5.000.000" },
      { value: "Prefiero indicarlo por WhatsApp", label: "Prefiero indicarlo por WhatsApp" },
    ],
    nameLabel: "Nombre y apellido",
    phoneLabel: "Teléfono (WhatsApp si es distinto)",
    companyLabel: "Empresa u organización (opcional)",
    notesLabel: "Algo más que debamos saber (opcional)",
    notesPlaceholder:
      "Horario de visita, acceso, medidas aproximadas, fotos que enviarás después…",
    errors: {
      need: "Contanos brevemente qué necesitás.",
      scope: "Elegí un tipo de trabajo.",
      timeline: "Elegí un plazo.",
      location: "Indicá la ubicación.",
      budget: "Elegí un rango o la opción por WhatsApp.",
      name: "Tu nombre es obligatorio.",
      phone: "Un teléfono válido es obligatorio.",
    },
  },
  en: {
    pageTitle: "Guided quote",
    sideEyebrow: "SYS Mantenimiento",
    sideHeadWhite: "Request a quote",
    sideHeadAccent: "in a few steps.",
    sideBody:
      "Tell us the scope, location, and timeline—that helps us reply with clear next steps.",
    backHome: "Back to home",
    stepLabel: "Step {n} of {total}",
    reviewStepLabel: "Summary",
    next: "Next",
    back: "Back",
    openWhatsapp: "Open WhatsApp with my request",
    reviewTitle: "Ready to send",
    reviewHint: "Review the summary and tap the button to send it on WhatsApp.",
    messageLabels: {
      header: "*Quote — SYS Mantenimiento*",
      need: "• Need:",
      scope: "• Type of work:",
      timeline: "• Timeline:",
      location: "• Location:",
      budget: "• Budget range:",
      name: "• Name:",
      phone: "• Phone:",
      company: "• Company:",
      notes: "• Notes:",
      footer: "_Message generated from sysmantenimiento.com_",
      truncated: "truncated",
    },
    steps: [
      {
        key: "need",
        title: "What do you need?",
        hint: "Describe the maintenance, install, or issue—even at a high level.",
        placeholder:
          "E.g.: common-area upkeep in a building, roof leak, monthly landscaping…",
      },
      {
        key: "scope",
        title: "Type of work",
        hint: "Pick the closest match.",
      },
      {
        key: "timeline",
        title: "When do you need it?",
        hint: "Helps us prioritize.",
      },
      {
        key: "location",
        title: "Location",
        hint: "Province, canton, or approximate area.",
        placeholder: "E.g.: San José, Escazú / Guanacaste, Liberia…",
      },
      {
        key: "budget",
        title: "Budget range",
        hint: "Ballpark only; formal quotes may follow a site visit.",
      },
      {
        key: "contact",
        title: "Your contact details",
        hint: "So we can reach you if we need clarifications.",
      },
    ],
    scopePlaceholder: "Select an option",
    scopeOptions: [
      {
        value: "One-off / corrective maintenance",
        label: "One-off or corrective maintenance",
      },
      { value: "Recurring / preventive plan", label: "Recurring or preventive plan" },
      { value: "Small project / scoped work", label: "Small project or scoped work" },
      { value: "Urgent / risk of downtime", label: "Urgent or downtime risk" },
      { value: "Not sure yet", label: "Not sure yet" },
    ],
    timelinePlaceholder: "Select timeline",
    timelineOptions: [
      { value: "As soon as possible (urgent)", label: "As soon as possible (urgent)" },
      { value: "This week", label: "This week" },
      { value: "In 2–4 weeks", label: "In 2–4 weeks" },
      { value: "In 1–3 months", label: "In 1–3 months" },
      { value: "Flexible / TBD", label: "Flexible / to be defined" },
    ],
    budgetPlaceholder: "Select a range",
    budgetOptions: [
      { value: "Under CRC 500k", label: "Under ₡500,000" },
      { value: "CRC 500k – 2M", label: "₡500,000 – ₡2,000,000" },
      { value: "CRC 2M – 5M", label: "₡2,000,000 – ₡5,000,000" },
      { value: "Over CRC 5M", label: "Over ₡5,000,000" },
      { value: "Prefer to discuss on WhatsApp", label: "Prefer to discuss on WhatsApp" },
    ],
    nameLabel: "Full name",
    phoneLabel: "Phone (WhatsApp if different)",
    companyLabel: "Company (optional)",
    notesLabel: "Anything else we should know (optional)",
    notesPlaceholder:
      "Visit windows, access, rough sizes, photos you will send later…",
    errors: {
      need: "Please describe what you need.",
      scope: "Select a type of work.",
      timeline: "Select a timeline.",
      location: "Add a location.",
      budget: "Select a budget range.",
      name: "Name is required.",
      phone: "A valid phone number is required.",
    },
  },
};
