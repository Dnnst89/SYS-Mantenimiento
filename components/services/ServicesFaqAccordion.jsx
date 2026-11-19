"use client";

import Link from "next/link";
import { useId, useState } from "react";

import { StrokeIcon } from "@/components/icons/StrokeIcon";
import { servicesFaqCopy } from "@/lib/servicesPageContent";

/** @param {{ open: boolean }} props */
function FaqToggleIcon({ open }) {
  return (
    <span
      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 transition-[background-color,border-color,color,transform] duration-200 ${
        open ?
          "border-sys-yellow bg-sys-black text-sys-yellow"
        : "border-sys-black bg-sys-yellow text-sys-black"
      }`}
      aria-hidden
    >
      <StrokeIcon
        name="chevronDown"
        className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      />
    </span>
  );
}

/** @param {{ locale: 'es' | 'en' }} props */
export default function ServicesFaqAccordion({ locale }) {
  const t = servicesFaqCopy[locale];
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState(null);
  const contactHref = locale === "en" ? "/en/contact" : "/contacto";

  return (
    <section className="w-full" aria-labelledby={`${baseId}-faq-title`}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sys-yellow sm:text-xs">
        {t.eyebrow}
      </p>
      <h2
        id={`${baseId}-faq-title`}
        className="mt-3 text-2xl font-semibold tracking-tight text-sys-black sm:text-3xl"
      >
        {t.title}
      </h2>

      <ul className="mt-8 space-y-3">
        {t.items.map((item, i) => {
          const open = openIndex === i;
          const panelId = `${baseId}-panel-${i}`;
          const btnId = `${baseId}-btn-${i}`;
          return (
            <li key={item.q}>
              <div className="overflow-hidden rounded-xl border border-zinc-200/90 bg-white shadow-sm">
                <button
                  id={btnId}
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition hover:bg-zinc-50/80 sm:px-5 sm:py-4"
                  onClick={() => setOpenIndex(open ? null : i)}
                >
                  <span className="text-[15px] font-medium leading-snug text-sys-black sm:text-base">
                    {item.q}
                  </span>
                  <FaqToggleIcon open={open} />
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={`grid transition-[grid-template-rows] duration-200 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="border-t border-zinc-100 px-4 pb-4 pt-3 text-[14px] leading-relaxed text-zinc-600 sm:px-5 sm:pb-5 sm:pt-3.5">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <Link
        href={contactHref}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sys-black underline-offset-4 transition hover:text-sys-yellow hover:underline"
      >
        {t.seeAll}
        <span aria-hidden className="text-base">
          →
        </span>
      </Link>
    </section>
  );
}
