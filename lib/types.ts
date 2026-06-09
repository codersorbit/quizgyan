// Core content types. The whole platform is typed against these,
// so adding hundreds of chapters never requires touching the UI.

export type Difficulty = "easy" | "medium" | "hard";

export interface MCQ {
  id: string;
  q: string;
  options: string[]; // exactly 4
  answer: number; // 0-based index of the correct option
  explanation: string;
  difficulty: Difficulty;
}

export interface QA {
  q: string;
  a: string;
}

export interface Concept {
  heading: string;
  body: string;
}

export interface Formula {
  name: string;
  formula: string;
  note?: string;
}

export interface Definition {
  term: string;
  meaning: string;
}

export interface Example {
  problem: string;
  solution: string;
}

export interface ChapterRef {
  classId: string;
  subject: string;
  slug: string;
  board?: string; // defaults to "cbse"
}

/** A fully-authored chapter page. This is the unit that ranks in Google. */
export interface Chapter {
  board?: string; // "cbse" (default) | "wbbpe" | …
  classId: string; // "10"
  subject: string; // "maths"
  slug: string; // "quadratic-equations"
  title: string; // "Quadratic Equations"
  order: number; // position within the subject
  seoTitle: string;
  metaDescription: string;
  overview: string;
  objectives: string[];
  concepts: Concept[];
  formulas: Formula[];
  definitions: Definition[];
  examples: Example[];
  commonMistakes: string[];
  mcqs: MCQ[];
  shortQuestions: QA[];
  longQuestions: QA[];
  hots: QA[];
  revisionNotes: string[];
  keyTakeaways: string[];
  faq: QA[];
  related: ChapterRef[];
}

/** A chapter entry in the subject roadmap (may not be authored yet). */
export interface ChapterStub {
  slug: string;
  title: string;
  order: number;
}

export interface SubjectDef {
  key: string; // "maths"
  name: string; // "Maths"
  icon: string; // emoji
  color: string; // hex accent
  chapters: ChapterStub[];
}

export interface ClassDef {
  board: string; // "cbse" | "wbbpe" | …
  id: string; // "10"
  roman: string; // "X"
  label: string; // "Class 10"
  blurb: string;
  subjects: SubjectDef[];
}
