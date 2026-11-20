import Image from "next/image";
import Link from "next/link";

import { getQuoteWizardHref } from "@/lib/quoteWizardContent";
import { quoteCtaCopy } from "@/lib/servicesPageContent";

function PhoneBadgeIcon({ className }) {
  return (
    <Image
      src="/logo-sys-mantenimiento.png"
      alt="Logo SyS Mantenimiento."
      width={64}
      height={80}
      className={className}
    />
  );
}

function ArrowRightIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

const CTA_IMAGE = "/hero_image/image_mobile.webp";

/**
 * CTA reutilizable: **una sola imagen** a todo el bloque + **degradado extenso** encima
 * (sin cortar en dos celdas “panel negro | foto”).
 *
 * @param {{ locale: 'es' | 'en' }} props
 */
export default function QuoteCtaCard({ locale }) {
  const t = quoteCtaCopy[locale];
  const href = getQuoteWizardHref(locale);

  return (
    <aside
      className="relative isolate min-h-[19rem] w-full max-w-full overflow-hidden rounded-2xl border border-white/10 bg-sys-black shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)] lg:min-h-[17.5rem]"
      aria-labelledby="quote-cta-card-title"
    >
      <div className="absolute inset-0">
        <Image
          src={CTA_IMAGE}
          alt=""
          fill
          sizes="(max-width: 1023px) 100vw, 520px"
          className="object-cover object-[80%_center] sm:object-[90%_42%] lg:object-[90%_38%]"
        />
      </div>

      <div
        className="quote-cta-gradient-mobile bg-black/60 pointer-events-none absolute inset-0 z-[1]"
        aria-hidden

      />
      <div
        className="quote-cta-gradient-desktop pointer-events-none absolute inset-0 z-[1] hidden lg:block"
        aria-hidden
      />

      <div
        className="relative z-10 flex min-h-[19rem] max-w-xl flex-col justify-center gap-5 px-6 py-9 sm:gap-6 sm:px-8 sm:py-10 lg:min-h-[17.5rem] lg:max-w-[min(26rem,58%)] lg:py-11 lg:pl-10 lg:pr-6"
        style={{
          fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
        }}
      >
        <div
          className="inline-flex h-12 w-12 shrink-0 items-center justify-center"
          aria-hidden
        >
          <PhoneBadgeIcon className="h-10 w-12" />
        </div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sys-yellow sm:text-xs">
          {t.eyebrow}
        </p>
        <h2
          id="quote-cta-card-title"
          className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-[1.65rem] sm:leading-snug"
          style={{
            fontFamily:
              "var(--font-display-hero), var(--font-geist-sans), system-ui, sans-serif",
          }}
        >
          {t.title}
        </h2>
        <p className="max-w-md text-[15px] leading-relaxed text-white/90">{t.body}</p>
        <Link
          href={href}
          className="group inline-flex h-11 w-full max-w-xs shrink-0 items-center justify-center gap-2 self-start rounded-full border-2 border-transparent bg-sys-yellow px-5 text-[13px] font-semibold leading-none text-sys-black shadow-sm transition-colors duration-200 hover:bg-sys-yellow-bright focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sys-yellow-bright sm:h-12 sm:w-auto sm:max-w-none sm:px-6 sm:text-sm"
        >
          <span>{t.cta}</span>
          <ArrowRightIcon className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 sm:h-4 sm:w-4" />
        </Link>
      </div>
    </aside>
  );
}
