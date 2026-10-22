import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, PenTool, Wrench, RefreshCw } from "lucide-react";
import img from "@/assets/prototype-illustrative.jpg";
import { Card, Section, meta } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => meta("Making medication management simpler", "SmartMed is a student-led prototype exploring how accessible technology can help people organise medicines and follow daily routines with more clarity."),
  component: Index,
});

const features = ["Eight individual medication drawers", "OLED information display", "Scheduled reminders", "Audio prompts", "Individual drawer indicator LEDs", "User confirmation button", "ESP32-based control", "Wi-Fi-enabled scheduling interface"];
const challenges = ["Remembering medication timings", "Distinguishing similar-looking tablets", "Managing changing daily schedules", "Remembering whether a dose was already taken", "Relying on alarms that may be missed or ignored", "Coordinating routines with family or caregivers"];
const journey = ["Research", "User Interviews", "Survey Analysis", "Product Design", "Prototype Construction", "Testing", "Evaluation", "Future Improvements"];

function Index() {
  return (
    <>
      <section className="bg-pale">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-2">
          <div className="fade-up">
            <p className="eyebrow">Student-led healthcare innovation</p>
            <h1 className="mt-4 text-4xl font-extrabold md:text-6xl">Remembering medication should not have to be a daily struggle.</h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              SmartMed is a student-led project exploring how accessible technology can help people organise their medicines, recognise scheduled doses, and navigate everyday medication routines with greater clarity.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/solution" className="rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-90">Explore SmartMed</Link>
              <Link to="/research" className="rounded-lg border border-navy/20 bg-background px-5 py-3 font-semibold text-navy hover:bg-secondary">Discover the Research</Link>
            </div>
            <p className="mt-6 font-mono text-xs text-muted-foreground">A human-centred medication management prototype developed by Achintya V.</p>
          </div>
          <figure>
            <img src={img} alt="Illustrative render of a medicine organiser with eight drawers, a small display and a button" width={1280} height={960} className="w-full rounded-2xl shadow-xl" />
            <figcaption className="mt-2 font-mono text-xs text-muted-foreground">Illustrative render — actual prototype photograph to be added from the project report.</figcaption>
          </figure>
        </div>
      </section>

      <Section eyebrow="The problem behind the project" title="Small daily challenges can have important consequences.">
        <div className="grid gap-10 md:grid-cols-2">
          <p className="text-muted-foreground">People managing several medicines can face everyday difficulties. Pill organisers, written schedules and phone alarms are useful, but they may not address every user's needs — particularly when reminders are separated from the medicine itself.</p>
          <ul className="grid gap-3">
            {challenges.map((c) => <li key={c} className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />{c}</li>)}
          </ul>
        </div>
      </Section>

      <Section tone="warm" eyebrow="Introducing SmartMed" title="Designed around the everyday medication routine.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div key={f} className="card-soft p-5">
              <p className="font-mono text-xs text-teal">0{i + 1}</p>
              <p className="mt-2 font-display font-bold text-navy">{f}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Approach" title="What makes this project meaningful?">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <Card icon={<Search className="h-5 w-5" />} title="Understand the user">Research how people manage medication in everyday life.</Card>
          <Card icon={<PenTool className="h-5 w-5" />} title="Design with purpose">Translate user needs into practical product specifications.</Card>
          <Card icon={<Wrench className="h-5 w-5" />} title="Build and test">Develop a physical prototype and evaluate its functions.</Card>
          <Card icon={<RefreshCw className="h-5 w-5" />} title="Learn and improve">Use testing evidence to identify limitations and future opportunities.</Card>
        </div>
      </Section>

      <Section tone="pale" eyebrow="Project journey" title="From listening to building.">
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {journey.map((j, i) => (
            <li key={j} className="flex items-center gap-3 rounded-xl bg-background p-4">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy font-mono text-xs text-navy-foreground">{i + 1}</span>
              <span className="font-medium text-navy">{j}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="rounded-3xl bg-navy px-8 py-14 text-center text-navy-foreground">
          <h2 className="text-3xl font-bold text-navy-foreground md:text-4xl">Better solutions begin by listening.</h2>
          <p className="mx-auto mt-4 max-w-2xl opacity-85">SmartMed is an evolving project. Insights from users, caregivers, educators, and healthcare professionals can help identify the improvements that matter most.</p>
          <Link to="/get-involved" className="mt-8 inline-flex rounded-lg bg-teal px-5 py-3 font-semibold text-navy hover:opacity-90">Share Your Perspective</Link>
        </div>
      </Section>
    </>
  );
}
