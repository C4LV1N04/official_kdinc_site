export function Trunk() {
  return (
    <section
      id="trunk"
      aria-labelledby="trunk-heading"
      className="relative overflow-hidden px-6 py-28 md:py-36"
      style={{ background: "var(--gradient-trunk)" }}
    >
      <div className="pointer-events-none absolute inset-y-0 left-1/2 w-40 -translate-x-1/2 bg-bark/25 blur-2xl md:w-64" />

      <div className="relative mx-auto grid max-w-5xl gap-14 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-start">
        <div className="min-w-0">
          <p className="font-sans text-xs uppercase tracking-[0.42em] text-soil/70">
            The trunk — our why
          </p>
          <h2
            id="trunk-heading"
            className="mt-5 font-display text-4xl leading-tight text-soil md:text-5xl"
          >
            People are central to our existence.
          </h2>
        </div>
        <div className="min-w-0 space-y-8">
          <p className="font-sans text-lg leading-relaxed text-soil/85">
            The kd.inc team consists of sector experts who share common ingenuity and
            disruptive goals. Our core investment sectors are driven by the real economic
            needs of South Africa, and the rest of the African continent.
          </p>
          <blockquote className="border-l-4 border-lifeblood pl-6">
            <p className="font-display text-xl italic leading-snug text-lifeblood md:text-2xl">
              “I will not rest until I've achieved my Purpose for financial &amp; digital
              inclusion for our People and their businesses, in my lifetime.”
            </p>
            <footer className="mt-4 font-sans text-sm uppercase tracking-[0.2em] text-soil/70">
              Kagisho Dichabe — Founder &amp; Executive Chair
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}