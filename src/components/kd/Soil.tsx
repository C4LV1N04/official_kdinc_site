import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Soil() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".root-path",
        { strokeDasharray: 900, strokeDashoffset: 900 },
        {
          strokeDashoffset: 0,
          ease: "power1.inOut",
          force3D: true,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "bottom bottom",
            scrub: isMobile ? 0.5 : true,
          },
        },
      );

      if (!prefersReducedMotion && !isMobile) {
        gsap.to(".lifeblood-node", {
          scale: 1.5,
          opacity: 0.45,
          transformOrigin: "center",
          duration: 1.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.35,
          force3D: true,
        });
        gsap.to(".blood-vein", {
          opacity: 0.95,
          duration: 2.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.6,
          force3D: true,
        });
        gsap.to(".blood-seep", {
          strokeDashoffset: -180,
          duration: 9,
          repeat: -1,
          ease: "none",
          force3D: true,
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={sectionRef}
      id="soil"
      aria-labelledby="soil-heading"
      className="relative overflow-hidden px-6 py-28 text-cream md:py-36"
      style={{ background: "var(--gradient-soil)" }}
    >
      {/* Soil texture: grain, sediment strata and scattered aggregate */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
          backgroundSize: "220px 220px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(178deg, color-mix(in oklab, var(--bark) 22%, transparent) 0px, transparent 3px, transparent 34px), repeating-linear-gradient(182deg, color-mix(in oklab, var(--soil-deep) 45%, transparent) 0px, transparent 5px, transparent 58px)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 22%, color-mix(in oklab, var(--bark) 40%, transparent) 0 2px, transparent 3px), radial-gradient(circle at 68% 14%, color-mix(in oklab, var(--bark-light) 30%, transparent) 0 1.5px, transparent 3px), radial-gradient(circle at 34% 76%, color-mix(in oklab, var(--bark) 35%, transparent) 0 2.5px, transparent 4px), radial-gradient(circle at 86% 62%, color-mix(in oklab, var(--bark-light) 26%, transparent) 0 2px, transparent 3px)",
          backgroundSize: "180px 180px, 140px 140px, 260px 260px, 210px 210px",
        }}
      />
      {/* Coarse clods and pebbles — larger scale grain over the fine noise */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.45] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='c'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.035' numOctaves='5' seed='7'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23c)' opacity='0.7'/%3E%3C/svg%3E\")",
          backgroundSize: "400px 400px",
        }}
      />
      {/* Dry cracked earth fissures */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cg fill='none' stroke='%23000' stroke-opacity='0.55' stroke-width='1.2'%3E%3Cpath d='M10 40 L70 62 L120 30 L190 70 L260 44 L300 78'/%3E%3Cpath d='M0 150 L60 132 L118 168 L176 140 L240 176 L300 150'/%3E%3Cpath d='M20 260 L88 232 L150 268 L214 238 L280 272'/%3E%3Cpath d='M70 62 L60 132 L88 232'/%3E%3Cpath d='M190 70 L176 140 L214 238'/%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "300px 300px",
        }}
      />
      {/* Mottled damp patches in the earth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 40% 30% at 18% 30%, color-mix(in oklab, var(--soil-deep) 70%, transparent), transparent 70%), radial-gradient(ellipse 35% 40% at 78% 68%, color-mix(in oklab, var(--soil-deep) 60%, transparent), transparent 70%), radial-gradient(ellipse 50% 25% at 50% 100%, color-mix(in oklab, var(--blood-deep) 35%, transparent), transparent 75%)",
        }}
      />

      <div className="pointer-events-none absolute inset-0 opacity-80">
        {/* The river crossing in from the delta above, soaking into the soil */}
        <svg
          className="absolute inset-x-0 top-0 h-40 w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="river-soak" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--river)" stopOpacity="0.75" />
              <stop offset="100%" stopColor="var(--river)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M50,-5 C54,20 42,40 46,62 C49,80 52,90 50,105"
            stroke="url(#river-soak)"
            strokeWidth="14"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
        <svg
          className="h-full w-full"
          viewBox="0 0 1000 500"
          preserveAspectRatio="xMidYMin slice"
          aria-hidden="true"
        >
          <defs>
            <filter id="blood-glow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="6" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            className="root-path"
            d="M500,0 Q450,100 300,200 T100,500"
            stroke="var(--bark)"
            strokeWidth="8"
            fill="none"
          />
          <path
            className="root-path"
            d="M500,0 Q550,150 700,250 T900,500"
            stroke="var(--bark)"
            strokeWidth="6"
            fill="none"
          />
          <path
            className="root-path"
            d="M500,0 Q500,200 450,400 T500,500"
            stroke="var(--soil-deep)"
            strokeWidth="12"
            fill="none"
          />

          {/* Scarred stretches of root — the blood in the ground */}
          <g filter="url(#blood-glow)">
            <path
              className="blood-vein"
              d="M500,0 Q450,100 300,200 T100,500"
              stroke="var(--blood)"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
              opacity="0.45"
              strokeDasharray="60 150 110 260"
            />
            <path
              className="blood-vein"
              d="M500,0 Q550,150 700,250 T900,500"
              stroke="var(--blood)"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
              opacity="0.4"
              strokeDasharray="140 120 70 220"
              strokeDashoffset="90"
            />
            <path
              className="blood-vein"
              d="M500,0 Q500,200 450,400 T500,500"
              stroke="var(--lifeblood)"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
              opacity="0.5"
              strokeDasharray="40 180 90 200"
              strokeDashoffset="30"
            />
          </g>
          {/* Blood still seeping along the deepest root */}
          <path
            className="blood-seep"
            d="M500,0 Q500,200 450,400 T500,500"
            stroke="var(--lifeblood)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            opacity="0.6"
            strokeDasharray="6 26"
          />

          <circle cx="300" cy="200" r="4" fill="var(--lifeblood)" className="lifeblood-node" />
          <circle cx="700" cy="250" r="5" fill="var(--lifeblood)" className="lifeblood-node" />
          <circle cx="450" cy="400" r="6" fill="var(--lifeblood)" className="lifeblood-node" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="text-center">
          <p className="font-sans text-xs uppercase tracking-[0.42em] text-cream/50">
            The soil
          </p>
          <h2 id="soil-heading" className="mt-5 font-display text-4xl text-lifeblood md:text-5xl">
            Deeply rooted in South Africa
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-sans text-lg leading-relaxed text-cream/80">
            Anchored by the purpose of achieving financial and digital inclusion for our
            People and their businesses.
          </p>
        </div>

        <div className="mt-16 grid gap-10 border-t border-cream/15 pt-10 sm:grid-cols-2">
          <address className="min-w-0 font-sans text-sm not-italic leading-relaxed text-cream/75">
            1st Floor, Royal Troon Building
            <br />
            Fourways Golf Park, 32 Roos Street
            <br />
            Fourways, Johannesburg
          </address>
          <div className="min-w-0 space-y-2 font-sans text-sm sm:text-right">
            <a href="mailto:info@kdinc.co.za" className="block hover:text-lifeblood">
              info@kdinc.co.za
            </a>
            <a href="tel:+27878221375" className="block hover:text-lifeblood">
              +27 87 822 1375
            </a>
            <a href="https://www.kdinc.co.za" className="block text-cream/60 hover:text-lifeblood">
              www.kdinc.co.za
            </a>
          </div>
        </div>

        <p className="mt-12 text-center font-sans text-xs tracking-[0.28em] text-cream/40 uppercase">
          kd.inc — ingeniously disruptive.
        </p>
      </div>
    </footer>
  );
}