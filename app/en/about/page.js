import AboutPageView from "@/components/about/AboutPageView";
import AboutPageJsonLd from "@/components/seo/AboutPageJsonLd";

const title = "About us — Mission, vision & values | SYS Mantenimiento";
const description =
  "Meet SYS Mantenimiento: comprehensive maintenance in Costa Rica (Greater Metropolitan Area and national deployments). Mission, vision, values — coordinated multi-trade services including plumbing, electromechanical, roofing, and more.";

export const metadata = {
  title,
  description,
  keywords: [
    "SYS Mantenimiento",
    "about SYS maintenance Costa Rica",
    "facility maintenance Costa Rica",
    "industrial maintenance Costa Rica",
    "building maintenance services Costa Rica",
    "mission vision maintenance company",
    "multi-trade maintenance",
  ],
  alternates: {
    canonical: "/en/about",
    languages: {
      "es-CR": "/nosotros",
      en: "/en/about",
      "x-default": "/nosotros",
    },
  },
  openGraph: {
    title,
    description,
    url: "/en/about",
    siteName: "SYS Mantenimiento",
    locale: "en_US",
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

export default function EnglishAboutPage() {
  return (
    <>
      <AboutPageJsonLd locale="en" />
      <AboutPageView locale="en" />
    </>
  );
}
