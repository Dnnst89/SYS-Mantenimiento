import Link from "next/link";

/** Icono casa en trazo (referencia de diseño). */
function HomeIconOutline({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-8H9v8H4a1 1 0 0 1-1-1V9.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Migas sobre fondo negro: enlaces y separadores en blanco, página actual en amarillo SYS.
 * El primer ítem puede llevar `isHome: true` para mostrar icono + etiqueta.
 *
 * @param {{
 *   items: { label: string; href?: string; isHome?: boolean }[];
 *   ariaLabel?: string;
 *   layout?: 'bar' | 'inline';
 * }} props
 */
export default function BreadcrumbTrail({
  items,
  ariaLabel = "Migas de pan",
  layout = "bar",
}) {
  if (!items?.length) return null;

  const ol = (
    <ol className="m-0 flex list-none flex-wrap items-center justify-start gap-x-2 gap-y-1 p-0 text-[13px] font-medium leading-none text-white sm:text-sm">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <li key={`${item.label}-${i}`} className="flex items-center gap-x-2">
            {i > 0 ?
              <span className="select-none text-white/90" aria-hidden>
                /
              </span>
            : null}
            {isLast ?
              <span className="text-sys-yellow" aria-current="page">
                {item.label}
              </span>
            : item.href ?
              <Link
                href={item.href}
                className="inline-flex items-center gap-1.5 text-white transition hover:text-white/85"
              >
                {item.isHome ?
                  <>
                    <HomeIconOutline className="h-[15px] w-[15px] shrink-0 sm:h-4 sm:w-4" />
                    <span>{item.label}</span>
                  </>
                : <span>{item.label}</span>}
              </Link>
            : <span className="text-white">{item.label}</span>}
          </li>
        );
      })}
    </ol>
  );

  if (layout === "inline") {
    return (
      <nav aria-label={ariaLabel} className="text-white">
        {ol}
      </nav>
    );
  }

  return (
    <nav
      aria-label={ariaLabel}
      className="border-b border-white/10 bg-sys-black"
    >
      <div className="mx-auto flex w-full max-w-6xl justify-start px-4 py-3 sm:px-6 lg:max-w-[1200px]">
        {ol}
      </div>
    </nav>
  );
}
