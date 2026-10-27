import { suppliersPageCopy } from "@/lib/suppliersPageContent";

/**
 * Franja partida amarillo / negro con el nombre de página y una frase de apoyo.
 * @param {{ locale: 'es' | 'en' }} props
 */
export default function SuppliersSplitHeader({ locale }) {
  const t = suppliersPageCopy[locale];

  return (
    <header className="flex min-h-0 flex-col lg:flex-row lg:min-h-[min(32vh,300px)]">
      <div className="flex flex-1 flex-col justify-center bg-sys-yellow px-5 py-10 text-sys-black sm:px-8 sm:py-12 lg:w-[min(44%,22rem)] lg:flex-none lg:py-14 xl:w-[min(40%,24rem)]">
        <h1
          className="text-[clamp(2rem,6vw,3.25rem)] font-bold leading-[0.95] tracking-[-0.04em]"
          style={{
            fontFamily:
              "var(--font-display-hero), var(--font-geist-sans), system-ui, sans-serif",
          }}
        >
          {t.bannerTitle}
        </h1>
      </div>
      <div className="flex flex-1 flex-col justify-center border-t border-white/10 bg-sys-black px-5 py-10 sm:px-10 sm:py-12 lg:border-l lg:border-t-0 lg:px-12 lg:py-14 xl:px-16">
        <p className="max-w-xl text-pretty text-lg font-medium leading-snug text-white/95 sm:text-xl lg:text-[1.35rem] lg:leading-[1.35]">
          {t.splitTagline}
        </p>
        <p className="mt-6 max-w-md text-[13px] leading-relaxed text-white/45 sm:text-sm">{t.splitSubline}</p>
      </div>
    </header>
  );
}
