import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "9",
  subject: "maths",
  slug: "number-systems",
  title: "Number Systems",
  order: 1,
  seoTitle: "Number Systems Class 9 CBSE Notes, MCQs, Quiz & Rationalisation",
  metaDescription:
    "Class 9 Maths Number Systems: rational and irrational numbers, real numbers, decimal expansions, representation on the number line, laws of exponents and rationalisation, solved examples and MCQ quiz.",
  overview:
    "The number system organises every number we use into neat families. This chapter sorts numbers into rational and irrational, builds up to the real numbers, looks at how their decimal expansions behave, and shows how to represent them on the number line, apply the laws of exponents, and rationalise denominators. It is the foundation of all of Class 9 algebra.",
  objectives: [
    "Distinguish rational and irrational numbers.",
    "Recognise terminating and non-terminating decimal expansions.",
    "Represent real numbers on the number line.",
    "Apply the laws of exponents for real numbers.",
    "Rationalise the denominator of a surd.",
  ],
  concepts: [
    {
      heading: "Rational and irrational numbers",
      body: "A rational number can be written as p/q where p and q are integers and q ≠ 0 (e.g. 3/4, −2, 0.5). An irrational number cannot (e.g. √2, √3, π). Together they form the real numbers, which fill the entire number line.",
    },
    {
      heading: "Decimal expansions",
      body: "A rational number has a decimal that either terminates (0.75) or is non-terminating but recurring (0.333…). An irrational number has a decimal that is non-terminating and non-recurring.",
    },
    {
      heading: "Laws of exponents",
      body: "For real numbers and rational powers: aᵐ × aⁿ = aᵐ⁺ⁿ, aᵐ ÷ aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐⁿ, aᵐ × bᵐ = (ab)ᵐ, and a⁰ = 1. These also apply to roots written as fractional powers.",
    },
    {
      heading: "Rationalising the denominator",
      body: "To remove a surd from a denominator, multiply the numerator and denominator by a suitable surd (the conjugate for sums). For example, 1/√2 = √2/2, and 1/(√3 + 1) is multiplied by (√3 − 1).",
    },
  ],
  formulas: [
    { name: "Product of surds", formula: "√a × √b = √(ab)" },
    { name: "Laws of exponents", formula: "aᵐ·aⁿ = aᵐ⁺ⁿ ; (aᵐ)ⁿ = aᵐⁿ ; a⁰ = 1" },
    { name: "Rationalising", formula: "1/√a = √a / a" },
    { name: "Conjugate (sum)", formula: "1/(√a + b) × (√a − b)/(√a − b)" },
  ],
  definitions: [
    { term: "Rational number", meaning: "A number that can be written as p/q with integers p, q and q ≠ 0." },
    { term: "Irrational number", meaning: "A number that cannot be written as p/q (e.g. √2, π)." },
    { term: "Real number", meaning: "Any rational or irrational number; together they form the number line." },
    { term: "Surd", meaning: "An irrational root such as √2 or √5 that cannot be simplified to a rational number." },
  ],
  examples: [
    {
      problem: "Is 0.333… rational? If so, express it as a fraction.",
      solution:
        "Yes. Let x = 0.333…, then 10x = 3.333…; subtracting, 9x = 3, so x = 1/3. A recurring decimal is rational.",
    },
    {
      problem: "Rationalise the denominator of 1/√2.",
      solution: "Multiply top and bottom by √2: (1 × √2)/(√2 × √2) = √2/2.",
    },
    {
      problem: "Simplify 2³ × 2².",
      solution: "Using aᵐ × aⁿ = aᵐ⁺ⁿ: 2³⁺² = 2⁵ = 32.",
    },
  ],
  commonMistakes: [
    "Thinking every square root is irrational — √4 = 2 is rational.",
    "Treating a non-terminating recurring decimal as irrational (it is rational).",
    "Adding exponents when multiplying different bases.",
    "Forgetting to multiply the numerator too while rationalising.",
  ],
  mcqs: [
    { id: "ns1", difficulty: "easy", q: "Which of these is irrational?", options: ["√2", "0.5", "3/7", "√4"], answer: 0, explanation: "√2 is non-terminating, non-recurring — irrational." },
    { id: "ns2", difficulty: "easy", q: "A rational number can always be written as:", options: ["a recurring decimal only", "a whole number", "p/q with q ≠ 0", "a surd"], answer: 2, explanation: "Rational numbers have the form p/q, q ≠ 0." },
    { id: "ns3", difficulty: "medium", q: "The decimal expansion of an irrational number is:", options: ["non-terminating and non-recurring", "terminating", "non-terminating and recurring", "always zero"], answer: 0, explanation: "Irrational numbers have non-terminating, non-recurring decimals." },
    { id: "ns4", difficulty: "easy", q: "√a × √b equals:", options: ["ab", "√(a+b)", "a + b", "√(ab)"], answer: 3, explanation: "Product rule of surds: √a × √b = √(ab)." },
    { id: "ns5", difficulty: "medium", q: "1/√3 rationalised is:", options: ["√3/3", "√3", "1/3", "3/√3"], answer: 0, explanation: "Multiply by √3/√3 to get √3/3." },
    { id: "ns6", difficulty: "easy", q: "The value of a⁰ (a ≠ 0) is:", options: ["1", "a", "0", "undefined"], answer: 0, explanation: "Any non-zero number to the power 0 is 1." },
    { id: "ns7", difficulty: "medium", q: "2³ × 2⁴ equals:", options: ["2⁷", "4⁷", "2¹²", "2¹"], answer: 0, explanation: "Add exponents: 2³⁺⁴ = 2⁷." },
    { id: "ns8", difficulty: "easy", q: "Every integer is a:", options: ["non-real number", "rational number", "irrational number", "surd"], answer: 1, explanation: "An integer n can be written as n/1, so it is rational." },
    { id: "ns9", difficulty: "medium", q: "Which number lies between √2 and √3?", options: ["1.9", "1.2", "2.1", "1.5"], answer: 3, explanation: "√2 ≈ 1.41 and √3 ≈ 1.73, so 1.5 lies between them." },
    { id: "ns10", difficulty: "hard", q: "(√5 + √5) equals:", options: ["√10", "√25", "2√5", "5"], answer: 2, explanation: "Like surds add: √5 + √5 = 2√5." },
    { id: "bk9m0", difficulty: "easy", q: "Which of these is an irrational number?", options: ["√2", "1/2", "0.25", "7"], answer: 0, explanation: "√2 cannot be written as a fraction, so it is irrational." },
  ],
  shortQuestions: [
    { q: "Give an example of a rational and an irrational number between 1 and 2.", a: "Rational: 1.5 (= 3/2); irrational: √2 ≈ 1.414." },
    { q: "Is the product of a non-zero rational and an irrational number rational or irrational?", a: "Irrational (e.g. 2 × √3 = 2√3)." },
    { q: "Express 0.6 (recurring) as a fraction.", a: "Let x = 0.666…, 10x = 6.666…, so 9x = 6, x = 2/3." },
  ],
  longQuestions: [
    { q: "Rationalise the denominator of 1/(√5 − √2).", a: "Multiply numerator and denominator by the conjugate (√5 + √2): (√5 + √2)/[(√5 − √2)(√5 + √2)] = (√5 + √2)/(5 − 2) = (√5 + √2)/3." },
    { q: "Show that 1.272727… is a rational number.", a: "Let x = 1.272727…. Then 100x = 127.2727…. Subtracting, 99x = 126, so x = 126/99 = 14/11, which is of the form p/q — hence rational." },
  ],
  hots: [
    { q: "Insert two irrational numbers between 2 and 3.", a: "For example, √5 (≈ 2.236) and √7 (≈ 2.645) both lie between 2 and 3 and are irrational." },
    { q: "Is √2 + √3 rational or irrational? Explain.", a: "It is irrational. If it were rational, squaring would force √6 to be rational, which it is not — so √2 + √3 cannot be rational." },
  ],
  revisionNotes: [
    "Rational = p/q (q ≠ 0); irrational cannot be written that way.",
    "Decimals: terminating/recurring → rational; non-terminating non-recurring → irrational.",
    "Laws of exponents apply to real (and fractional) powers.",
    "Rationalise by multiplying with a surd or conjugate.",
  ],
  keyTakeaways: [
    "Not all roots are irrational — check if they simplify.",
    "Recurring decimals are rational.",
    "Conjugates clear surds from denominators.",
  ],
  faq: [
    { q: "What is the difference between rational and irrational numbers?", a: "Rational numbers can be written as p/q (q ≠ 0); irrational numbers cannot, and their decimals are non-terminating and non-recurring." },
    { q: "How do I rationalise a denominator?", a: "Multiply the numerator and denominator by a suitable surd — the same surd for a single root, or the conjugate for a sum or difference." },
    { q: "Is π rational?", a: "No, π is irrational; 22/7 is only an approximation, not its exact value." },
  ],
  related: [
    { classId: "9", subject: "maths", slug: "polynomials" },
    { classId: "9", subject: "maths", slug: "coordinate-geometry" },
  ],
};

export default chapter;
