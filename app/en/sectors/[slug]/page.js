import { notFound } from "next/navigation";

import SectorPage from "@/components/sectors/SectorPage";
import {
  getSectorBySlugEn,
  sectorStaticSlugEn,
} from "@/lib/sectors";

export function generateStaticParams() {
  return sectorStaticSlugEn();
}

/** @param {{ params: Promise<{ slug: string }> }} props */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const sector = getSectorBySlugEn(slug);
  if (!sector) return {};
  return {
    title: `${sector.titles.en} | SYS Mantenimiento`,
    description: sector.descriptions.en,
  };
}

/** @param {{ params: Promise<{ slug: string }> }} props */
export default async function SectorPageEn({ params }) {
  const { slug } = await params;
  const sector = getSectorBySlugEn(slug);
  if (!sector) notFound();

  return (
    <SectorPage
      locale="en"
      sector={sector}
      crumbs={[
        { label: "Home", href: "/en", isHome: true },
        { label: "Projects", href: "/en" },
        { label: sector.titles.en },
      ]}
    />
  );
}
