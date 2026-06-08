import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "10",
  subject: "maths",
  slug: "quadratic-equations",
  title: "Quadratic Equations",
  order: 4,
  seoTitle:
    "Quadratic Equations Class 10 CBSE Notes, MCQs, Quiz & Practice Questions",
  metaDescription:
    "Class 10 Maths Quadratic Equations: standard form, solving by factorisation and the quadratic formula, discriminant and nature of roots, solved examples, MCQ quiz with answers and important board questions.",
  overview:
    "A quadratic equation is any equation that can be written as ax² + bx + c = 0 with a ≠ 0. This chapter teaches you to solve such equations by factorisation and by the quadratic formula, and to predict the nature of the roots using the discriminant. It is a heavily weighted, application-rich chapter in the CBSE Class 10 board exam, with word problems on speed, area and ages.",
  objectives: [
    "Recognise and write a quadratic equation in standard form.",
    "Solve quadratic equations by factorising (splitting the middle term).",
    "Solve quadratic equations using the quadratic formula.",
    "Find the discriminant and determine the nature of the roots.",
    "Model and solve real-life word problems using quadratic equations.",
  ],
  concepts: [
    {
      heading: "Standard form and roots",
      body: "A quadratic equation has the form ax² + bx + c = 0 where a, b, c are real numbers and a ≠ 0. A value α is a root (solution) if it satisfies the equation, i.e. aα² + bα + c = 0. A quadratic has at most two roots.",
    },
    {
      heading: "Solving by factorisation",
      body: "Split the middle term bx into two terms whose coefficients multiply to a × c and add to b. Group and factor to get a product of two linear factors equal to zero, then set each factor to zero.",
    },
    {
      heading: "The quadratic formula",
      body: "Any quadratic can be solved with x = [−b ± √(b² − 4ac)] ÷ 2a. The ± sign produces the two roots. This method always works, even when factorisation is difficult.",
    },
    {
      heading: "Discriminant and nature of roots",
      body: "The discriminant is D = b² − 4ac. If D > 0 there are two distinct real roots; if D = 0 there are two equal real roots; if D < 0 there are no real roots.",
    },
  ],
  formulas: [
    { name: "Quadratic formula", formula: "x = [−b ± √(b² − 4ac)] ÷ 2a" },
    { name: "Discriminant", formula: "D = b² − 4ac" },
    { name: "Sum of roots", formula: "α + β = −b ÷ a" },
    { name: "Product of roots", formula: "α × β = c ÷ a" },
  ],
  definitions: [
    { term: "Quadratic equation", meaning: "A polynomial equation of degree 2, written ax² + bx + c = 0 with a ≠ 0." },
    { term: "Root", meaning: "A value of the variable that makes the equation true; also called a solution or zero." },
    { term: "Discriminant", meaning: "The expression b² − 4ac, whose sign decides whether the roots are real and distinct, real and equal, or not real." },
  ],
  examples: [
    {
      problem: "Solve x² − 3x − 10 = 0 by factorisation.",
      solution:
        "Split −3x so the parts multiply to (1)(−10) = −10 and add to −3: that is −5x and +2x. So x² − 5x + 2x − 10 = x(x − 5) + 2(x − 5) = (x − 5)(x + 2) = 0. Hence x = 5 or x = −2.",
    },
    {
      problem: "Solve 2x² − 7x + 3 = 0 using the quadratic formula.",
      solution:
        "Here a = 2, b = −7, c = 3. D = (−7)² − 4(2)(3) = 49 − 24 = 25. x = [7 ± √25] ÷ 4 = (7 ± 5) ÷ 4. So x = 3 or x = 1/2.",
    },
    {
      problem: "Find the nature of the roots of x² + 4x + 5 = 0.",
      solution:
        "D = 4² − 4(1)(5) = 16 − 20 = −4. Since D < 0, the equation has no real roots.",
    },
  ],
  commonMistakes: [
    "Forgetting the condition a ≠ 0 — without it the equation is not quadratic.",
    "Sign slips with −b in the formula (e.g. using b instead of −b when b is negative).",
    "Splitting the middle term wrongly: the two parts must multiply to a × c, not just to c.",
    "Writing 'no solution' instead of 'no real roots' when D < 0.",
    "Reporting only one root and forgetting the ± gives two.",
  ],
  mcqs: [
    { id: "qe1", difficulty: "easy", q: "The standard form of a quadratic equation is:", options: ["ax² + bx + c = 0, a = 0", "ax + b = 0", "ax² + bx + c = 0, a ≠ 0", "ax³ + bx + c = 0"], answer: 2, explanation: "A quadratic has degree 2 with a non-zero leading coefficient." },
    { id: "qe2", difficulty: "medium", q: "The discriminant of 2x² − 4x + 1 = 0 is:", options: ["−8", "8", "24", "12"], answer: 1, explanation: "D = (−4)² − 4(2)(1) = 16 − 8 = 8." },
    { id: "qe3", difficulty: "easy", q: "The roots of x² − 5x + 6 = 0 are:", options: ["1 and 6", "5 and 6", "−2 and −3", "2 and 3"], answer: 3, explanation: "(x − 2)(x − 3) = 0, so x = 2 or 3." },
    { id: "qe4", difficulty: "easy", q: "If the discriminant D = 0, the equation has:", options: ["no real roots", "two distinct real roots", "two equal real roots", "infinitely many roots"], answer: 2, explanation: "D = 0 gives two equal (coincident) real roots." },
    { id: "qe5", difficulty: "medium", q: "If D < 0, the quadratic equation has:", options: ["one real root", "two equal roots", "no real roots", "two distinct real roots"], answer: 2, explanation: "A negative discriminant means the roots are not real." },
    { id: "qe6", difficulty: "easy", q: "The quadratic formula for ax² + bx + c = 0 is x =", options: ["[−b ± √(4ac − b²)] ÷ 2a", "[b ± √(b² − 4ac)] ÷ 2a", "[−b ± √(b² − 4ac)] ÷ 2a", "[−b ± √(b² + 4ac)] ÷ 2a"], answer: 2, explanation: "Standard quadratic formula with −b and discriminant b² − 4ac." },
    { id: "qe7", difficulty: "medium", q: "For ax² + bx + c = 0, the sum of the roots is:", options: ["c/a", "b/a", "−b/a", "−c/a"], answer: 2, explanation: "Sum of roots = −b/a." },
    { id: "qe8", difficulty: "medium", q: "For ax² + bx + c = 0, the product of the roots is:", options: ["−c/a", "−b/a", "b/a", "c/a"], answer: 3, explanation: "Product of roots = c/a." },
    { id: "qe9", difficulty: "easy", q: "Which of these is a quadratic equation?", options: ["1/x = 2", "x² − 1 = 0", "x³ = 1", "2x + 3 = 0"], answer: 1, explanation: "Only x² − 1 = 0 has degree exactly 2." },
    { id: "qe10", difficulty: "hard", q: "The value(s) of k for which x² + kx + 9 = 0 has equal roots is:", options: ["±3", "9", "6 only", "±6"], answer: 3, explanation: "Equal roots ⇒ D = 0 ⇒ k² − 36 = 0 ⇒ k = ±6." },
    { id: "bk10m4", difficulty: "hard", q: "The discriminant of the quadratic ax² + bx + c is?", options: ["b² − 4ac", "2a", "b² + 4ac", "−b/2a"], answer: 0, explanation: "The discriminant is D = b² − 4ac." },
    { id: "bk10m5", difficulty: "hard", q: "If the discriminant is greater than 0, the quadratic equation has?", options: ["No real roots", "Two distinct real roots", "One repeated root", "No solution"], answer: 1, explanation: "When D > 0, there are two different real roots." },
  ],
  shortQuestions: [
    { q: "Write the discriminant of 3x² − 2x + 1 = 0.", a: "D = (−2)² − 4(3)(1) = 4 − 12 = −8." },
    { q: "How many roots can a quadratic equation have?", a: "At most two." },
    { q: "What does D > 0 tell you about the roots?", a: "The equation has two distinct real roots." },
  ],
  longQuestions: [
    { q: "The product of two consecutive positive integers is 306. Form and solve the quadratic equation to find them.", a: "Let the integers be x and x + 1. Then x(x + 1) = 306 ⇒ x² + x − 306 = 0. Splitting: x² + 18x − 17x − 306 = (x + 18)(x − 17) = 0. The positive value is x = 17, so the integers are 17 and 18." },
    { q: "Solve 2x² + x − 6 = 0 by factorisation.", a: "Split x into 4x − 3x (product 2 × −6 = −12, sum +1): 2x² + 4x − 3x − 6 = 2x(x + 2) − 3(x + 2) = (x + 2)(2x − 3) = 0. So x = −2 or x = 3/2." },
  ],
  hots: [
    { q: "A train travels 360 km at a uniform speed. If the speed had been 5 km/h more, it would have taken 1 hour less. Find its speed.", a: "Let speed be x km/h. Time difference: 360/x − 360/(x + 5) = 1. This gives x² + 5x − 1800 = 0 ⇒ (x + 45)(x − 40) = 0. Taking the positive root, x = 40 km/h." },
    { q: "For what value of k does the equation kx² − 2kx + 6 = 0 have equal roots (k ≠ 0)?", a: "Equal roots ⇒ D = 0 ⇒ (−2k)² − 4(k)(6) = 0 ⇒ 4k² − 24k = 0 ⇒ 4k(k − 6) = 0. Since k ≠ 0, k = 6." },
  ],
  revisionNotes: [
    "Standard form: ax² + bx + c = 0, a ≠ 0.",
    "Factorisation: split the middle term so parts multiply to a×c and add to b.",
    "Quadratic formula: x = [−b ± √(b² − 4ac)] ÷ 2a.",
    "Discriminant D = b² − 4ac decides the nature of roots: + two distinct, 0 two equal, − none real.",
    "Sum of roots = −b/a, product = c/a.",
  ],
  keyTakeaways: [
    "The quadratic formula always works — fall back on it when factorisation is hard.",
    "Check the discriminant first if the question asks only about the nature of roots.",
    "For word problems, define the variable, form the equation, then reject roots that don't fit the context (e.g. negative speed).",
  ],
  faq: [
    { q: "Is Quadratic Equations an important chapter for Class 10 boards?", a: "Yes, it carries significant weight, especially application-based word problems on speed, area, time and ages." },
    { q: "Which method should I use to solve a quadratic equation?", a: "Try factorisation first; if the middle term doesn't split neatly, use the quadratic formula, which always works." },
    { q: "How do I find the nature of roots without solving?", a: "Compute the discriminant D = b² − 4ac. D > 0 means two distinct real roots, D = 0 means equal roots, and D < 0 means no real roots." },
  ],
  related: [{ classId: "10", subject: "maths", slug: "real-numbers" }],
};

export default chapter;
