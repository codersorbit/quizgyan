import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "10",
  subject: "maths",
  slug: "triangles",
  title: "Triangles",
  order: 6,
  seoTitle: "Triangles Class 10 CBSE Notes, MCQs, Quiz & Similarity Theorems",
  metaDescription:
    "Class 10 Maths Triangles: similar triangles, Basic Proportionality Theorem (Thales), AA/SSS/SAS similarity criteria, ratio of areas, Pythagoras theorem, solved examples and MCQ quiz.",
  overview:
    "This chapter is about similar triangles — figures with the same shape but not necessarily the same size. You will learn the Basic Proportionality Theorem (Thales' theorem), the criteria that prove two triangles similar, how the areas of similar triangles compare, and the Pythagoras theorem. Similarity proofs are a regular feature of the CBSE Class 10 board exam.",
  objectives: [
    "Understand when two figures are similar.",
    "State and apply the Basic Proportionality Theorem.",
    "Use the AA, SSS and SAS criteria to prove triangles similar.",
    "Relate the areas of two similar triangles to their sides.",
    "Apply the Pythagoras theorem and its converse.",
  ],
  concepts: [
    {
      heading: "Similar figures",
      body: "Two figures are similar if they have the same shape — their corresponding angles are equal and corresponding sides are in the same ratio. All circles are similar, and all squares are similar; triangles are similar only under certain conditions.",
    },
    {
      heading: "Basic Proportionality Theorem (Thales)",
      body: "If a line is drawn parallel to one side of a triangle to intersect the other two sides at distinct points, then it divides those two sides in the same ratio. So if DE ∥ BC in triangle ABC, then AD/DB = AE/EC.",
    },
    {
      heading: "Criteria for similarity",
      body: "Two triangles are similar by AA (two pairs of equal angles), SSS (all three pairs of sides in the same ratio), or SAS (one pair of equal angles between two pairs of proportional sides).",
    },
    {
      heading: "Areas and the Pythagoras theorem",
      body: "The ratio of the areas of two similar triangles equals the ratio of the squares of their corresponding sides. In a right-angled triangle, the square on the hypotenuse equals the sum of the squares on the other two sides (Pythagoras theorem).",
    },
  ],
  formulas: [
    { name: "Basic Proportionality Theorem", formula: "If DE ∥ BC, then AD/DB = AE/EC" },
    { name: "Ratio of areas (similar triangles)", formula: "ar(ABC)/ar(PQR) = (AB/PQ)²" },
    { name: "Pythagoras theorem", formula: "hypotenuse² = base² + height²" },
  ],
  definitions: [
    { term: "Similar triangles", meaning: "Triangles with equal corresponding angles and proportional corresponding sides (same shape)." },
    { term: "Congruent triangles", meaning: "Triangles that are similar AND the same size (sides equal, ratio 1:1)." },
    { term: "Hypotenuse", meaning: "The side opposite the right angle in a right-angled triangle — the longest side." },
  ],
  examples: [
    {
      problem: "In triangle ABC, DE ∥ BC with AD = 2 cm, DB = 3 cm and AE = 4 cm. Find EC.",
      solution:
        "By the Basic Proportionality Theorem, AD/DB = AE/EC ⇒ 2/3 = 4/EC ⇒ EC = (4 × 3)/2 = 6 cm.",
    },
    {
      problem: "Two similar triangles have areas 36 cm² and 81 cm². Find the ratio of their corresponding sides.",
      solution:
        "Ratio of areas = (ratio of sides)². So ratio of sides = √(36/81) = 6/9 = 2/3.",
    },
    {
      problem: "Find the hypotenuse of a right triangle with legs 6 cm and 8 cm.",
      solution: "hypotenuse² = 6² + 8² = 36 + 64 = 100 ⇒ hypotenuse = 10 cm.",
    },
  ],
  commonMistakes: [
    "Matching the wrong corresponding sides when writing the similarity ratio.",
    "Using the side ratio for areas instead of the square of the ratio.",
    "Confusing similarity (same shape) with congruence (same shape and size).",
    "Applying Pythagoras to a non-right triangle.",
  ],
  mcqs: [
    { id: "tr1", difficulty: "easy", q: "The Basic Proportionality Theorem is also known as:", options: ["the midpoint theorem", "Heron's formula", "Thales theorem", "Pythagoras theorem"], answer: 2, explanation: "The BPT is also called Thales' theorem." },
    { id: "tr2", difficulty: "medium", q: "If two triangles are similar, the ratio of their areas equals:", options: ["1", "the square of the ratio of their sides", "the ratio of their sides", "the cube of the ratio"], answer: 1, explanation: "Areas are in the ratio of the squares of corresponding sides." },
    { id: "tr3", difficulty: "easy", q: "In a right triangle, the square of the hypotenuse equals:", options: ["the product of the other two sides", "the difference of the squares", "twice the base", "the sum of the squares of the other two sides"], answer: 3, explanation: "Pythagoras: hyp² = base² + height²." },
    { id: "tr4", difficulty: "easy", q: "Two triangles with two pairs of equal angles are similar by:", options: ["AA", "SAS", "SSS", "RHS"], answer: 0, explanation: "Two equal angles is the AA similarity criterion." },
    { id: "tr5", difficulty: "medium", q: "If DE ∥ BC and AD/DB = 3/4, then AE/EC is:", options: ["4/3", "1", "3/4", "7/4"], answer: 2, explanation: "By BPT, AE/EC = AD/DB = 3/4." },
    { id: "tr6", difficulty: "medium", q: "If the sides of two similar triangles are in the ratio 2 : 3, their areas are in the ratio:", options: ["2 : 3", "8 : 27", "4 : 9", "3 : 2"], answer: 2, explanation: "Area ratio = (2 : 3)² = 4 : 9." },
    { id: "tr7", difficulty: "easy", q: "The longest side of a right-angled triangle is the:", options: ["hypotenuse", "base", "median", "height"], answer: 0, explanation: "The hypotenuse, opposite the right angle, is the longest side." },
    { id: "tr8", difficulty: "easy", q: "All ____ triangles are similar.", options: ["equilateral", "scalene", "right-angled", "isosceles"], answer: 0, explanation: "All equilateral triangles have equal angles (60°) and proportional sides." },
    { id: "tr9", difficulty: "medium", q: "The hypotenuse of a right triangle with legs 9 cm and 12 cm is:", options: ["15 cm", "21 cm", "10 cm", "13 cm"], answer: 0, explanation: "√(81 + 144) = √225 = 15 cm." },
    { id: "tr10", difficulty: "easy", q: "Figures with the same shape but not necessarily the same size are:", options: ["identical", "congruent", "equal", "similar"], answer: 3, explanation: "Same shape, possibly different size = similar." },
  ],
  shortQuestions: [
    { q: "State the AA similarity criterion.", a: "If two angles of one triangle are equal to two angles of another, the triangles are similar." },
    { q: "Are all squares similar? Why?", a: "Yes — all their angles are 90° and corresponding sides are in equal ratio." },
    { q: "A right triangle has legs 5 cm and 12 cm. Find the hypotenuse.", a: "√(25 + 144) = √169 = 13 cm." },
  ],
  longQuestions: [
    { q: "In triangle ABC, D and E are points on AB and AC such that DE ∥ BC. If AD = 4 cm, DB = 6 cm and AC = 15 cm, find AE.", a: "By BPT, AD/DB = AE/EC. Let AE = x, then EC = 15 − x. So 4/6 = x/(15 − x) ⇒ 4(15 − x) = 6x ⇒ 60 − 4x = 6x ⇒ 60 = 10x ⇒ x = 6 cm." },
    { q: "The areas of two similar triangles are 100 cm² and 49 cm². If a side of the larger triangle is 20 cm, find the corresponding side of the smaller one.", a: "Ratio of sides = √(100/49) = 10/7. So the corresponding side = 20 × 7/10 = 14 cm." },
  ],
  hots: [
    { q: "A vertical pole 6 m high casts a shadow 4 m long. At the same time, a tower casts a 28 m shadow. Find the height of the tower.", a: "The triangles formed are similar, so height/shadow is constant: 6/4 = h/28 ⇒ h = 6 × 28/4 = 42 m." },
    { q: "Prove that the diagonal of a square of side a has length a√2.", a: "The diagonal forms a right triangle with the two sides as legs. By Pythagoras, diagonal² = a² + a² = 2a², so diagonal = a√2." },
  ],
  revisionNotes: [
    "Similar = same shape; equal angles, proportional sides.",
    "BPT: DE ∥ BC ⇒ AD/DB = AE/EC.",
    "Similarity criteria: AA, SSS, SAS.",
    "Area ratio = (side ratio)².",
    "Pythagoras: hyp² = base² + height².",
  ],
  keyTakeaways: [
    "Identify corresponding vertices carefully before writing ratios.",
    "Square the side ratio for areas — a very common exam trap.",
    "Similarity is the basis of heights-and-distances problems.",
  ],
  faq: [
    { q: "What is the focus of the Class 10 Triangles chapter?", a: "Mainly similarity of triangles — the Basic Proportionality Theorem and the AA, SSS and SAS criteria." },
    { q: "What is the difference between similar and congruent triangles?", a: "Similar triangles have the same shape (proportional sides); congruent triangles also have the same size (sides equal, ratio 1:1)." },
    { q: "How are areas of similar triangles related?", a: "Their areas are in the ratio of the squares of their corresponding sides." },
  ],
  related: [
    { classId: "10", subject: "maths", slug: "coordinate-geometry" },
    { classId: "10", subject: "maths", slug: "introduction-to-trigonometry" },
  ],
};

export default chapter;
