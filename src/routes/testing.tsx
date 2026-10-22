import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, X } from "lucide-react";
import img from "@/assets/prototype-illustrative.jpg";
import { IllustrativeImg, Notice, PageHero, Section, meta } from "@/components/site";

export const Route = createFileRoute("/testing")({
  head: () => meta("Prototype & Testing", "How the SmartMed prototype works, reported test outcomes, what fell short of the specification, and future validation priorities."),
  component: Page,
});

const flow = [
  ["Medication schedule", "Times and medicine details entered through the Wi-Fi interface."],
  ["Real-time clock", "Keeps time so the schedule can trigger at the right moment."],
  ["ESP32 control", "Compares the time with the schedule and starts the reminder sequence."],
  ["Display, audio & drawer LED", "Shows medicine information, sounds an alert and lights the correct drawer."],
  ["User interaction", "The user opens the indicated drawer and presses the button."],
  ["Confirmation record", "The button press is recorded as confirmation — not verified ingestion."],
];
const passed = ["Eight sliding drawers and their guides", "Structural stability during normal interaction", "OLED display and real-time clock", "Drawer indicator LEDs", "Audio reminders", "Confirmation button", "ESP32 control and Wi-Fi interface communication", "Scheduled medication reminder sequences"];
const fell = ["Acrylic used instead of intended PETG, which could not be sourced", "Sharp edges on the final prototype need further attention", "Heavier than the original weight target", "No dedicated charging or power indicator LEDs", "Full battery runtime not established through long-duration testing", "Proposed three-to-five-year lifespan not verified", "Further engineering, usability and safety validation remains necessary"];
const future = ["Refine edges and enclosure materials", "Reduce unnecessary weight", "Verify reminder timing and power-loss behaviour", "Conduct longer-duration battery testing", "Test dispensing reliability across operating conditions", "Evaluate accessibility and ease of use with appropriate participants", "Assess electrical and mechanical safety", "Seek qualified healthcare and engineering review before any real-world use"];

function Page() {
  const [a, setA] = useState(0);
  return (
    <>
      <PageHero eyebrow="Prototype & testing" title="Evidence, including what didn't work">
        Reported outcomes from the project's own evaluation — not independent certification.
      </PageHero>
      <Section eyebrow="A. The completed prototype">
        <IllustrativeImg src={img} alt="Illustrative render of the SmartMed prototype front view" className="mx-auto max-w-3xl" />
        <p className="mt-4 text-center text-sm text-muted-foreground">Front, side, rear, open-drawer, display, electronics and interface photographs will be added from the project report.</p>
      </Section>
      <Section tone="pale" eyebrow="B. How it works" title="The documented system workflow">
        <div className="grid gap-2 md:grid-cols-6">
          {flow.map(([t], i) => (
            <button key={t} onClick={() => setA(i)} aria-pressed={a === i} className={`rounded-lg p-4 text-left text-sm font-semibold transition ${a === i ? "bg-navy text-navy-foreground" : "bg-background text-navy hover:bg-accent"}`}>
              <span className="block font-mono text-xs opacity-60">0{i + 1}</span>{t}
            </button>
          ))}
        </div>
        <div className="mt-4 card-soft p-6"><p>{flow[a]![1]}</p></div>
        <p className="mt-3 text-sm text-muted-foreground">This represents the documented workflow and does not independently validate medication safety.</p>
      </Section>
      <Section eyebrow="C & D. Results" title="Reported test outcomes">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card-soft p-6">
            <h3 className="font-bold">Operated successfully in testing</h3>
            <ul className="mt-4 space-y-2">{passed.map((p) => <li key={p} className="flex gap-2"><Check className="mt-1 h-4 w-4 shrink-0 text-teal" />{p}</li>)}</ul>
          </div>
          <div className="rounded-xl border border-warning/30 bg-warning-soft p-6">
            <h3 className="font-bold">Did not fully meet the specification</h3>
            <ul className="mt-4 space-y-2">{fell.map((p) => <li key={p} className="flex gap-2"><X className="mt-1 h-4 w-4 shrink-0 text-warning" />{p}</li>)}</ul>
          </div>
        </div>
      </Section>
      <Section tone="warm" eyebrow="E. What was learned" title="A working prototype is only one stage">
        <p className="max-w-3xl text-muted-foreground">Responsible product design also requires evaluating reliability, usability, maintainability, material performance and safety under realistic conditions.</p>
      </Section>
      <Section eyebrow="F. Future testing priorities" title="Proposed validation plan">
        <ol className="grid gap-3 md:grid-cols-2">
          {future.map((f, i) => <li key={f} className="flex gap-3 rounded-lg bg-secondary p-4"><span className="font-mono text-teal">{i + 1}.</span>{f}<span className="ml-auto shrink-0 font-mono text-[0.65rem] uppercase text-muted-foreground">Future</span></li>)}
        </ol>
        <div className="mt-8"><Notice title="Not a medical device">SmartMed has not been clinically validated or safety-certified.</Notice></div>
      </Section>
    </>
  );
}
