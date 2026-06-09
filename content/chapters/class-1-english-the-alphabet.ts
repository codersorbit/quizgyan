import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  board: "wbbpe",
  classId: "1",
  subject: "english",
  slug: "the-alphabet",
  title: "The English Alphabet",
  order: 1,
  seoTitle: "The English Alphabet (A–Z) — WBBPE Class 1 English (Amar Boi) | StudyMatic",
  metaDescription:
    "WBBPE Class 1 English (Bengali medium): learn the 26 letters of the English alphabet A to Z, their order, and capital letters. Simple notes and a quiz.",
  overview:
    "In this chapter we meet the English alphabet. It has 26 letters from A to Z, and we learn to recognise and say them in order.",
  objectives: [
    "Recognise the letters A to Z.",
    "Say the letters in the correct order.",
    "Know there are 26 letters.",
    "Find the first and last letters.",
  ],
  concepts: [
    {
      heading: "26 letters",
      body: "The English alphabet has 26 letters: A, B, C, D … all the way to Z. Together they make every English word.",
    },
    {
      heading: "Letters come in order",
      body: "The letters have a fixed order. A is first and Z is last. B comes just after A, and C comes after B.",
    },
    {
      heading: "Capital letters",
      body: "A, B, C … Z are the capital (big) letters. We learn them first, then their small forms.",
    },
  ],
  formulas: [],
  definitions: [
    { term: "Alphabet (বর্ণমালা)", meaning: "The full set of letters from A to Z." },
    { term: "Capital letter", meaning: "The big form of a letter, like A or B." },
  ],
  examples: [
    { problem: "How many letters are there in the alphabet?", solution: "There are 26 letters." },
    { problem: "Which letter comes after A?", solution: "B comes after A." },
  ],
  commonMistakes: [
    "Skipping a letter while saying the alphabet.",
    "Mixing up the order of the letters.",
  ],
  mcqs: [
    {
      id: "w1e-alp-1",
      q: "How many letters are there in the English alphabet?",
      options: ["24", "20", "26", "30"],
      answer: 2,
      explanation: "The English alphabet has 26 letters.",
      difficulty: "easy",
    },
    {
      id: "w1e-alp-2",
      q: "Which is the first letter of the alphabet?",
      options: ["B", "Z", "M", "A"],
      answer: 3,
      explanation: "A is the first letter.",
      difficulty: "easy",
    },
    {
      id: "w1e-alp-3",
      q: "Which letter comes after A?",
      options: ["B", "C", "Z", "D"],
      answer: 0,
      explanation: "B comes just after A.",
      difficulty: "easy",
    },
    {
      id: "w1e-alp-4",
      q: "Which is the last letter of the alphabet?",
      options: ["Y", "Z", "A", "X"],
      answer: 1,
      explanation: "Z is the last letter.",
      difficulty: "medium",
    },
    {
      id: "w1e-alp-5",
      q: "A, B, C, D — these are ___ letters.",
      options: ["number", "small", "capital", "Bengali"],
      answer: 2,
      explanation: "A, B, C, D are capital (big) letters.",
      difficulty: "medium",
    },
  ],
  shortQuestions: [
    { q: "Which letter is first?", a: "A." },
    { q: "Which letter is last?", a: "Z." },
  ],
  longQuestions: [
    { q: "Say the first five letters of the alphabet.", a: "A, B, C, D, E." },
  ],
  hots: [
    {
      q: "If A is first, which letter is just before C?",
      a: "B — the order is A, B, C.",
    },
  ],
  revisionNotes: [
    "The alphabet has 26 letters.",
    "A is first, Z is last.",
    "They come in a fixed order.",
  ],
  keyTakeaways: ["Know the 26 letters A–Z.", "Say them in order."],
  faq: [
    { q: "How many letters are in the alphabet?", a: "Twenty-six (26)." },
  ],
  related: [
    { board: "wbbpe", classId: "1", subject: "english", slug: "capital-and-small-letters" },
    { board: "wbbpe", classId: "1", subject: "english", slug: "beginning-sounds" },
  ],
};

export default chapter;
