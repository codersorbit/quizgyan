import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { TOOLS, getTool, toolUrl } from "@/lib/tools/registry";
import { ToolShell } from "@/components/tools/ToolShell";

import CgpaIsland from "@/components/tools/islands/CgpaIsland";
import PercentageIsland from "@/components/tools/islands/PercentageIsland";
import AttendanceIsland from "@/components/tools/islands/AttendanceIsland";
import AgeIsland from "@/components/tools/islands/AgeIsland";
import CountdownIsland from "@/components/tools/islands/CountdownIsland";
import GradeIsland from "@/components/tools/islands/GradeIsland";
import StudyTimerIsland from "@/components/tools/islands/StudyTimerIsland";
import FractionIsland from "@/components/tools/islands/FractionIsland";
import LcmHcfIsland from "@/components/tools/islands/LcmHcfIsland";
import MeanMedianModeIsland from "@/components/tools/islands/MeanMedianModeIsland";
import InterestIsland from "@/components/tools/islands/InterestIsland";
import UnitConverterIsland from "@/components/tools/islands/UnitConverterIsland";
import ResultIsland from "@/components/tools/islands/ResultIsland";
import PaperPlannerIsland from "@/components/tools/islands/PaperPlannerIsland";
import WorksheetIsland from "@/components/tools/islands/WorksheetIsland";
import WordCounterIsland from "@/components/tools/islands/WordCounterIsland";
import NumberToWordsIsland from "@/components/tools/islands/NumberToWordsIsland";
import MultiplicationTableIsland from "@/components/tools/islands/MultiplicationTableIsland";

export function generateStaticParams() {
  return TOOLS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return {};
  return buildMetadata({
    title: `${tool.name.en} — Free Online Tool | StudyMatic`,
    description: tool.short.en,
    path: toolUrl(tool.slug),
  });
}

function island(slug: string) {
  switch (slug) {
    case "cgpa-to-percentage":
      return <CgpaIsland />;
    case "percentage-calculator":
      return <PercentageIsland />;
    case "attendance-calculator":
      return <AttendanceIsland />;
    case "age-calculator":
      return <AgeIsland />;
    case "exam-countdown":
      return <CountdownIsland />;
    case "grade-calculator":
      return <GradeIsland />;
    case "study-timer":
      return <StudyTimerIsland />;
    case "fraction-calculator":
      return <FractionIsland />;
    case "lcm-hcf-calculator":
      return <LcmHcfIsland />;
    case "mean-median-mode":
      return <MeanMedianModeIsland />;
    case "simple-interest-calculator":
      return <InterestIsland />;
    case "unit-converter":
      return <UnitConverterIsland />;
    case "result-calculator":
      return <ResultIsland />;
    case "question-paper-planner":
      return <PaperPlannerIsland />;
    case "worksheet-generator":
      return <WorksheetIsland />;
    case "word-counter":
      return <WordCounterIsland />;
    case "number-to-words":
      return <NumberToWordsIsland />;
    case "multiplication-table":
      return <MultiplicationTableIsland />;
    default:
      return null;
  }
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();

  return <ToolShell tool={tool}>{island(slug)}</ToolShell>;
}
