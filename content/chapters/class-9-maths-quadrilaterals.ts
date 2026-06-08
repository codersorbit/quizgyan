import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "9",
  subject: "maths",
  slug: "quadrilaterals",
  title: "Quadrilaterals",
  order: 8,
  seoTitle: "Quadrilaterals Class 9 CBSE Notes, MCQs, Quiz & Parallelogram Properties",
  metaDescription:
    "Class 9 Maths Quadrilaterals: angle sum property, types of quadrilaterals, properties of a parallelogram, conditions for a parallelogram and the mid-point theorem, solved examples and MCQ quiz.",
  overview:
    "A quadrilateral is a closed figure with four sides. This Class 9 chapter covers the angle sum property of quadrilaterals, the family of special quadrilaterals, the key properties of a parallelogram and the conditions that make a quadrilateral one, and the very useful mid-point theorem. The parallelogram results are favourites in board proofs.",
  objectives: [
    "Use the angle sum property of a quadrilateral.",
    "Identify the special quadrilaterals and their properties.",
    "State and apply the properties of a parallelogram.",
    "Recognise the conditions for a quadrilateral to be a parallelogram.",
    "Apply the mid-point theorem.",
  ],
  concepts: [
    {
      heading: "Angle sum property",
      body: "The sum of the four interior angles of any quadrilateral is 360°. This follows from splitting the quadrilateral into two triangles, each contributing 180°.",
    },
    {
      heading: "Special quadrilaterals",
      body: "Quadrilaterals include the parallelogram, rectangle, rhombus, square and trapezium. A square is both a rectangle and a rhombus; a rectangle and a rhombus are special parallelograms.",
    },
    {
      heading: "Properties of a parallelogram",
      body: "In a parallelogram: opposite sides are equal and parallel, opposite angles are equal, consecutive angles are supplementary, and the diagonals bisect each other.",
    },
    {
      heading: "Mid-point theorem",
      body: "The line segment joining the mid-points of two sides of a triangle is parallel to the third side and equal to half of it. Its converse is also true and is often used in proofs.",
    },
  ],
  formulas: [
    { name: "Angle sum of a quadrilateral", formula: "∠A + ∠B + ∠C + ∠D = 360°" },
    { name: "Parallelogram diagonals", formula: "the diagonals bisect each other" },
    { name: "Mid-point theorem", formula: "segment joining mid-points = ½ × third side, and parallel to it" },
  ],
  definitions: [
    { term: "Quadrilateral", meaning: "A closed figure bounded by four line segments." },
    { term: "Parallelogram", meaning: "A quadrilateral with both pairs of opposite sides parallel." },
    { term: "Rhombus", meaning: "A parallelogram with all four sides equal." },
    { term: "Trapezium", meaning: "A quadrilateral with exactly one pair of parallel sides." },
  ],
  examples: [
    {
      problem: "Three angles of a quadrilateral are 90°, 80° and 100°. Find the fourth angle.",
      solution: "Fourth angle = 360° − (90° + 80° + 100°) = 360° − 270° = 90°.",
    },
    {
      problem: "In a parallelogram, one angle is 110°. Find the other three angles.",
      solution:
        "Opposite angle = 110°. Consecutive angles are supplementary, so the other two = 180° − 110° = 70° each. Angles: 110°, 70°, 110°, 70°.",
    },
    {
      problem: "In a triangle of side 12 cm, what is the length of the segment joining the mid-points of the other two sides relative to that side?",
      solution:
        "By the mid-point theorem, this segment is half of 12 cm = 6 cm and is parallel to that side.",
    },
  ],
  commonMistakes: [
    "Taking the angle sum of a quadrilateral as 180° instead of 360°.",
    "Assuming every parallelogram has equal diagonals — only rectangles and squares do.",
    "Confusing a trapezium (one pair parallel) with a parallelogram (two pairs).",
    "Forgetting the 'half' in the mid-point theorem.",
  ],
  mcqs: [
    { id: "qd1", difficulty: "easy", q: "The sum of the interior angles of a quadrilateral is:", options: ["540°", "180°", "270°", "360°"], answer: 3, explanation: "A quadrilateral's angles sum to 360°." },
    { id: "qd2", difficulty: "easy", q: "In a parallelogram, opposite sides are:", options: ["equal only", "equal and parallel", "perpendicular", "unequal"], answer: 1, explanation: "Opposite sides are equal and parallel." },
    { id: "qd3", difficulty: "medium", q: "The diagonals of a parallelogram:", options: ["are perpendicular", "do not intersect", "bisect each other", "are equal"], answer: 2, explanation: "Parallelogram diagonals bisect each other." },
    { id: "qd4", difficulty: "easy", q: "A parallelogram with all sides equal is a:", options: ["kite", "trapezium", "rectangle", "rhombus"], answer: 3, explanation: "Equal sides make it a rhombus." },
    { id: "qd5", difficulty: "medium", q: "The mid-point theorem says the joining segment is ____ the third side.", options: ["three times", "half of", "equal to", "twice"], answer: 1, explanation: "It is half the length of the third side." },
    { id: "qd6", difficulty: "easy", q: "A quadrilateral with exactly one pair of parallel sides is a:", options: ["rhombus", "parallelogram", "trapezium", "square"], answer: 2, explanation: "One pair of parallel sides defines a trapezium." },
    { id: "qd7", difficulty: "medium", q: "In a parallelogram, consecutive angles are:", options: ["equal", "right angles", "supplementary", "complementary"], answer: 2, explanation: "Consecutive angles add to 180°." },
    { id: "qd8", difficulty: "easy", q: "A rectangle is a parallelogram with:", options: ["all sides equal", "equal diagonals", "no parallel sides", "one right angle and hence all right angles"], answer: 3, explanation: "A rectangle is a parallelogram with right angles (and equal diagonals)." },
    { id: "qd9", difficulty: "medium", q: "Three angles of a quadrilateral are 70°, 80° and 90°. The fourth is:", options: ["120°", "110°", "100°", "130°"], answer: 0, explanation: "360° − 240° = 120°." },
    { id: "qd10", difficulty: "hard", q: "Which quadrilateral has all sides equal AND all angles equal?", options: ["rectangle", "rhombus", "trapezium", "square"], answer: 3, explanation: "A square has equal sides and equal (right) angles." },
  ],
  shortQuestions: [
    { q: "What is the angle sum of a quadrilateral?", a: "360°." },
    { q: "Name one property that a rhombus has but a general parallelogram may not.", a: "All four sides are equal (its diagonals are also perpendicular)." },
    { q: "State the mid-point theorem.", a: "The segment joining the mid-points of two sides of a triangle is parallel to the third side and half its length." },
  ],
  longQuestions: [
    { q: "Prove that in a parallelogram the opposite angles are equal (outline).", a: "In parallelogram ABCD, AB ∥ DC and AD ∥ BC. Using the alternate-angle property with diagonal AC, triangles ABC and CDA are congruent (ASA). Hence ∠B = ∠D, and similarly ∠A = ∠C — opposite angles are equal." },
    { q: "List the properties of a parallelogram.", a: "Opposite sides are equal and parallel; opposite angles are equal; consecutive angles are supplementary; the diagonals bisect each other. A rectangle adds equal diagonals; a rhombus adds equal sides with perpendicular diagonals; a square has both." },
  ],
  hots: [
    { q: "If the diagonals of a quadrilateral bisect each other, what type of quadrilateral is it?", a: "It must be a parallelogram, because diagonals bisecting each other is a sufficient condition for a parallelogram." },
    { q: "The diagonals of a quadrilateral are equal and bisect each other at right angles. What is it?", a: "It is a square — equal diagonals (rectangle), bisecting at right angles (rhombus), so both conditions give a square." },
  ],
  revisionNotes: [
    "Angle sum of a quadrilateral = 360°.",
    "Parallelogram: opposite sides/angles equal, diagonals bisect each other.",
    "Rectangle, rhombus, square are special parallelograms; trapezium has one parallel pair.",
    "Mid-point theorem: joining segment = ½ third side and parallel to it.",
  ],
  keyTakeaways: [
    "Use the 360° rule to find a missing angle.",
    "Know which special parallelogram has which extra property.",
    "The mid-point theorem and its converse are powerful in proofs.",
  ],
  faq: [
    { q: "What is the angle sum of a quadrilateral?", a: "The four interior angles of any quadrilateral add up to 360°." },
    { q: "What are the properties of a parallelogram?", a: "Opposite sides are equal and parallel, opposite angles are equal, consecutive angles are supplementary, and the diagonals bisect each other." },
    { q: "What is the mid-point theorem?", a: "The line joining the mid-points of two sides of a triangle is parallel to the third side and equal to half of it." },
  ],
  related: [
    { classId: "9", subject: "maths", slug: "triangles" },
    { classId: "9", subject: "maths", slug: "circles" },
  ],
};

export default chapter;
