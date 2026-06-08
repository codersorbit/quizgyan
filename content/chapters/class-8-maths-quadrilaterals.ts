import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "8",
  subject: "maths",
  slug: "quadrilaterals",
  title: "Quadrilaterals",
  order: 4,
  seoTitle: "Quadrilaterals Class 8 Maths (Ganita Prakash) — Angle Sum & Properties, MCQs",
  metaDescription:
    "Class 8 Maths Quadrilaterals (Ganita Prakash): angle sum of a quadrilateral, types of quadrilaterals, properties of parallelograms, rectangles, rhombuses, squares and trapeziums, with solved examples and an MCQ quiz.",
  overview:
    "A quadrilateral is a closed figure with four sides, four vertices and four angles. This Class 8 chapter shows that the four angles of any quadrilateral add up to 360°, classifies the special quadrilaterals, and works out the properties of parallelograms and their special cases — rectangle, rhombus and square.",
  objectives: [
    "Use the angle sum property of a quadrilateral (360°).",
    "Classify quadrilaterals by their sides and angles.",
    "State and apply the properties of a parallelogram.",
    "Identify how rectangles, rhombuses and squares are special parallelograms.",
  ],
  concepts: [
    {
      heading: "Angle sum of a quadrilateral",
      body: "A quadrilateral can be split into two triangles by a diagonal. Each triangle's angles add to 180°, so the four angles of a quadrilateral add to 2 × 180° = 360°. This lets us find a missing angle when the other three are known.",
    },
    {
      heading: "Types of quadrilaterals",
      body: "A trapezium has one pair of parallel sides. A parallelogram has both pairs of opposite sides parallel. A rhombus is a parallelogram with all sides equal, a rectangle is a parallelogram with all right angles, and a square is both — equal sides and right angles. A kite has two pairs of equal adjacent sides.",
    },
    {
      heading: "Properties of a parallelogram",
      body: "In a parallelogram, opposite sides are equal and parallel, opposite angles are equal, and adjacent angles are supplementary (add to 180°). The two diagonals bisect each other, meeting at their midpoints.",
    },
    {
      heading: "Special parallelograms",
      body: "A rectangle adds equal diagonals to the parallelogram properties. A rhombus adds diagonals that bisect each other at right angles. A square, being both, has all of these: equal sides, right angles, and equal diagonals that bisect at 90°.",
    },
  ],
  formulas: [
    { name: "Angle sum (quadrilateral)", formula: "∠A + ∠B + ∠C + ∠D = 360°" },
    { name: "Adjacent angles of parallelogram", formula: "sum of two adjacent angles = 180°" },
    { name: "Angle sum of a polygon", formula: "(n − 2) × 180°, for n sides" },
  ],
  definitions: [
    { term: "Quadrilateral", meaning: "A closed figure bounded by four line segments." },
    { term: "Parallelogram", meaning: "A quadrilateral with both pairs of opposite sides parallel." },
    { term: "Rhombus", meaning: "A parallelogram with all four sides equal." },
    { term: "Trapezium", meaning: "A quadrilateral with exactly one pair of parallel sides." },
  ],
  examples: [
    {
      problem: "Three angles of a quadrilateral are 90°, 80° and 100°. Find the fourth.",
      solution: "Sum is 360°, so the fourth = 360 − (90 + 80 + 100) = 360 − 270 = 90°.",
    },
    {
      problem: "In a parallelogram one angle is 70°. Find the other three.",
      solution: "Opposite angle = 70°. Adjacent angles are supplementary: 180 − 70 = 110°. So angles are 70°, 110°, 70°, 110°.",
    },
    {
      problem: "Why is every square also a rectangle?",
      solution: "A square has four right angles and opposite sides parallel and equal — exactly the rectangle conditions — so a square is a special rectangle.",
    },
  ],
  commonMistakes: [
    "Using 180° instead of 360° for the angle sum of a quadrilateral.",
    "Thinking a trapezium has two pairs of parallel sides (it has exactly one).",
    "Assuming the diagonals of every parallelogram are equal (only rectangles/squares).",
    "Believing a rhombus must have right angles — only a square does.",
  ],
  mcqs: [
    { id: "qd1", difficulty: "easy", q: "The sum of the angles of a quadrilateral is:", options: ["180°", "270°", "360°", "540°"], answer: 2, explanation: "It splits into two triangles: 2 × 180° = 360°." },
    { id: "qd2", difficulty: "easy", q: "A quadrilateral with both pairs of opposite sides parallel is a:", options: ["trapezium", "none", "kite", "parallelogram"], answer: 3, explanation: "That is the definition of a parallelogram." },
    { id: "qd3", difficulty: "medium", q: "In a parallelogram, opposite angles are:", options: ["equal", "supplementary", "complementary", "unequal"], answer: 0, explanation: "Opposite angles of a parallelogram are equal." },
    { id: "qd4", difficulty: "medium", q: "Three angles of a quadrilateral are 100°, 70°, 60°. The fourth is:", options: ["140°", "130°", "120°", "150°"], answer: 1, explanation: "360 − (100+70+60) = 130°." },
    { id: "qd5", difficulty: "easy", q: "A parallelogram with all sides equal is a:", options: ["rectangle", "trapezium", "kite", "rhombus"], answer: 3, explanation: "Equal sides make it a rhombus." },
    { id: "qd6", difficulty: "medium", q: "The diagonals of a rhombus bisect each other at:", options: ["30°", "45°", "60°", "90°"], answer: 3, explanation: "Rhombus diagonals meet at right angles." },
    { id: "qd7", difficulty: "easy", q: "A trapezium has how many pairs of parallel sides?", options: ["one", "two", "three", "none"], answer: 0, explanation: "Exactly one pair of parallel sides." },
    { id: "qd8", difficulty: "medium", q: "Adjacent angles of a parallelogram add up to:", options: ["90°", "360°", "180°", "270°"], answer: 2, explanation: "They are supplementary, summing to 180°." },
    { id: "qd9", difficulty: "hard", q: "Which has equal diagonals?", options: ["general parallelogram", "rhombus", "rectangle", "kite"], answer: 2, explanation: "A rectangle's diagonals are equal." },
    { id: "qd10", difficulty: "hard", q: "Sum of interior angles of a pentagon (5 sides) is:", options: ["360°", "540°", "720°", "450°"], answer: 1, explanation: "(n−2)×180 = 3×180 = 540°." },
  ],
  shortQuestions: [
    { q: "State the angle sum property of a quadrilateral.", a: "The four interior angles of a quadrilateral add up to 360°." },
    { q: "How are the diagonals of a parallelogram related?", a: "They bisect each other (cross at their midpoints)." },
    { q: "What makes a square different from a rectangle?", a: "A square has all four sides equal, while a rectangle only needs opposite sides equal." },
  ],
  longQuestions: [
    { q: "List the properties of a parallelogram and name its three special cases.", a: "In a parallelogram: opposite sides are equal and parallel, opposite angles are equal, adjacent angles are supplementary, and the diagonals bisect each other. Its special cases are the rectangle (all right angles, equal diagonals), the rhombus (all sides equal, diagonals perpendicular), and the square (both — equal sides, right angles, equal perpendicular-bisecting diagonals)." },
    { q: "Show, using triangles, why a quadrilateral's angles sum to 360°.", a: "Draw one diagonal of the quadrilateral. It divides the figure into two triangles. The angles of each triangle sum to 180°, and together these angles make up all four angles of the quadrilateral, so the total is 180° + 180° = 360°." },
  ],
  hots: [
    { q: "Can a quadrilateral have three obtuse angles? Explain.", a: "Yes. Three angles just over 90° (say 100° each = 300°) leave 60° for the fourth, still summing to 360°. It cannot have four obtuse angles, since that would exceed 360°." },
    { q: "The angles of a quadrilateral are in the ratio 1:2:3:4. Find them.", a: "Let the parts be x, 2x, 3x, 4x. Their sum 10x = 360°, so x = 36°. The angles are 36°, 72°, 108° and 144°." },
  ],
  revisionNotes: [
    "Quadrilateral angle sum = 360°.",
    "Parallelogram: opposite sides/angles equal; diagonals bisect each other.",
    "Rectangle = right angles + equal diagonals; rhombus = equal sides + ⟂ diagonals; square = both.",
    "Polygon angle sum = (n − 2) × 180°.",
  ],
  keyTakeaways: [
    "Every special quadrilateral inherits the parallelogram's properties plus its own.",
    "A diagonal splits a quadrilateral into two triangles.",
    "Use 360° to find any missing fourth angle.",
  ],
  faq: [
    { q: "Is a square a rhombus?", a: "Yes — a square has all sides equal, so it is a special rhombus (with right angles)." },
    { q: "Do the diagonals of every parallelogram bisect each other?", a: "Yes, that is a property of all parallelograms; only some also have equal or perpendicular diagonals." },
    { q: "What is the angle sum of a quadrilateral?", a: "Always 360°, found by splitting it into two triangles." },
  ],
  related: [
    { classId: "8", subject: "maths", slug: "area" },
    { classId: "9", subject: "maths", slug: "quadrilaterals" },
  ],
};

export default chapter;
