import SectorCategoryHero from "@/components/sectors/SectorCategoryHero";
import SectorPageBottomCta from "@/components/sectors/SectorPageBottomCta";
import SectorProjectsShowcase from "@/components/sectors/SectorProjectsShowcase";
import {
  getSectorCategoryShowcase,
  getSectorPageBottomCta,
} from "@/lib/sectorCategoryShowcase";

/** @param {{ locale: 'es' | 'en'; sector: object; crumbs: { label: string; href?: string; isHome?: boolean }[] }} props */
export default function SectorPage({ locale, sector, crumbs }) {
  const showcase = getSectorCategoryShowcase(locale, sector);
  const bottom = getSectorPageBottomCta(locale);

  return (
    <div className="flex flex-1 flex-col bg-zinc-100">
      <SectorCategoryHero locale={locale} sector={sector} crumbs={crumbs} />
      <main className="flex-1 pt-8 sm:pt-10">
        <SectorProjectsShowcase locale={locale} showcase={showcase} />
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
