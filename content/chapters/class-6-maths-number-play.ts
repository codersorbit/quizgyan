import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "6",
  subject: "maths",
  slug: "number-play",
  title: "Number Play",
  order: 3,
  seoTitle: "Number Play Class 6 Maths (Ganita Prakash) — Number Sense Notes & MCQs",
  metaDescription:
    "Class 6 Maths Number Play (Ganita Prakash): building number sense through comparing and ordering numbers, number patterns, estimation, and playful number puzzles, with examples and an MCQ quiz.",
  overview:
    "This Class 6 Ganita Prakash chapter is about playing with numbers to build a strong number sense. Through comparing and ordering, spotting patterns, estimating, and solving simple puzzles, students learn to reason about numbers rather than just calculate with them.",
  objectives: [
    "Compare and order numbers.",
    "Spot and continue patterns in numbers.",
    "Estimate answers by rounding.",
    "Reason through simple number puzzles.",
  ],
  concepts: [
    {
      heading: "Comparing and ordering numbers",
      body: "To compare two numbers we first look at how many digits each has — more digits means a larger number. If the digit counts match, we compare digit by digit from the left. This lets us arrange numbers in ascending (smallest first) or descending (largest first) order.",
    },
    {
      heading: "Making numbers from digits",
      body: "Given a set of digits, the largest number is formed by placing the biggest digits on the left, and the smallest by placing the smallest digits on the left (keeping a non-zero digit first). For example, from 3, 7 and 1 the largest is 731 and the smallest is 137.",
    },
    {
      heading: "Patterns in numbers",
      body: "Numbers often follow patterns we can continue. Adding the same amount each time gives sequences like 4, 7, 10, 13…, while doubling gives 1, 2, 4, 8, 16…. Recognising the rule lets us predict the next numbers.",
    },
    {
      heading: "Estimation",
      body: "Estimation gives a quick, approximate answer by rounding numbers to a convenient value. Rounding 48 and 31 to 50 and 30 tells us 48 + 31 is roughly 80 — close enough to check whether an exact answer is sensible.",
    },
  ],
  formulas: [
    { name: "Ascending order", formula: "arrange from smallest to largest" },
    { name: "Descending order", formula: "arrange from largest to smallest" },
  ],
  definitions: [
    { term: "Ascending order", meaning: "Numbers arranged from smallest to largest." },
    { term: "Descending order", meaning: "Numbers arranged from largest to smallest." },
    { term: "Estimation", meaning: "Finding an approximate answer, usually by rounding." },
    { term: "Successor", meaning: "The number that comes just after a given number (one more)." },
  ],
  examples: [
    {
      problem: "Arrange in ascending order: 45, 9, 130, 78.",
      solution: "Smallest first: 9, 45, 78, 130.",
    },
    {
      problem: "Make the largest 3-digit number using 4, 0 and 6.",
      solution: "Place the largest digits first: 640.",
    },
    {
      problem: "Estimate 296 + 198 by rounding to hundreds.",
      solution: "296 ≈ 300 and 198 ≈ 200, so the sum is about 500.",
    },
  ],
  commonMistakes: [
    "Comparing numbers by their first digit alone without checking digit count.",
    "Putting 0 in the leftmost place when making the smallest number.",
    "Continuing a pattern by guessing instead of finding the rule.",
    "Treating an estimate as the exact answer.",
  ],
  mcqs: [
    { id: "np1", difficulty: "easy", q: "Which is the largest number?", options: ["89", "98", "109", "9"], answer: 2, explanation: "109 has three digits, so it is largest." },
    { id: "np2", difficulty: "easy", q: "Ascending order means arranged from:", options: ["largest to smallest", "smallest to largest", "left to right", "odd to even"], answer: 1, explanation: "Ascending = smallest first." },
    { id: "np3", difficulty: "medium", q: "The largest number from 5, 2, 8 is:", options: ["852", "825", "582", "258"], answer: 0, explanation: "Biggest digits on the left: 852." },
    { id: "np4", difficulty: "medium", q: "The next number in 2, 5, 8, 11, ___ is:", options: ["12", "13", "15", "14"], answer: 3, explanation: "Add 3 each time: 11 + 3 = 14." },
    { id: "np5", difficulty: "easy", q: "The successor of 99 is:", options: ["98", "100", "90", "101"], answer: 1, explanation: "Successor means one more: 99 + 1 = 100." },
    { id: "np6", difficulty: "medium", q: "Estimate 51 + 48 by rounding to tens:", options: ["100", "90", "110", "80"], answer: 0, explanation: "50 + 50 = 100 (approx)." },
    { id: "np7", difficulty: "hard", q: "The smallest 3-digit number from 0, 7, 3 is:", options: ["073", "703", "307", "037"], answer: 2, explanation: "Smallest non-zero digit first: 307." },
    { id: "np8", difficulty: "easy", q: "Descending order of 4, 16, 9 is:", options: ["4, 9, 16", "16, 9, 4", "9, 4, 16", "16, 4, 9"], answer: 1, explanation: "Largest first: 16, 9, 4." },
    { id: "np9", difficulty: "medium", q: "The pattern 1, 2, 4, 8, ___ is made by:", options: ["adding 2", "adding 4", "doubling", "subtracting"], answer: 2, explanation: "Each term is double the last; next is 16." },
    { id: "np10", difficulty: "hard", q: "Rounding 678 to the nearest hundred gives:", options: ["600", "650", "800", "700"], answer: 3, explanation: "678 is closer to 700 than 600." },
  ],
  shortQuestions: [
    { q: "How do you compare two numbers with different digit counts?", a: "The number with more digits is larger." },
    { q: "What is the successor of 250?", a: "251 — the number one more than it." },
    { q: "Why do we estimate?", a: "To get a quick approximate answer and check whether an exact result is reasonable." },
  ],
  longQuestions: [
    { q: "Explain how to make the largest and smallest numbers from a set of digits, using 2, 9 and 0.", a: "To make the largest number, place the digits in decreasing order from the left, so 2, 9, 0 gives 920. To make the smallest, place them in increasing order from the left, but the leftmost digit cannot be 0 (or the number would have fewer digits), so we use the smallest non-zero digit first: 209. This gives the largest as 920 and the smallest as 209." },
    { q: "How does estimation help in everyday calculation? Give an example.", a: "Estimation gives a fast, approximate answer by rounding numbers to convenient values, which helps us judge whether an exact answer makes sense. For example, to check the total of items costing ₹196 and ₹307, we round to ₹200 and ₹300 and expect about ₹500. If a calculation gave ₹50 or ₹5000, the estimate immediately shows something has gone wrong." },
  ],
  hots: [
    { q: "Using each of the digits 1, 2 and 3 once, how many different 3-digit numbers can you make?", a: "Six: 123, 132, 213, 231, 312 and 321." },
    { q: "A number rounded to the nearest ten is 60. What is the smallest whole number it could be?", a: "55, because numbers from 55 to 64 round to 60." },
  ],
  revisionNotes: [
    "More digits ⇒ larger number; else compare from the left.",
    "Largest number: big digits first; smallest: small digits first (no leading 0).",
    "Find the rule before extending a pattern.",
    "Estimate by rounding to tens, hundreds, etc.",
  ],
  keyTakeaways: [
    "Number play builds reasoning, not just calculation.",
    "Order and arrangement of digits change a number's value.",
    "Estimation is a quick reasonableness check.",
  ],
  faq: [
    { q: "What is ascending order?", a: "Numbers arranged from smallest to largest." },
    { q: "How do I round to the nearest ten?", a: "Look at the ones digit: 5 or more rounds up, less than 5 rounds down." },
    { q: "What is a successor?", a: "The number one more than the given number." },
  ],
  related: [
    { classId: "6", subject: "maths", slug: "patterns-in-mathematics" },
    { classId: "6", subject: "maths", slug: "prime-time" },
  ],
};

export default chapter;
