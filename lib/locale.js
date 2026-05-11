/** Español (sin prefijo) ↔ Inglés bajo `/en`. */

import { alternateLocalePathForSectorPathname } from "@/lib/sectors";

const ES_TO_EN = {
  "/": "/en",
  "/proyectos": "/en/projects",
  "/servicios": "/en/services",
  "/nosotros": "/en/about",
  "/proveedores": "/en/suppliers",
  "/contacto": "/en/contact",
};

const EN_SUB_TO_ES = {
  "/": "/",
  "/projects": "/proyectos",
  "/services": "/servicios",
  "/about": "/nosotros",
  "/suppliers": "/proveedores",
  "/contact": "/contacto",
};

function normalizePath(pathname) {
  if (!pathname) return "/";
  return pathname.replace(/\/+$/, "") || "/";
}

export function getLocaleFromPathname(pathname) {
  const p = normalizePath(pathname);
  if (p === "/en" || p.startsWith("/en/")) return "en";
  return "es";
}

export function getAlternateLocalePath(pathname) {
  const p = normalizePath(pathname);
  const sectorAlt = alternateLocalePathForSectorPathname(p);
  if (sectorAlt) return sectorAlt;

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
