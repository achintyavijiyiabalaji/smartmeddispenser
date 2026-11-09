import type { ReactNode } from "react";

export function SubNav({ items }: { items: [string, string][] }) {
  return (
    <nav aria-label="On this page" className="sticky top-[57px] z-30 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-5 py-3">
        {items.map(([id, label]) => (
          <a key={id} href={`#${id}`} className="shrink-0 rounded-full bg-secondary px-3 py-1.5 text-sm font-medium text-navy hover:bg-accent">
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export function Part({ id, eyebrow, title, intro, tone, children }: { id: string; eyebrow: string; title: string; intro?: ReactNode; tone?: "warm" | "pale"; children: ReactNode }) {
  const bg = tone === "warm" ? "bg-warm" : tone === "pale" ? "bg-pale" : "";
  return (
    <section id={id} className={`${bg} scroll-mt-32`}>
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-2 max-w-3xl text-3xl font-bold md:text-4xl">{title}</h2>
        {intro && <div className="mt-4 max-w-3xl text-muted-foreground">{intro}</div>}
        <div className="mt-10 space-y-12">{children}</div>
      </div>
    </section>
  );
}

export function Sub({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="border-l-4 border-teal pl-3 text-xl font-bold md:text-2xl">{title}</h3>
      <div className="mt-4 space-y-4 text-foreground/90">{children}</div>
    </div>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="max-w-4xl leading-relaxed text-muted-foreground">{children}</p>;
}

export function Bullets({ items, cols }: { items: ReactNode[]; cols?: boolean }) {
  return (
    <ul className={`grid gap-2 ${cols ? "md:grid-cols-2" : ""}`}>
      {items.map((t, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export function Table({ head, rows, caption }: { head: string[]; rows: ReactNode[][]; caption?: string }) {
  return (
    <div className="card-soft overflow-x-auto">
      <table className="w-full text-left text-sm">
        {caption && <caption className="p-3 text-left font-mono text-xs text-muted-foreground">{caption}</caption>}
        <thead className="bg-pale font-display text-navy">
          <tr>{head.map((h) => <th key={h} className="p-3 align-bottom">{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t align-top">
              {r.map((c, j) => <td key={j} className={`p-3 ${j === 0 ? "font-semibold text-navy" : ""}`}>{c}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Stat({ v, children }: { v: string; children: ReactNode }) {
  return (
    <div className="card-soft p-5">
      <p className="font-display text-3xl font-extrabold text-navy">{v}</p>
      <p className="mt-1 text-sm text-muted-foreground">{children}</p>
    </div>
  );
}

export function Box({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="card-soft p-6">
      <h4 className="font-display text-lg font-bold text-navy">{title}</h4>
      <div className="mt-3 space-y-3 text-sm">{children}</div>
    </div>
  );
}

export function Conclusion({ children }: { children: ReactNode }) {
  return <div className="rounded-xl border-l-4 border-navy bg-accent p-5 text-accent-foreground">{children}</div>;
}
