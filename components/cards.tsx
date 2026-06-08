import Link from "next/link";
import type { ClassDef, SubjectDef, ChapterStub } from "@/lib/types";
import { classUrl, subjectUrl, chapterUrl, getAuthoredInSubject } from "@/lib/content";

const GRADIENTS = [
  "from-cobalt to-[#5b7bff]",
  "from-coral to-[#ff8aa0]",
  "from-green to-[#42c98a]",
  "from-amber to-[#e0a64a]",
  "from-[#7b54d3] to-[#a07ee8]",
];

export function ClassCard({ cls, index }: { cls: ClassDef; index: number }) {
  const grad = GRADIENTS[index % GRADIENTS.length];
  const authored = cls.subjects.reduce(
    (n, s) => n + getAuthoredInSubject(cls.id, s.key).length,
    0,
  );
  return (
    <Link
      href={classUrl(cls.id)}
      className="card group relative overflow-hidden p-5 transition hover:-translate-y-0.5"
    >
      <div
        className={`mb-3 grid h-12 w-12 place-items-center rounded-2xl bg-linear-to-br ${grad} font-display text-lg font-bold text-white shadow-sm`}
      >
        {cls.roman}
      </div>
      <h3 className="font-display text-lg font-bold text-ink group-hover:text-cobalt">
        {cls.label}
      </h3>
      <p className="mt-1 text-sm text-muted">{cls.subjects.length} subjects</p>
      {authored > 0 && (
        <span className="chip mt-3 bg-green/10 text-green">{authored} chapters ready</span>
      )}
    </Link>
  );
}

export function SubjectCard({ classId, subject }: { classId: string; subject: SubjectDef }) {
  const ready = getAuthoredInSubject(classId, subject.key).length;
  return (
    <Link
      href={subjectUrl(classId, subject.key)}
      className="card group flex items-center gap-4 p-4 transition hover:-translate-y-0.5"
    >
      <span
        aria-hidden
        className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-xl text-white shadow-sm"
        style={{ backgroundColor: subject.color }}
      >
        {subject.icon}
      </span>
      <span className="min-w-0">
        <span className="block font-display font-bold text-ink group-hover:text-cobalt">
          {subject.name}
        </span>
        <span className="block text-sm text-muted">
          {subject.chapters.length} chapters
          {ready > 0 ? ` · ${ready} ready` : ""}
        </span>
      </span>
    </Link>
  );
}

export function ChapterRow({
  classId,
  subjectKey,
  chapter,
  authored,
}: {
  classId: string;
  subjectKey: string;
  chapter: ChapterStub;
  authored: boolean;
}) {
  const inner = (
    <>
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-cream text-sm font-bold text-muted">
        {chapter.order}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-semibold text-ink">{chapter.title}</span>
      </span>
      {authored ? (
        <span className="chip bg-green/10 text-green">Notes + Quiz</span>
      ) : (
        <span className="chip bg-line/60 text-muted">Coming soon</span>
      )}
    </>
  );

  if (!authored) {
    return (
      <div className="flex items-center gap-3 rounded-2xl border border-line bg-white/50 px-4 py-3 opacity-70">
        {inner}
      </div>
    );
  }
  return (
    <Link
      href={chapterUrl(classId, subjectKey, chapter.slug)}
      className="flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 transition hover:border-cobalt hover:bg-cobalt-soft/40"
    >
      {inner}
    </Link>
  );
}
