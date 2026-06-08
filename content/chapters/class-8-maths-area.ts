import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "8",
  subject: "maths",
  slug: "area",
  title: "Area",
  order: 14,
  seoTitle: "Area Class 8 Maths (Ganita Prakash) — Trapezium, Rhombus & Polygon Area, MCQs",
  metaDescription:
    "Class 8 Maths Area (Ganita Prakash): area of parallelograms, triangles, trapeziums, rhombuses, general quadrilaterals and polygons, with formulas, solved examples and an MCQ quiz.",
  overview:
    "Area is the amount of surface a flat figure covers, measured in square units. This Class 8 chapter extends area beyond rectangles to parallelograms, triangles, trapeziums, rhombuses and general quadrilaterals, and shows how any polygon's area can be found by splitting it into these simpler shapes.",
  objectives: [
    "Find the area of parallelograms and triangles.",
    "Apply the trapezium and rhombus area formulas.",
    "Find the area of a general quadrilateral using a diagonal.",
    "Compute the area of a polygon by splitting it into known shapes.",
  ],
  concepts: [
    {
      heading: "Parallelogram and triangle",
      body: "A parallelogram's area equals base times the perpendicular height, area = b × h. A triangle is half a parallelogram on the same base and height, so its area = ½ × b × h. The height must be measured perpendicular to the chosen base, not along a slanted side.",
    },
    {
      heading: "Trapezium",
      body: "A trapezium has one pair of parallel sides. Its area is the average of the two parallel sides times the distance between them: area = ½ × (a + b) × h, where a and b are the parallel sides and h the perpendicular height. This comes from splitting the trapezium into two triangles.",
    },
    {
      heading: "Rhombus and quadrilateral by diagonals",
      body: "A rhombus (and any quadrilateral with perpendicular diagonals) has area = ½ × d₁ × d₂, where d₁ and d₂ are the diagonals. For a general quadrilateral, a diagonal splits it into two triangles; add their areas, using the perpendicular distances from the opposite vertices to that diagonal.",
    },
    {
      heading: "Area of a polygon",
      body: "A many-sided polygon has no single formula, so we divide it into triangles, rectangles and trapeziums whose areas we can find, then add them up. Choosing convenient diagonals or perpendiculars makes the split easier.",
    },
  ],
  formulas: [
    { name: "Parallelogram", formula: "area = base × height = b × h" },
    { name: "Triangle", formula: "area = ½ × base × height" },
    { name: "Trapezium", formula: "area = ½ × (a + b) × h" },
    { name: "Rhombus", formula: "area = ½ × d₁ × d₂" },
  ],
  definitions: [
    { term: "Area", meaning: "The measure of the surface enclosed by a flat figure, in square units." },
    { term: "Height (altitude)", meaning: "The perpendicular distance from a base to the opposite side or vertex." },
    { term: "Trapezium", meaning: "A quadrilateral with one pair of parallel sides." },
    { term: "Diagonal", meaning: "A line segment joining two non-adjacent vertices of a polygon." },
  ],
  examples: [
    {
      problem: "Find the area of a parallelogram with base 8 cm and height 5 cm.",
      solution: "area = b × h = 8 × 5 = 40 cm².",
    },
    {
      problem: "A trapezium has parallel sides 10 cm and 6 cm, height 4 cm. Find its area.",
      solution: "area = ½ × (10 + 6) × 4 = ½ × 16 × 4 = 32 cm².",
    },
    {
      problem: "Find the area of a rhombus whose diagonals are 12 cm and 9 cm.",
      solution: "area = ½ × d₁ × d₂ = ½ × 12 × 9 = 54 cm².",
    },
    {
      problem: "A triangle has base 14 m and height 6 m. Find its area.",
      solution: "area = ½ × 14 × 6 = 42 m².",
    },
  ],
  commonMistakes: [
    "Using a slanted side as the height instead of the perpendicular height.",
    "Forgetting the ½ in the triangle, trapezium and rhombus formulas.",
    "Adding the parallel sides of a trapezium without halving the result.",
    "Reporting area in linear units (cm) instead of square units (cm²).",
  ],
  mcqs: [
    { id: "ar1", difficulty: "easy", q: "Area of a parallelogram is:", options: ["½ × b × h", "b × h", "(a + b) × h", "d₁ × d₂"], answer: 1, explanation: "Parallelogram area = base × height." },
    { id: "ar2", difficulty: "easy", q: "Area of a triangle with base 10 and height 4 is:", options: ["40", "14", "20", "24"], answer: 2, explanation: "½ × 10 × 4 = 20." },
    { id: "ar3", difficulty: "medium", q: "The area of a trapezium is:", options: ["½ × (a + b) × h", "(a + b) × h", "a × b", "½ × a × b"], answer: 0, explanation: "Average of parallel sides × height." },
    { id: "ar4", difficulty: "medium", q: "A rhombus with diagonals 8 and 6 has area:", options: ["48", "24", "14", "28"], answer: 1, explanation: "½ × 8 × 6 = 24." },
    { id: "ar5", difficulty: "easy", q: "Area is measured in:", options: ["square units", "units", "cubic units", "no units"], answer: 0, explanation: "Area uses square units." },
    { id: "ar6", difficulty: "medium", q: "A parallelogram of base 9 and height 7 has area:", options: ["63", "16", "32", "56"], answer: 0, explanation: "9 × 7 = 63." },
    { id: "ar7", difficulty: "medium", q: "Trapezium parallel sides 12 and 8, height 5. Area is:", options: ["100", "60", "40", "50"], answer: 3, explanation: "½ × (12+8) × 5 = ½ × 20 × 5 = 50." },
    { id: "ar8", difficulty: "hard", q: "To find a general quadrilateral's area, we split it using a:", options: ["height", "median", "diagonal", "radius"], answer: 2, explanation: "A diagonal splits it into two triangles." },
    { id: "ar9", difficulty: "easy", q: "The height of a figure must be measured:", options: ["along a slant side", "as the longest side", "around the figure", "perpendicular to the base"], answer: 3, explanation: "Height is perpendicular to the base." },
    { id: "ar10", difficulty: "hard", q: "A triangle has area 30 cm² and base 12 cm. Its height is:", options: ["2.5 cm", "10 cm", "6 cm", "5 cm"], answer: 3, explanation: "30 = ½ × 12 × h → h = 60/12 = 5 cm." },
  ],
  shortQuestions: [
    { q: "Write the formula for the area of a trapezium.", a: "Area = ½ × (sum of parallel sides) × height = ½ × (a + b) × h." },
    { q: "How do you find the area of a rhombus from its diagonals?", a: "Area = ½ × d₁ × d₂, half the product of the diagonals." },
    { q: "Why must the height be perpendicular to the base?", a: "Because area measures the surface covered straight across, a slanted length would overstate it." },
  ],
  longQuestions: [
    { q: "Derive the area of a trapezium by splitting it into triangles.", a: "Draw a diagonal of the trapezium; it divides the shape into two triangles with the same height h (the distance between the parallel sides). One triangle has base a and the other base b, so the total area = ½×a×h + ½×b×h = ½×(a + b)×h. This is the trapezium area formula." },
    { q: "A field is shaped like a quadrilateral. Explain how to find its area using one diagonal.", a: "Draw a diagonal joining two opposite corners, splitting the field into two triangles. Measure the diagonal as the common base, and the perpendicular distances (offsets) from the other two vertices to this diagonal. Each triangle's area is ½ × diagonal × its offset; add the two areas to get the field's total area." },
  ],
  hots: [
    { q: "Two parallelograms have equal areas but different shapes. What must be true?", a: "Their base × height products are equal, even if the individual bases and heights differ — e.g. base 8, height 3 and base 6, height 4 both give area 24." },
    { q: "If a triangle and a parallelogram share the same base and height, how do their areas compare?", a: "The triangle's area is exactly half the parallelogram's, since the triangle is half of a parallelogram on the same base and height." },
  ],
  revisionNotes: [
    "Parallelogram = b × h; triangle = ½ × b × h.",
    "Trapezium = ½ × (a + b) × h.",
    "Rhombus (⟂ diagonals) = ½ × d₁ × d₂.",
    "Polygon area = sum of areas of simpler split shapes; answer in square units.",
  ],
  keyTakeaways: [
    "Always use the perpendicular height, not a slant side.",
    "Complex shapes are split into triangles, rectangles and trapeziums.",
    "Diagonals turn quadrilaterals into triangles you can measure.",
  ],
  faq: [
    { q: "What is the area of a trapezium?", a: "Half the sum of the parallel sides times the perpendicular height: ½ × (a + b) × h." },
    { q: "How do I find the area of an irregular polygon?", a: "Split it into triangles, rectangles or trapeziums, find each area, and add them." },
    { q: "What units does area use?", a: "Square units such as cm², m² or km²." },
  ],
  related: [
    { classId: "8", subject: "maths", slug: "quadrilaterals" },
    { classId: "9", subject: "maths", slug: "herons-formula" },
  ],
};

export default chapter;
