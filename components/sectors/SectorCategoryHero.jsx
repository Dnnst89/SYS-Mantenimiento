import Image from "next/image";

import BreadcrumbTrail from "@/components/header/BreadcrumbTrail";

function IconHome(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 9.5 12 3l9 6.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M9 21v-6h6v6" />
    </svg>
  );
}

function IconUsers(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="10" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconShield(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

/**
 * @param {{
 *   locale: 'es' | 'en';
 *   sector: {
 *     src: string;
 *     alt: { es: string; en: string };
 *     heroAccent: { es: string; en: string };
 *     heroTagline: { es: string; en: string };
 *   };
 *   crumbs: { label: string; href?: string; isHome?: boolean }[];
 *   stats?: {
 *     icon: 'home' | 'users' | 'shield';
 *     value: string;
 *     label: { es: string; en: string };
 *   }[];
 * }} props
 */
export default function SectorCategoryHero({ locale, sector, crumbs, stats }) {
  const line1 = locale === "en" ? "Projects" : "Proyectos";
  const id = "sector-hero-heading";

  const defaultStats = [
    {
      icon: "home",
      value: "125+",
      label: {
        es: "Proyectos\nrealizados",
        en: "Projects\ncompleted",
      },
    },
    {
      icon: "users",
      value: "95+",
      label: {
        es: "Clientes\nsatisfechos",
        en: "Satisfied\nclients",
      },
    },
    {
      icon: "shield",
      value: "100%",
      label: {
        es: "Compromiso\nde calidad",
        en: "Quality\ncommitment",
      },
    },
  ];

  const heroStats = stats && stats.length > 0 ? stats : defaultStats;

  const iconMap = {
    home: IconHome,
    users: IconUsers,
    shield: IconShield,
  };

  return (
    <div className="relative">
      <section
        className="relative flex min-h-[min(72dvh,560px)] w-full overflow-hidden bg-sys-black sm:min-h-[min(74dvh,580px)] lg:min-h-[min(60dvh,480px)] xl:min-h-[min(62dvh,500px)]"
        aria-labelledby={id}
      >
        {/* Imagen de fondo full-bleed */}
        <div className="absolute inset-0 z-0" aria-hidden>
          <Image
            src={sector.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_45%] lg:object-[62%_42%]"
          />
        </div>

        {/* Overlays para legibilidad del texto */}
        <div className="absolute inset-0 bg-sys-black/50 lg:bg-sys-black/35" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-r from-sys-black from-[5%] via-sys-black/75 via-[35%] to-transparent lg:via-[42%] lg:to-[72%]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-sys-black/55 via-transparent to-transparent"
          aria-hidden
        />

        {/* Contenido */}
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-9 sm:px-6 sm:py-10 lg:max-w-[1200px] lg:px-6 lg:py-12">
          <div className="mb-5 lg:mb-6">
            <BreadcrumbTrail
              items={crumbs}
              layout="inline"
              ariaLabel={locale === "en" ? "Breadcrumb" : "Migas de pan"}
            />
          </div>

          <div className="flex min-h-0 flex-1 flex-col justify-center">
            <div
              className="w-full max-w-[min(100%,560px)]"
              style={{
                fontFamily:
                  "var(--font-display-hero), var(--font-geist-sans), system-ui, sans-serif",
              }}
            >
              <div
                className="mb-6 h-1 w-12 shrink-0 rounded-full bg-gradient-to-r from-sys-yellow to-sys-yellow-bright shadow-[0_0_20px_rgba(232,214,0,0.35)] sm:w-14"
                aria-hidden
              />
              <h1
                id={id}
                className="w-full text-[clamp(1.875rem,5.2vw,3.125rem)] font-semibold leading-[1.06] tracking-[-0.035em] sm:text-[clamp(2rem,4.8vw,3.25rem)]"
              >
                <span className="block text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]">
                  {line1}
                </span>
                <span className="mt-2 block text-sys-yellow drop-shadow-[0_2px_20px_rgba(0,0,0,0.35)] sm:mt-2.5">
                  {sector.heroAccent[locale]}
                </span>
              </h1>
              <p className="mt-5 w-full max-w-[40rem] text-pretty text-[15px] font-normal leading-[1.7] text-white/90 sm:mt-6 sm:text-base lg:mt-7 lg:text-[1.0625rem] lg:leading-[1.72]">
                {sector.heroTagline[locale]}
              </p>
            </div>
          </div>

          {/* Stats bar */}

        </div>
                <div
            className="absolute z-20 bottom-4 right-4 sm:bottom-6 sm:right-6 lg:right-8 flex w-full max-w-[min(90%,560px)] items-stretch justify-between gap-2 rounded-xl bg-black/85 px-3 py-3 shadow-[0_0_30px_rgba(200,200,200,0.50)] backdrop-blur-sm sm:mt-10 sm:gap-3 sm:px-4 sm:py-4"
            role="list"
          >
            {heroStats.map((stat, index) => {
              const Icon = iconMap[stat.icon];
              const [labelLine1, labelLine2] = stat.label[locale].split("\n");

              return (
                <div
                  key={index}
                  role="listitem"
                  className={`flex flex-1 items-center gap-2.5 sm:gap-3 ${
                    index !== 0 ? "border-l border-white/15 pl-2.5 sm:pl-4" : ""
                  }`}
                >
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sys-yellow/15 text-sys-yellow sm:h-11 sm:w-11"
                    aria-hidden
                  >
                    {Icon && <Icon className="h-4 w-4 sm:h-5 sm:w-5" />}
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="text-lg font-bold text-white sm:text-2xl">
                      {stat.value}
                    </span>
                    <span className="text-[9px] font-medium uppercase tracking-wide text-zinc-300 sm:text-xs sm:tracking-wide">
                      {labelLine1}
                      {labelLine2 && (
                        <>
                          <br />
                          {labelLine2}
                        </>
                      )}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
      </section>
      </div>
  );
}
