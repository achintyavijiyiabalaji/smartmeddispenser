import { createFileRoute } from "@tanstack/react-router";
import { Notice, PageHero, Section, meta } from "@/components/site";
import { Box, Bullets, Conclusion, P, Part, Stat, Sub, SubNav, Table } from "@/components/report";

export const Route = createFileRoute("/research")({
  head: () => meta("Our Research", "Secondary research, published studies, survey findings, interviews, design opportunities and the design brief behind the SmartMed prototype."),
  component: Page,
});

const stats = [
  { v: 48, l: "take three or more medicines daily" },
  { v: 64, l: "reported forgetting medication doses at least occasionally" },
  { v: 62, l: "said remembering timing is the hardest part of medication management" },
  { v: 36, l: "still rely on memory alone" },
  { v: 56, l: "already use phone alarms to remember medication" },
  { v: 46, l: "identified phone alarms as the most effective reminder method" },
  { v: 46, l: "reported difficulty distinguishing between medicines" },
  { v: 32, l: "had taken the wrong medicine or dosage at least once" },
  { v: 40, l: "had difficulty remembering whether they had already taken a dose" },
  { v: 80, l: "considered sound reminders helpful" },
  { v: 82, l: "considered a screen with medicine names and timings useful" },
  { v: 78, l: "considered confirming a dose before taking it important" },
  { v: 58, l: "wanted caregiver notifications when doses are missed" },
];

const plan = ["Market analysis — analyse similar products with the same purpose", "Research", "Survey and summary of results", "Material analysis", "Initial specification", "Idea generation — using findings from similar products and specifications", "Evaluation of ideas", "Mechanism analysis", "Product development", "Manufacturing tools research", "Design analysis", "Prototype of final design", "Manufacturing process", "Testing and evaluation", "User feedback collection", "Evaluation against specification", "Further improvements for the product"];

const studies: [string, string, string][] = [
  ["Kamal et al. [6]", "Customised SMS reminders, resource-poor areas of Pakistan, 200 participants", "Patients receiving personalised medication reminders and health SMS showed better adherence and lower average diastolic blood pressure than those receiving regular care only."],
  ["Adler et al. [1]", "Systematic review of text messaging for arterial occlusive diseases — 7 trials, 1,310 participants", "Insufficient evidence to confirm effectiveness due to very low quality evidence; more reliable randomised trials needed, especially in low- and middle-income countries."],
  ["Choudhry et al. [3]", "Low-cost reminder devices — 53,480 participants on 1–3 long-term oral medicines", "Groups (cardiovascular/other chronic conditions or antidepressants) randomly assigned pill bottle strips with toggles, digital timer caps, standard pillboxes, or no device (control)."],
  ["Drabarek et al. [4]", "Wisepill evriMED MERM, drug-susceptible pulmonary TB, Thanh Hoa, Viet Nam — 20 patients", "Half received daily reminder alerts and scheduled dosing-history reviews; the rest used the device without alerts. In-depth interviews explored patient experiences."],
  ["Mohammed et al. [8]", "Two-way 'Zindagi SMS' reminder system, Karachi, Pakistan — 2,207 participants", "Randomised trial measuring clinically recorded TB treatment success versus a control group."],
  ["Hayakawa et al. [5]", "Smartphone-based medication self-management system (SMSS) — interviews with 116 patients", "Provided accurate medication histories/records and reminders whenever patients forgot to take medication."],
];

