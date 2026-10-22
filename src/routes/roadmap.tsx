import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, meta } from "@/components/site";

export const Route = createFileRoute("/roadmap")({
  head: () => meta("Future Roadmap", "SmartMed's four phases: research, prototype development, refinement and validation, and responsible pilot exploration."),
  component: Page,
});

const phases = [
  { s: "done", t: "Research and problem definition", d: "Background research, product analysis, user research, design specifications and identification of design opportunities." },
  { s: "done", t: "Prototype development", d: "A physical prototype with medication drawers, electronic controls, a display, reminders and a connected interface." },
  { s: "future", t: "Refinement and validation", d: "Material improvements, weight reduction, edge refinement, battery testing, dispensing reliability and usability assessment." },
  { s: "future", t: "Responsible pilot exploration", d: "If the design meets safety requirements and receives qualified review, a limited supervised evaluation could be explored with willing participants and professionals." },
] as const;

function Page() {
  return (
    <>
      <PageHero eyebrow="Future roadmap" title="Where SmartMed goes next" />
      <Section>
        <div className="mb-8 flex flex-wrap gap-5 font-mono text-xs">
          <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-teal" />Documented project work</span>
          <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-primary" />In progress (none currently verified)</span>
          <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-full border-2 border-dashed border-muted-foreground" />Proposed future work</span>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {phases.map((p, i) => (
            <div key={p.t} className={`rounded-xl p-6 ${p.s === "done" ? "border-t-4 border-teal card-soft" : "border-2 border-dashed"}`}>
              <p className="font-mono text-xs text-muted-foreground">Phase {i + 1} · {p.s === "done" ? "Documented" : "Proposed"}</p>
              <h3 className="mt-2 text-lg font-bold">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">No pilot, clinical study or deployment has taken place.</p>
      </Section>
    </>
  );
}
