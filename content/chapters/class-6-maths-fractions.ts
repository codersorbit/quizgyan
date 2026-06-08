import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "6",
  subject: "maths",
  slug: "fractions",
  title: "Fractions",
  order: 7,
  seoTitle: "Fractions Class 6 Maths (Ganita Prakash) — Notes, Types & MCQs",
  metaDescription:
    "Class 6 Maths Fractions (Ganita Prakash): fractions as parts of a whole, proper, improper and mixed fractions, equivalent fractions, comparing fractions, and adding and subtracting like fractions, with examples and an MCQ quiz.",
  overview:
    "A fraction describes a part of a whole or of a group. This Class 6 Ganita Prakash chapter explains what the numerator and denominator mean, sorts fractions into proper, improper and mixed, and shows how to find equivalent fractions, compare them, and add or subtract fractions with the same denominator.",
  objectives: [
    "Read a fraction as a part of a whole.",
    "Classify fractions as proper, improper or mixed.",
    "Find equivalent fractions and compare fractions.",
    "Add and subtract like fractions.",
  ],
  concepts: [
    {
      heading: "What a fraction means",
      body: "A fraction such as ¾ has a denominator (bottom number) telling how many equal parts the whole is divided into, and a numerator (top number) telling how many of those parts are taken. So ¾ means 3 of 4 equal parts. Fractions can also be shown as points on a number line between 0 and 1.",
    },
    {
      heading: "Types of fractions",
      body: "A proper fraction has a numerator smaller than its denominator (like ⅖), so it is less than one. An improper fraction has a numerator equal to or larger than its denominator (like 7/4), so it is one or more. A mixed number combines a whole number and a proper fraction, like 1¾, which equals 7/4.",
    },
    {
      heading: "Equivalent fractions",
      body: "Different fractions can name the same value; ½, 2/4 and 3/6 are all equivalent. We get an equivalent fraction by multiplying or dividing both the numerator and denominator by the same number. Dividing by the largest common factor gives the simplest form.",
    },
    {
      heading: "Comparing, adding and subtracting like fractions",
      body: "Fractions with the same denominator are called like fractions; the one with the larger numerator is greater. To add or subtract like fractions, keep the denominator and add or subtract only the numerators, so 2/5 + 1/5 = 3/5.",
    },
  ],
  formulas: [
    { name: "Equivalent fraction", formula: "multiply or divide top and bottom by the same number" },
    { name: "Adding like fractions", formula: "a/d + b/d = (a + b)/d" },
    { name: "Mixed to improper", formula: "whole × denominator + numerator, over denominator" },
  ],
  definitions: [
    { term: "Numerator", meaning: "The top number of a fraction; the parts taken." },
    { term: "Denominator", meaning: "The bottom number; the total equal parts in the whole." },
    { term: "Proper fraction", meaning: "A fraction less than one, with numerator below denominator." },
    { term: "Equivalent fractions", meaning: "Different fractions that represent the same value." },
  ],
  examples: [
    {
      problem: "Is 5/8 a proper or improper fraction?",
      solution: "Proper — the numerator 5 is less than the denominator 8.",
    },
    {
      problem: "Write a fraction equivalent to ½ with denominator 6.",
      solution: "Multiply top and bottom by 3: ½ = 3/6.",
    },
    {
      problem: "Add 3/7 + 2/7.",
      solution: "Same denominator, so add numerators: (3 + 2)/7 = 5/7.",
    },
  ],
  commonMistakes: [
    "Adding denominators as well as numerators when adding like fractions.",
    "Thinking a larger denominator always means a larger fraction.",
    "Changing only the numerator when making an equivalent fraction.",
    "Confusing a proper fraction with an improper one.",
  ],
  mcqs: [
    { id: "fr1", difficulty: "easy", q: "In the fraction 3/8, the number 8 is the:", options: ["numerator", "denominator", "whole", "remainder"], answer: 1, explanation: "The bottom number is the denominator." },
    { id: "fr2", difficulty: "easy", q: "Which is a proper fraction?", options: ["7/4", "5/5", "2/9", "9/2"], answer: 2, explanation: "2/9 has numerator less than denominator." },
    { id: "fr3", difficulty: "medium", q: "A fraction equivalent to ½ is:", options: ["2/4", "1/3", "3/4", "2/3"], answer: 0, explanation: "½ = 2/4." },
    { id: "fr4", difficulty: "medium", q: "2/5 + 1/5 equals:", options: ["3/10", "2/10", "1/5", "3/5"], answer: 3, explanation: "Add numerators: (2 + 1)/5 = 3/5." },
    { id: "fr5", difficulty: "easy", q: "An improper fraction is one where the numerator is:", options: ["equal to or greater than the denominator", "always 1", "less than the denominator", "always 0"], answer: 0, explanation: "Improper: numerator ≥ denominator." },
    { id: "fr6", difficulty: "medium", q: "The mixed number 1¾ as an improper fraction is:", options: ["4/7", "7/4", "3/4", "11/4"], answer: 1, explanation: "1 × 4 + 3 = 7, so 7/4." },
    { id: "fr7", difficulty: "hard", q: "The simplest form of 6/9 is:", options: ["3/9", "6/3", "2/3", "9/6"], answer: 2, explanation: "Divide top and bottom by 3: 2/3." },
    { id: "fr8", difficulty: "easy", q: "Which fraction is the largest?", options: ["1/4", "3/4", "2/4", "0/4"], answer: 1, explanation: "Same denominator: largest numerator (3) wins." },
    { id: "fr9", difficulty: "medium", q: "5/6 − 2/6 equals:", options: ["3/0", "7/6", "3/12", "3/6"], answer: 3, explanation: "Subtract numerators: (5 − 2)/6 = 3/6." },
    { id: "fr10", difficulty: "hard", q: "Which set are all equivalent fractions?", options: ["½, ⅓, ¼", "½, 2/4, 4/8", "1/2, 2/3, 3/4", "2/4, 3/5, 4/6"], answer: 1, explanation: "½ = 2/4 = 4/8, all equal." },
  ],
  shortQuestions: [
    { q: "What do the numerator and denominator of a fraction tell us?", a: "The denominator is the number of equal parts in the whole; the numerator is how many parts are taken." },
    { q: "How do you add two like fractions?", a: "Keep the common denominator and add the numerators." },
    { q: "Give a fraction equivalent to ⅓.", a: "2/6 (multiply top and bottom by 2)." },
  ],
  longQuestions: [
    { q: "Describe proper, improper and mixed fractions with an example of each.", a: "A proper fraction has its numerator smaller than its denominator, so it is less than one — for example ⅗. An improper fraction has its numerator equal to or greater than its denominator, so it is one or more — for example 9/4. A mixed number is written as a whole number together with a proper fraction, such as 2¼, which can be changed to the improper fraction 9/4 by computing 2 × 4 + 1 = 9 over 4. These three forms are simply different ways of writing fractional amounts." },
    { q: "Explain how equivalent fractions are formed and used to compare ½ and ⅗.", a: "An equivalent fraction names the same value and is formed by multiplying (or dividing) the numerator and denominator by the same number. To compare ½ and ⅗, rewrite them with a common denominator of 10: ½ = 5/10 and ⅗ = 6/10. Now both have the same denominator, so we compare numerators — 6/10 is greater than 5/10, which means ⅗ is greater than ½." },
  ],
  hots: [
    { q: "Without drawing, which is larger, 3/4 or 5/8? Explain.", a: "Write 3/4 as 6/8. Comparing 6/8 and 5/8 with the same denominator, 6/8 is larger, so 3/4 is greater than 5/8." },
    { q: "A pizza is cut into 8 equal slices and 3 are eaten. What fraction is left, in simplest form?", a: "5 of 8 slices remain, which is 5/8 — already in simplest form." },
  ],
  revisionNotes: [
    "Fraction = numerator (parts taken) over denominator (equal parts).",
    "Proper < 1; improper ≥ 1; mixed = whole + proper.",
    "Equivalent fractions: multiply/divide top and bottom by the same number.",
    "Like fractions: add/subtract numerators, keep the denominator.",
  ],
  keyTakeaways: [
    "A fraction is a part of a whole or of a group.",
    "Equivalent fractions name the same value.",
    "Like fractions are added by adding numerators only.",
  ],
  faq: [
    { q: "What is a proper fraction?", a: "A fraction whose numerator is smaller than its denominator, so its value is less than one." },
    { q: "How do I make an equivalent fraction?", a: "Multiply or divide both the numerator and denominator by the same number." },
    { q: "How do I add fractions with the same denominator?", a: "Add the numerators and keep the denominator unchanged." },
  ],
  related: [
    { classId: "6", subject: "maths", slug: "prime-time" },
    { classId: "8", subject: "maths", slug: "fractions-in-disguise" },
  ],
};

export default chapter;
