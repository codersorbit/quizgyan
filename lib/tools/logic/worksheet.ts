// Pure worksheet logic: the chapter→question adapter, seeded selection and
// assembly. No React, no I/O, and NO runtime import of the content bank — the
// adapter takes a Chapter as an argument so this module stays tiny and the
// client island can import the selection logic without bundling all chapters.

import type { Chapter, MCQ, QA } from "@/lib/types";

/* ------------------------------- Types ---------------------------------- */

export type QType = "mcq" | "fill" | "truefalse" | "short" | "match" | "hots" | "long";
export type WLang = "en" | "bn" | "hi";
export type WDifficulty = "easy" | "standard" | "hard" | "hots";

export interface WorksheetQuestion {
  id: string;
  board: "cbse" | "wbbpe";
  classLevel: number; // 1–10
  subject: string;
  chapterSlug: string;
  chapterTitle: string;
  type: QType;
  /** content language of THIS question (the bank holds en|bn; hi reserved) */
  lang: WLang;
  prompt: string;
  options?: string[]; // mcq / match
  /** index into options for mcq/truefalse (kept so option-shuffle stays correct) */
  answerIndex?: number;
  answer: string; // model answer / correct option text
  explanation?: string;
  difficulty: WDifficulty;
  marks: number; // resolved (defaulted) marks — see DEFAULT_MARKS
}

/** Order sections appear in a paper, plus their default marks. */
export const TYPE_ORDER: QType[] = ["mcq", "fill", "truefalse", "short", "match", "hots", "long"];

export const DEFAULT_MARKS: Record<QType, number> = {
  mcq: 1,
  fill: 1,
  truefalse: 1,
  short: 3,
  match: 4,
  hots: 4,
  long: 5,
};

/* ------------------------- Content-language detect ----------------------- */

/** True content language is per-chapter in this bank; detect by Bengali script. */
export function detectLang(samples: string[]): WLang {
  const s = samples.join(" ");
  let bn = 0;
  for (const ch of s) if (ch >= "\u0980" && ch <= "\u09FF") bn++;
  return bn > 3 ? "bn" : "en";
}

function mapDifficulty(d?: MCQ["difficulty"]): WDifficulty {
  return d === "easy" ? "easy" : d === "hard" ? "hard" : "standard";
}

/* ------------------------------- Adapter -------------------------------- */
/**
 * Maps an authored Chapter into flat WorksheetQuestions. The bank exposes
 * mcq / short / long / hots only; fill / truefalse / match come from the
 * teacher's own typed questions (custom questions, Phase 2). Fields defaulted:
 *   • marks      — not stored anywhere → DEFAULT_MARKS by type
 *   • difficulty — only MCQs carry it (easy|medium|hard, mapped to
 *                  easy|standard|hard); short/long → "standard", hots → "hots"
 *   • id         — MCQs have ids; QA rows get a synthesised stable id
 *   • explanation— MCQs only; QA model answer lives in `answer`
 *   • lang       — detected from the chapter's own text
 */
export function chapterToQuestions(ch: Chapter): WorksheetQuestion[] {
  const board = (ch.board ?? "cbse") as "cbse" | "wbbpe";
  const classLevel = Number(ch.classId) || 0;
  const lang = detectLang([
    ...ch.mcqs.slice(0, 4).map((m) => m.q),
    ...ch.shortQuestions.slice(0, 4).map((q) => q.q),
  ]);
  const base = {
    board,
    classLevel,
    subject: ch.subject,
    chapterSlug: ch.slug,
    chapterTitle: ch.title,
    lang,
  };
  const out: WorksheetQuestion[] = [];

  ch.mcqs.forEach((m: MCQ) => {
    out.push({
      ...base,
      id: `${ch.slug}:mcq:${m.id}`,
      type: "mcq",
      prompt: m.q,
      options: [...m.options],
      answerIndex: m.answer,
      answer: m.options[m.answer] ?? "",
      explanation: m.explanation || undefined,
      difficulty: mapDifficulty(m.difficulty),
      marks: DEFAULT_MARKS.mcq,
    });
  });
  const addQA = (rows: QA[], type: Extract<QType, "short" | "long" | "hots">, diff: WDifficulty) =>
    rows.forEach((q, i) =>
      out.push({
        ...base,
        id: `${ch.slug}:${type}:${i}`,
        type,
        prompt: q.q,
        answer: q.a,
        difficulty: diff,
        marks: DEFAULT_MARKS[type],
      }),
    );
  addQA(ch.shortQuestions, "short", "standard");
  addQA(ch.longQuestions, "long", "standard");
  addQA(ch.hots, "hots", "hots");
  return out;
}

