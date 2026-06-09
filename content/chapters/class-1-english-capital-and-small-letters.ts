import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  board: "wbbpe",
  classId: "1",
  subject: "english",
  slug: "capital-and-small-letters",
  title: "Capital and Small Letters",
  order: 2,
  seoTitle: "Capital and Small Letters — WBBPE Class 1 English (Amar Boi) | StudyMatic",
  metaDescription:
    "WBBPE Class 1 English: every letter has two forms — capital (big) like A and small like a. Learn to match them. Simple notes and a quiz.",
  overview:
    "Every English letter has two forms — a capital (big) form and a small form. For example, A and a are the same letter written in two ways.",
  objectives: [
    "Know that each letter has a capital and a small form.",
    "Match capital letters with their small forms.",
    "Tell a capital letter from a small letter.",
    "Write both forms of a letter.",
  ],
  concepts: [
    {
      heading: "Two forms of a letter",
      body: "Each letter is written in two ways — the capital (big) form and the small form. For example, A is capital and a is small.",
    },
    {
      heading: "Matching pairs",
      body: "Capital A matches small a, capital B matches small b, capital C matches small c. They are the same letter.",
    },
    {
      heading: "Big and little",
      body: "Capital letters look bigger; small letters look little. We use both when we write words.",
    },
  ],
  formulas: [],
  definitions: [
    { term: "Capital letter (বড়ো হাতের অক্ষর)", meaning: "The big form of a letter, like A, B, C." },
    { term: "Small letter (ছোটো হাতের অক্ষর)", meaning: "The little form of a letter, like a, b, c." },
  ],
  examples: [
    { problem: "What is the small form of 'A'?", solution: "It is 'a'." },
    { problem: "What is the capital form of 'b'?", solution: "It is 'B'." },
  ],
  commonMistakes: [
    "Thinking A and a are different letters — they are the same letter.",
    "Mixing up b and d, or p and q.",
  ],
  mcqs: [
    {
      id: "w1e-cs-1",
      q: "What is the small form of 'A'?",
      options: ["e", "a", "b", "z"],
      answer: 1,
      explanation: "The small form of A is a.",
      difficulty: "easy",
    },
    {
      id: "w1e-cs-2",
      q: "What is the capital form of 'b'?",
      options: ["P", "D", "B", "A"],
      answer: 2,
      explanation: "The capital form of b is B.",
      difficulty: "easy",
    },
    {
      id: "w1e-cs-3",
      q: "A and a are the ___ letter.",
      options: ["Bengali", "different", "number", "same"],
      answer: 3,
      explanation: "A and a are two forms of the same letter.",
      difficulty: "easy",
    },
    {
      id: "w1e-cs-4",
      q: "Which one is a capital letter?",
      options: ["M", "m", "n", "r"],
      answer: 0,
      explanation: "M is a capital (big) letter.",
      difficulty: "medium",
    },
    {
      id: "w1e-cs-5",
      q: "Which one is a small letter?",
      options: ["C", "c", "A", "B"],
      answer: 1,
      explanation: "c is a small letter.",
      difficulty: "medium",
    },
  ],
  shortQuestions: [
    { q: "Write the small form of 'C'.", a: "c." },
    { q: "Write the capital form of 'm'.", a: "M." },
  ],
  longQuestions: [
    { q: "Give the capital and small forms of the first three letters.", a: "A/a, B/b, C/c." },
  ],
  hots: [
    {
      q: "Sam writes 'a' and 'A'. Are these different letters or the same?",
      a: "They are the same letter — just the small and capital forms.",
    },
  ],
  revisionNotes: [
    "Each letter has a capital and a small form.",
    "A–a, B–b, C–c are matching pairs.",
    "Capital is big, small is little.",
  ],
  keyTakeaways: ["Match capital and small letters.", "A and a are one letter."],
  faq: [
    { q: "Is 'a' the same as 'A'?", a: "Yes — small a and capital A are the same letter." },
  ],
  related: [
    { board: "wbbpe", classId: "1", subject: "english", slug: "the-alphabet" },
    { board: "wbbpe", classId: "1", subject: "english", slug: "beginning-sounds" },
  ],
};

export default chapter;
