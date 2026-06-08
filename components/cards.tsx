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

// Shared classes for the image-topped card shell (visual banner on top, title below).
const IMG_CARD =
  "group flex flex-col overflow-hidden rounded-2xl border border-line bg-card " +
  "shadow-[0_1px_2px_rgba(31,36,48,0.05),0_16px_32px_-22px_rgba(31,36,48,0.32)] " +
  "transition duration-200 hover:-translate-y-1 hover:shadow-[0_22px_44px_-20px_rgba(31,36,48,0.38)]";

/** Image-topped class card: illustrated banner on top, bold title + subtitle below. */
export function ClassImageCard({ cls, index }: { cls: ClassDef; index: number }) {
  const grad = GRADIENTS[index % GRADIENTS.length];
  const authored = cls.subjects.reduce(
    (n, s) => n + getAuthoredInSubject(cls.id, s.key).length,
    0,
  );
  const total = cls.subjects.reduce((n, s) => n + s.chapters.length, 0);
  return (
    <Link href={classUrl(cls.id)} className={IMG_CARD}>
      <div
        className={`relative flex h-32 items-center justify-center overflow-hidden bg-linear-to-br ${grad}`}
      >
        <span
          aria-hidden
          className="font-display text-[3.25rem] font-extrabold leading-none text-white/95 drop-shadow-sm"
        >
          {cls.roman}
        </span>
        {/* decorative shapes */}
        <span aria-hidden className="pointer-events-none absolute -right-6 -top-9 h-24 w-24 rounded-full bg-white/10" />
        <span aria-hidden className="pointer-events-none absolute -bottom-10 -left-6 h-28 w-28 rounded-full bg-black/5" />
        {authored > 0 && (
          <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-bold text-green shadow-sm">
            {authored} ready
          </span>
        )}
        <div className="absolute inset-x-0 bottom-2.5 flex justify-center gap-1.5" aria-hidden>
          {cls.subjects.map((s) => (
            <span
              key={s.key}
              className="grid h-7 w-7 place-items-center rounded-lg bg-white/20 text-base backdrop-blur-sm"
            >
              {s.icon}
            </span>
          ))}
        </div>
      </div>
      <div className="p-4 text-center">
        <h3 className="font-display text-lg font-bold text-ink group-hover:text-cobalt">{cls.label}</h3>
        <p className="mt-0.5 text-sm text-muted">
          {authored > 0 ? `${authored} of ${total} chapters ready` : `${total} chapters · coming soon`}
        </p>
      </div>
    </Link>
  );
}

/** Image-topped subject card: colour banner with the subject icon, title + counts below. */
export function SubjectImageCard({ classId, subject }: { classId: string; subject: SubjectDef }) {
  const ready = getAuthoredInSubject(classId, subject.key).length;
  const total = subject.chapters.length;
  return (
    <Link href={subjectUrl(classId, subject.key)} className={IMG_CARD}>
      <div
        className="relative flex h-28 items-center justify-center overflow-hidden"
        style={{ backgroundColor: subject.color }}
      >
        <span aria-hidden className="text-5xl drop-shadow-sm">{subject.icon}</span>
        <span aria-hidden className="pointer-events-none absolute -right-6 -top-9 h-24 w-24 rounded-full bg-white/10" />
        <span aria-hidden className="pointer-events-none absolute -bottom-10 -left-6 h-28 w-28 rounded-full bg-black/10" />
        {ready > 0 && (
          <span
            className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-bold shadow-sm"
            style={{ color: subject.color }}
          >
            {ready} ready
          </span>
        )}
      </div>
      <div className="p-4 text-center">
        <h3 className="font-display text-lg font-bold text-ink group-hover:text-cobalt">{subject.name}</h3>
        <p className="mt-0.5 text-sm text-muted">
          {total} chapters{ready > 0 ? ` · ${ready} ready` : ""}
        </p>
      </div>
    </Link>
  );
}

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

export function ClassBrowseCard({ cls, index }: { cls: ClassDef; index: number }) {
  const grad = GRADIENTS[index % GRADIENTS.length];
  const authored = cls.subjects.reduce(
    (n, s) => n + getAuthoredInSubject(cls.id, s.key).length,
    0,
  );
  const totalChapters = cls.subjects.reduce((n, s) => n + s.chapters.length, 0);
  return (
    <div className="card relative overflow-hidden p-5">
      <div className="flex items-center gap-3">
        <div
          className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-linear-to-br ${grad} font-display text-lg font-bold text-white shadow-sm`}
        >
          {cls.roman}
        </div>
        <div className="min-w-0">
          <Link href={classUrl(cls.id)} className="font-display text-lg font-bold text-ink hover:text-cobalt">
            {cls.label}
          </Link>
          <p className="text-xs text-muted">
            {authored > 0
              ? `${authored} of ${totalChapters} chapters ready`
              : `${totalChapters} chapters · coming soon`}
          </p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {cls.subjects.map((s) => {
          const ready = getAuthoredInSubject(cls.id, s.key).length;
          return (
            <Link
              key={s.key}
              href={subjectUrl(cls.id, s.key)}
              className="chip border border-line bg-white text-ink transition hover:border-cobalt hover:text-cobalt"
            >
              <span aria-hidden>{s.icon}</span>
              {s.name}
              {ready > 0 && <span className="font-bold text-green">· {ready}</span>}
            </Link>
          );
        })}
      </div>
    </div>
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
