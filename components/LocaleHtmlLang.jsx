"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { getLocaleFromPathname } from "@/lib/locale";

/** Sincroniza `<html lang>` con la URL (es/en). */
export default function LocaleHtmlLang() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang =
      getLocaleFromPathname(pathname) === "en" ? "en" : "es";
  }, [pathname]);

  return null;
}
