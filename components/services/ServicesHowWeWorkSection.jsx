import { servicesHowWeWorkCopy } from "@/lib/servicesPageContent";

/** @param {{ locale: 'es' | 'en' }} props */
export default function ServicesHowWeWorkSection({ locale }) {
  const t = servicesHowWeWorkCopy[locale];

  return (
    <section
      className="relative isolate overflow-hidden border-b border-zinc-200/70 bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="services-how-we-work-heading"
    >
      {/* fondo: malla muy suave + resplandor lateral */}
      <div
        className="sys-grid-lines-35 pointer-events-none absolute inset-0 opacity-[0.55]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-[min(35%,420px)] top-[-20%] h-[min(85vh,640px)] w-[min(85vw,720px)] rounded-[40%] bg-[radial-gradient(circle_at_30%_30%,rgba(232,214,0,0.22),transparent_68%)] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-sys-black/[0.04] blur-2xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:max-w-[1200px]">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14">
          {/* Columna intro: sticky en desktop */}
          <header className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-zinc-400">
              {t.eyebrow}
            </p>
            <h2
              id="services-how-we-work-heading"
              className="mt-4 text-balance"
              style={{
                fontFamily:
                  "var(--font-display-hero), var(--font-geist-sans), system-ui, sans-serif",
              }}
            >
              <span className="block text-2xl font-medium leading-snug tracking-tight text-zinc-600 sm:text-[1.65rem]">
                {t.line1}
              </span>
              <span className="mt-3 block text-[clamp(2.75rem,7vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-sys-black">
                <span className="relative inline-block">
                  <span className="relative z-10">{t.line2}</span>
                  <span
                    className="absolute -bottom-0.5 left-0 z-0 h-[0.42em] w-full -skew-x-6 bg-sys-yellow/55 sm:-bottom-1 sm:h-[0.48em]"
                    aria-hidden
                  />
                </span>
              </span>
            </h2>
            <p className="mt-8 max-w-md text-pretty text-[15px] leading-[1.75] text-zinc-500 sm:text-base">
              {t.lead}
            </p>
            {/* acento geométrico decorativo */}
            <div
              className="mt-10 hidden h-px w-24 bg-gradient-to-r from-sys-yellow to-transparent lg:block"
              aria-hidden
            />
          </header>

          {/* Lista editorial con índices */}
          <div className="mt-14 lg:col-span-7 lg:mt-4">
            <ol className="m-0 list-none divide-y divide-zinc-200/90 border-y border-zinc-200/90 p-0">
              {t.pillars.map((item, i) => (
                <li key={item.title} className="group relative list-none py-9 sm:py-10 lg:py-11">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-10">
                    <span
                      className="shrink-0 tabular-nums text-[13px] font-medium tracking-[0.2em] text-sys-yellow sm:pt-1"
                      aria-hidden
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl font-semibold tracking-tight text-sys-black transition-colors duration-200 group-hover:text-zinc-700 sm:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-zinc-500 sm:text-base">
                        {item.body}
                      </p>
                    </div>
                  </div>
                  <div
                    className="pointer-events-none absolute bottom-0 right-0 h-px w-0 bg-sys-yellow transition-[width] duration-500 ease-out group-hover:w-full sm:max-w-md"
                    aria-hidden
                  />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
