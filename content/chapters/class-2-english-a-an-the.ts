import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  board: "wbbpe",
  classId: "2",
  subject: "english",
  slug: "a-an-the",
  title: "A, An and The",
  order: 2,
  seoTitle: "A, An and The — WBBPE Class 2 English (Amar Boi) | StudyMatic",
  metaDescription:
    "WBBPE Class 2 English: using ‘a’ and ‘an’ for one thing (a before a consonant sound, an before a vowel sound) and ‘the’ for a particular thing. Notes and quiz.",
  overview:
    "In this chapter we learn the small words ‘a’, ‘an’ and ‘the’. We use ‘a’ and ‘an’ for one thing, and ‘the’ for a particular thing.",
  objectives: [
    "Use ‘a’ and ‘an’ for one thing.",
    "Use ‘a’ before a consonant sound and ‘an’ before a vowel sound.",
    "Use ‘the’ for a particular thing.",
    "Choose the right word in a sentence.",
  ],
  concepts: [
    {
      heading: "a and an",
      body: "We use ‘a’ or ‘an’ for one thing. Use ‘a’ before a consonant sound — a ball, a cat. Use ‘an’ before a vowel sound (a, e, i, o, u) — an apple, an egg.",
    },
    {
      heading: "the",
      body: "We use ‘the’ for a particular or known thing — the sun, the moon, the book on the table.",
    },
    {
      heading: "Choosing the word",
      body: "Listen to the first sound of the next word. ‘an orange’ (vowel sound) but ‘a mango’ (consonant sound).",
    },
  ],
  formulas: [],
  definitions: [
    { term: "a / an (একটি)", meaning: "Used for one thing; ‘an’ before a vowel sound." },
    { term: "the (নির্দিষ্ট)", meaning: "Used for a particular, known thing." },
  ],
  examples: [
    { problem: "a or an: ___ apple", solution: "an apple (apple begins with a vowel sound)." },
    { problem: "a or an: ___ ball", solution: "a ball (ball begins with a consonant sound)." },
  ],
  commonMistakes: [
    "Using ‘a’ before a vowel sound (writing ‘a apple’).",
    "Forgetting ‘the’ for a particular thing.",
  ],
  mcqs: [
    {
      id: "w2e-aan-1",
      q: "We use ‘a’ or ‘an’ for how many things?",
      options: ["one", "two", "many", "none"],
      answer: 0,
      explanation: "‘a’ and ‘an’ are used for one thing.",
      difficulty: "easy",
    },
    {
      id: "w2e-aan-2",
      q: "Choose: ___ apple",
      options: ["a", "an", "the", "no"],
      answer: 1,
      explanation: "‘apple’ begins with a vowel sound, so ‘an apple’.",
      difficulty: "easy",
    },
    {
      id: "w2e-aan-3",
      q: "Choose: ___ ball",
      options: ["two", "an", "a", "no"],
      answer: 2,
      explanation: "‘ball’ begins with a consonant sound, so ‘a ball’.",
      difficulty: "easy",
    },
    {
      id: "w2e-aan-4",
      q: "‘an’ is used before a ___ sound.",
      options: ["silent", "consonant", "number", "vowel"],
      answer: 3,
      explanation: "‘an’ goes before a vowel sound.",
      difficulty: "medium",
    },
    {
      id: "w2e-aan-5",
      q: "Choose: ___ sun (the one in the sky)",
      options: ["the", "a", "an", "no"],
      answer: 0,
      explanation: "There is one particular sun, so ‘the sun’.",
      difficulty: "medium",
    },
  ],
  shortQuestions: [
    { q: "a or an: ___ egg", a: "an egg." },
    { q: "a or an: ___ cat", a: "a cat." },
  ],
  longQuestions: [
    { q: "Write ‘a’ or ‘an’: ___ orange, ___ book, ___ umbrella.", a: "an orange, a book, an umbrella." },
  ],
  hots: [
    {
      q: "Why is it ‘an hour’ even though ‘hour’ starts with the letter h?",
      a: "Because ‘hour’ begins with a vowel sound (the h is silent), so we use ‘an’.",
    },
  ],
  revisionNotes: [
    "a / an → one thing.",
    "a before a consonant sound; an before a vowel sound.",
    "the → a particular thing.",
  ],
  keyTakeaways: ["Pick a, an or the correctly.", "Listen to the first sound."],
  faq: [
    { q: "When do we use ‘an’?", a: "Before a word that begins with a vowel sound." },
  ],
  related: [
    { board: "wbbpe", classId: "2", subject: "english", slug: "naming-words" },
    { board: "wbbpe", classId: "2", subject: "english", slug: "this-and-that" },
  ],
};

export default chapter;
