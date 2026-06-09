import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  board: "wbbpe",
  classId: "1",
  subject: "english",
  slug: "beginning-sounds",
  title: "Beginning Sounds",
  order: 3,
  seoTitle: "Beginning Sounds — WBBPE Class 1 English (Amar Boi) | StudyMatic",
  metaDescription:
    "WBBPE Class 1 English: learn the beginning sound of words — A for apple, B for ball, C for cat. Simple notes and a quiz.",
  overview:
    "Every word begins with a sound. In this chapter we learn the first sound of simple words, like A for apple and B for ball.",
  objectives: [
    "Hear the first sound of a word.",
    "Match a word to its beginning letter.",
    "Say words for each letter (A for apple).",
    "Listen carefully and tell the first sound.",
  ],
  concepts: [
    {
      heading: "The beginning sound",
      body: "The first sound we say in a word is its beginning sound. Say the word slowly and listen — 'ball' begins with the B sound.",
    },
    {
      heading: "A letter for a sound",
      body: "We can match each beginning sound to a letter — A for apple, B for ball, C for cat, D for dog.",
    },
    {
      heading: "Listen and tell",
      body: "Say a word aloud slowly and listen to how it starts. This helps us find the first letter of the word.",
    },
  ],
  formulas: [],
  definitions: [
    { term: "Beginning sound", meaning: "The first sound we hear in a word." },
  ],
  examples: [
    { problem: "Which letter does 'cat' begin with?", solution: "It begins with C." },
    { problem: "Which letter does 'dog' begin with?", solution: "It begins with D." },
  ],
  commonMistakes: [
    "Saying the word too fast to hear the first sound.",
    "Choosing a letter from the middle of the word.",
  ],
  mcqs: [
    {
      id: "w1e-bs-1",
      q: "Which letter does 'apple' begin with?",
      options: ["A", "B", "C", "D"],
      answer: 0,
      explanation: "'apple' begins with the A sound.",
      difficulty: "easy",
    },
    {
      id: "w1e-bs-2",
      q: "Which letter does 'ball' begin with?",
      options: ["D", "B", "A", "M"],
      answer: 1,
      explanation: "'ball' begins with the B sound.",
      difficulty: "easy",
    },
    {
      id: "w1e-bs-3",
      q: "Which letter does 'cat' begin with?",
      options: ["A", "K", "C", "T"],
      answer: 2,
      explanation: "'cat' begins with the C sound.",
      difficulty: "easy",
    },
    {
      id: "w1e-bs-4",
      q: "'dog' begins with the sound of ___.",
      options: ["O", "B", "G", "D"],
      answer: 3,
      explanation: "'dog' begins with the D sound.",
      difficulty: "medium",
    },
    {
      id: "w1e-bs-5",
      q: "The first sound of a word is its ___ sound.",
      options: ["beginning", "last", "middle", "no"],
      answer: 0,
      explanation: "The first sound is the beginning sound.",
      difficulty: "medium",
    },
  ],
  shortQuestions: [
    { q: "Which letter does 'mango' begin with?", a: "M." },
    { q: "Which letter does 'sun' begin with?", a: "S." },
  ],
  longQuestions: [
    { q: "Say a word that begins with B.", a: "For example, 'ball' or 'bat'." },
  ],
  hots: [
    {
      q: "'cat' and 'cup' — do they begin with the same sound?",
      a: "Yes, both begin with the C sound.",
    },
  ],
  revisionNotes: [
    "Every word has a beginning sound.",
    "A for apple, B for ball, C for cat.",
    "Say the word slowly to hear its first sound.",
  ],
  keyTakeaways: ["Find the beginning sound.", "Match the sound to a letter."],
  faq: [
    { q: "What is a beginning sound?", a: "The first sound we hear in a word." },
  ],
  related: [
    { board: "wbbpe", classId: "1", subject: "english", slug: "capital-and-small-letters" },
    { board: "wbbpe", classId: "1", subject: "english", slug: "words-around-us" },
  ],
};

export default chapter;
