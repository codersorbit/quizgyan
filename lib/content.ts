import { CBSE_CLASSES, WBBPE_CLASSES, ALL_CLASSES } from "@/content/classes";
import { CHAPTERS } from "@/content/chapters";
import type { Chapter, ClassDef, SubjectDef, ChapterRef } from "@/lib/types";

/** Default board for any content authored before the multi-board refactor. */
const DEFAULT_BOARD = "cbse";
const boardOf = (x: { board?: string }) => x.board ?? DEFAULT_BOARD;

/** Back-compat: existing CBSE-only views import `CLASSES`. */
export const CLASSES: ClassDef[] = CBSE_CLASSES;
export { CBSE_CLASSES, WBBPE_CLASSES, ALL_CLASSES };

/** Classes belonging to a given board. */
export function boardClasses(board: string = DEFAULT_BOARD): ClassDef[] {
  return ALL_CLASSES.filter((c) => c.board === board);
}

/* ----------------------------- URL builders ----------------------------- */
export const classUrl = (classId: string, board: string = DEFAULT_BOARD) =>
  `/${board}/class-${classId}`;
export const subjectUrl = (
  classId: string,
  subject: string,
  board: string = DEFAULT_BOARD,
) => `/${board}/class-${classId}/${subject}`;
export const chapterUrl = (
  classId: string,
  subject: string,
  slug: string,
  board: string = DEFAULT_BOARD,
) => `/${board}/class-${classId}/${subject}/${slug}`;

/* ------------------------------- Lookups -------------------------------- */
export function getClass(
  classId: string,
  board: string = DEFAULT_BOARD,
): ClassDef | undefined {
  return ALL_CLASSES.find((c) => c.id === classId && c.board === board);
}

export function getSubject(
  classId: string,
  subjectKey: string,
  board: string = DEFAULT_BOARD,
): SubjectDef | undefined {
  return getClass(classId, board)?.subjects.find((s) => s.key === subjectKey);
}

export function getChapter(
  classId: string,
  subject: string,
  slug: string,
  board: string = DEFAULT_BOARD,
): Chapter | undefined {
  return CHAPTERS.find(
    (c) =>
      boardOf(c) === board &&
      c.classId === classId &&
      c.subject === subject &&
      c.slug === slug,
  );
}

export function isAuthored(
  classId: string,
  subject: string,
  slug: string,
  board: string = DEFAULT_BOARD,
): boolean {
  return Boolean(getChapter(classId, subject, slug, board));
}

export function resolveRef(ref: ChapterRef): Chapter | undefined {
  return getChapter(ref.classId, ref.subject, ref.slug, ref.board ?? DEFAULT_BOARD);
}

/** Authored chapters in a subject, sorted by syllabus order. */
export function getAuthoredInSubject(
  classId: string,
  subject: string,
  board: string = DEFAULT_BOARD,
): Chapter[] {
  return CHAPTERS.filter(
    (c) => boardOf(c) === board && c.classId === classId && c.subject === subject,
  ).sort((a, b) => a.order - b.order);
}

/** Previous/next AUTHORED chapter within the same subject (no dead links). */
export function getAdjacent(chapter: Chapter): {
  prev?: Chapter;
  next?: Chapter;
} {
  const list = getAuthoredInSubject(chapter.classId, chapter.subject, boardOf(chapter));
  const i = list.findIndex((c) => c.slug === chapter.slug);
  return { prev: list[i - 1], next: list[i + 1] };
}

/* ------------------------------ Aggregates ------------------------------ */
export function allAuthoredChapters(): Chapter[] {
  return [...CHAPTERS].sort(
    (a, b) =>
      boardOf(a).localeCompare(boardOf(b)) ||
      a.classId.localeCompare(b.classId) ||
      a.subject.localeCompare(b.subject) ||
      a.order - b.order,
  );
}

export function totalMcqCount(): number {
  return CHAPTERS.reduce((n, c) => n + c.mcqs.length, 0);
}

export function subjectMeta(subjectKey: string): SubjectDef | undefined {
  for (const cls of ALL_CLASSES) {
    const s = cls.subjects.find((x) => x.key === subjectKey);
    if (s) return s;
  }
  return undefined;
}

/* -------------------- Static params for generateStaticParams ------------ */
/** CBSE chapter routes (the /cbse route tree). */
export function allChapterParams(): {
  classId: string;
  subject: string;
  chapter: string;
}[] {
  return CHAPTERS.filter((c) => boardOf(c) === "cbse").map((c) => ({
    classId: `class-${c.classId}`,
    subject: c.subject,
    chapter: c.slug,
  }));
}

export function allClassParams(): { classId: string }[] {
  return CBSE_CLASSES.map((c) => ({ classId: `class-${c.id}` }));
}

export function allSubjectParams(): { classId: string; subject: string }[] {
  return CBSE_CLASSES.flatMap((c) =>
    c.subjects.map((s) => ({ classId: `class-${c.id}`, subject: s.key })),
  );
}

/** Route params arrive as "class-10"; strip the prefix to get "10". */
export function parseClassId(param: string): string {
  return param.replace(/^class-/, "");
}

/* ---- Generic per-board params (used by non-CBSE route trees, e.g. /wbbpe) ---- */
export function classParams(board: string): { classId: string }[] {
  return boardClasses(board).map((c) => ({ classId: `class-${c.id}` }));
}

export function subjectParams(
  board: string,
): { classId: string; subject: string }[] {
  return boardClasses(board).flatMap((c) =>
    c.subjects.map((s) => ({ classId: `class-${c.id}`, subject: s.key })),
  );
}

export function chapterParams(
  board: string,
): { classId: string; subject: string; chapter: string }[] {
  return CHAPTERS.filter((c) => boardOf(c) === board).map((c) => ({
    classId: `class-${c.classId}`,
    subject: c.subject,
    chapter: c.slug,
  }));
}

/* --------------------- Search keywords (concept-level) -------------------- */
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
  board: string;
  classId: string;
  subject: string;
  url: string;
};

/** Every authored MCQ across all chapters, tagged with its source chapter+board. */
export function allChallengeMcqs(): ChallengeMcq[] {
  const out: ChallengeMcq[] = [];
  for (const c of allAuthoredChapters()) {
    const board = boardOf(c);
    const url = chapterUrl(c.classId, c.subject, c.slug, board);
    for (const m of c.mcqs) {
      out.push({
        q: m.q,
        options: m.options,
        answer: m.answer,
        explanation: m.explanation,
        chapterTitle: c.title,
        board,
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
  board: string;
  classId: string;
  subject: string;
  classLabel: string;
  subjectName: string;
  url: string;
  keywords: string;
};

/** The full client-search index (title + class/subject + concept keywords). */
export function buildSearchIndex(): SearchItem[] {
  return allAuthoredChapters().map((c) => {
    const board = boardOf(c);
    return {
      title: c.title,
      board,
      classId: c.classId,
      subject: c.subject,
      classLabel: getClass(c.classId, board)?.label ?? `Class ${c.classId}`,
      subjectName: getSubject(c.classId, c.subject, board)?.name ?? c.subject,
      url: chapterUrl(c.classId, c.subject, c.slug, board),
      keywords: chapterKeywords(c),
    };
  });
}
