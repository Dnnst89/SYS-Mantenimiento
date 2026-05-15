const DEFAULT_SITE = "https://sysmantenimiento.com";

/** Base URL for canonical, Open Graph, and JSON-LD (override with NEXT_PUBLIC_SITE_URL in prod). */
export function siteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return DEFAULT_SITE;
  return raw.replace(/\/$/, "");
}
