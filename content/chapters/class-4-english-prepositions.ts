import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  board: "wbbpe",
  classId: "4",
  subject: "english",
  slug: "prepositions",
  title: "Prepositions",
  order: 6,
  seoTitle: "Prepositions — WBBPE Class 4 English (Butterfly) | StudyMatic",
  metaDescription:
    "WBBPE Class 4 English: prepositions show where something is — in, on, under, behind, between. Notes, examples and a quiz.",
  overview:
    "In this chapter we learn prepositions — small words that show where something is, like in, on, under, behind and between.",
  objectives: [
    "Know what a preposition is.",
    "Use in, on and under correctly.",
    "Use behind and between.",
    "Choose the right preposition in a sentence.",
  ],
  concepts: [
    {
      heading: "What is a preposition",
      body: "A preposition is a small word that shows where something is or how it is placed. In ‘The cat is on the mat’, ‘on’ shows where the cat is.",
    },
    {
      heading: "Common prepositions",
      body: "Some common prepositions are: in, on, under, behind, between, near.",
    },
    {
      heading: "Using them",
      body: "‘The ball is under the table.’ ‘She sat between Ravi and Sam.’ ‘The bag is behind the door.’",
    },
  ],
  formulas: [],
  definitions: [
    { term: "Preposition", meaning: "A small word that shows where something is (in, on, under…)." },
  ],
  examples: [
    { problem: "‘The book is ___ the bag.’ (inside)", solution: "in." },
    { problem: "‘The cat is ___ the mat.’ (on top)", solution: "on." },
    { problem: "‘The ball is ___ the table.’ (below)", solution: "under." },
    { problem: "‘She sat ___ Ravi and Sam.’", solution: "between." },
    { problem: "‘The bag is ___ the door.’ (at the back)", solution: "behind." },
  ],
  commonMistakes: [
    "Using ‘on’ when something is inside (should be ‘in’).",
    "Mixing up ‘behind’ and ‘between’.",
  ],
  mcqs: [
    {
      id: "w4e-prep-1",
      q: "A word that shows where something is — like in, on, under — is a ___.",
      options: ["preposition", "verb", "adverb", "noun"],
      answer: 0,
      explanation: "Such a position word is a preposition.",
      difficulty: "easy",
    },
    {
      id: "w4e-prep-2",
      q: "‘The cat is ___ the mat.’ (touching the top) — fill in.",
      options: ["under", "on", "behind", "between"],
      answer: 1,
      explanation: "On top of → ‘on’.",
      difficulty: "easy",
    },
    {
      id: "w4e-prep-3",
      q: "‘The ball is ___ the table.’ (below it) — fill in.",
      options: ["in", "on", "under", "near"],
      answer: 2,
      explanation: "Below → ‘under’.",
      difficulty: "medium",
    },
    {
      id: "w4e-prep-4",
      q: "‘The pen is ___ the box.’ (inside) — fill in.",
      options: ["over", "on", "behind", "in"],
      answer: 3,
      explanation: "Inside → ‘in’.",
      difficulty: "medium",
    },
    {
      id: "w4e-prep-5",
      q: "Which one is a preposition?",
      options: ["between", "quickly", "happy", "run"],
      answer: 0,
      explanation: "‘between’ is a preposition.",
      difficulty: "easy",
    },
    {
      id: "w4e-prep-6",
      q: "In ‘The cat is on the mat’, which is the preposition?",
      options: ["cat", "is", "on", "mat"],
      answer: 2,
      explanation: "‘on’ shows where the cat is.",
      difficulty: "easy",
    },
    {
      id: "w4e-prep-7",
      q: "Which word is a preposition?",
      options: ["under", "quickly", "happy", "run"],
      answer: 0,
      explanation: "‘under’ is a preposition.",
      difficulty: "easy",
    },
    {
      id: "w4e-prep-8",
      q: "‘The ball is ___ the box.’ (below)",
      options: ["on", "under", "in", "near"],
      answer: 1,
      explanation: "Below means under.",
      difficulty: "easy",
    },
    {
      id: "w4e-prep-9",
      q: "‘He stood ___ the two trees.’",
      options: ["between", "on", "under", "in"],
      answer: 0,
      explanation: "In the middle of two things → between.",
      difficulty: "medium",
    },
    {
      id: "w4e-prep-10",
      q: "A preposition usually shows ___.",
      options: ["an action", "where something is", "a name", "a number"],
      answer: 1,
      explanation: "A preposition shows where or how something is placed.",
      difficulty: "medium",
    },
  ],
  shortQuestions: [
    { q: "Which preposition means ‘inside’?", a: "in." },
    { q: "‘The bag is ___ the door.’ (at the back) — fill in.", a: "behind." },
  ],
  longQuestions: [
    {
      q: "Use ‘on’, ‘under’ and ‘between’ in three short sentences.",
      a: "The book is on the desk. The shoes are under the bed. She sat between her friends.",
    },
  ],
  hots: [
    {
      q: "A cat is sitting on top of a box. Which is wrong — ‘in the box’ or ‘on the box’?",
      a: "‘in the box’ is wrong; the cat is on the box (on top), not inside.",
    },
  ],
  revisionNotes: [
    "Prepositions show where something is.",
    "in, on, under, behind, between, near.",
    "Pick the one that matches the position.",
  ],
  keyTakeaways: ["Spot prepositions.", "Choose the right position word."],
  faq: [
    { q: "Which preposition for ‘below’?", a: "under." },
  ],
  related: [
    { board: "wbbpe", classId: "4", subject: "english", slug: "adverbs" },
    { board: "wbbpe", classId: "4", subject: "english", slug: "was-were" },
  ],
};

export default chapter;
