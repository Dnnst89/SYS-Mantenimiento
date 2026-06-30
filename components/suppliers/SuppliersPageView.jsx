import Image from "next/image";
import Link from "next/link";

import SuppliersIntroLead from "@/components/suppliers/SuppliersIntroLead";
import SuppliersSplitHeader from "@/components/suppliers/SuppliersSplitHeader";
import { COMPANY_EMAIL } from "@/lib/companyEmail";
import { homeBrandItems } from "@/lib/homeBrands";
import { suppliersPageCopy } from "@/lib/suppliersPageContent";

/** @param {{ src: string; alt: string; name: string }} props */
function PartnerLogoCard({ src, alt, name }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-[0_2px_12px_-2px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-sys-yellow/50 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12),0_0_0_1px_rgba(232,214,0,0.12)]">
      <div className="relative flex min-h-[9.5rem] flex-1 items-center justify-center bg-gradient-to-b from-zinc-100/95 via-white to-white px-6 py-9 sm:min-h-[10.5rem] sm:py-10">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sys-yellow/35 to-transparent opacity-0 transition duration-300 group-hover:opacity-100"
          aria-hidden
        />
        <div className="relative h-[3.25rem] w-full max-w-[13rem] sm:h-14 sm:max-w-[14rem]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain object-center transition duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 45vw, 220px"
          />
        </div>
      </div>
      <div className="relative border-t border-zinc-200/90 bg-zinc-50/80 px-4 py-4 sm:px-5 sm:py-4">
        <span
          className="absolute left-0 top-0 h-full w-1 rounded-r-full bg-sys-yellow opacity-0 transition duration-300 group-hover:opacity-100"
          aria-hidden
        />
        <p className="text-center text-[13px] font-semibold leading-snug tracking-tight text-zinc-900 sm:text-sm">
          {name}
        </p>
      </div>
    </article>
  );
}

/** @param {{ locale: 'es' | 'en' }} props */
export default function SuppliersPageView({ locale }) {
  const t = suppliersPageCopy[locale];
  const mailHref = `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(t.mailSubject)}`;

  return (
    <div className="flex flex-1 flex-col">
      <SuppliersIntroLead locale={locale} />
      <SuppliersSplitHeader locale={locale} />

      <section
        className="relative overflow-hidden border-y border-zinc-200/90 bg-gradient-to-b from-white via-[#faf9f6] to-zinc-100/40 py-16 sm:py-20 lg:py-24"
        aria-labelledby="suppliers-partners-heading"
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sys-yellow/40 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-sys-yellow/[0.07] blur-3xl sm:h-96 sm:w-96"
          aria-hidden
        />

        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-14">
            <div className="max-w-xl lg:max-w-md lg:shrink-0">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-0.5 w-10 rounded-full bg-sys-yellow shadow-[0_0_12px_rgba(232,214,0,0.35)]" aria-hidden />
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sys-yellow">
                  {t.partnersEyebrow}
                </p>
              </div>
              <h2
                id="suppliers-partners-heading"
                className="text-balance text-2xl font-semibold leading-[1.12] tracking-tight text-zinc-950 sm:text-3xl lg:text-[2.125rem]"
                style={{
                  fontFamily:
                    "var(--font-display-hero), var(--font-geist-sans), system-ui, sans-serif",
                }}
              >
                {t.partnersTitle}
              </h2>
            </div>
            <p className="max-w-2xl text-pretty text-[15px] leading-[1.75] text-zinc-600 sm:text-base lg:pt-1 lg:text-[1.0625rem] lg:leading-[1.72]">
              {t.partnersIntro}
            </p>
          </div>

          <ul className="mt-14 grid list-none grid-cols-1 gap-5 p-0 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:mt-20 lg:grid-cols-3 lg:gap-7">
            {homeBrandItems.map((b, i) => {
              const lastRowSingle =
                i === homeBrandItems.length - 1 && homeBrandItems.length % 3 === 1;
              return (
                <li
                  key={b.src}
                  className={lastRowSingle ? "lg:col-span-3 lg:flex lg:justify-center" : ""}
                >
                  <div className={lastRowSingle ? "w-full max-w-sm" : "h-full"}>
                    <PartnerLogoCard src={b.src} alt={b.alt[locale]} name={b.alt[locale]} />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="bg-zinc-950 px-5 py-12 text-white sm:px-8 sm:py-14 lg:px-12" aria-labelledby="suppliers-cta-heading">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-sys-yellow/90">{t.ctaEyebrow}</p>
            <h2
              id="suppliers-cta-heading"
              className="mt-4 text-xl font-semibold leading-snug tracking-tight sm:text-2xl"
              style={{
                fontFamily:
                  "var(--font-display-hero), var(--font-geist-sans), system-ui, sans-serif",
              }}
            >
              {t.ctaTitle}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/70 sm:text-base">{t.ctaBody}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href={t.contactHref}
              className="inline-flex h-12 items-center justify-center bg-sys-yellow px-8 text-sm font-semibold text-zinc-950 transition hover:bg-sys-yellow-bright focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sys-yellow-bright"
            >
              {t.ctaPrimary}
            </Link>
            <a
              href={mailHref}
              className="inline-flex h-12 items-center justify-center border border-white/25 px-8 text-sm font-medium text-white transition hover:border-sys-yellow/60 hover:text-sys-yellow-bright focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {t.ctaMail}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
