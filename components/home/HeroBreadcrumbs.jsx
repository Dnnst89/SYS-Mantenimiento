"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { getBreadcrumbTrail } from "@/lib/siteBreadcrumbs";

/** Migas dentro del hero (fondo oscuro). No renderiza en `/` ni `/en`. */
export default function HeroBreadcrumbs() {
  const pathname = usePathname();
  const trail = getBreadcrumbTrail(pathname);

  if (!trail) return null;

  const navLabel = trail.locale === "es" ? "Migas de pan" : "Breadcrumb";

  return (
    <nav aria-label={navLabel} className="mb-6 w-full self-start sm:mb-8">
      <ol className="m-0 flex list-none flex-wrap items-center gap-x-1 gap-y-1 p-0 text-[13px] font-medium sm:text-[13.5px]">
        {trail.items.map((item, idx) => {
          const isLast = idx === trail.items.length - 1;
          return (
            <li key={`${item.label}-${idx}`} className="flex items-center">
              {idx > 0 ?
                <span className="mx-1.5 text-white/35" aria-hidden>
                  /
                </span>
              : null}
              {!isLast && item.href ?
                <Link
                  href={item.href}
                  className="text-white/90 underline decoration-white/30 underline-offset-[3px] transition hover:text-sys-yellow-bright hover:decoration-sys-yellow-bright/70"
                >
                  {item.label}
                </Link>
              : <span className={isLast ? "font-semibold text-white" : "text-white/85"}>{item.label}</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
