import { BRAND_NAMES } from "@/lib/homeShowcaseContent";

/** @param {{ locale: 'es' | 'en' }} props */
export default function HomeBrandsCarousel({ locale }) {
  const brandsLoop = [...BRAND_NAMES, ...BRAND_NAMES];

  return (
    <section
      aria-label={
        locale === "en" ? "Brands and clients" : "Marcas y clientes"
      }
      className="home-marquee-strip py-7 sm:py-8"
    >
      <div className="relative overflow-hidden">
        <div className="home-marquee-track items-center gap-0">
          {brandsLoop.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="inline-flex shrink-0 items-center px-8 sm:px-10"
            >
              <span className="whitespace-nowrap text-[13px] font-semibold uppercase tracking-[0.12em] text-zinc-400 sm:text-sm">
                {name}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
