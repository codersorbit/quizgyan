import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  board: "wbbpe",
  classId: "4",
  subject: "english",
  slug: "adjectives",
  title: "Adjectives",
  order: 3,
  seoTitle: "Adjectives — WBBPE Class 4 English (Butterfly) | StudyMatic",
  metaDescription:
    "WBBPE Class 4 English: adjectives describe nouns, and we compare with -er (two things) and -est (many). Notes and a quiz.",
  overview:
    "In this chapter we learn adjectives — words that describe nouns. We also learn to compare using -er (for two) and -est (for many).",
  objectives: [
    "Know what an adjective is.",
    "Find adjectives in a sentence.",
    "Compare two things with -er.",
    "Compare many things with -est.",
  ],
  concepts: [
    {
      heading: "What is an adjective",
      body: "An adjective is a word that tells us more about a noun — its size, colour, shape and so on. For example: a tall boy, a red flower.",
    },
    {
      heading: "Comparing two",
      body: "To compare two things we often add -er to the adjective. ‘Ravi is taller than Sam.’ (tall → taller, big → bigger)",
    },
    {
      heading: "Comparing many",
      body: "To compare many things we often add -est. ‘This is the tallest tree of all.’ (tall → tallest, big → biggest)",
    },
  ],
  formulas: [],
  definitions: [
    { term: "Adjective", meaning: "A word that describes a noun." },
  ],
  examples: [
    { problem: "In ‘a red ball’, which is the adjective?", solution: "red." },
    { problem: "Compare two: ‘big’ → ?", solution: "bigger." },
  ],
  commonMistakes: [
    "Using -est when comparing only two things.",
    "Mixing adjectives up with nouns.",
  ],
  mcqs: [
    {
      id: "w4e-adj-1",
      q: "A word that describes a noun is an ___.",
      options: ["adjective", "adverb", "article", "verb"],
      answer: 0,
      explanation: "A describing word for a noun is an adjective.",
      difficulty: "easy",
    },
    {
      id: "w4e-adj-2",
      q: "In ‘a tall boy’, which is the adjective?",
      options: ["boy", "tall", "a", "is"],
      answer: 1,
      explanation: "‘tall’ describes the boy.",
      difficulty: "easy",
    },
    {
      id: "w4e-adj-3",
      q: "To compare two things we often add ___ to the adjective.",
      options: ["-ing", "-est", "-er", "-ed"],
      answer: 2,
      explanation: "Two things → add -er (taller, bigger).",
      difficulty: "medium",
    },
    {
      id: "w4e-adj-4",
      q: "The comparing word for ‘big’ (two things) is ___.",
      options: ["most big", "big", "biggest", "bigger"],
      answer: 3,
      explanation: "big → bigger for two things.",
      difficulty: "medium",
    },
    {
      id: "w4e-adj-5",
      q: "‘This is the ___ tree of all.’ — fill in.",
      options: ["tallest", "tall", "taller", "more tall"],
      answer: 0,
      explanation: "Comparing many → -est, so ‘tallest’.",
      difficulty: "medium",
    },
  ],
  shortQuestions: [
    { q: "Give an adjective for ‘mango’.", a: "For example, ‘sweet’." },
    { q: "‘small’ → comparing two?", a: "smaller." },
  ],
  longQuestions: [
    { q: "Write big, bigger and biggest in three short sentences.", a: "This box is big. That box is bigger. This one is the biggest." },
  ],
  hots: [
    {
      q: "Ravi and Sam are being compared. Should we say ‘taller’ or ‘tallest’?",
      a: "‘taller’ — because only two people are being compared.",
    },
  ],
  revisionNotes: [
    "Adjectives describe nouns.",
    "Compare two → add -er.",
    "Compare many → add -est.",
  ],
  keyTakeaways: ["Spot adjectives.", "Use -er and -est correctly."],
  faq: [
    { q: "What do we add to compare many things?", a: "-est (tallest, biggest)." },
  ],
  related: [
    { board: "wbbpe", classId: "4", subject: "english", slug: "possessives" },
    { board: "wbbpe", classId: "4", subject: "english", slug: "adverbs" },
  ],
};

export default chapter;
