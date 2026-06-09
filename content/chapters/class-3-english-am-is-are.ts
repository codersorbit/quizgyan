import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  board: "wbbpe",
  classId: "3",
  subject: "english",
  slug: "am-is-are",
  title: "Am, Is, Are",
  order: 3,
  seoTitle: "Am, Is, Are — WBBPE Class 3 English (Butterfly) | StudyMatic",
  metaDescription:
    "WBBPE Class 3 English: using am, is and are — I am, he/she/it is, you/we/they are. Simple notes, Bengali help and a quiz.",
  overview:
    "In this chapter we learn am, is and are. These small words join naming words to the rest of the sentence: I am, he/she/it is, you/we/they are.",
  objectives: [
    "Use ‘am’ with I.",
    "Use ‘is’ with one person or thing.",
    "Use ‘are’ with many.",
    "Choose am/is/are correctly.",
  ],
  concepts: [
    {
      heading: "am with I",
      body: "Use ‘am’ only with ‘I’. For example: ‘I am a student.’ ‘I am happy.’",
    },
    {
      heading: "is with one",
      body: "Use ‘is’ with one person or thing (he, she, it). For example: ‘She is happy.’ ‘The cat is black.’",
    },
    {
      heading: "are with many",
      body: "Use ‘are’ with you, we and they (more than one). For example: ‘They are playing.’ ‘We are friends.’",
    },
  ],
  formulas: [],
  definitions: [
    { term: "am / is / are", meaning: "‘Be’ words: I am, he/she/it is, you/we/they are." },
  ],
  examples: [
    { problem: "‘I ___ ready.’", solution: "am." },
    { problem: "‘They ___ here.’", solution: "are." },
  ],
  commonMistakes: [
    "Using ‘is’ with ‘I’ (we say ‘I am’, not ‘I is’).",
    "Using ‘is’ with ‘they’ (we say ‘they are’).",
  ],
  mcqs: [
    {
      id: "w3e-bv-1",
      q: "Which word goes with ‘I’?",
      options: ["am", "is", "are", "be"],
      answer: 0,
      explanation: "We say ‘I am’.",
      difficulty: "easy",
    },
    {
      id: "w3e-bv-2",
      q: "She ___ my friend.",
      options: ["am", "is", "are", "be"],
      answer: 1,
      explanation: "‘She’ is one, so ‘is’.",
      difficulty: "easy",
    },
    {
      id: "w3e-bv-3",
      q: "They ___ playing.",
      options: ["am", "is", "are", "be"],
      answer: 2,
      explanation: "‘They’ is many, so ‘are’.",
      difficulty: "easy",
    },
    {
      id: "w3e-bv-4",
      q: "The cat ___ black.",
      options: ["be", "am", "are", "is"],
      answer: 3,
      explanation: "One cat, so ‘is’.",
      difficulty: "medium",
    },
    {
      id: "w3e-bv-5",
      q: "We ___ in class three.",
      options: ["are", "is", "am", "be"],
      answer: 0,
      explanation: "‘We’ takes ‘are’.",
      difficulty: "medium",
    },
  ],
  shortQuestions: [
    { q: "‘He ___ tall.’ — fill in.", a: "is." },
    { q: "‘You ___ kind.’ — fill in.", a: "are." },
  ],
  longQuestions: [
    { q: "Fill in: ‘I ___ Aman. He ___ my friend. We ___ happy.’", a: "I am Aman. He is my friend. We are happy." },
  ],
  hots: [
    {
      q: "Why is ‘I is happy’ wrong?",
      a: "Because ‘I’ always takes ‘am’ — it should be ‘I am happy’.",
    },
  ],
  revisionNotes: [
    "I → am.",
    "he / she / it (one) → is.",
    "you / we / they (many) → are.",
  ],
  keyTakeaways: ["Match am/is/are to the naming word.", "‘I’ always takes ‘am’."],
  faq: [
    { q: "Which goes with ‘we’?", a: "are." },
  ],
  related: [
    { board: "wbbpe", classId: "3", subject: "english", slug: "pronouns" },
    { board: "wbbpe", classId: "3", subject: "english", slug: "has-and-have" },
  ],
};

export default chapter;
