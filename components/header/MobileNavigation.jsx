"use client";

import { useEffect, useId, useState } from "react";
import Navbar from "./Navbar";

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="rounded-lg border border-zinc-200 bg-white p-2 text-zinc-800 shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
      >
        <span className="block h-0.5 w-5 rounded-full bg-current" />
        <span className="mt-1.5 block h-0.5 w-5 rounded-full bg-current" />
        <span className="mt-1.5 block h-0.5 w-5 rounded-full bg-current" />
      </button>

      <div
        id={panelId}
        hidden={!open}
        className={
          open ?
            "fixed inset-0 top-[65px] z-40 border-t border-zinc-100 bg-white px-5 py-8"
          : "hidden"
        }
      >
        <Navbar className="flex flex-col items-stretch gap-8 [&_ul]:w-full [&_ul]:flex-col [&_ul]:items-start [&_ul]:gap-5" />
      </div>
    </div>
  );
}
