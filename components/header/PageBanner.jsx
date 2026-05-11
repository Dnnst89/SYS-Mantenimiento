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

export default function PageBanner({ title, crumbs }) {
  const items =
    crumbs?.length ?
      crumbs
    : [
        { label: "Inicio", href: "/" },
        { label: title },
      ];

  return (
    <div className="border-b border-zinc-100 bg-gradient-to-b from-white to-zinc-50/80">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:max-w-[1200px]">
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

          <nav
            aria-label="Migas de pan"
            className="flex shrink-0 items-center gap-2 text-[13px] text-zinc-500"
          >
            <HomeIcon className="h-[17px] w-[17px] shrink-0 text-zinc-400" />
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
        </div>
      </div>
    </div>
  );
}
