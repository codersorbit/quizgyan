import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "6",
  subject: "maths",
  slug: "perimeter-and-area",
  title: "Perimeter and Area",
  order: 6,
  seoTitle: "Perimeter and Area Class 6 Maths (Ganita Prakash) — Formulas, Notes & MCQs",
  metaDescription:
    "Class 6 Maths Perimeter and Area (Ganita Prakash): perimeter of rectangles, squares and triangles, area by counting squares, and the area formulas for rectangle and square, with worked examples and an MCQ quiz.",
  overview:
    "How far is it around a shape, and how much surface does it cover? This Class 6 Ganita Prakash chapter answers both: perimeter is the distance around a closed figure, and area is the amount of surface inside it. Students learn the perimeter of common shapes and the area of rectangles and squares.",
  objectives: [
    "Find the perimeter of rectangles, squares and triangles.",
    "Measure area by counting unit squares.",
    "Use the area formulas for a rectangle and a square.",
    "Apply perimeter and area to simple real-life problems.",
  ],
  concepts: [
    {
      heading: "Perimeter",
      body: "The perimeter of a closed figure is the total distance around its boundary, found by adding the lengths of all its sides. For a rectangle this is 2 × (length + breadth), and for a square with equal sides it is 4 × side. Perimeter is measured in units of length such as cm or m.",
    },
    {
      heading: "Area by counting squares",
      body: "Area is the amount of surface a flat shape covers, measured in square units. One way to find it is to place the shape on squared paper and count the unit squares inside, counting a square that is more than half covered as one and ignoring one less than half covered.",
    },
    {
      heading: "Area of a rectangle and square",
      body: "Counting can be replaced by a formula. The area of a rectangle is length × breadth, and the area of a square is side × side. Area is always written in square units, such as cm² or m².",
    },
    {
      heading: "Using perimeter and area",
      body: "These ideas solve everyday problems: the length of fencing needed around a field is a perimeter, while the amount of tiles or grass to cover it is an area. The two are different and use different units, so they should not be mixed up.",
    },
  ],
  formulas: [
    { name: "Perimeter of rectangle", formula: "P = 2 × (length + breadth)" },
    { name: "Perimeter of square", formula: "P = 4 × side" },
    { name: "Area of rectangle", formula: "A = length × breadth" },
    { name: "Area of square", formula: "A = side × side" },
  ],
  definitions: [
    { term: "Perimeter", meaning: "The total distance around the boundary of a closed figure." },
    { term: "Area", meaning: "The amount of surface a flat shape covers, in square units." },
    { term: "Unit square", meaning: "A square of side 1 unit, used to measure area." },
    { term: "Square unit", meaning: "The unit of area, such as cm² or m²." },
  ],
  examples: [
    {
      problem: "Find the perimeter of a rectangle 8 cm long and 3 cm wide.",
      solution: "P = 2 × (8 + 3) = 2 × 11 = 22 cm.",
    },
    {
      problem: "Find the area of a square of side 6 cm.",
      solution: "A = 6 × 6 = 36 cm².",
    },
    {
      problem: "A rectangle has area 24 cm² and length 6 cm. Find its breadth.",
      solution: "Breadth = area ÷ length = 24 ÷ 6 = 4 cm.",
    },
  ],
  commonMistakes: [
    "Mixing up perimeter (length units) with area (square units).",
    "Using 'add the sides' for area instead of multiplying.",
    "Forgetting to double (length + breadth) for a rectangle's perimeter.",
    "Leaving out the square unit (cm²) when writing an area.",
  ],
  mcqs: [
    { id: "pe1", difficulty: "easy", q: "The distance around a closed figure is its:", options: ["area", "perimeter", "volume", "side"], answer: 1, explanation: "Distance around = perimeter." },
    { id: "pe2", difficulty: "easy", q: "Area is measured in:", options: ["square units", "units of length", "litres", "degrees"], answer: 0, explanation: "Area uses square units such as cm²." },
    { id: "pe3", difficulty: "medium", q: "Perimeter of a square of side 5 cm is:", options: ["25 cm", "10 cm", "20 cm", "15 cm"], answer: 2, explanation: "4 × 5 = 20 cm." },
    { id: "pe4", difficulty: "medium", q: "Area of a rectangle 7 cm by 4 cm is:", options: ["28 cm²", "22 cm²", "11 cm²", "14 cm²"], answer: 0, explanation: "7 × 4 = 28 cm²." },
    { id: "pe5", difficulty: "easy", q: "The area of a square of side 'a' is:", options: ["4 × a", "a + a", "2 × a", "a × a"], answer: 3, explanation: "Area of a square = side × side." },
    { id: "pe6", difficulty: "medium", q: "Perimeter of a rectangle 9 cm by 6 cm is:", options: ["54 cm", "30 cm", "15 cm", "45 cm"], answer: 1, explanation: "2 × (9 + 6) = 30 cm." },
    { id: "pe7", difficulty: "hard", q: "A square has perimeter 36 cm. Its side is:", options: ["6 cm", "12 cm", "9 cm", "18 cm"], answer: 2, explanation: "Side = 36 ÷ 4 = 9 cm." },
    { id: "pe8", difficulty: "easy", q: "Perimeter of a triangle is found by:", options: ["adding all three sides", "multiplying the sides", "side × side", "2 × side"], answer: 0, explanation: "Add the lengths of the three sides." },
    { id: "pe9", difficulty: "medium", q: "A rectangle of area 20 cm² has breadth 4 cm. Its length is:", options: ["80 cm", "16 cm", "24 cm", "5 cm"], answer: 3, explanation: "Length = 20 ÷ 4 = 5 cm." },
    { id: "pe10", difficulty: "hard", q: "Which quantity would you use for the fencing around a park?", options: ["area", "volume", "perimeter", "weight"], answer: 2, explanation: "Fencing follows the boundary — a perimeter." },
  ],
  shortQuestions: [
    { q: "How do you find the perimeter of a rectangle?", a: "Add length and breadth and double the result: 2 × (length + breadth)." },
    { q: "In what units is area measured?", a: "In square units, such as cm² or m²." },
    { q: "What is the area of a square of side 10 cm?", a: "10 × 10 = 100 cm²." },
  ],
  longQuestions: [
    { q: "Explain the difference between perimeter and area, with an example.", a: "Perimeter is the distance all the way around a shape's boundary and is measured in units of length, while area is the surface the shape covers and is measured in square units. For a rectangle 5 cm by 3 cm, the perimeter is 2 × (5 + 3) = 16 cm, and the area is 5 × 3 = 15 cm². The two answers describe different things — one is how far it is around, the other how much it covers — so they use different units and must not be confused." },
    { q: "A rectangular garden is 12 m long and 5 m wide. Find the length of fencing needed and the area to be covered with grass.", a: "Fencing runs around the boundary, so it is the perimeter: 2 × (12 + 5) = 2 × 17 = 34 m. The grass covers the inside surface, so it is the area: 12 × 5 = 60 m². The gardener therefore needs 34 m of fencing and enough grass for 60 m²." },
  ],
  hots: [
    { q: "Two rectangles have the same area of 24 cm² but different perimeters. Give an example.", a: "A 6 cm × 4 cm rectangle has perimeter 20 cm, while a 12 cm × 2 cm rectangle (same area 24 cm²) has perimeter 28 cm." },
    { q: "If the side of a square is doubled, how does its area change?", a: "The area becomes four times as large, because area = side × side, and doubling each side multiplies the product by 2 × 2 = 4." },
  ],
  revisionNotes: [
    "Perimeter = distance around (length units); area = surface inside (square units).",
    "Rectangle: P = 2(l + b), A = l × b.",
    "Square: P = 4 × side, A = side × side.",
    "Triangle perimeter = sum of three sides.",
  ],
  keyTakeaways: [
    "Perimeter and area answer different questions.",
    "Area of a rectangle is length × breadth.",
    "Always state area in square units.",
  ],
  faq: [
    { q: "What is perimeter?", a: "The total distance around the boundary of a closed figure." },
    { q: "How is the area of a rectangle found?", a: "By multiplying its length by its breadth." },
    { q: "Why is area measured in square units?", a: "Because it counts unit squares, each one unit by one unit." },
  ],
  related: [
    { classId: "8", subject: "maths", slug: "area" },
    { classId: "6", subject: "maths", slug: "symmetry" },
  ],
};

export default chapter;
