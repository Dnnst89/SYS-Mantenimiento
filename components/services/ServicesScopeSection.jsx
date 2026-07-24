import { servicesScopeCopy } from "@/lib/servicesPageContent";

/** @param {{ locale: 'es' | 'en' }} props */
export default function ServicesScopeSection({ locale }) {
  const t = servicesScopeCopy[locale];

  return (
    <section
      className="relative border-b border-zinc-200/90 bg-white py-14 sm:py-16 lg:py-20"
      aria-labelledby="services-scope-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sys-yellow/50 to-transparent" aria-hidden />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:max-w-[1200px]">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sys-yellow sm:text-xs">
            {t.eyebrow}
          </p>
          <h2
            id="services-scope-heading"
            className="mt-3 text-3xl font-semibold leading-[1.08] tracking-tight text-sys-black sm:text-4xl"
            style={{
              fontFamily:
                "var(--font-display-hero), var(--font-geist-sans), system-ui, sans-serif",
            }}
          >
            <span className="text-sys-black">{t.line1} </span>
            <span className="text-sys-yellow">{t.line2}</span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-zinc-600 sm:text-base">{t.lead}</p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-5">
          {t.areas.map((label) => (
            <li
              key={label}
              className="group flex items-start gap-4 rounded-2xl border border-zinc-200/90 bg-zinc-50/60 px-5 py-4 shadow-sm transition hover:border-sys-yellow/40 hover:bg-white hover:shadow-md sm:px-6 sm:py-5"
            >
              <span
                className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-sys-yellow shadow-[0_0_0_3px_rgba(232,214,0,0.2)] transition group-hover:scale-110"
                aria-hidden
              />
              <span className="text-[15px] font-medium leading-snug text-sys-black">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
