import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "7",
  subject: "maths",
  slug: "number-play",
  title: "Number Play",
  order: 6,
  seoTitle: "Number Play Class 7 Maths (Ganita Prakash) — Number Patterns & MCQs",
  metaDescription:
    "Class 7 Maths Number Play (Ganita Prakash): patterns in numbers, digit puzzles, palindromes, properties of numbers and playful reasoning, building number sense and logical thinking, with examples and an MCQ quiz.",
  overview:
    "Numbers hide surprising patterns and puzzles. This Class 7 Ganita Prakash chapter plays with numbers — spotting and continuing patterns, exploring palindromes and digit puzzles, and reasoning about number properties — to sharpen number sense and logical thinking rather than rote calculation.",
  objectives: [
    "Spot and extend number patterns.",
    "Explore palindromes and digit puzzles.",
    "Reason about properties of numbers.",
    "Use logic to solve number games.",
  ],
  concepts: [
    {
      heading: "Patterns in numbers",
      body: "Many number sequences follow a rule we can discover and continue. Some grow by adding a fixed amount (2, 5, 8, 11…), others by multiplying (1, 2, 4, 8…), and some come from shapes, like the square numbers 1, 4, 9, 16. Finding the rule lets us predict any term.",
    },
    {
      heading: "Palindromes and digit puzzles",
      body: "A palindrome reads the same forwards and backwards, like 121 or 1331. Reversing a number and adding it to the original, repeated a few times, often produces a palindrome. Such digit puzzles reveal how the positions of digits affect a number.",
    },
    {
      heading: "Properties of numbers",
      body: "Numbers can be even or odd, and patterns appear in how they behave: the sum of two odd numbers is even, an even number times any number is even, and the digits of multiples of 9 add up to a multiple of 9. Noticing such properties helps in quick checking.",
    },
    {
      heading: "Reasoning and number games",
      body: "Number play is really about reasoning. Puzzles like 'find the missing number' or 'make the target using these digits' are solved by thinking logically about what must be true, not by guessing. This kind of thinking is the heart of mathematics.",
    },
  ],
  formulas: [
    { name: "Even + even / odd + odd", formula: "= even; odd + even = odd" },
    { name: "Divisibility by 9", formula: "digit sum is a multiple of 9" },
  ],
  definitions: [
    { term: "Pattern", meaning: "An arrangement of numbers following a rule." },
    { term: "Palindrome", meaning: "A number that reads the same forwards and backwards." },
    { term: "Even number", meaning: "A whole number exactly divisible by 2." },
    { term: "Digit sum", meaning: "The sum of all digits of a number." },
  ],
  examples: [
    {
      problem: "Is 1331 a palindrome?",
      solution: "Yes, it reads the same forwards and backwards.",
    },
    {
      problem: "Find the next number: 2, 6, 12, 20, ___.",
      solution: "Differences grow 4, 6, 8…, so add 10: 30.",
    },
    {
      problem: "Is the sum of two odd numbers even or odd?",
      solution: "Even (e.g. 3 + 5 = 8).",
    },
  ],
  commonMistakes: [
    "Guessing the next term instead of finding the rule.",
    "Thinking every number reversed is a palindrome.",
    "Assuming odd + odd is odd (it is even).",
    "Forgetting the order of digits changes a number's value.",
  ],
  mcqs: [
    { id: "n7a", difficulty: "easy", q: "A number that reads the same both ways is a:", options: ["multiple", "factor", "palindrome", "prime"], answer: 2, explanation: "Such a number is a palindrome." },
    { id: "n7b", difficulty: "easy", q: "The next number in 3, 6, 9, 12, ___ is:", options: ["14", "16", "18", "15"], answer: 3, explanation: "Add 3 each time: 15." },
    { id: "n7c", difficulty: "medium", q: "The sum of two odd numbers is always:", options: ["even", "odd", "prime", "zero"], answer: 0, explanation: "Odd + odd = even." },
    { id: "n7d", difficulty: "medium", q: "Which of these is a palindrome?", options: ["123", "242", "150", "201"], answer: 1, explanation: "242 reads the same both ways." },
    { id: "n7e", difficulty: "easy", q: "An even number is exactly divisible by:", options: ["3", "5", "2", "7"], answer: 2, explanation: "Even numbers are divisible by 2." },
    { id: "n7f", difficulty: "medium", q: "The next term in 1, 4, 9, 16, ___ is:", options: ["20", "24", "30", "25"], answer: 3, explanation: "Square numbers: 5 × 5 = 25." },
    { id: "n7g", difficulty: "hard", q: "The digit sum of any multiple of 9 is:", options: ["a multiple of 9", "always 9", "always even", "always odd"], answer: 0, explanation: "It is a multiple of 9 (e.g. 18 → 9, 99 → 18)." },
    { id: "n7h", difficulty: "easy", q: "An even number multiplied by any whole number is:", options: ["odd", "even", "prime", "zero"], answer: 1, explanation: "The product is always even." },
    { id: "n7i", difficulty: "medium", q: "In 2, 5, 8, 11, the rule is:", options: ["multiply by 2", "add 2", "add 3", "square"], answer: 2, explanation: "Each term is 3 more than the last." },
    { id: "n7j", difficulty: "hard", q: "Reversing 132 and adding gives 132 + 231 = 363, which is a:", options: ["prime", "multiple of 10", "square", "palindrome"], answer: 3, explanation: "363 reads the same both ways." },
  ],
  shortQuestions: [
    { q: "What is a palindrome?", a: "A number that reads the same forwards and backwards, like 121." },
    { q: "Is the sum of two even numbers even or odd?", a: "Even." },
    { q: "How do you find the rule of a pattern?", a: "Compare each term with the previous one to see how it changes." },
  ],
  longQuestions: [
    { q: "Explain how to discover the rule of a number pattern, using 2, 6, 12, 20.", a: "To find a pattern's rule, we look at how each term relates to the one before it. In 2, 6, 12, 20, the differences between terms are 4, 6 and 8 — themselves increasing by 2 each time. So the next difference should be 10, giving 20 + 10 = 30, and the one after that 12, giving 42. By describing how the terms change rather than guessing, we can extend the pattern reliably and even predict far-off terms." },
    { q: "Describe some properties of even and odd numbers with examples.", a: "Even numbers are exactly divisible by 2 (like 2, 4, 6), while odd numbers are not (like 1, 3, 5). These behave in predictable ways when combined: the sum of two even numbers is even (4 + 6 = 10), the sum of two odd numbers is also even (3 + 5 = 8), but the sum of an odd and an even number is odd (3 + 4 = 7). Also, an even number multiplied by any whole number stays even. Noticing such properties lets us quickly check whether an answer is reasonable without full calculation." },
  ],
  hots: [
    { q: "Using the digits 1, 2 and 3 once each, what is the largest 3-digit palindrome you can make? Explain.", a: "None — a palindrome needs its first and last digits equal, but 1, 2, 3 are all different, so no palindrome is possible." },
    { q: "Without adding, is 23 + 19 odd or even? Why?", a: "Even, because the sum of two odd numbers is always even." },
  ],
  revisionNotes: [
    "Find a pattern's rule, then extend it.",
    "Palindrome: reads the same both ways (121, 1331).",
    "odd + odd = even; even + even = even; odd + even = odd.",
    "Digit sum of a multiple of 9 is a multiple of 9.",
  ],
  keyTakeaways: [
    "Number play builds reasoning, not just calculation.",
    "Patterns and properties make numbers predictable.",
    "Logic beats guessing in number puzzles.",
  ],
  faq: [
    { q: "What is a palindrome number?", a: "A number that reads the same forwards and backwards." },
    { q: "Is odd plus odd even?", a: "Yes, the sum of two odd numbers is always even." },
    { q: "How do I continue a number pattern?", a: "Find the rule connecting the terms, then apply it." },
  ],
  related: [
    { classId: "7", subject: "maths", slug: "large-numbers-around-us" },
    { classId: "8", subject: "maths", slug: "number-play" },
  ],
};

export default chapter;
