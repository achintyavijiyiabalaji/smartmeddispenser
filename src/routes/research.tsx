import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Matrix, Notice, PageHero, ReviewTag, Section, meta } from "@/components/site";

export const Route = createFileRoute("/research")({
  head: () => meta("Our Research", "Survey findings, interview insights and the research-to-design matrix behind the SmartMed medication management prototype."),
  component: Page,
});

const stats = [
  { v: 64, l: "reported forgetting medication doses at least occasionally", d: "Led to scheduled reminders as a core feature." },
  { v: 62, l: "said remembering timing is the hardest part of medication management", d: "Informed the real-time clock and programmed schedule." },
  { v: 46, l: "reported difficulty distinguishing between medicines", d: "Informed separate drawers and drawer indicator LEDs." },
  { v: 32, l: "had taken the wrong medicine or dosage at least once", d: "Reinforced the need for on-screen medicine information." },
  { v: 80, l: "considered sound reminders helpful", d: "Led to audio reminder prompts." },
  { v: 82, l: "considered a screen with medicine names and timings useful", d: "Led to the OLED information display." },
  { v: 78, l: "considered dose confirmation important", d: "Led to the physical confirmation button." },
];

const steps = [
  { t: "Background research", d: "Literature on medication routines and the difficulties people report in managing them." },
  { t: "Existing-product analysis", d: "Comparison of pill organisers, reminder devices and automated dispensers by features, usability, capacity and price." },
  { t: "User questionnaire", d: "A survey asking about forgetting doses, identifying medicines and preferred reminder types." },
  { t: "Interviews", d: "Conversations with people who manage medicines and those who support them." },
  { t: "Findings & opportunities", d: "Translating evidence into design specifications for the prototype." },
];

const insights = [
  ["Forgetfulness and changing routines", "Doses are most easily missed when the day doesn't follow its usual pattern."],
  ["Similar-looking medicines", "Telling tablets apart can be difficult without clear labelling or separation."],
  ["Audio and visual reminders", "Participants valued reminders that can be both heard and seen."],
  ["Simple controls", "Fewer buttons and clear feedback were preferred over complex menus."],
  ["Dose confirmation and tracking", "Knowing whether a dose has been taken was seen as reassuring."],
  ["The needs of caregivers", "Family members expressed interest in knowing when a dose might be missed."],
];

function Page() {
  const [step, setStep] = useState(0);
  return (
    <>
      <PageHero eyebrow="Our research" title="Listening before building">
        The project explored existing products, relevant literature, user interviews, survey responses, materials and design specifications.
      </PageHero>
      <Section eyebrow="A. Research approach" title="An interactive research journey">
        <div className="grid gap-6 md:grid-cols-[280px_1fr]">
          <div className="flex flex-col gap-2" role="tablist">
            {steps.map((s, i) => (
              <button key={s.t} role="tab" aria-selected={step === i} onClick={() => setStep(i)} className={`rounded-lg px-4 py-3 text-left font-medium transition ${step === i ? "bg-navy text-navy-foreground" : "bg-secondary text-navy hover:bg-accent"}`}>
                <span className="mr-2 font-mono text-xs opacity-70">0{i + 1}</span>{s.t}
              </button>
            ))}
          </div>
          <div className="card-soft p-8" role="tabpanel">
            <h3 className="text-2xl font-bold">{steps[step].t}</h3>
            <p className="mt-3 text-muted-foreground">{steps[step].d}</p>
          </div>
        </div>
      </Section>
      <Section tone="pale" eyebrow="B. Survey findings" title="What respondents told us">
        <p className="mb-6 max-w-3xl text-muted-foreground">
          Findings from Achintya's project research. Respondent count to be shown once verified from the complete survey records<ReviewTag />. These figures are not necessarily representative of the wider population and are not evidence that SmartMed is effective.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {stats.map((s) => (
            <div key={s.l} className="card-soft p-6">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-4xl font-extrabold text-navy">{s.v}%</span>
                <span className="text-sm">{s.l}</span>
              </div>
              <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-secondary" role="img" aria-label={`${s.v} percent`}>
                <div className="h-full rounded-full bg-primary" style={{ width: `${s.v}%` }} />
              </div>
              <p className="mt-3 font-mono text-xs text-teal">→ {s.d}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="C. Interview insights" title="Anonymised perspectives">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {insights.map(([t, d]) => (
            <div key={t} className="border-l-4 border-teal bg-warm p-5">
              <h3 className="font-bold">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">Summarised themes; direct quotations will only be added where the wording is supported by the source.<ReviewTag /></p>
      </Section>
      <Section tone="warm" eyebrow="D. From research to design" title="How evidence shaped decisions">
        <Matrix head={["Research finding", "Design response explored"]} rows={[
          ["Difficulty remembering timings", "Scheduled reminders"],
          ["Difficulty identifying medicines", "On-screen information and drawer indicators"],
          ["Preference for audio prompts", "Audio reminder functionality"],
          ["Importance of confirming a dose", "Physical confirmation button"],
          ["Need for simpler interaction", "Clear display and individual drawers"],
          ["Caregiver interest", "Future consideration of missed-dose communication"],
        ]} />
      </Section>
      <Section eyebrow="E. Research limitations">
        <Notice title="An honest note on scale">The project research was limited in scale. It does not establish clinical effectiveness, population-wide needs, or improved health outcomes.</Notice>
      </Section>
    </>
  );
}
