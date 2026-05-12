import Image from "next/image";
import Link from "next/link";

import { getProjectsCategoryCards } from "@/lib/projectsCategories";

function ArrowRightSmall({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M5 12h12M13 7l6 5-6 5" />
    </svg>
  );
}

function IconHome({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconOffice({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M6 22V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v18"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M9 8h2M13 8h2M9 12h2M13 12h2M9 16h4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M4 22h16"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconFactory({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M4 22V10l4 3V10l4 3V8l8-4v18H4Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M9 22v-4h3v4M14 22v-6h3v6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M17 6V3h2v3"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconColumns({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M8 22V6l4-3 4 3v16M4 22h16"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 22V10M14 22V10"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

const icons = {
  home: IconHome,
  office: IconOffice,
  factory: IconFactory,
  columns: IconColumns,
};

/** @param {{ locale: 'es' | 'en' }} props */
export default function ProjectsCategoryGrid({ locale }) {
  const cards = getProjectsCategoryCards(locale);
  const sectionTitle =
    locale === "en" ? "Browse by category" : "Explorá por categoría";

  return (
    <section
      id="explorar-categorias"
      className="scroll-mt-24 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:py-20"
      aria-labelledby="projects-categories-heading"
    >
      <div className="mx-auto w-full max-w-6xl lg:max-w-[1200px]">
        <header className="mb-9 text-center sm:mb-11">
          <h2
            id="projects-categories-heading"
            className="text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl"
          >
            {sectionTitle}
          </h2>
          <div
            className="mx-auto mt-3.5 h-1 w-12 rounded-full bg-sys-yellow"
            aria-hidden
          />
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {cards.map((card, index) => {
            const Icon = icons[card.icon] ?? IconHome;
            return (
              <Link
                key={card.href}
                href={card.href}
                className="group relative isolate aspect-[3/5] w-full overflow-hidden rounded-[10px] shadow-md ring-1 ring-zinc-200/80 transition hover:-translate-y-0.5 hover:shadow-lg hover:ring-sys-yellow/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sys-yellow lg:aspect-[10/17]"
              >
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  priority={index < 2}
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Bottom readability — dark gradient over full-bleed image */}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 from-[18%] via-black/55 via-50% to-transparent to-68%"
                  aria-hidden
                />

                {/* Category icon: dark fill + thin yellow ring + yellow strokes */}
                <div
                  className="absolute left-3.5 top-3.5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/65 shadow-md ring-2 ring-sys-yellow backdrop-blur-[2px] sm:left-4 sm:top-4 sm:h-12 sm:w-12"
                  aria-hidden
                >
                  <Icon className="h-[22px] w-[22px] text-sys-yellow sm:h-6 sm:w-6" />
                </div>

                {/* Copy + outline arrow on the image (bottom) */}
                <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end p-4 pb-5 sm:p-5 sm:pb-6">
                  <div className="flex flex-col gap-3">
                    <div>
                      <h3 className="text-lg font-bold leading-tight text-white drop-shadow-sm sm:text-xl">
                        {card.title}
                      </h3>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-white/95 sm:text-sm">
                        {card.description}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <span
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-sys-yellow bg-black/25 text-sys-yellow backdrop-blur-[1px] transition group-hover:border-sys-yellow-bright group-hover:text-sys-yellow-bright"
                        aria-hidden
                      >
                        <ArrowRightSmall className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
