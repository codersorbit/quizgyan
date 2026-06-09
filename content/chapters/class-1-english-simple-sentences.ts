import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  board: "wbbpe",
  classId: "1",
  subject: "english",
  slug: "simple-sentences",
  title: "Simple Sentences",
  order: 6,
  seoTitle: "Simple Sentences — WBBPE Class 1 English (Amar Boi) | StudyMatic",
  metaDescription:
    "WBBPE Class 1 English: make simple sentences like 'This is a cat.' and 'I can see a bird.', starting with a capital and ending with a full stop. Notes and quiz.",
  overview:
    "In this chapter we put words together to make simple sentences, such as 'This is a cat.' and 'I can see a bird.'",
  objectives: [
    "Make a sentence with 'This is a ___'.",
    "Make a sentence with 'I can see a ___'.",
    "Start a sentence with a capital letter.",
    "End a sentence with a full stop.",
  ],
  concepts: [
    {
      heading: "This is a ___",
      body: "We use 'This is a …' to name one thing. For example, 'This is a book.' or 'This is a cat.'",
    },
    {
      heading: "I can see a ___",
      body: "We use 'I can see a …' to tell what we see. For example, 'I can see a bird.' or 'I can see a tree.'",
    },
    {
      heading: "Capital and full stop",
      body: "A sentence starts with a capital letter and ends with a full stop (.). This makes the sentence neat and clear.",
    },
  ],
  formulas: [],
  definitions: [
    { term: "Sentence (বাক্য)", meaning: "A group of words that makes full sense." },
    { term: "Full stop (দাঁড়ি)", meaning: "The mark ( . ) we put at the end of a sentence." },
  ],
  examples: [
    { problem: "Make a sentence to name a pen.", solution: "This is a pen." },
    { problem: "Make a sentence to tell what you see.", solution: "I can see a dog." },
  ],
  commonMistakes: [
    "Forgetting the full stop at the end.",
    "Starting the sentence with a small letter.",
  ],
  mcqs: [
    {
      id: "w1e-ss-1",
      q: "A sentence begins with a ___ letter.",
      options: ["small", "capital", "number", "Bengali"],
      answer: 1,
      explanation: "A sentence begins with a capital letter.",
      difficulty: "easy",
    },
    {
      id: "w1e-ss-2",
      q: "A sentence ends with a ___.",
      options: ["letter", "comma", "full stop", "number"],
      answer: 2,
      explanation: "A sentence ends with a full stop (.).",
      difficulty: "easy",
    },
    {
      id: "w1e-ss-3",
      q: "Choose the correct sentence.",
      options: ["this a cat", "cat a is this", "is this a cat", "This is a cat."],
      answer: 3,
      explanation: "'This is a cat.' is correct — capital start and a full stop.",
      difficulty: "easy",
    },
    {
      id: "w1e-ss-4",
      q: "Complete: 'I can ___ a bird.'",
      options: ["see", "book", "pen", "cup"],
      answer: 0,
      explanation: "'I can see a bird.' is correct.",
      difficulty: "medium",
    },
    {
      id: "w1e-ss-5",
      q: "How many words are in 'This is a book.'?",
      options: ["three", "four", "two", "five"],
      answer: 1,
      explanation: "This / is / a / book — four words.",
      difficulty: "medium",
    },
  ],
  shortQuestions: [
    { q: "What mark ends a sentence?", a: "A full stop ( . )." },
    { q: "Make a sentence with 'This is a …'.", a: "For example, 'This is a bag.'" },
  ],
  longQuestions: [
    { q: "Write one sentence that names a thing and one that tells what you see.", a: "This is a pen. I can see a tree." },
  ],
  hots: [
    {
      q: "Why is 'this is a cat' not fully correct?",
      a: "It needs a capital 'T' at the start and a full stop at the end: 'This is a cat.'",
    },
  ],
  revisionNotes: [
    "'This is a …' names one thing.",
    "'I can see a …' tells what we see.",
    "Capital start, full stop end.",
  ],
  keyTakeaways: ["Make simple sentences.", "Use a capital and a full stop."],
  faq: [
    { q: "How does a sentence start and end?", a: "It starts with a capital letter and ends with a full stop." },
  ],
  related: [
    { board: "wbbpe", classId: "1", subject: "english", slug: "naming-animals" },
    { board: "wbbpe", classId: "1", subject: "english", slug: "reading-aloud" },
  ],
};

export default chapter;
