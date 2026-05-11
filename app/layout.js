import { Geist } from "next/font/google";
import LocaleHtmlLang from "@/components/LocaleHtmlLang";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "SYS Mantenimiento",
  description: "Mantenimiento integral en Costa Rica",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-sys-white text-sys-black">
        <LocaleHtmlLang />
        <Header />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
