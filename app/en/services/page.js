import QuoteCtaCard from "@/components/cta/QuoteCtaCard";
import BrandsCarousel from "@/components/home/BrandsCarousel";
import HomeHero from "@/components/home/HomeHero";
import ServicesFaqAccordion from "@/components/services/ServicesFaqAccordion";
import ServicesHowWeWorkSection from "@/components/services/ServicesHowWeWorkSection";
import ServicesOurProcess from "@/components/services/ServicesOurProcess";

export const metadata = {
  title: "Services | SYS Mantenimiento",
  description:
    "How we work, service stages, FAQs, and quoting — comprehensive maintenance with clear processes.",
};

export default function EnglishServicesPage() {
  return (
    <div className="flex flex-1 flex-col">
      <HomeHero locale="en" />
      <BrandsCarousel locale="en" />
      <ServicesHowWeWorkSection locale="en" />
      <ServicesOurProcess locale="en" />
      <div className="flex-1 bg-surface-muted py-12 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
            <div className="lg:col-span-7">
              <ServicesFaqAccordion locale="en" />
            </div>
            <div className="lg:col-span-5">
              <QuoteCtaCard locale="en" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