/* ----------------------------- Scope tree ------------------------------- */
// Small metadata tree the builder cascades from (no question text).

export interface ScopeChapter {
  slug: string;
  title: string;
  lang: WLang;
  counts: Record<QType, number>;
  total: number;
}
export interface ScopeSubject {
  key: string;
  name: string;
  chapters: ScopeChapter[];
}
export interface ScopeClass {
  id: string;
  label: string;
  subjects: ScopeSubject[];
}
export interface ScopeBoard {
  board: "cbse" | "wbbpe";
  label: string;
  classes: ScopeClass[];
}

export interface WorksheetBank {
  scope: ScopeBoard[];
  questions: WorksheetQuestion[];
}

export function emptyCounts(): Record<QType, number> {
  return { mcq: 0, fill: 0, truefalse: 0, short: 0, match: 0, hots: 0, long: 0 };
}

/* --------------------------- Seeded shuffle ----------------------------- */
// Deterministic so a given seed reproduces the same paper (URL shareability).

function xmur3(str: string): () => number {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return () => {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    h ^= h >>> 16;
    return h >>> 0;
  };
}
function mulberry32(a: number): () => number {
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export function rngFor(seed: string): () => number {
  return mulberry32(xmur3(seed)());
}
export function seededShuffle<T>(arr: readonly T[], seed: string): T[] {
  const a = [...arr];
  const rand = rngFor(seed);
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* --------------------------- Selection logic ---------------------------- */

export interface SelectionRequest {
  /** how many of each type the teacher asked for */
  mix: Partial<Record<QType, number>>;
  /** marks-per-type overrides (else DEFAULT_MARKS) */
  marksByType?: Partial<Record<QType, number>>;
  /** seed so the same setup reproduces the same paper */
  seed: string;
  /** optional difficulty filter for MCQs (only type carrying difficulty data) */
  mcqDifficulty?: WDifficulty[];
}

export interface WorksheetSection {
  type: QType;
  questions: WorksheetQuestion[];
}
export interface Shortfall {
  type: QType;
  requested: number;
  got: number;
}
export interface SelectionResult {
  sections: WorksheetSection[];
  shortfalls: Shortfall[];
  totalQuestions: number;
  totalMarks: number;
}

/** Pure selection: no duplicates, deterministic by seed, graceful shortfall. */
export function selectQuestions(pool: WorksheetQuestion[], req: SelectionRequest): SelectionResult {
  const sections: WorksheetSection[] = [];
  const shortfalls: Shortfall[] = [];
  let totalQuestions = 0;
  let totalMarks = 0;

  for (const type of TYPE_ORDER) {
    const want = Math.max(0, Math.floor(req.mix[type] ?? 0));
    if (want === 0) continue;

    let candidates = pool.filter((q) => q.type === type);
    if (type === "mcq" && req.mcqDifficulty && req.mcqDifficulty.length > 0) {
      const filtered = candidates.filter((q) => req.mcqDifficulty!.includes(q.difficulty));
      // if the difficulty filter empties the pool, fall back to all MCQs
      if (filtered.length > 0) candidates = filtered;
    }
    const shuffled = seededShuffle(candidates, `${req.seed}:${type}`);
    const picked = shuffled.slice(0, want);
    const marks = req.marksByType?.[type];
    const withMarks = marks != null ? picked.map((q) => ({ ...q, marks })) : picked;

    if (picked.length < want) shortfalls.push({ type, requested: want, got: picked.length });
    if (withMarks.length > 0) {
      sections.push({ type, questions: withMarks });
      totalQuestions += withMarks.length;
      totalMarks += withMarks.reduce((s, q) => s + q.marks, 0);
    }
  }
  return { sections, shortfalls, totalQuestions, totalMarks };
}

/** Replace one question with another of the same type not already in use. */
export function pickReplacement(
  pool: WorksheetQuestion[],
  type: QType,
  usedIds: Set<string>,
  seed: string,
): WorksheetQuestion | null {
  const candidates = seededShuffle(
    pool.filter((q) => q.type === type && !usedIds.has(q.id)),
    seed,
  );
  return candidates[0] ?? null;
}

/** Deterministically shuffle an MCQ's options, keeping the answer correct. */
export function shuffleOptions(q: WorksheetQuestion, seed: string): WorksheetQuestion {
  if (q.type !== "mcq" || !q.options || q.answerIndex == null) return q;
  const idx = q.options.map((_, i) => i);
  const order = seededShuffle(idx, `${seed}:${q.id}`);
  const options = order.map((i) => q.options![i]);
  const answerIndex = order.indexOf(q.answerIndex);
  return { ...q, options, answerIndex, answer: options[answerIndex] ?? q.answer };
}

/* --------------------- Custom (teacher-typed) questions ------------------ */

/** Raw shape the custom-question editor produces. */
export interface CustomQuestion {
  id: string;
  type: QType;
  prompt: string;
  options?: string[]; // mcq
  answerIndex?: number; // mcq correct option
  answer: string; // model answer (free types) / fallback
  explanation?: string;
  marks: number;
}

/** Map a teacher-typed question into the common WorksheetQuestion shape. */
export function customToQuestion(c: CustomQuestion): WorksheetQuestion {
  const lang = detectLang([c.prompt, c.answer]);
  const isMcq = c.type === "mcq" && c.options && c.options.length > 0;
  return {
    id: `custom:${c.id}`,
    board: "cbse",
    classLevel: 0,
    subject: "custom",
    chapterSlug: "custom",
    chapterTitle: "custom",
    type: c.type,
    lang,
    prompt: c.prompt,
    options: isMcq ? [...c.options!] : undefined,
    answerIndex: isMcq ? (c.answerIndex ?? 0) : undefined,
    answer: isMcq ? c.options![c.answerIndex ?? 0] ?? c.answer : c.answer,
    explanation: c.explanation || undefined,
    difficulty: c.type === "hots" ? "hots" : "standard",
    marks: Math.max(0, Math.floor(c.marks) || 0),
  };
}

/** Merge teacher questions into the bank-selected sections, by type. */
function mergeCustoms(bankSections: WorksheetSection[], customs: WorksheetQuestion[]): WorksheetSection[] {
  const byType = new Map<QType, WorksheetQuestion[]>();
  for (const sec of bankSections) byType.set(sec.type, [...sec.questions]);
  for (const c of customs) {
    const arr = byType.get(c.type) ?? [];
    arr.push(c);
    byType.set(c.type, arr);
  }
  const out: WorksheetSection[] = [];
  for (const type of TYPE_ORDER) {
    const qs = byType.get(type);
    if (qs && qs.length > 0) out.push({ type, questions: qs });
  }
  return out;
}

function totalsOf(sections: WorksheetSection[]): { totalQuestions: number; totalMarks: number } {
  let totalQuestions = 0;
  let totalMarks = 0;
  for (const sec of sections) {
    totalQuestions += sec.questions.length;
    for (const q of sec.questions) totalMarks += q.marks;
  }
  return { totalQuestions, totalMarks };
}

/**
 * Build 1–4 sets (A/B/C/D) from the same scope + mix. Each set draws with its
 * own seed (so selections differ when the pool allows), merges in the teacher's
 * custom questions, and — when more than one set is requested — shuffles MCQ
 * option order per set so two students side-by-side get visibly different
 * papers. Option-shuffling keeps each set's answer key correct.
 */
export function buildWorksheetSets(
  pool: WorksheetQuestion[],
  req: SelectionRequest,
  customs: WorksheetQuestion[],
  setCount: number,
): SelectionResult[] {
  const n = Math.max(1, Math.min(4, Math.floor(setCount) || 1));
  const sets: SelectionResult[] = [];
  for (let i = 0; i < n; i++) {
    const setSeed = `${req.seed}:set${i}`;
    const bank = selectQuestions(pool, { ...req, seed: setSeed });
    let sections = mergeCustoms(bank.sections, customs);
    if (n > 1) {
      sections = sections.map((sec) =>
        sec.type === "mcq"
          ? { ...sec, questions: sec.questions.map((q) => shuffleOptions(q, setSeed)) }
          : sec,
      );
    }
    const { totalQuestions, totalMarks } = totalsOf(sections);
    sets.push({ sections, shortfalls: bank.shortfalls, totalQuestions, totalMarks });
  }
  return sets;
}

/* ------------------------------ CSV export ------------------------------ */

const OPT_LETTERS = ["a", "b", "c", "d", "e", "f"];

/** Plain-CSV answer key for quick marking (Excel/Sheets-friendly). */
export function answerKeyCsv(sections: WorksheetSection[]): string {
  const esc = (s: string) => `"${(s ?? "").replace(/"/g, '""')}"`;
  const rows: string[][] = [["No.", "Type", "Question", "Answer", "Marks", "Level"]];
  let n = 0;
  for (const sec of sections) {
    for (const q of sec.questions) {
      n += 1;
      const ans =
        q.type === "mcq" && q.answerIndex != null
          ? `(${OPT_LETTERS[q.answerIndex] ?? "?"}) ${q.answer}`
          : q.answer;
      rows.push([String(n), q.type, q.prompt, ans, String(q.marks), q.difficulty]);
    }
  }
  return rows.map((r) => r.map(esc).join(",")).join("\r\n");
}
