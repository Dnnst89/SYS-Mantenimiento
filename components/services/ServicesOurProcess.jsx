import { servicesProcessCopy } from "@/lib/servicesPageContent";

function ProcessStepIcon({ name, className }) {
  const c = "stroke-white";
  const sw = 1.35;
  switch (name) {
    case "document":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"
            className={c}
            strokeWidth={sw}
            strokeLinejoin="round"
          />
          <path d="M14 2v6h6M8 13h8M8 17h6" className={c} strokeWidth={sw} strokeLinecap="round" />
        </svg>
      );
    case "eye":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z"
            className={c}
            strokeWidth={sw}
          />
          <circle cx="12" cy="12" r="3" className={c} strokeWidth={sw} />
        </svg>
      );
    case "calculator":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <rect x="4" y="3" width="16" height="18" rx="2" className={c} strokeWidth={sw} />
          <path d="M8 7h8M8 11h2M12 11h2M16 11h2M8 15h2M12 15h2M16 15h2" className={c} strokeWidth={sw} strokeLinecap="round" />
        </svg>
      );
    case "tools":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M14.7 6.3a1 1 0 0 1 1.4 0l1.4 1.4a1 1 0 0 1 0 1.4L9.2 16.4a4 4 0 1 1-5.6-5.6l6.2-6.2Z"
            className={c}
            strokeWidth={sw}
            strokeLinejoin="round"
          />
          <path d="m4 22 5-5M15 7l2 2" className={c} strokeWidth={sw} strokeLinecap="round" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"
            className={c}
            strokeWidth={sw}
            strokeLinejoin="round"
          />
          <path d="m9 12 2 2 4-4" className={c} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
}

/** @param {{ locale: 'es' | 'en' }} props */
export default function ServicesOurProcess({ locale }) {
  const t = servicesProcessCopy[locale];

  return (
    <section
      className="relative bg-sys-black py-14 sm:py-16 lg:py-20"
      aria-labelledby="services-process-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:max-w-[1200px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sys-yellow sm:text-xs">
              {t.eyebrow}
            </p>
            <h2
              id="services-process-heading"
              className="mt-3 text-3xl font-semibold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[2.5rem]"
              style={{
                fontFamily:
                  "var(--font-display-hero), var(--font-geist-sans), system-ui, sans-serif",
              }}
            >
              <span className="text-white">{t.line1} </span>
              <span className="text-sys-yellow">{t.line2}</span>
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-white/85 lg:pb-1 lg:text-right">
            {t.intro}
          </p>
        </div>

        {/* Móvil: pasos apilados con conector vertical */}
        <ol className="relative mt-12 space-y-10 lg:hidden">
          <div
            className="absolute left-[1.125rem] top-4 bottom-4 w-px border-l border-dashed border-zinc-600"
            aria-hidden
          />
          {t.steps.map((step, i) => (
            <li key={step.title} className="relative flex gap-5 pl-1">
              <div className="relative z-10 flex shrink-0 flex-col items-center pt-1">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sys-yellow text-[11px] font-bold text-sys-black shadow-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="min-w-0 flex-1 pb-1">
                <div className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-xl border-2 border-sys-yellow bg-sys-black">
                  <ProcessStepIcon name={step.icon} className="h-7 w-7" />
                </div>
                <h3 className="text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* Escritorio: línea punteada + columnas */}
        <div className="relative mt-16 hidden lg:block">
          <div
            className="pointer-events-none absolute left-[6%] right-[6%] top-[2.75rem] z-0 border-t border-dashed border-zinc-600"
            aria-hidden
          />
          <ol className="relative z-10 grid grid-cols-5 gap-3 xl:gap-4">
            {t.steps.map((step, i) => (
              <li key={step.title} className="flex flex-col items-center text-center">
                <div className="relative flex w-full flex-col items-center">
                  <span className="relative z-20 mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-sys-yellow text-[11px] font-bold text-sys-black shadow-md ring-4 ring-sys-black">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border-2 border-sys-yellow bg-sys-black shadow-[0_0_0_1px_rgba(0,0,0,0.35)]">
                    <ProcessStepIcon name={step.icon} className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="mt-5 text-[15px] font-semibold leading-snug text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-white/75">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
