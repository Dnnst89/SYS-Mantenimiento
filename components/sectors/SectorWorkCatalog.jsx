"use client";

import { useState } from "react";
import Image from "next/image";

const CATEGORIES = [
  { id: "todos", label: "Todos" },
  { id: "remodelaciones", label: "Remodelaciones" },
  { id: "mantenimiento", label: "Mantenimiento" },
  { id: "mejoras", label: "Mejoras" },
  { id: "construccion", label: "Construcción" },
  { id: "otros", label: "Otros" }
];

export default function SectorWorkCatalog({ title, subtitle, items = [] }) {
  // Estado para controlar la categoría seleccionada (Por defecto: "Todos")
  const [activeCategory, setActiveCategory] = useState("todos");
  // Estado para controlar el ordenamiento
  const [sortBy, setSortBy] = useState("recientes");


  return (
    <section
      className="border-b border-zinc-200/90 bg-surface-muted/50"
      aria-labelledby="sector-catalog-heading"
    >

              {/* NUEVA BARRA DE FILTROS Y ORDENAMIENTO (MOCKUP) */}
        <div className="mt-10 flex flex-col gap-4 border-b border-zinc-200 pb-6 md:flex-row md:items-center md:justify-between md:gap-2">
          
          {/* Botones de Categorías a la izquierda */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-sys-yellow text-black shadow-sm"
                      : "bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-50"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Selector de Ordenamiento a la derecha */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <span className="text-sm font-medium text-zinc-500">Ordenar por:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 outline-none transition-all focus:border-sys-yellow"
            >
              <option value="recientes">Más recientes</option>
              <option value="antiguos">Más antiguos</option>
            </select>
          </div>

        </div>


      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:max-w-[1200px] lg:py-14">
        <div className="max-w-3xl">
          <h2
            id="sector-catalog-heading"
            className="text-2xl font-bold tracking-tight text-sys-black sm:text-3xl"
          >
            {title}
          </h2>
          <p className="mt-3 text-pretty text-base leading-relaxed text-zinc-600 sm:text-[1.0625rem]">
            {subtitle}
          </p>
        </div>

        {/* LISTADO DE PROYECTOS REDISEÑADO A DOS COLUMNAS */}
        <div className="mt-8 flex flex-col gap-8 pb-16">
          {items
            .filter((item) => activeCategory === "todos" || item.category?.toLowerCase() === activeCategory)
            /* Nota: Aquí puedes aplicar la lógica de ordenamiento con .sort() si tus objetos traen la propiedad 'fecha' o 'año' */
            .map((proyecto, index) => {
              // Simulación de mini-galería usando la imagen principal o secundarias del objeto
              const galeria = proyecto.images || [proyecto.src, proyecto.src, proyecto.src];
              
              return (
                <div 
                  key={proyecto.id || index}
                  className="flex flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-md transition-all hover:shadow-lg lg:flex-row"
                >
                  
                  {/* Columna Izquierda: Galería / Imágenes (50% en Desktop) */}
                  <div className="relative flex flex-col w-full lg:w-1/2 bg-zinc-50 p-4 justify-between gap-3">
                    {/* Imagen Principal Grande con Flechas */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-zinc-200">
                      <Image
                        src={proyecto.src || "/placeholder.jpg"}
                        alt={proyecto.alt || "Imagen del proyecto"}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      {/* Flechas de Navegación del Carrusel */}
                      <button className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 font-bold text-zinc-800 shadow-sm backdrop-blur-sm transition-all hover:bg-white">
                        &lt;
                      </button>
                      <button className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 font-bold text-zinc-800 shadow-sm backdrop-blur-sm transition-all hover:bg-white">
                        &gt;
                      </button>
                    </div>

                    {/* Fila de Thumbnails (Miniaturas inferiores) */}
                    <div className="flex gap-2 overflow-x-auto pb-1">
                      {galeria.slice(0, 5).map((imgUrl, thumbIdx) => (
                        <div 
                          key={thumbIdx}
                          className={`relative h-12 w-16 shrink-0 cursor-pointer overflow-hidden rounded-md border-2 ${
                            thumbIdx === 0 ? "border-sys-yellow" : "border-transparent"
                          }`}
                        >
                          <Image
                            src={imgUrl || "/placeholder.jpg"}
                            alt={`Miniatura ${thumbIdx + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Columna Derecha: Datos y Detalles (50% en Desktop) */}
                  <div className="flex w-full flex-col justify-between p-6 sm:p-8 lg:w-1/2">
                    <div>
                      {/* Categoría superior destacada */}
                      <span className="text-xs font-bold tracking-wider text-sys-yellow uppercase block mb-2">
                        {proyecto.categoryLabel || "Remodelación Completa"}
                      </span>
                      
                      {/* Nombre del Proyecto */}
                      <h3 className="text-xl font-bold text-zinc-900 sm:text-2xl">
                        {proyecto.title || "Nombre del Proyecto"}
                      </h3>

                      {/* Lista de Detalles con Iconos */}
                      <div className="mt-5 flex flex-col gap-3.5 text-sm text-zinc-600">
                        {/* Cliente */}
                        <div className="flex items-center gap-3">
                          <svg className="h-5 w-5 text-zinc-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                          <span className="font-medium"><strong className="text-zinc-800 font-semibold">Cliente:</strong> {proyecto.client || "Juan Pérez"}</span>
                        </div>
                        {/* Ubicación */}
                        <div className="flex items-center gap-3">
                          <svg className="h-5 w-5 text-zinc-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                          <span className="font-medium"><strong className="text-zinc-800 font-semibold">Ubicación:</strong> {proyecto.location || "Escazú, San José"}</span>
                        </div>
                        {/* Año */}
                        <div className="flex items-center gap-3">
                          <svg className="h-5 w-5 text-zinc-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                          <span className="font-medium"><strong className="text-zinc-800 font-semibold">Año:</strong> {proyecto.year || "2024"}</span>
                        </div>
                        {/* Servicios */}
                        <div className="flex items-start gap-3">
                          <svg className="h-5 w-5 text-zinc-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                          <span className="font-medium"><strong className="text-zinc-800 font-semibold">Servicios realizados:</strong> {proyecto.services || "Mantenimiento general e instalación estructural."}</span>
                        </div>
                      </div>
                    </div>

                    {/* Enlace final interactivo */}
                    <div className="mt-6 pt-4 border-t border-zinc-100 lg:mt-0">
                      <a href={`/proyectos/${proyecto.id || index}`} className="inline-flex items-center font-bold text-sys-yellow hover:text-sys-yellow-bright transition-colors group">
                        Ver más imágenes 
                        <span className="ml-1 transform transition-transform group-hover:translate-x-1">→</span>
                      </a>
                    </div>
                  </div>

                </div>
              );
            })}
        </div>


      </div>
    </section>
  );
}
