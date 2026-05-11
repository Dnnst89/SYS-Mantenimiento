import { notFound } from "next/navigation";

import SimpleRoutePage from "@/components/SimpleRoutePage";
import {
  getSectorBySlugEs,
  sectorStaticSlugEs,
} from "@/lib/sectors";

export function generateStaticParams() {
  return sectorStaticSlugEs();
}

/** @param {{ params: Promise<{ slug: string }> }} props */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const sector = getSectorBySlugEs(slug);
  if (!sector) return {};
  return {
    title: `${sector.titles.es} | SYS Mantenimiento`,
    description: sector.descriptions.es,
  };
}

/** @param {{ params: Promise<{ slug: string }> }} props */
export default async function SectorPageEs({ params }) {
  const { slug } = await params;
  const sector = getSectorBySlugEs(slug);
  if (!sector) notFound();

  return (
    <SimpleRoutePage
      crumbs={[{ label: "Inicio", href: "/" }, { label: sector.titles.es }]}
      description={sector.descriptions.es}
      title={sector.titles.es}
    />
  );
}
