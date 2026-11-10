import { createFileRoute } from "@tanstack/react-router";
import { PageHero, meta } from "@/components/site";
import { Box, Bullets, Conclusion, P, Part, Stat, Sub, SubNav, Table } from "@/components/report";
import { ReportImages } from "@/components/report-images";

export const Route = createFileRoute("/design")({
  head: () => meta("Design & Development", "SmartMed's existing-product analysis, design specification, weight and capacity research, material and battery selection, standards, safety analysis and final specifications."),
  component: Page,
});

const products = [
  { n: "MedaCube Automatic Pill Dispenser", url: "https://www.medacube.com/products/medacube-automatic-pill-dispenser", price: "₹1,92,000",
    f: ["Stores up to 16 medications", "Up to 90-day medication supply", "Audio and visual reminders", "Caregiver notifications for missed doses", "Wi-Fi connectivity", "Touchscreen interface", "Locking system for safety", "Battery backup available", "Tracks medication adherence automatically"],
    a: ["Very large medication capacity", "Suitable for users taking many medications", "Caregiver monitoring improves safety", "Strong medication tracking features"],
    d: ["Very expensive", "Large physical size", "Setup and loading process can be complicated for some users"] },
  { n: "Hero Health", url: "https://herohealth.com/our-product/", price: "$459.87 initial + $44.99/month",
    f: ["Stores up to 10 medications", "Up to 90-day supply", "One-button dispensing", "Audio and flashing light reminders", "Mobile app integration", "Missed-dose alerts", "Caregiver monitoring", "Medication history tracking"],
    a: ["Easy to use", "Strong app integration", "Caregiver support features", "Good medication tracking"],
    d: ["Requires subscription for full functionality", "Lower medication capacity than MedaCube", "Dependence on internet services", "Expensive"] },
  { n: "LiveFine Smart Wi-Fi Automatic Pill Dispenser", url: "https://www.livefineproduct.com/products/smart-wifi-automatic-pill-dispenser", price: "₹19,200",
    f: ["Wi-Fi enabled", "Mobile app control", "Audio and visual reminders", "Large LCD display", "Lockable cover", "Up to 28 days capacity", "Up to 9 daily dosage schedules", "Remote caregiver monitoring"],
    a: ["More affordable than premium competitors", "Mobile app integration", "Easy-to-read display", "Multiple reminder options"],
    d: ["Smaller medication capacity", "Requires more frequent refilling", "Limited number of compartments compared to premium systems"] },
  { n: "e-pill ME1", url: "https://www.epill.com/me1.html", price: "₹47,040",
    f: ["28 medication compartments", "Up to 6 alarms per day", "Loud audio reminders", "Flashing light alerts", "Locked medication tray", "Battery backup", "Simple button controls", "Large LCD display"],
    a: ["Easy to operate", "Large compartment capacity", "Strong audio alerts", "Suitable for elderly users"],
    d: ["No smartphone app", "No Wi-Fi connectivity", "Basic interface", "Limited monitoring features", "Expensive"] },
  { n: "Pill-Sync Smart Pillbox (Self-Learning)", url: "https://www.amazon.in/Pill-Sync-Smart-Pillbox-Self-Learning/dp/B0D6ZBMGY3", price: "₹14,849",
    f: ["Patented self-learning technology", "No programming required", "Learns the user's medication-taking routine automatically", "Missed-dose alerts only when medication is forgotten", "Smart compartment sensors", "Built-in digital assistant", "LED indicators for compartment status", "Warning if the wrong compartment is opened", "USB-C rechargeable battery", "7 daily compartments", "Holds up to 22 aspirin-sized tablets per compartment"],
    a: ["Very easy to set up since no programming is required", "Self-learning system reduces unnecessary alarms", "Detects missed doses automatically", "Rechargeable battery improves portability", "Warns users if the wrong compartment is opened"],
    d: ["No smartphone app connectivity", "No caregiver notifications", "No automatic dispensing mechanism", "Limited to reminder functionality", "Only supports one-week medication organisation"] },
  { n: "MedQ Reminder (flashing, beeping)", url: "https://www.amazon.in/MedQ-Reminder-Flashing-Beeping-Keychain/dp/B076653C1D", price: "₹12,900",
    f: ["Audible beeping medication reminders", "Flashing LED light alerts", "Programmable medication schedule", "14 removable medication compartments", "Configurable for 1 dose/day for 2 weeks or 2 doses/day for 1 week", "Repeating alarm cycle until medication is taken", "Battery-powered (AA batteries)", "Large easy-open compartment tabs", "Portable design with removable compartments", "Visual guidance showing exactly which compartment to open"],
    a: ["Very simple to use and set up", "Combines audio and visual reminders", "Repeating alarms reduce missed doses", "Portable and battery-powered", "Helps prevent confusion by indicating the correct compartment"],
    d: ["No smartphone app connectivity", "No Wi-Fi or Bluetooth communication", "No caregiver notifications", "Does not automatically dispense medication", "No medication tracking or history records", "Requires manual refilling and user action"] },
];