const refs = [
  "Adler, A. J., Martin, N., Mariani, J., Tajer, C. D., Owolabi, O. O., Free, C., Serrano, N. C., Casas, J. P., & Perel, P. (2017). Mobile phone text messaging to improve medication adherence in secondary prevention of cardiovascular disease. The Cochrane database of systematic reviews, 4(4), CD011851. https://doi.org/10.1002/14651858.CD011851.pub2",
  "Bhati, S., Soni, H., Zala, V., Vyas, P., & Sharma, Y. (2017). Smart Medicine Reminder Box. IJSTE - International Journal of Science Technology & Engineering, 3(10), April 2017.",
  "Choudhry, N. K., Krumme, A. A., Ercole, P. M., Girdish, C., Tong, A. Y., Khan, N. F., Brennan, T. A., Matlin, O. S., Shrank, W. H., & Franklin, J. M. (2017). Effect of Reminder Devices on Medication Adherence: The REMIND Randomized Clinical Trial. JAMA internal medicine, 177(5), 624–631. https://doi.org/10.1001/jamainternmed.2016.9627",
  "Drabarek, D., Anh, N. T., Nhung, N. V., Hoa, N. B., Fox, G. J., & Bernays, S. (2019). Implementation of Medication Event Reminder Monitors among patients diagnosed with drug susceptible tuberculosis in rural Viet Nam: A qualitative study. PloS one, 14(7), e0219891. https://doi.org/10.1371/journal.pone.0219891",
  "Hayakawa, M., Uchimura, Y., Omae, K., Waki, K., Fujita, H., & Ohe, K. (2013). A smartphone-based medication self-management system with real-time medication monitoring. Applied clinical informatics, 4(1), 37–52. https://doi.org/10.4338/ACI-2012-10-RA-0045",
  "Kamal, A. K., Shaikh, Q., Pasha, O., Azam, I., Islam, M., Memon, A. A., Rehman, H., Akram, M. A., Affan, M., Nazir, S., Aziz, S., Jan, M., Andani, A., Muqeet, A., Ahmed, B., & Khoja, S. (2015). A randomized controlled behavioral intervention trial to improve medication adherence in adult stroke patients with prescription tailored Short Messaging Service (SMS)-SMS4Stroke study. BMC neurology, 15, 212. https://doi.org/10.1186/s12883-015-0471-5",
  "Kriss, J. L., Reynolds, L. E., Wang, A., Stokley, S., Cole, M. M., Harris, L. Q., Shaw, L. K., Black, C. L., Singleton, J. A., Fitter, D. L., Rose, D. A., Ritchey, M. D., & Toblin, R. L. (2021). COVID-19 Vaccine Second-Dose Completion and Interval Between First and Second Doses Among Vaccinated Persons — United States, December 14, 2020–February 14, 2021. Morbidity and Mortality Weekly Report, 70(11), 389-395.",
  "Mohammed, S., Glennerster, R., & Khan, A. J. (2016). Impact of a Daily SMS Medication Reminder System on Tuberculosis Treatment Outcomes: A Randomized Controlled Trial. PloS one, 11(11), e0162944. https://doi.org/10.1371/journal.pone.0162944",
  "Walker, T. (2013). For children, skipped medications often lead to emergency department visits. ProQuest.",
  "Pang, Z., Tian, J., & Chen, Q. (2014). Intelligent packaging and intelligent medicine box for medication management towards the Internet-of-Things. 16th International Conference on Advanced Communication Technology (ICACT), 2014, South Korea, DOI: 10.1109/ICACT.2014.6779193.",
];

const surveyQs = ["How many medicines do you take each day?", "How often do you forget a dose?", "What do you currently use to remember medicine?", "Do you use alarms, reminders, or pill boxes?", "Which reminder method works best for you: phone alarm, written note, voice reminder, or family reminder?", "Have you ever taken the wrong medicine or dose by mistake?", "Do you find it easy to tell different medicines apart?", "Would a screen showing medicine name and time be useful?", "Would sound reminders help you?", "Would you like a caregiver to be notified if a dose is missed?", "How important is it for you to confirm a dose before taking it?", "What is the hardest part of managing your medicines?"];

const interviewQs = ["Can you describe your current medicine routine?", "What problems do you face when taking medicine daily?", "Have you ever missed a dose or taken one twice?", "What usually causes mistakes in your medicine routine?", "How do you feel about using technology for medicine reminders?", "What kind of reminder would be easiest for you to notice?", "Would a visual display be helpful for checking medicine details?", "Would you prefer a simple device or a more advanced one with multiple functions?", "Would you need help setting it up?", "What features would make you trust the device more?", "What would make you stop using a medicine reminder system?", "Would you want the system to record whether the medicine was taken?"];

