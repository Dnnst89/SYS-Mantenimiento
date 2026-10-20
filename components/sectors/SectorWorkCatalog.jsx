"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

const CATEGORY_IDS = ["remodelaciones", "mantenimiento", "mejoras", "construccion", "otros"];

/** Acepta texto plano o un objeto { es, en } */
const txt = (value, locale) =>
  value && typeof value === "object" ? (value[locale] ?? value.es ?? "") : (value ?? "");

const ICON_PATHS = {
  client: ["M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"],
  location: [
    "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
    "M15 11a3 3 0 11-6 0 3 3 0 016 0z",
  ],
  year: ["M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"],
  services: [
    "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  ],
};

function DetailIcon({ name }) {
  return (
    <svg
      className="mt-0.5 h-5 w-5 shrink-0 text-zinc-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      {ICON_PATHS[name].map((d) => (
        <path key={d} strokeLinecap="round" strokeLinejoin="round" d={d} />
      ))}
    </svg>
  );
}

export default function SectorWorkCatalog({
  title,
  subtitle,
  items = [],
  translations = {},
  locale = "es",
}) {
  const c = translations?.catalog ?? {};

  const labels = {
    todos: c.all || "Todos",
    remodelaciones: c.remodeling || "Remodelaciones",
    mantenimiento: c.maintenance || "Mantenimiento",
    mejoras: c.improvements || "Mejoras",
    construccion: c.construction || "Construcción",
    otros: c.others || "Otros",
  };

  const [activeCategory, setActiveCategory] = useState("todos");
  const [sortBy, setSortBy] = useState("recientes");

  // Solo mostramos categorías que tienen al menos un proyecto
  const availableCategories = useMemo(() => {
    const present = new Set(items.map((p) => p.category));
    return ["todos", ...CATEGORY_IDS.filter((id) => present.has(id))];
  }, [items]);

  // Filtrar + ordenar sobre una COPIA (no se modifica el array original)
  const visibleItems = useMemo(() => {
    const filtered =
      activeCategory === "todos" ? items : items.filter((p) => p.category === activeCategory);

    return [...filtered].sort((a, b) => {
      const yearA = parseInt(a.year, 10) || 0;
      const yearB = parseInt(b.year, 10) || 0;
      return sortBy === "recientes" ? yearB - yearA : yearA - yearB;
    });
  }, [items, activeCategory, sortBy]);

  return (
    <section
      className="border-b border-zinc-200/90 bg-surface-muted/50"
      aria-labelledby="sector-catalog-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:max-w-[1200px] lg:py-14">
        <div className="max-w-3xl">
          <h2
            id="sector-catalog-heading"
            className="text-2xl font-bold tracking-tight text-sys-black sm:text-3xl"
          >
            {title}
          </h2>
          {subtitle && subtitle !== "..." && (
            <p className="mt-3 text-pretty text-base leading-relaxed text-zinc-600 sm:text-[1.0625rem]">
              {subtitle}
            </p>
          )}
        </div>

        {/* Filtros y ordenamiento */}
        <div className="mt-10 flex flex-col gap-4 border-b border-zinc-200 pb-6 md:flex-row md:items-center md:justify-between md:gap-2">
          {availableCategories.length > 2 ? (
            <div className="flex flex-wrap gap-2">
              {availableCategories.map((id) => {
                const isActive = activeCategory === id;
                return (
                  <button
                    key={id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveCategory(id)}
                    className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-sys-yellow text-black shadow-sm"
                        : "border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50"
                    }`}
                  >
                    {labels[id] ?? id}
                  </button>
                );
              })}
            </div>
          ) : (
            <span />
          )}

          <div className="flex items-center gap-2 self-end md:self-auto">
            <label htmlFor="sector-sort" className="text-sm font-medium text-zinc-500">
              {c.orderBy || "Ordenar por:"}
            </label>
            <select
              id="sector-sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 outline-none transition-all"
            >
              <option value="recientes">{c.mostRecent || "Más recientes"}</option>
              <option value="antiguos">{c.oldest || "Más antiguos"}</option>
            </select>
          </div>
        </div>

        {/* Listado */}
        <div className="mt-8 flex flex-col gap-8 pb-16">
          {visibleItems.length === 0 ? (
            <p className="rounded-2xl border border-dashed border-zinc-300 bg-white p-10 text-center text-zinc-500">
              {locale === "en"
                ? "There are no projects in this category yet."
                : "Aún no hay proyectos en esta categoría."}
            </p>
          ) : (
            visibleItems.map((proyecto, index) => (
              <TarjetaProyecto
                key={proyecto.id || index}
                proyecto={proyecto}
                locale={locale}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

function TarjetaProyecto({ proyecto, locale }) {
  const galeria =
    proyecto.images?.length > 0 ? proyecto.images : [proyecto.src].filter(Boolean);
  const [activa, setActiva] = useState(0);
  const variasFotos = galeria.length > 1;

  const sig = () => setActiva((i) => (i + 1) % galeria.length);
  const ant = () => setActiva((i) => (i - 1 + galeria.length) % galeria.length);

  const t = locale === "en"
    ? { client: "Client", location: "Location", year: "Year", services: "Services performed", prev: "Previous image", next: "Next image", show: "Show image" }
    : { client: "Cliente", location: "Ubicación", year: "Año", services: "Servicios realizados", prev: "Imagen anterior", next: "Imagen siguiente", show: "Ver imagen" };

  const titulo = txt(proyecto.title, locale);
  const detalles = [
    { icon: "client", label: t.client, value: txt(proyecto.client, locale) },
    { icon: "location", label: t.location, value: txt(proyecto.location, locale) },
    { icon: "year", label: t.year, value: proyecto.year },
    { icon: "services", label: t.services, value: txt(proyecto.services, locale) },
  ].filter((d) => d.value);

  const arrowClass =
    "absolute top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 font-bold text-zinc-800 shadow-sm backdrop-blur-sm transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-sys-yellow";

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-md transition-shadow hover:shadow-lg lg:flex-row">
      {/* Galería */}
      <div className="flex w-full flex-col gap-3 bg-zinc-50 p-4 lg:w-1/2">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-zinc-200">
          {galeria[activa] && (
            <Image
              key={galeria[activa]}
              src={galeria[activa]}
              alt={proyecto.alt || titulo}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          )}
          {variasFotos && (
            <>
              <button type="button" onClick={ant} aria-label={t.prev} className={`${arrowClass} left-2`}>
                &lt;
              </button>
              <button type="button" onClick={sig} aria-label={t.next} className={`${arrowClass} right-2`}>
                &gt;
              </button>
            </>
          )}
        </div>

        {variasFotos && (
          <div className="flex gap-2 overflow-x-auto pb-1">
            {galeria.slice(0, 5).map((img, i) => (
              <button
                key={img}
                type="button"
                onClick={() => setActiva(i)}
                aria-label={`${t.show} ${i + 1}`}
                aria-current={i === activa}
                className={`relative h-12 w-16 shrink-0 overflow-hidden rounded-md border-2 transition-all ${
                  i === activa
                    ? "scale-105 border-sys-yellow"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <Image src={img} alt="" fill sizes="64px" className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Datos */}
      <div className="flex w-full flex-col justify-center gap-5 p-6 sm:p-8 lg:w-1/2 lg:p-10">
        <div>
          {proyecto.categoryLabel && (
            <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-sys-yellow">
              {txt(proyecto.categoryLabel, locale)}
            </span>
          )}
          <h3 className="text-xl font-bold text-zinc-900 sm:text-2xl">{titulo}</h3>
        </div>

        <dl className="flex flex-col gap-3.5 text-sm text-zinc-600">
          {detalles.map((d) => (
            <div key={d.icon} className="flex items-start gap-3">
              <DetailIcon name={d.icon} />
              <div>
                <dt className="inline font-semibold text-zinc-800">{d.label}: </dt>
                <dd className="inline font-medium">{d.value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}