import type { Metadata } from "next";
import Link from "next/link";
import { allAuthoredChapters, totalMcqCount, chapterUrl, getSubject } from "@/lib/content";
import { buildMetadata, breadcrumbLd, webPageLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";

const PATH = "/mcqs";
const TITLE = "CBSE MCQs — Class 1 & 6–10 Chapter Quizzes with Answers";
const DESC =
  "Free CBSE MCQ quizzes for Class 1 and Classes 6–10 with instant feedback, explanations and scoring. Practise Maths, Science, Social Science and English chapter by chapter.";

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
      <section className="relative overflow-hidden rounded-[2rem] glass border p-8 text-center shadow-xl sm:p-12">
        <span aria-hidden className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cobalt/20 blur-3xl" />
        <span aria-hidden className="pointer-events-none absolute -bottom-20 right-[-2rem] h-64 w-64 rounded-full bg-coral/20 blur-3xl" />
        <span aria-hidden className="pointer-events-none absolute -bottom-16 left-[-2rem] h-56 w-56 rounded-full bg-violet/20 blur-3xl" />
        <div className="relative">
          <span className="chip glass text-cobalt">🧠 Practice quizzes</span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            CBSE MCQ <span className="brand-gradient">Quizzes</span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-muted">
            {total}+ multiple-choice questions across {chapters.length} chapters, each with instant
            feedback and an explanation. Your scores and streak save automatically.
          </p>
        </div>
      </section>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {chapters.map((c) => {
          const subj = getSubject(c.classId, c.subject);
          return (
            <Link
              key={`${c.classId}-${c.subject}-${c.slug}`}
              href={`${chapterUrl(c.classId, c.subject, c.slug)}#quiz`}
              className="card flex items-center justify-between gap-4 p-4 transition hover:-translate-y-0.5 hover:border-cobalt"
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
