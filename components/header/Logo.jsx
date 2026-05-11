"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { getHomeHrefForPathname } from "@/lib/locale";

/** Archivo PNG en `public/` (279×169). Sustituir por una versión @2× o SVG para máxima nitidez. */
const LOGO_SRC = "/logo-sys-mantenimiento.png";
const NATURAL_W = 279;
const NATURAL_H = 169;

/**
 * Logo oficial SYS Mantenimiento (asset raster optimizado por `next/image`).
 * @param {{ variant?: "default" | "compact" }} props
 */
export default function Logo({ variant = "default" }) {
  const pathname = usePathname();
  const homeHref = getHomeHrefForPathname(pathname);
  const compact = variant === "compact";

  return (
    <Link
      href={homeHref}
      className="group inline-flex shrink-0 items-center no-underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sys-yellow"
    >
      <Image
        alt="SYS Mantenimiento"
        className={
          compact ?
            "h-8 w-auto sm:h-[2.375rem]"
          : "h-10 w-auto sm:h-12 sm:w-auto lg:h-[3.35rem]"
        }
        decoding="async"
        height={NATURAL_H}
        loading={compact ? "lazy" : "eager"}
        priority={!compact}
        quality={100}
        sizes={
          compact ?
            "(max-width:640px) 140px, 160px"
          : "(max-width:640px) 200px, (max-width:1024px) 240px, 280px"
        }
        src={LOGO_SRC}
        width={NATURAL_W}
      />
    </Link>
  );
}
