import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import img from "@/assets/prototype-illustrative.jpg";
import { ReportImages } from "@/components/report-images";
import { PageHero, Section, meta } from "@/components/site";

export const Route = createFileRoute("/gallery")({
  head: () => meta("Gallery & Report", "Visual documentation of SmartMed's research, concepts, CAD models, electronics, construction and testing, plus the project report."),
  component: Page,
});

const cats = ["Research & materials", "Ideation 1", "Ideation 2", "Ideation 3", "Development", "CAD & working drawings", "Manufacturing", "Final prototype", "Testing"];

function Page() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <PageHero eyebrow="Gallery & report" title="Project documentation">
        Photographs, drawings and diagrams from the SmartMed project report from the SmartMed project report, organised by stage.
      </PageHero>
      <Section>
        <div className="space-y-14">{cats.map((c) => <div key={c}><h2 className="mb-4 text-2xl font-bold">{c}</h2><ReportImages group={c} /></div>)}</div>
        <h2 className="mt-14 text-2xl font-bold">Illustrative</h2>
        <button onClick={() => setOpen(true)} className="mt-4 block max-w-sm overflow-hidden rounded-xl" aria-label="Open illustrative render in lightbox">
          <img src={img} alt="Illustrative render of the SmartMed concept" loading="lazy" width={1280} height={960} className="transition hover:scale-105" />
        </button>
        <p className="mt-2 font-mono text-xs text-muted-foreground">Illustrative render, not the actual prototype.</p>
      </Section>
      <Section tone="warm" eyebrow="Project report" title="Read the full report">
        <a href="/report" className="inline-flex rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground">Open the full report</a>
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
