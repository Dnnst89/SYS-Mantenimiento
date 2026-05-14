import QuoteCtaCard from "@/components/cta/QuoteCtaCard";
import HomeHero from "@/components/home/HomeHero";
import ServicesFaqAccordion from "@/components/services/ServicesFaqAccordion";
import ServicesOurProcess from "@/components/services/ServicesOurProcess";

export const metadata = {
  title: "Servicios | SYS Mantenimiento",
  description:
    "Cómo trabajamos, preguntas frecuentes y cotización — mantenimiento integral con procesos claros.",
};

export default function ServiciosPage() {
  return (
    <div className="flex flex-1 flex-col">
      <HomeHero locale="es" />
      <ServicesOurProcess locale="es" />
      <div className="flex-1 bg-surface-muted py-12 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
            <div className="lg:col-span-7">
              <ServicesFaqAccordion locale="es" />
            </div>
            <div className="lg:col-span-5">
              <QuoteCtaCard locale="es" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
