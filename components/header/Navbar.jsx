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

export default function Navbar({ className = "" }) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const items = locale === "en" ? NAV_EN : NAV_ES;
  const switchHref = getAlternateLocalePath(pathname);
  const switchLabel = locale === "en" ? "Español" : "English";

  return (
    <nav
      className={`flex flex-wrap items-center justify-end gap-8 lg:gap-10 ${className}`}
    >
      <ul className="flex flex-wrap items-center justify-end gap-x-7 gap-y-3 md:gap-x-8">
        {items.map(({ href, label }) => {
          const active = isActivePath(pathname, href);
          return (
            <li key={href}>
              <Link
                href={href}
                className={`relative text-[11px] font-semibold uppercase tracking-[0.14em] transition after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:rounded-full after:bg-sys-yellow after:transition ${
                  active ?
                    "text-sys-yellow after:scale-x-100"
                  : "text-zinc-500 after:scale-x-0 hover:text-zinc-900 hover:after:scale-x-100"
                }`}
              >
                {label}
              </Link>
            </li>
          );
        })}
        <li className="flex items-center md:pl-1">
          <Link
            href={switchHref}
            className="text-[11px] font-semibold uppercase tracking-[0.14em] text-sys-yellow transition hover:text-sys-yellow-bright"
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
        className="group ml-2 inline-flex shrink-0 rounded-lg p-1 text-zinc-400 transition hover:bg-zinc-100 hover:text-sys-yellow md:ml-4"
        aria-label="Facebook"
      >
        <FacebookIcon className="h-5 w-5 fill-current" />
      </a>
    </nav>
  );
}
