import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getClass,
  getSubject,
  isAuthored,
  allSubjectParams,
  parseClassId,
  subjectUrl,
  getAuthoredInSubject,
} from "@/lib/content";
import { buildMetadata, breadcrumbLd, webPageLd } from "@/lib/seo";
import { ChapterRow } from "@/components/cards";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return allSubjectParams();
}

type Params = Promise<{ classId: string; subject: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { classId, subject } = await params;
  const id = parseClassId(classId);
  const cls = getClass(id);
  const subj = getSubject(id, subject);
  if (!cls || !subj) return {};
  const title = `${subj.name} Class ${id} CBSE — Notes, MCQs & Chapter Quizzes`;
  const desc = `CBSE Class ${id} ${subj.name}: chapter-wise notes, MCQ quizzes and practice questions covering all ${subj.chapters.length} chapters.`;
  return buildMetadata({ title, description: desc, path: subjectUrl(id, subject) });
}

export default async function SubjectPage({ params }: { params: Params }) {
  const { classId, subject } = await params;
  const id = parseClassId(classId);
  const cls = getClass(id);
  const subj = getSubject(id, subject);
  if (!cls || !subj) notFound();

  const path = subjectUrl(id, subject);
  const readyCount = getAuthoredInSubject(id, subject).length;
  const title = `${subj.name} — Class ${id}`;
  const desc = `Class ${id} ${subj.name} chapter list with notes and quizzes.`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "CBSE", path: "/cbse" },
    { name: cls.label, path: `/cbse/class-${id}` },
    { name: subj.name, path },
  ];

  const sorted = [...subj.chapters].sort((a, b) => a.order - b.order);

  return (
    <>
      <JsonLd data={[breadcrumbLd(crumbs), webPageLd(title, desc, path)]} />
      <Breadcrumbs crumbs={crumbs} />
      <div className="flex items-center gap-3">
        <span
          aria-hidden
          className="grid h-12 w-12 place-items-center rounded-2xl text-2xl text-white shadow-sm"
          style={{ backgroundColor: subj.color }}
        >
          {subj.icon}
        </span>
        <div>
          <h1 className="font-display text-3xl font-bold text-ink">
            {subj.name} — Class {id}
          </h1>
          <p className="text-sm text-muted">
            {subj.chapters.length} chapters
            {readyCount > 0 ? ` · ${readyCount} ready to study` : " · being added"}
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-2.5">
        {sorted.map((ch) => (
          <ChapterRow
            key={ch.slug}
            classId={id}
            subjectKey={subject}
            chapter={ch}
            authored={isAuthored(id, subject, ch.slug)}
          />
        ))}
      </div>

      {readyCount === 0 && (
        <p className="mt-6 rounded-2xl bg-cobalt-soft/60 p-4 text-sm text-muted">
          Chapters for this subject are being written and added one by one. Check back soon!
        </p>
      )}
    </>
  );
}
