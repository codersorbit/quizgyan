import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "8",
  subject: "maths",
  slug: "power-play",
  title: "Power Play",
  order: 2,
  seoTitle: "Power Play Class 8 Maths (Ganita Prakash) — Exponents & Powers Notes, MCQs",
  metaDescription:
    "Class 8 Maths Power Play (Ganita Prakash): exponents and powers, laws of exponents, zero and negative exponents, expressing large and small numbers in standard form, solved examples and an MCQ quiz.",
  overview:
    "“Power Play” is the Class 8 Ganita Prakash chapter on exponents and powers. An exponent is a short way of writing repeated multiplication: 2 × 2 × 2 = 2³. This chapter builds the laws of exponents, extends them to zero and negative exponents, and uses powers of ten to write very large and very small numbers neatly in standard form.",
  objectives: [
    "Read and write numbers in exponential (power) form.",
    "Apply the laws of exponents to simplify expressions.",
    "Interpret zero and negative exponents.",
    "Express very large and very small numbers in standard form.",
  ],
  concepts: [
    {
      heading: "Exponents and base",
      body: "In aⁿ, a is the base and n is the exponent or power, and it means a multiplied by itself n times. For example 10³ = 10 × 10 × 10 = 1000. Powers let us write long repeated products compactly.",
    },
    {
      heading: "Laws of exponents",
      body: "For the same base, aᵐ × aⁿ = aᵐ⁺ⁿ and aᵐ ÷ aⁿ = aᵐ⁻ⁿ. A power raised to a power multiplies the exponents, (aᵐ)ⁿ = aᵐⁿ, and a shared exponent distributes over a product, aᵐ × bᵐ = (ab)ᵐ. These rules let us simplify without expanding everything.",
    },
    {
      heading: "Zero and negative exponents",
      body: "Any non-zero number to the power zero equals 1, so a⁰ = 1. A negative exponent means a reciprocal: a⁻ⁿ = 1 ÷ aⁿ. For example 2⁻³ = 1/2³ = 1/8. The same laws of exponents continue to hold for negative powers.",
    },
    {
      heading: "Standard form (powers of ten)",
      body: "A number written as k × 10ⁿ, where k is between 1 and 10, is in standard form. Large numbers use positive powers (3 × 10⁸) and small numbers use negative powers (5 × 10⁻⁶). This makes very big and very small measurements easy to compare and write.",
    },
  ],
  formulas: [
    { name: "Product law", formula: "aᵐ × aⁿ = aᵐ⁺ⁿ" },
    { name: "Quotient law", formula: "aᵐ ÷ aⁿ = aᵐ⁻ⁿ" },
    { name: "Power of a power", formula: "(aᵐ)ⁿ = aᵐⁿ" },
    { name: "Power of a product", formula: "aᵐ × bᵐ = (ab)ᵐ" },
    { name: "Zero exponent", formula: "a⁰ = 1 (a ≠ 0)" },
    { name: "Negative exponent", formula: "a⁻ⁿ = 1 ÷ aⁿ" },
  ],
  definitions: [
    { term: "Exponent", meaning: "The number of times the base is multiplied by itself, written as a small raised number." },
    { term: "Base", meaning: "The number that is repeatedly multiplied in a power." },
    { term: "Standard form", meaning: "A number written as k × 10ⁿ with 1 ≤ k < 10, used for very large or very small numbers." },
    { term: "Reciprocal", meaning: "1 divided by a number; a negative exponent gives the reciprocal of the positive power." },
  ],
  examples: [
    {
      problem: "Simplify 2³ × 2⁴.",
      solution: "Same base, so add exponents: 2³⁺⁴ = 2⁷ = 128.",
    },
    {
      problem: "Evaluate 5⁻².",
      solution: "A negative exponent gives the reciprocal: 5⁻² = 1/5² = 1/25.",
    },
    {
      problem: "Write 0.000072 in standard form.",
      solution: "Move the decimal 5 places right to get 7.2, so 0.000072 = 7.2 × 10⁻⁵.",
    },
    {
      problem: "Simplify (3²)³.",
      solution: "Power of a power multiplies exponents: 3²ˣ³ = 3⁶ = 729.",
    },
  ],
  commonMistakes: [
    "Adding the bases instead of keeping the base and adding exponents (2³ × 2⁴ = 2⁷, not 4⁷).",
    "Thinking a⁰ = 0; for any non-zero a, a⁰ = 1.",
    "Reading a negative exponent as a negative number rather than a reciprocal.",
    "Writing standard form with k outside the range 1 ≤ k < 10 (e.g. 35 × 10⁶ instead of 3.5 × 10⁷).",
  ],
  mcqs: [
    { id: "pp1", difficulty: "easy", q: "In 7⁴, the number 4 is called the:", options: ["base", "exponent", "product", "factor"], answer: 1, explanation: "The raised number is the exponent (power)." },
    { id: "pp2", difficulty: "easy", q: "2³ × 2² equals:", options: ["2⁵", "2⁶", "4⁵", "2¹"], answer: 0, explanation: "Same base: add exponents, 2³⁺² = 2⁵." },
    { id: "pp3", difficulty: "medium", q: "The value of 10⁰ is:", options: ["0", "10", "1", "undefined"], answer: 2, explanation: "Any non-zero number to the power 0 is 1." },
    { id: "pp4", difficulty: "medium", q: "3⁻² is equal to:", options: ["−9", "1/9", "9", "−6"], answer: 1, explanation: "3⁻² = 1/3² = 1/9." },
    { id: "pp5", difficulty: "medium", q: "(2³)² equals:", options: ["2⁵", "2⁶", "2⁹", "4⁶"], answer: 1, explanation: "Power of a power multiplies exponents: 2³ˣ² = 2⁶." },
    { id: "pp6", difficulty: "easy", q: "5⁶ ÷ 5² equals:", options: ["5³", "5⁸", "5⁴", "1⁴"], answer: 2, explanation: "Subtract exponents: 5⁶⁻² = 5⁴." },
    { id: "pp7", difficulty: "medium", q: "The standard form of 56000 is:", options: ["5.6 × 10³", "56 × 10³", "5.6 × 10⁴", "0.56 × 10⁵"], answer: 2, explanation: "5.6 (between 1 and 10) × 10⁴ = 56000." },
    { id: "pp8", difficulty: "hard", q: "0.0004 in standard form is:", options: ["4 × 10⁻⁴", "4 × 10⁴", "4 × 10⁻³", "0.4 × 10⁻³"], answer: 0, explanation: "Decimal moves 4 places: 4 × 10⁻⁴." },
    { id: "pp9", difficulty: "easy", q: "2³ means:", options: ["2 × 3", "3 × 3", "2 × 2 × 2", "3 × 3 × 3"], answer: 2, explanation: "2³ = 2 × 2 × 2 = 8." },
    { id: "pp10", difficulty: "hard", q: "Which expression equals 1?", options: ["3⁰ × 5⁰", "2⁻¹", "10¹", "0⁰"], answer: 0, explanation: "Each factor is 1, so 3⁰ × 5⁰ = 1 × 1 = 1." },
  ],
  shortQuestions: [
    { q: "State the product law of exponents.", a: "For the same base, aᵐ × aⁿ = aᵐ⁺ⁿ." },
    { q: "What does a negative exponent mean?", a: "a⁻ⁿ is the reciprocal of aⁿ, i.e. a⁻ⁿ = 1 ÷ aⁿ." },
    { q: "Why do we use standard form?", a: "To write very large or very small numbers compactly as k × 10ⁿ with 1 ≤ k < 10." },
  ],
  longQuestions: [
    { q: "State the laws of exponents for a common base and show one example of each.", a: "Product: aᵐ × aⁿ = aᵐ⁺ⁿ (2² × 2³ = 2⁵). Quotient: aᵐ ÷ aⁿ = aᵐ⁻ⁿ (5⁴ ÷ 5² = 5²). Power of a power: (aᵐ)ⁿ = aᵐⁿ ((3²)² = 3⁴). Power of a product: aᵐ × bᵐ = (ab)ᵐ (2³ × 5³ = 10³). Each rule lets us simplify without fully expanding." },
    { q: "Explain how to write 0.00000305 in standard form, step by step.", a: "Place the decimal after the first non-zero digit to get 3.05. Count how many places the decimal moved: 6 places to the right, so the power of ten is −6. Therefore 0.00000305 = 3.05 × 10⁻⁶, with k = 3.05 satisfying 1 ≤ k < 10." },
  ],
  hots: [
    { q: "Without a calculator, which is larger: 2¹⁰ or 10³? Justify.", a: "2¹⁰ = 1024 while 10³ = 1000, so 2¹⁰ is larger by 24. Comparing powers sometimes needs evaluating, not just looking at the exponents." },
    { q: "Show that aᵐ ÷ aᵐ supports the rule a⁰ = 1.", a: "By the quotient law, aᵐ ÷ aᵐ = aᵐ⁻ᵐ = a⁰. But any non-zero number divided by itself is 1, so a⁰ must equal 1." },
  ],
  revisionNotes: [
    "aⁿ means a multiplied by itself n times; a is the base, n the exponent.",
    "Product aᵐ⁺ⁿ, quotient aᵐ⁻ⁿ, power of a power aᵐⁿ.",
    "a⁰ = 1 and a⁻ⁿ = 1/aⁿ for a ≠ 0.",
    "Standard form: k × 10ⁿ with 1 ≤ k < 10.",
  ],
  keyTakeaways: [
    "Laws of exponents only combine powers of the same base.",
    "Negative exponents give reciprocals, not negative numbers.",
    "Standard form makes huge and tiny numbers easy to compare.",
  ],
  faq: [
    { q: "What is the difference between base and exponent?", a: "The base is the number being multiplied; the exponent tells how many times it is multiplied by itself." },
    { q: "Is a⁰ always 1?", a: "Yes for any non-zero a; 0⁰ is left undefined at this level." },
    { q: "How is standard form different from ordinary form?", a: "Standard form writes a number as k × 10ⁿ with one non-zero digit before the decimal, making very large or small numbers compact." },
  ],
  related: [
    { classId: "9", subject: "maths", slug: "number-systems" },
  ],
};

export default chapter;
