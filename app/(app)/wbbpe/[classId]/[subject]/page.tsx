import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getClass,
  getSubject,
  isAuthored,
  subjectParams,
  parseClassId,
  subjectUrl,
  getAuthoredInSubject,
} from "@/lib/content";
import { buildMetadata, breadcrumbLd, webPageLd } from "@/lib/seo";
import { ChapterRow } from "@/components/cards";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";

const BOARD = "wbbpe";

export function generateStaticParams() {
  return subjectParams(BOARD);
}

type Params = Promise<{ classId: string; subject: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { classId, subject } = await params;
  const id = parseClassId(classId);
  const cls = getClass(id, BOARD);
  const subj = getSubject(id, subject, BOARD);
  if (!cls || !subj) return {};
  const title = `${subj.name} — WBBPE ${cls.label} | নোট, MCQ ও কুইজ (আমার বই)`;
  const desc = `WBBPE ${cls.label} ${subj.name}: অধ্যায়ভিত্তিক নোট, MCQ কুইজ ও অনুশীলন প্রশ্ন — মোট ${subj.chapters.length}টি অধ্যায়।`;
  return buildMetadata({ title, description: desc, path: subjectUrl(id, subject, BOARD) });
}

export default async function WbbpeSubjectPage({ params }: { params: Params }) {
  const { classId, subject } = await params;
  const id = parseClassId(classId);
  const cls = getClass(id, BOARD);
  const subj = getSubject(id, subject, BOARD);
  if (!cls || !subj) notFound();

  const path = subjectUrl(id, subject, BOARD);
  const readyCount = getAuthoredInSubject(id, subject, BOARD).length;
  const title = `${subj.name} — WBBPE ${cls.label}`;
  const desc = `WBBPE ${cls.label} ${subj.name} — অধ্যায় তালিকা, নোট ও কুইজ।`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "WBBPE", path: "/wbbpe" },
    { name: cls.label, path: `/wbbpe/class-${id}` },
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
            {subj.name} — WBBPE {cls.label}
          </h1>
          <p className="text-sm text-muted">
            {subj.chapters.length}টি অধ্যায়
            {readyCount > 0 ? ` · ${readyCount}টি পড়ার জন্য তৈরি` : " · যোগ করা হচ্ছে"}
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
            authored={isAuthored(id, subject, ch.slug, BOARD)}
            board={BOARD}
          />
        ))}
      </div>

      {readyCount === 0 && (
        <p className="mt-6 rounded-2xl bg-cobalt-soft/60 p-4 text-sm text-muted">
          এই বিষয়ের অধ্যায়গুলো একে একে তৈরি করে যোগ করা হচ্ছে। শীঘ্রই আবার দেখো!
        </p>
      )}
    </>
  );
}
