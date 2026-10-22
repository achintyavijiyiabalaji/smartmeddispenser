import { createFileRoute } from "@tanstack/react-router";
import { PageHero, ReviewTag, Section, meta } from "@/components/site";

export const Route = createFileRoute("/design")({
  head: () => meta("Design & Development", "How SmartMed moved from problem definition through product research, specifications and concepts to a built prototype."),
  component: Page,
});

const specs: [string, "met" | "partial" | "not"][] = [
  ["Eight medication drawers", "met"],
  ["Digital information display", "met"],
  ["Audio reminders", "met"],
  ["Drawer identification", "met"],
  ["User confirmation", "met"],
  ["Wi-Fi-enabled scheduling", "met"],
  ["Rechargeable power", "partial"],
  ["Enclosed electronics", "met"],
  ["Practical dimensions & stability", "partial"],
  ["Target price ₹4,000–₹8,000 (original specification, not a retail price)", "not"],
];
const label = { met: "Reported met", partial: "Partially met", not: "Not yet verified" };
const tone = { met: "bg-teal", partial: "bg-warning", not: "bg-muted-foreground" };

const stages = [
  ["Identify the challenge", "Defining the medication-management difficulties the project would address."],
  ["Research existing products", "Comparing competing products' features, usability, capacity and reported prices."],
  ["Establish specifications", "Turning research into measurable requirements."],
  ["Explore concepts", "Generating and evaluating alternative designs."],
  ["Build the prototype", "Manufacturing the enclosure and drawers, and assembling electronics, display, LEDs, button, speaker and wiring."],
  ["Review and improve", "Assessing the prototype against the original specifications."],
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Design & development" title="From sketch to working prototype" />
      <Section eyebrow="Process" title="Six stages of development">
        <ol className="relative space-y-6 border-l-2 border-teal/40 pl-8">
          {stages.map(([t, d], i) => (
            <li key={t} className="relative">
              <span className="absolute -left-[2.6rem] grid h-8 w-8 place-items-center rounded-full bg-navy font-mono text-xs text-navy-foreground">{i + 1}</span>
              <h3 className="text-xl font-bold">{t}</h3>
              <p className="mt-1 text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section tone="warm" eyebrow="Stage 2" title="Existing-product comparison">
        <p className="text-muted-foreground">
          Competing products, their documented features, capacity and reported prices will be listed here with the date and source of each price, once confirmed from the report.<ReviewTag />
          Historic prices will never be shown as current market prices.
        </p>
      </Section>
      <Section eyebrow="Stage 4" title="Concept exploration">
        <div className="grid gap-5 md:grid-cols-3">
          {["Concept A", "Concept B", "Selected design"].map((c) => (
            <div key={c} className="card-soft p-6">
              <h3 className="font-bold">{c}<ReviewTag /></h3>
              <dl className="mt-3 space-y-1 text-sm text-muted-foreground">
                {["Rationale", "User benefit", "Material", "Advantages", "Limitations", "Decision"].map((k) => (
                  <div key={k} className="flex justify-between border-b border-dashed py-1"><dt>{k}</dt><dd>—</dd></div>
                ))}
              </dl>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">Concept details and sketches to be added from the report.</p>
      </Section>
      <Section tone="pale" eyebrow="Stage 6 · Review" title="Progress against specifications">
        <ul className="grid gap-3 md:grid-cols-2">
          {specs.map(([s, st]) => (
            <li key={s} className="flex items-center justify-between gap-4 rounded-lg bg-background p-4">
              <span>{s}</span>
              <span className="flex shrink-0 items-center gap-2 font-mono text-xs"><span className={`h-2.5 w-2.5 rounded-full ${tone[st]}`} />{label[st]}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted-foreground">Not every original requirement was achieved — see Prototype & Testing for details.</p>
      </Section>
    </>
  );
}
