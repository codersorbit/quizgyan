import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  board: "wbbpe",
  classId: "2",
  subject: "maths",
  slug: "multiplication-intro",
  title: "গুণের ধারণা",
  order: 6,
  seoTitle: "গুণের ধারণা — WBBPE দ্বিতীয় শ্রেণি গণিত (আমার বই) | StudyMatic",
  metaDescription:
    "WBBPE দ্বিতীয় শ্রেণির গণিত: গুণ মানে একই সংখ্যা বারবার যোগ, × চিহ্ন ও দলে দলে গোনা। সহজ ব্যাখ্যা, উদাহরণ ও MCQ কুইজ।",
  overview:
    "এই অধ্যায়ে আমরা গুণের ধারণা শিখব। একই সংখ্যা বারবার যোগ করাকেই গুণ বলে; গুণের চিহ্ন ×।",
  objectives: [
    "গুণ মানে বারবার যোগ — বোঝা।",
    "× চিহ্ন চেনা ও পড়া।",
    "দলে দলে গোনা।",
    "ছোটো সংখ্যার গুণ করা।",
  ],
  concepts: [
    {
      heading: "বারবার যোগই গুণ",
      body: "একই সংখ্যা বারবার যোগ করলে তা গুণ দিয়ে সহজে লেখা যায়। যেমন ৩ + ৩ + ৩ + ৩ = ৪ বার ৩ = ৪ × ৩ = ১২।",
    },
    {
      heading: "× চিহ্ন",
      body: "গুণ বোঝাতে × চিহ্ন ব্যবহার করি। ৪ × ৩ পড়ি ‘চার গুণ তিন’, যার মানে চারটি দলে তিন করে।",
    },
    {
      heading: "দলে দলে গোনা",
      body: "সমান দলে জিনিস থাকলে গুণে মোট বের করি। যেমন ৪টি ফুলের প্রতিটিতে ৬টি পাপড়ি হলে মোট ৪ × ৬ = ২৪টি পাপড়ি।",
    },
  ],
  formulas: [],
  definitions: [
    { term: "গুণ", meaning: "একই সংখ্যা বারবার যোগ করার সংক্ষিপ্ত রূপ।" },
    { term: "গুণফল", meaning: "গুণ করে যে ফল পাই।" },
  ],
  examples: [
    { problem: "৪ × ৩ = ?", solution: "৩ + ৩ + ৩ + ৩ = ১২, তাই ৪ × ৩ = ১২।" },
    { problem: "২ × ৫ = ?", solution: "৫ + ৫ = ১০, তাই ২ × ৫ = ১০।" },
  ],
  commonMistakes: [
    "গুণকে যোগের বদলে বিয়োগ ভাবা।",
    "দল ও দলের সংখ্যা গুলিয়ে ফেলা।",
  ],
  mcqs: [
    {
      id: "w2m-mul-1",
      q: "গুণ আসলে কী?",
      options: ["ভাগ", "একই সংখ্যা বারবার যোগ", "বিয়োগ", "তুলনা"],
      answer: 1,
      explanation: "একই সংখ্যা বারবার যোগ করাই গুণ।",
      difficulty: "easy",
    },
    {
      id: "w2m-mul-2",
      q: "৩ + ৩ + ৩ + ৩ — গুণ আকারে কী?",
      options: ["৪ − ৩", "৩ × ৩", "৪ × ৩", "৪ + ৩"],
      answer: 2,
      explanation: "চার বার ৩ = ৪ × ৩।",
      difficulty: "easy",
    },
    {
      id: "w2m-mul-3",
      q: "৪ × ৩ = ?",
      options: ["১৬", "৭", "৯", "১২"],
      answer: 3,
      explanation: "৩+৩+৩+৩ = ১২।",
      difficulty: "easy",
    },
    {
      id: "w2m-mul-4",
      q: "গুণের চিহ্ন কোনটি?",
      options: ["×", "+", "−", "÷"],
      answer: 0,
      explanation: "গুণ বোঝাতে × চিহ্ন।",
      difficulty: "medium",
    },
    {
      id: "w2m-mul-5",
      q: "২ × ৫ = ?",
      options: ["২৫", "১০", "৭", "১২"],
      answer: 1,
      explanation: "৫+৫ = ১০।",
      difficulty: "medium",
    },
  ],
  shortQuestions: [
    { q: "৫ × ১ = কত?", a: "৫।" },
    { q: "৩ × ২ = কত?", a: "৬।" },
  ],
  longQuestions: [
    {
      q: "একটি নয়নতারা ফুলে ৬টি পাপড়ি। ৪টি ফুলে মোট কয়টি পাপড়ি?",
      a: "৪ × ৬ = ২৪টি পাপড়ি।",
    },
  ],
  hots: [
    {
      q: "৩ × ৪ আর ৪ × ৩ — গুণফল কি একই?",
      a: "হ্যাঁ, দুটোই ১২; ক্রম বদলালেও গুণফল একই থাকে।",
    },
  ],
  revisionNotes: [
    "গুণ = বারবার যোগ।",
    "চিহ্ন ×; ৪ × ৩ মানে চার বার ৩।",
    "সমান দল গুনতে গুণ কাজে লাগে।",
  ],
  keyTakeaways: ["গুণ মানে বারবার যোগ।", "দলে দলে গুনতে গুণ ব্যবহার করি।"],
  faq: [
    { q: "৫ × ০ কত?", a: "০ — শূন্য দল মানে কিছুই নেই।" },
  ],
  related: [
    { board: "wbbpe", classId: "2", subject: "maths", slug: "subtraction" },
    { board: "wbbpe", classId: "2", subject: "maths", slug: "numbers-to-100" },
  ],
};

export default chapter;
