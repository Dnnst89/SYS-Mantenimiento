import Image from "next/image";
import Link from "next/link";

import HeroBreadcrumbs from "@/components/home/HeroBreadcrumbs";
import { getQuoteWizardHref } from "@/lib/quoteWizardContent";
import { whatsappHref } from "@/lib/whatsappContact";
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

function WhatsappIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const COPY = {
  es: {
    line1: "Experiencia técnica que marca", /*linea actualizada */
    line2: "diferencia.",                   /*linea actualizada */
    body: "Ofrecemos servicios integrales de mantenimiento con estándares de calidad, seguridad y eficiencia que superan las expectativas.",
    ctaPrimary: "Solicitar cotización",
    ctaWhatsapp: "Hablar por WhatsApp",
    contactHref: getQuoteWizardHref("es"),
  },
  en: {
    line1: "Solutions that keep your world",
    line2: "running.",
    body: "We deliver comprehensive maintenance with quality, safety, and efficiency standards that exceed expectations.",
    ctaPrimary: "Request a quote",
    ctaWhatsapp: "Chat on WhatsApp",
    contactHref: getQuoteWizardHref("en"),
  },
};

/** Formato más ancho tipo banner; misma foto que categorías (ingeniería / actividad en planta). */
const HERO_IMAGE_REMOTE =
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=2400&h=960&q=85&auto=format&fit=crop";

function resolveHeroImageSrc() {
  const raw =
    typeof process !== "undefined"
      ? process.env.NEXT_PUBLIC_HOME_HERO_IMAGE?.trim()
      : "";
  if (!raw) return HERO_IMAGE_REMOTE;
  if (raw.startsWith("/") || raw.startsWith("https://")) return raw;
  return HERO_IMAGE_REMOTE;
}

const HERO_IMAGE = resolveHeroImageSrc();

/**
 * @param {{
 *   locale: 'es' | 'en';
 *   copy?: typeof COPY.es;
 *   headingId?: string;
 *   priority?: boolean;
 * }} props
 * `priority` defaults to true only on the home hero (when `copy` is omitted) for LCP.
 */
export default function HomeHero({ locale, copy, headingId = "home-hero-heading", priority }) {
  const t = copy ?? COPY[locale];
  const wa = whatsappHref(locale);
  const imagePriority = priority ?? copy == null;

  return (
    <section
      className="relative flex min-h-[min(68dvh,520px)] w-full overflow-hidden bg-sys-black sm:min-h-[min(70dvh,540px)] lg:min-h-[min(58dvh,440px)] xl:min-h-[min(60dvh,460px)]"
      aria-labelledby={headingId}
    >
      {/* Capa de imagen: cover + prioridad a la izquierda (la actividad queda en ese lado del encuadre) */}
      <div className="absolute inset-0 z-0" aria-hidden>
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority={imagePriority}
          sizes="100vw"
          className="object-cover object-[12%_48%] sm:object-[16%_46%] lg:object-[20%_44%] xl:object-[22%_42%]"
        />
        <div className="absolute inset-0 bg-sys-black/40 lg:bg-sys-black/32" />
        <div className="absolute inset-0 bg-gradient-to-r from-sys-black from-[0%] via-sys-black/90 via-[38%] to-transparent to-[82%] lg:via-[40%] lg:to-[90%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-sys-black/45 via-transparent to-sys-black/20 lg:from-sys-black/35 lg:to-sys-black/10" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-9 sm:px-6 sm:py-10 lg:max-w-[1200px] lg:px-6 lg:py-12">
        <HeroBreadcrumbs />
        <div className="flex min-h-0 flex-1 flex-col justify-center">
          <div
            className="w-full max-w-[min(100%,520px)]"
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
            id={headingId}
            className="w-full text-[clamp(1.875rem,5.2vw,3.125rem)] font-semibold leading-[1.06] tracking-[-0.035em] sm:text-[clamp(2rem,4.8vw,3.25rem)]"
          >
            <span className="block text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)]">
              {t.line1}
            </span>
            <span className="mt-2 block text-sys-yellow drop-shadow-[0_2px_20px_rgba(0,0,0,0.35)] sm:mt-2.5">
              {t.line2}
            </span>
          </h1>
          <p className="mt-6 w-full max-w-[40rem] text-pretty text-[15px] font-normal leading-[1.7] text-white/95 sm:mt-7 sm:text-base lg:mt-8 lg:text-[1.0625rem] lg:leading-[1.72]">
            {t.body}
          </p>
          <div className="mt-8 flex w-full flex-wrap items-center gap-3 sm:mt-9 lg:mt-10">
            <Link
              href={t.contactHref}
              className="group inline-flex h-11 shrink-0 items-center justify-center gap-2 self-start rounded-full border-2 border-transparent bg-sys-yellow px-5 text-[13px] font-semibold leading-none text-zinc-950 shadow-sm transition-colors duration-200 hover:bg-sys-yellow-bright focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sys-yellow-bright sm:h-12 sm:px-6 sm:text-sm"
            >
              <span className="min-w-0 shrink">{t.ctaPrimary}</span>
              <ArrowRightIcon className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 ease-out will-change-transform group-hover:translate-x-1 sm:h-4 sm:w-4" />
            </Link>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 shrink-0 items-center justify-center gap-2 self-start rounded-full border-2 border-white/90 bg-transparent px-5 text-[13px] font-semibold leading-none text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:h-12 sm:px-6 sm:text-sm"
            >
              <span className="min-w-0 shrink">{t.ctaWhatsapp}</span>
              <WhatsappIcon className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
