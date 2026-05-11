import { notFound } from "next/navigation";

import SimpleRoutePage from "@/components/SimpleRoutePage";
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
    <SimpleRoutePage
      crumbs={[{ label: "Home", href: "/en" }, { label: sector.titles.en }]}
      description={sector.descriptions.en}
      title={sector.titles.en}
    />
  );
}
