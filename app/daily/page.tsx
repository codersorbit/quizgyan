import type { Metadata } from "next";
import { totalMcqCount, allAuthoredChapters } from "@/lib/content";
import { buildMetadata, breadcrumbLd, webPageLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { DailyClient } from "@/components/DailyClient";

const PATH = "/daily";
const TITLE = "Daily CBSE Challenge — 10 Mixed Questions Across Classes 6 to 10";
const DESC =
  "A fresh daily quiz of 10 CBSE questions mixed from across every class and subject, plus a question of the day to share. Instant feedback, explanations and a study streak. Free, no login.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function DailyPage() {
  const total = totalMcqCount();
  const chapters = allAuthoredChapters().length;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Daily challenge", path: PATH },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbLd(crumbs), webPageLd(TITLE, DESC, PATH)]} />
      <Breadcrumbs crumbs={crumbs} />

      <h1 className="font-display text-3xl font-bold text-ink">Daily Challenge</h1>
      <p className="mt-2 max-w-2xl text-muted">
        A question of the day to share, plus ten more picked fresh each day from across all{" "}
        {chapters} chapters and {total}+ questions. Everyone gets the same mix today — build a
        streak by coming back daily.
      </p>

      <div className="mt-6">
        <DailyClient count={10} />
      </div>
    </>
  );
}
