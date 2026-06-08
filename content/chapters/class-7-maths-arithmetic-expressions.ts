import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "7",
  subject: "maths",
  slug: "arithmetic-expressions",
  title: "Arithmetic Expressions",
  order: 2,
  seoTitle: "Arithmetic Expressions Class 7 Maths (Ganita Prakash) — Notes & MCQs",
  metaDescription:
    "Class 7 Maths Arithmetic Expressions (Ganita Prakash): reading and writing expressions, terms, the order of operations and brackets, and comparing expressions, with worked examples and an MCQ quiz.",
  overview:
    "An arithmetic expression is a combination of numbers and operations that stands for a value. This Class 7 Ganita Prakash chapter shows how to read and build expressions, identify their terms, evaluate them using the correct order of operations, and compare expressions for equality.",
  objectives: [
    "Read and write arithmetic expressions.",
    "Identify the terms of an expression.",
    "Evaluate expressions in the correct order.",
    "Compare expressions for equality.",
  ],
  concepts: [
    {
      heading: "What is an arithmetic expression?",
      body: "An arithmetic expression combines numbers using operations such as +, −, × and ÷, for example 3 + 4 × 2. Every expression has a single value once evaluated. Writing situations as expressions — like 'the cost of 3 pens at ₹5 and a ₹2 eraser' as 3 × 5 + 2 — turns words into maths.",
    },
    {
      heading: "Terms of an expression",
      body: "The parts of an expression that are added or subtracted are called its terms. In 3 × 5 + 2, the terms are 3 × 5 and 2. Seeing the terms helps us evaluate and compare expressions, because the value is the sum of its terms.",
    },
    {
      heading: "Order of operations",
      body: "When an expression has different operations, we follow an order: first brackets, then multiplication and division (left to right), then addition and subtraction. So 3 + 4 × 2 = 3 + 8 = 11, not 14. Brackets let us change the order on purpose: (3 + 4) × 2 = 14.",
    },
    {
      heading: "Comparing expressions",
      body: "Two expressions are equal if they have the same value, even if they look different — for example 2 × 6 and 12 + 0 both equal 12. We can compare expressions using =, < or >, which is the first step towards algebra.",
    },
  ],
  formulas: [
    { name: "Order of operations", formula: "Brackets → × and ÷ (left to right) → + and − (left to right)" },
  ],
  definitions: [
    { term: "Arithmetic expression", meaning: "A combination of numbers and operations standing for a value." },
    { term: "Term", meaning: "A part of an expression that is added or subtracted." },
    { term: "Brackets", meaning: "Symbols ( ) that group a part to be evaluated first." },
    { term: "Evaluate", meaning: "To work out the single value of an expression." },
  ],
  examples: [
    {
      problem: "Evaluate 3 + 4 × 2.",
      solution: "Multiply first: 4 × 2 = 8, then 3 + 8 = 11.",
    },
    {
      problem: "Evaluate (3 + 4) × 2.",
      solution: "Brackets first: 3 + 4 = 7, then 7 × 2 = 14.",
    },
    {
      problem: "Name the terms of 5 × 2 + 7.",
      solution: "The terms are 5 × 2 and 7.",
    },
  ],
  commonMistakes: [
    "Working strictly left to right and ignoring the order of operations.",
    "Forgetting that brackets must be evaluated first.",
    "Splitting a term like 3 × 5 across the + sign.",
    "Assuming two expressions are unequal just because they look different.",
  ],
  mcqs: [
    { id: "ae1", difficulty: "easy", q: "In 6 + 3 × 2, which operation is done first?", options: ["addition", "left to right", "multiplication", "subtraction"], answer: 2, explanation: "Multiplication comes before addition." },
    { id: "ae2", difficulty: "easy", q: "The value of 6 + 3 × 2 is:", options: ["18", "11", "15", "12"], answer: 3, explanation: "3 × 2 = 6, then 6 + 6 = 12." },
    { id: "ae3", difficulty: "medium", q: "The value of (6 + 3) × 2 is:", options: ["18", "12", "15", "21"], answer: 0, explanation: "Brackets first: 9 × 2 = 18." },
    { id: "ae4", difficulty: "medium", q: "The terms of 4 × 3 + 5 are:", options: ["4 and 3 and 5", "4 × 3 and 5", "4 and 3", "12 and 5 only as one term"], answer: 1, explanation: "Terms are separated by + or −: 4 × 3 and 5." },
    { id: "ae5", difficulty: "easy", q: "Which is evaluated first of all?", options: ["addition", "subtraction", "brackets", "division"], answer: 2, explanation: "Brackets are always done first." },
    { id: "ae6", difficulty: "medium", q: "Which expression equals 12?", options: ["3 + 4 × 2", "5 + 5", "20 − 6", "2 × 6"], answer: 3, explanation: "2 × 6 = 12." },
    { id: "ae7", difficulty: "hard", q: "Evaluate 20 − 2 × (3 + 1).", options: ["12", "72", "18", "10"], answer: 0, explanation: "Brackets: 4; 2 × 4 = 8; 20 − 8 = 12." },
    { id: "ae8", difficulty: "easy", q: "A combination of numbers and operations is an:", options: ["equation only", "arithmetic expression", "answer", "estimate"], answer: 1, explanation: "It is an arithmetic expression." },
    { id: "ae9", difficulty: "medium", q: "10 − 4 + 2 equals:", options: ["4", "12", "8", "16"], answer: 2, explanation: "Left to right for + and −: 10 − 4 = 6, 6 + 2 = 8." },
    { id: "ae10", difficulty: "hard", q: "Which pair of expressions are equal?", options: ["3 + 4 and 3 × 4", "6 − 2 and 6 + 2", "8 ÷ 2 and 8 × 2", "2 × 5 and 5 + 5"], answer: 3, explanation: "2 × 5 = 10 and 5 + 5 = 10." },
  ],
  shortQuestions: [
    { q: "State the order of operations.", a: "Brackets first, then × and ÷ (left to right), then + and − (left to right)." },
    { q: "What are the terms of an expression?", a: "The parts that are added or subtracted." },
    { q: "Evaluate 2 + 3 × 4.", a: "3 × 4 = 12, then 2 + 12 = 14." },
  ],
  longQuestions: [
    { q: "Explain the order of operations with an example, and show how brackets change the result.", a: "When an expression has several operations, we evaluate in a fixed order: anything inside brackets first, then multiplication and division from left to right, and finally addition and subtraction from left to right. For example, 3 + 4 × 2 means we multiply before adding, giving 3 + 8 = 11. Brackets let us override this order: (3 + 4) × 2 forces the addition first, giving 7 × 2 = 14. So the same numbers and operations can give different values depending on where the brackets are." },
    { q: "What does it mean for two expressions to be equal? Give examples.", a: "Two expressions are equal when they have the same value after being evaluated, even if they are written differently. For example, 2 × 6 and 5 + 7 are both equal to 12, so 2 × 6 = 5 + 7. On the other hand, 3 + 4 × 2 = 11 while (3 + 4) × 2 = 14, so these two are not equal. Comparing expressions in this way — checking their values rather than their appearance — is the foundation of forming and solving equations later in algebra." },
  ],
  hots: [
    { q: "Place brackets in 8 − 3 + 1 to make the value 4.", a: "8 − (3 + 1) = 8 − 4 = 4." },
    { q: "Without full calculation, which is larger: 12 × 0 + 9 or 12 + 0 × 9?", a: "12 × 0 + 9 = 9, while 12 + 0 × 9 = 12; so the second is larger." },
  ],
  revisionNotes: [
    "Expression = numbers + operations standing for a value.",
    "Terms are separated by + and −.",
    "Order: brackets → × ÷ → + − (left to right).",
    "Equal expressions have the same value.",
  ],
  keyTakeaways: [
    "Order of operations decides an expression's value.",
    "Brackets are evaluated first.",
    "Different-looking expressions can be equal.",
  ],
  faq: [
    { q: "What is done first, multiplication or addition?", a: "Multiplication, unless addition is inside brackets." },
    { q: "What are terms?", a: "The parts of an expression separated by + or − signs." },
    { q: "Can two different expressions be equal?", a: "Yes, if they evaluate to the same value." },
  ],
  related: [
    { classId: "7", subject: "maths", slug: "expressions-using-letter-numbers" },
    { classId: "8", subject: "maths", slug: "algebra-play" },
  ],
};

export default chapter;
