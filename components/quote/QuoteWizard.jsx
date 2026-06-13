"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { getHomeHrefForPathname } from "@/lib/locale";
import {
  buildQuoteWhatsAppMessage,
  quoteWizardCopy,
  whatsappHrefWithText,
} from "@/lib/quoteWizardContent";

function HomeIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z" />
    </svg>
  );
}

function ChevronLeftIcon({ className }) {
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
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

const displayFont =
  "var(--font-display-hero), var(--font-geist-sans), system-ui, sans-serif";

/**
 * @param {{ locale: 'es' | 'en' }} props
 */
export default function QuoteWizard({ locale }) {
  const c = quoteWizardCopy[locale];
  const homeHref = getHomeHrefForPathname(locale === "en" ? "/en/cotizar" : "/cotizar");

  const [step, setStep] = useState(0);
  const [need, setNeed] = useState("");
  const [scope, setScope] = useState("");
  const [timeline, setTimeline] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");

  const totalFormSteps = c.steps.length;
  const isReview = step >= totalFormSteps;
  const progress = isReview ? 1 : (step + 1) / totalFormSteps;

  const values = useMemo(
    () => ({ need, scope, timeline, location, budget, name, phone, company, notes }),
    [need, scope, timeline, location, budget, name, phone, company, notes],
  );

  const waHref = useMemo(() => {
    if (!isReview) return "";
    return whatsappHrefWithText(buildQuoteWhatsAppMessage(locale, values));
  }, [isReview, locale, values]);

  function validateCurrent() {
    const s = c.steps[step];
    if (!s) return true;
    switch (s.key) {
      case "need":
        return need.trim().length >= 8;
      case "scope":
        return Boolean(scope);
      case "timeline":
        return Boolean(timeline);
      case "location":
        return location.trim().length >= 3;
      case "budget":
        return Boolean(budget);
      case "contact": {
        const digits = phone.replace(/\D/g, "");
        return name.trim().length >= 2 && digits.length >= 8;
      }
      default:
        return true;
    }
  }

  function errorMessageForCurrent() {
    const s = c.steps[step];
    if (!s) return "";
    switch (s.key) {
      case "need":
        return c.errors.need;
      case "scope":
        return c.errors.scope;
      case "timeline":
        return c.errors.timeline;
      case "location":
        return c.errors.location;
      case "budget":
        return c.errors.budget;
      case "contact":
        if (name.trim().length < 2) return c.errors.name;
        if (phone.replace(/\D/g, "").length < 8) return c.errors.phone;
        return "";
      default:
        return "";
    }
  }

  function goNext() {
    if (isReview) return;
    if (!validateCurrent()) {
      setError(errorMessageForCurrent());
      return;
    }
    setError("");
    setStep((x) => x + 1);
  }

  function goBack() {
    setError("");
    setStep((x) => Math.max(0, x - 1));
  }

  const currentStepMeta = c.steps[step];

  const srStep =
    isReview ?
      c.reviewStepLabel
    : c.stepLabel.replace("{n}", String(step + 1)).replace("{total}", String(totalFormSteps));

  const inputClass =
    "w-full rounded-2xl border border-zinc-200/90 bg-zinc-50/90 px-4 py-3.5 text-[15px] text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-sys-yellow/70 focus:bg-white focus:ring-2 focus:ring-sys-yellow/20";

  const selectClass = `${inputClass} cursor-pointer pr-10`;

  function stepBadgeClass(i) {
    const done = isReview || i < step;
    const current = !isReview && i === step;
    if (done) {
       /*Linea mejorada con relative z-10 y cambiando los colores*/
      return "relative z-10 border-sys-yellow bg-sys-yellow text-zinc-950 shadow-[0_0_0_1px_rgba(0,0,0,0.06)]";
    }
    if (current) {
     
        /*Linea mejorada con relative z-10 y cambiando los colores*/
      return "relative z-10 border-sys-yellow bg-zinc-950 text-sys-yellow shadow-[0_0_0_4px_rgba(232,214,0,0.22)]";

    }
      /*Linea mejorada con relative z-10 y cambiando los colores*/
    return "relative z-10 border-zinc-700 bg-zinc-950 text-zinc-500";

  }

  function stepTitleClass(i) {
    const done = isReview || i < step;
    const current = !isReview && i === step;
    if (current) return "text-sys-yellow font-semibold"; /*Linea mejorada con cambio de color*/
    if (done) return "text-zinc-400";
    return "text-zinc-600";
  }

  return (
    <div className="w-full">
      <div className="lg:grid lg:grid-cols-[minmax(0,38%)_minmax(0,1fr)] lg:items-start lg:gap-x-10 xl:gap-x-14">
        {/* Columna marca / pasos */}
        <header className="relative pr-14 lg:sticky lg:top-8 lg:max-h-[calc(100vh-5rem)] lg:self-start lg:overflow-y-auto lg:pr-4 lg:pt-1">
          <Link
            href={homeHref}
            className="absolute right-0 top-0 z-10 inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 p-2.5 text-zinc-300 transition hover:border-sys-yellow/40 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sys-yellow lg:relative lg:right-auto lg:top-auto lg:mb-8"
            aria-label={c.backHome}
            title={c.backHome}
          >
            <HomeIcon className="h-5 w-5" />
          </Link>

          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sys-yellow">{c.sideEyebrow}</p>
          <h1
            className="mt-4 max-w-[16ch] text-[clamp(1.65rem,4.2vw,2.65rem)] font-semibold leading-[1.06] tracking-tight sm:max-w-none"
            style={{ fontFamily: displayFont }}
          >
            <span className="text-white">{c.sideHeadWhite}</span>
            <br />
            <span className="text-sys-yellow">{c.sideHeadAccent}</span>
          </h1>
          <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-zinc-400">{c.sideBody}</p>

          <div className="mt-7 flex justify-center gap-2 lg:hidden" aria-hidden>
            {Array.from({ length: totalFormSteps }, (_, i) => {
              const done = isReview || i < step;
              const current = !isReview && i === step;
              return (
                <span
                  key={i}
                  className={[
                    "h-2 rounded-full transition-all duration-300",
                    current ? "w-7 bg-sys-yellow" : done ? "w-2 bg-sys-yellow" : "w-2 bg-zinc-700",
                  ].join(" ")}
                />
              );
            })}
          </div>

          <ol className="mt-10 hidden list-none space-y-5 p-0 lg:block">
            {c.steps.map((st, i) => (
              <li key={st.key} className="flex gap-4">
                <span
                  className={[
                    "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold transition-colors",
                    stepBadgeClass(i),
                  ].join(" ")}
                  aria-hidden
                >
                  {i + 1}
                </span>
                <p
                  className={[
                    "min-w-0 pt-1 text-[13px] leading-snug tracking-tight",
                    stepTitleClass(i),
                  ].join(" ")}
                >
                  {st.title}
                </p>
              </li>
            ))}
          </ol>

          {isReview ?
            <p
              className="mt-8 hidden text-sm font-medium text-sys-yellow lg:block"
              aria-hidden
            >
              {c.reviewStepLabel}
            </p>
          : null}
        </header>

        {/* Panel formulario */}
        <div className="relative -mt-6 sm:-mt-8 lg:mt-0 lg:pt-4">
          <div
            className="relative overflow-hidden rounded-[1.65rem] bg-white text-zinc-900 shadow-[0_36px_100px_-36px_rgba(0,0,0,0.78)] ring-1 ring-white/25 sm:rounded-[2rem] lg:rounded-[2rem] lg:shadow-[0_40px_120px_-40px_rgba(0,0,0,0.85)]"
            style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
          >
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-sys-yellow/[0.07] blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-zinc-200/40 blur-3xl"
              aria-hidden
            />

            <div className="absolute left-0 right-0 top-0 z-20 h-[3px] overflow-hidden rounded-t-[inherit] bg-zinc-100">
              <div
                className="h-full bg-gradient-to-r from-sys-yellow to-sys-yellow-bright transition-[width] duration-500 ease-out"
                style={{ width: `${Math.round(progress * 100)}%` }}
              />
            </div>

            <div role="status" aria-live="polite" className="sr-only">
              {srStep}
            </div>

            <div className="relative z-10 px-5 pb-9 pt-9 sm:px-9 sm:pb-11 sm:pt-11">
              {!isReview && currentStepMeta ?
                <>
                  <h2
                    className="text-[1.35rem] font-semibold leading-snug tracking-tight text-zinc-950 sm:text-2xl sm:leading-tight lg:hidden"
                    style={{ fontFamily: displayFont }}
                  >
                    {currentStepMeta.title}
                  </h2>
                  <p className="mt-2 max-w-prose text-sm leading-relaxed text-zinc-500 lg:hidden">
                    {currentStepMeta.hint}
                  </p>

                  <div className="mt-6 hidden lg:block">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                      {currentStepMeta.title}
                    </p>
                    <p className="mt-2 max-w-lg text-base leading-relaxed text-zinc-600">
                      {currentStepMeta.hint}
                    </p>
                  </div>

                  <div className="mt-7 space-y-4 lg:mt-8">
                    {currentStepMeta.key === "need" ?
                      <textarea
                        value={need}
                        onChange={(e) => setNeed(e.target.value)}
                        rows={5}
                        autoComplete="off"
                        placeholder={currentStepMeta.placeholder}
                        className={`${inputClass} min-h-[7.5rem] resize-y`}
                      />
                    : null}

                    {currentStepMeta.key === "scope" ?
                      <select
                        value={scope}
                        onChange={(e) => setScope(e.target.value)}
                        className={selectClass}
                      >
                        <option value="">{c.scopePlaceholder}</option>
                        {c.scopeOptions.map((o) => (
                          <option key={o.value} value={o.value}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                    : null}

                    {currentStepMeta.key === "timeline" ?
                      <select
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        className={selectClass}
                      >
                        <option value="">{c.timelinePlaceholder}</option>
                        {c.timelineOptions.map((o) => (
                          <option key={o.value} value={o.value}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                    : null}

                    {currentStepMeta.key === "location" ?
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        autoComplete="street-address"
                        placeholder={currentStepMeta.placeholder}
                        className={inputClass}
                      />
                    : null}

                    {currentStepMeta.key === "budget" ?
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className={selectClass}
                      >
                        <option value="">{c.budgetPlaceholder}</option>
                        {c.budgetOptions.map((o) => (
                          <option key={o.value} value={o.value}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                    : null}

                    {currentStepMeta.key === "contact" ?
                      <div className="space-y-5">
                        <div>
                          <label className="mb-2 block text-sm font-medium text-zinc-700">
                            {c.nameLabel}
                          </label>
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            autoComplete="name"
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-medium text-zinc-700">
                            {c.phoneLabel}
                          </label>
                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            autoComplete="tel"
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-medium text-zinc-700">
                            {c.companyLabel}
                          </label>
                          <input
                            type="text"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            autoComplete="organization"
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-medium text-zinc-700">
                            {c.notesLabel}
                          </label>
                          <textarea
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            rows={3}
                            placeholder={c.notesPlaceholder}
                            className={`${inputClass} min-h-[5.5rem] resize-y`}
                          />
                        </div>
                      </div>
                    : null}
                  </div>

                  {error ?
                    <p className="mt-4 text-sm text-red-600" role="alert">
                      {error}
                    </p>
                  : null}

                  <div
                    className={
                      step === 0 ?
                        "mt-10 flex flex-col gap-3 border-t border-zinc-100 pt-8 sm:flex-row sm:justify-end"
                      : "mt-10 flex flex-col gap-3 border-t border-zinc-100 pt-8 sm:flex-row sm:items-center sm:justify-between"
                    }
                  >
                    {step > 0 ?
                      <button
                        type="button"
                        onClick={goBack}
                        className="inline-flex items-center justify-center gap-1.5 self-start rounded-xl py-2.5 text-sm font-medium text-zinc-500 transition hover:bg-zinc-50 hover:text-zinc-900 sm:py-2"
                      >
                        <ChevronLeftIcon className="h-4 w-4 shrink-0 opacity-70" />
                        {c.back}
                      </button>
                    : null}
                    <button
                      type="button"
                      onClick={goNext}
                      className="w-full rounded-2xl border-2 border-transparent bg-sys-yellow px-6 py-3.5 text-sm font-semibold text-zinc-950 shadow-sm transition hover:bg-sys-yellow-bright focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sys-yellow-bright sm:w-auto sm:min-w-[11rem]"
                    >
                      {c.next}
                    </button>
                  </div>
                </>
              : null}

              {isReview ?
                <>
                  <h2
                    className="text-[1.35rem] font-semibold leading-snug tracking-tight text-zinc-950 sm:text-2xl sm:leading-tight lg:hidden"
                    style={{ fontFamily: displayFont }}
                  >
                    {c.reviewTitle}
                  </h2>
                  <p className="mt-2 max-w-prose text-sm leading-relaxed text-zinc-500 lg:hidden">
                    {c.reviewHint}
                  </p>

                  <div className="hidden lg:block">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                      {c.reviewTitle}
                    </p>
                    <p className="mt-2 max-w-lg text-base leading-relaxed text-zinc-600">{c.reviewHint}</p>
                  </div>

                  <pre className="mt-7 max-h-[min(42vh,300px)] overflow-auto whitespace-pre-wrap rounded-2xl border border-zinc-200/80 bg-zinc-50/90 p-4 text-[13px] leading-relaxed text-zinc-800 sm:p-5 lg:mt-8">
                    {buildQuoteWhatsAppMessage(locale, values)}
                  </pre>

                  <div className="mt-10 flex flex-col gap-3 border-t border-zinc-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="button"
                      onClick={goBack}
                      className="inline-flex items-center justify-center gap-1.5 self-start rounded-xl py-2.5 text-sm font-medium text-zinc-500 transition hover:bg-zinc-50 hover:text-zinc-900 sm:py-2"
                    >
                      <ChevronLeftIcon className="h-4 w-4 shrink-0 opacity-70" />
                      {c.back}
                    </button>
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center rounded-2xl border-2 border-transparent bg-sys-yellow px-6 py-3.5 text-sm font-semibold text-zinc-950 shadow-sm transition hover:bg-sys-yellow-bright focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sys-yellow-bright sm:w-auto sm:min-w-[11rem]"
                    >
                      {c.openWhatsapp}
                    </a>
                  </div>
                </>
              : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
