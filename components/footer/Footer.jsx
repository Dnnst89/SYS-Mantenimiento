"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "@/components/header/Logo";
import { COMPANY_EMAIL } from "@/lib/companyEmail";
import { getFooterCopy } from "@/lib/footerContent";
import { getLocaleFromPathname, NAV_EN, NAV_ES } from "@/lib/locale";
import { getQuoteWizardHref } from "@/lib/quoteWizardContent";
import { WHATSAPP_PHONE, whatsappHref } from "@/lib/whatsappContact";

function IconHouse() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mt-0.5 h-[18px] w-[18px] shrink-0 fill-sys-yellow"
      aria-hidden
    >
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mt-0.5 h-[18px] w-[18px] shrink-0 fill-sys-yellow"
      aria-hidden
    >
      <path d="M6.62 10.79a15.45 15.45 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
    </svg>
  );
}

function IconEnvelope() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mt-0.5 h-[18px] w-[18px] shrink-0 fill-sys-yellow"
      aria-hidden
    >
      <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

function IconWhatsapp() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-[18px] w-[18px] shrink-0 fill-sys-yellow" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function formatWhatsappDisplay(digits) {
  const d = digits.replace(/\D/g, "");
  if (d.length === 11 && d.startsWith("506")) {
    return `+${d.slice(0, 3)} ${d.slice(3, 7)} ${d.slice(7)}`;
  }
  return d ? `+${d}` : "";
}

const linkClass =
  "text-zinc-400 transition hover:text-sys-yellow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sys-yellow";

export default function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const t = getFooterCopy(locale);
  const nav = locale === "en" ? NAV_EN : NAV_ES;
  const cotizarHref = getQuoteWizardHref(locale);
  const waHref = whatsappHref(locale);
  const waDisplay = formatWhatsappDisplay(WHATSAPP_PHONE);

  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto bg-sys-black text-zinc-400">
      <div
        className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-sys-yellow/90 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-14 sm:px-6 lg:max-w-[1200px]">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="p-1">
              <Logo variant="compact" />
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-sys-yellow/90">
              {t.taglineLead}
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-400">{t.taglineBody}</p>
            <p className="mt-4 max-w-md text-xs leading-relaxed text-zinc-500">{t.coverageLine}</p>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-sys-yellow">
              {t.quickLinks}
            </h2>
            <ul className="mt-5 flex flex-col gap-2.5 text-sm">
              {nav.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={cotizarHref} className={linkClass}>
                  {t.cotizarLabel}
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-sys-yellow">
              {t.servicesTitle}
            </h2>
            <ul className="mt-5 flex flex-col gap-2.5 text-sm leading-snug text-zinc-400">
              {t.services.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sys-yellow/80" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-sys-yellow">
              {t.contactTitle}
            </h2>
            <ul className="mt-5 flex flex-col gap-6 text-sm leading-relaxed">
              <li className="flex gap-3">
                <IconHouse />
                <span className="pt-0.5">
                  <a
                    href="https://maps.google.com/?q=Oficentro+Palacio,+San+José,+Costa+Rica"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-sys-yellow transition hover:text-sys-yellow-bright"
                  >
                    Oficentro Palacio
                  </a>
                  <span className="text-zinc-500"> · San José, Costa Rica</span>
                </span>
              </li>
              <li className="flex gap-3">
                <IconPhone />
                <span className="pt-0.5 text-zinc-400">
                  Tel:{" "}
                  <a
                    href="tel:+50640012999"
                    className="font-medium text-sys-yellow tabular-nums transition hover:text-sys-yellow-bright"
                  >
                    +(506) 4001-2999
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <IconWhatsapp />
                <span className="pt-0.5 text-zinc-400">
                  {t.whatsappLabel}:{" "}
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-sys-yellow tabular-nums transition hover:text-sys-yellow-bright"
                  >
                    {waDisplay}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <IconEnvelope />
                <span className="pt-0.5 text-zinc-400">
                  <a
                    href={`mailto:${COMPANY_EMAIL}`}
                    className="break-all font-medium text-sys-yellow underline decoration-sys-yellow/30 underline-offset-4 transition hover:decoration-sys-yellow"
                  >
                    {COMPANY_EMAIL}
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-10 text-center text-xs leading-relaxed text-zinc-600">
          © {year} {t.legalSuffix}. {t.rights}
        </p>
      </div>
    </footer>
  );
}
