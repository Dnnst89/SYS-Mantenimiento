import { suppliersPageCopy } from "@/lib/suppliersPageContent";

/**
 * Bloque introductorio (título + párrafo) encima del encabezado partido Proveedores.
 * @param {{ locale: 'es' | 'en' }} props
 */
export default function SuppliersIntroLead({ locale }) {
  const t = suppliersPageCopy[locale];

  return (
    <section
      className="relative border-b border-zinc-200/90 bg-white py-12 sm:py-14 lg:py-16"
      aria-labelledby="suppliers-intro-lead-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sys-yellow/30 to-transparent"
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-0.5 w-10 rounded-full bg-sys-yellow shadow-[0_0_12px_rgba(232,214,0,0.3)]" aria-hidden />
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sys-yellow">{t.eyebrow}</p>
        </div>
        <h2
          id="suppliers-intro-lead-heading"
          className="max-w-3xl text-balance text-2xl font-semibold leading-[1.12] tracking-tight text-sys-black sm:text-3xl lg:text-[2.35rem] lg:leading-[1.1]"
          style={{
            fontFamily:
              "var(--font-display-hero), var(--font-geist-sans), system-ui, sans-serif",
          }}
        >
          {t.title}
        </h2>
        <p className="mt-6 max-w-3xl text-pretty text-[15px] leading-[1.75] text-zinc-600 sm:mt-7 sm:text-base lg:text-[1.0625rem] lg:leading-[1.72]">
          {t.lead}
        </p>
      </div>
    </section>
  );
}
