import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Notice, PageHero, Section, meta } from "@/components/site";

export const Route = createFileRoute("/get-involved")({
  head: () => meta("Get Involved", "Share feedback to help shape the next stage of SmartMed — for users, caregivers, engineers, educators and healthcare professionals."),
  component: Page,
});

const roles = ["User", "Caregiver", "Healthcare Professional", "Engineer or Designer", "Educator", "Other"];
const qs = [
  ["challenges", "What challenges do you think a medication-management system should address?", true],
  ["features", "Which features seem most useful?", true],
  ["concerns", "What concerns would you have about using this type of device?", false],
  ["easier", "What would make the system easier to use?", false],
  ["testing", "What should be tested before real-world use?", false],
] as const;

function Page() {
  const [errors, setErrors] = useState<string[]>([]);
  const [status, setStatus] = useState<"" | "unconfigured">("");

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const errs: string[] = [];
    if (f.get("website")) return; // honeypot
    if (!f.get("role")) errs.push("Please select your role.");
    if (!String(f.get("challenges") || "").trim()) errs.push("Please describe the challenges to address.");
    if (!String(f.get("features") || "").trim()) errs.push("Please tell us which features seem useful.");
    const email = String(f.get("email") || "").trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.push("Please enter a valid email address.");
    if (email && !f.get("consent")) errs.push("Please confirm consent to be contacted, or remove your email.");
    setErrors(errs);
    if (!errs.length) setStatus("unconfigured");
  }

  const field = "mt-2 w-full rounded-lg border border-input bg-background p-3 focus:border-primary";
  return (
    <>
      <PageHero eyebrow="Get involved" title="Help shape the next stage of SmartMed.">
        We welcome perspectives from people who manage regular medicines, caregivers, educators, engineers, and healthcare professionals. Their insights could help identify what needs to improve before the prototype progresses further.
      </PageHero>
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_340px]">
          <form onSubmit={submit} noValidate className="space-y-6">
            <div>
              <label htmlFor="role" className="font-semibold text-navy">Your role *</label>
              <select id="role" name="role" className={field} defaultValue=""><option value="" disabled>Select…</option>{roles.map((r) => <option key={r}>{r}</option>)}</select>
            </div>
            {qs.map(([n, l, req]) => (
              <div key={n}>
                <label htmlFor={n} className="font-semibold text-navy">{l}{req && " *"}</label>
                <textarea id={n} name={n} rows={3} maxLength={1500} className={field} />
              </div>
            ))}
            <div>
              <label htmlFor="email" className="font-semibold text-navy">Email (optional)</label>
              <input id="email" name="email" type="email" maxLength={255} className={field} />
            </div>
            <label className="flex gap-3"><input type="checkbox" name="consent" className="mt-1.5" />I consent to being contacted about my feedback.</label>
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
            {errors.length > 0 && <div role="alert" className="rounded-lg bg-destructive/10 p-4 text-sm text-destructive"><ul>{errors.map((e) => <li key={e}>{e}</li>)}</ul></div>}
            {status === "unconfigured" && (
              <Notice title="Your response has not been saved">Feedback storage isn't set up yet, so submissions can't be stored. Please check back soon.</Notice>
            )}
            <button className="rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90">Send feedback</button>
            <p className="text-sm text-muted-foreground"><strong>Privacy:</strong> Please don't include prescriptions, diagnoses or medication lists. Feedback is never published without separate permission.</p>
          </form>
          <aside className="space-y-4">
            <div className="rounded-xl bg-pale p-6">
              <h2 className="text-xl font-bold">Collaborate</h2>
              <p className="mt-2 text-sm text-muted-foreground">We'd value future engagement from:</p>
              <ul className="mt-3 space-y-1.5 text-sm">
                {["Assistive-technology designers", "Product engineers", "Accessibility specialists", "Healthcare professionals", "Community organisations", "Potential research mentors"].map((c) => <li key={c}>• {c}</li>)}
              </ul>
              <p className="mt-4 text-xs text-muted-foreground">No organisation has endorsed or partnered with SmartMed.</p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
