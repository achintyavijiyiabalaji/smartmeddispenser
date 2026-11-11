import { createFileRoute } from "@tanstack/react-router";
import { FullReport } from "@/components/full-report";
import { PageHero, Section, meta } from "@/components/site";

export const Route = createFileRoute("/report")({
  head: () => meta("Full Project Report", "The complete SmartMed report text, tables and original images — research, ideations, evaluations, manufacturing, testing and production."),
  component: () => <>
    <PageHero eyebrow="Full report" title="The complete SmartMed project report">Every section of the report, in its original order, with its images and tables — organised into six chapters.</PageHero>
    <Section><FullReport /></Section>
  </>,
});
