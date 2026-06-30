import Link from "next/link";

import QuoteWizard from "@/components/quote/QuoteWizard";
import { quoteWizardCopy } from "@/lib/quoteWizardContent";

/**
 * @param {{ locale: 'es' | 'en' }} props
 */
export default function QuoteWizardPageView({ locale }) {
  const c = quoteWizardCopy[locale];
  const homeHref = locale === "en" ? "/en" : "/";
  const homeLabel = locale === "en" ? "Home" : "Inicio";

  return (
    <div className="flex flex-1 flex-col">
      <main className="relative flex-1 overflow-hidden bg-zinc-950 text-white">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_95%_70%_at_8%_-15%,rgba(232,214,0,0.16),transparent_58%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_100%,rgba(39,39,42,0.85),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-1/4 top-1/3 h-[1px] w-[150%] rotate-[-9deg] bg-gradient-to-r from-transparent via-sys-yellow/12 to-transparent"
          aria-hidden
        />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 pt-6 sm:px-6 sm:pb-20 sm:pt-8 lg:max-w-[1200px] lg:pb-24">
          <nav aria-label="Migas de pan" className="mb-6 flex flex-wrap items-center gap-2 text-[13px] text-zinc-500">
            <Link
              href={homeHref}
              className="transition hover:text-sys-yellow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sys-yellow"
            >
              {homeLabel}
            </Link>
            <span className="text-zinc-600" aria-hidden>
              /
            </span>
            <span className="font-medium text-zinc-300">{c.pageTitle}</span>
          </nav>
          <QuoteWizard locale={locale} />
        </div>
      </main>
    </div>
  );
}