const spec: Record<string, [string, string][]> = {
  "Human factors": [
    ["The product must be simple and intuitive to use.", "Lakshmi (72) would prefer a simple device with only essential functions and would likely require assistance during setup. The product should minimise complexity."],
    ["The product must provide clear audio reminders.", "80% of respondents believed sound reminders would be helpful. Audio alerts help users who may not always be looking at the device."],
    ["The product must provide clear visual information.", "82% said a screen displaying medicine names and timings would be useful."],
    ["The display must be easy to read.", "Many users are elderly and may have reduced vision — clear text, adequate contrast and appropriate font size."],
    ["The dispensing confirmation button must be large and easy to operate.", "Elderly users and those with reduced dexterity may struggle with small controls."],
    ["The product must minimise medication confusion.", "46% found it difficult to distinguish between medicines; 32% had taken the wrong medicine or dose. Medication should be clearly identified before dispensing."],
    ["The product must support users with memory difficulties.", "64% forget doses at least occasionally; the device should actively remind users."],
  ],
  "Aesthetic factors": [
    ["Clean and professional appearance.", "Medical devices should inspire confidence and trust; a modern appearance encourages regular use."],
    ["Non-intimidating design.", "Some users are uncomfortable with complex technology; it should look friendly and approachable."],
    ["Compact — suits a bedside table, kitchen counter or desk.", "Medication is often stored in convenient places around the home."],
    ["Colour scheme should improve visibility and usability.", "Buttons, indicators and display information should stand out from the housing."],
    ["Conceal internal electronics.", "Visible wiring reduces perceived quality and creates safety concerns."],
  ],
  "Technical factors": [
    ["Store medication securely.", "Prevent tablets falling out unintentionally while allowing controlled dispensing."],
    ["Provide scheduled medication reminders.", "Remembering timing was the most common challenge (62%)."],
    ["Display medication information before dispensing.", "Helps users confirm the correct medication and reduces errors."],
    ["Dispense only after user confirmation.", "78% considered dose confirmation important; a button press reduces accidental dispensing."],
    ["Support app-based scheduling.", "Phone alarms are the most widely used reminder method; an app allows convenient scheduling."],
    ["Provide both audio and visual alerts.", "Multiple methods make reminders more likely to be noticed by different user groups."],
    ["Operate using a rechargeable battery system.", "Reduces disposable battery use and improves portability."],
    ["Minimum operating time of several days between charges.", "Frequent charging may discourage consistent use."],
    ["Retain medication schedules during power interruptions.", "Users should not need to re-enter schedules after power loss."],
    ["Incorporate an OLED display.", "High contrast and good readability with relatively low power."],
    ["Include status indicators.", "Lets users monitor battery level, device status and operation."],
    ["Use a robust dispensing mechanism.", "Reliably dispense without jamming or damaging tablets."],
    ["Manufacture using a custom PCB.", "Improves reliability, reduces wiring complexity, more professional result."],
  ],
  "Environmental factors": [
    ["Rechargeable rather than disposable batteries.", "Reduces waste and long-term environmental impact."],
    ["Durable housing materials.", "Increases lifespan and reduces replacement frequency."],
    ["Minimise material usage.", "Lowers manufacturing cost and environmental impact."],
    ["Repairable and maintainable.", "Batteries and electronic modules should be accessible for replacement."],
    ["Energy efficient.", "The device spends most of its life waiting for reminders; efficient power management extends battery life."],
    ["Designed for long-term use.", "Medication management is often required over many years."],
  ],
};

