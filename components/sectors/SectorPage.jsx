import SectorCategoryHero from "@/components/sectors/SectorCategoryHero";
import SectorPageBottomCta from "@/components/sectors/SectorPageBottomCta";
import SectorPageExperience from "@/components/sectors/SectorPageExperience";
import SectorWorkCatalog from "@/components/sectors/SectorWorkCatalog";
import { getSectorPageBottomCta } from "@/lib/sectorCategoryShowcase";
import { getSectorPageDetail } from "@/lib/sectorPageDetail";

/** @param {{ locale: 'es' | 'en'; sector: object; crumbs: { label: string; href?: string; isHome?: boolean }[] }} props */
export default function SectorPage({ locale, sector, crumbs }) {
  const bottom = getSectorPageBottomCta(locale);
  const detail = getSectorPageDetail(locale, sector);

  return (
    <div className="flex flex-1 flex-col bg-zinc-50">
      <SectorCategoryHero locale={locale} sector={sector} crumbs={crumbs} />
      <SectorPageExperience detail={detail} />
      <main className="flex-1">
        <SectorWorkCatalog
          title={detail.catalogTitle}
          subtitle={detail.catalogSubtitle}
          items={detail.catalog}
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
