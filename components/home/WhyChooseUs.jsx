import Image from "next/image";
import Link from "next/link";

import { StrokeIcon } from "@/components/icons/StrokeIcon";
import { getWhyChooseUsCopy } from "@/lib/whyChooseUsContent";

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
                  <StrokeIcon
                    name="arrowRight"
                    className="h-4 w-4 -rotate-45 sm:h-[18px] sm:w-[18px]"
                  />
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
                <StrokeIcon name="arrowRight" className="h-3.5 w-3.5" />
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
                  <StrokeIcon
                    name={s.icon}
                    className="h-6 w-6 sm:h-7 sm:w-7"
                  />
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
                  <StrokeIcon
                    name={f.icon}
                    className="h-5 w-5 sm:h-6 sm:w-6"
                  />
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
                  <StrokeIcon name="phone" className="h-6 w-6 sm:h-7 sm:w-7" />
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
                <StrokeIcon name="arrowRight" className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-8 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-6 sm:pt-10">
              {t.bannerBullets.map((b) => (
                <div key={b.title} className="flex items-start gap-2.5">
                  <StrokeIcon
                    name="checkMini"
                    className="mt-0.5 h-4 w-4 shrink-0 text-sys-yellow"
                  />
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
