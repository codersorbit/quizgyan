import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  board: "wbbpe",
  classId: "5",
  subject: "maths",
  slug: "multiplication",
  title: "গুণ",
  order: 3,
  seoTitle: "গুণ (একাধিক অঙ্ক) — WBBPE পঞ্চম শ্রেণি গণিত | StudyMatic",
  metaDescription:
    "WBBPE পঞ্চম শ্রেণির গণিত: একাধিক অঙ্ক দিয়ে গুণ, ১০ ও ১০০ দিয়ে গুণ এবং গুণের ক্রম। সহজ ব্যাখ্যা ও কুইজ।",
  overview:
    "এই অধ্যায়ে আমরা বড়ো সংখ্যাকে দুই বা তিন অঙ্ক দিয়ে গুণ করব এবং গুণের কিছু সহজ নিয়ম শিখব।",
  objectives: [
    "একাধিক অঙ্ক দিয়ে গুণ করা।",
    "১০, ১০০ দিয়ে গুণ করা।",
    "গুণের ক্রম বোঝা।",
    "গুণের অঙ্ক সমাধান করা।",
  ],
  concepts: [
    {
      heading: "গুণের নিয়ম",
      body: "প্রথমে এককের অঙ্ক দিয়ে, তারপর দশকের অঙ্ক দিয়ে গুণ করে ফলগুলো যোগ করি। যেমন ২৩৪ × ১২ = ২৮০৮।",
    },
    {
      heading: "১০ ও ১০০ দিয়ে গুণ",
      body: "১০ দিয়ে গুণ করলে পিছনে একটি শূন্য, ১০০ দিয়ে গুণ করলে দুটি শূন্য বসে। ৪৫ × ১০ = ৪৫০; ৪৫ × ১০০ = ৪৫০০।",
    },
    {
      heading: "গুণের ক্রম",
      body: "গুণে সংখ্যার ক্রম বদলালেও গুণফল একই থাকে — ৩ × ৪ = ৪ × ৩।",
    },
  ],
  formulas: [],
  definitions: [
    { term: "গুণফল", meaning: "গুণ করে যে ফল পাওয়া যায়।" },
  ],
  examples: [
    { problem: "২৩৪ × ১২ = ?", solution: "২৮০৮।" },
    { problem: "৪৫ × ১০০ = ?", solution: "৪৫০০।" },
    { problem: "৩২৫ × ২৪ = ?", solution: "৭,৮০০।" },
    { problem: "৬৭ × ১০ = ?", solution: "৬৭০।" },
    { problem: "একটি বাক্সে ১২৫টি পেনসিল আছে। ৮টি বাক্সে মোট কতটি পেনসিল?", solution: "১২৫ × ৮ = ১,০০০টি পেনসিল।" },
  ],
  commonMistakes: [
    "দশক দিয়ে গুণের সময় ঘর এক ধাপ বাঁয়ে না সরানো।",
    "শূন্য দিয়ে গুণে শূন্যের সংখ্যা ভুল করা।",
  ],
  mcqs: [
    {
      id: "w5m-mul-1",
      q: "২৩৪ × ১২ = ?",
      options: ["২৮৮০", "২৮০৮", "২০৮৮", "২৮০০"],
      answer: 1,
      explanation: "২৩৪ × ১২ = ২৩৪ × ১০ + ২৩৪ × ২ = ২৩৪০ + ৪৬৮ = ২৮০৮।",
      difficulty: "medium",
    },
    {
      id: "w5m-mul-2",
      q: "৪৫ × ১০ = ?",
      options: ["৪৫০০", "৪৫", "৪৫০", "৫৪০"],
      answer: 2,
      explanation: "১০ দিয়ে গুণে পিছনে একটি শূন্য → ৪৫০।",
      difficulty: "easy",
    },
    {
      id: "w5m-mul-3",
      q: "৪৫ × ১০০ = ?",
      options: ["৪৫", "৪৫০", "৪৫০০০", "৪৫০০"],
      answer: 3,
      explanation: "১০০ দিয়ে গুণে দুটি শূন্য → ৪৫০০।",
      difficulty: "easy",
    },
    {
      id: "w5m-mul-4",
      q: "গুণের ক্রম বদলালে গুণফল কেমন হয়?",
      options: ["একই থাকে", "বদলে যায়", "শূন্য হয়", "বড়ো হয়"],
      answer: 0,
      explanation: "৩ × ৪ = ৪ × ৩ — ক্রম বদলালেও ফল একই।",
      difficulty: "medium",
    },
    {
      id: "w5m-mul-5",
      q: "১২৫ × ৮ = ?",
      options: ["৮০০", "১০০০", "১২৫০", "১০০"],
      answer: 1,
      explanation: "১২৫ × ৮ = ১০০০।",
      difficulty: "medium",
    },
    {
      id: "w5m-mul-6",
      q: "৩২৫ × ২৪ = ?",
      options: ["৭৮০০", "৭৮৮০", "৬৮০০", "৭৭০০"],
      answer: 0,
      explanation: "৩২৫ × ২০ = ৬৫০০, ৩২৫ × ৪ = ১৩০০; যোগ করে ৭,৮০০।",
      difficulty: "medium",
    },
    {
      id: "w5m-mul-7",
      q: "৬৭ × ১০ = ?",
      options: ["৬৭", "৬৭০", "৬৭০০", "৭৬০"],
      answer: 1,
      explanation: "১০ দিয়ে গুণ করলে পিছনে একটি শূন্য বসে — ৬৭০।",
      difficulty: "easy",
    },
    {
      id: "w5m-mul-8",
      q: "৫২ × ১০০ = ?",
      options: ["৫২০", "৫২০০", "৫২০০০", "৫২"],
      answer: 1,
      explanation: "১০০ দিয়ে গুণ করলে পিছনে দুটি শূন্য বসে — ৫২০০।",
      difficulty: "easy",
    },
    {
      id: "w5m-mul-9",
      q: "৩ × ৪ এবং ৪ × ৩ — এদের গুণফল কেমন?",
      options: ["সমান", "৩ × ৪ বড়ো", "৪ × ৩ বড়ো", "শূন্য"],
      answer: 0,
      explanation: "ক্রম বদলালেও গুণফল একই থাকে — দুটোই ১২।",
      difficulty: "easy",
    },
    {
      id: "w5m-mul-10",
      q: "১২৫ × ৮ = ?",
      options: ["১০০০", "৮০০", "১১২৫", "৯৬০"],
      answer: 0,
      explanation: "১২৫ × ৮ = ১,০০০।",
      difficulty: "medium",
    },
  ],
  shortQuestions: [
    { q: "৬০ × ১০ = কত?", a: "৬০০।" },
    { q: "২৫ × ৪ = কত?", a: "১০০।" },
  ],
  longQuestions: [
    {
      q: "একটি বাক্সে ১৪৪টি পেনসিল থাকলে ১২টি বাক্সে কত পেনসিল?",
      a: "১৪৪ × ১২ = ১৭২৮টি পেনসিল।",
    },
  ],
  hots: [
    {
      q: "৯৯ × ৬ সহজে বের করার একটি উপায় বলো।",
      a: "৯৯ × ৬ = (১০০ − ১) × ৬ = ৬০০ − ৬ = ৫৯৪।",
    },
  ],
  revisionNotes: [
    "একক, তারপর দশক দিয়ে গুণ করে যোগ।",
    "×১০ → এক শূন্য; ×১০০ → দুই শূন্য।",
    "গুণের ক্রম বদলালেও ফল একই।",
  ],
  keyTakeaways: ["একাধিক অঙ্কে গুণ করি।", "শূন্য দিয়ে গুণ দ্রুত করি।"],
  faq: [
    { q: "৩ × ৪ আর ৪ × ৩ কি সমান?", a: "হ্যাঁ, দুটোই ১২।" },
  ],
  related: [
    { board: "wbbpe", classId: "5", subject: "maths", slug: "addition-subtraction" },
    { board: "wbbpe", classId: "5", subject: "maths", slug: "division" },
  ],
};

export default chapter;
