import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  board: "wbbpe",
  classId: "2",
  subject: "english",
  slug: "making-sentences",
  title: "Making Sentences",
  order: 6,
  seoTitle: "Making Sentences — WBBPE Class 2 English (Amar Boi) | StudyMatic",
  metaDescription:
    "WBBPE Class 2 English: put words in the right order to make a sentence; begin with a capital letter and end with a full stop. Notes and quiz.",
  overview:
    "In this chapter we put words in order to make sentences. A sentence makes full sense, begins with a capital letter and ends with a full stop.",
  objectives: [
    "Put words in the right order.",
    "Make a sentence that makes sense.",
    "Begin with a capital letter.",
    "End with a full stop.",
  ],
  concepts: [
    {
      heading: "Word order",
      body: "Words in the right order make sense. ‘I like mangoes.’ makes sense, but ‘mangoes like I’ does not.",
    },
    {
      heading: "Capital and full stop",
      body: "A sentence begins with a capital letter and ends with a full stop (.).",
    },
    {
      heading: "A naming word and an action word",
      body: "Many sentences have a naming word and an action word. In ‘Birds fly.’, ‘Birds’ names and ‘fly’ is the action.",
    },
  ],
  formulas: [],
  definitions: [
    { term: "Sentence (বাক্য)", meaning: "A group of words that makes full sense." },
  ],
  examples: [
    { problem: "Put in order: ‘mangoes / like / I’", solution: "‘I like mangoes.’" },
    { problem: "Is ‘Birds fly.’ a sentence?", solution: "Yes — it makes sense, starts with a capital and ends with a full stop." },
  ],
  commonMistakes: [
    "Forgetting the capital letter or full stop.",
    "Leaving the words in the wrong order.",
  ],
  mcqs: [
    {
      id: "w2e-ms-1",
      q: "A sentence begins with a ___ letter.",
      options: ["number", "small", "capital", "silent"],
      answer: 2,
      explanation: "A sentence begins with a capital letter.",
      difficulty: "easy",
    },
    {
      id: "w2e-ms-2",
      q: "A sentence ends with a ___.",
      options: ["number", "comma", "letter", "full stop"],
      answer: 3,
      explanation: "A sentence ends with a full stop.",
      difficulty: "easy",
    },
    {
      id: "w2e-ms-3",
      q: "Choose the correct sentence.",
      options: ["Birds fly.", "fly Birds", "Birds the fly a", "fly the Birds no"],
      answer: 0,
      explanation: "‘Birds fly.’ is in order, with a capital and a full stop.",
      difficulty: "easy",
    },
    {
      id: "w2e-ms-4",
      q: "Put in order: ‘mangoes / like / I’.",
      options: ["mangoes like I", "I like mangoes.", "like I mangoes", "I mangoes like"],
      answer: 1,
      explanation: "‘I like mangoes.’ makes sense.",
      difficulty: "medium",
    },
    {
      id: "w2e-ms-5",
      q: "A sentence makes ___.",
      options: ["a sound only", "no sense", "full sense", "a number"],
      answer: 2,
      explanation: "A sentence makes full sense.",
      difficulty: "medium",
    },
  ],
  shortQuestions: [
    { q: "What goes at the end of a sentence?", a: "A full stop ( . )." },
    { q: "Make a sentence with ‘cat’.", a: "For example, ‘The cat is black.’" },
  ],
  longQuestions: [
    { q: "Put in order and write the sentence: ‘plays / Sam / football’.", a: "‘Sam plays football.’" },
  ],
  hots: [
    {
      q: "Why is ‘i like tea’ not fully correct?",
      a: "It needs a capital ‘I’ at the start and a full stop at the end: ‘I like tea.’",
    },
  ],
  revisionNotes: [
    "Words in the right order make sense.",
    "Begin with a capital, end with a full stop.",
    "Many sentences have a naming word and an action word.",
  ],
  keyTakeaways: ["Make sentences that make sense.", "Use a capital and a full stop."],
  faq: [
    { q: "How does a sentence start and end?", a: "It starts with a capital letter and ends with a full stop." },
  ],
  related: [
    { board: "wbbpe", classId: "2", subject: "english", slug: "action-words" },
    { board: "wbbpe", classId: "2", subject: "english", slug: "months-of-the-year" },
  ],
};

export default chapter;
