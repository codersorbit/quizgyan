import type { Metadata } from "next";
import Link from "next/link";
import { allAuthoredChapters, totalMcqCount, chapterUrl, getSubject } from "@/lib/content";
import { buildMetadata, breadcrumbLd, webPageLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";

const PATH = "/mcqs";
const TITLE = "CBSE MCQs — Class 6 to 10 Chapter Quizzes with Answers";
const DESC =
  "Free CBSE MCQ quizzes for Classes 6–10 with instant feedback, explanations and scoring. Practise Maths and Science chapter by chapter.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function McqHub() {
  const chapters = allAuthoredChapters();
  const total = totalMcqCount();
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "MCQs", path: PATH },
  ];
  return (
    <>
      <JsonLd data={[breadcrumbLd(crumbs), webPageLd(TITLE, DESC, PATH)]} />
      <Breadcrumbs crumbs={crumbs} />
      <h1 className="font-display text-3xl font-bold text-ink">CBSE MCQ Quizzes</h1>
      <p className="mt-2 max-w-2xl text-muted">
        {total}+ multiple-choice questions across {chapters.length} chapters, each with instant
        feedback and an explanation. Your scores and streak save automatically.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {chapters.map((c) => {
          const subj = getSubject(c.classId, c.subject);
          return (
            <Link
              key={`${c.classId}-${c.subject}-${c.slug}`}
              href={`${chapterUrl(c.classId, c.subject, c.slug)}#quiz`}
              className="card flex items-center justify-between gap-4 p-4 transition hover:border-cobalt"
            >
              <span>
                <span className="block font-display font-bold text-ink">{c.title}</span>
                <span className="text-sm text-muted">
                  Class {c.classId} · {subj?.name}
                </span>
              </span>
              <span className="chip bg-cobalt-soft text-cobalt">{c.mcqs.length} Q</span>
            </Link>
          );
        })}
      </div>
    </>
  );
}
