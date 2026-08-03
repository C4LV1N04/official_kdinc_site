import logo from "@/assets/kd-inc-logo.png";

const links = [
  { href: "#trunk", label: "Our why" },
  { href: "#branches", label: "Branches" },
  { href: "#river", label: "Ecosystem" },
  { href: "#soil", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-bark/10 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo}
            alt="kd.inc — ingeniously disruptive"
            className="h-9 w-auto md:h-10"
          />
          <span className="hidden font-sans text-[0.65rem] uppercase tracking-[0.34em] text-bark-light sm:inline">
            ingeniously disruptive
          </span>
        </a>
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
      </div>
    </header>
  );
}
