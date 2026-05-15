import AboutPageView from "@/components/about/AboutPageView";
import AboutPageJsonLd from "@/components/seo/AboutPageJsonLd";

const title = "Nosotros — Misión, visión y valores | SYS Mantenimiento";
const description =
  "Equipo y cultura de SYS Mantenimiento: mantenimiento integral en Costa Rica (Valle Central y despliegue nacional). Misión, visión, valores y proceso con multidisciplina coordinada — fontanería, electromecánica, techos y más.";

export const metadata = {
  title,
  description,
  keywords: [
    "SYS Mantenimiento",
    "nosotros SYS Mantenimiento",
    "mantenimiento integral Costa Rica",
    "mantenimiento empresas Costa Rica",
    "empresa mantenimiento Valle Central",
    "mantenimiento industrial Costa Rica",
    "misión visión mantenimiento",
    "multidisciplina mantenimiento",
  ],
  alternates: {
    canonical: "/nosotros",
    languages: {
      "es-CR": "/nosotros",
      en: "/en/about",
      "x-default": "/nosotros",
    },
  },
  openGraph: {
    title,
    description,
    url: "/nosotros",
    siteName: "SYS Mantenimiento",
    locale: "es_CR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function NosotrosPage() {
  return (
    <>
      <AboutPageJsonLd locale="es" />
      <AboutPageView locale="es" />
    </>
  );
}
