import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "7",
  subject: "maths",
  slug: "a-tale-of-three-intersecting-lines",
  title: "A Tale of Three Intersecting Lines",
  order: 7,
  seoTitle: "A Tale of Three Intersecting Lines Class 7 Maths — Triangles Notes & MCQs",
  metaDescription:
    "Class 7 Maths A Tale of Three Intersecting Lines (Ganita Prakash): triangles and their types, the angle sum property, the exterior angle, and the triangle inequality, with worked examples and an MCQ quiz.",
  overview:
    "Three lines meeting two at a time enclose a triangle — the simplest closed figure. This Class 7 Ganita Prakash chapter studies triangles: their types by sides and angles, the angle sum property, the exterior angle relationship, and the triangle inequality that decides which side lengths can form a triangle.",
  objectives: [
    "Classify triangles by sides and angles.",
    "Use the angle sum property.",
    "Apply the exterior angle property.",
    "Use the triangle inequality.",
  ],
  concepts: [
    {
      heading: "Types of triangles",
      body: "By sides, a triangle is equilateral (all sides equal), isosceles (two sides equal) or scalene (all sides different). By angles, it is acute (all angles less than 90°), right (one angle 90°) or obtuse (one angle more than 90°). Every triangle fits one description from each group.",
    },
    {
      heading: "Angle sum property",
      body: "The three interior angles of any triangle always add up to 180°. So if two angles are 50° and 60°, the third is 180° − 50° − 60° = 70°. This single fact solves a huge number of triangle problems.",
    },
    {
      heading: "Exterior angle property",
      body: "If one side of a triangle is extended, the exterior angle formed equals the sum of the two interior angles opposite to it. So an exterior angle of 110° equals the two far interior angles added together, which is often quicker than using the angle sum.",
    },
    {
      heading: "Triangle inequality",
      body: "Not any three lengths form a triangle. The triangle inequality says the sum of the lengths of any two sides must be greater than the third side. So sides 3, 4 and 5 work (3 + 4 > 5), but 2, 3 and 6 do not (2 + 3 < 6).",
    },
  ],
  formulas: [
    { name: "Angle sum", formula: "angle1 + angle2 + angle3 = 180°" },
    { name: "Exterior angle", formula: "exterior angle = sum of two opposite interior angles" },
    { name: "Triangle inequality", formula: "sum of any two sides > third side" },
  ],
  definitions: [
    { term: "Equilateral triangle", meaning: "A triangle with all three sides (and angles) equal." },
    { term: "Isosceles triangle", meaning: "A triangle with two equal sides." },
    { term: "Exterior angle", meaning: "The angle formed outside a triangle when a side is extended." },
    { term: "Triangle inequality", meaning: "The rule that any two sides together exceed the third." },
  ],
  examples: [
    {
      problem: "Two angles of a triangle are 40° and 75°. Find the third.",
      solution: "180° − 40° − 75° = 65°.",
    },
    {
      problem: "Can sides 2 cm, 3 cm and 6 cm form a triangle?",
      solution: "No, because 2 + 3 = 5 is not greater than 6.",
    },
    {
      problem: "An exterior angle is 120°; the two opposite interior angles are 70° and ?.",
      solution: "120° − 70° = 50°.",
    },
  ],
  commonMistakes: [
    "Thinking the angles can add to something other than 180°.",
    "Confusing isosceles (two equal sides) with equilateral (all equal).",
    "Forgetting to check the triangle inequality before forming a triangle.",
    "Adding the wrong interior angles for the exterior angle.",
  ],
  mcqs: [
    { id: "tl1", difficulty: "easy", q: "The angles of a triangle add up to:", options: ["90°", "360°", "180°", "270°"], answer: 2, explanation: "The angle sum of a triangle is 180°." },
    { id: "tl2", difficulty: "easy", q: "A triangle with all sides equal is:", options: ["scalene", "isosceles", "right", "equilateral"], answer: 3, explanation: "All sides equal means equilateral." },
    { id: "tl3", difficulty: "medium", q: "Two angles are 55° and 65°. The third is:", options: ["60°", "70°", "50°", "80°"], answer: 0, explanation: "180 − 55 − 65 = 60°." },
    { id: "tl4", difficulty: "medium", q: "A triangle with two equal sides is:", options: ["scalene", "isosceles", "equilateral", "right"], answer: 1, explanation: "Two equal sides means isosceles." },
    { id: "tl5", difficulty: "easy", q: "A triangle with one 90° angle is a:", options: ["acute triangle", "obtuse triangle", "right triangle", "equilateral triangle"], answer: 2, explanation: "A 90° angle makes it a right triangle." },
    { id: "tl6", difficulty: "medium", q: "Which set of sides can form a triangle?", options: ["1, 2, 5", "2, 2, 6", "1, 1, 3", "3, 4, 5"], answer: 3, explanation: "3 + 4 > 5, so they form a triangle." },
    { id: "tl7", difficulty: "hard", q: "An exterior angle of a triangle is 130°. The two opposite interior angles sum to:", options: ["130°", "50°", "180°", "100°"], answer: 0, explanation: "Exterior angle = sum of opposite interior angles = 130°." },
    { id: "tl8", difficulty: "easy", q: "A triangle with all angles less than 90° is:", options: ["right", "acute", "obtuse", "scalene"], answer: 1, explanation: "All angles below 90° means acute." },
    { id: "tl9", difficulty: "medium", q: "In a right triangle, the other two angles add to:", options: ["180°", "45°", "90°", "60°"], answer: 2, explanation: "180 − 90 = 90°." },
    { id: "tl10", difficulty: "hard", q: "Two sides of a triangle are 4 cm and 9 cm. The third side cannot be:", options: ["6 cm", "10 cm", "12 cm", "13 cm"], answer: 3, explanation: "It must be less than 4 + 9 = 13, so 13 is impossible." },
  ],
  shortQuestions: [
    { q: "What is the angle sum of a triangle?", a: "180°." },
    { q: "Name the three types of triangle by sides.", a: "Equilateral, isosceles and scalene." },
    { q: "State the triangle inequality.", a: "The sum of any two sides is greater than the third side." },
  ],
  longQuestions: [
    { q: "State and use the angle sum and exterior angle properties of a triangle.", a: "The angle sum property says the three interior angles of any triangle add up to 180°, so if two angles are known the third is found by subtracting their sum from 180°. The exterior angle property says that when a side is extended, the exterior angle equals the sum of the two interior angles opposite to it. For example, in a triangle with interior angles 50° and 60°, the third angle is 180° − 50° − 60° = 70°, and the exterior angle at that vertex equals 50° + 60° = 110°. The two properties are linked, since the exterior angle and its adjacent interior angle form a linear pair (110° + 70° = 180°)." },
    { q: "Explain the triangle inequality and why some sets of lengths cannot form a triangle.", a: "The triangle inequality states that for any triangle, the sum of the lengths of any two sides must be greater than the length of the third side. This is because the two shorter sides must be long enough to 'reach across' and meet over the longest side. For example, sides 3, 4 and 5 form a triangle because 3 + 4 = 7 is greater than 5. But sides 2, 3 and 6 cannot, because 2 + 3 = 5 is less than 6 — the two shorter sides are too short to meet, so the figure cannot close into a triangle." },
  ],
  hots: [
    { q: "Can a triangle have two right angles? Explain.", a: "No. Two right angles already total 180°, leaving 0° for the third angle, which is impossible." },
    { q: "An isosceles triangle has a vertex angle of 40°. What are its base angles?", a: "The base angles are equal and together make 180° − 40° = 140°, so each is 70°." },
  ],
  revisionNotes: [
    "By sides: equilateral, isosceles, scalene; by angles: acute, right, obtuse.",
    "Angle sum = 180°.",
    "Exterior angle = sum of two opposite interior angles.",
    "Triangle inequality: any two sides together > third side.",
  ],
  keyTakeaways: [
    "A triangle's angles always total 180°.",
    "The exterior angle equals the two far interior angles.",
    "Side lengths must satisfy the triangle inequality.",
  ],
  faq: [
    { q: "Do all triangles have an angle sum of 180°?", a: "Yes, the interior angles of every triangle add to 180°." },
    { q: "What is an isosceles triangle?", a: "A triangle with two equal sides (and two equal base angles)." },
    { q: "When can three lengths form a triangle?", a: "When the sum of any two of them is greater than the third." },
  ],
  related: [
    { classId: "7", subject: "maths", slug: "parallel-and-intersecting-lines" },
    { classId: "9", subject: "maths", slug: "triangles" },
  ],
};

export default chapter;
