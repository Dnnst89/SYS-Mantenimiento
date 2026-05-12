"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

function Chevron({ dir, className }) {
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
      {dir === "left" ?
        <path d="m15 18-6-6 6-6" />
      : <path d="m9 18 6-6-6-6" />}
    </svg>
  );
}

function RowIcon({ name, className }) {
  const stroke = "currentColor";
  const sw = 1.5;
  switch (name) {
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
    case "calendar":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <rect x="3" y="4" width="18" height="18" rx="2" stroke={stroke} strokeWidth={sw} />
          <path d="M16 2v4M8 2v4M3 10h18" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
        </svg>
      );
    case "briefcase":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M10 8V6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinecap="round"
          />
          <rect x="2" y="8" width="20" height="12" rx="2" stroke={stroke} strokeWidth={sw} />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <circle cx="12" cy="8" r="3.5" stroke={stroke} strokeWidth={sw} />
          <path
            d="M5 20v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

/**
 * @param {{
 *   locale: 'es' | 'en';
 *   showcase: {
 *     filters: { id: string; label: string }[];
 *     sortLabel: string;
 *     sortOptions: { id: string; label: string }[];
 *     projects: {
 *       id: string;
 *       tags: string[];
 *       kicker: string;
 *       title: string;
 *       client: string;
 *       location: string;
 *       year: string;
 *       services: string;
 *       images: { src: string; alt: string }[];
 *     }[];
 *     detailLabels: { client: string; location: string; year: string; services: string };
 *     galleryMore: string;
 *   };
 * }} props
 */
export default function SectorProjectsShowcase({ locale, showcase }) {
  const [filterId, setFilterId] = useState("todos");
  const [sortId, setSortId] = useState(showcase.sortOptions[0]?.id ?? "recent");
  const [imgIndex, setImgIndex] = useState(0);

  const ariaPrev = locale === "en" ? "Previous image" : "Imagen anterior";
  const ariaNext = locale === "en" ? "Next image" : "Imagen siguiente";

  const project = useMemo(() => {
    const list = showcase.projects;
    if (filterId === "todos") return list[0] ?? null;
    const hit = list.find((p) => p.tags.includes(filterId));
    return hit ?? list[0] ?? null;
  }, [filterId, showcase.projects]);

  useEffect(() => {
    setImgIndex(0);
  }, [project?.id]);

  const images = project?.images ?? [];
  const safeIndex = Math.min(imgIndex, Math.max(0, images.length - 1));
  const main = images[safeIndex];

  if (!project || !main) return null;

  const n = images.length;
  const prev = () => setImgIndex((i) => (i - 1 + n) % n);
  const next = () => setImgIndex((i) => (i + 1) % n);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:max-w-[1200px]">
      <div className="flex flex-col gap-4 border-b border-zinc-200 pb-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div className="flex flex-wrap gap-2">
          {showcase.filters.map((f) => {
            const active = f.id === filterId;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => {
                  setFilterId(f.id);
                  setImgIndex(0);
                }}
                className={
                  active ?
                    "rounded-full bg-sys-yellow px-4 py-2 text-xs font-bold uppercase tracking-wide text-zinc-950 shadow-sm sm:text-[13px]"
                  : "rounded-full border border-zinc-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-700 transition hover:border-zinc-400 sm:text-[13px]"
                }
              >
                {f.label}
              </button>
            );
          })}
        </div>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <span className="text-xs font-medium text-zinc-500 sm:text-sm">
            {showcase.sortLabel}
          </span>
          <select
            value={sortId}
            onChange={(e) => setSortId(e.target.value)}
            className="rounded-lg border border-zinc-300 bg-white py-2 pl-3 pr-8 text-xs font-medium text-zinc-900 shadow-sm focus:border-sys-yellow focus:outline-none focus:ring-1 focus:ring-sys-yellow sm:text-sm"
            aria-label={showcase.sortLabel}
          >
            {showcase.sortOptions.map((o) => (
              <option key={o.id} value={o.id}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <article className="mt-8 overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)] sm:mt-10">
        <div className="grid gap-0 lg:grid-cols-[1.15fr_1fr]">
          <div className="relative border-b border-zinc-100 bg-zinc-100 p-3 sm:p-4 lg:border-b-0 lg:border-r">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-zinc-200">
              <Image
                src={main.src}
                alt={main.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
              {n > 1 ?
                <>
                  <button
                    type="button"
                    onClick={prev}
                    className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition hover:bg-black/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sys-yellow sm:left-3"
                    aria-label={ariaPrev}
                  >
                    <Chevron dir="left" className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition hover:bg-black/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sys-yellow sm:right-3"
                    aria-label={ariaNext}
                  >
                    <Chevron dir="right" className="h-5 w-5" />
                  </button>
                </>
              : null}
            </div>
            {n > 1 ?
              <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                {images.map((im, i) => (
                  <button
                    key={`${project.id}-thumb-${i}`}
                    type="button"
                    onClick={() => setImgIndex(i)}
                    className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg ring-2 transition sm:h-16 sm:w-24 ${
                      i === safeIndex ? "ring-sys-yellow" : "ring-transparent hover:ring-zinc-300"
                    }`}
                  >
                    <Image
                      src={im.src}
                      alt={im.alt}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </button>
                ))}
              </div>
            : null}
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-sys-yellow">
              {project.kicker}
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
              {project.title}
            </h2>
            <dl className="mt-6 space-y-5 text-sm sm:text-[15px]">
              <div className="grid grid-cols-1 gap-1 sm:grid-cols-[8.5rem_1fr] sm:gap-x-4">
                <dt className="flex items-start gap-2 text-zinc-500">
                  <RowIcon name="user" className="mt-0.5 h-4 w-4 shrink-0 text-zinc-400" />
                  <span>{showcase.detailLabels.client}</span>
                </dt>
                <dd className="font-medium text-zinc-900 sm:pt-0">{project.client}</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 sm:grid-cols-[8.5rem_1fr] sm:gap-x-4">
                <dt className="flex items-start gap-2 text-zinc-500">
                  <RowIcon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-zinc-400" />
                  <span>{showcase.detailLabels.location}</span>
                </dt>
                <dd className="font-medium text-zinc-900">{project.location}</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 sm:grid-cols-[8.5rem_1fr] sm:gap-x-4">
                <dt className="flex items-start gap-2 text-zinc-500">
                  <RowIcon name="calendar" className="mt-0.5 h-4 w-4 shrink-0 text-zinc-400" />
                  <span>{showcase.detailLabels.year}</span>
                </dt>
                <dd className="font-medium text-zinc-900">{project.year}</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 sm:grid-cols-[8.5rem_1fr] sm:gap-x-4">
                <dt className="flex items-start gap-2 text-zinc-500">
                  <RowIcon name="briefcase" className="mt-0.5 h-4 w-4 shrink-0 text-zinc-400" />
                  <span className="leading-snug">{showcase.detailLabels.services}</span>
                </dt>
                <dd className="font-medium leading-relaxed text-zinc-900">{project.services}</dd>
              </div>
            </dl>
            {n > 1 ?
              <button
                type="button"
                onClick={next}
                className="mt-8 inline-flex w-fit items-center gap-1 text-sm font-bold text-sys-yellow transition hover:text-sys-yellow-bright"
              >
                {showcase.galleryMore}
                <span aria-hidden className="inline-block translate-y-px">
                  →
                </span>
              </button>
            : null}
          </div>
        </div>
      </article>
    </div>
  );
}
