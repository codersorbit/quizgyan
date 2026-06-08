import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "7",
  subject: "maths",
  slug: "large-numbers-around-us",
  title: "Large Numbers Around Us",
  order: 1,
  seoTitle: "Large Numbers Around Us Class 7 Maths (Ganita Prakash) — Notes & MCQs",
  metaDescription:
    "Class 7 Maths Large Numbers Around Us (Ganita Prakash): place value, the Indian and international systems, reading and writing lakhs and crores, comparing and estimating large numbers, with examples and an MCQ quiz.",
  overview:
    "Populations, distances and budgets are all huge numbers. This Class 7 Ganita Prakash chapter builds confidence with large numbers — their place values, the Indian and international systems of grouping digits, and how to read, compare, round and estimate them.",
  objectives: [
    "Read and write large numbers in both systems.",
    "Use place value for lakhs and crores.",
    "Compare and order large numbers.",
    "Estimate by rounding large numbers.",
  ],
  concepts: [
    {
      heading: "Place value in large numbers",
      body: "Each digit in a number has a place value — ones, tens, hundreds, thousands, and beyond. In large numbers the places continue to ten thousands, lakhs, ten lakhs, crores and so on. The value of a digit is the digit multiplied by its place value, so the 5 in 5,00,000 means five lakh.",
    },
    {
      heading: "Indian and international systems",
      body: "The Indian system groups digits as ones, thousands, lakhs and crores (commas after 3, then every 2 digits), while the international system groups as ones, thousands, millions (commas every 3 digits). Ten lakh equals one million, and one crore equals ten million.",
    },
    {
      heading: "Comparing and ordering",
      body: "To compare large numbers, the one with more digits is greater; if the digit counts match, compare from the leftmost place. This lets us arrange large numbers in ascending or descending order, useful when ranking populations or prices.",
    },
    {
      heading: "Estimation of large numbers",
      body: "Exact figures are often unnecessary, so we estimate by rounding to the nearest ten, hundred, thousand, lakh, and so on. Rounding 4,87,000 to the nearest lakh gives about 5,00,000 — a quick, sensible approximation for everyday reasoning.",
    },
  ],
  formulas: [
    { name: "Value of a digit", formula: "digit × its place value" },
    { name: "Indian–international link", formula: "10 lakh = 1 million; 1 crore = 10 million" },
  ],
  definitions: [
    { term: "Place value", meaning: "The value a digit has because of its position in a number." },
    { term: "Lakh", meaning: "One hundred thousand (1,00,000) in the Indian system." },
    { term: "Crore", meaning: "One hundred lakh (1,00,00,000) in the Indian system." },
    { term: "Estimation", meaning: "An approximate value found by rounding." },
  ],
  examples: [
    {
      problem: "Write 23,45,678 in the international system.",
      solution: "2,345,678 (commas every three digits from the right).",
    },
    {
      problem: "What is the place value of 7 in 7,00,000?",
      solution: "Seven lakh, i.e. 7 × 1,00,000 = 7,00,000.",
    },
    {
      problem: "Round 4,87,000 to the nearest lakh.",
      solution: "About 5,00,000, since 87,000 is more than half a lakh.",
    },
  ],
  commonMistakes: [
    "Placing commas wrongly when switching between Indian and international systems.",
    "Confusing place value with the digit itself.",
    "Forgetting that 10 lakh equals 1 million.",
    "Rounding to the wrong place when estimating.",
  ],
  mcqs: [
    { id: "ln1", difficulty: "easy", q: "One lakh is written as:", options: ["1,00,000", "10,000", "10,00,000", "1,000"], answer: 0, explanation: "One lakh = 1,00,000 (hundred thousand)." },
    { id: "ln2", difficulty: "easy", q: "One crore equals how many lakhs?", options: ["10", "100", "1000", "50"], answer: 1, explanation: "1 crore = 100 lakh." },
    { id: "ln3", difficulty: "medium", q: "10 lakh is the same as:", options: ["1 billion", "1 thousand", "1 million", "10 million"], answer: 2, explanation: "Ten lakh = one million." },
    { id: "ln4", difficulty: "medium", q: "The place value of 6 in 6,50,000 is:", options: ["6", "60,000", "600", "6,00,000"], answer: 3, explanation: "6 is in the lakh place: 6,00,000." },
    { id: "ln5", difficulty: "easy", q: "Which number is the largest?", options: ["10,00,000", "9,99,999", "1,00,000", "99,999"], answer: 0, explanation: "10,00,000 has the most digits." },
    { id: "ln6", difficulty: "medium", q: "In the international system, 23,45,678 is written:", options: ["234,5678", "2,345,678", "23,456,78", "2345,678"], answer: 1, explanation: "Group every three digits: 2,345,678." },
    { id: "ln7", difficulty: "hard", q: "Rounding 3,62,500 to the nearest lakh gives:", options: ["3,00,000", "3,50,000", "4,00,000", "4,50,000"], answer: 2, explanation: "62,500 is more than half a lakh, so round up to 4,00,000." },
    { id: "ln8", difficulty: "easy", q: "The Indian system places its first comma after:", options: ["2 digits", "4 digits", "5 digits", "3 digits"], answer: 3, explanation: "First comma after 3 digits (thousands)." },
    { id: "ln9", difficulty: "medium", q: "1 crore equals:", options: ["10 million", "1 million", "100 million", "1 lakh"], answer: 0, explanation: "1 crore = 10 million." },
    { id: "ln10", difficulty: "hard", q: "Which is the correct ascending order?", options: ["1,00,000; 99,999; 10,00,000", "99,999; 1,00,000; 10,00,000", "10,00,000; 1,00,000; 99,999", "1,00,000; 10,00,000; 99,999"], answer: 1, explanation: "Smallest first: 99,999 < 1,00,000 < 10,00,000." },
  ],
  shortQuestions: [
    { q: "How many lakhs make a crore?", a: "One hundred lakh make a crore." },
    { q: "What is the place value of 3 in 3,40,000?", a: "Three lakh (3,00,000)." },
    { q: "How do you compare two numbers with different digit counts?", a: "The number with more digits is greater." },
  ],
  longQuestions: [
    { q: "Explain the Indian and international systems of writing large numbers, with an example.", a: "Both systems use commas to group digits, but they group differently. The Indian system places the first comma after three digits (thousands) and then after every two digits, giving the places ones, thousands, lakhs and crores — for example, 23,45,678. The international system places a comma after every three digits, giving ones, thousands and millions — the same number is written 2,345,678. The link between them is that ten lakh equals one million and one crore equals ten million, so the same quantity can be read in either system." },
    { q: "How is estimation of large numbers useful? Illustrate with rounding.", a: "Estimation gives a quick, approximate value by rounding to a convenient place, which is enough for many real situations and helps check whether an exact answer is sensible. For instance, a town with a population of 4,87,000 can be described as 'about 5 lakh' by rounding to the nearest lakh, because 87,000 is more than half a lakh. If a calculation about that town gave 50,000 or 50 lakh, the estimate would immediately flag the error." },
  ],
  hots: [
    { q: "A number rounds to 7,00,000 when rounded to the nearest lakh. What is the smallest whole number it could be?", a: "6,50,000, since numbers from 6,50,000 up to 7,49,999 round to 7,00,000." },
    { q: "Express 3 crore in millions.", a: "3 crore = 30 million (since 1 crore = 10 million)." },
  ],
  revisionNotes: [
    "Place value: ones, tens, …, thousand, lakh, crore.",
    "Indian commas: after 3 digits, then every 2; international: every 3.",
    "10 lakh = 1 million; 1 crore = 100 lakh = 10 million.",
    "Estimate by rounding to the required place.",
  ],
  keyTakeaways: [
    "A digit's value depends on its place.",
    "Indian and international systems group digits differently.",
    "Estimation makes large numbers easy to handle.",
  ],
  faq: [
    { q: "How many zeros are in one crore?", a: "Seven — 1 crore = 1,00,00,000." },
    { q: "Is ten lakh equal to one million?", a: "Yes, ten lakh equals one million." },
    { q: "How do I round a large number?", a: "Look at the digit after the rounding place: 5 or more rounds up, less than 5 rounds down." },
  ],
  related: [
    { classId: "7", subject: "maths", slug: "number-play" },
    { classId: "8", subject: "maths", slug: "a-story-of-numbers" },
  ],
};

export default chapter;
