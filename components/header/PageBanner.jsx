import Link from "next/link";

function HomeIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
      fill="currentColor"
    >
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z" />
    </svg>
  );
}

/**
 * @param {{
 *   title: string;
 *   crumbs?: { label: string; href?: string }[];
 *   breadcrumbIconOnly?: boolean;
 *   homeHref?: string;
 *   breadcrumbCurrentLabel?: string;
 *   breadcrumbOnDark?: boolean;
 * }} props
 * breadcrumbOnDark: casita amarilla sobre fondo oscuro; por defecto (false) casita negra sobre fondo claro.
 */
export default function PageBanner({
  title,
  crumbs,
  breadcrumbIconOnly = false,
  homeHref = "/",
  breadcrumbCurrentLabel = "Inicio",
  breadcrumbOnDark = false,
}) {
  const items =
    crumbs?.length ?
      crumbs
    : [
        { label: "Inicio", href: "/" },
        { label: title },
      ];

  const homeIconOnlyLinkClass = breadcrumbOnDark ?
    "inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 p-2.5 text-sys-yellow shadow-sm transition hover:border-sys-yellow/50 hover:bg-white/10 hover:text-sys-yellow-bright focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sys-yellow"
  : "inline-flex items-center justify-center rounded-lg border border-zinc-200 bg-white p-2.5 text-zinc-950 shadow-sm transition hover:border-sys-yellow/60 hover:text-sys-yellow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sys-yellow";

  return (
    <div className="border-b border-zinc-100 bg-gradient-to-b from-white to-zinc-50/80">
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-6 sm:px-6 sm:pb-12 sm:pt-7 lg:max-w-[1200px]">
        {breadcrumbIconOnly ?
          <nav
            aria-label="Migas de pan"
            className="mb-6 flex w-full justify-start sm:mb-8"
          >
            <ol className="m-0 flex list-none p-0">
              <li>
                <Link
                  href={homeHref}
                  aria-current="page"
                  className={homeIconOnlyLinkClass}
                >
                  <HomeIcon className="h-5 w-5 shrink-0 sm:h-[22px] sm:w-[22px]" />
                  <span className="sr-only">{breadcrumbCurrentLabel}</span>
                </Link>
              </li>
            </ol>
          </nav>
        : null}

        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full bg-sys-yellow shadow-[0_0_0_2px_rgba(0,0,0,0.04)]"
                aria-hidden
              />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                SYS
              </span>
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl md:text-[2.75rem] md:leading-[1.08]">
              {title}
            </h1>
            <div className="mt-4 h-px w-14 bg-sys-yellow" aria-hidden />
          </div>

          {!breadcrumbIconOnly ?
            <nav
              aria-label="Migas de pan"
              className="flex shrink-0 items-center gap-2 text-[13px] text-zinc-500"
            >
              <HomeIcon className="h-[17px] w-[17px] shrink-0 text-zinc-900" />
              <ol className="flex flex-wrap items-center gap-1">
                {items.map((item, idx) => {
                  const isLast = idx === items.length - 1;
                  return (
                    <li key={`${item.label}-${idx}`} className="flex items-center">
                      {idx > 0 ?
                        <span className="mx-1.5 text-zinc-300" aria-hidden>
                          /
                        </span>
                      : null}

                      {!isLast && item.href ?
                        <Link
                          href={item.href}
                          className="transition hover:text-sys-yellow"
                        >
                          {item.label}
                        </Link>
                      : <span
                          className={
                            isLast ?
                              "font-medium text-sys-yellow"
                            : "text-zinc-500"
                          }
                        >
                          {item.label}
                        </span>
                      }
                    </li>
                  );
                })}
              </ol>
            </nav>
          : null}
        </div>
      </div>
    </div>
  );
}
