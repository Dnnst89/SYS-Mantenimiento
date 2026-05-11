import PageBanner from "@/components/header/PageBanner";

import HomeBrandsCarousel from "./HomeBrandsCarousel";
import HomeSectorGrid from "./HomeSectorGrid";

/**
 * Landing compartido: sector grid + carrusel de marcas + bloque intro.
 * @param {{ locale: 'es' | 'en'; bannerTitle: string; crumbs: { label: string; href?: string }[] }} props
 */
export default function HomeLanding({ locale, bannerTitle, crumbs }) {
  const intro =
    locale === "en" ?
      "Welcome to SYS Mantenimiento. More content will be available here soon."
    : "Bienvenido a SYS Mantenimiento. Pronto encontrarás más información en este sitio.";

  return (
    <div className="flex flex-1 flex-col">
      <PageBanner crumbs={crumbs} title={bannerTitle} />
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl overflow-hidden border border-zinc-200/80 shadow-sm lg:max-w-[1200px]">
          <HomeSectorGrid locale={locale} />
        </div>
        <div className="mx-auto mt-10 w-full max-w-6xl lg:mt-12 lg:max-w-[1200px]">
          <HomeBrandsCarousel locale={locale} />
        </div>
      </div>
      <main className="flex-1 bg-surface-muted">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:max-w-[1200px]">
          <article className="rounded-2xl border border-zinc-200/80 bg-white p-8 shadow-sm sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
              <span className="text-sys-yellow">—</span>{" "}
              <span className="text-zinc-900">SYS Mantenimiento</span>
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-zinc-600">
              {intro}
            </p>
          </article>
        </div>
      </main>
    </div>
  );
}
