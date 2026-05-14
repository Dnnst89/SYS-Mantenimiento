import QuoteCtaCard from "@/components/cta/QuoteCtaCard";
import BrandsCarousel from "@/components/home/BrandsCarousel";
import HomeHero from "@/components/home/HomeHero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProjectsCategoryGrid from "@/components/projects/ProjectsCategoryGrid";
import ServicesFaqAccordion from "@/components/services/ServicesFaqAccordion";

/**
 * Página de inicio: hero panorámico + grilla por categoría (antes en /proyectos).
 * @param {{ locale: 'es' | 'en' }} props
 */
export default function HomeLanding({ locale }) {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <HomeHero locale={locale} />
      <BrandsCarousel locale={locale} />
      <ProjectsCategoryGrid locale={locale} />
      <WhyChooseUs locale={locale} />
      <div className="bg-surface-muted px-4 py-12 sm:px-6 sm:py-14">
        <div className="mx-auto w-full max-w-6xl lg:max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
            <div className="lg:col-span-7">
              <ServicesFaqAccordion locale={locale} />
            </div>
            <div className="lg:col-span-5">
              <QuoteCtaCard locale={locale} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
