import QuoteWizardPageView from "@/components/quote/QuoteWizardPageView";

export const metadata = {
  title: "Guided quote | SYS Mantenimiento",
  description:
    "Request a quote in a few steps: scope, timeline, location, and budget. Opens WhatsApp with a ready-to-send message.",
};

export default function EnglishCotizarPage() {
  return <QuoteWizardPageView locale="en" />;
}
