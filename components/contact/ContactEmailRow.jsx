"use client";

import { useState } from "react";
import { toast } from "react-toastify";

import { COMPANY_EMAIL } from "@/lib/companyEmail";

function IconCopy({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function IconCheck({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** @param {{ locale?: 'es' | 'en' }} props */
export default function ContactEmailRow({ locale = "es" }) {
  const [justCopied, setJustCopied] = useState(false);

  const copyLabel = locale === "en" ? "Copy email to clipboard" : "Copiar correo al portapapeles";
  const copiedToast =
    locale === "en" ? "Email copied to clipboard." : "Correo copiado al portapapeles.";
  const copiedShort = locale === "en" ? "Copied" : "Copiado";

  async function copy() {
    try {
      await navigator.clipboard.writeText(COMPANY_EMAIL);
      toast.success(copiedToast, { autoClose: 2500 });
      setJustCopied(true);
      setTimeout(() => setJustCopied(false), 2000);
    } catch {
      toast.error(
        locale === "en" ?
          "Could not copy. Select the address and copy manually (Ctrl+C)."
        : "No se pudo copiar. Seleccioná el correo y copiá manualmente (Ctrl+C).",
      );
    }
  }

  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-start sm:gap-x-3 sm:gap-y-2">
      <a
        href={`mailto:${COMPANY_EMAIL}`}
        className="min-w-0 break-all font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition hover:text-sys-yellow hover:decoration-sys-yellow/50"
      >
        {COMPANY_EMAIL}
      </a>
      <button
        type="button"
        onClick={copy}
        className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-700 transition hover:border-sys-yellow/60 hover:bg-sys-yellow/10 hover:text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sys-yellow"
        aria-label={copyLabel}
      >
        {justCopied ?
          <>
            <IconCheck className="h-3.5 w-3.5 text-emerald-600" />
            <span className="text-emerald-700">{copiedShort}</span>
          </>
        : <>
            <IconCopy className="h-3.5 w-3.5" />
            <span>{locale === "en" ? "Copy" : "Copiar"}</span>
          </>
        }
      </button>
    </div>
  );
}
