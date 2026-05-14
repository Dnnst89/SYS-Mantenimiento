import Image from "next/image";
import Link from "next/link";

import { getQuoteWizardHref } from "@/lib/quoteWizardContent";
import { quoteCtaCopy } from "@/lib/servicesPageContent";

function PhoneBadgeIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M15.6 14.4c-.3.5-1.1 1-2.6 1-3.3 0-6-2.7-6-6 0-1.5.5-2.3 1-2.6.4-.2.9-.1 1.2.2l1.7 1.7c.2.2.2.6 0 .8l-.6.6c-.2.2-.2.5 0 .7 1.1 1.9 2.6 3.4 4.5 4.5.2.2.5.2.7 0l.6-.6c.2-.2.6-.2.8 0l1.7 1.7c.3.3.4.8.2 1.2z" />
    </svg>
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

const CTA_IMAGE =
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&h=900&q=85&auto=format&fit=crop";

/** Degradado ancho y suave: negro → transparencia en un tramo largo (referencia diseño). */
const GRADIENT_DESKTOP =
  "linear-gradient(90deg,#000 0%,rgba(0,0,0,0.96) 5%,rgba(0,0,0,0.88) 11%,rgba(0,0,0,0.74) 19%,rgba(0,0,0,0.56) 30%,rgba(0,0,0,0.36) 42%,rgba(0,0,0,0.20) 54%,rgba(0,0,0,0.10) 66%,rgba(0,0,0,0.04) 78%,rgba(0,0,0,0) 92%)";

const GRADIENT_MOBILE =
  "linear-gradient(180deg,#000 0%,rgba(0,0,0,0.94) 10%,rgba(0,0,0,0.78) 24%,rgba(0,0,0,0.52) 42%,rgba(0,0,0,0.28) 58%,rgba(0,0,0,0.12) 74%,rgba(0,0,0,0.04) 88%,rgba(0,0,0,0) 100%)";

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
      className="relative isolate min-h-[19rem] w-full max-w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)] lg:min-h-[17.5rem]"
      aria-labelledby="quote-cta-card-title"
    >
      <div className="absolute inset-0">
        <Image
          src={CTA_IMAGE}
          alt=""
          fill
          sizes="(max-width: 1023px) 100vw, 520px"
          className="object-cover object-[70%_center] sm:object-[68%_42%] lg:object-[62%_38%]"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1] lg:hidden"
        style={{ background: GRADIENT_MOBILE }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] hidden lg:block"
        style={{ background: GRADIENT_DESKTOP }}
        aria-hidden
      />

      <div
        className="relative z-10 flex min-h-[19rem] max-w-xl flex-col justify-center gap-5 px-6 py-9 sm:gap-6 sm:px-8 sm:py-10 lg:min-h-[17.5rem] lg:max-w-[min(26rem,58%)] lg:py-11 lg:pl-10 lg:pr-6"
        style={{
          fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
        }}
      >
        <div
          className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-sys-yellow text-sys-yellow"
          aria-hidden
        >
          <PhoneBadgeIcon className="h-6 w-6" />
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
          className="group inline-flex h-11 w-full max-w-xs shrink-0 items-center justify-center gap-2 self-start rounded-full border-2 border-transparent bg-sys-yellow px-5 text-[13px] font-semibold leading-none text-zinc-950 shadow-sm transition-colors duration-200 hover:bg-sys-yellow-bright focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sys-yellow-bright sm:h-12 sm:w-auto sm:max-w-none sm:px-6 sm:text-sm"
        >
          <span>{t.cta}</span>
          <ArrowRightIcon className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 sm:h-4 sm:w-4" />
        </Link>
      </div>
    </aside>
  );
}
