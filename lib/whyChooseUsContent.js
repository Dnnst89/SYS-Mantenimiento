/** Contenido de la sección “Por qué elegirnos” (inicio). */

import { getQuoteWizardHref } from "@/lib/quoteWizardContent";

const COPY = {
  es: {
    kicker: "¿Por qué elegirnos?",
    titleBefore: "Más que mantenimiento,",
    titleAccent: "compromiso.",
    intro:
      "Construimos infraestructura con soluciones estratégicas que integran construcción y electricidad, garantizando proyectos de alta calidad, eficiencia y cumplimiento para satisfacer las necesidades de nuestros clientes.",
    ctaPrimary: "Solicitar cotización",
    ctaSecondary: "Conocer más",
    stats: [
      { value: "3+", label: "Años en el mercado", icon: "calendar" },
      { value: "100+", label: "Proyectos entregados", icon: "clipboard" },
      { value: "100%", label: "Garantía en cada trabajo", icon: "shieldCheck" },
    ],
    features: [
      {
        n: "01",
        title: "Trabajo garantizado",
        body: "Estándares de ejecución y seguimiento para que el resultado cumpla lo acordado.",
        icon: "helmet",
      },
      {
        n: "02",
        title: "Cobertura nacional",
        body: "Operación en distintas zonas del país según la necesidad de su proyecto.",
        icon: "pin",
      },
    ],
    bannerTitle: "¿Listo para trabajar con nosotros?",
    bannerSubtitle:
      "Contáctenos hoy y reciba su cotización sin costo.",
    bannerCta: "Solicitar cotización",
    bannerBullets: [
      { title: "Atención rápida", sub: "Personal real" },
      { title: "Cotización sin costo", sub: "Sin compromiso" },
      { title: "Soluciones a medida", sub: "Para cada proyecto" },
    ],
    contactHref: getQuoteWizardHref("es"),
    aboutHref: "/nosotros",
  },
  en: {
    kicker: "Why choose us",
    titleBefore: "More than maintenance,",
    titleAccent: "commitment.",
    intro:
      "We do not only fix—we prevent. Every project we take on is a promise of quality, punctuality, and real support.",
    ctaPrimary: "Request a quote",
    ctaSecondary: "Learn more",
    stats: [
      { value: "15+", label: "Years in the market", icon: "calendar" },
      { value: "500+", label: "Projects delivered", icon: "clipboard" },
      { value: "100%", label: "Warranty on every job", icon: "shieldCheck" },
    ],
    features: [
      {
        n: "01",
        title: "Proven trust",
        body: "Track record and references that back every field intervention.",
        icon: "shield",
      },
      {
        n: "02",
        title: "Agile response",
        body: "Clear coordination and response times suited to your operation’s urgency.",
        icon: "clock",
      },
      {
        n: "03",
        title: "Guaranteed work",
        body: "Execution standards and follow-through so results match what was agreed.",
        icon: "helmet",
      },
      {
        n: "04",
        title: "Specialized team",
        body: "Professionals with experience in residential, commercial, and industrial settings.",
        icon: "team",
      },
      {
        n: "05",
        title: "Transparent pricing",
        body: "Clear proposals, no surprises, aligned with the true scope of work.",
        icon: "invoice",
      },
      {
        n: "06",
        title: "National coverage",
        body: "Operations across different regions according to your project needs.",
        icon: "pin",
      },
    ],
    bannerTitle: "Ready to work with us?",
    bannerSubtitle: "Contact us today and receive a free quote.",
    bannerCta: "Request a quote",
    bannerBullets: [
      { title: "Fast attention", sub: "Real people" },
      { title: "Free quote", sub: "No obligation" },
      { title: "Tailored solutions", sub: "For every project" },
    ],
    contactHref: getQuoteWizardHref("en"),
    aboutHref: "/en/about",
  },
};

/** @param {'es' | 'en'} locale */
export function getWhyChooseUsCopy(locale) {
  return COPY[locale] ?? COPY.es;
}
