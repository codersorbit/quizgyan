import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  board: "wbbpe",
  classId: "5",
  subject: "english",
  slug: "articles",
  title: "Articles: a, an, the",
  order: 18,
  seoTitle: "Articles: a, an, the — WBBPE Class 5 English (Butterfly) | StudyMatic",
  metaDescription:
    "WBBPE Class 5 English: articles a, an, the — a/an for any one (an before a vowel sound), the for a particular one. Notes and a quiz.",
  overview:
    "In this chapter we learn the articles a, an and the. We use ‘a’ or ‘an’ for any one thing, and ‘the’ for a particular one.",
  objectives: [
    "Know that a, an, the are articles.",
    "Use ‘a’ and ‘an’ correctly.",
    "Use ‘the’ for a particular noun.",
    "Choose the right article.",
  ],
  concepts: [
    {
      heading: "a and an",
      body: "We use ‘a’ or ‘an’ for any one thing. Use ‘a’ before a consonant sound (a book, a cat) and ‘an’ before a vowel sound (an apple, an egg).",
    },
    {
      heading: "the",
      body: "We use ‘the’ for a particular thing that is already known. ‘the sun’, ‘the book on the table’.",
    },
    {
      heading: "Choosing",
      body: "‘I saw a bird. The bird was singing.’ — first ‘a’ (any bird), then ‘the’ (that known bird).",
    },
  ],
  formulas: [],
  definitions: [
    { term: "Article", meaning: "A small word (a, an, the) used before a noun." },
  ],
  examples: [
    { problem: "‘___ apple’ — a or an?", solution: "an." },
    { problem: "‘___ sun’ — a or the?", solution: "the." },
  ],
  commonMistakes: [
    "Using ‘a’ before a vowel sound (‘a apple’ ✗ → ‘an apple’).",
    "Using ‘a/an’ for a particular thing instead of ‘the’.",
  ],
  mcqs: [
    {
      id: "w5e-art-1",
      q: "‘a’, ‘an’ and ‘the’ are called ___.",
      options: ["articles", "verbs", "adverbs", "pronouns"],
      answer: 0,
      explanation: "They are articles.",
      difficulty: "easy",
    },
    {
      id: "w5e-art-2",
      q: "We use ‘an’ before a word beginning with a ___ sound.",
      options: ["consonant", "vowel", "capital", "silent"],
      answer: 1,
      explanation: "‘an’ comes before a vowel sound.",
      difficulty: "easy",
    },
    {
      id: "w5e-art-3",
      q: "‘___ apple’ — fill in.",
      options: ["the", "a", "an", "no"],
      answer: 2,
      explanation: "‘apple’ starts with a vowel sound → ‘an’.",
      difficulty: "medium",
    },
    {
      id: "w5e-art-4",
      q: "‘___ sun rises in the east.’ — fill in.",
      options: ["No", "A", "An", "The"],
      answer: 3,
      explanation: "There is one particular sun → ‘The’.",
      difficulty: "medium",
    },
    {
      id: "w5e-art-5",
      q: "‘I have ___ pen.’ (just one, any) — fill in.",
      options: ["a", "an", "the", "of"],
      answer: 0,
      explanation: "‘pen’ starts with a consonant sound → ‘a’.",
      difficulty: "easy",
    },
  ],
  shortQuestions: [
    { q: "‘___ egg’ — a or an?", a: "an." },
    { q: "‘___ moon is bright.’ — a or the?", a: "the." },
  ],
  longQuestions: [
    {
      q: "Fill in: ‘I saw ___ elephant. ___ elephant was huge.’",
      a: "I saw an elephant. The elephant was huge.",
    },
  ],
  hots: [
    {
      q: "Why do we say ‘an hour’ even though ‘hour’ starts with ‘h’?",
      a: "Because the ‘h’ is silent and it begins with a vowel sound, so we use ‘an’.",
    },
  ],
  revisionNotes: [
    "a/an = any one; the = a particular one.",
    "‘a’ before consonant sound, ‘an’ before vowel sound.",
    "the sun, the moon (one particular).",
  ],
  keyTakeaways: ["Choose a, an or the.", "Listen for the first sound."],
  faq: [
    { q: "‘a’ or ‘an’ before ‘umbrella’?", a: "an (vowel sound)." },
  ],
  related: [
    { board: "wbbpe", classId: "5", subject: "english", slug: "future-tense" },
    { board: "wbbpe", classId: "5", subject: "english", slug: "conjunctions" },
  ],
};

export default chapter;
