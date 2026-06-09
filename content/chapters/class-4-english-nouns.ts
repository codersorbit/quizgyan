import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  board: "wbbpe",
  classId: "4",
  subject: "english",
  slug: "nouns",
  title: "Common & Proper Nouns",
  order: 1,
  seoTitle: "Common & Proper Nouns — WBBPE Class 4 English (Butterfly) | StudyMatic",
  metaDescription:
    "WBBPE Class 4 English: nouns name people, places and things — common nouns are general, proper nouns are particular and begin with a capital letter. Notes and a quiz.",
  overview:
    "In this chapter we learn nouns. A noun is a naming word. A common noun is a general name; a proper noun is a particular name and begins with a capital letter.",
  objectives: [
    "Know what a noun is.",
    "Tell a common noun from a proper noun.",
    "Begin a proper noun with a capital letter.",
    "Find nouns in a sentence.",
  ],
  concepts: [
    {
      heading: "What is a noun",
      body: "A noun is a naming word — a person, place, animal or thing. For example: boy, city, dog, book.",
    },
    {
      heading: "Common noun",
      body: "A common noun is a general name for any one of a kind — boy, city, river. It does not point to one particular one.",
    },
    {
      heading: "Proper noun",
      body: "A proper noun is the particular name of someone or something — Rahul, Kolkata, Ganga. A proper noun always begins with a capital letter.",
    },
  ],
  formulas: [],
  definitions: [
    { term: "Common noun", meaning: "A general naming word, like boy or city." },
    { term: "Proper noun", meaning: "A particular name, like Rahul or Kolkata; it starts with a capital letter." },
  ],
  examples: [
    { problem: "Is ‘Kolkata’ a common or proper noun?", solution: "Proper noun." },
    { problem: "Is ‘city’ a common or proper noun?", solution: "Common noun." },
  ],
  commonMistakes: [
    "Writing a proper noun with a small letter.",
    "Mixing up common (general) and proper (particular) nouns.",
  ],
  mcqs: [
    {
      id: "w4e-noun-1",
      q: "A naming word for a person, place or thing is a ___.",
      options: ["verb", "adverb", "noun", "article"],
      answer: 2,
      explanation: "A naming word is a noun.",
      difficulty: "easy",
    },
    {
      id: "w4e-noun-2",
      q: "Which one is a proper noun?",
      options: ["river", "city", "boy", "Kolkata"],
      answer: 3,
      explanation: "Kolkata is a particular name, so it is a proper noun.",
      difficulty: "easy",
    },
    {
      id: "w4e-noun-3",
      q: "Which one is a common noun?",
      options: ["river", "Ganga", "Rahul", "India"],
      answer: 0,
      explanation: "‘river’ is a general name — a common noun.",
      difficulty: "medium",
    },
    {
      id: "w4e-noun-4",
      q: "A proper noun always begins with a ___ letter.",
      options: ["small", "capital", "silent", "number"],
      answer: 1,
      explanation: "Proper nouns begin with a capital letter.",
      difficulty: "easy",
    },
    {
      id: "w4e-noun-5",
      q: "‘dog’ is a ___ noun.",
      options: ["proper", "action", "common", "question"],
      answer: 2,
      explanation: "‘dog’ is a general name — a common noun.",
      difficulty: "medium",
    },
  ],
  shortQuestions: [
    { q: "Give one proper noun.", a: "For example, India." },
    { q: "Is ‘teacher’ common or proper?", a: "Common." },
  ],
  longQuestions: [
    {
      q: "From ‘Rahul lives in Delhi.’, pick the common and proper nouns.",
      a: "Proper nouns: Rahul, Delhi. (There is no common noun here.)",
    },
  ],
  hots: [
    {
      q: "Why does ‘Ganga’ start with a capital letter but ‘river’ does not?",
      a: "‘Ganga’ is a proper noun (a particular river), so it takes a capital; ‘river’ is a common noun.",
    },
  ],
  revisionNotes: [
    "A noun is a naming word.",
    "Common noun = general; proper noun = particular.",
    "Proper nouns begin with a capital letter.",
  ],
  keyTakeaways: ["Tell common from proper nouns.", "Capitalise proper nouns."],
  faq: [
    { q: "Is ‘Monday’ a proper noun?", a: "Yes — it is a particular name, so it takes a capital." },
  ],
  related: [
    { board: "wbbpe", classId: "4", subject: "english", slug: "possessives" },
    { board: "wbbpe", classId: "4", subject: "english", slug: "adjectives" },
  ],
};

export default chapter;
