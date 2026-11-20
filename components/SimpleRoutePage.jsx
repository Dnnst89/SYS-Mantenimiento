import PageBanner from "@/components/header/PageBanner";

export default function SimpleRoutePage({ title, description, crumbs, showBreadcrumb = false }) {
  return (
    <div className="flex flex-1 flex-col">
      <PageBanner crumbs={crumbs} showBreadcrumb={showBreadcrumb} title={title} />
      <main className="flex-1 bg-surface-muted">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:max-w-[1200px]">
          <article className="rounded-2xl border border-zinc-200/80 bg-white p-8 shadow-sm sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-sys-black sm:text-3xl">
              <span className="text-sys-yellow">—</span>{" "}
              <span className="text-sys-black">{title}</span>
            </h2>
            {description ?
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-zinc-600">
                {description}
              </p>
            : <p className="mt-5 text-zinc-500">Contenido próximamente.</p>}
          </article>
        </div>
      </main>
    </div>
  );
}
