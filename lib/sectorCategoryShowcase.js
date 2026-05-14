import { getQuoteWizardHref } from "@/lib/quoteWizardContent";

/** @param {'es' | 'en'} locale */
export function getSectorPageBottomCta(locale) {
  if (locale === "en") {
    return {
      title: "Got a project in mind?",
      subtitle: "We are ready to help you make it a reality.",
      cta: "Request a quote",
      href: getQuoteWizardHref("en"),
    };
  }
  return {
    title: "¿Tenés un proyecto en mente?",
    subtitle: "Estamos listos para ayudarte a hacerlo realidad.",
    cta: "Solicitar cotización",
    href: getQuoteWizardHref("es"),
  };
}
