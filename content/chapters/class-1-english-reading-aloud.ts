import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  board: "wbbpe",
  classId: "1",
  subject: "english",
  slug: "reading-aloud",
  title: "Reading Aloud",
  order: 8,
  seoTitle: "Reading Aloud — WBBPE Class 1 English (Amar Boi) | StudyMatic",
  metaDescription:
    "WBBPE Class 1 English: read simple sentences aloud clearly and slowly, pointing to each word. Simple notes and a quiz.",
  overview:
    "In this chapter we practise reading simple sentences aloud — clearly and slowly. Reading aloud helps us learn new words.",
  objectives: [
    "Read simple sentences aloud.",
    "Read clearly and slowly.",
    "Point to each word as we read.",
    "Understand a short sentence.",
  ],
  concepts: [
    {
      heading: "Read clearly",
      body: "When we read aloud, we say each word clearly and not too fast. Then everyone can understand us.",
    },
    {
      heading: "Point and read",
      body: "We can point to each word as we read it. This helps us not to miss any word.",
    },
    {
      heading: "Simple sentences to read",
      body: "Try reading these aloud: 'The cat is on the mat.' and 'I can see a red ball.' Say each word slowly.",
    },
  ],
  formulas: [],
  definitions: [
    { term: "Read aloud (শব্দ করে পড়া)", meaning: "To say the words out loud as we read." },
  ],
  examples: [
    { problem: "Read this aloud: 'This is my book.'", solution: "Say each word clearly: This — is — my — book." },
    { problem: "Read this aloud: 'I can see a dog.'", solution: "Say slowly: I — can — see — a — dog." },
  ],
  commonMistakes: [
    "Reading too fast and skipping words.",
    "Reading so softly that no one can hear.",
  ],
  mcqs: [
    {
      id: "w1e-ra-1",
      q: "When we read aloud, we should read ___.",
      options: ["clearly", "very fast", "silently", "never"],
      answer: 0,
      explanation: "We should read clearly so others understand.",
      difficulty: "easy",
    },
    {
      id: "w1e-ra-2",
      q: "Reading aloud helps us ___.",
      options: ["sleep", "learn", "run", "cry"],
      answer: 1,
      explanation: "Reading aloud helps us learn new words.",
      difficulty: "easy",
    },
    {
      id: "w1e-ra-3",
      q: "While reading, we can ___ each word.",
      options: ["hide", "throw", "point to", "tear"],
      answer: 2,
      explanation: "Pointing to each word helps us not miss any.",
      difficulty: "easy",
    },
    {
      id: "w1e-ra-4",
      q: "Choose the sentence we can read aloud.",
      options: ["cat the the", "mat the on cat", "on mat cat the", "The cat is on the mat."],
      answer: 3,
      explanation: "'The cat is on the mat.' is a proper sentence.",
      difficulty: "medium",
    },
    {
      id: "w1e-ra-5",
      q: "We should read slowly and ___, not too fast.",
      options: ["clearly", "loudly only", "never", "with eyes closed"],
      answer: 0,
      explanation: "Read slowly and clearly.",
      difficulty: "medium",
    },
  ],
  shortQuestions: [
    { q: "How should we read aloud?", a: "Clearly and slowly." },
    { q: "What can we do to not miss a word?", a: "Point to each word as we read." },
  ],
  longQuestions: [
    { q: "Read aloud and tell how many words: 'I can see a dog.'", a: "Five words — I, can, see, a, dog." },
  ],
  hots: [
    {
      q: "Why is it better to read slowly than very fast at first?",
      a: "Reading slowly helps us say each word correctly and understand the sentence.",
    },
  ],
  revisionNotes: [
    "Read clearly and slowly.",
    "Point to each word.",
    "Reading aloud helps us learn.",
  ],
  keyTakeaways: ["Read sentences aloud clearly.", "Point and read each word."],
  faq: [
    { q: "Why read aloud?", a: "It helps us learn words and read better." },
  ],
  related: [
    { board: "wbbpe", classId: "1", subject: "english", slug: "days-of-the-week" },
    { board: "wbbpe", classId: "1", subject: "english", slug: "the-alphabet" },
  ],
};

export default chapter;
