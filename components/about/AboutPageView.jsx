import Image from "next/image";
import Link from "next/link";

import HomeHero from "@/components/home/HomeHero";
import { aboutHeroCopy, aboutPageCopy } from "@/lib/aboutPageContent";

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

function IconPin({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden stroke="currentColor" strokeWidth="1.6">
      <path d="M12 21s7-4.35 7-10a7 7 0 1 0-14 0c0 5.65 7 10 7 10Z" strokeLinejoin="round" />
      <circle cx="12" cy="11" r="2.2" />
    </svg>
  );
}

function IconLayers({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden stroke="currentColor" strokeWidth="1.6">
      <path d="m12.83 2.18 8 3.64a1 1 0 0 1 0 1.82l-8 3.64a1 1 0 0 1-.83 0l-8-3.64a1 1 0 0 1 0-1.82l8-3.64a1 1 0 0 1 .83 0Z" strokeLinejoin="round" />
      <path d="M4.1 10.7 12 14l7.9-3.3M4.1 15.3 12 18.6l7.9-3.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconPath({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden stroke="currentColor" strokeWidth="1.6">
      <path d="M3 3v18h18" strokeLinecap="round" />
      <path d="m7 14 4-4 4 4 6-8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconMission({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden stroke="currentColor" strokeWidth="1.65">
      <path
        d="M12 22s8-4.5 8-11.8V5.2L12 2 4 5.2v4.9C4 17.5 12 22 12 22Z"
        strokeLinejoin="round"
      />
      <path d="m9 12 2 2 4-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconVision({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden stroke="currentColor" strokeWidth="1.65">
      <circle cx="12" cy="12" r="3.2" />
      <path
        d="M3 12h2.5M18.5 12H21M12 3v2.5M12 18.5V21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M5.6 18.4l1.8-1.8M16.6 7.4l1.8-1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconValueSafety({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4C7.6 4 4 7.2 4 11v1h16v-1c0-3.8-3.6-7-8-7Z" />
      <path d="M4 12v1c0 4 3.6 7 8 7s8-3 8-7v-1" />
      <path d="M9 20h6" />
    </svg>
  );
}

function IconValueTransparency({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </svg>
  );
}

function IconValueExcellence({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden stroke="currentColor" strokeWidth="1.65" strokeLinejoin="round">
      <path d="m12 2 2.2 6.8h7.1l-5.7 4.4 2.2 6.8-5.8-4.2-5.8 4.2 2.2-6.8L4.7 8.8h7.1L12 2Z" strokeLinecap="round" />
    </svg>
  );
}

function IconValueCommitment({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3" />
      <circle cx="16" cy="9" r="2.5" />
      <path d="M2.5 20.5c0-3 2.8-5.5 6.5-5.5.7 0 1.3.05 1.9.15" />
      <path d="M14.5 20.5c0-2.5 2.2-4 5.5-4 .5 0 1 .05 1.5.12" />
    </svg>
  );
}

const HIGHLIGHT_ICONS = [IconPin, IconLayers, IconPath];
const VALUE_ICONS = [IconValueSafety, IconValueTransparency, IconValueExcellence, IconValueCommitment];

