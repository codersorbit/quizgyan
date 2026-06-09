import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  board: "wbbpe",
  classId: "2",
  subject: "english",
  slug: "singular-and-plural",
  title: "One and Many",
  order: 4,
  seoTitle: "One and Many (Plurals) — WBBPE Class 2 English (Amar Boi) | StudyMatic",
  metaDescription:
    "WBBPE Class 2 English: one (singular) and many (plural); most naming words add -s to make many (cat → cats). Simple notes and a quiz.",
  overview:
    "In this chapter we learn ‘one’ and ‘many’. One thing is singular; more than one is plural. Most naming words add ‑s to mean many.",
  objectives: [
    "Tell singular from plural.",
    "Add ‑s to make many.",
    "Use one/many in simple talk.",
    "Match a picture to one or many.",
  ],
  concepts: [
    {
      heading: "One and many",
      body: "One thing is called singular. More than one is called plural. ‘one cat’ is singular; ‘two cats’ is plural.",
    },
    {
      heading: "Add -s",
      body: "Most naming words add ‑s to mean many — cat → cats, book → books, bag → bags.",
    },
    {
      heading: "Examples",
      body: "one shirt → two shirts; one pen → three pens; one ball → many balls.",
    },
  ],
  formulas: [],
  definitions: [
    { term: "singular", meaning: "One thing." },
    { term: "plural", meaning: "More than one thing." },
  ],
  examples: [
    { problem: "Plural of ‘cat’?", solution: "cats." },
    { problem: "‘one shirt’ → ‘two ___’", solution: "shirts." },
  ],
  commonMistakes: [
    "Forgetting to add ‑s for many.",
    "Adding ‑s when there is only one.",
  ],
  mcqs: [
    {
      id: "w2e-sp-1",
      q: "One thing is ___; many things is plural.",
      options: ["action", "plural", "singular", "naming"],
      answer: 2,
      explanation: "One thing is singular.",
      difficulty: "easy",
    },
    {
      id: "w2e-sp-2",
      q: "Plural of ‘cat’ is ___.",
      options: ["cates", "cat", "caty", "cats"],
      answer: 3,
      explanation: "Add ‑s: cat → cats.",
      difficulty: "easy",
    },
    {
      id: "w2e-sp-3",
      q: "We usually add ___ to make many.",
      options: ["-s", "-ed", "-ing", "-ly"],
      answer: 0,
      explanation: "Most naming words add ‑s for many.",
      difficulty: "easy",
    },
    {
      id: "w2e-sp-4",
      q: "Plural of ‘book’ is ___.",
      options: ["book", "books", "bookes", "booky"],
      answer: 1,
      explanation: "book → books.",
      difficulty: "medium",
    },
    {
      id: "w2e-sp-5",
      q: "‘one shirt’ → ‘two ___’.",
      options: ["shirtes", "shirt", "shirts", "shirty"],
      answer: 2,
      explanation: "shirt → shirts.",
      difficulty: "medium",
    },
  ],
  shortQuestions: [
    { q: "Plural of ‘bag’?", a: "bags." },
    { q: "Is ‘one pen’ singular or plural?", a: "Singular." },
  ],
  longQuestions: [
    { q: "Write the plural of ‘pen’, ‘ball’ and ‘cup’.", a: "pens, balls, cups." },
  ],
  hots: [
    {
      q: "You see three balls. Do you say ‘ball’ or ‘balls’?",
      a: "‘balls’ — because there is more than one.",
    },
  ],
  revisionNotes: [
    "Singular = one; plural = many.",
    "Most words add ‑s for many.",
    "cat → cats, book → books.",
  ],
  keyTakeaways: ["Tell one from many.", "Add ‑s to make plurals."],
  faq: [
    { q: "What is a plural?", a: "A word that means more than one thing." },
  ],
  related: [
    { board: "wbbpe", classId: "2", subject: "english", slug: "this-and-that" },
    { board: "wbbpe", classId: "2", subject: "english", slug: "action-words" },
  ],
};

export default chapter;
