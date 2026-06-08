import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "8",
  subject: "maths",
  slug: "number-play",
  title: "Number Play",
  order: 5,
  seoTitle: "Number Play Class 8 Maths (Ganita Prakash) — Factors, Primes & Divisibility, MCQs",
  metaDescription:
    "Class 8 Maths Number Play (Ganita Prakash): factors and multiples, prime and composite numbers, divisibility rules, HCF and LCM, and number patterns, with solved examples and an MCQ quiz.",
  overview:
    "“Number Play” explores the patterns and properties hidden inside whole numbers. This Class 8 chapter revisits factors and multiples, prime and composite numbers, handy divisibility rules, and the ideas of HCF and LCM, using puzzles and patterns to build a feel for how numbers behave.",
  objectives: [
    "Find factors and multiples of numbers.",
    "Identify prime and composite numbers.",
    "Apply divisibility rules for 2, 3, 4, 5, 9 and 10.",
    "Find the HCF and LCM of numbers.",
  ],
  concepts: [
    {
      heading: "Factors and multiples",
      body: "A factor of a number divides it exactly with no remainder, while a multiple is got by multiplying the number by a whole number. So 1, 2, 3 and 6 are factors of 6, and 6, 12, 18 are multiples of 6. Every number is a factor of itself and a multiple of 1.",
    },
    {
      heading: "Prime and composite numbers",
      body: "A prime number has exactly two factors, 1 and itself (2, 3, 5, 7, 11…), while a composite number has more than two factors (4, 6, 8, 9…). The number 1 is neither prime nor composite, and 2 is the only even prime. Any composite number can be written as a product of primes.",
    },
    {
      heading: "Divisibility rules",
      body: "Divisibility rules let us test factors quickly: a number is divisible by 2 if it ends in an even digit; by 5 if it ends in 0 or 5; by 10 if it ends in 0; by 3 or 9 if the sum of its digits is divisible by 3 or 9; and by 4 if its last two digits form a number divisible by 4.",
    },
    {
      heading: "HCF and LCM",
      body: "The Highest Common Factor (HCF) is the largest number that divides two or more numbers, and the Lowest Common Multiple (LCM) is the smallest number that is a multiple of all of them. Both can be found using prime factorisation, and for any two numbers, HCF × LCM = product of the numbers.",
    },
  ],
  formulas: [
    { name: "Divisible by 3 / 9", formula: "if the digit sum is divisible by 3 / 9" },
    { name: "Divisible by 4", formula: "if the last two digits form a multiple of 4" },
    { name: "HCF–LCM relation", formula: "HCF × LCM = product of the two numbers" },
  ],
  definitions: [
    { term: "Factor", meaning: "A number that divides another exactly, leaving no remainder." },
    { term: "Multiple", meaning: "A number obtained by multiplying a given number by a whole number." },
    { term: "Prime number", meaning: "A number with exactly two factors: 1 and itself." },
    { term: "HCF", meaning: "The Highest Common Factor — the largest number dividing two or more numbers." },
  ],
  examples: [
    {
      problem: "Is 4128 divisible by 4?",
      solution: "The last two digits form 28, and 28 ÷ 4 = 7, so yes, 4128 is divisible by 4.",
    },
    {
      problem: "Find the HCF of 12 and 18.",
      solution: "12 = 2×2×3, 18 = 2×3×3. Common factors 2 and 3 give HCF = 2×3 = 6.",
    },
    {
      problem: "Is 91 prime or composite?",
      solution: "91 = 7 × 13, so it has more than two factors; it is composite.",
    },
  ],
  commonMistakes: [
    "Calling 1 a prime number — it is neither prime nor composite.",
    "Confusing factors (divide the number) with multiples (the number divides them).",
    "Forgetting 2 is prime because it is even.",
    "Mixing up HCF (largest divisor) with LCM (smallest common multiple).",
  ],
  mcqs: [
    { id: "np1", difficulty: "easy", q: "How many factors does a prime number have?", options: ["two", "one", "three", "many"], answer: 0, explanation: "A prime has exactly two factors: 1 and itself." },
    { id: "np2", difficulty: "easy", q: "Which is a multiple of 7?", options: ["27", "35", "17", "42 and 35"], answer: 3, explanation: "Both 35 (7×5) and 42 (7×6) are multiples of 7." },
    { id: "np3", difficulty: "medium", q: "A number is divisible by 3 if:", options: ["it is even", "it ends in 3", "its digit sum is divisible by 3", "it ends in 0"], answer: 2, explanation: "The digit-sum rule decides divisibility by 3." },
    { id: "np4", difficulty: "easy", q: "Which number is neither prime nor composite?", options: ["0", "3", "2", "1"], answer: 3, explanation: "1 is neither prime nor composite." },
    { id: "np5", difficulty: "medium", q: "The only even prime number is:", options: ["2", "4", "6", "8"], answer: 0, explanation: "2 is the only even prime." },
    { id: "np6", difficulty: "medium", q: "The HCF of 8 and 12 is:", options: ["2", "24", "4", "6"], answer: 2, explanation: "Common factors give HCF = 4." },
    { id: "np7", difficulty: "hard", q: "The LCM of 4 and 6 is:", options: ["24", "12", "10", "2"], answer: 1, explanation: "Smallest common multiple of 4 and 6 is 12." },
    { id: "np8", difficulty: "easy", q: "A number ending in 0 is divisible by:", options: ["3 only", "9 only", "10", "7"], answer: 2, explanation: "Numbers ending in 0 are divisible by 10." },
    { id: "np9", difficulty: "medium", q: "Which is a composite number?", options: ["13", "17", "23", "9"], answer: 3, explanation: "9 = 3×3, more than two factors, so composite." },
    { id: "np10", difficulty: "hard", q: "If HCF × LCM = 72 and HCF = 6, the product of the numbers is:", options: ["12", "72", "78", "432"], answer: 1, explanation: "HCF × LCM equals the product of the numbers, so it is 72." },
  ],
  shortQuestions: [
    { q: "State the divisibility rule for 9.", a: "A number is divisible by 9 if the sum of its digits is divisible by 9." },
    { q: "What is the difference between a factor and a multiple?", a: "A factor divides the number exactly; a multiple is obtained by multiplying the number by a whole number." },
    { q: "Write the prime factorisation of 60.", a: "60 = 2 × 2 × 3 × 5." },
  ],
  longQuestions: [
    { q: "Explain how to find the HCF and LCM of 12 and 18 by prime factorisation.", a: "Write each as primes: 12 = 2×2×3 and 18 = 2×3×3. For the HCF, take the common prime factors with the lowest powers: one 2 and one 3, giving HCF = 6. For the LCM, take all prime factors with the highest powers: 2×2 from 12 and 3×3 from 18, giving LCM = 2×2×3×3 = 36. Check: HCF × LCM = 6 × 36 = 216 = 12 × 18." },
    { q: "List the divisibility rules for 2, 3, 4, 5, 9 and 10 with an example each.", a: "Divisible by 2 if it ends in an even digit (e.g. 48). By 5 if it ends in 0 or 5 (e.g. 65). By 10 if it ends in 0 (e.g. 120). By 3 if the digit sum is divisible by 3 (e.g. 51, since 5+1=6). By 9 if the digit sum is divisible by 9 (e.g. 153, since 1+5+3=9). By 4 if the last two digits form a multiple of 4 (e.g. 316, since 16 is divisible by 4)." },
  ],
  hots: [
    { q: "A number is divisible by both 2 and 3. What other number must divide it, and why?", a: "It must be divisible by 6, because 6 = 2 × 3 and the number contains both factors." },
    { q: "Why does every composite number have at least one prime factor?", a: "A composite number can be broken into smaller factors repeatedly; this process stops at primes, so the original number is built from prime factors." },
  ],
  revisionNotes: [
    "Factor divides exactly; multiple is the number times a whole number.",
    "Prime: two factors; composite: more than two; 1 is neither.",
    "Divisibility: 2 (even), 5 (0/5), 10 (0), 3 & 9 (digit sum), 4 (last two digits).",
    "HCF = largest common factor, LCM = smallest common multiple; HCF × LCM = product.",
  ],
  keyTakeaways: [
    "Divisibility rules speed up finding factors.",
    "Prime factorisation underlies HCF and LCM.",
    "2 is the only even prime; 1 is neither prime nor composite.",
  ],
  faq: [
    { q: "Is 1 a prime number?", a: "No — it has only one factor, so it is neither prime nor composite." },
    { q: "How do I quickly test divisibility by 3?", a: "Add the digits; if the sum is divisible by 3, so is the number." },
    { q: "What is the relation between HCF and LCM?", a: "For two numbers, HCF × LCM equals the product of the numbers." },
  ],
  related: [
    { classId: "8", subject: "maths", slug: "a-story-of-numbers" },
    { classId: "8", subject: "maths", slug: "a-square-and-a-cube" },
  ],
};

export default chapter;
