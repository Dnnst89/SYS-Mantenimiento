import BrandsCarousel from "@/components/home/BrandsCarousel";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProjectsCategoryGrid from "@/components/projects/ProjectsCategoryGrid";
import ProjectsHero from "@/components/projects/ProjectsHero";

/**
 * Página de inicio: hero panorámico + grilla por categoría (antes en /proyectos).
 * @param {{ locale: 'es' | 'en' }} props
 */
export default function HomeLanding({ locale }) {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <ProjectsHero locale={locale} />
      <BrandsCarousel locale={locale} />
      <ProjectsCategoryGrid locale={locale} />
      <WhyChooseUs locale={locale} />
    </div>
  );
}
