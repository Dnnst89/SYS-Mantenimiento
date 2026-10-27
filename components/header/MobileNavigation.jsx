"use client";

import { useEffect, useId, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function MobileNavigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const panelId = useId();
  const [headerH, setHeaderH] = useState(72);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  useLayoutEffect(() => {
    const el = document.getElementById("site-header");
    if (!el) return undefined;

    const apply = () => {
      setHeaderH(Math.ceil(el.getBoundingClientRect().height));
    };

    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const panelTransition =
    "transition-[max-height,padding-top,padding-bottom,opacity] duration-500 ease-out motion-reduce:transition-none motion-reduce:duration-0";

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="relative z-70 rounded-lg border border-white/15 bg-transparent p-2 text-white shadow-sm transition hover:border-white/25 hover:bg-white/10"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
      >
        <span className="block h-0.5 w-5 rounded-full bg-current" />
        <span className="mt-1.5 block h-0.5 w-5 rounded-full bg-current" />
        <span className="mt-1.5 block h-0.5 w-5 rounded-full bg-current" />
      </button>

      {mounted &&
        createPortal(
          <div
            id={panelId}
            role={open ? "dialog" : undefined}
            aria-modal={open ? true : undefined}
            aria-label="Menú de navegación"
            aria-hidden={!open}
            inert={open ? undefined : true}
            className={`fixed inset-x-0 bottom-0 z-60 overscroll-contain bg-white px-5 shadow-[0_-8px_30px_-12px_rgba(0,0,0,0.08)] ${panelTransition} ${
              open ?
                "overflow-y-auto pt-8 pb-[max(2rem,env(safe-area-inset-bottom,0px))] opacity-100"
              : "overflow-hidden py-0 opacity-0"
            }`}
            style={{
              top: `${headerH}px`,
              maxHeight: open ? `calc(100dvh - ${headerH}px)` : 0,
            }}
          >
            <Navbar stacked />
          </div>,
          document.body,
        )}
    </div>
  );
}
