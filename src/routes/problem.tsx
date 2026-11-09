import { createFileRoute } from "@tanstack/react-router";
import { Clock, Pill, HelpCircle, CalendarClock, Accessibility, Users, Stethoscope, IndianRupee, HeartHandshake } from "lucide-react";
import { Card, PageHero, Section, meta } from "@/components/site";
import { Bullets, Conclusion, P, Part, Stat, Sub, SubNav } from "@/components/report";

export const Route = createFileRoute("/problem")({
  head: () => meta("The Problem", "Why SmartMed was developed: forgotten doses, confusing medicines, missed alarms, the consequences of non-adherence and the limits of existing solutions."),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="The problem" title="Design focus area: medication management and reminder systems">
        Managing regular medicines sounds simple — until several medicines, changing days, and fading memory combine.
      </PageHero>
      <SubNav items={[["focus", "Focus area"], ["importance", "Why it matters"], ["consequences", "Consequences"], ["existing", "Existing solutions"], ["challenges", "Challenges explored"], ["challenge", "Design challenge"]]} />

      <Part id="focus" eyebrow="1. Design focus area" title="Managing daily medication schedules accurately and consistently">
        <Sub title="The core challenge">
          <P>A major challenge faced by many people is managing their daily medication schedules accurately and consistently. Individuals who take multiple medicines each day often struggle to remember the correct timing, dosage, and sequence of tablets. This issue is particularly common among elderly users, patients with chronic illnesses, and individuals with busy lifestyles.</P>
        </Sub>
        <Sub title="Why mistakes happen">
          <P>Missing medication or taking it at the wrong time can reduce the effectiveness of treatment and may lead to serious health complications. Users may accidentally skip doses, take duplicate doses, or confuse medicines that look similar. Traditional storage methods such as pill boxes and medicine packets help organise medication but do not actively remind users when to take their medicines or help prevent mistakes.</P>
        </Sub>
        <Sub title="Current reliance on memory and alarms">
          <P>Many people currently rely on phone alarms, written notes, or memory alone to manage their medication schedules. However, these methods are not always reliable, especially for users with hearing difficulties, memory decline, or complex medication routines. As healthcare becomes increasingly dependent on technology, there is a growing need for smarter systems that can improve medication organisation, reduce human error, and provide clear and accessible reminders.</P>
        </Sub>
      </Part>

      <Part id="importance" tone="pale" eyebrow="2. Why is this area important?" title="Medication adherence is a global healthcare issue">
        <div className="grid gap-4 md:grid-cols-3">
          <Stat v="426">studies examined in a 2024 review of medication dispensing and reminder systems</Stat>
          <Stat v="56">studies selected from that review for detailed analysis</Stat>
          <Stat v="NHS">research indicates many people miss doses because they forget, become distracted, or lack a suitable reminder system</Stat>
        </div>
        <Sub title="Essential to long-term health">
          <P>Taking medication correctly is an essential part of maintaining health and managing long-term medical conditions. Research from the NHS indicates that many people miss doses because they forget, become distracted, or do not have a reminder system that suits their lifestyle. This challenge becomes greater for older adults, who may experience memory decline, reduced hearing, or more complex prescription schedules.</P>
        </Sub>
        <Sub title="A significant body of research">
          <P>A 2024 review of medication dispensing and reminder systems examined 426 studies and selected 56 for detailed analysis. The large volume of research highlights the significance of medication adherence as a global healthcare issue. The findings suggest that improving medication management remains an important opportunity for designers and engineers to develop solutions that support users in their daily lives.</P>
        </Sub>
        <Sub title="A growing need">
          <P>Increasing life expectancy and the growing number of people living with chronic illnesses mean that more individuals are required to manage multiple medications over long periods. This increases the need for reliable systems that can support users and reduce medication-related errors.</P>
        </Sub>
      </Part>

      <Part id="consequences" eyebrow="3. Consequences of medication non-adherence" title="Effects on individuals and society">
        <div className="grid gap-5 md:grid-cols-3">
          <Card icon={<Stethoscope className="h-5 w-5" />} title="Medical consequences">Missing doses may cause treatments to become less effective and can lead to the worsening of chronic conditions such as diabetes, heart disease, or high blood pressure. In some cases, incorrect medication use can result in medical emergencies or hospitalisation.</Card>
          <Card icon={<IndianRupee className="h-5 w-5" />} title="Economic consequences">Medication-related mistakes contribute to unnecessary healthcare costs through additional doctor visits, emergency treatment, hospital admissions, and wasted medication. These costs place additional pressure on healthcare systems.</Card>
          <Card icon={<HeartHandshake className="h-5 w-5" />} title="Social & caregiver consequences">Family members and caregivers often help manage medication schedules. Constant monitoring can create stress, anxiety, and caregiver burnout, particularly when supporting elderly patients or individuals with multiple prescriptions. Improving medication management can help reduce this burden and promote greater independence.</Card>
        </div>
      </Part>

      <Part id="existing" tone="warm" eyebrow="4. The issue with existing solutions" title="Why existing solutions may fall short">
        <div className="grid gap-5 md:grid-cols-2">
          <Card title="Traditional pill organisers">Widely used, but passive systems that only organise medication. They do not remind users when medication is due, confirm whether medication has been taken, or prevent accidental mistakes.</Card>
          <Card title="Phone alarms & written reminders">Can be ignored, forgotten, or switched off without action being taken. Users may still struggle to identify the correct medication, particularly when several tablets look similar.</Card>
          <Card title="Written medication charts">Useful for reference, but depend on regular updating and user interaction.</Card>
          <Card title="Advanced smart dispensers">Many are expensive and may not be affordable for all users. Some require subscription services, internet connectivity, or complex setup procedures, which can discourage elderly users and those with limited technical knowledge.</Card>
        </div>
        <Conclusion>As a result, many people continue to rely on basic reminder methods that do not adequately support medication management. There is a need for a medication management system that is affordable, easy to use, and capable of actively assisting users through clear reminders, medication identification, and controlled dispensing — improving adherence while remaining accessible to a wider range of users.</Conclusion>
      </Part>

      <Section eyebrow="5. Understanding the challenges" title="The issues explored in this project">
        <div id="challenges" className="scroll-mt-32 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Card icon={<Clock className="h-5 w-5" />} title="Forgotten doses">Busy or unusual days make it easy to miss a scheduled time entirely.</Card>
          <Card icon={<Pill className="h-5 w-5" />} title="Confusion between medicines">Similar-looking tablets can be mixed up, especially without clear labels.</Card>
          <Card icon={<HelpCircle className="h-5 w-5" />} title="“Did I already take it?”">Uncertainty about whether a dose was taken can lead to missed or repeated doses.</Card>
          <Card icon={<CalendarClock className="h-5 w-5" />} title="Busy schedules">Routines shift with travel, work and family, and schedules can slip.</Card>
          <Card icon={<Accessibility className="h-5 w-5" />} title="Accessibility barriers">Hearing, vision or memory difficulties can make standard reminders harder to use.</Card>
          <Card icon={<Users className="h-5 w-5" />} title="Caregiver responsibilities">Family members often give repeated reminders or supervise complex routines.</Card>
        </div>
        <div className="mt-8">
          <p className="font-display font-bold text-navy">Accessibility design considerations (not guarantees)</p>
          <div className="mt-3"><Bullets cols items={["Clear text", "Readable displays", "Simple controls", "Audible prompts", "Visible indicators", "Straightforward setup", "Caregiver involvement"]} /></div>
        </div>
      </Section>

      <Section tone="pale" eyebrow="6. The design challenge">
        <blockquote id="challenge" className="scroll-mt-32 font-display text-2xl font-bold leading-snug text-navy md:text-4xl">
          “How might we develop a medication-management system that is easy to understand, provides timely reminders, helps users identify the intended medicine, and remains practical and affordable?”
        </blockquote>
      </Section>
    </>
  );
}
