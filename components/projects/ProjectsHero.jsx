import PanoramaSplitHero from "@/components/layout/PanoramaSplitHero";
import { PROJECTS_PANORAMA } from "@/lib/projectsPanorama";

/** @param {{ locale: 'es' | 'en' }} props */
export default function ProjectsHero({ locale }) {
  const ctaLabel =
    locale === "en" ? "Browse by category" : "Explorá por categoría";

  return (
    <PanoramaSplitHero
      line1={PROJECTS_PANORAMA.heroTitle[locale]}
      tagline={PROJECTS_PANORAMA.heroTagline[locale]}
      imageSrc={PROJECTS_PANORAMA.src}
      imageAlt={PROJECTS_PANORAMA.alt[locale]}
      id="projects-hero-heading"
      cta={{ href: "#explorar-categorias", label: ctaLabel }}
    />
  );
}
