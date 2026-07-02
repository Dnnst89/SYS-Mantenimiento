"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  getAlternateLocalePath,
  getLocaleFromPathname,
  NAV_EN,
  NAV_ES,
} from "@/lib/locale";

function isActivePath(pathname, href) {
  const p = pathname.replace(/\/$/, "") || "/";
  const h = href.replace(/\/$/, "") || "/";
  if (h === "/" || h === "/en") return p === h;
  return p === h || p.startsWith(`${h}/`);
}

function FacebookIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.997.106-1.667 1.667-1.667h2v-3.106c-.318-.046-1.415-.131-3.086-.131-3.836 0-5.087 2.086-5.087 6.067v2.097z" />
    </svg>
  );
}

export default function Navbar({ className = "", stacked = false }) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const items = locale === "en" ? NAV_EN : NAV_ES;
  const switchHref = getAlternateLocalePath(pathname);
  const switchLabel = locale === "en" ? "Español" : "English";

  const linkAccent = stacked ?
      "relative block w-fit py-1 text-[12px] font-semibold uppercase tracking-[0.12em]"
    : `relative inline-block py-1 text-[11px] font-semibold uppercase tracking-[0.14em] transition after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-left after:rounded-full after:bg-sys-yellow after:transition`;

  const inactiveCls = stacked ?
      "text-zinc-700 transition hover:text-sys-yellow"
    : "text-zinc-400 after:scale-x-0 hover:text-white hover:after:scale-x-100";

  const activeCls =
    stacked ? "text-sys-yellow" : "text-sys-yellow after:scale-x-100";

  return (
    <nav
      className={
        stacked ?
          `flex w-full flex-col items-stretch gap-10 ${className}`
        : `flex flex-wrap items-center justify-end gap-8 lg:gap-10 ${className}`
      }
    >
      <ul
        className={
          stacked ?
            "flex flex-col gap-1"
          : "flex flex-wrap items-center justify-end gap-x-7 gap-y-3 md:gap-x-8"
        }
      >
        {items.map(({ href, label }) => {
          const on = isActivePath(pathname, href);
          return (
            <li key={href} className={stacked ? "w-full" : ""}>
              <Link href={href} className={`${linkAccent} ${on ? activeCls : inactiveCls}`}>
                {label}
              </Link>
              {stacked && on ?
                <span
                  className="mt-2 block h-[3px] w-10 rounded-full bg-sys-yellow"
                  aria-hidden
                />
              : null}
            </li>
          );
        })}
        <li className={stacked ? "pt-2" : "flex items-center md:pl-1"}>
          <Link
            href={switchHref}
            className={`${stacked ? "text-[13px]" : "text-[11px]"} font-semibold uppercase tracking-[0.14em] text-sys-yellow transition hover:text-sys-yellow-bright`}
            hrefLang={locale === "en" ? "es" : "en"}
          >
            {switchLabel}
          </Link>
        </li>
      </ul>
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className={
          stacked ?
            "inline-flex w-fit shrink-0 rounded-lg p-2 text-zinc-400 transition hover:bg-zinc-100 hover:text-sys-yellow"
          : "group ml-2 inline-flex shrink-0 rounded-lg p-1 text-zinc-400 transition hover:bg-white/10 hover:text-sys-yellow md:ml-4"
        }
        aria-label="Facebook"
      >
        <FacebookIcon className="h-5 w-5 fill-current" />
      </a>
    </nav>
  );
}
