"use client";

import Image from "next/image";
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
        : <>
            <ul className="sr-only">
              {homeBrandItems.map((b) => (
                <li key={b.src}>{b.alt[locale]}</li>
              ))}
            </ul>
            <div
              className="home-marquee-strip relative -mx-4 overflow-hidden px-4 sm:-mx-6 sm:px-6"
              aria-hidden
            >
              <div className="home-marquee-track home-marquee-track--brands items-center gap-x-10 sm:gap-x-14">
                {homeBrandItems.map((b) => (
                  <BrandLogo
                    key={`a-${b.src}`}
                    src={b.src}
                    alt={b.alt[locale]}
                  />
                ))}
                {homeBrandItems.map((b) => (
                  <BrandLogo
                    key={`b-${b.src}`}
                    src={b.src}
                    alt={b.alt[locale]}
                  />
                ))}
              </div>
            </div>
          </>
        }
      </div>
    </section>
  );
}
