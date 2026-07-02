import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useTheme } from "@/lib/theme";

const LAST_AUDIT = "2026.06.28";

export function StatusPulse({ compact = false }: { compact?: boolean }) {
  return (
    <div className="mono flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] uppercase tracking-widest text-muted-foreground">
      <span className="flex items-center gap-2">
        <span className="pulse-dot" aria-hidden />
        <span className="text-foreground">SYSTEM: SECURE</span>
      </span>
      <span className="text-hairline">|</span>
      <span className="flex items-center gap-2">
        <span className="pulse-dot amber" aria-hidden />
        MONITORING: ACTIVE
      </span>
      {!compact && (
        <>
          <span className="text-hairline">|</span>
          <span>LAST AUDIT: {LAST_AUDIT}</span>
        </>
      )}
    </div>
  );
}

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="group relative flex items-center gap-2 border border-hairline px-3 py-2 hover:border-signal/60 transition-all"
      title={theme === "dark" ? "Light mode" : "Dark mode"}
    >
      <span className="mono text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-signal transition-colors">
        {theme === "dark" ? "☀" : "☾"}
      </span>
      <span className="mono text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-signal transition-colors hidden sm:inline">
        {theme === "dark" ? "Light" : "Dark"}
      </span>
    </button>
  );
}

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "backdrop-blur-md bg-background/80 border-b border-hairline shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 gap-4">
        <Link to="/" className="group flex items-center gap-3 shrink-0">
          <div className="relative flex h-8 w-8 items-center justify-center">
            <div className="absolute inset-0 rounded-sm border border-signal/60 group-hover:border-signal transition-colors" />
            <span className="mono text-signal text-sm font-bold">tv</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display font-bold text-sm tracking-tight">techvrs</span>
            <span className="mono text-[9px] uppercase tracking-widest text-muted-foreground">
              secure by design
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="nav-pill-hover mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-all relative"
              activeProps={{ className: "!text-signal" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <StatusPulse compact />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="mono text-[11px] uppercase tracking-widest text-foreground border border-hairline px-3 py-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        <div className="hidden md:flex lg:hidden items-center gap-3">
          <ThemeToggle />
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-hairline bg-background/95 backdrop-blur">
          <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="mono text-[12px] uppercase tracking-widest py-2 text-muted-foreground hover:text-foreground"
                activeProps={{ className: "!text-signal" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2"><StatusPulse compact /></div>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hairline mt-32">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-8 w-8 items-center justify-center">
              <div className="absolute inset-0 rounded-sm border border-signal/60" />
              <span className="mono text-signal text-sm font-bold">tv</span>
            </div>
            <span className="font-display font-bold text-base">techvrs</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            SOC analyst and security-first engineer. Detection, hardened deployments,
            secure AI automation.
          </p>
          <StatusPulse />
        </div>

        <div>
          <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
            Sitemap
          </div>
          <ul className="flex flex-col gap-2 text-sm">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-muted-foreground hover:text-signal transition-colors">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
            Channels
          </div>
          <ul className="flex flex-col gap-2 text-sm">
            <li><a href="mailto:hello@techvrs.com" className="text-muted-foreground hover:text-signal transition-colors">Email</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-signal transition-colors">LinkedIn</a></li>
            <li><a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-signal transition-colors">GitHub</a></li>
            <li><a href="https://medium.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-signal transition-colors">Medium</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-4 mono text-[11px] uppercase tracking-widest text-muted-foreground flex flex-wrap justify-between gap-2">
          <span>techvrs.com | SYSTEM: SECURE | © {year} — Built &amp; hardened.</span>
          <span>v1.0.0 // secure-by-design</span>
        </div>
      </div>
    </footer>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mono text-[11px] uppercase tracking-[0.25em] text-signal mb-4 flex items-center gap-3">
      <span className="h-px w-8 bg-signal/60" />
      {children}
    </div>
  );
}

export function Panel({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}) {
  return (
    <Tag className={`panel brackets hover-lift p-6 ${className}`}>
      <span className="b-tr" />
      <span className="b-bl" />
      {children}
    </Tag>
  );
}
