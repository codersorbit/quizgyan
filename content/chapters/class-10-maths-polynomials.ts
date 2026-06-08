import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "10",
  subject: "maths",
  slug: "polynomials",
  title: "Polynomials",
  order: 2,
  seoTitle: "Polynomials Class 10 CBSE Notes, MCQs, Quiz & Important Questions",
  metaDescription:
    "Class 10 Maths Polynomials: degree, zeroes of a polynomial, relationship between zeroes and coefficients, forming a quadratic from its zeroes, solved examples, MCQ quiz and important questions.",
  overview:
    "A polynomial is an algebraic expression made of terms with whole-number powers of a variable. In CBSE Class 10, the focus is on the zeroes of a polynomial — where its graph meets the x-axis — and the neat relationship between those zeroes and the polynomial's coefficients. The chapter is short and closely linked to Quadratic Equations.",
  objectives: [
    "Identify the degree of a polynomial and classify it as linear, quadratic or cubic.",
    "Find the zeroes of a quadratic polynomial.",
    "Use the relationship between the zeroes and coefficients.",
    "Form a quadratic polynomial when its zeroes are given.",
    "Interpret zeroes graphically as x-intercepts.",
  ],
  concepts: [
    {
      heading: "Degree and types of polynomials",
      body: "The degree is the highest power of the variable. A polynomial of degree 1 is linear (ax + b), degree 2 is quadratic (ax² + bx + c), and degree 3 is cubic. A polynomial of degree n has at most n zeroes.",
    },
    {
      heading: "Zeroes of a polynomial",
      body: "A zero of a polynomial p(x) is a value of x for which p(x) = 0. Geometrically, the zeroes are the x-coordinates of the points where the graph of the polynomial meets the x-axis.",
    },
    {
      heading: "Zeroes and coefficients (quadratic)",
      body: "If α and β are the zeroes of ax² + bx + c (a ≠ 0), then the sum α + β = −b/a and the product αβ = c/a. These let you check answers and form polynomials quickly.",
    },
    {
      heading: "Forming a quadratic from its zeroes",
      body: "If the zeroes are known, the quadratic polynomial is x² − (sum of zeroes)x + (product of zeroes), i.e. x² − (α + β)x + αβ.",
    },
  ],
  formulas: [
    { name: "Sum of zeroes (quadratic)", formula: "α + β = −b ÷ a" },
    { name: "Product of zeroes (quadratic)", formula: "α × β = c ÷ a" },
    { name: "Quadratic from zeroes", formula: "x² − (α + β)x + αβ" },
  ],
  definitions: [
    { term: "Polynomial", meaning: "An expression of the form aₙxⁿ + … + a₁x + a₀ where the powers of x are whole numbers." },
    { term: "Degree", meaning: "The highest power of the variable in the polynomial." },
    { term: "Zero of a polynomial", meaning: "A value of the variable that makes the polynomial equal to zero." },
  ],
  examples: [
    {
      problem: "Find the zeroes of x² − 2x − 8 and verify the relationship with the coefficients.",
      solution:
        "Factorise: x² − 4x + 2x − 8 = (x − 4)(x + 2) = 0, so the zeroes are 4 and −2. Sum = 4 + (−2) = 2 = −(−2)/1 = −b/a. Product = 4 × (−2) = −8 = c/a. Both relations hold.",
    },
    {
      problem: "Find a quadratic polynomial whose zeroes are 3 and −2.",
      solution:
        "Sum = 3 + (−2) = 1, product = 3 × (−2) = −6. Polynomial = x² − (sum)x + product = x² − x − 6.",
    },
    {
      problem: "If α and β are the zeroes of x² − 5x + 6, find α + β and αβ without solving.",
      solution: "α + β = −b/a = 5 and αβ = c/a = 6.",
    },
  ],
  commonMistakes: [
    "Forgetting the minus sign: the sum of zeroes is −b/a, not b/a.",
    "Confusing the degree of a polynomial with the number of terms.",
    "Writing the polynomial as x² + (sum)x + product instead of x² − (sum)x + product.",
    "Assuming every polynomial is quadratic — always check the degree first.",
  ],
  mcqs: [
    { id: "po1", difficulty: "easy", q: "The degree of the polynomial 7x³ − 2x + 1 is:", options: ["3", "2", "1", "7"], answer: 0, explanation: "The highest power of x is 3." },
    { id: "po2", difficulty: "medium", q: "The sum of the zeroes of x² − 7x + 10 is:", options: ["10", "7", "−7", "−10"], answer: 1, explanation: "Sum = −b/a = −(−7)/1 = 7." },
    { id: "po3", difficulty: "medium", q: "The product of the zeroes of 2x² − 3x − 5 is:", options: ["−5/2", "3/2", "−3/2", "5/2"], answer: 0, explanation: "Product = c/a = −5/2." },
    { id: "po4", difficulty: "easy", q: "A quadratic polynomial has at most:", options: ["no zeroes", "3 zeroes", "2 zeroes", "1 zero"], answer: 2, explanation: "A degree-2 polynomial has at most 2 zeroes." },
    { id: "po5", difficulty: "easy", q: "The zeroes of x² − 9 are:", options: ["9 only", "3 only", "±9", "±3"], answer: 3, explanation: "x² = 9 ⇒ x = ±3." },
    { id: "po6", difficulty: "medium", q: "A quadratic polynomial with zeroes 2 and 3 is:", options: ["x² − 5x + 6", "x² − 5x − 6", "x² + 5x + 6", "x² − 6x + 5"], answer: 0, explanation: "x² − (2+3)x + 2·3 = x² − 5x + 6." },
    { id: "po7", difficulty: "easy", q: "The graph of a quadratic polynomial is a:", options: ["straight line", "hyperbola", "parabola", "circle"], answer: 2, explanation: "Quadratic polynomials graph as parabolas." },
    { id: "po8", difficulty: "medium", q: "The number of real zeroes of a polynomial equals the number of points where its graph:", options: ["is highest", "meets the x-axis", "passes the origin", "touches the y-axis"], answer: 1, explanation: "Real zeroes are the x-intercepts of the graph." },
    { id: "po9", difficulty: "easy", q: "A polynomial of degree 3 is called:", options: ["linear", "constant", "cubic", "quadratic"], answer: 2, explanation: "Degree 3 ⇒ cubic polynomial." },
    { id: "po10", difficulty: "medium", q: "If α and β are zeroes of x² − 5x + 6, then α + β is:", options: ["−5", "6", "5", "1"], answer: 2, explanation: "Sum of zeroes = −b/a = 5." },
    { id: "bk10m2", difficulty: "medium", q: "A polynomial of degree 2 is called a?", options: ["Linear polynomial", "Cubic polynomial", "Quadratic polynomial", "Constant polynomial"], answer: 2, explanation: "Degree 2 means a quadratic polynomial." },
    { id: "bk10m3", difficulty: "medium", q: "A quadratic polynomial can have at most how many zeroes?", options: ["1", "3", "0", "2"], answer: 3, explanation: "A quadratic has at most two zeroes." },
  ],
  shortQuestions: [
    { q: "State the degree of 4x² − 3x⁵ + 7.", a: "The highest power is 5, so the degree is 5." },
    { q: "Find the sum and product of the zeroes of x² + 4x + 3.", a: "Sum = −4, product = 3." },
    { q: "Write a quadratic polynomial whose zeroes are 0 and 5.", a: "x² − (0 + 5)x + 0 = x² − 5x." },
  ],
  longQuestions: [
    { q: "Find the zeroes of 6x² − 7x − 3 and verify the relationship between zeroes and coefficients.", a: "Split −7x into −9x + 2x (product 6 × −3 = −18, sum −7): 6x² − 9x + 2x − 3 = 3x(2x − 3) + 1(2x − 3) = (2x − 3)(3x + 1). Zeroes: x = 3/2 and x = −1/3. Sum = 3/2 − 1/3 = 7/6 = −b/a = 7/6. Product = (3/2)(−1/3) = −1/2 = c/a = −3/6. Verified." },
    { q: "If one zero of x² − 4x + k is 3, find k and the other zero.", a: "Since 3 is a zero: 9 − 12 + k = 0 ⇒ k = 3. Sum of zeroes = 4, so the other zero = 4 − 3 = 1." },
  ],
  hots: [
    { q: "If the sum of the zeroes of kx² + 2x + 3k equals their product, find k.", a: "Sum = −2/k, product = 3k/k = 3. Setting them equal: −2/k = 3 ⇒ k = −2/3." },
    { q: "The zeroes of a quadratic polynomial are 5 and −3. Can the polynomial be 2x² − 4x − 30? Justify.", a: "Yes. x² − (5 + (−3))x + (5)(−3) = x² − 2x − 15. Multiplying by 2 gives 2x² − 4x − 30, which has the same zeroes." },
  ],
  revisionNotes: [
    "Degree = highest power; linear (1), quadratic (2), cubic (3).",
    "Zeroes are the x-intercepts of the graph.",
    "Quadratic: sum of zeroes = −b/a, product = c/a.",
    "Quadratic from zeroes: x² − (sum)x + product.",
  ],
  keyTakeaways: [
    "Use sum = −b/a and product = c/a to check or build quadratics fast.",
    "A degree-n polynomial has at most n zeroes.",
    "This chapter feeds directly into Quadratic Equations.",
  ],
  faq: [
    { q: "What is the difference between a zero and a root?", a: "They mean the same value — 'zero' is used for a polynomial p(x), and 'root' is used for the equation p(x) = 0." },
    { q: "Is the division algorithm for polynomials in the Class 10 syllabus?", a: "The current rationalised CBSE syllabus focuses on zeroes and their relationship with coefficients; check your edition, but most of the marks come from that relationship." },
    { q: "How do I form a quadratic polynomial from its zeroes?", a: "Use x² − (sum of zeroes)x + (product of zeroes)." },
  ],
  related: [
    { classId: "10", subject: "maths", slug: "real-numbers" },
    { classId: "10", subject: "maths", slug: "quadratic-equations" },
  ],
};

export default chapter;
