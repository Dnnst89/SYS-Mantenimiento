import { Geist, Space_Grotesk } from "next/font/google";
import LocaleHtmlLang from "@/components/LocaleHtmlLang";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ToastifyHost from "@/components/ToastifyHost";
import WhatsappFloat from "@/components/WhatsappFloat";
import { siteUrl } from "@/lib/siteUrl";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display-hero",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(`${siteUrl()}/`),
  title: "SYS Mantenimiento",
  description: "Mantenimiento integral en Costa Rica",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-sys-white text-sys-black">
        <LocaleHtmlLang />
        <Header />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
        <ToastifyHost />
        <WhatsappFloat />
      </body>
    </html>
  );
}
