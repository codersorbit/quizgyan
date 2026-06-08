import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "8",
  subject: "maths",
  slug: "we-distribute-yet-things-multiply",
  title: "We Distribute Yet Things Multiply",
  order: 6,
  seoTitle: "We Distribute Yet Things Multiply Class 8 Maths — Distributive Law Notes & MCQs",
  metaDescription:
    "Class 8 Maths We Distribute, Yet Things Multiply (Ganita Prakash): the distributive property, the area model of multiplication, multiplying algebraic expressions and expanding brackets, with solved examples and an MCQ quiz.",
  overview:
    "This Class 8 Ganita Prakash chapter uncovers why sharing into groups and multiplying are linked through the distributive property: a × (b + c) = a × b + a × c. Using area models and number examples, it builds up to multiplying algebraic expressions and expanding brackets — a skill at the heart of algebra.",
  objectives: [
    "State and use the distributive property of multiplication over addition.",
    "Use the area model to picture multiplication.",
    "Multiply a number or term by a sum.",
    "Multiply two binomials by expanding brackets.",
  ],
  concepts: [
    {
      heading: "The distributive property",
      body: "Multiplication distributes over addition: a × (b + c) = a×b + a×c. For example 6 × 23 = 6 × (20 + 3) = 120 + 18 = 138. The same idea works with subtraction: a × (b − c) = a×b − a×c. This lets us break hard products into easy parts.",
    },
    {
      heading: "The area model",
      body: "A rectangle of length (b + c) and width a has area a(b + c). Splitting the length into b and c gives two rectangles of areas a×b and a×c, and their sum equals the whole. This picture explains the distributive property and makes expanding brackets feel natural.",
    },
    {
      heading: "Multiplying a term by a sum",
      body: "To multiply a single term by an expression in brackets, multiply it by each term inside: 3(x + 4) = 3x + 12, and 2a(a + 5) = 2a² + 10a. Each part is handled separately and then added, exactly as the distributive property says.",
    },
    {
      heading: "Multiplying two binomials",
      body: "To multiply two sums, each term of the first multiplies every term of the second: (x + 2)(x + 3) = x×x + x×3 + 2×x + 2×3 = x² + 5x + 6. This is just the distributive property applied twice.",
    },
  ],
  formulas: [
    { name: "Distributive over addition", formula: "a × (b + c) = a×b + a×c" },
    { name: "Distributive over subtraction", formula: "a × (b − c) = a×b − a×c" },
    { name: "Product of two binomials", formula: "(x + a)(x + b) = x² + (a+b)x + ab" },
  ],
  definitions: [
    { term: "Distributive property", meaning: "Multiplying a sum by a number equals multiplying each addend and adding the results." },
    { term: "Term", meaning: "A single number or product of numbers and variables in an expression." },
    { term: "Binomial", meaning: "An algebraic expression with two terms, such as x + 3." },
    { term: "Expand", meaning: "To remove brackets by multiplying out using the distributive property." },
  ],
  examples: [
    {
      problem: "Use the distributive property to find 7 × 104.",
      solution: "7 × 104 = 7 × (100 + 4) = 700 + 28 = 728.",
    },
    {
      problem: "Expand 5(2x + 3).",
      solution: "5 × 2x + 5 × 3 = 10x + 15.",
    },
    {
      problem: "Multiply (x + 4)(x + 2).",
      solution: "x×x + x×2 + 4×x + 4×2 = x² + 2x + 4x + 8 = x² + 6x + 8.",
    },
  ],
  commonMistakes: [
    "Multiplying only the first term inside the bracket, e.g. 3(x + 4) = 3x + 4.",
    "Dropping a sign when distributing over subtraction.",
    "Forgetting to multiply every pair of terms when expanding two binomials.",
    "Adding exponents wrongly: x × x = x², not 2x.",
  ],
  mcqs: [
    { id: "wd1", difficulty: "easy", q: "The distributive property says a(b + c) =", options: ["ab + c", "a + bc", "ab + ac", "abc"], answer: 2, explanation: "Multiply a by each term: ab + ac." },
    { id: "wd2", difficulty: "medium", q: "Using distribution, 8 × 102 =", options: ["810", "826", "800", "816"], answer: 3, explanation: "8 × (100 + 2) = 800 + 16 = 816." },
    { id: "wd3", difficulty: "easy", q: "Expand 4(x + 5):", options: ["4x + 5", "4x + 20", "x + 20", "4x + 9"], answer: 1, explanation: "4×x + 4×5 = 4x + 20." },
    { id: "wd4", difficulty: "medium", q: "2a(a + 3) equals:", options: ["2a² + 6a", "2a + 6", "2a² + 3", "a² + 6a"], answer: 0, explanation: "2a×a + 2a×3 = 2a² + 6a." },
    { id: "wd5", difficulty: "hard", q: "(x + 2)(x + 3) equals:", options: ["x² + 6", "2x + 5", "x² + 6x + 5", "x² + 5x + 6"], answer: 3, explanation: "x² + 3x + 2x + 6 = x² + 5x + 6." },
    { id: "wd6", difficulty: "easy", q: "a(b − c) equals:", options: ["ab − ac", "ab + ac", "a − bc", "abc"], answer: 0, explanation: "Distribute over subtraction: ab − ac." },
    { id: "wd7", difficulty: "medium", q: "The area model splits a rectangle to show:", options: ["addition only", "the distributive property", "division", "subtraction only"], answer: 1, explanation: "It pictures a(b+c) = ab + ac." },
    { id: "wd8", difficulty: "medium", q: "Expand 3(2y − 4):", options: ["6y − 4", "6y + 12", "5y − 12", "6y − 12"], answer: 3, explanation: "3×2y − 3×4 = 6y − 12." },
    { id: "wd9", difficulty: "hard", q: "x × x equals:", options: ["2x", "x", "x²", "x + x"], answer: 2, explanation: "Multiplying x by x gives x²." },
    { id: "wd10", difficulty: "easy", q: "In (x + 2)(x + 3), the number of products to add is:", options: ["two", "three", "four", "one"], answer: 2, explanation: "Each of two terms multiplies each of two terms: 2×2 = 4 products." },
  ],
  shortQuestions: [
    { q: "State the distributive property.", a: "a × (b + c) = a×b + a×c; multiplication distributes over addition." },
    { q: "Expand 6(x + 2).", a: "6x + 12." },
    { q: "Why does the area model explain distribution?", a: "A rectangle of width a and length (b+c) splits into areas a×b and a×c that add to a(b+c)." },
  ],
  longQuestions: [
    { q: "Show how the distributive property makes 23 × 7 easy, and explain the area model behind it.", a: "Write 23 as 20 + 3, so 23 × 7 = (20 + 3) × 7 = 20×7 + 3×7 = 140 + 21 = 161. The area model pictures a rectangle 7 units wide and 23 units long; splitting the length into 20 and 3 gives two rectangles of areas 140 and 21, whose sum is the whole area 161 — exactly what distribution computes." },
    { q: "Multiply (x + 5)(x + 2) step by step and state the rule used.", a: "Using the distributive property twice, each term of the first bracket multiplies each term of the second: x×x = x², x×2 = 2x, 5×x = 5x, 5×2 = 10. Adding gives x² + 2x + 5x + 10 = x² + 7x + 10. The rule is (x + a)(x + b) = x² + (a+b)x + ab." },
  ],
  hots: [
    { q: "Explain why 99 × 47 can be found as 47 × 100 − 47.", a: "Since 99 = 100 − 1, distribution gives 99 × 47 = (100 − 1) × 47 = 4700 − 47 = 4653, turning a hard product into an easy subtraction." },
    { q: "A square of side (x + 3) has what area, and how does distribution show it?", a: "Its area is (x + 3)(x + 3) = x² + 3x + 3x + 9 = x² + 6x + 9; distribution multiplies each term of one factor by each term of the other." },
  ],
  revisionNotes: [
    "a(b + c) = ab + ac; a(b − c) = ab − ac.",
    "Area model: a rectangle split lengthwise shows distribution.",
    "Multiply a term by a sum: multiply each inside term.",
    "Two binomials: every term times every term, then add.",
  ],
  keyTakeaways: [
    "Distribution turns hard products into easy parts.",
    "Expanding brackets is repeated distribution.",
    "x × x = x², a common slip to avoid.",
  ],
  faq: [
    { q: "What is the distributive property?", a: "Multiplying a sum by a number equals multiplying each part and adding: a(b+c) = ab + ac." },
    { q: "How do I expand two brackets?", a: "Multiply each term in the first bracket by each term in the second, then add the products." },
    { q: "Does x + x equal x²?", a: "No — x + x = 2x, while x × x = x²." },
  ],
  related: [
    { classId: "8", subject: "maths", slug: "algebra-play" },
    { classId: "9", subject: "maths", slug: "polynomials" },
  ],
};

export default chapter;
