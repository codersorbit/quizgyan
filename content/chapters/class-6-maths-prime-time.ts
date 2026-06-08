import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "6",
  subject: "maths",
  slug: "prime-time",
  title: "Prime Time",
  order: 5,
  seoTitle: "Prime Time Class 6 Maths (Ganita Prakash) — Factors, Primes Notes & MCQs",
  metaDescription:
    "Class 6 Maths Prime Time (Ganita Prakash): factors and multiples, prime and composite numbers, prime factorisation, common factors and multiples, co-primes and divisibility, with examples and an MCQ quiz.",
  overview:
    "This Class 6 Ganita Prakash chapter explores the building blocks of numbers. Students meet factors and multiples, learn to tell prime numbers from composite ones, break numbers into their prime factors, and find common factors and multiples shared by two numbers.",
  objectives: [
    "Find the factors and multiples of a number.",
    "Identify prime and composite numbers.",
    "Write a number as a product of prime factors.",
    "Find common factors and common multiples.",
  ],
  concepts: [
    {
      heading: "Factors and multiples",
      body: "A factor of a number divides it exactly with no remainder, so the factors of 12 are 1, 2, 3, 4, 6 and 12. A multiple is the result of multiplying a number by 1, 2, 3 and so on, so the multiples of 4 are 4, 8, 12, 16…. Every number is both a factor of itself and a multiple of itself.",
    },
    {
      heading: "Prime and composite numbers",
      body: "A prime number has exactly two factors — 1 and itself, such as 2, 3, 5, 7 and 11. A composite number has more than two factors, such as 4, 6, 8 and 9. The number 1 is neither prime nor composite because it has only one factor, and 2 is the only even prime.",
    },
    {
      heading: "Prime factorisation",
      body: "Every composite number can be written as a product of prime numbers, called its prime factorisation. For example 12 = 2 × 2 × 3 and 30 = 2 × 3 × 5. This unique 'prime fingerprint' is found by repeatedly dividing by the smallest possible prime.",
    },
    {
      heading: "Common factors and multiples",
      body: "A common factor divides two numbers exactly; for 12 and 18 the common factors are 1, 2, 3 and 6. A common multiple is a multiple of both numbers; for 4 and 6 the smallest is 12. Two numbers whose only common factor is 1 are called co-prime.",
    },
  ],
  formulas: [
    { name: "Prime number", formula: "exactly 2 factors: 1 and itself" },
    { name: "Composite number", formula: "more than 2 factors" },
    { name: "Multiple", formula: "multiple of n = n × 1, n × 2, n × 3, …" },
  ],
  definitions: [
    { term: "Factor", meaning: "A number that divides another exactly, leaving no remainder." },
    { term: "Multiple", meaning: "The product of a number with a whole number." },
    { term: "Prime number", meaning: "A number with exactly two factors, 1 and itself." },
    { term: "Co-prime numbers", meaning: "Two numbers whose only common factor is 1." },
  ],
  examples: [
    {
      problem: "List all factors of 18.",
      solution: "1, 2, 3, 6, 9 and 18.",
    },
    {
      problem: "Is 15 prime or composite?",
      solution: "Composite — its factors are 1, 3, 5 and 15 (more than two).",
    },
    {
      problem: "Write the prime factorisation of 36.",
      solution: "36 = 2 × 2 × 3 × 3.",
    },
  ],
  commonMistakes: [
    "Calling 1 a prime number (it has only one factor).",
    "Confusing factors (divide into) with multiples (built up from).",
    "Stopping prime factorisation before all factors are prime.",
    "Thinking all odd numbers are prime (9 and 15 are not).",
  ],
  mcqs: [
    { id: "pt1", difficulty: "easy", q: "Which of these is a prime number?", options: ["9", "15", "7", "21"], answer: 2, explanation: "7 has only the factors 1 and 7." },
    { id: "pt2", difficulty: "easy", q: "A factor of a number divides it leaving:", options: ["a remainder of 1", "no remainder", "a remainder of 2", "a decimal"], answer: 1, explanation: "A factor divides exactly, no remainder." },
    { id: "pt3", difficulty: "medium", q: "How many factors does a prime number have?", options: ["one", "three", "two", "many"], answer: 2, explanation: "Exactly two: 1 and itself." },
    { id: "pt4", difficulty: "medium", q: "The prime factorisation of 12 is:", options: ["2 × 2 × 3", "2 × 6", "3 × 4", "2 × 3 × 3"], answer: 0, explanation: "12 = 2 × 2 × 3." },
    { id: "pt5", difficulty: "easy", q: "The third multiple of 5 is:", options: ["10", "5", "20", "15"], answer: 3, explanation: "5 × 3 = 15." },
    { id: "pt6", difficulty: "medium", q: "Which number is neither prime nor composite?", options: ["1", "2", "3", "4"], answer: 0, explanation: "1 has only one factor." },
    { id: "pt7", difficulty: "hard", q: "The smallest common multiple of 4 and 6 is:", options: ["24", "12", "18", "8"], answer: 1, explanation: "12 is a multiple of both 4 and 6." },
    { id: "pt8", difficulty: "easy", q: "The only even prime number is:", options: ["2", "4", "6", "8"], answer: 0, explanation: "2 is the only even prime." },
    { id: "pt9", difficulty: "medium", q: "Numbers whose only common factor is 1 are called:", options: ["prime", "composite", "co-prime", "multiples"], answer: 2, explanation: "Such numbers are co-prime." },
    { id: "pt10", difficulty: "hard", q: "A common factor of 12 and 18 is:", options: ["5", "4", "8", "6"], answer: 3, explanation: "6 divides both 12 and 18." },
  ],
  shortQuestions: [
    { q: "What is the difference between a factor and a multiple?", a: "A factor divides a number exactly; a multiple is built by multiplying the number." },
    { q: "Why is 1 neither prime nor composite?", a: "Because it has only one factor (itself), not two or more." },
    { q: "Write the prime factorisation of 20.", a: "20 = 2 × 2 × 5." },
  ],
  longQuestions: [
    { q: "Explain prime and composite numbers with examples, and say where 1 fits.", a: "A prime number has exactly two factors, 1 and itself, such as 2, 3, 5 and 7. A composite number has more than two factors, such as 6 (1, 2, 3, 6) or 9 (1, 3, 9). The number 1 is special: it has only one factor, itself, so it is neither prime nor composite. Note also that 2 is the only even prime number, since every other even number is divisible by 2 and so has more than two factors." },
    { q: "How do you find the prime factorisation of a number? Use 60 as an example.", a: "Repeatedly divide the number by the smallest prime that goes into it, until you are left with 1. For 60: divide by 2 to get 30, by 2 again to get 15, by 3 to get 5, and by 5 to get 1. Collecting the primes used gives 60 = 2 × 2 × 3 × 5. Every composite number has exactly one such prime factorisation, which acts like its fingerprint." },
  ],
  hots: [
    { q: "Two numbers are co-prime. Must either of them be prime? Explain.", a: "No. For example 8 and 9 are co-prime (their only common factor is 1), yet neither 8 nor 9 is a prime number." },
    { q: "What is the smallest number with exactly three different prime factors?", a: "2 × 3 × 5 = 30." },
  ],
  revisionNotes: [
    "Factor divides exactly; multiple = number × 1, 2, 3…",
    "Prime: 2 factors; composite: more than 2; 1 is neither.",
    "Prime factorisation = product of primes (e.g., 12 = 2 × 2 × 3).",
    "Co-prime numbers share only the factor 1.",
  ],
  keyTakeaways: [
    "Primes are the building blocks of all numbers.",
    "Every composite number has a unique prime factorisation.",
    "1 is neither prime nor composite; 2 is the only even prime.",
  ],
  faq: [
    { q: "What is a prime number?", a: "A number with exactly two factors: 1 and itself." },
    { q: "Is 1 a prime number?", a: "No, 1 has only one factor, so it is neither prime nor composite." },
    { q: "What does prime factorisation mean?", a: "Writing a number as a product of prime numbers, like 30 = 2 × 3 × 5." },
  ],
  related: [
    { classId: "6", subject: "maths", slug: "number-play" },
    { classId: "8", subject: "maths", slug: "number-play" },
  ],
};

export default chapter;
