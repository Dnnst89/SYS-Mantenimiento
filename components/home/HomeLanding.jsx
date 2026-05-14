import BrandsCarousel from "@/components/home/BrandsCarousel";
import HomeHero from "@/components/home/HomeHero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProjectsCategoryGrid from "@/components/projects/ProjectsCategoryGrid";

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
    </div>
  );
}
