import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  board: "wbbpe",
  classId: "3",
  subject: "english",
  slug: "days-of-the-week",
  title: "Days of the Week",
  order: 6,
  seoTitle: "Days of the Week — WBBPE Class 3 English (Butterfly) | StudyMatic",
  metaDescription:
    "WBBPE Class 3 English: the seven days of the week from Sunday to Saturday, in order. Simple notes, Bengali help and a quiz.",
  overview:
    "In this chapter we learn the days of the week. There are seven days, from Sunday to Saturday, and they come in a fixed order.",
  objectives: [
    "Know there are seven days.",
    "Say the days in order.",
    "Tell which day comes before or after another.",
    "Match English day names with Bengali.",
  ],
  concepts: [
    {
      heading: "Seven days",
      body: "A week has seven days: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday.",
    },
    {
      heading: "In order",
      body: "The days come in a fixed order. After Monday comes Tuesday; after Friday comes Saturday.",
    },
    {
      heading: "Bengali help",
      body: "A few names — Sunday (রবিবার), Monday (সোমবার), Saturday (শনিবার). Knowing both helps us remember the English names.",
    },
  ],
  formulas: [],
  definitions: [
    { term: "Week (সপ্তাহ)", meaning: "A time of seven days." },
  ],
  examples: [
    { problem: "How many days are there in a week?", solution: "Seven." },
    { problem: "Which day comes after Monday?", solution: "Tuesday." },
  ],
  commonMistakes: [
    "Skipping a day while saying them in order.",
    "Mixing up Tuesday and Thursday.",
  ],
  mcqs: [
    {
      id: "w3e-day-1",
      q: "How many days are there in a week?",
      options: ["five", "seven", "ten", "twelve"],
      answer: 1,
      explanation: "A week has seven days.",
      difficulty: "easy",
    },
    {
      id: "w3e-day-2",
      q: "Which day comes after Monday?",
      options: ["Friday", "Sunday", "Tuesday", "Monday"],
      answer: 2,
      explanation: "Tuesday comes after Monday.",
      difficulty: "easy",
    },
    {
      id: "w3e-day-3",
      q: "Which day comes after Friday?",
      options: ["Monday", "Sunday", "Thursday", "Saturday"],
      answer: 3,
      explanation: "Saturday comes after Friday.",
      difficulty: "easy",
    },
    {
      id: "w3e-day-4",
      q: "The English word for ‘সপ্তাহ’ is ___.",
      options: ["week", "day", "month", "year"],
      answer: 0,
      explanation: "‘সপ্তাহ’ is ‘week’.",
      difficulty: "medium",
    },
    {
      id: "w3e-day-5",
      q: "Which of these is a day of the week?",
      options: ["January", "Wednesday", "Summer", "Morning"],
      answer: 1,
      explanation: "Wednesday is a day; the others are not.",
      difficulty: "medium",
    },
  ],
  shortQuestions: [
    { q: "Which day comes before Sunday?", a: "Saturday." },
    { q: "The English word for ‘সোমবার’ is?", a: "Monday." },
  ],
  longQuestions: [
    { q: "Say the seven days of the week in order.", a: "Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday." },
  ],
  hots: [
    {
      q: "Today is Wednesday. Which day will it be after two days?",
      a: "Friday — Thursday comes next, then Friday.",
    },
  ],
  revisionNotes: [
    "A week has seven days.",
    "Sunday … Saturday, in order.",
    "After Friday comes Saturday.",
  ],
  keyTakeaways: ["Name the seven days.", "Say them in order."],
  faq: [
    { q: "How many days are in a week?", a: "Seven." },
  ],
  related: [
    { board: "wbbpe", classId: "3", subject: "english", slug: "opposite-words" },
    { board: "wbbpe", classId: "3", subject: "english", slug: "making-sentences" },
  ],
};

export default chapter;
