import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  board: "wbbpe",
  classId: "3",
  subject: "english",
  slug: "making-sentences",
  title: "Making Sentences",
  order: 7,
  seoTitle: "Making Sentences — WBBPE Class 3 English (Butterfly) | StudyMatic",
  metaDescription:
    "WBBPE Class 3 English: arrange words in order to make a sentence; begin with a capital letter and end with a full stop. Notes and quiz.",
  overview:
    "In this chapter we make sentences. Words in the right order make sense; a sentence begins with a capital letter and ends with a full stop.",
  objectives: [
    "Put words in the right order.",
    "Begin with a capital letter.",
    "End with a full stop.",
    "Write a short sentence with helper words.",
  ],
  concepts: [
    {
      heading: "Word order",
      body: "Words in the right order make sense. ‘The boy is tall.’ makes sense, but ‘tall is boy the’ does not.",
    },
    {
      heading: "Capital and full stop",
      body: "A sentence begins with a capital letter and ends with a full stop (.).",
    },
    {
      heading: "Sentences with helper words",
      body: "We can write a sentence from helper words. With ‘tree, green, tall’ we can write: ‘The tree is tall and green.’",
    },
  ],
  formulas: [],
  definitions: [
    { term: "Sentence (বাক্য)", meaning: "A group of words in order that makes full sense." },
  ],
  examples: [
    { problem: "Order: ‘tall / is / boy / the’", solution: "‘The boy is tall.’" },
    { problem: "Order: ‘sweet / is / mango / the’", solution: "‘The mango is sweet.’" },
  ],
  commonMistakes: [
    "Forgetting the capital letter or the full stop.",
    "Leaving the words in the wrong order.",
  ],
  mcqs: [
    {
      id: "w3e-ms-1",
      q: "A sentence begins with a ___ letter.",
      options: ["capital", "small", "number", "silent"],
      answer: 0,
      explanation: "A sentence begins with a capital letter.",
      difficulty: "easy",
    },
    {
      id: "w3e-ms-2",
      q: "A sentence ends with a ___.",
      options: ["comma", "full stop", "letter", "number"],
      answer: 1,
      explanation: "A sentence ends with a full stop.",
      difficulty: "easy",
    },
    {
      id: "w3e-ms-3",
      q: "Choose the correct sentence.",
      options: ["boy the tall is", "tall is boy the", "The boy is tall.", "is the tall boy"],
      answer: 2,
      explanation: "‘The boy is tall.’ is in order with a capital and a full stop.",
      difficulty: "easy",
    },
    {
      id: "w3e-ms-4",
      q: "Arrange: ‘sweet / is / mango / the’.",
      options: ["is mango the sweet", "sweet the mango is", "mango sweet is the", "The mango is sweet."],
      answer: 3,
      explanation: "‘The mango is sweet.’ makes sense.",
      difficulty: "medium",
    },
    {
      id: "w3e-ms-5",
      q: "Words in the right order make ___.",
      options: ["sense", "noise", "numbers", "colours"],
      answer: 0,
      explanation: "Correct order makes the sentence make sense.",
      difficulty: "medium",
    },
  ],
  shortQuestions: [
    { q: "What goes at the end of a sentence?", a: "A full stop ( . )." },
    { q: "Write a sentence with ‘bird’.", a: "For example, ‘The bird is small.’" },
  ],
  longQuestions: [
    { q: "Arrange and write: ‘garden / is / the / green’.", a: "‘The garden is green.’" },
  ],
  hots: [
    {
      q: "Why is ‘the dog runs fast’ not fully correct?",
      a: "It needs a capital ‘T’ at the start and a full stop at the end: ‘The dog runs fast.’",
    },
  ],
  revisionNotes: [
    "Words in the right order make sense.",
    "Begin with a capital, end with a full stop.",
    "Helper words can build a sentence.",
  ],
  keyTakeaways: ["Make sentences that make sense.", "Use a capital and a full stop."],
  faq: [
    { q: "How does a sentence start and end?", a: "It starts with a capital letter and ends with a full stop." },
  ],
  related: [
    { board: "wbbpe", classId: "3", subject: "english", slug: "days-of-the-week" },
    { board: "wbbpe", classId: "3", subject: "english", slug: "reading-comprehension" },
  ],
};

export default chapter;
