import QuoteWizardPageView from "@/components/quote/QuoteWizardPageView";

export const metadata = {
  title: "Cotización guiada | SYS Mantenimiento",
  description:
    "Pedí cotización en unos pasos: qué necesitás, plazo, ubicación y presupuesto. Abrimos WhatsApp con el mensaje listo para enviar.",
};

export default function CotizarPage() {
  return <QuoteWizardPageView locale="es" />;
}
