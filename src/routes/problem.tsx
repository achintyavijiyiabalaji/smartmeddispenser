import { createFileRoute } from "@tanstack/react-router";
import { Clock, Pill, HelpCircle, CalendarClock, Accessibility, Users } from "lucide-react";
import { Card, PageHero, Section, meta } from "@/components/site";

export const Route = createFileRoute("/problem")({
  head: () => meta("The Problem", "Why SmartMed was developed: forgotten doses, confusing medicines, missed alarms and caregiver pressure in everyday medication routines."),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="The problem" title="Why SmartMed was developed">
        Managing regular medicines sounds simple — until several medicines, changing days, and fading memory combine.
      </PageHero>
      <Section eyebrow="A. Understanding the challenges" title="The issues explored in this project">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Card icon={<Clock className="h-5 w-5" />} title="Forgotten doses">Busy or unusual days make it easy to miss a scheduled time entirely.</Card>
          <Card icon={<Pill className="h-5 w-5" />} title="Confusion between medicines">Similar-looking tablets can be mixed up, especially without clear labels.</Card>
          <Card icon={<HelpCircle className="h-5 w-5" />} title="“Did I already take it?”">Uncertainty about whether a dose was taken can lead to missed or repeated doses.</Card>
          <Card icon={<CalendarClock className="h-5 w-5" />} title="Busy schedules">Routines shift with travel, work and family, and schedules can slip.</Card>
          <Card icon={<Accessibility className="h-5 w-5" />} title="Accessibility barriers">Hearing, vision or memory difficulties can make standard reminders harder to use.</Card>
          <Card icon={<Users className="h-5 w-5" />} title="Caregiver responsibilities">Family members often give repeated reminders or supervise complex routines.</Card>
        </div>
      </Section>
      <Section tone="warm" eyebrow="B. Existing approaches" title="Why existing solutions may fall short — for some people">
        <div className="grid gap-5 md:grid-cols-2">
          <Card title="Traditional pill organisers">Useful for organising medicines, but do not inherently provide scheduled alerts or confirm a dose.</Card>
          <Card title="Phone alarms">Convenient, but may be missed, dismissed, or separated from the medicine itself.</Card>
          <Card title="Written medication charts">Useful for reference, but depend on regular updating and user interaction.</Card>
          <Card title="Automated dispensers">Can offer advanced features, but may involve higher costs, complicated setup, connectivity needs or ongoing fees.</Card>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">None of these approaches is ineffective. Suitability depends on the individual and their needs.</p>
      </Section>
      <Section eyebrow="C. Why accessibility matters" title="Design considerations, not guarantees">
        <div className="flex flex-wrap gap-3">
          {["Clear text", "Readable displays", "Simple controls", "Audible prompts", "Visible indicators", "Straightforward setup", "Caregiver involvement"].map((t) => (
            <span key={t} className="rounded-full bg-accent px-4 py-2 font-medium text-accent-foreground">{t}</span>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-muted-foreground">These were treated as important considerations in the design. They are not proof that SmartMed is accessible for every disability.</p>
      </Section>
      <Section tone="pale" eyebrow="D. The design challenge">
        <blockquote className="font-display text-2xl font-bold leading-snug text-navy md:text-4xl">
          “How might we develop a medication-management system that is easy to understand, provides timely reminders, helps users identify the intended medicine, and remains practical and affordable?”
        </blockquote>
      </Section>
    </>
  );
}
