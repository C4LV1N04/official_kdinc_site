import { useState, useEffect } from "react";
import logo from "@/assets/kd-inc-logo.png";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#trunk", label: "Our why" },
  { href: "#branches", label: "Branches" },
  { href: "#river", label: "Ecosystem" },
  { href: "#soil", label: "Contact" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-bark/10 bg-cream/90 backdrop-blur-md transition-colors">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <img
            src={logo}
            alt="kd.inc — ingeniously disruptive"
            className="h-9 w-auto md:h-10"
          />
          <span className="hidden font-sans text-[0.65rem] uppercase tracking-[0.34em] text-bark-light sm:inline">
            ingeniously disruptive
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Primary" className="hidden gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-sans text-sm tracking-wide text-bark transition-colors hover:text-lifeblood"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open navigation menu"}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-bark/15 bg-cream/50 text-bark transition-all hover:bg-bark/10 active:scale-95 md:hidden"
        >
          {isOpen ? <X className="h-5 w-5 text-lifeblood" /> : <Menu className="h-5 w-5 text-bark" />}
        </button>
      </div>

      {/* Mobile Navigation Menu Dropdown */}
      <div
        id="mobile-menu"
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out md:hidden ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 border-b border-bark/10 bg-cream/95 backdrop-blur-lg shadow-xl"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <nav aria-label="Mobile" className="flex flex-col gap-1 px-6 pb-6 pt-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3.5 font-sans text-base font-medium text-bark transition-colors hover:bg-bark/5 hover:text-lifeblood active:bg-bark/10"
              >
                <span>{l.label}</span>
                <span className="text-xs text-bark/40">→</span>
              </a>
            ))}
            <a
              href="#soil"
              onClick={() => setIsOpen(false)}
              className="mt-3 flex items-center justify-center rounded-full bg-lifeblood px-5 py-3 font-sans text-sm font-medium text-accent-foreground shadow-md transition-transform active:scale-98"
            >
              Get in Touch
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
