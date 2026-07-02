import Link from "next/link";

function ArrowRight({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function PhoneIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.11a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** @param {{ title: string; subtitle: string; cta: string; href: string }} props */
export default function SectorPageBottomCta({ title, subtitle, cta, href }) {
  return (
    <div className="mx-auto mt-12 w-full max-w-6xl px-4 sm:mt-14 sm:px-6 lg:mt-16 lg:max-w-[1200px]">
      <div
        className="relative overflow-hidden rounded-2xl bg-sys-black px-5 py-8 shadow-lg sm:px-8 sm:py-9 lg:px-10 lg:py-10"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.04) 25%, transparent 25%),
            linear-gradient(225deg, rgba(255,255,255,0.03) 25%, transparent 25%),
            linear-gradient(45deg, rgba(255,255,255,0.03) 25%, transparent 25%)`,
          backgroundSize: "28px 28px",
          backgroundPosition: "0 0, 14px 0, 0 14px",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-sys-black/40 to-transparent" aria-hidden />
        <div className="relative z-10 flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="flex max-w-xl gap-4 sm:gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sys-yellow text-sys-black shadow-md sm:h-16 sm:w-16">
              <PhoneIcon className="h-6 w-6 sm:h-7 sm:w-7" />
            </div>
            <div>
              <p className="text-lg font-bold leading-snug text-white sm:text-xl">{title}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-white/85 sm:text-[15px]">
                {subtitle}
              </p>
            </div>
          </div>
          <Link
            href={href}
            className="inline-flex shrink-0 items-center gap-2 rounded-[10px] bg-sys-yellow px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-sys-black shadow-md transition hover:bg-sys-yellow-bright"
          >
            {cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
