/**
 * @param {{
 *   detail: {
 *     leadHeading: string;
 *     intro: string;
 *     approachTitle: string;
 *     approachItems: string[];
 *     servicesTitle: string;
 *     services: string[];
 *     processTitle: string;
 *     processSteps: { title: string; body: string }[];
 *   };
 * }} props
 */
export default function SectorPageExperience({ detail }) {
  return (
    <section
      className="border-b border-zinc-200/90 bg-white"
      aria-labelledby="sector-experience-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:max-w-[1200px] lg:py-14">
        <h2
          id="sector-experience-heading"
          className="text-2xl font-bold tracking-tight text-sys-black sm:text-3xl"
        >
          {detail.leadHeading}
        </h2>
        <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-zinc-700 sm:text-[1.0625rem]">
          {detail.intro}
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-sys-yellow">
              {detail.approachTitle}
            </h3>
            <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-zinc-700">
              {detail.approachItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sys-yellow"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-sys-yellow">
              {detail.servicesTitle}
            </h3>
            <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-zinc-700">
              {detail.services.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-zinc-200/90 bg-zinc-50/80 p-6 sm:p-8">
          <h3 className="text-lg font-bold text-sys-black sm:text-xl">
            {detail.processTitle}
          </h3>
          <ol className="mt-6 grid gap-6 sm:grid-cols-3 sm:gap-5">
            {detail.processSteps.map((step) => (
              <li key={step.title}>
                <p className="font-semibold text-sys-black">{step.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
