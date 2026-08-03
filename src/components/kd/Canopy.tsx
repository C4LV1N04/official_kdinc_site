import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import canopy from "@/assets/baobab-canopy.png";

/* Bird flock — varied heights, sizes, speeds and delays. */
const birds = [
  { top: 5, s: 1, d: 26, delay: 0 },
  { top: 9, s: 0.7, d: 34, delay: 3 },
  { top: 13, s: 1.2, d: 22, delay: 6 },
  { top: 17, s: 0.85, d: 30, delay: 1.5 },
  { top: 21, s: 1.05, d: 28, delay: 8 },
  { top: 26, s: 0.65, d: 38, delay: 4.5 },
  { top: 31, s: 1.15, d: 24, delay: 11 },
  { top: 36, s: 0.8, d: 32, delay: 7 },
  { top: 42, s: 0.95, d: 29, delay: 14 },
];

export function Canopy() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      gsap.from(".canopy-reveal", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        force3D: true,
      });

      if (!prefersReducedMotion) {
        gsap.utils.toArray<HTMLElement>(".hadida-bird").forEach((bird, idx) => {
          // On mobile, skip animating half the birds to save GPU/CPU memory
          if (isMobile && idx % 2 === 1) {
            bird.style.display = "none";
            return;
          }
          gsap.to(bird, {
            x: "125vw",
            y: "random(-40, 40)",
            duration: Number(bird.dataset["dur"] ?? 26),
            delay: Number(bird.dataset["delay"] ?? 0),
            repeat: -1,
            ease: "none",
            force3D: true,
          });
        });

        if (!isMobile) {
          /* Wing flap — rotate wings on desktop only */
          gsap.to(".hadida-wing-left", {
            rotate: -34,
            transformOrigin: "100% 100%",
            duration: 0.42,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            force3D: true,
            stagger: { each: 0.13, from: "random" },
          });
          gsap.to(".hadida-wing-right", {
            rotate: 34,
            transformOrigin: "0% 100%",
            duration: 0.42,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            force3D: true,
            stagger: { each: 0.13, from: "random" },
          });
        }
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="kd.inc — ingeniously disruptive"
      className="relative flex min-h-[88vh] flex-col items-center justify-start overflow-hidden pb-24"
      style={{ background: "var(--gradient-sky)" }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[60vh]">
        {birds.map((b, i) => (
          <svg
            key={i}
            className="hadida-bird absolute text-soil opacity-30"
            data-dur={b.d}
            data-delay={b.delay}
            style={{
              left: "-10rem",
              top: `${b.top}rem`,
              width: `${b.s * 1.9}rem`,
              height: `${b.s * 1.9}rem`,
            }}
            viewBox="0 0 100 40"
            aria-hidden="true"
          >
            <path
              className="hadida-wing-left"
              d="M4,26 Q26,4 50,24"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              className="hadida-wing-right"
              d="M50,24 Q74,4 96,26"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
        ))}
      </div>

      <div className="pointer-events-none relative z-0 -mt-4 w-[170%] max-w-none sm:w-[125%] lg:w-[95%]">
        <img
          src={canopy}
          alt="Illustrated baobab canopy spreading across the sky"
          width={1920}
          height={1024}
          className="w-full opacity-95"
        />
      </div>

      <div className="relative z-10 mx-auto mt-2 max-w-3xl px-6 text-center sm:-mt-10 md:-mt-24">
        <p className="canopy-reveal font-sans text-xs uppercase tracking-[0.42em] text-bark-light">
          Down to the roots
        </p>
        <h1 className="canopy-reveal mt-6 font-display text-6xl leading-[0.9] tracking-tight text-soil md:text-8xl">
          kd<span className="text-lifeblood">.</span>inc
        </h1>
        <p className="canopy-reveal mt-5 font-display text-2xl italic text-bark md:text-4xl">
          ingeniously disruptive.
        </p>
        <p className="canopy-reveal mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-muted-foreground">
          A 100% black-owned &amp; managed investment company, growing from South African
          soil into the rest of the continent.
        </p>
        <a
          href="#soil"
          className="canopy-reveal mt-10 inline-flex items-center gap-3 rounded-full bg-lifeblood px-7 py-3 font-sans text-sm font-medium tracking-wide text-accent-foreground transition-transform hover:scale-[1.03]"
        >
          Follow the roots
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
