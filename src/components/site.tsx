import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, AlertTriangle, Pill } from "lucide-react";

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/problem", label: "The Problem" },
  { to: "/research", label: "Research" },
  { to: "/solution", label: "Solution" },
  { to: "/design", label: "Design" },
  { to: "/testing", label: "Prototype & Testing" },
  { to: "/impact", label: "Social Impact" },
  { to: "/roadmap", label: "Roadmap" },
  { to: "/gallery", label: "Gallery" },
  { to: "/get-involved", label: "Get Involved" },
] as const;

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 font-display text-lg font-extrabold text-navy">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-navy text-navy-foreground">
        <Pill className="h-4 w-4" aria-hidden />
      </span>
      SmartMed
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
        <Logo />
        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main">
          {NAV.slice(1).map((n) => (
            <Link key={n.to} to={n.to} className="rounded-md px-2.5 py-1.5 text-sm text-muted-foreground hover:text-navy" activeProps={{ className: "text-navy font-semibold" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/testing" className="hidden rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 sm:inline-flex">
            Explore the Prototype
          </Link>
          <button className="rounded-md p-2 xl:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t px-5 py-3 xl:hidden" aria-label="Mobile">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block rounded-md px-2 py-2 text-foreground hover:bg-secondary" activeProps={{ className: "font-semibold text-navy" }}>
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-extrabold">SmartMed</p>
          <p className="mt-3 text-sm opacity-80">
            Exploring how accessible, thoughtfully designed technology can support people who manage regular medication schedules. A student-led project by Achintya V.
          </p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-2 text-sm">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="opacity-80 hover:opacity-100">{n.label}</Link>
          ))}
        </nav>
        <div className="space-y-3 text-sm opacity-80">
          <p><strong>Contact:</strong> Use the feedback form on the Get Involved page.</p>
          <p><strong>Privacy:</strong> This site does not ask for prescriptions, diagnoses or medication lists. Feedback is never published without separate permission.</p>
          <p><strong>Disclaimer:</strong> SmartMed is a student-developed prototype. It is not a clinically validated medical device and is not a substitute for advice from a doctor or pharmacist.</p>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="bg-pale">
      <div className="mx-auto max-w-5xl px-5 py-16 md:py-24 fade-up">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">{title}</h1>
        {children && <div className="mt-5 max-w-3xl text-lg text-muted-foreground">{children}</div>}
      </div>
    </section>
  );
}

export function Section({ eyebrow, title, children, tone }: { eyebrow?: string; title?: string; children: ReactNode; tone?: "warm" | "pale" }) {
  const bg = tone === "warm" ? "bg-warm" : tone === "pale" ? "bg-pale" : "";
  return (
    <section className={bg}>
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        {title && <h2 className="mt-2 max-w-3xl text-3xl font-bold md:text-4xl">{title}</h2>}
        <div className={title ? "mt-8" : ""}>{children}</div>
      </div>
    </section>
  );
}

export function Notice({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex gap-3 rounded-xl border border-warning/30 bg-warning-soft p-5" role="note">
      <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-warning" aria-hidden />
      <div>
        <p className="font-display font-bold text-navy">{title}</p>
        <div className="mt-1 text-sm">{children}</div>
      </div>
    </div>
  );
}

export function ReviewTag({ children = "To verify against report" }: { children?: ReactNode }) {
  return <span className="ml-2 inline-block rounded border border-warning/40 bg-warning-soft px-1.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider text-warning">{children}</span>;
}

export function Card({ title, children, icon }: { title: string; children: ReactNode; icon?: ReactNode }) {
  return (
    <div className="card-soft p-6">
      {icon && <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-accent text-accent-foreground">{icon}</div>}
      <h3 className="text-lg font-bold">{title}</h3>
      <div className="mt-2 text-muted-foreground">{children}</div>
    </div>
  );
}

export function Matrix({ head, rows }: { head: [string, string]; rows: [string, string][] }) {
  return (
    <div className="overflow-x-auto card-soft">
      <table className="w-full text-left">
        <thead className="bg-pale font-display text-navy">
          <tr><th className="p-4">{head[0]}</th><th className="p-4">{head[1]}</th></tr>
        </thead>
        <tbody>
          {rows.map(([a, b]) => (
            <tr key={a} className="border-t"><td className="p-4">{a}</td><td className="p-4 font-medium text-navy">{b}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function IllustrativeImg({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <figure className={className}>
      <img src={src} alt={alt} width={1280} height={960} className="w-full rounded-2xl object-cover" />
      <figcaption className="mt-2 font-mono text-xs text-muted-foreground">
        Illustrative render — to be replaced with the actual prototype photograph from the project report.
      </figcaption>
    </figure>
  );
}

export function meta(title: string, description: string) {
  return {
    meta: [
      { title: `${title} | SmartMed` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} | SmartMed` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
