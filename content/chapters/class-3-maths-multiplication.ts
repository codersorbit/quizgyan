import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  board: "wbbpe",
  classId: "3",
  subject: "maths",
  slug: "multiplication",
  title: "গুণ",
  order: 6,
  seoTitle: "গুণ (দুই অঙ্ক × এক অঙ্ক) — WBBPE তৃতীয় শ্রেণি গণিত (আমার গণিত) | StudyMatic",
  metaDescription:
    "WBBPE তৃতীয় শ্রেণির গণিত: নামতা দিয়ে গুণ এবং দুই অঙ্কের সংখ্যা এক অঙ্ক দিয়ে গুণ করা। সহজ ব্যাখ্যা, উদাহরণ ও MCQ কুইজ।",
  overview:
    "এই অধ্যায়ে আমরা নামতা কাজে লাগিয়ে গুণ করব এবং দুই অঙ্কের সংখ্যা এক অঙ্ক দিয়ে গুণ করতে শিখব।",
  objectives: [
    "নামতা দিয়ে দ্রুত গুণ করা।",
    "দুই অঙ্ক × এক অঙ্ক গুণ করা।",
    "দলে দলে গুনতে গুণ ব্যবহার করা।",
    "গুণ দিয়ে সমস্যা সমাধান করা।",
  ],
  concepts: [
    {
      heading: "নামতা মনে রাখা",
      body: "গুণ দ্রুত করতে নামতা কাজে লাগে। যেমন ২ এর নামতা ২, ৪, ৬ …; ৫ এর নামতা ৫, ১০, ১৫ …।",
    },
    {
      heading: "দুই অঙ্ক × এক অঙ্ক",
      body: "প্রথমে একক, তারপর দশক গুণ করি। ২৩ × ৩: একক ৩×৩=৯, দশক ৩×২=৬ → ৬৯। যোগফল ৯ এর বেশি হলে হাতে রাখি।",
    },
    {
      heading: "দলে দলে গোনা",
      body: "সমান দলে জিনিস থাকলে গুণে মোট বের করি। যেমন ৩ সারিতে ২২ জন করে → ৩ × ২২ = ৬৬ জন।",
    },
  ],
  formulas: [],
  definitions: [
    { term: "গুণফল", meaning: "গুণ করে যে ফল পাই।" },
    { term: "নামতা", meaning: "কোনো সংখ্যার গুণফলের ক্রমিক তালিকা।" },
  ],
  examples: [
    { problem: "২৩ × ৩ = ?", solution: "একক ৩×৩=৯, দশক ৩×২=৬ → ৬৯।" },
    { problem: "৩ সারিতে ২২ জন হলে মোট কত জন?", solution: "৩ × ২২ = ৬৬ জন।" },
  ],
  commonMistakes: [
    "শুধু এককের ঘর গুণ করে দশক ভুলে যাওয়া।",
    "হাতে থাকা অঙ্ক যোগ করতে ভুলে যাওয়া।",
  ],
  mcqs: [
    {
      id: "w3m-mul-1",
      q: "২৩ × ৩ = ?",
      options: ["২৬", "৬৬", "৬৯", "৯৬"],
      answer: 2,
      explanation: "একক ৩×৩=৯, দশক ৩×২=৬ → ৬৯।",
      difficulty: "easy",
    },
    {
      id: "w3m-mul-2",
      q: "৩ সারিতে ২২ জন করে হলে মোট কত জন?",
      options: ["৪৪", "২৫", "৬৩", "৬৬"],
      answer: 3,
      explanation: "৩ × ২২ = ৬৬।",
      difficulty: "easy",
    },
    {
      id: "w3m-mul-3",
      q: "গুণ দ্রুত করতে কী কাজে লাগে?",
      options: ["নামতা", "বিয়োগ", "ভাগ", "তুলনা"],
      answer: 0,
      explanation: "নামতা জানা থাকলে গুণ দ্রুত হয়।",
      difficulty: "easy",
    },
    {
      id: "w3m-mul-4",
      q: "১২ × ৫ = ?",
      options: ["১৭", "৬০", "৫৫", "৫০"],
      answer: 1,
      explanation: "১২ × ৫ = ৬০।",
      difficulty: "medium",
    },
    {
      id: "w3m-mul-5",
      q: "৫ × ১০ = ?",
      options: ["৫৫", "১৫", "৫০", "১০০"],
      answer: 2,
      explanation: "৫ × ১০ = ৫০।",
      difficulty: "medium",
    },
  ],
  shortQuestions: [
    { q: "২১ × ৪ = কত?", a: "৮৪।" },
    { q: "১০ × ৭ = কত?", a: "৭০।" },
  ],
  longQuestions: [
    {
      q: "একটি বাসে ২২ জন বসতে পারে। ৩টি বাসে মোট কত জন বসতে পারবে?",
      a: "৩ × ২২ = ৬৬ জন।",
    },
  ],
  hots: [
    {
      q: "২৩ × ৩ আর ৩ × ২৩ — গুণফল কি একই?",
      a: "হ্যাঁ, দুটোই ৬৯; ক্রম বদলালেও গুণফল একই থাকে।",
    },
  ],
  revisionNotes: [
    "নামতা জানলে গুণ দ্রুত হয়।",
    "একক, তারপর দশক গুণ করি।",
    "৯ এর বেশি হলে হাতে রাখি।",
  ],
  keyTakeaways: ["দুই অঙ্ক × এক অঙ্ক গুণ করি।", "দলে দলে গুনতে গুণ ব্যবহার করি।"],
  faq: [
    { q: "৫ × ০ কত?", a: "০।" },
  ],
  related: [
    { board: "wbbpe", classId: "3", subject: "maths", slug: "subtraction" },
    { board: "wbbpe", classId: "3", subject: "maths", slug: "numbers-to-1000" },
  ],
};

export default chapter;
