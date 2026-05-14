import { SECTOR_LIST } from "@/lib/sectors";

/**
 * Migas para la barra global bajo el header (no usar en `/` ni `/en`).
 * @param {string} pathname
 * @returns {{ locale: 'es' | 'en'; items: { href?: string; label: string }[] } | null}
 */
export function getBreadcrumbTrail(pathname) {
  if (!pathname || typeof pathname !== "string") return null;
  const clean = pathname.replace(/\/$/, "") || "/";
  if (clean === "/" || clean === "/en") return null;

  const isEn = clean.startsWith("/en");
  const homeHref = isEn ? "/en" : "/";
  const homeLabel = isEn ? "Home" : "Inicio";
  const home = { href: homeHref, label: homeLabel };

  const after = isEn ? clean.slice(3) || "/" : clean;

  /** @type {{ href?: string; label: string }[]} */
  let rest = [];

  if (!isEn) {
    switch (after) {
      case "/contacto":
        rest = [{ label: "Contacto" }];
        break;
      case "/cotizar":
        rest = [{ label: "Cotización guiada" }];
        break;
      case "/nosotros":
        rest = [{ label: "Nosotros" }];
        break;
      case "/servicios":
        rest = [{ label: "Servicios" }];
        break;
      case "/proveedores":
        rest = [{ label: "Proveedores" }];
        break;
      default:
        if (after.startsWith("/sectores/")) {
          const slug = after.slice("/sectores/".length);
          const sector = SECTOR_LIST.find((s) => s.slugEs === slug);
          rest = [{ label: sector?.titles.es ?? humanizeSlug(slug) }];
        } else {
          rest = fallbackTrail(after);
        }
    }
  } else {
    switch (after) {
      case "/about":
        rest = [{ label: "About" }];
        break;
      case "/contact":
        rest = [{ label: "Contact" }];
        break;
      case "/cotizar":
        rest = [{ label: "Guided quote" }];
        break;
      case "/services":
        rest = [{ label: "Services" }];
        break;
      case "/suppliers":
        rest = [{ label: "Suppliers" }];
        break;
      default:
        if (after.startsWith("/sectors/")) {
          const slug = after.slice("/sectors/".length);
          const sector = SECTOR_LIST.find((s) => s.slugEn === slug);
          rest = [{ label: sector?.titles.en ?? humanizeSlug(slug) }];
        } else {
          rest = fallbackTrail(after);
        }
    }
  }

  if (!rest.length) return null;
  return { locale: isEn ? "en" : "es", items: [home, ...rest] };
}

/** @param {string} path */
function fallbackTrail(path) {
  const segments = path.split("/").filter(Boolean);
  const last = segments[segments.length - 1];
  if (!last) return [];
  return [{ label: humanizeSlug(decodeURIComponent(last)) }];
}

function humanizeSlug(slug) {
  return slug
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
