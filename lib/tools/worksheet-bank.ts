// Build-time only: assembles the compact worksheet bank (scope tree + flat
// questions) from the authored chapters. Imported by scripts/gen-data.ts to
// emit public/worksheet-bank.json — NOT imported by any client island, so the
// full chapter content never reaches the browser bundle.

import { ALL_CLASSES, getAuthoredInSubject } from "@/lib/content";
import {
  chapterToQuestions,
  emptyCounts,
  type QType,
  type ScopeBoard,
  type ScopeChapter,
  type ScopeClass,
  type ScopeSubject,
  type WorksheetBank,
  type WorksheetQuestion,
} from "@/lib/tools/logic/worksheet";

export function buildWorksheetBank(): WorksheetBank {
  const questions: WorksheetQuestion[] = [];
  const scope: ScopeBoard[] = [];

  for (const board of ["cbse", "wbbpe"] as const) {
    const classes = ALL_CLASSES.filter((c) => c.board === board);
    const scopeClasses: ScopeClass[] = [];

    for (const cls of classes) {
      const scopeSubjects: ScopeSubject[] = [];

      for (const subj of cls.subjects) {
        const chapters = getAuthoredInSubject(cls.id, subj.key, board);
        const scopeChapters: ScopeChapter[] = [];

        for (const ch of chapters) {
          const qs = chapterToQuestions(ch);
          if (qs.length === 0) continue; // skip empty chapters
          questions.push(...qs);
          const counts = emptyCounts();
          for (const q of qs) counts[q.type] = (counts[q.type] ?? 0) + 1;
          scopeChapters.push({
            slug: ch.slug,
            title: ch.title,
            lang: qs[0].lang,
            counts,
            total: qs.length,
          });
        }

        if (scopeChapters.length > 0) {
          scopeSubjects.push({ key: subj.key, name: subj.name, chapters: scopeChapters });
        }
      }

      if (scopeSubjects.length > 0) {
        scopeClasses.push({ id: cls.id, label: cls.label, subjects: scopeSubjects });
      }
    }

    if (scopeClasses.length > 0) {
      scope.push({
        board,
        label: board === "cbse" ? "CBSE" : "WBBPE",
        classes: scopeClasses,
      });
    }
  }

  return { scope, questions };
}

/** Quick coverage stats for the build log. */
export function bankStats(bank: WorksheetBank): {
  questions: number;
  chapters: number;
  byType: Record<QType, number>;
} {
  const byType = emptyCounts();
  for (const q of bank.questions) byType[q.type] = (byType[q.type] ?? 0) + 1;
  let chapters = 0;
  for (const b of bank.scope) for (const c of b.classes) for (const s of c.subjects) chapters += s.chapters.length;
  return { questions: bank.questions.length, chapters, byType };
}

/* ------------------ Programmatic landing-page parameters ------------------ */
// A chapter must hold at least this many questions to earn its own landing page
// (keeps thin/empty pages out of the index — Section 8 guard).
export const MIN_LANDING_QUESTIONS = 6;

export interface LandingParam {
  board: string;
  classId: string;
  subject: string;
  chapter: string;
}
export interface SubjectRollup {
  board: string;
  classId: string;
  subject: string;
  chapters: number;
}

/** Every (board, class, subject, chapter) that qualifies for a landing page. */
export function worksheetLandingParams(): LandingParam[] {
  const out: LandingParam[] = [];
  for (const board of ["cbse", "wbbpe"] as const) {
    for (const cls of ALL_CLASSES.filter((c) => c.board === board)) {
      for (const subj of cls.subjects) {
        for (const ch of getAuthoredInSubject(cls.id, subj.key, board)) {
          if (chapterToQuestions(ch).length >= MIN_LANDING_QUESTIONS) {
            out.push({ board, classId: cls.id, subject: subj.key, chapter: ch.slug });
          }
        }
      }
    }
  }
  return out;
}

/** Every (board, class, subject) roll-up that has ≥1 qualifying chapter. */
export function worksheetSubjectParams(): SubjectRollup[] {
  const counts = new Map<string, SubjectRollup>();
  for (const p of worksheetLandingParams()) {
    const key = `${p.board}/${p.classId}/${p.subject}`;
    const cur = counts.get(key);
    if (cur) cur.chapters += 1;
    else counts.set(key, { board: p.board, classId: p.classId, subject: p.subject, chapters: 1 });
  }
  return [...counts.values()];
}
