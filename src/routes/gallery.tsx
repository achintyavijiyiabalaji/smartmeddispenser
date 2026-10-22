import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import img from "@/assets/prototype-illustrative.jpg";
import { Notice, PageHero, Section, meta } from "@/components/site";

export const Route = createFileRoute("/gallery")({
  head: () => meta("Gallery & Report", "Visual documentation of SmartMed's research, concepts, CAD models, electronics, construction and testing, plus the project report."),
  component: Page,
});

const cats = ["Research", "User insights", "Existing-product analysis", "Design concepts", "CAD models", "Electronics and mechanisms", "Prototype construction", "Final prototype", "Testing and evaluation", "Future improvements"];

function Page() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <PageHero eyebrow="Gallery & report" title="Project documentation">
        Photographs, drawings and diagrams from the SmartMed project report will appear in these categories.
      </PageHero>
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {cats.map((c) => (
            <div key={c} className="grid aspect-square place-items-center rounded-xl border-2 border-dashed p-4 text-center">
              <div><p className="font-display font-bold text-navy">{c}</p><p className="mt-1 font-mono text-[0.65rem] uppercase text-muted-foreground">Awaiting report images</p></div>
            </div>
          ))}
        </div>
        <h2 className="mt-14 text-2xl font-bold">Illustrative</h2>
        <button onClick={() => setOpen(true)} className="mt-4 block max-w-sm overflow-hidden rounded-xl" aria-label="Open illustrative render in lightbox">
          <img src={img} alt="Illustrative render of the SmartMed concept" loading="lazy" width={1280} height={960} className="transition hover:scale-105" />
        </button>
        <p className="mt-2 font-mono text-xs text-muted-foreground">Illustrative render, not the actual prototype.</p>
      </Section>
      <Section tone="warm" eyebrow="Project report" title="Read the full report">
        <Notice title="Public version in preparation">An approved public version will be available here after candidate numbers, centre identifiers and private interview details have been removed.</Notice>
      </Section>
      {open && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 grid place-items-center bg-navy/90 p-6" onClick={() => setOpen(false)}>
          <button className="absolute right-5 top-5 text-navy-foreground" aria-label="Close"><X /></button>
          <figure className="max-w-4xl">
            <img src={img} alt="Illustrative render of the SmartMed concept" className="rounded-xl" />
            <figcaption className="mt-3 text-center text-sm text-navy-foreground">Illustrative render — actual photographs to follow.</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
