import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  board: "wbbpe",
  classId: "2",
  subject: "english",
  slug: "months-of-the-year",
  title: "Months of the Year",
  order: 7,
  seoTitle: "Months of the Year — WBBPE Class 2 English (Amar Boi) | StudyMatic",
  metaDescription:
    "WBBPE Class 2 English: the twelve months of the year from January to December, in order. Simple notes, Bengali help and a quiz.",
  overview:
    "In this chapter we learn the months of the year. There are twelve months, from January to December, and they come in a fixed order.",
  objectives: [
    "Know there are twelve months.",
    "Say the months in order.",
    "Tell which month comes before or after another.",
    "Know the first and last months.",
  ],
  concepts: [
    {
      heading: "Twelve months",
      body: "A year has twelve months: January, February, March, April, May, June, July, August, September, October, November, December.",
    },
    {
      heading: "Months in order",
      body: "The months come in a fixed order. After January comes February, and December is the last month.",
    },
    {
      heading: "Bengali help",
      body: "A few names — January (জানুয়ারি), February (ফেব্রুয়ারি), December (ডিসেম্বর). Knowing both helps us learn the English names.",
    },
  ],
  formulas: [],
  definitions: [
    { term: "Month (মাস)", meaning: "One of the twelve parts of a year." },
    { term: "Year (বছর)", meaning: "A time of twelve months." },
  ],
  examples: [
    { problem: "How many months are there in a year?", solution: "Twelve." },
    { problem: "Which month comes after January?", solution: "February." },
  ],
  commonMistakes: [
    "Skipping a month while saying them in order.",
    "Mixing up June and July.",
  ],
  mcqs: [
    {
      id: "w2e-mon-1",
      q: "How many months are there in a year?",
      options: ["fourteen", "ten", "seven", "twelve"],
      answer: 3,
      explanation: "A year has twelve months.",
      difficulty: "easy",
    },
    {
      id: "w2e-mon-2",
      q: "Which is the first month of the year?",
      options: ["January", "December", "March", "June"],
      answer: 0,
      explanation: "January is the first month.",
      difficulty: "easy",
    },
    {
      id: "w2e-mon-3",
      q: "Which month comes after January?",
      options: ["March", "February", "April", "December"],
      answer: 1,
      explanation: "February comes after January.",
      difficulty: "easy",
    },
    {
      id: "w2e-mon-4",
      q: "Which is the last month of the year?",
      options: ["January", "November", "December", "October"],
      answer: 2,
      explanation: "December is the last month.",
      difficulty: "medium",
    },
    {
      id: "w2e-mon-5",
      q: "The English word for ‘বছর’ is ___.",
      options: ["day", "month", "week", "year"],
      answer: 3,
      explanation: "‘বছর’ is ‘year’ in English.",
      difficulty: "medium",
    },
  ],
  shortQuestions: [
    { q: "Which month comes after March?", a: "April." },
    { q: "The English word for ‘মাস’ is?", a: "Month." },
  ],
  longQuestions: [
    { q: "Say the first four months of the year in order.", a: "January, February, March, April." },
  ],
  hots: [
    {
      q: "This month is November. Which month comes next?",
      a: "December — it comes just after November.",
    },
  ],
  revisionNotes: [
    "A year has twelve months.",
    "January is first, December is last.",
    "They come in a fixed order.",
  ],
  keyTakeaways: ["Name the twelve months.", "Say them in order."],
  faq: [
    { q: "How many months are in a year?", a: "Twelve." },
  ],
  related: [
    { board: "wbbpe", classId: "2", subject: "english", slug: "making-sentences" },
    { board: "wbbpe", classId: "2", subject: "english", slug: "reading-comprehension" },
  ],
};

export default chapter;