const interviews: { who: string; role: string; a: string[] }[] = [
  { who: "R. Lakshmi, 72", role: "Elderly user", a: [
    "I take medicines three times a day for blood pressure, diabetes, and joint pain. I keep them in a weekly pill organizer and try to follow the schedule given by my doctor.",
    "Sometimes I forget whether I have already taken my tablets, especially when I am busy with household activities or if my routine changes.",
    "Yes. There have been occasions when I forgot a dose, and a few times I accidentally took the same medicine twice because I could not remember taking it earlier.",
    "The main reason is forgetfulness. Some medicines also look similar, which can cause confusion.",
    "I think technology can be very useful as long as it is simple and easy to understand.",
    "A loud voice reminder combined with a flashing light would work best for me.",
    "Yes. A display showing the medicine name and time would help me confirm I am taking the correct medication.",
    "I would prefer a simple device with only the most important functions.",
    "Yes, I would probably need assistance from a family member.",
    "Accurate reminders, clear instructions, and reliable operation every day.",
    "If it became difficult to operate or frequently gave incorrect reminders.",
    "Yes, because it would help me keep track and avoid taking medicines twice.",
  ] },
  { who: "A. Prakash, 45", role: "Working adult", a: [
    "I take medication for hypertension every morning and vitamin supplements at night. I mainly rely on my phone alarm.",
    "My work schedule is unpredictable, so I sometimes ignore reminders and forget to take medicine later.",
    "I have missed doses several times, but I have never taken one twice.",
    "Busy workdays, travel, and distractions.",
    "I am comfortable with technology and think it can improve medication management significantly.",
    "A phone notification combined with an audible reminder from the device.",
    "Yes, especially if it displays the medicine name and dosage information.",
    "I would prefer an advanced device with app connectivity and tracking features.",
    "No, I would be comfortable setting it up myself.",
    "App integration, accurate scheduling, and a record of previous doses.",
    "Frequent technical issues or unreliable notifications.",
    "Yes, it would help me monitor my medication adherence over time.",
  ] },
  { who: "S. Kavya, 21", role: "University student", a: [
    "I only take medication occasionally, mainly vitamins and allergy medicine when needed.",
    "When I have to take medicine regularly, I often forget because my class and study schedule changes every day.",
    "I have missed doses before but never taken one twice.",
    "Being busy with studies and forgetting to check reminders.",
    "I think technology is the best solution because most people my age already use smartphones constantly.",
    "A smartphone notification would be the most effective reminder.",
    "Yes, especially if it clearly displays the medicine name and schedule.",
    "I would prefer an advanced device with app connectivity and customization options.",
    "No, I would be able to set it up independently.",
    "Reliable notifications, battery backup, and synchronization with my phone.",
    "If it was complicated to use or required frequent maintenance.",
    "Yes, especially for long-term medications where tracking is important.",
  ] },
  { who: "M. Ravi, 58", role: "Caregiver for his parent", a: [
    "I manage my own medicines and also help my elderly mother with her medication schedule.",
    "The biggest challenge is ensuring that my mother takes the correct medicines at the correct times.",
    "My mother has occasionally missed doses, and there have been situations where we were unsure if a dose had already been taken.",
    "Multiple medications, similar-looking tablets, and changes in daily routine.",
    "I believe technology can greatly reduce medication errors and improve safety.",
    "A combination of sound, visual indicators, and mobile phone notifications.",
    "Yes, it would reduce confusion and improve confidence in taking the correct medicine.",
    "I would prefer an advanced system if it remains easy to use.",
    "Probably not, but clear instructions would be useful.",
    "Missed-dose tracking, caregiver notifications, and consistent reliability.",
    "If it failed to provide reminders accurately or became difficult to maintain.",
    "Definitely. A record would help caregivers monitor medication adherence and reduce uncertainty.",
  ] },
];

