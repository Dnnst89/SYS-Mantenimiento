import { StrokeIcon } from "@/components/icons/StrokeIcon";

import ProjectImageSlider from "./ProjectImageSlider";

const COPY = {
  es: {
    client: "Cliente",
    location: "Ubicación",
    year: "Año",
    services: "Servicios realizados",
    previous: "Imagen anterior",
    next: "Imagen siguiente",
  },
  en: {
    client: "Client",
    location: "Location",
    year: "Year",
    services: "Services performed",
    previous: "Previous image",
    next: "Next image",
  },
};

const DETAIL_ICON_PATHS = {
  client: ["M16 7a4 4 0 11-8 0 4 4 0 018 0z", "M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"],
  location: [
    "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
    "M15 11a3 3 0 11-6 0 3 3 0 016 0z",
  ],
  year: ["M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"],
  services: [
    "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  ],
};

/**
 * @param {{
 *   project: {
 *     id: string; categoryLabel: string; title: string; client: string;
 *     location: string; year: string; services: string;
 *     src: string; images: string[]; alt: string;
 *   };
 *   locale: 'es' | 'en';
 * }} props
 */
export default function ProjectCard({ project, locale }) {
  const copy = COPY[locale] ?? COPY.es;
  const images = project.images?.length > 0 ? project.images : [project.src].filter(Boolean);

  const details = [
    { icon: "client", label: copy.client, value: project.client },
    { icon: "location", label: copy.location, value: project.location },
    { icon: "year", label: copy.year, value: project.year },
    { icon: "services", label: copy.services, value: project.services },
  ].filter((detail) => detail.value);

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-md transition-shadow hover:shadow-lg lg:flex-row">
      <div className="w-full min-w-0 bg-zinc-50 p-4 lg:w-1/2">
        <ProjectImageSlider
          images={images}
          alt={project.alt || project.title}
          labels={{ previous: copy.previous, next: copy.next }}
        />
      </div>

      <div className="flex w-full min-w-0 flex-col justify-center gap-5 p-6 sm:p-8 lg:w-1/2 lg:p-10">
        <div>
          {project.categoryLabel && (
            <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-sys-yellow">
              {project.categoryLabel}
            </span>
          )}
          <h3 className="text-xl font-bold text-zinc-900 sm:text-2xl">{project.title}</h3>
        </div>

        <dl className="flex flex-col gap-3.5 text-sm text-zinc-600">
          {details.map((detail) => (
            <div key={detail.icon} className="flex items-start gap-3">
              <StrokeIcon
                name={detail.icon}
                paths={DETAIL_ICON_PATHS[detail.icon]}
                className="mt-0.5 h-5 w-5 shrink-0 text-zinc-400"
                strokeWidth={2}
              />
              <div>
                <dt className="inline font-semibold text-zinc-800">{detail.label}: </dt>
                <dd className="inline font-medium">{detail.value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}