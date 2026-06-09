import type { Metadata } from "next";
import { buildMetadata, breadcrumbLd, webPageLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { DailyClient } from "@/components/DailyClient";

const PATH = "/daily";
const TITLE = "Daily CBSE Challenge — 10 Mixed Questions Across Classes 1 & 6–10";
const DESC =
  "A fresh daily quiz of 10 CBSE questions mixed from across every class and subject, plus a question of the day to share. Instant feedback, explanations and a study streak. Free, no login.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function DailyPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Daily challenge", path: PATH },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbLd(crumbs), webPageLd(TITLE, DESC, PATH)]} />
      <Breadcrumbs crumbs={crumbs} />

      <section className="relative overflow-hidden rounded-[2rem] glass border p-8 text-center shadow-xl sm:p-12">
        <span aria-hidden className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cobalt/20 blur-3xl" />
        <span aria-hidden className="pointer-events-none absolute -bottom-20 right-[-2rem] h-64 w-64 rounded-full bg-coral/20 blur-3xl" />
        <span aria-hidden className="pointer-events-none absolute -bottom-16 left-[-2rem] h-56 w-56 rounded-full bg-amber/20 blur-3xl" />
        <div className="relative">
          <span className="chip glass text-cobalt">⚡ Daily arena</span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Daily <span className="brand-gradient">Challenge</span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-muted">
            Ten questions picked fresh each day — the same mix for everyone today. Choose your
            board (CBSE, or WBBPE in Bengali medium), answer, build your streak, and share your
            score.
          </p>
        </div>
      </section>

      <div className="mt-6">
        <DailyClient count={10} />
      </div>
    </>
  );
}
