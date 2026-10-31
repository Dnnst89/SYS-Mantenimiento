"use client";

import { useMemo, useState } from "react";

import ProjectCard from "./ProjectCard";

const CATEGORY_IDS = ["remodelaciones", "mantenimiento", "mejoras", "construccion", "otros"];

export default function SectorWorkCatalog({
  title,
  subtitle,
  items = [],
  translations = {},
  locale = "es",
}) {
  const copy = translations?.catalog ?? {};

  const labels = {
    all: copy.all || "Todos",
    remodelaciones: copy.remodeling || "Remodelaciones",
    mantenimiento: copy.maintenance || "Mantenimiento",
    mejoras: copy.improvements || "Mejoras",
    construccion: copy.construction || "Construcción",
    otros: copy.others || "Otros",
  };

  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  // Only show categories that have at least one project
  const availableCategories = useMemo(() => {
    const present = new Set(items.map((project) => project.category));
    return ["all", ...CATEGORY_IDS.filter((id) => present.has(id))];
  }, [items]);

  // Filter + sort over a copy (never mutate the original array)
  const visibleProjects = useMemo(() => {
    const filtered =
      activeCategory === "all"
        ? items
        : items.filter((project) => project.category === activeCategory);

    return [...filtered].sort((a, b) => {
      const yearA = parseInt(a.year, 10) || 0;
      const yearB = parseInt(b.year, 10) || 0;
      return sortBy === "newest" ? yearB - yearA : yearA - yearB;
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
              {copy.orderBy || "Ordenar por:"}
            </label>
            <select
              id="sector-sort"
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 outline-none transition-all"
            >
              <option value="newest">{copy.mostRecent || "Más recientes"}</option>
              <option value="oldest">{copy.oldest || "Más antiguos"}</option>
            </select>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-8 pb-16">
          {visibleProjects.length === 0 ? (
            <p className="rounded-2xl border border-dashed border-zinc-300 bg-white p-10 text-center text-zinc-500">
              {locale === "en"
                ? "There are no projects in this category yet."
                : "Aún no hay proyectos en esta categoría."}
            </p>
          ) : (
            visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} locale={locale} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}