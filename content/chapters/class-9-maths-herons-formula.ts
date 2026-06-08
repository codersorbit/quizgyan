import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "9",
  subject: "maths",
  slug: "herons-formula",
  title: "Heron's Formula",
  order: 10,
  seoTitle: "Heron's Formula Class 9 CBSE Notes, MCQs, Quiz & Solved Examples",
  metaDescription:
    "Class 9 Maths Heron's Formula: semi-perimeter, area of a triangle from its three sides, area of quadrilaterals by splitting into triangles, solved examples and MCQ quiz with answers.",
  overview:
    "Heron's formula lets you find the area of a triangle when you know only its three sides — no height needed. This Class 9 chapter introduces the semi-perimeter, the formula itself, and how to extend it to quadrilaterals by dividing them into triangles. It is short, formula-based and reliably scoring.",
  objectives: [
    "Compute the semi-perimeter of a triangle.",
    "Find the area of a triangle using Heron's formula.",
    "Apply the formula when the height is unknown.",
    "Find the area of a quadrilateral by splitting it into triangles.",
    "Use the formula in real-life area problems.",
  ],
  concepts: [
    {
      heading: "Semi-perimeter",
      body: "For a triangle with sides a, b and c, the semi-perimeter is s = (a + b + c)/2. It is half the perimeter and is the starting point for Heron's formula.",
    },
    {
      heading: "Heron's formula",
      body: "The area of the triangle is Area = √[s(s − a)(s − b)(s − c)]. This works for any triangle, scalene, isosceles or equilateral, using only its side lengths.",
    },
    {
      heading: "Why it is useful",
      body: "When the height of a triangle is not given (as in many real figures and fields), the usual ½ × base × height cannot be applied directly, but Heron's formula gives the area straight from the sides.",
    },
    {
      heading: "Area of quadrilaterals",
      body: "A quadrilateral can be divided into two triangles by a diagonal. Find the area of each triangle (using Heron's formula if needed) and add them to get the total area.",
    },
  ],
  formulas: [
    { name: "Semi-perimeter", formula: "s = (a + b + c) ÷ 2" },
    { name: "Heron's formula", formula: "Area = √[s(s − a)(s − b)(s − c)]" },
    { name: "Equilateral triangle area", formula: "Area = (√3 ÷ 4) × side²" },
  ],
  definitions: [
    { term: "Semi-perimeter", meaning: "Half the perimeter of a triangle, s = (a + b + c)/2." },
    { term: "Heron's formula", meaning: "A formula giving a triangle's area from its three side lengths." },
    { term: "Perimeter", meaning: "The total length of the boundary of a figure." },
  ],
  examples: [
    {
      problem: "Find the area of a triangle with sides 3 cm, 4 cm and 5 cm.",
      solution:
        "s = (3 + 4 + 5)/2 = 6. Area = √[6(6 − 3)(6 − 4)(6 − 5)] = √[6 × 3 × 2 × 1] = √36 = 6 cm².",
    },
    {
      problem: "Find the area of a triangle with sides 13 cm, 14 cm and 15 cm.",
      solution:
        "s = (13 + 14 + 15)/2 = 21. Area = √[21(21 − 13)(21 − 14)(21 − 15)] = √[21 × 8 × 7 × 6] = √7056 = 84 cm².",
    },
    {
      problem: "Find the area of an equilateral triangle of side 6 cm.",
      solution: "Area = (√3/4) × 6² = (√3/4) × 36 = 9√3 cm² ≈ 15.59 cm².",
    },
  ],
  commonMistakes: [
    "Using the perimeter instead of the semi-perimeter in the formula.",
    "Forgetting to take the square root at the end.",
    "Subtracting the wrong side from s.",
    "Mixing up units (area is in square units).",
  ],
  mcqs: [
    { id: "hf1", difficulty: "easy", q: "The semi-perimeter of a triangle with sides a, b, c is:", options: ["a + b + c", "(a + b − c)/2", "(a + b + c)/3", "(a + b + c)/2"], answer: 3, explanation: "s = (a + b + c)/2." },
    { id: "hf2", difficulty: "easy", q: "Heron's formula for the area of a triangle is:", options: ["½ × base × height", "s(s − a)(s − b)(s − c)", "√(abc)", "√[s(s − a)(s − b)(s − c)]"], answer: 3, explanation: "Area = √[s(s − a)(s − b)(s − c)]." },
    { id: "hf3", difficulty: "medium", q: "For sides 3, 4, 5, the semi-perimeter is:", options: ["5", "4", "12", "6"], answer: 3, explanation: "(3 + 4 + 5)/2 = 6." },
    { id: "hf4", difficulty: "medium", q: "The area of a triangle with sides 3, 4, 5 cm is:", options: ["6 cm²", "10 cm²", "7.5 cm²", "12 cm²"], answer: 0, explanation: "√[6·3·2·1] = √36 = 6 cm²." },
    { id: "hf5", difficulty: "easy", q: "Heron's formula is most useful when we do not know the:", options: ["perimeter", "sides", "height", "angles only"], answer: 2, explanation: "It avoids needing the height of the triangle." },
    { id: "hf6", difficulty: "medium", q: "The area of an equilateral triangle of side a is:", options: ["(√3/2)a", "(1/2)a²", "(√3/4)a²", "a²"], answer: 2, explanation: "Area of an equilateral triangle = (√3/4)a²." },
    { id: "hf7", difficulty: "medium", q: "A quadrilateral's area can be found by splitting it into:", options: ["two triangles", "four circles", "two trapeziums only", "three rectangles"], answer: 0, explanation: "A diagonal divides it into two triangles." },
    { id: "hf8", difficulty: "easy", q: "If s = 9 and a side a = 6, then (s − a) equals:", options: ["9", "3", "15", "6"], answer: 1, explanation: "9 − 6 = 3." },
    { id: "hf9", difficulty: "medium", q: "The perimeter of a triangle with sides 5, 12, 13 is:", options: ["15", "30", "60", "25"], answer: 1, explanation: "5 + 12 + 13 = 30." },
    { id: "hf10", difficulty: "hard", q: "The area of a triangle with sides 5, 12, 13 cm is:", options: ["30 cm²", "39 cm²", "65 cm²", "60 cm²"], answer: 0, explanation: "s = 15; √[15·10·3·2] = √900 = 30 cm² (it is right-angled, ½·5·12 = 30)." },
    { id: "bk9m8", difficulty: "hard", q: "In Heron's formula, the letter 's' stands for the?", options: ["Semi-perimeter", "Side", "Area", "Slant height"], answer: 0, explanation: "s = (a + b + c) ÷ 2, the semi-perimeter of the triangle." },
    { id: "bk9m9", difficulty: "hard", q: "The area of a triangle with base 10 cm and height 8 cm is?", options: ["80 cm²", "40 cm²", "18 cm²", "40 cm"], answer: 1, explanation: "Area = ½ × base × height = ½ × 10 × 8 = 40 cm²." },
  ],
  shortQuestions: [
    { q: "Write Heron's formula.", a: "Area = √[s(s − a)(s − b)(s − c)], where s = (a + b + c)/2." },
    { q: "Find s for a triangle with sides 7, 8, 9.", a: "s = (7 + 8 + 9)/2 = 12." },
    { q: "What is the area formula for an equilateral triangle of side a?", a: "(√3/4)a²." },
  ],
  longQuestions: [
    { q: "Find the area of a triangular park with sides 40 m, 24 m and 32 m.", a: "s = (40 + 24 + 32)/2 = 48. Area = √[48(48 − 40)(48 − 24)(48 − 32)] = √[48 × 8 × 24 × 16] = √147456 = 384 m²." },
    { q: "Find the area of a quadrilateral ABCD in which a diagonal divides it into two triangles of sides (3, 4, 5) and (5, 12, 13).", a: "Triangle 1: s = 6, area = √[6·3·2·1] = 6. Triangle 2: s = 15, area = √[15·10·3·2] = 30. Total area = 6 + 30 = 36 square units." },
  ],
  hots: [
    { q: "The sides of a triangle are in the ratio 3 : 4 : 5 and its perimeter is 36 cm. Find its area.", a: "Sides are 9, 12 and 15 cm. s = 18; Area = √[18(18 − 9)(18 − 12)(18 − 15)] = √[18 × 9 × 6 × 3] = √2916 = 54 cm²." },
    { q: "Why does Heron's formula always give the same answer as ½ × base × height for a triangle?", a: "Both compute the same area; Heron's formula is derived from the standard area formula and the side lengths, so for any valid triangle the two agree." },
  ],
  revisionNotes: [
    "s = (a + b + c)/2.",
    "Area = √[s(s − a)(s − b)(s − c)].",
    "Use when the height is unknown.",
    "Quadrilateral area = sum of two triangle areas (split by a diagonal).",
  ],
  keyTakeaways: [
    "Always use the semi-perimeter, not the full perimeter.",
    "Heron's formula needs only the three sides.",
    "Split quadrilaterals into triangles to use it.",
  ],
  faq: [
    { q: "When should I use Heron's formula?", a: "When you know all three sides of a triangle but not its height." },
    { q: "What is the semi-perimeter?", a: "Half the perimeter, s = (a + b + c)/2 — the value plugged into Heron's formula." },
    { q: "Can Heron's formula find the area of a quadrilateral?", a: "Indirectly — divide the quadrilateral into two triangles with a diagonal, find each area, and add them." },
  ],
  related: [
    { classId: "9", subject: "maths", slug: "circles" },
    { classId: "9", subject: "maths", slug: "surface-areas-and-volumes" },
  ],
};

export default chapter;
