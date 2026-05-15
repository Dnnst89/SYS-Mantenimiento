import { siteUrl } from "@/lib/siteUrl";

/** @param {{ locale: 'es' | 'en' }} props */
export default function AboutPageJsonLd({ locale }) {
  const base = siteUrl();
  const path = locale === "en" ? "/en/about" : "/nosotros";
  const pageUrl = `${base}${path}`;
  const websiteId = `${base}/#website`;
  const orgId = `${base}/#organization`;
  const webpageId = `${pageUrl}#webpage`;

  const graph = [
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: `${base}/`,
      name: "SYS Mantenimiento",
      inLanguage: ["es-CR", "en"],
      publisher: { "@id": orgId },
    },
    {
      "@type": "Organization",
      "@id": orgId,
      name: "SYS Mantenimiento",
      url: base,
      description:
        "Mantenimiento integral y servicios a instalaciones en Costa Rica — comprehensive, coordinated multi-trade maintenance.",
      areaServed: {
        "@type": "Country",
        name: "Costa Rica",
      },
    },
    {
      "@type": "AboutPage",
      "@id": webpageId,
      url: pageUrl,
      name:
        locale === "en" ?
          "About SYS Mantenimiento"
        : "Nosotros — SYS Mantenimiento",
      description:
        locale === "en" ?
          "Meet the SYS Mantenimiento team: mission, vision, values, and how we deliver comprehensive maintenance across Costa Rica."
        : "Conocé al equipo SYS Mantenimiento: misión, visión, valores y cómo ejecutamos mantenimiento integral en Costa Rica.",
      inLanguage: locale === "en" ? "en" : "es-CR",
      isPartOf: { "@id": websiteId },
      about: { "@id": orgId },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: locale === "en" ? "Home" : "Inicio",
          item: `${base}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: locale === "en" ? "About us" : "Nosotros",
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }}
    />
  );
}
