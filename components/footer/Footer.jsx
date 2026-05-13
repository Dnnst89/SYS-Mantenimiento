import Logo from "@/components/header/Logo";
import { COMPANY_EMAIL } from "@/lib/companyEmail";

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

export default function Footer() {
  return (
    <footer className="relative mt-auto bg-footer-bg text-zinc-400">
      <div
        className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-sys-yellow/90 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-14 sm:px-6 lg:max-w-[1200px]">
        <div className="flex flex-col gap-10 border-b border-zinc-800 pb-12 sm:flex-row sm:items-start sm:justify-between">
          <div className="p-1">
            <Logo variant="compact" />
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
            Mantenimiento integral: fontanería, techos, jardinería, electromecánica
            y más.
          </p>
        </div>

        <h2 className="mt-12 text-xs font-semibold uppercase tracking-[0.2em] text-sys-yellow">
          Contacto
        </h2>

        <div className="mt-6 flex flex-col gap-8 text-sm leading-relaxed sm:flex-row sm:flex-wrap sm:gap-x-16 sm:gap-y-8">
          <p className="flex max-w-md gap-3">
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
              <span className="text-zinc-500">
                {" "}
                · San José, Costa Rica
              </span>
            </span>
          </p>

          <p className="flex gap-3">
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
          </p>

          <p className="flex gap-3 sm:mr-auto">
            <IconEnvelope />
            <span className="pt-0.5 text-zinc-400">
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="font-medium text-sys-yellow underline decoration-sys-yellow/30 underline-offset-4 transition hover:decoration-sys-yellow"
              >
                {COMPANY_EMAIL}
              </a>
            </span>
          </p>
        </div>

        <p className="mt-14 text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} SYS Mantenimiento. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
