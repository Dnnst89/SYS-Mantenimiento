import Image from "next/image";

import BreadcrumbTrail from "@/components/header/BreadcrumbTrail";

/**
 * @param {{
 *   locale: 'es' | 'en';
 *   sector: {
 *     src: string;
 *     alt: { es: string; en: string };
 *     heroAccent: { es: string; en: string };
 *     heroTagline: { es: string; en: string };
 *   };
 *   crumbs: { label: string; href?: string; isHome?: boolean }[];
 * }} props
 */
export default function SectorCategoryHero({ locale, sector, crumbs }) {
  const line1 = locale === "en" ? "Projects" : "Proyectos";
  const id = "sector-hero-heading";

  return (
    <section
      className="relative w-full overflow-hidden bg-sys-black pb-10 sm:pb-12 lg:pb-14"
      aria-labelledby={id}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col px-4 pt-5 sm:px-6 sm:pt-6 lg:max-w-[1200px] lg:min-h-[480px] xl:min-h-[520px] lg:flex-row lg:items-stretch lg:pt-8">
        <div
          className="relative z-20 order-2 flex w-full flex-col items-start justify-center bg-sys-black pb-6 pt-2 sm:pb-8 lg:order-1 lg:w-[min(46%,520px)] lg:flex-none lg:shrink-0 lg:py-6 lg:pr-4"
          style={{
            fontFamily:
              "var(--font-display-hero), var(--font-geist-sans), system-ui, sans-serif",
          }}
        >
          <div className="mb-5 w-full lg:mb-6">
            <BreadcrumbTrail
              items={crumbs}
              layout="inline"
              ariaLabel={locale === "en" ? "Breadcrumb" : "Migas de pan"}
            />
          </div>
          <div
            className="mb-5 h-1 w-12 shrink-0 rounded-full bg-gradient-to-r from-sys-yellow to-sys-yellow-bright shadow-[0_0_20px_rgba(232,214,0,0.35)] sm:mb-6 sm:w-14"
            aria-hidden
          />
          <h1
            id={id}
            className="w-full text-[clamp(1.875rem,5.2vw,3.125rem)] font-semibold leading-[1.06] tracking-[-0.035em] sm:text-[clamp(2rem,4.8vw,3.25rem)]"
          >
            <span className="block text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]">
              {line1}
            </span>
            <span className="mt-2 block text-sys-yellow sm:mt-2.5">
              {sector.heroAccent[locale]}
            </span>
          </h1>
          <p className="mt-5 w-full max-w-[40rem] text-pretty text-[15px] font-normal leading-[1.7] text-zinc-400 sm:mt-6 sm:text-base lg:mt-7 lg:text-[1.0625rem] lg:leading-[1.72]">
            {sector.heroTagline[locale]}
          </p>
        </div>

        <div className="relative order-1 flex min-h-[220px] w-full flex-1 flex-col self-stretch pb-2 pt-0 sm:min-h-[260px] lg:order-2 lg:min-h-0 lg:py-4 lg:pb-6">
          <div className="relative flex min-h-[220px] flex-1 overflow-hidden rounded-2xl sm:min-h-[260px] lg:min-h-0 lg:rounded-l-3xl lg:rounded-r-none">
            <Image
              src={sector.src}
              alt={sector.alt[locale]}
              fill
              priority
              className="object-cover object-center lg:object-[center_60%]"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[min(48%,220px)] bg-gradient-to-r from-black from-5% via-black/80 to-transparent lg:w-[min(40%,260px)]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-[11] w-[min(60%,360px)] bg-gradient-to-l from-black from-0% via-black/70 via-40% to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-t from-black/35 to-transparent lg:from-transparent lg:to-transparent"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
