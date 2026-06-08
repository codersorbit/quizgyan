import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "8",
  subject: "maths",
  slug: "algebra-play",
  title: "Algebra Play",
  order: 13,
  seoTitle: "Algebra Play Class 8 Maths (Ganita Prakash) — Expressions, Identities & Factorisation",
  metaDescription:
    "Class 8 Maths Algebra Play (Ganita Prakash): terms and like terms, adding and subtracting expressions, the standard algebraic identities, and basic factorisation, with solved examples and an MCQ quiz.",
  overview:
    "“Algebra Play” builds fluency with algebraic expressions. This Class 8 chapter covers terms and like terms, adding and subtracting expressions, the standard identities such as (a + b)², and how to factorise — writing an expression as a product — which is the reverse of expanding.",
  objectives: [
    "Identify terms, coefficients and like terms.",
    "Add and subtract algebraic expressions.",
    "Apply the standard algebraic identities.",
    "Factorise simple expressions.",
  ],
  concepts: [
    {
      heading: "Terms and like terms",
      body: "An algebraic expression is built from terms, each a product of a number (the coefficient) and variables, such as 5x or −3xy. Like terms have exactly the same variable part (3x and 7x) and can be combined, while unlike terms (3x and 3y) cannot. Combining like terms simplifies an expression.",
    },
    {
      heading: "Adding and subtracting expressions",
      body: "To add or subtract expressions, group like terms and combine their coefficients: (3x + 4) + (5x − 1) = 8x + 3. When subtracting, change the sign of every term being subtracted first: (5x − 1) − (2x + 3) = 5x − 1 − 2x − 3 = 3x − 4.",
    },
    {
      heading: "Algebraic identities",
      body: "Identities are equalities true for all values of the variables. The key ones are (a + b)² = a² + 2ab + b², (a − b)² = a² − 2ab + b², and (a + b)(a − b) = a² − b². They speed up squaring and multiplying, for example 102² = (100 + 2)² = 10000 + 400 + 4 = 10404.",
    },
    {
      heading: "Factorisation",
      body: "Factorising means writing an expression as a product of factors — the reverse of expanding. We take out a common factor, as in 6x + 9 = 3(2x + 3), or use an identity, as in x² − 16 = (x + 4)(x − 4). Factorised forms make equations and simplifications easier.",
    },
  ],
  formulas: [
    { name: "Square of a sum", formula: "(a + b)² = a² + 2ab + b²" },
    { name: "Square of a difference", formula: "(a − b)² = a² − 2ab + b²" },
    { name: "Difference of squares", formula: "(a + b)(a − b) = a² − b²" },
  ],
  definitions: [
    { term: "Term", meaning: "A product of a coefficient and variables within an expression." },
    { term: "Like terms", meaning: "Terms having exactly the same variable part, which can be combined." },
    { term: "Identity", meaning: "An equation true for all values of its variables." },
    { term: "Factorisation", meaning: "Writing an expression as a product of its factors." },
  ],
  examples: [
    {
      problem: "Simplify 4x + 7x − 2x.",
      solution: "All like terms: (4 + 7 − 2)x = 9x.",
    },
    {
      problem: "Use an identity to expand (x + 5)².",
      solution: "(x + 5)² = x² + 2·x·5 + 5² = x² + 10x + 25.",
    },
    {
      problem: "Factorise x² − 9.",
      solution: "This is a difference of squares: x² − 3² = (x + 3)(x − 3).",
    },
  ],
  commonMistakes: [
    "Combining unlike terms, e.g. writing 3x + 4y = 7xy.",
    "Forgetting the middle term: writing (a + b)² = a² + b².",
    "Not changing all signs when subtracting an expression.",
    "Leaving out a common factor when factorising.",
  ],
  mcqs: [
    { id: "ap1", difficulty: "easy", q: "Which are like terms?", options: ["3x and 3y", "5a and 2a", "x² and x", "2 and 2x"], answer: 1, explanation: "5a and 2a share the same variable part." },
    { id: "ap2", difficulty: "easy", q: "Simplify 6y − 2y:", options: ["4y", "8y", "4", "3y"], answer: 0, explanation: "(6 − 2)y = 4y." },
    { id: "ap3", difficulty: "medium", q: "(a + b)² equals:", options: ["a² + b²", "2a + 2b", "a² − 2ab + b²", "a² + 2ab + b²"], answer: 3, explanation: "The square of a sum has a middle term 2ab." },
    { id: "ap4", difficulty: "medium", q: "(a + b)(a − b) equals:", options: ["a² + b²", "2ab", "a² − 2ab", "a² − b²"], answer: 3, explanation: "Difference of squares: a² − b²." },
    { id: "ap5", difficulty: "hard", q: "Expand (x − 3)²:", options: ["x² − 9", "x² − 3x + 9", "x² + 6x + 9", "x² − 6x + 9"], answer: 3, explanation: "x² − 2·x·3 + 9 = x² − 6x + 9." },
    { id: "ap6", difficulty: "easy", q: "Factorise 4x + 8:", options: ["4(x + 2)", "4x + 2", "2(2x + 8)", "x + 2"], answer: 0, explanation: "Common factor 4: 4(x + 2)." },
    { id: "ap7", difficulty: "medium", q: "The coefficient of x in 7x is:", options: ["x", "1", "7", "0"], answer: 2, explanation: "The number multiplying x is 7." },
    { id: "ap8", difficulty: "hard", q: "Factorise x² − 25:", options: ["(x − 5)(x − 5)", "(x + 5)(x − 5)", "(x + 25)(x − 1)", "x(x − 25)"], answer: 1, explanation: "Difference of squares: (x + 5)(x − 5)." },
    { id: "ap9", difficulty: "easy", q: "(3x + 2) + (x − 5) equals:", options: ["4x − 3", "4x + 3", "2x − 3", "3x − 3"], answer: 0, explanation: "Combine like terms: 4x − 3." },
    { id: "ap10", difficulty: "medium", q: "An identity is true for:", options: ["one value of the variable", "no value", "all values of the variable", "only x = 0"], answer: 2, explanation: "An identity holds for every value of the variable." },
  ],
  shortQuestions: [
    { q: "What are like terms?", a: "Terms with exactly the same variable part, such as 4x and 9x, which can be combined." },
    { q: "Write the identity for (a − b)².", a: "(a − b)² = a² − 2ab + b²." },
    { q: "Factorise 5x + 10.", a: "5(x + 2)." },
  ],
  longQuestions: [
    { q: "State the three standard identities and use one to evaluate 98² quickly.", a: "The identities are (a + b)² = a² + 2ab + b², (a − b)² = a² − 2ab + b², and (a + b)(a − b) = a² − b². To find 98², write 98 = 100 − 2 and use the second identity: 98² = (100 − 2)² = 100² − 2·100·2 + 2² = 10000 − 400 + 4 = 9604." },
    { q: "Explain factorisation and factorise (i) 6x + 9 and (ii) x² − 16.", a: "Factorisation rewrites an expression as a product of factors, reversing expansion. (i) 6x + 9 has a common factor 3, so 6x + 9 = 3(2x + 3). (ii) x² − 16 is a difference of squares, x² − 4², which factorises using (a + b)(a − b) as (x + 4)(x − 4). Checking by expanding returns the original expression." },
  ],
  hots: [
    { q: "Without multiplying directly, find 53 × 47 using an identity.", a: "Write as (50 + 3)(50 − 3) = 50² − 3² = 2500 − 9 = 2491, using the difference-of-squares identity." },
    { q: "Why is (a + b)² not equal to a² + b²?", a: "Expanding (a + b)² gives a² + 2ab + b²; the extra term 2ab comes from multiplying the two parts together, so it cannot be dropped." },
  ],
  revisionNotes: [
    "Like terms share the variable part and combine; unlike terms do not.",
    "Subtracting an expression flips every sign inside.",
    "(a±b)² = a² ± 2ab + b²; (a+b)(a−b) = a² − b².",
    "Factorise by common factor or by an identity; it reverses expansion.",
  ],
  keyTakeaways: [
    "Identities turn hard squarings and products into quick steps.",
    "Factorisation is expansion run backwards.",
    "The middle term 2ab is the heart of a perfect square.",
  ],
  faq: [
    { q: "What is the difference between an expression and an identity?", a: "An expression is a combination of terms; an identity is an equation true for all values of its variables." },
    { q: "How do I factorise a difference of squares?", a: "Write it as a² − b² and use (a + b)(a − b)." },
    { q: "Does (a + b)² equal a² + b²?", a: "No — it equals a² + 2ab + b²; the middle term 2ab must be included." },
  ],
  related: [
    { classId: "8", subject: "maths", slug: "we-distribute-yet-things-multiply" },
    { classId: "9", subject: "maths", slug: "polynomials" },
  ],
};

export default chapter;
