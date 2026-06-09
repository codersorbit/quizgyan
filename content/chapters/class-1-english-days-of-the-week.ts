import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  board: "wbbpe",
  classId: "1",
  subject: "english",
  slug: "days-of-the-week",
  title: "Days of the Week",
  order: 7,
  seoTitle: "Days of the Week — WBBPE Class 1 English (Amar Boi) | StudyMatic",
  metaDescription:
    "WBBPE Class 1 English: the seven days of the week — Sunday to Saturday — their order and names. Simple notes, Bengali help and a quiz.",
  overview:
    "In this chapter we learn the seven days of the week in English — Sunday, Monday, Tuesday, Wednesday, Thursday, Friday and Saturday.",
  objectives: [
    "Name the seven days of the week.",
    "Say the days in the right order.",
    "Tell which day comes before or after another.",
    "Know that a week has seven days.",
  ],
  concepts: [
    {
      heading: "Seven days",
      body: "A week has seven days: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday and Saturday.",
    },
    {
      heading: "Days in order",
      body: "The days come in a fixed order. After Monday comes Tuesday, and after Tuesday comes Wednesday.",
    },
    {
      heading: "Bengali help",
      body: "Some names — Sunday (রবিবার), Monday (সোমবার), Tuesday (মঙ্গলবার). Knowing both helps us learn the English names faster.",
    },
  ],
  formulas: [],
  definitions: [
    { term: "Week (সপ্তাহ)", meaning: "A set of seven days." },
    { term: "Day (দিন)", meaning: "One of the seven parts of a week." },
  ],
  examples: [
    { problem: "How many days are there in a week?", solution: "Seven days." },
    { problem: "Which day comes after Monday?", solution: "Tuesday." },
  ],
  commonMistakes: [
    "Skipping a day while saying them in order.",
    "Mixing up Tuesday and Thursday.",
  ],
  mcqs: [
    {
      id: "w1e-dw-1",
      q: "How many days are there in a week?",
      options: ["ten", "five", "seven", "three"],
      answer: 2,
      explanation: "A week has seven days.",
      difficulty: "easy",
    },
    {
      id: "w1e-dw-2",
      q: "Which day comes after Monday?",
      options: ["Monday", "Sunday", "Friday", "Tuesday"],
      answer: 3,
      explanation: "Tuesday comes after Monday.",
      difficulty: "easy",
    },
    {
      id: "w1e-dw-3",
      q: "Which day comes before Friday?",
      options: ["Thursday", "Saturday", "Sunday", "Monday"],
      answer: 0,
      explanation: "Thursday comes before Friday.",
      difficulty: "easy",
    },
    {
      id: "w1e-dw-4",
      q: "The English word for 'সপ্তাহ' is ___.",
      options: ["day", "week", "month", "year"],
      answer: 1,
      explanation: "'সপ্তাহ' is 'week' in English.",
      difficulty: "medium",
    },
    {
      id: "w1e-dw-5",
      q: "Which of these is a day of the week?",
      options: ["red", "apple", "Sunday", "book"],
      answer: 2,
      explanation: "Sunday is a day of the week.",
      difficulty: "medium",
    },
  ],
  shortQuestions: [
    { q: "Which day comes after Saturday?", a: "Sunday." },
    { q: "The English word for 'সোমবার' is?", a: "Monday." },
  ],
  longQuestions: [
    { q: "Say the seven days in order.", a: "Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday." },
  ],
  hots: [
    {
      q: "Today is Tuesday. Which day will come tomorrow?",
      a: "Wednesday — it comes just after Tuesday.",
    },
  ],
  revisionNotes: [
    "A week has seven days.",
    "Sunday to Saturday, in order.",
    "After Monday comes Tuesday.",
  ],
  keyTakeaways: ["Name the seven days.", "Say them in the right order."],
  faq: [
    { q: "How many days are in a week?", a: "Seven." },
  ],
  related: [
    { board: "wbbpe", classId: "1", subject: "english", slug: "simple-sentences" },
    { board: "wbbpe", classId: "1", subject: "english", slug: "reading-aloud" },
  ],
};

export default chapter;
