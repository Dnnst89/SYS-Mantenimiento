import Image from "next/image";
import Link from "next/link";

function ArrowRightIcon({ className }) {
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

/**
 * Hero panorámico: panel negro + titular en dos líneas + imagen a ancho completo.
 * @param {{
 *   line1: string;
 *   line2Accent?: string;
 *   tagline: string;
 *   imageSrc: string;
 *   imageAlt: string;
 *   id?: string;
 *   cta?: { href: string; label: string };
 * }} props
 */
export default function PanoramaSplitHero({
  line1,
  line2Accent = "",
  tagline,
  imageSrc,
  imageAlt,
  id = "panorama-hero-heading",
  cta,
}) {
  return (
    <section
      className="relative w-full overflow-hidden bg-black"
      aria-labelledby={id}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col px-4 sm:px-6 lg:min-h-[480px] xl:min-h-[520px] lg:max-w-[1200px] lg:flex-row lg:items-stretch">
        <div
          className="relative z-20 order-2 flex w-full flex-col items-start justify-center bg-black pb-10 pt-4 sm:pb-11 sm:pt-5 lg:order-1 lg:w-[min(46%,520px)] lg:flex-none lg:shrink-0 lg:py-10 lg:pt-10 lg:pb-10"
          style={{
            fontFamily:
              "var(--font-display-hero), var(--font-geist-sans), system-ui, sans-serif",
          }}
        >
          <div
            className="mb-6 h-1 w-12 shrink-0 rounded-full bg-gradient-to-r from-sys-yellow to-sys-yellow-bright shadow-[0_0_20px_rgba(232,214,0,0.35)] sm:mb-7 sm:w-14"
            aria-hidden
          />
          <h1
            id={id}
            className="w-full text-[clamp(1.875rem,5.2vw,3.125rem)] font-semibold leading-[1.06] tracking-[-0.035em] sm:text-[clamp(2rem,4.8vw,3.25rem)]"
          >
            {line2Accent ?
              <>
                <span className="block text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]">
                  {line1}
                </span>
                <span className="mt-2 block text-sys-yellow sm:mt-2.5">
                  {line2Accent}
                </span>
              </>
            : <span className="block text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]">
                {line1}
              </span>}
          </h1>
          <p className="mt-6 w-full max-w-[40rem] text-pretty text-[15px] font-normal leading-[1.7] text-zinc-400 sm:mt-7 sm:text-base lg:mt-8 lg:text-[1.0625rem] lg:leading-[1.72]">
            {tagline}
          </p>
          {cta ?
            <div className="mt-8 flex w-full justify-start sm:mt-9 lg:mt-10">
              <Link
                href={cta.href}
                className="group inline-flex max-w-full items-center gap-2 self-start overflow-hidden rounded-full bg-sys-yellow py-2 pl-4 pr-3 text-[13px] font-semibold leading-tight text-zinc-950 shadow-sm transition-colors duration-200 hover:bg-sys-yellow-bright focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sys-yellow-bright sm:py-2.5 sm:pl-5 sm:pr-3.5 sm:text-sm"
              >
                <span className="min-w-0 shrink">{cta.label}</span>
                <ArrowRightIcon className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 ease-out will-change-transform group-hover:translate-x-1 sm:h-4 sm:w-4" />
              </Link>
            </div>
          : null}
        </div>

        <div className="relative order-1 flex min-h-[240px] w-full flex-1 flex-col self-stretch pb-3 pt-0 sm:min-h-[280px] sm:pb-4 lg:order-2 lg:min-h-0 lg:py-4 lg:pb-4">
          <div className="relative flex min-h-[240px] flex-1 overflow-hidden rounded-2xl sm:min-h-[280px] lg:min-h-0 lg:rounded-l-3xl lg:rounded-r-none">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              className="object-cover object-center lg:object-[center_65%]"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            {/* Unión suave con el panel negro (lado izquierdo de la foto) */}
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[min(48%,220px)] bg-gradient-to-r from-black from-5% via-black/80 to-transparent lg:w-[min(40%,260px)]"
              aria-hidden
            />
            {/* Difuminado a negro hacia la derecha */}
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-[11] w-[min(60%,360px)] bg-gradient-to-l from-black from-0% via-black/70 via-40% to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-t from-black/35 to-transparent lg:from-transparent lg:to-transparent"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
