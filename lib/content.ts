import { CLASSES } from "@/content/classes";
import { CHAPTERS } from "@/content/chapters";
import type { Chapter, ClassDef, SubjectDef, ChapterRef } from "@/lib/types";

export { CLASSES };

/* ----------------------------- URL builders ----------------------------- */
export const classUrl = (classId: string) => `/cbse/class-${classId}`;
export const subjectUrl = (classId: string, subject: string) =>
  `/cbse/class-${classId}/${subject}`;
export const chapterUrl = (classId: string, subject: string, slug: string) =>
  `/cbse/class-${classId}/${subject}/${slug}`;

/* ------------------------------- Lookups -------------------------------- */
export function getClass(classId: string): ClassDef | undefined {
  return CLASSES.find((c) => c.id === classId);
}

export function getSubject(
  classId: string,
  subjectKey: string,
): SubjectDef | undefined {
  return getClass(classId)?.subjects.find((s) => s.key === subjectKey);
}

export function getChapter(
  classId: string,
  subject: string,
  slug: string,
): Chapter | undefined {
  return CHAPTERS.find(
    (c) => c.classId === classId && c.subject === subject && c.slug === slug,
  );
}

export function isAuthored(
  classId: string,
  subject: string,
  slug: string,
): boolean {
  return Boolean(getChapter(classId, subject, slug));
}

export function resolveRef(ref: ChapterRef): Chapter | undefined {
  return getChapter(ref.classId, ref.subject, ref.slug);
}

/** Authored chapters in a subject, sorted by syllabus order. */
export function getAuthoredInSubject(
  classId: string,
  subject: string,
): Chapter[] {
  return CHAPTERS.filter(
    (c) => c.classId === classId && c.subject === subject,
  ).sort((a, b) => a.order - b.order);
}

/** Previous/next AUTHORED chapter within the same subject (no dead links). */
export function getAdjacent(chapter: Chapter): {
  prev?: Chapter;
  next?: Chapter;
} {
  const list = getAuthoredInSubject(chapter.classId, chapter.subject);
  const i = list.findIndex((c) => c.slug === chapter.slug);
  return { prev: list[i - 1], next: list[i + 1] };
}

/* ------------------------------ Aggregates ------------------------------ */
export function allAuthoredChapters(): Chapter[] {
  return [...CHAPTERS].sort(
    (a, b) =>
      a.classId.localeCompare(b.classId) ||
      a.subject.localeCompare(b.subject) ||
      a.order - b.order,
  );
}

export function totalMcqCount(): number {
  return CHAPTERS.reduce((n, c) => n + c.mcqs.length, 0);
}

export function subjectMeta(subjectKey: string): SubjectDef | undefined {
  for (const cls of CLASSES) {
    const s = cls.subjects.find((x) => x.key === subjectKey);
    if (s) return s;
  }
  return undefined;
}

/* -------------------- Static params for generateStaticParams ------------ */
export function allChapterParams(): {
  classId: string;
  subject: string;
  chapter: string;
}[] {
  return CHAPTERS.map((c) => ({
    classId: `class-${c.classId}`,
    subject: c.subject,
    chapter: c.slug,
  }));
}

export function allClassParams(): { classId: string }[] {
  return CLASSES.map((c) => ({ classId: `class-${c.id}` }));
}

export function allSubjectParams(): { classId: string; subject: string }[] {
  return CLASSES.flatMap((c) =>
    c.subjects.map((s) => ({ classId: `class-${c.id}`, subject: s.key })),
  );
}

/** Route params arrive as "class-10"; strip the prefix to get "10". */
export function parseClassId(param: string): string {
  return param.replace(/^class-/, "");
}

/* --------------------- Search keywords (concept-level) -------------------- */
/**
 * Build a lowercase, searchable keyword blob for a chapter from its
 * conceptual fields (objectives, concept headings + bodies, definition
 * terms, formula names, key takeaways). This lets the homepage search match
 * concepts like "Pythagoras", "osmosis" or "mole", not just chapter titles.
 */
export function chapterKeywords(c: Chapter): string {
  const parts: string[] = [];
  parts.push(...c.objectives);
  for (const con of c.concepts) parts.push(con.heading, con.body);
  for (const d of c.definitions) parts.push(d.term);
  for (const f of c.formulas) parts.push(f.name);
  parts.push(...c.keyTakeaways);
  return parts
    .join(" ")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

/* ------------------------- Daily-challenge pool --------------------------- */
export type ChallengeMcq = {
  q: string;
  options: string[];
  answer: number;
  explanation: string;
  chapterTitle: string;
  classId: string;
  subject: string;
  url: string;
};

/** Every authored MCQ across all chapters, tagged with its source chapter. */
export function allChallengeMcqs(): ChallengeMcq[] {
  const out: ChallengeMcq[] = [];
  for (const c of allAuthoredChapters()) {
    const url = chapterUrl(c.classId, c.subject, c.slug);
    for (const m of c.mcqs) {
      out.push({
        q: m.q,
        options: m.options,
        answer: m.answer,
        explanation: m.explanation,
        chapterTitle: c.title,
        classId: c.classId,
        subject: c.subject,
        url,
      });
    }
  }
  return out;
}

/* --------------------------- Search index (static) ------------------------ */
export type SearchItem = {
  title: string;
  classId: string;
  subject: string;
  classLabel: string;
  subjectName: string;
  url: string;
  keywords: string;
};

/** The full client-search index (title + class/subject + concept keywords). */
export function buildSearchIndex(): SearchItem[] {
  return allAuthoredChapters().map((c) => ({
    title: c.title,
    classId: c.classId,
    subject: c.subject,
    classLabel: getClass(c.classId)?.label ?? `Class ${c.classId}`,
    subjectName: c.subject === "maths" ? "Maths" : "Science",
    url: chapterUrl(c.classId, c.subject, c.slug),
    keywords: chapterKeywords(c),
  }));
}
