import { createFileRoute } from "@tanstack/react-router";
import { Archive, Monitor, BellRing, CircleCheck, Wifi, Home } from "lucide-react";
import img from "@/assets/prototype-illustrative.jpg";
import { IllustrativeImg, Notice, PageHero, Section, meta } from "@/components/site";

export const Route = createFileRoute("/solution")({
  head: () => meta("The SmartMed Solution", "Eight drawers, an OLED display, scheduled audio and LED reminders, a confirmation button and a Wi-Fi scheduling interface in one prototype."),
  component: Page,
});

const features = [
  { i: Archive, t: "Individual medication drawers", d: "The final prototype includes eight individual drawers, so different medicines can be stored separately and the correct compartment is easier to identify." },
  { i: Monitor, t: "Digital information display", d: "An OLED display is intended to present relevant medication information and timing details." },
  { i: BellRing, t: "Scheduled reminders", d: "A real-time clock and programmed schedule trigger a reminder sequence: an audio alert sounds and the LED on the relevant drawer lights up." },
  { i: CircleCheck, t: "User confirmation", d: "A physical button lets the user confirm the reminder. A button press records confirmation — it does not verify that the medicine was actually swallowed." },
  { i: Wifi, t: "Connected interface", d: "An ESP32 microcontroller hosts a Wi-Fi interface for entering schedules and medicine information, and communicates with the hardware. This is a prototype interface, not a secure production app." },
  { i: Home, t: "Designed for everyday use", d: "Priorities: readability, simplicity, clear feedback, organised storage, ease of interaction and practical placement at home." },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="The solution" title="One device. A more structured medication routine.">
        SmartMed combines organised storage with reminders, visible information, drawer identification and user interaction.
      </PageHero>
      <Section>
        <IllustrativeImg src={img} alt="Illustrative render of SmartMed with drawers, display and button" className="mx-auto max-w-4xl" />
      </Section>
      <Section tone="warm">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ i: Icon, t, d }, n) => (
            <div key={t} className="card-soft p-6">
              <div className="flex items-center justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent text-accent-foreground"><Icon className="h-5 w-5" /></div>
                <span className="font-mono text-xs text-muted-foreground">Feature {n + 1}</span>
              </div>
              <h3 className="mt-4 text-lg font-bold">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <Notice title="Important limitations">SmartMed is a prototype. It is not a substitute for medical advice, a pharmacist's instructions, or a clinically validated medication-management device.</Notice>
      </Section>
    </>
  );
}
