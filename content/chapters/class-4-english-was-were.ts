import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  board: "wbbpe",
  classId: "4",
  subject: "english",
  slug: "was-were",
  title: "Was and Were",
  order: 7,
  seoTitle: "Was and Were — WBBPE Class 4 English (Butterfly) | StudyMatic",
  metaDescription:
    "WBBPE Class 4 English: was and were are the past forms of am/is/are — I/he/she/it was; you/we/they were. Notes and a quiz.",
  overview:
    "In this chapter we learn ‘was’ and ‘were’. They are the past forms of am, is and are. Use ‘was’ with one and ‘were’ with many.",
  objectives: [
    "Know was/were are the past of am/is/are.",
    "Use ‘was’ with I, he, she, it.",
    "Use ‘were’ with you, we, they.",
    "Choose was/were correctly.",
  ],
  concepts: [
    {
      heading: "Past of ‘be’",
      body: "‘was’ and ‘were’ tell us about the past. They are the past forms of am, is and are.",
    },
    {
      heading: "was with one",
      body: "Use ‘was’ with I, he, she and it. ‘She was happy.’ ‘I was at home.’",
    },
    {
      heading: "were with many",
      body: "Use ‘were’ with you, we and they. ‘They were playing.’ ‘We were tired.’",
    },
  ],
  formulas: [],
  definitions: [
    { term: "was / were", meaning: "The past forms of am/is/are: I/he/she/it was; you/we/they were." },
  ],
  examples: [
    { problem: "‘She ___ ill yesterday.’", solution: "was." },
    { problem: "‘They ___ at school.’", solution: "were." },
    { problem: "‘I ___ at home last night.’", solution: "was." },
    { problem: "‘We ___ very tired.’", solution: "were." },
    { problem: "‘He ___ in class four last year.’", solution: "was." },
  ],
  commonMistakes: [
    "Using ‘was’ with ‘they’ (should be ‘were’).",
    "Using ‘were’ with ‘he/she’ (should be ‘was’).",
  ],
  mcqs: [
    {
      id: "w4e-ww-1",
      q: "‘was’ and ‘were’ are the past forms of ___.",
      options: ["can", "has/have", "do/does", "am/is/are"],
      answer: 3,
      explanation: "was/were are the past of am/is/are.",
      difficulty: "easy",
    },
    {
      id: "w4e-ww-2",
      q: "‘She ___ happy.’ (past) — fill in.",
      options: ["was", "were", "is", "are"],
      answer: 0,
      explanation: "‘She’ is one → ‘was’.",
      difficulty: "easy",
    },
    {
      id: "w4e-ww-3",
      q: "‘They ___ playing.’ (past) — fill in.",
      options: ["was", "were", "are", "is"],
      answer: 1,
      explanation: "‘They’ is many → ‘were’.",
      difficulty: "easy",
    },
    {
      id: "w4e-ww-4",
      q: "‘I ___ at home yesterday.’ — fill in.",
      options: ["am", "were", "was", "are"],
      answer: 2,
      explanation: "‘I’ takes ‘was’ in the past.",
      difficulty: "medium",
    },
    {
      id: "w4e-ww-5",
      q: "‘We ___ tired after the game.’ — fill in.",
      options: ["is", "was", "am", "were"],
      answer: 3,
      explanation: "‘We’ takes ‘were’.",
      difficulty: "medium",
    },
    {
      id: "w4e-ww-6",
      q: "‘She ___ happy yesterday.’",
      options: ["were", "was", "are", "is"],
      answer: 1,
      explanation: "With ‘She’ we use ‘was’.",
      difficulty: "easy",
    },
    {
      id: "w4e-ww-7",
      q: "‘They ___ playing in the park.’",
      options: ["was", "were", "is", "am"],
      answer: 1,
      explanation: "With ‘They’ we use ‘were’.",
      difficulty: "easy",
    },
    {
      id: "w4e-ww-8",
      q: "‘was’ and ‘were’ tell us about the ___.",
      options: ["future", "present", "past", "question"],
      answer: 2,
      explanation: "They are the past forms of am/is/are.",
      difficulty: "easy",
    },
    {
      id: "w4e-ww-9",
      q: "‘I ___ at school.’",
      options: ["were", "was", "are", "be"],
      answer: 1,
      explanation: "With ‘I’ we use ‘was’.",
      difficulty: "medium",
    },
    {
      id: "w4e-ww-10",
      q: "‘You ___ right!’",
      options: ["was", "were", "is", "am"],
      answer: 1,
      explanation: "With ‘you’ we use ‘were’.",
      difficulty: "medium",
    },
  ],
  shortQuestions: [
    { q: "‘He ___ late.’ (past) — fill in.", a: "was." },
    { q: "‘You ___ right.’ (past) — fill in.", a: "were." },
  ],
  longQuestions: [
    {
      q: "Fill in: ‘I ___ happy. She ___ here. They ___ busy.’ (past)",
      a: "I was happy. She was here. They were busy.",
    },
  ],
  hots: [
    {
      q: "Why is ‘They was playing’ wrong?",
      a: "‘They’ is more than one, so it takes ‘were’ — ‘They were playing.’",
    },
  ],
  revisionNotes: [
    "was/were = past of am/is/are.",
    "I/he/she/it → was.",
    "you/we/they → were.",
  ],
  keyTakeaways: ["Talk about the past with was/were.", "Match them to the naming word."],
  faq: [
    { q: "Which goes with ‘we’ in the past?", a: "were." },
  ],
  related: [
    { board: "wbbpe", classId: "4", subject: "english", slug: "prepositions" },
    { board: "wbbpe", classId: "4", subject: "english", slug: "reading-comprehension" },
  ],
};

export default chapter;
