import Image from "next/image";
import Link from "next/link";

import { getSectorGridItems } from "@/lib/sectors";

/** @param {{ locale: 'es' | 'en' }} props */
export default function HomeSectorGrid({ locale }) {
  const sectors = getSectorGridItems(locale);

  return (
    <section aria-label={locale === "en" ? "Sectors we serve" : "Sectores"}>
      <div className="grid grid-cols-1 gap-4 bg-zinc-100 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
        {sectors.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            aria-label={
              locale === "en" ? `${item.label} sector` : `Sector ${item.label}`
            }
            className="group relative isolate block aspect-3/5 w-full overflow-hidden bg-zinc-900 shadow-sm ring-0 transition duration-500 ease-out hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sys-yellow"
          >
            <Image
              alt=""
              className="pointer-events-none object-cover grayscale transition duration-700 ease-out group-hover:scale-[1.07] group-hover:grayscale-0"
              fill
              priority={index === 0}
              sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 1024px) calc(50vw - 2rem), 280px"
              src={item.src}
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10 transition duration-500 group-hover:from-black/70 group-hover:via-black/30"
              aria-hidden
            />
            <div className="pointer-events-none absolute inset-0 ring-inset ring-transparent transition duration-500 group-hover:ring-2 group-hover:ring-sys-yellow/60" aria-hidden />
            <p className="pointer-events-none absolute inset-x-0 bottom-0 px-4 pb-7 pt-20 text-center sm:pb-8 sm:pt-24" aria-hidden>
              <span className="text-[13px] font-semibold uppercase tracking-[0.18em] text-white transition duration-300 group-hover:text-sys-yellow-bright sm:text-sm">
                {item.label}
              </span>
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
