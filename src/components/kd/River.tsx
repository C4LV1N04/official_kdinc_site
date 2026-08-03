import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stages = [
  {
    stage: "Onboard — the source",
    title: "Trust & identity",
    body: "Ndim and dandoFin Digital establish verified identity and customer-centric digital transformation at the head of the stream.",
    brands: ["Ndim", "dandoFin Digital"],
  },
  {
    stage: "Transact — the current",
    title: "Education & connectivity",
    body: "Motse closes the skills gap, isago manages skills, attendance and payments, SafePozi houses students safely, and KaKo konnects the unkonekted.",
    brands: ["Motse", "isago", "SafePozi", "Kaya Konekta"],
  },
  {
    stage: "Pay — the delta",
    title: "Financial inclusion",
    body: "PowaNow delivers Prepaid Utility Advances using alternative scoring — no credit checks — for the unbanked and underbanked.",
    brands: ["PowaNow"],
  },
];

export function River() {
  const sectionRef = useRef<HTMLElement>(null);
  const riverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      if (!prefersReducedMotion) {
        gsap.to(".river-current", {
          strokeDashoffset: isMobile ? -600 : -1200,
          ease: "none",
          force3D: true,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: isMobile ? 0.5 : 1,
          },
        });
      }

      gsap.from(".river-stage", {
        y: isMobile ? 30 : 60,
        opacity: 0,
        duration: isMobile ? 0.6 : 0.9,
        ease: "power3.out",
        stagger: 0.15,
        force3D: true,
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="river"
      aria-labelledby="river-heading"
      className="relative overflow-hidden bg-cream-deep px-6 py-28 md:py-36"
    >
      {/* River — far/back layer */}
      <div className="pointer-events-none absolute inset-0 z-0 scale-[0.97] opacity-60 hidden md:block blur-[1px]">
        <RiverSvg depth="far" />
      </div>

      {/* River — mid layer: main water body */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <RiverSvg />
      </div>

      {/* Tree stock behind heading */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-10 z-10 h-40 w-10 -translate-x-1/2 rounded-t-[3rem] bg-bark/20 blur-[2px] md:h-52 md:w-14"
      />

      {/* River — front layer: optimized for mobile GPU */}
      <div className="pointer-events-none absolute inset-0 z-20 md:drop-shadow-[0_10px_18px_rgba(0,0,0,0.15)]">
        <RiverSvg front />
      </div>

      <div className="relative z-30 mx-auto max-w-3xl text-center">
        <p className="font-sans text-xs uppercase tracking-[0.42em] text-bark-light">
          The river
        </p>
        <h2 id="river-heading" className="mt-5 font-display text-4xl text-soil md:text-5xl">
          One ecosystem, flowing downstream
        </h2>
      </div>

      <div ref={riverRef} className="relative mx-auto mt-16 max-w-4xl">
        <ol className="relative z-30 space-y-10 pl-14 md:space-y-16 md:pl-0">
          {stages.map((s, i) => (
            <li
              key={s.stage}
              className={`river-stage md:w-[46%] ${i % 2 ? "md:ml-auto" : ""}`}
            >
              <div className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-lift)]">
                <p className="font-sans text-xs uppercase tracking-[0.28em] text-lifeblood">
                  {s.stage}
                </p>
                <h3 className="mt-3 font-display text-2xl text-soil">{s.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.brands.map((b) => (
                    <li
                      key={b}
                      className="rounded-full bg-secondary px-3 py-1 font-sans text-xs tracking-wide text-secondary-foreground"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const RIVER_D =
  "M-6,-10 C22,10 40,34 44,70 C48,108 30,132 34,168 C38,214 76,232 78,286 C80,346 26,364 22,424 C18,488 70,510 72,570 C74,634 28,652 26,714 C24,782 66,800 62,864 C59,922 46,952 50,1010";

function RiverSvg({
  front = false,
  depth = "near",
}: {
  front?: boolean;
  depth?: "far" | "near";
}) {
  const maskId = "river-front-mask";
  const gradId = `river-depth-${depth}-${front ? "front" : "back"}`;
  const far = depth === "far";
  return (
    <svg
      className="h-full w-full"
      viewBox="0 0 100 1000"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        {/* deep centre, shallow banks — gives the water body its depth */}
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--river)" stopOpacity="0.18" />
          <stop offset="45%" stopColor="var(--soil)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--river)" stopOpacity="0.2" />
        </linearGradient>
        {front && (
          <mask id={maskId}>
            {/* in front of the tree stock beside the heading */}
            <rect x="0" y="20" width="100" height="115" fill="white" />
            {/* weaving in front of the mid-stream cards */}
            <rect x="0" y="380" width="100" height="150" fill="white" />
            {/* crossing over into the soil where the roots branch out */}
            <rect x="0" y="820" width="100" height="200" fill="white" />
          </mask>
        )}
      </defs>
      <g mask={front ? `url(#${maskId})` : undefined}>
        {/* wet bank / spill halo */}
        <path
          d={RIVER_D}
          stroke="var(--river)"
          strokeWidth={far ? 12 : 18}
          strokeLinecap="round"
          fill="none"
          opacity={far ? 0.08 : 0.14}
        />
        <path
          d={RIVER_D}
          stroke="var(--river)"
          strokeWidth={far ? 6 : 9}
          strokeLinecap="round"
          fill="none"
          opacity={far ? 0.22 : 0.34}
        />
        {/* channel bed — darker core reading as depth */}
        <path
          d={RIVER_D}
          stroke={`url(#${gradId})`}
          strokeWidth={far ? 3.5 : 5.5}
          strokeLinecap="round"
          fill="none"
          opacity={far ? 0.35 : 0.5}
        />
        <path
          className="river-current"
          d={RIVER_D}
          stroke="var(--river)"
          strokeWidth={far ? 2 : 3}
          strokeLinecap="round"
          fill="none"
          strokeDasharray="18 14"
          opacity={far ? 0.5 : 0.85}
        />
        {/* surface glint riding the top of the water */}
        <path
          className="river-current"
          d={RIVER_D}
          stroke="oklch(0.98 0.02 235)"
          strokeWidth={far ? 0.6 : 1}
          strokeLinecap="round"
          fill="none"
          strokeDasharray="6 34"
          opacity={far ? 0.25 : 0.6}
        />
      </g>
    </svg>
  );
}