/** @param {{ locale: 'es' | 'en' }} props */
export default function AboutPageView({ locale }) {
  const t = aboutPageCopy[locale];
  const hero = aboutHeroCopy[locale];

  return (
    <div className="flex flex-1 flex-col">
      <HomeHero locale={locale} copy={hero} headingId="about-hero-heading" />

      <section
        className="relative overflow-hidden border-b border-zinc-200/80 py-16 sm:py-20 lg:py-24"
        aria-labelledby="about-highlights-heading"
      >
        {/* Fondo: malla suave + rejilla + viñeta */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-100/90 via-zinc-50 to-white"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(24,24,27,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,24,27,0.04)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_0%,#000_45%,transparent_100%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-1/4 top-0 h-[420px] w-[70%] rounded-full bg-sys-yellow/[0.07] blur-3xl sm:h-[480px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-1/4 bottom-0 h-[320px] w-[55%] rounded-full bg-zinc-900/[0.04] blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:max-w-[1200px]">
          <div className="flex max-w-3xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-8 lg:max-w-none">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-sys-yellow/40 bg-gradient-to-r from-sys-yellow/15 to-sys-yellow/5 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-800 shadow-sm shadow-sys-yellow/10 sm:px-4 sm:text-[11px]">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sys-yellow shadow-[0_0_10px_rgba(232,214,0,0.7)]" />
                {t.highlightsEyebrow}
              </span>
              <h2
                id="about-highlights-heading"
                className="mt-4 max-w-xl text-2xl font-semibold tracking-tight text-zinc-900 sm:mt-5 sm:max-w-2xl sm:text-3xl lg:text-[2.125rem] lg:leading-[1.15]"
                style={{
                  fontFamily:
                    "var(--font-display-hero), var(--font-geist-sans), system-ui, sans-serif",
                }}
              >
                {t.highlightsTitle}
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-zinc-500 sm:pb-1 sm:text-[15px] lg:max-w-xs lg:text-right lg:text-[15px]">
              {t.highlightsIntro}
            </p>
          </div>

          <ul className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:mt-16 lg:grid-cols-3 lg:gap-6">
            {t.highlights.map((item, i) => {
              const Icon = HIGHLIGHT_ICONS[i] ?? IconLayers;
              const step = String(i + 1).padStart(2, "0");
              const isFeatured = i === 1;

              return (
                <li
                  key={item.title}
                  className={[
                    "group relative flex min-h-[280px] flex-col overflow-hidden rounded-[1.35rem] border p-6 transition duration-300 sm:min-h-[300px] sm:p-7",
                    isFeatured ?
                      "border-zinc-800/90 bg-zinc-950 text-zinc-100 shadow-[0_24px_50px_-28px_rgba(0,0,0,0.55)] ring-1 ring-white/10 sm:min-h-[320px] lg:-translate-y-1 lg:shadow-[0_28px_60px_-24px_rgba(0,0,0,0.5)]"
                    : "border-zinc-200/90 bg-white/80 shadow-[0_2px_24px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm ring-1 ring-zinc-100/80 hover:border-sys-yellow/30 hover:shadow-[0_12px_40px_-20px_rgba(0,0,0,0.12)]",
                  ].join(" ")}
                >
                  {/* Barra superior / acento */}
                  <div
                    className={[
                      "pointer-events-none absolute inset-x-0 top-0 h-[3px]",
                      isFeatured ?
                        "bg-gradient-to-r from-sys-yellow via-sys-yellow-bright to-sys-yellow/50"
                      : "bg-gradient-to-r from-sys-yellow/90 via-sys-yellow/40 to-transparent opacity-90",
                    ].join(" ")}
                    aria-hidden
                  />
                  {!isFeatured && (
                    <div
                      className="pointer-events-none absolute -right-8 -top-12 h-36 w-36 rounded-full bg-gradient-to-br from-sys-yellow/18 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden
                    />
                  )}
                  {isFeatured && (
                    <div
                      className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-sys-yellow/10 blur-2xl"
                      aria-hidden
                    />
                  )}

                  <div className="relative flex items-start justify-between gap-4">
                    <div
                      className={[
                        "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-inner sm:h-16 sm:w-16",
                        isFeatured ?
                          "bg-gradient-to-br from-sys-yellow/25 to-zinc-800/80 ring-1 ring-sys-yellow/35"
                        : "bg-gradient-to-br from-sys-yellow/20 via-white to-zinc-100 ring-1 ring-sys-yellow/25",
                      ].join(" ")}
                    >
                      <Icon
                        className={[
                          "h-7 w-7 sm:h-8 sm:w-8",
                          isFeatured ? "text-sys-yellow" : "text-zinc-800",
                        ].join(" ")}
                      />
                    </div>
                    <span
                      className={[
                        "font-mono text-[2.75rem] font-bold leading-none tabular-nums sm:text-[3.25rem]",
                        isFeatured ? "text-white/[0.07]" : "text-zinc-200",
                      ].join(" ")}
                      aria-hidden
                    >
                      {step}
                    </span>
                  </div>

                  <h3
                    className={[
                      "relative mt-6 text-lg font-semibold tracking-tight sm:text-xl",
                      isFeatured ? "text-white" : "text-zinc-900",
                    ].join(" ")}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={[
                      "relative mt-3 flex-1 text-[14px] leading-relaxed sm:text-[15px]",
                      isFeatured ? "text-zinc-400" : "text-zinc-600",
                    ].join(" ")}
                  >
                    {item.body}
                  </p>

                  <div
                    className={[
                      "relative mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em]",
                      isFeatured ? "text-sys-yellow/90" : "text-zinc-400 group-hover:text-sys-yellow",
                    ].join(" ")}
                  >
                    <span className="h-px w-8 bg-current opacity-60 transition-all group-hover:w-10 group-hover:opacity-100" />
                    {t.highlightsFooterLabel}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16 lg:py-20" aria-labelledby="about-story-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
            <div className="lg:col-span-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sys-yellow sm:text-xs">
                {t.storyEyebrow}
              </p>
              <h2
                id="about-story-heading"
                className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl lg:text-[2rem] lg:leading-snug"
                style={{
                  fontFamily:
                    "var(--font-display-hero), var(--font-geist-sans), system-ui, sans-serif",
                }}
              >
                {t.storyTitle}
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-zinc-600 sm:text-base">{t.storyP1}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-zinc-600 sm:text-base">{t.storyP2}</p>
            </div>
            <aside className="lg:col-span-5">
              <div className="rounded-2xl border border-zinc-200/90 bg-zinc-50/90 p-6 sm:p-8 lg:sticky lg:top-28">
                <p className="text-[15px] font-medium leading-relaxed text-zinc-800">“{t.storyQuote}”</p>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-sys-yellow/80 via-sys-yellow/30 to-transparent" aria-hidden />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  {t.storyQuoteAttribution}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <main className="flex-1 bg-surface-muted py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:max-w-[1200px]">
          <section
            className="relative"
            aria-labelledby="about-mission-heading about-vision-heading"
          >
            <div
              className="pointer-events-none absolute -inset-x-6 -inset-y-4 rounded-[2rem] bg-gradient-to-br from-sys-yellow/[0.06] via-transparent to-zinc-900/[0.04] blur-xl sm:-inset-x-10"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-zinc-200/90 bg-white shadow-[0_24px_60px_-32px_rgba(0,0,0,0.18)] ring-1 ring-zinc-950/[0.04]">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-sys-yellow via-sys-yellow-bright to-sys-yellow/40"
                aria-hidden
              />
              <div className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-sys-yellow/[0.06] blur-3xl" aria-hidden />
              <div className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-zinc-900/[0.04] blur-3xl" aria-hidden />

              <div className="relative grid lg:grid-cols-2 lg:items-stretch">
                <article className="relative border-b border-zinc-200/80 bg-gradient-to-br from-white via-zinc-50/80 to-zinc-100/40 p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-11">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sys-yellow/25 to-white shadow-inner ring-1 ring-sys-yellow/30 sm:h-16 sm:w-16">
                        <IconMission className="h-7 w-7 text-zinc-900 sm:h-8 sm:w-8" />
                      </div>
                      <div>
                        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                          01
                        </p>
                        <h3
                          id="about-mission-heading"
                          className="mt-1 text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl"
                          style={{
                            fontFamily:
                              "var(--font-display-hero), var(--font-geist-sans), system-ui, sans-serif",
                          }}
                        >
                          {t.missionTitle}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 h-px w-full max-w-md bg-gradient-to-r from-sys-yellow/70 via-sys-yellow/25 to-transparent" aria-hidden />
                  <p className="mt-8 text-pretty text-[15px] leading-[1.75] text-zinc-600 sm:text-[1.0625rem] sm:leading-[1.78]">
                    {t.missionBody}
                  </p>
                </article>

                <article className="relative overflow-hidden bg-zinc-950 p-8 text-zinc-100 sm:p-10 lg:p-11">
                  <div
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px] opacity-60 [mask-image:radial-gradient(ellipse_90%_80%_at_70%_20%,#000_20%,transparent_70%)]"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sys-yellow/50 to-transparent"
                    aria-hidden
                  />
                  <div className="relative flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sys-yellow/30 to-zinc-800 ring-1 ring-sys-yellow/35 sm:h-16 sm:w-16">
                        <IconVision className="h-7 w-7 text-sys-yellow sm:h-8 sm:w-8" />
                      </div>
                      <div>
                        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                          02
                        </p>
                        <h3
                          id="about-vision-heading"
                          className="mt-1 text-xl font-semibold tracking-tight text-white sm:text-2xl"
                          style={{
                            fontFamily:
                              "var(--font-display-hero), var(--font-geist-sans), system-ui, sans-serif",
                          }}
                        >
                          {t.visionTitle}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="relative mt-8 h-px w-full max-w-md bg-gradient-to-r from-sys-yellow/80 via-sys-yellow/30 to-transparent" aria-hidden />
                  <p className="relative mt-8 text-pretty text-[15px] leading-[1.75] text-zinc-300 sm:text-[1.0625rem] sm:leading-[1.78]">
                    {t.visionBody}
                  </p>
                  <div
                    className="pointer-events-none absolute -bottom-16 right-0 h-40 w-40 rounded-full bg-sys-yellow/10 blur-3xl"
                    aria-hidden
                  />
                </article>

                <div
                  className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-sys-yellow/40 bg-gradient-to-b from-zinc-950 to-zinc-900 shadow-[0_0_0_6px_rgba(244,244,245,1),0_12px_40px_-8px_rgba(0,0,0,0.45)] lg:flex"
                  aria-hidden
                >
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-sys-yellow">SYS</span>
                </div>
              </div>
            </div>
          </section>

          <section
            className="relative mt-14 sm:mt-16 lg:mt-20"
            aria-labelledby="about-values-heading"
          >
            <div
              className="pointer-events-none absolute -inset-x-4 -top-6 h-32 rounded-full bg-sys-yellow/[0.06] blur-3xl sm:-inset-x-8"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-zinc-200/90 bg-gradient-to-br from-white via-white to-zinc-50/90 p-7 shadow-[0_22px_55px_-34px_rgba(0,0,0,0.14)] ring-1 ring-zinc-950/[0.04] sm:p-9 lg:p-11">
              <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(24,24,27,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,24,27,0.03)_1px,transparent_1px)] bg-[size:28px_28px] opacity-70 [mask-image:radial-gradient(ellipse_85%_75%_at_50%_-10%,#000_35%,transparent_65%)]"
                aria-hidden
              />
              <div className="pointer-events-none absolute -right-24 top-1/2 h-64 w-64 -translate-y-1/3 rounded-full bg-sys-yellow/[0.07] blur-3xl" aria-hidden />

              <div className="relative flex max-w-3xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-8 lg:max-w-none">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-sys-yellow/40 bg-gradient-to-r from-sys-yellow/14 to-transparent px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-800 shadow-sm shadow-sys-yellow/8 sm:px-4 sm:text-[11px]">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sys-yellow shadow-[0_0_10px_rgba(232,214,0,0.65)]" />
                    {t.valuesEyebrow}
                  </span>
                  <h2
                    id="about-values-heading"
                    className="mt-4 text-2xl font-semibold tracking-tight text-zinc-900 sm:mt-5 sm:text-3xl lg:text-[2.125rem] lg:leading-tight"
                    style={{
                      fontFamily:
                        "var(--font-display-hero), var(--font-geist-sans), system-ui, sans-serif",
                    }}
                  >
                    {t.valuesTitle}
                  </h2>
                </div>
                <p className="max-w-md text-sm leading-relaxed text-zinc-500 sm:text-[15px] lg:max-w-sm lg:text-right">
                  {t.valuesIntro}
                </p>
              </div>

              <ul className="relative mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-4 lg:gap-5">
                {t.values.map((v, idx) => {
                  const Icon = VALUE_ICONS[idx] ?? IconValueSafety;
                  const step = String(idx + 1).padStart(2, "0");
                  const isSpotlight = idx === 2;

                  return (
                    <li
                      key={v.title}
                      className={[
                        "group relative flex min-h-0 flex-col overflow-hidden rounded-[1.25rem] border transition duration-300 sm:min-h-[380px]",
                        isSpotlight ?
                          "border-zinc-800/90 bg-zinc-950 text-zinc-100 shadow-[0_20px_45px_-24px_rgba(0,0,0,0.5)] ring-1 ring-white/10 lg:-translate-y-1"
                        : "border-zinc-200/90 bg-white/90 shadow-sm ring-1 ring-zinc-100/90 backdrop-blur-sm hover:border-sys-yellow/35 hover:shadow-[0_14px_36px_-22px_rgba(0,0,0,0.12)]",
                      ].join(" ")}
                    >
                      <div
                        className={[
                          "pointer-events-none relative z-[1] h-[3px] w-full shrink-0",
                          isSpotlight ?
                            "bg-gradient-to-r from-sys-yellow via-sys-yellow-bright to-sys-yellow/40"
                          : "bg-gradient-to-r from-sys-yellow/90 via-sys-yellow/35 to-transparent",
                        ].join(" ")}
                        aria-hidden
                      />

                      <div className="relative h-36 w-full shrink-0 sm:h-40">
                        <Image
                          src={v.imageSrc}
                          alt={v.imageAlt}
                          fill
                          className="object-cover transition duration-500 group-hover:scale-[1.03]"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 22vw"
                        />
                        <div
                          className={[
                            "pointer-events-none absolute inset-0 bg-gradient-to-t",
                            isSpotlight ?
                              "from-zinc-950 via-zinc-950/55 to-zinc-950/10"
                            : "from-zinc-900/50 via-zinc-900/15 to-transparent",
                          ].join(" ")}
                          aria-hidden
                        />
                        <span
                          className={[
                            "pointer-events-none absolute right-3 top-3 rounded-md px-2 py-1 font-mono text-[11px] font-bold tabular-nums backdrop-blur-sm sm:right-3.5 sm:top-3.5 sm:text-xs",
                            isSpotlight ?
                              "bg-black/50 text-white/95 ring-1 ring-white/15"
                            : "bg-white/90 text-zinc-800 ring-1 ring-zinc-200/90",
                          ].join(" ")}
                          aria-hidden
                        >
                          {step}
                        </span>
                      </div>

                      <div className="relative flex flex-1 flex-col px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5">
                        {!isSpotlight && (
                          <div
                            className="pointer-events-none absolute -right-8 bottom-0 h-32 w-32 rounded-full bg-sys-yellow/[0.1] opacity-90 transition-opacity group-hover:opacity-100"
                            aria-hidden
                          />
                        )}
                        {isSpotlight && (
                          <div
                            className="pointer-events-none absolute -right-10 bottom-0 h-36 w-36 rounded-full bg-sys-yellow/10 blur-2xl"
                            aria-hidden
                          />
                        )}

                        <div className="relative flex items-start justify-between gap-3">
                          <div
                            className={[
                              "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl shadow-md sm:h-14 sm:w-14",
                              isSpotlight ?
                                "bg-gradient-to-br from-sys-yellow/30 to-zinc-800 ring-1 ring-sys-yellow/40"
                              : "bg-gradient-to-br from-sys-yellow/25 via-white to-zinc-50 ring-1 ring-sys-yellow/30",
                            ].join(" ")}
                          >
                            <Icon
                              className={[
                                "h-6 w-6 sm:h-7 sm:w-7",
                                isSpotlight ? "text-sys-yellow" : "text-zinc-800",
                              ].join(" ")}
                            />
                          </div>
                        </div>

                        <h3
                          className={[
                            "relative mt-4 text-base font-semibold tracking-tight sm:mt-5 sm:text-lg",
                            isSpotlight ? "text-white" : "text-zinc-900",
                          ].join(" ")}
                        >
                          {v.title}
                        </h3>
                        <p
                          className={[
                            "relative mt-2 flex-1 text-[13px] leading-relaxed sm:text-sm",
                            isSpotlight ? "text-zinc-400" : "text-zinc-600",
                          ].join(" ")}
                        >
                          {v.body}
                        </p>

                        <div
                          className={[
                            "relative mt-5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] sm:text-[11px]",
                            isSpotlight ? "text-sys-yellow/90" : "text-zinc-400 group-hover:text-sys-yellow",
                          ].join(" ")}
                        >
                          <span className="h-px w-6 bg-current opacity-60 transition-all group-hover:w-8 group-hover:opacity-100" />
                          {t.valuesCardFooter}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>

          <section
            className="mt-14 overflow-hidden rounded-[1.5rem] bg-sys-black px-6 py-10 text-white shadow-xl sm:mt-16 sm:px-10 sm:py-12 lg:mt-20 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-12 lg:py-14"
            aria-labelledby="about-cta-heading"
          >
            <div className="max-w-xl lg:max-w-[28rem]">
              <h2
                id="about-cta-heading"
                className="text-xl font-semibold tracking-tight sm:text-2xl"
                style={{
                  fontFamily:
                    "var(--font-display-hero), var(--font-geist-sans), system-ui, sans-serif",
                }}
              >
                {t.ctaTitle}
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-white/80">{t.ctaBody}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 lg:mt-0 lg:shrink-0">
              <Link
                href={t.ctaPrimaryHref}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-sys-yellow px-6 text-sm font-semibold leading-none text-zinc-950 shadow-sm transition hover:bg-sys-yellow-bright focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sys-yellow-bright sm:h-12"
              >
                {t.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={t.ctaSecondaryHref}
                className="inline-flex h-11 items-center justify-center rounded-full border-2 border-white/85 bg-transparent px-6 text-sm font-semibold leading-none text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:h-12"
              >
                {t.ctaSecondary}
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
