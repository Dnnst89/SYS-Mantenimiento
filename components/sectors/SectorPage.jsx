export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";

import SectorCategoryHero from "@/components/sectors/SectorCategoryHero";
import SectorPageBottomCta from "@/components/sectors/SectorPageBottomCta";
import SectorWorkCatalog from "@/components/sectors/SectorWorkCatalog";
import { getSectorPageBottomCta } from "@/lib/sectorCategoryShowcase";
import { getSectorPageDetail } from "@/lib/sectorPageDetail";

/** @param {{ locale: 'es' | 'en'; sector: object; crumbs: { label: string; href?: string; isHome?: boolean }[] }} props */
export default function SectorPage({ locale, sector, crumbs }) {
  const detail = getSectorPageDetail(locale, sector);
  if (!detail) notFound();

  const bottom = getSectorPageBottomCta(locale);

  const catalogTranslations =
    locale === "en"
      ? {
          catalog: {
            all: "All",
            remodeling: "Remodeling",
            maintenance: "Maintenance",
            improvements: "Improvements",
            construction: "Construction",
            others: "Others",
            orderBy: "Order by:",
            mostRecent: "Most recent",
            oldest: "Oldest",
          },
        }
      : {
          catalog: {
            all: "Todos",
            remodeling: "Remodelaciones",
            maintenance: "Mantenimiento",
            improvements: "Mejoras",
            construction: "Construcción",
            others: "Otros",
            orderBy: "Ordenar por:",
            mostRecent: "Más recientes",
            oldest: "Más antiguos",
          },
        };

  return (
    <div className="flex flex-1 flex-col bg-zinc-50">

      <SectorCategoryHero locale={locale} sector={sector} crumbs={crumbs} />
      <main className="flex-1">
        <SectorWorkCatalog
          key={detail.slug}
          title={detail.catalogTitle}
          subtitle={detail.catalogSubtitle}
          items={detail.projects}
          translations={catalogTranslations}
          locale={locale}
        />
        <SectorPageBottomCta
          title={bottom.title}
          subtitle={bottom.subtitle}
          cta={bottom.cta}
          href={bottom.href}
        />
        <div className="h-12 sm:h-16" aria-hidden />
      </main>
    </div>
  );
}