const materials: { n: string; props: string[]; adv: string[]; dis: string[] }[] = [
  { n: "PLA (Polylactide)", props: ["Low density — lightweight, improves portability", "High rigidity — maintains shape under normal loads", "Good dimensional accuracy — minimal warping when 3D printing", "Biodegradable source material — derived from renewable resources such as corn starch", "Low heat resistance — softens at relatively low temperatures", "Brittle behaviour — fractures rather than deforms under high impact"],
    adv: ["Very easy to 3D print, with minimal warping", "Low cost and widely available", "Excellent dimensional accuracy", "Good, smooth surface finish", "Environmentally friendlier than many plastics"],
    dis: ["Brittle compared to engineering plastics; can crack under impact", "Softens/deforms at elevated temperatures, e.g. direct sunlight", "Lower durability — repeated use may wear moving components"] },
  { n: "PETG (Polyethylene Terephthalate Glycol)", props: ["High impact resistance — absorbs knocks and drops without cracking", "Moderate weight — low density with good structural strength", "Good moisture resistance — protects medication and keeps dimensional stability", "High toughness — bends slightly before breaking", "Good chemical resistance — withstands household cleaning products", "Smooth surface finish — professional appearance"],
    adv: ["Significantly tougher than PLA, less likely to crack if dropped", "Does not absorb moisture easily, protecting storage compartments", "Durable under repeated handling and opening of compartments", "Suitable for common 3D printers with strong, accurate parts", "Smooth, clean finish appropriate for healthcare products"],
    dis: ["More difficult to print than PLA — higher temperatures and careful settings", "Higher material cost than PLA", "Stringing during printing requires additional finishing"] },
  { n: "Acrylic (PMMA)", props: ["Excellent optical clarity — can show internal compartments", "Low density — lightweight", "High surface hardness — smooth, attractive finish", "Good moisture resistance", "Rigid structure — good dimensional stability", "Low impact resistance — brittle, can crack or shatter"],
    adv: ["Transparent form allows visibility of stored medication", "Attractive finish common in commercial display products"],
    dis: ["Relatively brittle; can crack or shatter under sudden impacts"] },
  { n: "ABS (Acrylonitrile Butadiene Styrene)", props: ["High toughness — absorbs impacts and stresses", "Good heat resistance — more stable than PLA", "Lightweight construction", "Good fatigue resistance — suits moving mechanisms", "Good machinability — can be drilled, cut, shaped", "Moderate moisture resistance — fine in normal indoor humidity"],
    adv: ["Excellent toughness under rough handling", "Commonly used in consumer electronics and appliance housings", "Good heat resistance", "Lightweight", "Durable for moving mechanisms"],
    dis: ["Prone to warping in 3D printing; often needs specialised equipment", "Produces fumes — ventilation required", "Lower dimensional accuracy due to warping", "More challenging for beginners"] },
  { n: "Birch plywood", props: ["High strength-to-weight ratio", "Natural, renewable material", "Good stiffness from layered construction", "Easy machining with common workshop tools", "Moisture sensitivity — can swell or warp", "Textured wood-grain surface needs finishing"],
    adv: ["Sustainable, lower environmental impact than many plastics", "Easy to cut, drill and assemble", "Good strength-to-weight ratio", "Inexpensive and widely available", "Warm, attractive natural appearance"],
    dis: ["Poor moisture resistance", "Less hygienic — porous surface harder to clean", "Complex mechanisms and tight tolerances are harder", "May splinter during machining"] },
];

function List({ items }: { items: string[] }) {
  return <ul className="list-disc space-y-1 pl-4">{items.map((i) => <li key={i}>{i}</li>)}</ul>;
}

