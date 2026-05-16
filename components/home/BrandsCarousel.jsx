"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useSyncExternalStore } from "react";
import { homeBrandItems } from "@/lib/homeBrands";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (onStoreChange) => {
      const mq = window.matchMedia(reducedMotionQuery);
      mq.addEventListener("change", onStoreChange);
      return () => mq.removeEventListener("change", onStoreChange);
    },
    () => window.matchMedia(reducedMotionQuery).matches,
    () => false,
  );
}

/** @param {{ src: string; alt: string }} props */
function BrandLogo({ src, alt }) {
  return (
    <div className="relative h-12 w-[min(10.5rem,42vw)] shrink-0 sm:h-[3.25rem] sm:w-[min(12rem,36vw)]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain object-center"
        sizes="(max-width: 640px) 42vw, 192px"
      />
    </div>
  );
}

/** @param {{ locale: 'es' | 'en' }} props */
function BrandsCarouselTrack({ locale }) {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [
      AutoScroll({
        speed: 1,
        stopOnMouseEnter: true,
        stopOnInteraction: false,
      }),
    ],
  );

  return (
    <div
      className="-mx-4 overflow-hidden px-4 sm:-mx-6 sm:px-6"
      ref={emblaRef}
    >
      <ul className="m-0 flex touch-pan-y gap-x-10 p-0 sm:gap-x-14">
        {homeBrandItems.map((b) => (
          <li key={b.src} className="min-w-0 shrink-0 grow-0 basis-auto">
            <BrandLogo src={b.src} alt={b.alt[locale]} />
          </li>
        ))}
      </ul>
    </div>
  );
}

/** @param {{ locale: 'es' | 'en' }} props */
export default function BrandsCarousel({ locale }) {
  const reducedMotion = usePrefersReducedMotion();

  const sectionLabel =
    locale === "en" ? "Brand logos" : "Logos de marcas";

  return (
    <section
      className="border-t border-zinc-200/80 bg-surface-muted py-8 sm:py-9 lg:py-10"
      aria-label={sectionLabel}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:max-w-[1200px]">
        {reducedMotion ?
          <ul className="m-0 flex list-none flex-wrap items-center justify-center gap-x-10 gap-y-6 p-0 sm:gap-x-12">
            {homeBrandItems.map((b) => (
              <li key={b.src}>
                <BrandLogo src={b.src} alt={b.alt[locale]} />
              </li>
            ))}
          </ul>
        : <BrandsCarouselTrack locale={locale} />}
      </div>
    </section>
  );
}
