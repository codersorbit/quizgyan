import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "9",
  subject: "maths",
  slug: "polynomials",
  title: "Polynomials",
  order: 2,
  seoTitle: "Polynomials Class 9 CBSE Notes, MCQs, Quiz, Identities & Theorems",
  metaDescription:
    "Class 9 Maths Polynomials: degree and types, zeroes, Remainder Theorem, Factor Theorem, algebraic identities and factorisation, solved examples and MCQ quiz with answers.",
  overview:
    "A polynomial is an algebraic expression built from variables with whole-number powers. This Class 9 chapter covers the degree and types of polynomials, their zeroes, the Remainder and Factor theorems, the standard algebraic identities, and how to factorise expressions. These identities and theorems are tools you will reuse all the way to Class 10 and beyond.",
  objectives: [
    "Identify the degree and type of a polynomial.",
    "Find the zero of a polynomial.",
    "Apply the Remainder Theorem.",
    "Use the Factor Theorem to factorise polynomials.",
    "Use algebraic identities to expand and factorise.",
  ],
  concepts: [
    {
      heading: "Polynomials, degree and zeroes",
      body: "A polynomial in one variable x is an expression like aₙxⁿ + … + a₀. The degree is the highest power; degree 1 is linear, 2 is quadratic, 3 is cubic. A zero of p(x) is a value of x for which p(x) = 0.",
    },
    {
      heading: "Remainder Theorem",
      body: "If a polynomial p(x) is divided by (x − a), the remainder is p(a). This lets you find a remainder by simply substituting, without doing long division.",
    },
    {
      heading: "Factor Theorem",
      body: "(x − a) is a factor of p(x) if and only if p(a) = 0. This is the key to factorising higher-degree polynomials: find a value that makes the polynomial zero, then divide out that factor.",
    },
    {
      heading: "Algebraic identities",
      body: "Standard identities such as (a + b)² = a² + 2ab + b², a² − b² = (a + b)(a − b), and (x + a)(x + b) = x² + (a + b)x + ab make expansion and factorisation fast and reliable.",
    },
  ],
  formulas: [
    { name: "Square of a sum", formula: "(a + b)² = a² + 2ab + b²" },
    { name: "Square of a difference", formula: "(a − b)² = a² − 2ab + b²" },
    { name: "Difference of squares", formula: "a² − b² = (a + b)(a − b)" },
    { name: "Cube identities", formula: "a³ + b³ = (a + b)(a² − ab + b²); a³ − b³ = (a − b)(a² + ab + b²)" },
    { name: "Three-term identity", formula: "(a + b + c)² = a² + b² + c² + 2ab + 2bc + 2ca" },
  ],
  definitions: [
    { term: "Polynomial", meaning: "An algebraic expression with whole-number powers of the variable." },
    { term: "Degree", meaning: "The highest power of the variable in the polynomial." },
    { term: "Zero of a polynomial", meaning: "A value of the variable that makes the polynomial equal to zero." },
    { term: "Factor", meaning: "A polynomial that divides another exactly, leaving no remainder." },
  ],
  examples: [
    {
      problem: "Find the remainder when p(x) = x³ + 3x² + 3x + 1 is divided by (x + 1).",
      solution:
        "By the Remainder Theorem, the remainder is p(−1) = (−1)³ + 3(−1)² + 3(−1) + 1 = −1 + 3 − 3 + 1 = 0.",
    },
    {
      problem: "Is (x − 2) a factor of x² − 5x + 6?",
      solution:
        "Check p(2) = 4 − 10 + 6 = 0. Since the value is zero, by the Factor Theorem (x − 2) is a factor.",
    },
    {
      problem: "Expand (x + 3)².",
      solution: "Using (a + b)² = a² + 2ab + b²: x² + 2(x)(3) + 9 = x² + 6x + 9.",
    },
  ],
  commonMistakes: [
    "Forgetting the middle term 2ab in (a + b)².",
    "Substituting +a instead of −a when dividing by (x − a) in the Remainder Theorem.",
    "Confusing the degree with the number of terms.",
    "Sign errors while applying the cube identities.",
  ],
  mcqs: [
    { id: "p1", difficulty: "easy", q: "The degree of 4x³ − 2x + 7 is:", options: ["3", "7", "1", "2"], answer: 0, explanation: "The highest power of x is 3." },
    { id: "p2", difficulty: "easy", q: "(a + b)² equals:", options: ["a² − 2ab + b²", "a² + 2ab + b²", "a² + ab + b²", "a² + b²"], answer: 1, explanation: "(a + b)² = a² + 2ab + b²." },
    { id: "p3", difficulty: "medium", q: "By the Remainder Theorem, dividing p(x) by (x − a) gives remainder:", options: ["p(0)", "p(−a)", "p(a)", "0 always"], answer: 2, explanation: "The remainder equals p(a)." },
    { id: "p4", difficulty: "medium", q: "(x − a) is a factor of p(x) if:", options: ["p(0) = 0", "p(1) = 0", "p(a) = 0", "the degree is 1"], answer: 2, explanation: "Factor Theorem: (x − a) is a factor when p(a) = 0." },
    { id: "p5", difficulty: "easy", q: "a² − b² equals:", options: ["(a + b)²", "a² + b²", "(a + b)(a − b)", "(a − b)²"], answer: 2, explanation: "Difference of squares: (a + b)(a − b)." },
    { id: "p6", difficulty: "easy", q: "A polynomial of degree 2 is called:", options: ["constant", "cubic", "quadratic", "linear"], answer: 2, explanation: "Degree 2 ⇒ quadratic." },
    { id: "p7", difficulty: "medium", q: "The zero of the polynomial p(x) = 2x − 6 is:", options: ["2", "−3", "6", "3"], answer: 3, explanation: "2x − 6 = 0 ⇒ x = 3." },
    { id: "p8", difficulty: "medium", q: "Expanding (x + 5)(x + 2) gives:", options: ["x² + 7x + 10", "x² + 3x + 10", "x² + 7x + 7", "x² + 10x + 7"], answer: 0, explanation: "x² + (5+2)x + 5·2 = x² + 7x + 10." },
    { id: "p9", difficulty: "easy", q: "The value of p(x) = x² + 1 at x = 0 is:", options: ["0", "−1", "2", "1"], answer: 3, explanation: "p(0) = 0 + 1 = 1." },
    { id: "p10", difficulty: "hard", q: "If x³ + y³ is factorised, one factor is:", options: ["(x + y)", "(x − y)", "(x + y)²", "(x² + y²)"], answer: 0, explanation: "x³ + y³ = (x + y)(x² − xy + y²)." },
    { id: "bk9m1", difficulty: "medium", q: "The degree of the polynomial 3x² + 2x + 1 is?", options: ["1", "2", "3", "0"], answer: 1, explanation: "The highest power of x is 2, so the degree is 2." },
  ],
  shortQuestions: [
    { q: "State the degree of the constant polynomial 7.", a: "Zero (a non-zero constant has degree 0)." },
    { q: "Find p(1) for p(x) = x² − 3x + 2.", a: "p(1) = 1 − 3 + 2 = 0." },
    { q: "Write the identity for (a − b)².", a: "(a − b)² = a² − 2ab + b²." },
  ],
  longQuestions: [
    { q: "Factorise x³ − 23x² + 142x − 120 given that (x − 1) is a factor.", a: "Since (x − 1) is a factor, divide to get x² − 22x + 120, which factorises as (x − 10)(x − 12). So x³ − 23x² + 142x − 120 = (x − 1)(x − 10)(x − 12)." },
    { q: "Using a suitable identity, evaluate 104 × 96.", a: "Write as (100 + 4)(100 − 4) = 100² − 4² = 10000 − 16 = 9984, using a² − b² = (a + b)(a − b)." },
  ],
  hots: [
    { q: "If x + 1/x = 5, find x² + 1/x².", a: "Square both sides: (x + 1/x)² = x² + 2 + 1/x² = 25, so x² + 1/x² = 25 − 2 = 23." },
    { q: "Without dividing, find the remainder when x³ − 3x² + 4x − 5 is divided by (x − 2).", a: "By the Remainder Theorem, remainder = p(2) = 8 − 12 + 8 − 5 = −1." },
  ],
  revisionNotes: [
    "Degree = highest power; linear/quadratic/cubic for 1/2/3.",
    "Remainder Theorem: remainder of p(x) ÷ (x − a) is p(a).",
    "Factor Theorem: (x − a) is a factor iff p(a) = 0.",
    "Memorise the square, difference-of-squares and cube identities.",
  ],
  keyTakeaways: [
    "Substitution (Remainder/Factor theorem) beats long division for checking.",
    "Identities turn hard multiplications into quick ones.",
    "A zero of the polynomial gives a linear factor.",
  ],
  faq: [
    { q: "What is the Factor Theorem?", a: "(x − a) is a factor of a polynomial p(x) if and only if p(a) = 0." },
    { q: "How is the Remainder Theorem useful?", a: "It gives the remainder of dividing p(x) by (x − a) as simply p(a), avoiding long division." },
    { q: "Why learn algebraic identities?", a: "They make expansion and factorisation faster and reduce errors, and they are used throughout higher algebra." },
  ],
  related: [
    { classId: "9", subject: "maths", slug: "number-systems" },
    { classId: "9", subject: "maths", slug: "linear-equations-in-two-variables" },
  ],
};

export default chapter;
