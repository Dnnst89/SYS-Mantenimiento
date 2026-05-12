import Image from "next/image";
import Link from "next/link";

import { getWhyChooseUsCopy } from "@/lib/whyChooseUsContent";

function ArrowRight({ className }) {
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

function CheckMini({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StatIcon({ name, className }) {
  const stroke = "currentColor";
  const sw = 1.5;
  switch (name) {
    case "calendar":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <rect
            x="3"
            y="4"
            width="18"
            height="18"
            rx="2"
            stroke={stroke}
            strokeWidth={sw}
          />
          <path
            d="M16 2v4M8 2v4M3 10h18"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinecap="round"
          />
        </svg>
      );
    case "clipboard":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinejoin="round"
          />
          <path
            d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinecap="round"
          />
          <path
            d="M9 12h6M9 16h5M9 8h2"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinecap="round"
          />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinejoin="round"
          />
          <path
            d="M9 12.5 11 14.5 15 10.5"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

function FeatureIcon({ name, className }) {
  const stroke = "currentColor";
  const sw = 1.65;
  switch (name) {
    case "shield":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinejoin="round"
          />
        </svg>
      );
    case "clock":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <circle cx="12" cy="12" r="9" stroke={stroke} strokeWidth={sw} />
          <path d="M12 7v5l3 2" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
        </svg>
      );
    case "helmet":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M9 18h6M6 10a6 6 0 0 1 12 0v2H6v-2Z"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinejoin="round"
          />
          <path d="M4 14h16v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2Z" stroke={stroke} strokeWidth={sw} />
        </svg>
      );
    case "team":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <circle cx="9" cy="7" r="3" stroke={stroke} strokeWidth={sw} />
          <circle cx="17" cy="9" r="2.5" stroke={stroke} strokeWidth={sw} />
          <path
            d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2M14 21v-1a3 3 0 0 1 3-3h1"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinecap="round"
          />
        </svg>
      );
    case "invoice":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinejoin="round"
          />
          <path d="M14 2v6h6M8 13h8M8 17h6" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
        </svg>
      );
    case "pin":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M12 21s7-4.35 7-10a7 7 0 1 0-14 0c0 5.65 7 10 7 10Z"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinejoin="round"
          />
          <circle cx="12" cy="11" r="2" stroke={stroke} strokeWidth={sw} />
        </svg>
      );
    default:
      return null;
  }
}

function PhoneIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.11a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** @param {{ locale: 'es' | 'en' }} props */
export default function WhyChooseUs({ locale }) {
  const t = getWhyChooseUsCopy(locale);
  const bannerImg =
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=75&auto=format&fit=crop";

  return (
    <section
      className="bg-white pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20"
      aria-labelledby="why-choose-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:max-w-[1200px]">
        {/* Bloque superior: copy + stats */}
        <div className="grid gap-10 lg:grid-cols-[1.05fr_minmax(0,0.75fr)] lg:gap-12 xl:gap-16">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-0.5 w-8 rounded-full bg-sys-yellow" aria-hidden />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-sys-yellow">
                {t.kicker}
              </span>
            </div>
            <h2
              id="why-choose-heading"
              className="text-3xl font-bold leading-[1.12] tracking-tight text-zinc-950 sm:text-4xl lg:text-[2.65rem] lg:leading-[1.1]"
            >
              {t.titleBefore}{" "}
              <span className="text-sys-yellow">{t.titleAccent}</span>
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-zinc-500 sm:text-base">
              {t.intro}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <Link
                href={t.contactHref}
                className="group inline-flex w-fit max-w-full overflow-hidden rounded-[10px] bg-sys-yellow shadow-md transition hover:bg-sys-yellow-bright"
              >
                <span className="flex w-11 shrink-0 items-center justify-center bg-zinc-900 text-white sm:w-12">
                  <ArrowRight className="h-4 w-4 -rotate-45 sm:h-[18px] sm:w-[18px]" />
                </span>
                <span className="px-5 py-3.5 text-[13px] font-bold uppercase tracking-wide text-zinc-950 sm:px-6 sm:text-sm">
                  {t.ctaPrimary}
                </span>
              </Link>
              <Link
                href={t.aboutHref}
                className="inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.15em] text-zinc-950 underline-offset-4 transition hover:text-sys-yellow hover:underline sm:text-[13px]"
              >
                {t.ctaSecondary}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            {t.stats.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-4 rounded-xl bg-zinc-900 px-5 py-4 shadow-lg sm:gap-5 sm:px-6 sm:py-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border-2 border-sys-yellow text-sys-yellow sm:h-14 sm:w-14">
                  <StatIcon name={s.icon} className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <div className="min-w-0">
                  <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-0.5 text-[11px] font-semibold uppercase leading-snug tracking-[0.12em] text-white/90 sm:text-xs">
                    {s.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grilla 3×2 */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:mt-20 lg:grid-cols-3 lg:gap-6">
          {t.features.map((f) => (
            <article
              key={f.n}
              className="relative overflow-hidden rounded-xl border border-zinc-100 bg-white p-6 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] sm:p-7"
            >
              <div className="mb-5 flex items-start justify-between gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sys-yellow text-zinc-950 ring-2 ring-sys-yellow/80 sm:h-12 sm:w-12">
                  <FeatureIcon name={f.icon} className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <span className="text-3xl font-bold leading-none text-sys-yellow/35 sm:text-4xl">
                  {f.n}
                </span>
              </div>
              <h3 className="text-lg font-bold text-zinc-950 sm:text-xl">{f.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-zinc-500 sm:text-[15px]">
                {f.body}
              </p>
            </article>
          ))}
        </div>

        {/* Banner inferior */}
        <div className="relative mt-14 overflow-hidden rounded-2xl bg-zinc-900 sm:mt-16 lg:mt-20">
          <Image
            src={bannerImg}
            alt=""
            fill
            className="object-cover opacity-55"
            sizes="(max-width: 1024px) 100vw, 1200px"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-zinc-950/88 via-zinc-900/72 to-zinc-800/65"
            aria-hidden
          />
          <div className="relative z-10 px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
              <div className="flex max-w-xl gap-4 sm:gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sys-yellow text-zinc-950 shadow-lg sm:h-16 sm:w-16">
                  <PhoneIcon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <div>
                  <p className="text-lg font-bold leading-snug text-white sm:text-xl">
                    {t.bannerTitle}
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/85 sm:text-[15px]">
                    {t.bannerSubtitle}
                  </p>
                </div>
              </div>
              <Link
                href={t.contactHref}
                className="inline-flex shrink-0 items-center gap-2 self-start rounded-[10px] bg-sys-yellow px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-zinc-950 shadow-md transition hover:bg-sys-yellow-bright lg:self-center"
              >
                {t.bannerCta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-8 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-6 sm:pt-10">
              {t.bannerBullets.map((b) => (
                <div key={b.title} className="flex items-start gap-2.5">
                  <CheckMini className="mt-0.5 h-4 w-4 shrink-0 text-sys-yellow" />
                  <p className="text-[13px] leading-snug text-white sm:text-sm">
                    <span className="font-semibold">{b.title}</span>
                    <span className="text-white/70"> / </span>
                    <span className="text-white/85">{b.sub}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
