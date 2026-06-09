import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  board: "wbbpe",
  classId: "4",
  subject: "english",
  slug: "possessives",
  title: "Possessive Pronouns",
  order: 2,
  seoTitle: "Possessive Pronouns — WBBPE Class 4 English (Butterfly) | StudyMatic",
  metaDescription:
    "WBBPE Class 4 English: possessive words — my, your, his, her, its, our, their — show who something belongs to. Notes and a quiz.",
  overview:
    "In this chapter we learn possessive words like my, your, his, her, its, our and their. They show who something belongs to.",
  objectives: [
    "Know what possessive words show.",
    "Use my, your, his, her correctly.",
    "Match the possessive to the right person.",
    "Use possessives in sentences.",
  ],
  concepts: [
    {
      heading: "Showing belonging",
      body: "Some words show who something belongs to. In ‘This is my book’, the word ‘my’ shows the book belongs to me.",
    },
    {
      heading: "The words",
      body: "The possessive words are: my, your, his, her, its, our, their.",
    },
    {
      heading: "his and her",
      body: "Use ‘his’ for a boy/man and ‘her’ for a girl/woman. ‘Rahul lost his pen.’ ‘Mira found her bag.’",
    },
  ],
  formulas: [],
  definitions: [
    { term: "Possessive word", meaning: "A word that shows who something belongs to (my, your, his, her…)." },
  ],
  examples: [
    { problem: "‘This is ___ book.’ (it belongs to me)", solution: "my." },
    { problem: "‘Rahul lost ___ pen.’", solution: "his." },
  ],
  commonMistakes: [
    "Using ‘his’ for a girl or ‘her’ for a boy.",
    "Forgetting that ‘their’ is for many.",
  ],
  mcqs: [
    {
      id: "w4e-poss-1",
      q: "Words like my, your and his show who something ___.",
      options: ["eats", "runs", "jumps", "belongs to"],
      answer: 3,
      explanation: "Possessive words show belonging.",
      difficulty: "easy",
    },
    {
      id: "w4e-poss-2",
      q: "‘This is ___ book.’ (it belongs to me) — fill in.",
      options: ["my", "his", "her", "their"],
      answer: 0,
      explanation: "Belongs to me → ‘my’.",
      difficulty: "easy",
    },
    {
      id: "w4e-poss-3",
      q: "‘Rahul lost ___ pen.’ — fill in.",
      options: ["her", "his", "my", "your"],
      answer: 1,
      explanation: "Rahul is a boy → ‘his’.",
      difficulty: "medium",
    },
    {
      id: "w4e-poss-4",
      q: "‘Mira found ___ bag.’ — fill in.",
      options: ["his", "my", "her", "its"],
      answer: 2,
      explanation: "Mira is a girl → ‘her’.",
      difficulty: "medium",
    },
    {
      id: "w4e-poss-5",
      q: "Which word shows belonging?",
      options: ["big", "run", "quickly", "our"],
      answer: 3,
      explanation: "‘our’ shows belonging (to us).",
      difficulty: "easy",
    },
  ],
  shortQuestions: [
    { q: "Which possessive word is for many people (belongs to them)?", a: "their." },
    { q: "‘The dog wagged ___ tail.’ — fill in.", a: "its." },
  ],
  longQuestions: [
    {
      q: "Fill in: ‘I have ___ bag, you have ___ bag, and she has ___ bag.’",
      a: "I have my bag, you have your bag, and she has her bag.",
    },
  ],
  hots: [
    {
      q: "Why is ‘Mira lost his bag’ wrong (if the bag is Mira’s)?",
      a: "Mira is a girl, so it should be ‘her bag’ — ‘Mira lost her bag.’",
    },
  ],
  revisionNotes: [
    "Possessive words show belonging.",
    "my, your, his, her, its, our, their.",
    "his = boy/man, her = girl/woman, their = many.",
  ],
  keyTakeaways: ["Use the right possessive word.", "Match it to the person."],
  faq: [
    { q: "Which possessive for a thing or animal?", a: "its." },
  ],
  related: [
    { board: "wbbpe", classId: "4", subject: "english", slug: "nouns" },
    { board: "wbbpe", classId: "4", subject: "english", slug: "verbs-tense" },
  ],
};

export default chapter;