function Page() {
  return (
    <>
      <PageHero eyebrow="Design & development" title="From research to specification">
        Existing-product analysis, a design specification, supporting research on weight, capacity and packaging, material and battery selection, standards, safety and the final specification.
      </PageHero>
      <SubNav items={[["ideations", "Ideations"], ["products", "Existing products"], ["spec", "Design specification"], ["further", "Further research"], ["materials", "Materials"], ["battery", "Battery & charging"], ["standards", "Standards"], ["safety", "Safety"], ["led", "LED colour"], ["final", "Final specifications"], ["working-drawings", "Working drawings"]]} />

      <Part id="ideations" eyebrow="Concept development" title="Original ideation drawings">
        {["Ideation 1", "Ideation 2", "Ideation 3", "Ideation 4"].map((group) => <Sub key={group} title={group}><ReportImages group={group} /></Sub>)}
      </Part>

      <Part id="products" eyebrow="1. Existing products analysis" title="Six products with the same purpose" intro="Prices are as recorded during research and are not current market prices.">
        <div className="grid gap-5 lg:grid-cols-2">
          {products.map((p, i) => (
            <div key={p.n} className="card-soft p-6">
              <p className="font-mono text-xs text-teal">Product {i + 1}</p>
              <h3 className="font-display text-xl font-bold text-navy">{p.n}</h3>
              <p className="mt-1 font-mono text-sm">{p.price}</p>
              <a href={p.url} target="_blank" rel="noreferrer" className="mt-1 block break-all text-xs text-muted-foreground underline">{p.url}</a>
              <div className="mt-4 grid gap-4 text-sm sm:grid-cols-3">
                <div><p className="mb-1 font-semibold text-navy">Features</p><List items={p.f} /></div>
                <div><p className="mb-1 font-semibold text-navy">Advantages</p><List items={p.a} /></div>
                <div><p className="mb-1 font-semibold text-navy">Disadvantages</p><List items={p.d} /></div>
              </div>
            </div>
          ))}
        </div>
      </Part>

      <Part id="spec" tone="pale" eyebrow="2. Design specification" title="Requirements and their justification">
        {Object.entries(spec).map(([cat, rows]) => (
          <Sub key={cat} title={cat}>
            <Table head={["Specification", "Justification"]} rows={rows} />
          </Sub>
        ))}
      </Part>

      <Part id="further" eyebrow="3. Further research" title="Weight, capacity and packaging">
        <Sub title="3.1 Structural weight of stored medication">
          <Table head={["Medication type", "Average weight per tablet"]} rows={[["Small tablet", "0.15–0.30 g"], ["Standard tablet", "0.30–0.60 g"], ["Large tablet", "0.60–1.20 g"]]} />
          <P>For design calculations, an average weight of 0.5 g per tablet was assumed, with 8 compartments of 20 tablets each.</P>
          <div className="grid gap-4 md:grid-cols-3">
            <Stat v="160">tablets stored</Stat><Stat v="0.5 g">average tablet weight</Stat><Stat v="80 g">total medication weight</Stat>
          </div>
        </Sub>
        <Sub title="3.2 Product weight and portability">
          <div className="grid gap-5 md:grid-cols-2">
            <Table head={["User group", "Comfortable carrying weight"]} rows={[["Child (10–15 years)", "1–3 kg"], ["Young adult", "5–10 kg"], ["Adult", "5–15 kg"], ["Elderly user (65+)", "1–5 kg"], ["Arthritis/Parkinson's users", "Preferably below 2 kg"]]} />
            <Table head={["Existing product", "Approximate weight"]} rows={[["LiveFine Smart Dispenser", "1.3–1.8 kg"], ["Hero Smart Dispenser", "4.5–5 kg"], ["MedaCube", "12–15 kg"]]} />
          </div>
          <P>Many medication users are elderly or have reduced grip strength, arthritis, tremors, or muscle weakness.</P>
          <div className="grid gap-4 md:grid-cols-2">
            <Box title="A very heavy device may"><Bullets items={["Be difficult to refill", "Be difficult to move for cleaning", "Increase the risk of dropping"]} /></Box>
            <Box title="A device that is too light may"><Bullets items={["Move during dispensing", "Feel unstable", "Appear less robust"]} /></Box>
          </div>
          <Conclusion>An ideal product weight is between 0.8 kg and 1.5 kg — stable while remaining portable and inclusive for elderly users and users with reduced strength.</Conclusion>
        </Sub>
        <Sub title="3.3 Number of compartments">
          <Table head={["Age group", "Typical number of different medications"]} rows={[["Under 18", "0–2"], ["18–30", "1–3"], ["31–50", "2–5"], ["51–70", "4–8"], ["Above 70", "5–10"]]} />
          <P>The product is primarily intended for adults, older adults and elderly users, many of whom take 4–8 different medications daily. Only 4 compartments would exclude many users; 10 or more would increase size and complexity.</P>
          <Conclusion>About 8 compartments balances user needs, product size and manufacturing complexity.</Conclusion>
        </Sub>
        <Sub title="3.4 Tablet capacity per compartment">
          <Table head={["Medication type", "Typical daily consumption"]} rows={[["Prescription medication", "1–2 tablets/day"], ["Vitamins", "1 tablet/day"], ["Chronic disease medication", "1–3 tablets/day"]]} />
          <Conclusion>15–20 tablets per compartment meets most intended users' needs while keeping the product compact and reducing refill frequency.</Conclusion>
        </Sub>
        <Sub title="3.5 Medication packaging analysis">
          <P>Tablets can be stored in their original blister packaging or individually without it.</P>
          <div className="grid gap-4 md:grid-cols-2">
            <Box title="In blister packaging — advantages"><Bullets items={["Protects from moisture and contamination", "Preserves manufacturer labelling and expiry information", "Reduces risk of tablet damage", "Maintains pharmaceutical safety standards"]} /></Box>
            <Box title="In blister packaging — disadvantages"><Bullets items={["Requires larger compartments", "Difficult to automate dispensing", "Different blister sizes create design challenges", "Increases product size significantly"]} /></Box>
          </div>
          <P>Blister packs protect against moisture, reduce contamination, maintain effectiveness and improve shelf life. However, most commercial pill organisers and smart dispensers require tablets to be removed before storage.</P>
          <Table head={["Factor", "In packaging", "Removed from packaging"]} rows={[["Moisture protection", "Excellent", "Moderate"], ["Ease of dispensing", "Poor", "Excellent"], ["Storage efficiency", "Poor", "Excellent"], ["Product size", "Larger", "Smaller"], ["Medication visibility", "Moderate", "Excellent"], ["Manufacturing complexity", "High", "Low"]]} />
          <Conclusion>Storing tablets individually, removed from blister packaging, is more suitable: it uses space efficiently, eases dispensing and keeps the product small. The design uses separate compartments for individual medications, kept secure and protected from contamination.</Conclusion>
        </Sub>
      </Part>

      <Part id="materials" tone="warm" eyebrow="4. Material analysis" title="Selecting the housing material">
        <Sub title="Required material properties">
          <Table head={["Property", "Reason"]} rows={[["Lightweight", "Elderly users should be able to move the product easily."], ["Sufficient strength", "Must support electronics, batteries, compartments and daily handling."], ["Easy to manufacture", "Suitable for 3D printing, laser cutting or school workshop equipment."], ["Good surface finish", "Should look professional and suitable for medical use."], ["Impact resistance", "Should survive accidental knocks or drops."], ["Moisture resistance", "Storage areas should not be affected by humidity."], ["Safe and non-toxic", "Users may frequently handle the product."], ["Cost effective", "Suitable for a student project budget."], ["Easy assembly", "Should allow screws, adhesives or snap-fit features."], ["Environmental sustainability", "Reasonable environmental credentials."]]} />
        </Sub>
        <Sub title="Selection rubric">
          <Table head={["Property", "Weighting (%)", "Importance"]} rows={[["Strength & durability", "20", "Very high"], ["Ease of manufacturing", "20", "Very high"], ["Lightweight", "15", "High"], ["Impact resistance", "10", "High"], ["Moisture resistance", "10", "High"], ["Appearance & surface finish", "10", "Medium"], ["Cost", "5", "Medium"], ["Ease of assembly", "5", "Medium"], ["Sustainability", "5", "Medium"], ["Total", "100", ""]]} />
          <P>Scoring: 5 = Excellent, 4 = Good, 3 = Average, 2 = Poor, 1 = Very poor. Weighted score = (Rating ÷ 5) × Weighting.</P>
        </Sub>
        <Sub title="Materials compared">
          <div className="grid gap-5 lg:grid-cols-2">
            {materials.map((m) => (
              <div key={m.n} className="card-soft p-6">
                <h4 className="font-display text-lg font-bold text-navy">{m.n}</h4>
                <div className="mt-3 grid gap-4 text-sm sm:grid-cols-3">
                  <div><p className="mb-1 font-semibold text-navy">Properties</p><List items={m.props} /></div>
                  <div><p className="mb-1 font-semibold text-navy">Advantages</p><List items={m.adv} /></div>
                  <div><p className="mb-1 font-semibold text-navy">Disadvantages</p><List items={m.dis} /></div>
                </div>
              </div>
            ))}
          </div>
        </Sub>
        <Sub title="Material evaluation">
          <Table head={["Criteria", "Weight", "PLA", "PETG", "Acrylic", "ABS", "Plywood"]} rows={[
            ["Strength & durability", "20", "3", "5", "3", "5", "3"],
            ["Ease of manufacturing", "20", "5", "4", "3", "2", "4"],
            ["Lightweight", "15", "4", "4", "4", "5", "5"],
            ["Impact resistance", "10", "2", "5", "2", "5", "3"],
            ["Moisture resistance", "10", "3", "5", "5", "5", "2"],
            ["Appearance", "10", "4", "4", "5", "4", "4"],
            ["Cost", "5", "5", "4", "3", "4", "5"],
            ["Ease of assembly", "5", "4", "4", "3", "4", "4"],
            ["Sustainability", "5", "5", "3", "2", "2", "5"],
            ["Weighted score (/100)", "", "76", "89", "68", "80", "73"],
          ]} />
          <Conclusion>
            <p className="font-bold">Selected material: PETG — 89/100</p>
            <p className="mt-1">PETG gives the best balance of strength, impact resistance, moisture resistance, lightweight construction, professional appearance and manufacturability. For a medication product, durability and reliability matter more than lowest cost; PETG withstands daily use, accidental knocks and varying conditions while remaining suitable for 3D printing or laser cutting.</p>
          </Conclusion>
        </Sub>
      </Part>

      <Part id="battery" eyebrow="5. Battery type & charging analysis" title="Powering the device">
        <Sub title="Required battery properties">
          <Table head={["Property", "Reason"]} rows={[["Rechargeable", "Reduces operating cost and waste."], ["Safe operation", "May be used by elderly users at home."], ["Long runtime", "Should operate for several days without charging."], ["Compact size", "Must fit within the housing."], ["Sufficient current output", "Must power ESP32, OLED, speaker, LEDs and motor."], ["Easy charging", "Users should recharge conveniently."], ["Availability", "Easy to replace or purchase."], ["Lightweight", "Supports portability."]]} />
        </Sub>
        <Sub title="Battery options">
          <Table head={["Battery", "Properties", "Advantages", "Disadvantages", "Evaluation"]} rows={[
            ["AA alkaline", "1.5 V per cell; non-rechargeable; widely available; low initial cost", "Easily available; simple to install; no charging circuit; familiar", "Frequent replacement; more waste; higher long-term cost; voltage drops; poor for motors and Wi-Fi", "Simple, but does not align with sustainable design and increases maintenance."],
            ["AA NiMH", "1.2 V per cell; rechargeable; moderate capacity", "Rechargeable hundreds of times; safer than lithium; widely available; lower impact than disposables", "Lower energy density; multiple cells; bulky holder; shorter runtime than Li-ion", "Viable, but larger and heavier than lithium options."],
            ["Single 18650 Li-ion", "3.7 V; typically 2500–3500 mAh; rechargeable", "High energy density; lightweight; compact; widely used", "Needs protection circuitry and charging module; may lack runtime with frequent motor use", "Suits smaller devices; limited runtime with Wi-Fi, speaker and motor."],
            ["Dual 18650 Li-ion (parallel)", "3.7 V; 6000–7000 mAh combined; rechargeable", "Long operating time; lightweight for capacity; supplies motor and ESP32; less frequent charging; compact", "Needs charging/protection circuitry; slightly higher cost; careful battery management", "Best balance of runtime, weight, size and performance."],
            ["LiPo", "3.7 V; rechargeable; flat construction", "Very lightweight; flexible shapes; high energy density", "More expensive; vulnerable to puncture; careful charging; reduced long-term durability", "Suits compact commercial products; less practical for a school project."],
          ]} />
        </Sub>
        <Sub title="Battery evaluation">
          <Table head={["Criteria", "AA alkaline", "NiMH", "Single 18650", "Dual 18650", "LiPo"]} rows={[
            ["Runtime", "2", "3", "4", "5", "4"], ["Rechargeable", "1", "5", "5", "5", "5"], ["Safety", "4", "5", "4", "4", "3"], ["Weight", "2", "3", "5", "4", "5"], ["Availability", "5", "4", "5", "5", "4"], ["Charging convenience", "1", "4", "4", "4", "3"], ["Suitability for project", "2", "3", "4", "5", "3"], ["Total", "17", "27", "31", "32", "27"],
          ]} />
          <Conclusion><p className="font-bold">Selected: dual 18650 lithium-ion cells (parallel)</p><p className="mt-1">Longest runtime, lightweight and portable, reduces charging frequency, and commonly used in portable electronics.</p></Conclusion>
        </Sub>
        <Sub title="Charging system">
          <Table head={["Method", "Advantages", "Disadvantages", "Evaluation"]} rows={[
            ["Remove battery and charge externally", "Simple electronics; no charging circuit", "Inconvenient for elderly users; more connector wear; product opened frequently", "Not ideal for the intended users."],
            ["Micro-USB", "Inexpensive; widely available", "Becoming outdated; less durable; not reversible", "Acceptable but no longer modern."],
            ["USB-C", "Modern standard; reversible; easy for elderly users; widely available chargers; more durable", "Slightly higher component cost", "Most user-friendly and professional solution."],
            ["Wireless", "Convenient; no cable", "Expensive; extra electronics; lower efficiency; more complexity", "Very expensive and complex to implement."],
          ]} />
          <Conclusion><p className="font-bold">Selected: USB-C port with TP4056 charging and protection circuit</p><p className="mt-1">Modern and user-friendly, easy for elderly users to connect, supports safe charging, protects against overcharging, over-discharging and short circuits, and gives a professional appearance consistent with modern electronics.</p></Conclusion>
        </Sub>
      </Part>

      <Part id="standards" tone="pale" eyebrow="6. International standards & regulations" title="Standards that informed the design">
        <Table head={["Standard", "Purpose", "Application to project", "Design implication"]} rows={[
          ["ISO 14971 — Medical device risk management", "Identify hazards; assess risks; reduce risks to acceptable levels", "Medication errors; accidental dispensing; battery hazards; user misuse", "A risk assessment should be performed for all critical functions before finalising the design."],
          ["IEC 62366-1 — Medical device usability engineering", "Reduce user errors; improve accessibility and ease of use", "Large buttons; clear display; simple navigation; easy medication identification", "The interface should be understandable without specialist training."],
          ["IEC 60601-1 — Medical electrical equipment safety", "Ensure electrical safety; prevent shock and overheating", "Battery charging circuit; internal electronics; power regulation", "All electronics should be enclosed and operate safely at low voltage."],
          ["ISO 9241 — Ergonomics of human-system interaction", "Improve usability, readability and accessibility", "OLED display; button size; user interaction", "Information should be easy to read and controls easy to operate."],
          ["IEC 62133 — Rechargeable battery safety", "Safe Li-ion operation; protection against overcharging and short circuits", "Dual 18650 battery system", "Only protected cells and approved charging modules should be used."],
          ["RoHS Directive — Restriction of hazardous substances", "Reduce hazardous materials such as lead, mercury and cadmium", "—", "Electronic components should ideally comply with RoHS."],
          ["WEEE Directive — Waste electrical & electronic equipment", "Encourage recycling; reduce electronic waste", "—", "Batteries and electronics should be replaceable or recyclable separately."],
        ]} />
      </Part>

      <Part id="safety" eyebrow="7. Safety analysis" title="Hazards and design solutions">
        <Table head={["Hazard", "Potential risk", "Design solution"]} rows={[
          ["Incorrect medication dispensing", "Users may take the wrong medicine or dose, potentially affecting health.", "OLED shows the medicine name before dispensing; confirmation button required before release."],
          ["Accidental dispensing", "Tablets released unintentionally, causing medication errors.", "Mechanism only activates after a reminder and button confirmation."],
          ["Access by children", "Children may access medication, creating poisoning risks.", "Compartments stay enclosed and require deliberate access for refilling."],
          ["Sharp edges", "Cuts or scratches during handling.", "Rounded edges and smooth surfaces."],
          ["Electrical shock", "Damaged wiring or exposed conductors.", "All electronics enclosed and properly insulated."],
          ["Battery overheating", "Li-ion cells may overheat if damaged or improperly charged.", "Protected 18650 cells and a charging module with overcharge and short-circuit protection."],
          ["Fire hazard", "Electrical faults may cause overheating or ignition.", "Appropriate voltage regulation and battery protection circuitry."],
          ["Pill contamination", "Dust or moisture may affect medication quality.", "Compartments stay enclosed when not dispensing."],
          ["Mechanical injury", "Moving parts could trap fingers.", "Moving components inaccessible during normal operation."],
          ["Product instability", "Device may tip over during operation.", "Sufficiently wide and weighted base."],
        ]} />
      </Part>

      <Part id="led" tone="warm" eyebrow="8. LED colour analysis" title="Choosing the drawer indicator colour" intro="The LED guides the user to the correct medicine drawer. It must be visible in bright daylight, comfortable at night, distinct from the white enclosure, and associated with positive actions.">
        <Table head={["Colour", "Advantages", "Disadvantages", "Suitability (/5)"]} rows={[
          ["Red", "Highly visible day and night; attracts attention.", "Associated with danger or errors, may alarm users; uncomfortable at night.", "3"],
          ["Green", "Recognised as correct/safe action; highly visible against white; comfortable day and night; low power.", "Slightly less noticeable than red in very bright sunlight, but visible with high-brightness LEDs.", "5"],
          ["Blue", "Modern; highly visible in low light.", "Can appear dim in daylight; harder for elderly users to perceive; glare in the dark.", "3"],
          ["White", "Matches the clean, professional look.", "Blends into the white enclosure; hard to distinguish in bright environments.", "2"],
          ["Yellow/Amber", "Soft on the eyes; visible in most lighting; used for caution or reminders.", "Lower contrast than green; less noticeable in daytime.", "4"],
        ]} />
        <Conclusion>
          <p className="font-bold">Selected colour: green</p>
          <Bullets items={["Easily visible against the white acrylic enclosure in daylight and darkness.", "Associated with the correct action or safe operation, making it intuitive.", "Comfortable for elderly users without excessive glare at night.", "Less confusing than red, which is reserved for warnings or fault conditions."]} />
        </Conclusion>
      </Part>

      <Part id="final" tone="pale" eyebrow="9. Final specifications" title="The specification for the prototype">
        <Table head={["Specification", "Reason"]} rows={[
          ["Target audience — elderly users, patients with chronic illnesses, caregivers, and people taking multiple medications daily", "Adherence becomes harder with age and more medications; these users benefit most from reminder and dispensing assistance."],
          ["Price — ₹4,000–₹8,000 (target)", "Affordable compared with commercial smart dispensers while including app connectivity, OLED display and automated dispensing."],
          ["Location — home (bedside table, kitchen counter, study desk)", "Most users take medication at home; the product should fit and stay accessible."],
          ["Material — PETG", "Durable, lightweight, easy to manufacture and suitable for prototyping; better heat resistance than PLA."],
          ["Safety — no sharp edges, enclosed electronics, confirmation before dispensing, secure compartments", "Rounded edges prevent injuries; wiring enclosed; mechanism only operates when intended; tablets cannot fall out. See safety and standards analyses."],
          ["Stable during operation", "Must stay stable when dispensing and when the button is pressed."],
          ["OLED display (2.42 inch)", "82% found a screen displaying medication information useful."],
          ["Audio reminder system (buzzer or audio)", "80% considered sound reminders helpful."],
          ["Mobile app connectivity (Wi-Fi)", "Set schedules remotely and update reminders without touching the device."],
          ["Number of compartments — 8", "Enough for multiple medication types while staying compact."],
          ["Storage method — one medication type per compartment", "Reduces confusion and allows separate scheduling."],
          ["Capacity per compartment — 15–20 tablets", "About 1–2 weeks of medication for most users while staying compact."],
          ["Total capacity — 120–160 tablets", "Adequate storage without making the dispenser too large."],
          ["Medication identification — display", "OLED shows medication name and scheduled time before dispensing."],
          ["User input — large confirmation push button (≥20 mm diameter)", "Larger buttons help users with reduced dexterity."],
          ["Status indicators — power, reminder and charging LEDs", "Users can easily see the device's status."],
          ["Weight — less than 1.5 kg", "Portable while stable. See weight analysis."],
          ["Dimensions — approx. 200 × 200 × 120 mm", "Enough internal volume for storage and electronics while compact."],
          ["Battery type — dual 18650 lithium-ion cells", "Adequate energy storage and rechargeable operation."],
          ["Battery life — minimum 5–7 days between charges (6000–7000 mAh)", "Reduces charging frequency."],
          ["Charging method — USB-C charging module", "Modern, widely available and easy to use."],
          ["Colour scheme — white body with blue accents", "Associated with healthcare, cleanliness and trust."],
          ["Maintenance — easy-access refill lid or no lids", "Quick and safe refilling."],
          ["Environmental — rechargeable battery; durable PETG housing", "Less disposable-battery waste; longer lifespan and fewer replacements."],
          ["Expected lifespan — minimum 3–5 years", "Long-term usability and fewer replacements."],
        ]} />
        <P>The ₹4,000–₹8,000 figure is the original target specification, not a retail price.</P>
      </Part>
      <Part id="working-drawings" eyebrow="CAD documentation" title="Final design and component drawings"><ReportImages group="CAD & working drawings" /></Part>
    </>
  );
}
