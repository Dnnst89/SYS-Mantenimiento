/** Español (sin prefijo) ↔ Inglés bajo `/en`. */

const ES_TO_EN = {
  "/": "/en",
  "/proyectos": "/en/projects",
  "/servicios": "/en/services",
  "/nosotros": "/en/about",
  "/proveedores": "/en/suppliers",
  "/contacto": "/en/contact",
};

/** Ruta después de `/en`, con slash inicial */
const EN_SUB_TO_ES = {
  "/": "/",
  "/projects": "/proyectos",
  "/services": "/servicios",
  "/about": "/nosotros",
  "/suppliers": "/proveedores",
  "/contact": "/contacto",
};

export function getLocaleFromPathname(pathname) {
  const p = normalizePath(pathname);
  if (p === "/en" || p.startsWith("/en/")) return "en";
  return "es";
}

export function normalizePath(pathname) {
  if (!pathname) return "/";
  const t = pathname.replace(/\/+$/, "") || "/";
  return t;
}

export function getAlternateLocalePath(pathname) {
  const p = normalizePath(pathname);
  if (getLocaleFromPathname(p) === "en") {
    if (p === "/en") return "/";
    const sub = p.slice(3) || "/";
    const key = sub.startsWith("/") ? sub : `/${sub}`;
    return EN_SUB_TO_ES[key] ?? "/";
  }
  return ES_TO_EN[p] ?? "/en";
}

export function getHomeHrefForPathname(pathname) {
  return getLocaleFromPathname(pathname) === "en" ? "/en" : "/";
}

export const NAV_ES = [
  { href: "/proyectos", label: "Proyectos" },
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/proveedores", label: "Proveedores" },
  { href: "/contacto", label: "Contacto" },
];

export const NAV_EN = [
  { href: "/en/projects", label: "Projects" },
  { href: "/en/services", label: "Services" },
  { href: "/en/about", label: "About" },
  { href: "/en/suppliers", label: "Suppliers" },
  { href: "/en/contact", label: "Contact" },
];
