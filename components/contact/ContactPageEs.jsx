import Link from "next/link";

import { ContactCard, IconMail, IconPhone, IconPin } from "@/components/contact/ContactBlocks";
import ContactEmailRow from "@/components/contact/ContactEmailRow";
import ContactFormEs from "@/components/contact/ContactFormEs";
import PageBanner from "@/components/header/PageBanner";

export default function ContactPageEs() {
  return (
    <div className="flex flex-1 flex-col">
      <PageBanner
        title="Contacto"
        crumbs={[
          { href: "/", label: "Inicio" },
          { label: "Contacto" },
        ]}
      />
      <main className="relative flex-1 overflow-hidden bg-gradient-to-b from-zinc-100 via-zinc-50/90 to-white">
        <div
          className="pointer-events-none absolute -right-24 top-0 h-[420px] w-[420px] rounded-full bg-sys-yellow/12 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-32 bottom-0 h-[320px] w-[320px] rounded-full bg-zinc-300/25 blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:max-w-[1200px] lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14 lg:items-start">
            <div className="lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-sys-yellow">Escribinos</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
                Contanos qué necesitás mantener.
              </h2>
              <p className="mt-4 max-w-md text-pretty text-[15px] leading-relaxed text-zinc-600 sm:text-base">
                Desde una visita correctiva hasta planes periódicos para edificios o plantas: respondemos
                con próximos pasos claros y plazos realistas.
              </p>

              <ul className="mt-8 space-y-3 text-sm text-zinc-700">
                {[
                  "Cotizaciones ordenadas y alcance transparente",
                  "Equipos alineados a obra residencial, comercial, industrial e institucional",
                  "Los mismos datos de contacto que en todo el sitio",
                ].map((line) => (
                  <li key={line} className="flex gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sys-yellow"
                      aria-hidden
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 space-y-4">
                <ContactCard icon={IconPin} title="Oficina">
                  <a
                    href="https://maps.google.com/?q=Oficentro+Palacio,+San+José,+Costa+Rica"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition hover:text-sys-yellow hover:decoration-sys-yellow/50"
                  >
                    Oficentro Palacio
                  </a>
                  <span className="text-zinc-500"> · San José, Costa Rica</span>
                </ContactCard>
                <ContactCard icon={IconPhone} title="Teléfono">
                  <a
                    href="tel:+50640012999"
                    className="font-medium tabular-nums text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition hover:text-sys-yellow hover:decoration-sys-yellow/50"
                  >
                    +(506) 4001-2999
                  </a>
                </ContactCard>
                <ContactCard icon={IconMail} title="Correo">
                  <ContactEmailRow locale="es" />
                </ContactCard>
              </div>

              <p className="mt-10 text-sm text-zinc-500">
                ¿Preferís inglés?{" "}
                <Link
                  href="/en/contact"
                  className="font-medium text-zinc-800 underline decoration-zinc-300 underline-offset-4 hover:text-sys-yellow hover:decoration-sys-yellow/50"
                >
                  Contact (EN)
                </Link>
              </p>
            </div>

            <div className="lg:col-span-7">
              <ContactFormEs />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
