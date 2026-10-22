import { createFileRoute } from "@tanstack/react-router";
import { Card, Matrix, PageHero, Section, meta } from "@/components/site";

export const Route = createFileRoute("/impact")({
  head: () => meta("Social Impact", "Who SmartMed could benefit, affordability and accessibility considerations, and the impact that still needs to be measured."),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Social impact" title="Technology with a human purpose.">
        SmartMed explores how thoughtful design can address everyday barriers faced by people managing regular medication routines, while recognising that technology must be safe, understandable, and appropriate for the people who use it.
      </PageHero>
      <Section eyebrow="A. Who could benefit?" title="Intended beneficiary groups">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Card title="Older adults">Potential support for people who prefer clear reminders, visible information and straightforward controls.</Card>
          <Card title="People taking multiple medicines">Potential support for organising medicines and identifying scheduled compartments.</Card>
          <Card title="Family members & caregivers">Potential support for routines that currently need repeated reminders or supervision.</Card>
          <Card title="People with accessibility needs">A design opportunity to combine audio, visual and physical interactions.</Card>
          <Card title="Healthcare & community organisations">Potential partners for responsible user research, expert review and future evaluation.</Card>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">These are intended groups, not confirmed beneficiaries of an implemented intervention.</p>
      </Section>
      <Section tone="warm" eyebrow="B. Problem & response">
        <Matrix head={["Everyday challenge", "SmartMed design intention"]} rows={[
          ["Forgetting medication timings", "Scheduled reminders"],
          ["Confusion between medicines", "Individual drawers and displayed information"],
          ["Difficulty noticing an alert", "Audio and visual signals"],
          ["Uncertainty about confirmation", "Physical confirmation interaction"],
          ["Need for an accessible interface", "Clear display and simple controls"],
        ]} />
      </Section>
      <Section eyebrow="C. Affordability & accessibility" title="Useful only if people can access and operate it">
        <div className="flex flex-wrap gap-3">
          {["Total manufacturing cost", "Maintenance & repair", "Ease of setup", "Battery life", "Reliability", "Suitability for different users", "Connectivity requirements", "Cost of supporting hardware or services"].map((t) => (
            <span key={t} className="rounded-full border px-4 py-2">{t}</span>
          ))}
        </div>
      </Section>
      <Section tone="pale" eyebrow="D. Still to be measured" title="Impact has not yet been established">
        <p className="max-w-3xl text-muted-foreground">The project developed and evaluated a prototype. Its wider social impact is unknown. Proposed future measures:</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {["Usability ratings", "Ease of setting schedules", "Recognition of the intended drawer", "Reminder reliability", "User confidence", "Caregiver experience", "Accessibility feedback", "Cost & maintenance feasibility"].map((m) => (
            <div key={m} className="rounded-lg bg-background p-4 font-medium text-navy">{m}</div>
          ))}
        </div>
      </Section>
      <Section>
        <blockquote className="border-l-4 border-teal pl-6 font-display text-xl font-semibold leading-relaxed text-navy md:text-2xl">
          “SmartMed is an exploration of how engineering and human-centred design can work together to address everyday challenges. Its next step is not simply to add more technology, but to establish whether the solution is safe, understandable, affordable, and genuinely useful to the people it is intended to serve.”
        </blockquote>
      </Section>
    </>
  );
}
