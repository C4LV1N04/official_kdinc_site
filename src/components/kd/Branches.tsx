const subsidiaries = [
  {
    name: "kd innov",
    focus: "Digital transformation & training management",
    companies: [
      { name: "Ndim", note: "Digital identity & verification" },
      { name: "dandoFin Digital", note: "Customer-centric fintech" },
      { name: "Motse", note: "Skills & training management" },
      { name: "isago", note: "Skills, attendance & payments" },
    ],
  },
  {
    name: "kd infra",
    focus: "Property development, engineering & telecom",
    companies: [
      { name: "Lefatshe", note: "Infrastructure services" },
      { name: "Kaya Konekta", note: "Konnecting the unkonekted" },
      { name: "SafePozi", note: "Student accommodation" },
      { name: "PowaNow", note: "Prepaid utility advances" },
    ],
  },
  {
    name: "kd health",
    focus: "Health facilities & pharmaceuticals",
    companies: [
      { name: "Health facilities", note: "Primary & day clinics" },
      { name: "Pharmaceuticals", note: "Supply & distribution" },
      { name: "Clinical services", note: "Care delivery partners" },
    ],
  },
];

export function Branches() {
  return (
    <section
      id="branches"
      aria-labelledby="branches-heading"
      className="relative overflow-hidden bg-bark px-6 py-28 text-cream md:py-36"
    >
      {/* faint canopy glow behind the ecosystem */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-lifeblood/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="font-sans text-xs uppercase tracking-[0.42em] text-cream/60">
          The branches
        </p>
        <h2 id="branches-heading" className="mt-5 font-display text-4xl md:text-5xl">
          Multi-dimensional sector integration
        </h2>
        <p className="mt-5 font-sans text-base leading-relaxed text-cream/75">
          Three branches, one canopy — hover a branch to see the companies growing
          beneath it.
        </p>
      </div>

      {/* Trunk node with three branches; hover grows the sub-branches */}
      <div className="relative mx-auto mt-16 max-w-5xl md:mt-24">
        <div className="flex justify-center">
          <div className="relative grid h-24 w-24 place-items-center whitespace-nowrap rounded-full bg-soil font-display text-lg text-cream ring-1 ring-cream/20">
            <span
              aria-hidden="true"
              className="absolute inset-0 animate-ping rounded-full bg-lifeblood/10"
            />
            <span className="whitespace-nowrap">
              kd<span className="text-lifeblood">.</span>inc
            </span>
          </div>
        </div>
        <div className="mx-auto h-10 w-px bg-gradient-to-b from-cream/10 to-cream/35" />

        {/* canopy spar linking the three branches */}
        <div
          aria-hidden="true"
          className="mx-auto hidden h-px w-[66%] bg-gradient-to-r from-transparent via-cream/30 to-transparent md:block"
        />

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {subsidiaries.map((s) => (
            <article
              key={s.name}
              tabIndex={0}
              className="group relative rounded-2xl border border-cream/15 bg-soil/60 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-lifeblood hover:shadow-[0_24px_60px_-30px_var(--lifeblood)] focus:outline-none focus-visible:border-lifeblood"
            >
              <span className="mx-auto -mt-10 mb-4 hidden h-10 w-px bg-cream/25 transition-colors duration-500 group-hover:bg-lifeblood/70 md:block" />
              <span className="inline-block h-2 w-2 rounded-full bg-lifeblood shadow-[0_0_0_0_var(--lifeblood)] transition-transform duration-500 group-hover:scale-150" />
              <h3 className="mt-4 font-display text-2xl">{s.name}</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-cream/70">
                {s.focus}
              </p>

              <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-700 ease-out group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr]">
                <ul className="overflow-hidden">
                  <li aria-hidden="true" className="mx-auto mt-5 h-6 w-px bg-gradient-to-b from-transparent to-lifeblood/70" />
                  {s.companies.map((c, i) => (
                    <li
                      key={c.name}
                      style={{ transitionDelay: `${120 + i * 90}ms` }}
                      className="relative ml-3 -translate-x-2 border-l border-cream/20 py-2 pl-7 font-sans text-sm text-cream/85 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
                    >
                      <span className="absolute left-0 top-4 h-px w-4 bg-cream/25" />
                      <span className="absolute left-3.5 top-4 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-lifeblood ring-4 ring-lifeblood/15" />
                      <span className="block leading-tight">{c.name}</span>
                      <span className="mt-0.5 block font-sans text-xs leading-snug text-cream/50">
                        {c.note}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}