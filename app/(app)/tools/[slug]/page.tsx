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
