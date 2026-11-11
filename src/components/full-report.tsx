import { useState } from "react";
import report from "@/data/report-content.json";
import { reportImages } from "@/data/report-images";

type Para = { type: "paragraph"; index: number; text: string; heading: boolean; bullet: boolean; images: string[] };
type Tbl = { type: "table"; index: number; rows: Para[][][] };
type Block = Para | Tbl;
type Section = { id: string; title: string; blocks: Block[] };

const sections = report as unknown as Section[];
const imgById = new Map(reportImages.map((i) => [i.id, i]));

export const CHAPTERS = [
  { id: "research", label: "Problem & research", range: [0, 5] },
  { id: "ideation", label: "Ideation & evaluation", range: [5, 15] },
  { id: "development", label: "Development & drawings", range: [15, 20] },
  { id: "manufacturing", label: "Manufacturing", range: [20, 25] },
  { id: "testing", label: "Testing & evaluation", range: [25, 30] },
  { id: "production", label: "Production in quantity", range: [30, 32] },
] as const;

function Images({ ids }: { ids: string[] }) {
  const imgs = ids.map((id) => imgById.get(id)).filter(Boolean);
  if (!imgs.length) return null;
  return <div className="flex flex-wrap gap-4">{imgs.map((i) => <a key={i!.id} href={i!.url} target="_blank" rel="noreferrer" className="block max-w-md flex-1 basis-64"><img src={i!.url} alt={i!.caption} loading="lazy" className="w-full rounded-lg border bg-background object-contain" /></a>)}</div>;
}

function Paragraph({ p }: { p: Para }) {
  const t = p.text.trim();
  return <>
    {t && (p.heading ? <h4 className="pt-4 font-display text-lg font-bold text-navy">{t}</h4>
      : p.bullet ? <p className="flex gap-3 text-muted-foreground"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />{t}</p>
      : <p className="max-w-4xl leading-relaxed text-muted-foreground">{t}</p>)}
    <Images ids={p.images} />
  </>;
}

function Table({ t }: { t: Tbl }) {
  return <div className="card-soft overflow-x-auto"><table className="w-full text-left text-sm"><tbody>
    {t.rows.map((r, i) => <tr key={i} className={i === 0 ? "bg-pale font-semibold text-navy" : "border-t align-top"}>
      {r.map((c, j) => <td key={j} className="space-y-2 p-3">{c.map((p) => <div key={p.index}>{p.text.trim() && <p>{p.text.trim()}</p>}<Images ids={p.images} /></div>)}</td>)}
    </tr>)}
  </tbody></table></div>;
}

export function FullReport() {
  const [ch, setCh] = useState(0);
  const c = CHAPTERS[ch];
  const list = sections.slice(c.range[0], c.range[1]);
  return <div>
    <div className="flex flex-wrap gap-2" role="tablist">
      {CHAPTERS.map((x, i) => <button key={x.id} role="tab" aria-selected={i === ch} onClick={() => setCh(i)} className={`rounded-full px-4 py-2 text-sm font-semibold ${i === ch ? "bg-navy text-navy-foreground" : "bg-secondary text-navy hover:bg-accent"}`}>{i + 1}. {x.label}</button>)}
    </div>
    <div className="mt-8 grid gap-10 lg:grid-cols-[220px_1fr]">
      <nav aria-label="Sections" className="lg:sticky lg:top-24 lg:self-start">
        <ol className="space-y-1 text-sm">{list.map((s) => <li key={s.id}><a href={`#r-${s.id}`} className="block rounded px-2 py-1 text-muted-foreground hover:bg-secondary hover:text-navy">{s.title}</a></li>)}</ol>
      </nav>
      <div className="min-w-0 space-y-14">
        {list.map((s) => <section key={s.id} id={`r-${s.id}`} className="scroll-mt-24 space-y-4">
          <h3 className="border-l-4 border-teal pl-3 text-2xl font-bold">{s.title}</h3>
          {s.blocks.map((b) => b.type === "table" ? <Table key={b.index} t={b} /> : <Paragraph key={b.index} p={b} />)}
        </section>)}
        <button onClick={() => { if (ch < CHAPTERS.length - 1) { setCh(ch + 1); window.scrollTo({ top: 0 }); } }} disabled={ch === CHAPTERS.length - 1} className="rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground disabled:opacity-40">Next chapter →</button>
      </div>
    </div>
  </div>;
}