const opportunities: { t: string; research: string[]; interview: string[]; opp: string[] }[] = [
  { t: "1. Improved reminder system",
    research: ["64% reported forgetting medication doses at least occasionally.", "62% identified remembering medication timing as the most difficult part of managing medicines.", "80% stated that sound reminders would be helpful.", "82% believed that a system displaying medication information would be useful."],
    interview: ["Lakshmi (72) sometimes forgets whether she has taken her medication and would benefit from a voice reminder and flashing indicator.", "Prakash (45) reported missing doses due to work commitments and distractions.", "Kavya (21) explained that changing daily schedules often cause her to forget medications.", "Ravi (58) highlighted that ensuring medicines are taken on time is one of the biggest challenges when caring for elderly family members."],
    opp: ["Provide reminders through multiple methods, such as audio alerts, visual notifications, and smartphone notifications.", "Use reminder methods noticeable to users with different lifestyles and abilities.", "Reduce missed doses by making reminders more difficult to ignore."] },
  { t: "2. Clear medication identification",
    research: ["46% reported difficulty distinguishing between different medicines.", "32% had taken the wrong medicine or dosage by mistake.", "82% believed a screen displaying medicine names and times would be useful."],
    interview: ["Lakshmi (72) mentioned that many tablets look similar, leading to confusion.", "Ravi (58) explained that multiple medications and similar-looking tablets can easily cause mistakes.", "Prakash (45) stated that displaying medicine names would help ensure the correct medication is taken."],
    opp: ["Provide clear identification of medicines before consumption.", "Display medication names and scheduled times to reduce confusion.", "Improve user confidence when taking medication.", "Reduce the likelihood of medication errors."] },
  { t: "3. Medication confirmation and tracking",
    research: ["78% stated that confirming a dose before taking medication is important.", "40% reported difficulty remembering whether they had already taken a dose.", "58% wanted caregiver notifications when doses are missed."],
    interview: ["Lakshmi (72) sometimes cannot remember whether she has already taken her medicine.", "Prakash (45) believed medication records would help monitor adherence.", "Kavya (21) felt dose tracking would be useful for long-term medication management.", "Ravi (58) emphasised that tracking would help caregivers monitor medication compliance."],
    opp: ["Allow users to confirm medication before consumption.", "Record completed and missed doses.", "Provide medication history logs.", "Improve confidence and accountability for both users and caregivers."] },
  { t: "4. User-friendly design for elderly users",
    research: ["The majority of respondents who take multiple medicines were from older age groups.", "46% experience difficulties identifying medications.", "80% supported audio reminders, indicating the need for accessible reminder methods."],
    interview: ["Lakshmi (72) preferred a simple device with only essential functions, and would require assistance with initial setup.", "Ravi (58) highlighted the importance of clear instructions and ease of use for elderly users.", "Several interviewees suggested that simple controls would improve usability."],
    opp: ["Design an interface that is easy to understand and operate.", "Use large buttons and clear text.", "Minimise unnecessary complexity.", "Improve accessibility for users with visual, hearing, or memory difficulties."] },
  { t: "5. Integration of smart technology",
    research: ["56% already use phone alarms to remember medication.", "46% identified phone alarms as the most effective reminder method.", "58% supported caregiver notifications for missed doses.", "82% supported displaying medication information digitally."],
    interview: ["Prakash (45) expressed strong support for app integration and medication history tracking.", "Kavya (21) preferred a system that connects with smartphones and offers customisation.", "Ravi (58) believed technology could significantly reduce medication errors.", "All interview participants expressed positive attitudes towards technology-assisted medication management."],
    opp: ["Integrate smartphone connectivity for scheduling and monitoring.", "Enable digital management of medication routines.", "Provide remote notifications and status updates.", "Combine storage, reminders, tracking, and communication into a single system."] },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Our research" title="Listening before building">
        Secondary research from published studies and NHS guidance, followed by primary research through a survey and interviews — leading to a selected design opportunity and design brief.
      </PageHero>
      <SubNav items={[["plan", "Initial plan"], ["secondary", "Secondary research"], ["studies", "Related studies"], ["methods", "Reminder methods"], ["evidence", "Further evidence"], ["primary", "Primary research"], ["interviews", "Interviews"], ["analysis", "Analysis"], ["opportunities", "Opportunities"], ["brief", "Design brief"]]} />

      <Part id="plan" eyebrow="A. Initial plan" title="The planned order of work" intro="Dates are recorded for any progress made, to build the product timeline.">
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {plan.map((p, i) => (
            <li key={p} className="flex items-center gap-3 rounded-xl bg-secondary p-4">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy font-mono text-xs text-navy-foreground">{i + 1}</span>
              <span className="font-medium text-navy">{p}</span>
            </li>
          ))}
        </ol>
      </Part>

      <Part id="secondary" tone="pale" eyebrow="B. Secondary research" title="What existing evidence says">
        <Sub title="Common causes of missed medication">
          <Bullets items={["Forgetting the exact time of a dose, especially when daily routines are busy or irregular.", "Confusing one medicine with another when several tablets look similar or are taken at different times.", "Taking medicine late, early, or twice because there is no clear record of whether a dose was already taken.", "Depending only on memory or a single alarm, which is often not enough for people with multiple medicines.", "Having difficulty reading labels or hearing alerts, which can affect older users and people with accessibility needs."]} />
          <P>NHS guidance also says that people often respond better when medicine-taking is linked to everyday activities such as meals, brushing teeth, or other regular habits. Timing alone is not always enough; reminders may work better when they connect to a routine the user already knows.</P>
        </Sub>
        <Sub title="Evidence from studies">
          <div className="grid gap-4 md:grid-cols-3">
            <Stat v="84%">of 110 patients said a microcontroller-based reminder device reminded them effectively at the correct time</Stat>
            <Stat v="~50%">of older adults struggle with medication adherence (2024 study)</Stat>
            <Stat v="85%">of older adults said a pillbox helped them manage their medicines</Stat>
          </div>
          <P>The 110-patient system used an RTC, OLED display, buzzer, vibration and phone calls — showing that multiple reminder methods can work together better than one method alone, and that visual, sound and mobile alerts are practical in real use.</P>
          <P>NHS SPS guidance says text or telephone reminders may be more effective when personal or interactive, but electronic drug monitors on their own are unlikely to improve adherence without extra support. A reminder system should therefore support behaviour and follow-up, not only alert. Some programmable dispensers can help, but may be too complex for some users and need careful suitability testing.</P>
          <P>The 2024 figure that around 50% of older adults struggle with adherence shows the problem is not rare or minor, and supports focusing on older users as a key group.</P>
        </Sub>
        <Sub title="Older adults as users">
          <P>Older adults are more likely to take multiple medications and may need support remembering schedules. Reminder systems for them need to be simple, clear, and not overly technical. If a system is too complex to set up or refill, it may not be used consistently.</P>
          <P>A descriptive study found 85% of older adults said a pillbox helped them manage their medicines — organised storage itself has value, even before electronics are added. However, a pillbox mainly helps with organisation; it does not automatically remind users or track whether a dose was taken.</P>
        </Sub>
      </Part>

      <Part id="studies" eyebrow="C. Related studies" title="Published research on reminder interventions" intro="The information in this section, up to and including the references, is drawn from a research paper.">
        <Table head={["Study", "Context & scale", "Findings / method"]} rows={studies} />
        <Sub title="Limitations of SMS-based reminders">
          <Bullets items={["The cost of sending multiple SMS reminders daily can become significant each month.", "If the device runs out of credit, reminders may not be delivered.", "Patients may not notice the alert if they are not near their phones when it arrives."]} />
        </Sub>
        <Sub title="Approach proposed in the paper">
          <P>The paper proposes phone calls instead of SMS as a reminder method, improving on [10]; this is expected to be more cost-effective and reliable, since call ringing lasts longer and is harder to ignore than SMS notifications.</P>
          <P>Users can provide the contact details of a dedicated medical staff member who is notified if the patient fails to respond — extending [2], which integrated prescription schedules into reminder systems. A vibration feature alongside audio notifications provides an alternative for physically challenged patients who may have difficulty hearing voice reminders.</P>
        </Sub>
        <Sub title="References">
          <ol className="space-y-2 text-sm text-muted-foreground">
            {refs.map((r, i) => <li key={i} className="break-words"><span className="font-mono text-navy">[{i + 1}]</span> {r}</li>)}
          </ol>
        </Sub>
      </Part>

      <Part id="methods" tone="warm" eyebrow="D. Reminder methods, storage & dispensing" title="Comparing ways to remind and store">
        <div className="grid gap-5 md:grid-cols-2">
          <Box title="Audio reminders"><Bullets items={["Get attention even when the user is not looking at a screen.", "Studies and NHS guidance suggest audible reminders help many users, especially combined with other cues.", "Loud or sudden alarms can be unsuitable for some users, so tone and volume matter."]} /></Box>
          <Box title="Visual reminders"><Bullets items={["OLED or screen-based reminders can show the medicine name, time, or dose in a readable format.", "Help users with hearing difficulties or who need confirmation before taking medicine.", "The NHS notes that better reminder charts and visible prompts can be practical and cost-effective."]} /></Box>
          <Box title="Vibrating reminders"><Bullets items={["Used for people with hearing impairments or where sound is not ideal.", "The NHS specifically mentions audible/vibrating alarms may benefit the hearing impaired.", "An example of designing for different needs rather than assuming one alert style fits everyone."]} /></Box>
          <Box title="Mobile reminders"><Bullets items={["Text or phone reminders support users away from the medicine storage area.", "The NHS says these are most effective when personal or interactive.", "App-based reminders need backup features and caregiver support to be more reliable."]} /></Box>
        </div>
        <Sub title="Storage and dispensing">
          <P>A systematic review of pill and medication dispensers describes many devices that open sections at set times, often with alarms. These may suit patients with stable but somewhat complex regimens — especially relevant because multiple daily medicines often need both storage and timing support.</P>
          <P>A major challenge is presenting the correct medicine at the correct time without creating confusion. Some devices are complex to fill, a problem for older adults or caregivers — so designs should be easy to load, easy to read, and difficult to misuse.</P>
          <P>The review highlights remote monitoring and caregiver alerts as useful directions: research is moving from simple reminder tools toward systems that also support supervision and accountability.</P>
        </Sub>
        <Sub title="What users still struggle with">
          <Bullets items={["Remembering the reminder but still forgetting whether they actually took the dose.", "Ignoring a reminder if it is too generic, too frequent, or poorly timed.", "Getting confused if several medicines are scheduled close together.", "Finding complex dispenser systems difficult to refill or set up.", "Needing support from family or caregivers to stay consistent."]} />
        </Sub>
        <Conclusion>No single method solves every medication problem. That is why systems increasingly combine storage, reminders, and confirmation features rather than using only one function.</Conclusion>
      </Part>

      <Part id="evidence" eyebrow="E. Additional evidence" title="Scale, usability and user needs">
        <div className="grid gap-4 md:grid-cols-3">
          <Stat v="42,601">older adult records studied (2025/2026), with 5.9% medication non-adherence</Stat>
          <Stat v="53,480">patients in the REMIND randomised trial on 1–3 long-term oral medicines</Stat>
          <Stat v="15.1–16.3%">achieved optimal adherence (&gt;80% medication possession ratio) across REMIND groups — no meaningful advantage over control</Stat>
        </div>
        <Sub title="Scale of the problem">
          <P>The 42,601-record study linked non-adherence mainly to pharmacological factors, inappropriate use, and multiple chronic conditions with multiple medication regimens — the issue is not only memory, but also regimen complexity and medication management systems.</P>
          <P>The REMIND trial found low-cost reminder devices did not significantly improve adherence overall: a simple reminder alone may not solve the problem.</P>
        </Sub>
        <Sub title="What this means for the design">
          <P>A medication aid needs more than a physical reminder object. If users do not engage consistently, or the reminder is not tied to a stronger behaviour system, the effect may be limited — supporting a design that combines multiple functions rather than a single prompt.</P>
          <P>Reminder tools may work better when targeted at higher-risk users, justifying a focus on older adults and people with multiple medications.</P>
        </Sub>
        <Sub title="Usability evidence">
          <P>A study on electronic medication adherence products examined usability and workload, showing that user experience matters a lot in real life. A medication aid for older adults must be easy to understand, easy to refill, and not mentally tiring; if it feels too complicated, users may abandon it.</P>
          <P>Older adults accepted a medication dispensing device as reliable, easy to use, and useful in coordinating personal medication management — storage can work well if the product is intuitive and supportive.</P>
        </Sub>
        <Sub title="What users need from reminder systems">
          <P>Research on unobtrusive intelligent reminding found reminders are more effective when delivered at an appropriate time rather than randomly or loudly. NHS guidance agrees that reminders work better when they fit the user's routine and link to everyday habits — pointing to the importance of scheduling logic, not just notification hardware.</P>
        </Sub>
        <Sub title="Summary">
          <P>The need is not just "people forget medicine" — many current solutions are too simple, too generic, or too hard to use consistently. This strengthens the case for a structured, user-friendly medication support system for older adults and people with multiple medicines.</P>
          <Bullets items={["Large studies show the problem affects tens of thousands of patients and is strongly linked to multiple medicines and chronic illness.", "Simple reminder devices do not always improve adherence, so a stronger design needs more than one function.", "Usability is critical — even good products may fail if users find them too difficult to set up or maintain.", "Older adults value devices that feel reliable and easy to understand.", "Reminder timing should be intelligent and routine-based rather than generic."]} />
        </Sub>
      </Part>

      <Part id="primary" tone="pale" eyebrow="F. Primary research" title="Asking users directly">
        <Sub title="Aim">
          <P>To find out what problems users have with remembering and managing medicine, what kind of reminders they prefer, and what features would make a medication support product easier and safer to use — identifying real user needs before developing a design proposal.</P>
        </Sub>
        <Sub title="Target audience">
          <P>A mix of users was surveyed, because each group sees the problem differently:</P>
          <Bullets cols items={["Elderly users who take medicine daily", "Adults who take multiple medicines for long-term conditions", "Family members or caregivers who help with medicine routines", "Pharmacists or healthcare workers, if available", "People with hearing, vision, or memory difficulties", "Teenagers and young adults"]} />
        </Sub>
        <div className="grid gap-5 md:grid-cols-2">
          <Box title="Survey questions"><ol className="list-decimal space-y-1 pl-5">{surveyQs.map((q) => <li key={q}>{q}</li>)}</ol></Box>
          <Box title="Interview questions"><ol className="list-decimal space-y-1 pl-5">{interviewQs.map((q) => <li key={q}>{q}</li>)}</ol></Box>
        </div>
      </Part>

      <Part id="interviews" eyebrow="G. Interview responses" title="Four perspectives">
        <div className="grid gap-5 lg:grid-cols-2">
          {interviews.map((iv) => (
            <details key={iv.who} className="card-soft group p-6" open>
              <summary className="cursor-pointer list-none">
                <p className="font-mono text-xs uppercase tracking-wider text-teal">{iv.role}</p>
                <p className="font-display text-xl font-bold text-navy">{iv.who}</p>
              </summary>
              <dl className="mt-4 space-y-3 text-sm">
                {iv.a.map((ans, i) => (
                  <div key={i}>
                    <dt className="font-semibold text-navy">{interviewQs[i]}</dt>
                    <dd className="mt-0.5 text-muted-foreground">{ans}</dd>
                  </div>
                ))}
              </dl>
            </details>
          ))}
        </div>
      </Part>

      <Part id="analysis" tone="warm" eyebrow="H. Analysis of research data" title="What the survey and interviews revealed">
        <div className="grid gap-4 md:grid-cols-2">
          {stats.map((s) => (
            <div key={s.l} className="card-soft p-5">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-3xl font-extrabold text-navy">{s.v}%</span>
                <span className="text-sm">{s.l}</span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-secondary" role="img" aria-label={`${s.v} percent`}>
                <div className="h-full rounded-full bg-primary" style={{ width: `${s.v}%` }} />
              </div>
            </div>
          ))}
        </div>
        <Sub title="Key findings">
          <P>48% take three or more medicines daily, increasing the likelihood of confusion and mistakes, and 64% forget doses at least occasionally — medication adherence is a widespread problem. While many use phone alarms or other methods, 36% still rely on memory alone. 32% have taken the wrong medicine or dosage at least once, highlighting the need for clearer identification and guidance.</P>
          <P>46% found it difficult to distinguish between medicines, while 82% believed a screen displaying medicine names and timing would be useful. 80% considered audio reminders helpful, and 78% said confirming a dose before taking it was important — users value reassurance and verification.</P>
          <P>The most common challenge was remembering medication timing (62%). Other significant issues included organising medication schedules, remembering whether a dose had already been taken, and identifying medicines correctly.</P>
          <P>Interviews reinforced these findings: elderly participants reported forgetfulness and similar-looking tablets; working adults highlighted busy schedules; caregivers emphasised monitoring and tracking medication intake.</P>
        </Sub>
      </Part>

      <Part id="opportunities" eyebrow="I. Potential design opportunities" title="Five opportunities from the evidence">
        {opportunities.map((o) => (
          <Sub key={o.t} title={o.t}>
            <div className="grid gap-4 md:grid-cols-3">
              <Box title="Research evidence"><Bullets items={o.research} /></Box>
              <Box title="Interview evidence"><Bullets items={o.interview} /></Box>
              <Box title="Design opportunity"><Bullets items={o.opp} /></Box>
            </div>
          </Sub>
        ))}
      </Part>

      <Part id="brief" tone="pale" eyebrow="J. Selected opportunity & design brief" title="A smart medication reminder and identification system">
        <Sub title="Selected design opportunity">
          <P>The most significant challenges are remembering medication schedules and correctly identifying medicines. The selected opportunity is to develop a smart medication reminder and identification system that provides scheduled reminders and clearly displays medication information to the user before dispensing.</P>
        </Sub>
        <Sub title="Justification">
          <Bullets cols items={["64% forget doses at least occasionally.", "62% find remembering timing the most difficult aspect.", "80% believe sound reminders would help.", "82% say a display of medicine names and times would be useful.", "46% have difficulty distinguishing between medicines.", "32% have taken the wrong medicine or dosage by mistake."]} />
          <Bullets items={["Lakshmi (72): forgetfulness and confusion between similar-looking tablets are common problems.", "Prakash (45): work-related distractions often cause him to miss medication.", "Ravi (58): multiple medications can easily lead to mistakes when managing medicines for elderly family members."]} />
        </Sub>
        <Sub title="Conclusion">
          <P>The chosen opportunity focuses on a system that reminds users when medication is due and clearly identifies the medicine to take. By combining audio reminders, visual information, and organised storage, the design aims to reduce missed doses and medication errors.</P>
        </Sub>
        <Conclusion>
          <p className="font-display text-lg font-bold">Design brief</p>
          <p className="mt-2">Design and manufacture a smart medication reminder and dispensing system that helps users manage their medicines safely and consistently. The product should reduce missed doses and medication confusion by providing clear audio and visual reminders, displaying medication information, and dispensing the correct medicine at the scheduled time. The device should be easy to use, particularly for elderly users, while remaining portable, rechargeable, reliable, and visually appealing.</p>
        </Conclusion>
      </Part>

      <Section eyebrow="Research limitations">
        <Notice title="An honest note on scale">The project research was limited in scale. It does not establish clinical effectiveness, population-wide needs, or improved health outcomes.</Notice>
      </Section>
    </>
  );
}
