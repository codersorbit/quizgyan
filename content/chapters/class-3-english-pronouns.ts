import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  board: "wbbpe",
  classId: "3",
  subject: "english",
  slug: "pronouns",
  title: "Pronouns",
  order: 2,
  seoTitle: "Pronouns — WBBPE Class 3 English (Butterfly) | StudyMatic",
  metaDescription:
    "WBBPE Class 3 English: pronouns are short words used in place of naming words — he, she, it, they, we, I, you. Simple notes and a quiz.",
  overview:
    "In this chapter we learn pronouns. A pronoun is a short word we use in place of a naming word, so we do not have to repeat it.",
  objectives: [
    "Know what a pronoun is.",
    "Use he, she and it correctly.",
    "Use they, we, I and you.",
    "Replace a naming word with a pronoun.",
  ],
  concepts: [
    {
      heading: "What is a pronoun",
      body: "A pronoun is a word used in place of a naming word. For example: ‘Ravi is tall. He plays well.’ Here ‘He’ stands for Ravi.",
    },
    {
      heading: "he, she, it",
      body: "Use ‘he’ for a boy or man, ‘she’ for a girl or woman, and ‘it’ for a thing or an animal.",
    },
    {
      heading: "they, we, I, you",
      body: "Use ‘they’ for many people or things, ‘we’ for me and others together, ‘I’ for myself, and ‘you’ for the person you are talking to.",
    },
  ],
  formulas: [],
  definitions: [
    { term: "Pronoun", meaning: "A word used in place of a naming word." },
  ],
  examples: [
    { problem: "‘Mira sings. ___ sings well.’", solution: "She." },
    { problem: "‘The ball is round. ___ is red.’", solution: "It." },
  ],
  commonMistakes: [
    "Using ‘he’ for a girl or ‘she’ for a boy.",
    "Using ‘it’ for a person.",
  ],
  mcqs: [
    {
      id: "w3e-pro-1",
      q: "A pronoun is used in place of a ___.",
      options: ["number", "action word", "naming word", "colour"],
      answer: 2,
      explanation: "A pronoun stands in place of a naming word.",
      difficulty: "easy",
    },
    {
      id: "w3e-pro-2",
      q: "Which pronoun do we use for a girl?",
      options: ["they", "he", "it", "she"],
      answer: 3,
      explanation: "‘she’ is used for a girl or woman.",
      difficulty: "easy",
    },
    {
      id: "w3e-pro-3",
      q: "‘The ball is round. ___ is red.’ — fill in.",
      options: ["It", "He", "She", "They"],
      answer: 0,
      explanation: "A ball is a thing, so we use ‘It’.",
      difficulty: "easy",
    },
    {
      id: "w3e-pro-4",
      q: "Which pronoun is for many people?",
      options: ["he", "they", "she", "it"],
      answer: 1,
      explanation: "‘they’ is used for many.",
      difficulty: "medium",
    },
    {
      id: "w3e-pro-5",
      q: "Which pronoun do you use for yourself?",
      options: ["he", "you", "I", "it"],
      answer: 2,
      explanation: "‘I’ is used for myself.",
      difficulty: "medium",
    },
  ],
  shortQuestions: [
    { q: "Which pronoun for a boy?", a: "he." },
    { q: "Which pronoun for a dog?", a: "it." },
  ],
  longQuestions: [
    {
      q: "Replace with a pronoun: ‘Sita and Gita are sisters. ___ play together.’",
      a: "They — ‘They play together.’",
    },
  ],
  hots: [
    {
      q: "‘Rahul has a cat. ___ loves ___.’ — fill in both blanks.",
      a: "‘He loves it.’ (He = Rahul, it = the cat.)",
    },
  ],
  revisionNotes: [
    "A pronoun replaces a naming word.",
    "he = boy/man, she = girl/woman, it = thing/animal.",
    "they = many, we = me + others, I = myself, you = the listener.",
  ],
  keyTakeaways: ["Use pronouns to avoid repeating names.", "Pick the right pronoun."],
  faq: [
    { q: "Which pronoun for a table?", a: "it." },
  ],
  related: [
    { board: "wbbpe", classId: "3", subject: "english", slug: "describing-words" },
    { board: "wbbpe", classId: "3", subject: "english", slug: "am-is-are" },
  ],
};

export default chapter;
