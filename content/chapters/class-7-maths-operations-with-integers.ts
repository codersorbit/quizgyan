import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "7",
  subject: "maths",
  slug: "operations-with-integers",
  title: "Operations with Integers",
  order: 10,
  seoTitle: "Operations with Integers Class 7 Maths (Ganita Prakash) — Notes & MCQs",
  metaDescription:
    "Class 7 Maths Operations with Integers (Ganita Prakash): adding, subtracting, multiplying and dividing integers, the rules of signs, and properties of integer operations, with worked examples and an MCQ quiz.",
  overview:
    "Class 6 introduced negative numbers; now we calculate with them. This Class 7 Ganita Prakash chapter covers all four operations on integers — addition, subtraction, multiplication and division — the rules of signs that govern them, and the key properties that make integers behave predictably.",
  objectives: [
    "Add and subtract integers.",
    "Multiply and divide integers.",
    "Apply the rules of signs.",
    "Use properties of integer operations.",
  ],
  concepts: [
    {
      heading: "Adding and subtracting integers",
      body: "On the number line, adding moves right and subtracting moves left, and this works for negatives too. Adding two negatives gives a more negative result: (−3) + (−4) = −7. Subtracting an integer is the same as adding its opposite: 5 − (−2) = 5 + 2 = 7.",
    },
    {
      heading: "Multiplying integers",
      body: "When multiplying integers, the rule of signs decides the sign of the answer: a positive times a positive, or a negative times a negative, gives a positive; a positive times a negative gives a negative. So (−4) × (−3) = 12, but (−4) × 3 = −12.",
    },
    {
      heading: "Dividing integers",
      body: "Division follows the same sign rule as multiplication. Like signs give a positive quotient and unlike signs give a negative one: (−12) ÷ (−3) = 4, while (−12) ÷ 3 = −4. Dividing zero by any non-zero integer gives zero.",
    },
    {
      heading: "Properties of integers",
      body: "Integer addition and multiplication are commutative (order does not matter) and associative (grouping does not matter). Zero is the additive identity (a + 0 = a) and one is the multiplicative identity (a × 1 = a). These properties let us rearrange calculations conveniently.",
    },
  ],
  formulas: [
    { name: "Subtracting an integer", formula: "a − b = a + (opposite of b)" },
    { name: "Sign rule (× and ÷)", formula: "like signs → +, unlike signs → −" },
  ],
  definitions: [
    { term: "Integer", meaning: "A positive whole number, zero, or a negative whole number." },
    { term: "Opposite", meaning: "The integer with the same value but the other sign (3 and −3)." },
    { term: "Commutative", meaning: "A property where order does not affect the result." },
    { term: "Additive identity", meaning: "Zero, since adding it leaves a number unchanged." },
  ],
  examples: [
    {
      problem: "Find (−3) + (−4).",
      solution: "Both negative: −7.",
    },
    {
      problem: "Find (−4) × (−3).",
      solution: "Like signs give positive: 12.",
    },
    {
      problem: "Find (−12) ÷ 3.",
      solution: "Unlike signs give negative: −4.",
    },
  ],
  commonMistakes: [
    "Thinking two negatives added give a positive.",
    "Forgetting that subtracting a negative is the same as adding.",
    "Getting the sign wrong when multiplying or dividing.",
    "Believing division of integers is commutative (it is not).",
  ],
  mcqs: [
    { id: "oi1", difficulty: "easy", q: "(−5) + (−3) equals:", options: ["−8", "8", "−2", "2"], answer: 0, explanation: "Both negative: −8." },
    { id: "oi2", difficulty: "easy", q: "(−4) × (−2) equals:", options: ["−8", "8", "−6", "6"], answer: 1, explanation: "Like signs give positive: 8." },
    { id: "oi3", difficulty: "medium", q: "5 − (−3) equals:", options: ["2", "−2", "8", "−8"], answer: 2, explanation: "Subtracting a negative adds: 5 + 3 = 8." },
    { id: "oi4", difficulty: "medium", q: "(−15) ÷ 5 equals:", options: ["3", "−5", "5", "−3"], answer: 3, explanation: "Unlike signs give negative: −3." },
    { id: "oi5", difficulty: "easy", q: "A negative times a positive is:", options: ["negative", "positive", "zero", "one"], answer: 0, explanation: "Unlike signs give a negative product." },
    { id: "oi6", difficulty: "medium", q: "(−6) × 3 equals:", options: ["18", "−18", "−2", "2"], answer: 1, explanation: "Unlike signs: −18." },
    { id: "oi7", difficulty: "hard", q: "(−20) ÷ (−4) equals:", options: ["−5", "−80", "5", "80"], answer: 2, explanation: "Like signs give positive: 5." },
    { id: "oi8", difficulty: "easy", q: "Adding zero to any integer gives:", options: ["zero", "one", "its opposite", "the same integer"], answer: 3, explanation: "Zero is the additive identity." },
    { id: "oi9", difficulty: "medium", q: "(−7) + 10 equals:", options: ["3", "−17", "17", "−3"], answer: 0, explanation: "Move 10 right from −7 → 3." },
    { id: "oi10", difficulty: "hard", q: "Which expression equals a positive number?", options: ["(−2) × 5", "(−3) × (−4)", "(−10) ÷ 2", "8 × (−1)"], answer: 1, explanation: "(−3)(−4) = 12, positive." },
  ],
  shortQuestions: [
    { q: "What is the sign of a negative times a negative?", a: "Positive." },
    { q: "What is 6 − (−2)?", a: "6 + 2 = 8." },
    { q: "What is the additive identity for integers?", a: "Zero, since a + 0 = a." },
  ],
  longQuestions: [
    { q: "Explain the rules of signs for multiplying and dividing integers, with examples.", a: "When multiplying or dividing two integers, the sign of the answer depends only on whether the two signs are alike or unlike. Like signs give a positive result: a positive times a positive is positive (2 × 3 = 6), and a negative times a negative is also positive ((−2) × (−3) = 6). Unlike signs give a negative result: a positive times a negative is negative (2 × (−3) = −6). Division follows the same rule, so (−12) ÷ (−3) = 4 (like signs, positive) while (−12) ÷ 3 = −4 (unlike signs, negative). Getting the size right and then applying the sign rule gives the complete answer." },
    { q: "Explain addition and subtraction of integers using the number line and opposites.", a: "On the number line, adding an integer means moving right and subtracting means moving left, and this idea covers negatives. So (−3) + (−4) starts at −3 and moves 4 more to the left, reaching −7. Subtraction can always be turned into addition of the opposite: subtracting an integer is the same as adding its opposite, so 5 − (−2) becomes 5 + 2 = 7, and 4 − 6 becomes 4 + (−6) = −2. Thinking of subtraction as 'adding the opposite' removes most sign confusion." },
  ],
  hots: [
    { q: "The temperature is −2°C and drops by 5°C, then rises by 3°C. What is the final temperature?", a: "−2 − 5 + 3 = −4°C." },
    { q: "Without computing fully, is (−1) × (−1) × (−1) positive or negative? Why?", a: "Negative, because multiplying three negatives gives a negative (an odd number of negative factors)." },
  ],
  revisionNotes: [
    "Add → move right; subtract → move left; subtracting a negative adds.",
    "× and ÷: like signs → positive, unlike signs → negative.",
    "Addition and multiplication are commutative and associative.",
    "0 is additive identity; 1 is multiplicative identity.",
  ],
  keyTakeaways: [
    "Subtracting a negative is the same as adding.",
    "Like signs multiply/divide to positive; unlike to negative.",
    "Integers obey neat properties that ease calculation.",
  ],
  faq: [
    { q: "What is a negative times a negative?", a: "A positive number." },
    { q: "How do I subtract a negative number?", a: "Change it to adding the positive: a − (−b) = a + b." },
    { q: "Is integer division commutative?", a: "No; for example 6 ÷ 2 is not the same as 2 ÷ 6." },
  ],
  related: [
    { classId: "6", subject: "maths", slug: "the-other-side-of-zero" },
    { classId: "7", subject: "maths", slug: "finding-common-ground" },
  ],
};

export default chapter;
