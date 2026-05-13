import Image from "next/image";

/**
 * @param {{
 *   title: string;
 *   subtitle: string;
 *   items: { src: string; alt: string; gridClass: string }[];
 * }} props
 */
export default function SectorWorkCatalog({ title, subtitle, items }) {
  return (
    <section
      className="border-b border-zinc-200/90 bg-surface-muted/50"
      aria-labelledby="sector-catalog-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:max-w-[1200px] lg:py-14">
        <div className="max-w-3xl">
          <h2
            id="sector-catalog-heading"
            className="text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl"
          >
            {title}
          </h2>
          <p className="mt-3 text-pretty text-base leading-relaxed text-zinc-600 sm:text-[1.0625rem]">
            {subtitle}
          </p>
        </div>

        <div className="mt-8 grid grid-flow-dense auto-rows-[140px] grid-cols-2 gap-2 sm:auto-rows-[160px] sm:gap-3 md:grid-cols-4 lg:auto-rows-[180px] lg:gap-4">
          {items.map((item, i) => (
            <figure
              key={`${item.src}-${i}`}
              className={`group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-200 shadow-sm ${item.gridClass}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent px-3 pb-3 pt-10 text-left text-xs font-medium leading-snug text-white sm:text-sm">
                {item.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
