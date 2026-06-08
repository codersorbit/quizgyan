import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "10",
  subject: "maths",
  slug: "coordinate-geometry",
  title: "Coordinate Geometry",
  order: 7,
  seoTitle: "Coordinate Geometry Class 10 CBSE Notes, MCQs, Quiz & Formulas",
  metaDescription:
    "Class 10 Maths Coordinate Geometry: distance formula, section formula, midpoint formula, area of a triangle, solved examples, MCQ quiz with answers and important questions.",
  overview:
    "Coordinate geometry connects algebra and geometry by placing points on a plane using coordinates (x, y). In Class 10 you learn to find the distance between two points, the coordinates of a point that divides a line segment in a given ratio, the midpoint of a segment, and the area of a triangle from its vertices. The formulas are direct and very scoring.",
  objectives: [
    "Find the distance between two points using the distance formula.",
    "Use the section formula to divide a segment in a given ratio.",
    "Find the midpoint of a line segment.",
    "Find the area of a triangle from the coordinates of its vertices.",
    "Apply these formulas to verify shapes and collinearity.",
  ],
  concepts: [
    {
      heading: "The distance formula",
      body: "The distance between two points A(x₁, y₁) and B(x₂, y₂) is √[(x₂ − x₁)² + (y₂ − y₁)²]. The distance of a point from the origin is √(x² + y²).",
    },
    {
      heading: "The section formula",
      body: "The point that divides the line segment joining A(x₁, y₁) and B(x₂, y₂) internally in the ratio m : n has coordinates ((mx₂ + nx₁)/(m + n), (my₂ + ny₁)/(m + n)).",
    },
    {
      heading: "Midpoint",
      body: "The midpoint of A(x₁, y₁) and B(x₂, y₂) is ((x₁ + x₂)/2, (y₁ + y₂)/2) — the special case of the section formula with ratio 1 : 1.",
    },
    {
      heading: "Area of a triangle",
      body: "For vertices (x₁, y₁), (x₂, y₂), (x₃, y₃), the area is ½ |x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)|. If the area is zero, the three points are collinear.",
    },
  ],
  formulas: [
    { name: "Distance", formula: "√[(x₂ − x₁)² + (y₂ − y₁)²]" },
    { name: "Section (ratio m:n)", formula: "((mx₂ + nx₁)/(m + n), (my₂ + ny₁)/(m + n))" },
    { name: "Midpoint", formula: "((x₁ + x₂)/2, (y₁ + y₂)/2)" },
    { name: "Area of triangle", formula: "½ |x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)|" },
  ],
  definitions: [
    { term: "Coordinates", meaning: "An ordered pair (x, y) locating a point relative to the x- and y-axes." },
    { term: "Collinear points", meaning: "Three or more points that lie on the same straight line (the triangle's area is zero)." },
    { term: "Origin", meaning: "The point (0, 0) where the axes meet." },
  ],
  examples: [
    {
      problem: "Find the distance between A(3, 4) and the origin.",
      solution: "Distance = √(3² + 4²) = √(9 + 16) = √25 = 5 units.",
    },
    {
      problem: "Find the midpoint of A(2, 3) and B(4, 7).",
      solution: "Midpoint = ((2 + 4)/2, (3 + 7)/2) = (3, 5).",
    },
    {
      problem: "Find the point dividing the segment joining (−1, 7) and (4, −3) in the ratio 2 : 3.",
      solution:
        "x = (2·4 + 3·(−1))/(2 + 3) = (8 − 3)/5 = 1; y = (2·(−3) + 3·7)/5 = (−6 + 21)/5 = 3. The point is (1, 3).",
    },
  ],
  commonMistakes: [
    "Subtracting coordinates in the wrong order inside the squares (the square fixes the sign, but be careful).",
    "Swapping m and n with the wrong points in the section formula.",
    "Forgetting the modulus (| |) when finding area, which can give a negative value.",
    "Mixing up x- and y-coordinates.",
  ],
  mcqs: [
    { id: "cg1", difficulty: "easy", q: "The distance of the point (3, 4) from the origin is:", options: ["4", "7", "3", "5"], answer: 3, explanation: "√(9 + 16) = 5." },
    { id: "cg2", difficulty: "easy", q: "The distance formula between (x₁, y₁) and (x₂, y₂) is:", options: ["(x₂ − x₁) + (y₂ − y₁)", "√(x₁x₂ + y₁y₂)", "(x₂ − x₁)² + (y₂ − y₁)²", "√[(x₂ − x₁)² + (y₂ − y₁)²]"], answer: 3, explanation: "Take the square root of the sum of the squared differences." },
    { id: "cg3", difficulty: "easy", q: "The midpoint of (0, 0) and (4, 6) is:", options: ["(4, 6)", "(0, 0)", "(2, 3)", "(3, 2)"], answer: 2, explanation: "((0+4)/2, (0+6)/2) = (2, 3)." },
    { id: "cg4", difficulty: "medium", q: "The midpoint of A(−2, 3) and B(2, −3) is:", options: ["(−2, −3)", "(0, 0)", "(2, 3)", "(1, 1)"], answer: 1, explanation: "((−2+2)/2, (3−3)/2) = (0, 0)." },
    { id: "cg5", difficulty: "easy", q: "The distance between (0, 0) and (6, 8) is:", options: ["8", "14", "12", "10"], answer: 3, explanation: "√(36 + 64) = √100 = 10." },
    { id: "cg6", difficulty: "easy", q: "A point on the x-axis has a y-coordinate equal to:", options: ["1", "0", "any number", "its x-value"], answer: 1, explanation: "Every point on the x-axis has y = 0." },
    { id: "cg7", difficulty: "medium", q: "The distance between (1, 2) and (1, 6) is:", options: ["2", "5", "8", "4"], answer: 3, explanation: "Same x; distance = |6 − 2| = 4." },
    { id: "cg8", difficulty: "medium", q: "If the area of a triangle formed by three points is 0, the points are:", options: ["equidistant", "a right triangle", "collinear", "the vertices of a square"], answer: 2, explanation: "Zero area means the points lie on a straight line — collinear." },
    { id: "cg9", difficulty: "medium", q: "The point dividing (2, 4) and (6, 8) in ratio 1 : 1 is:", options: ["(8, 12)", "(4, 6)", "(3, 5)", "(2, 4)"], answer: 1, explanation: "Ratio 1:1 is the midpoint: (4, 6)." },
    { id: "cg10", difficulty: "hard", q: "The distance between (a, 0) and (0, a) is:", options: ["a²", "a", "2a", "a√2"], answer: 3, explanation: "√(a² + a²) = √(2a²) = a√2." },
    { id: "bk10m8", difficulty: "hard", q: "The distance between the points (0, 0) and (3, 4) is?", options: ["5", "7", "1", "25"], answer: 0, explanation: "Distance = √(3² + 4²) = √25 = 5." },
  ],
  shortQuestions: [
    { q: "Find the distance between (2, 3) and (5, 7).", a: "√[(5−2)² + (7−3)²] = √(9 + 16) = √25 = 5." },
    { q: "What is the midpoint of (1, 1) and (5, 5)?", a: "(3, 3)." },
    { q: "Where does a point on the y-axis have its x-coordinate?", a: "Its x-coordinate is 0." },
  ],
  longQuestions: [
    { q: "Show that the points A(1, 7), B(4, 2), C(−1, −1) and D(−4, 4) are the vertices of a square.", a: "Compute all four sides: AB = BC = CD = DA = √34 (each from the distance formula), and the diagonals AC = BD = √68. Equal sides and equal diagonals mean ABCD is a square." },
    { q: "Find the area of the triangle with vertices (1, 1), (4, 1) and (1, 5).", a: "Area = ½ |1(1 − 5) + 4(5 − 1) + 1(1 − 1)| = ½ |−4 + 16 + 0| = ½ × 12 = 6 square units." },
  ],
  hots: [
    { q: "Find the ratio in which the point (−4, 6) divides the segment joining A(−6, 10) and B(3, −8).", a: "Let the ratio be k : 1. Then −4 = (3k − 6)/(k + 1) ⇒ −4k − 4 = 3k − 6 ⇒ −7k = −2 ⇒ k = 2/7. So the ratio is 2 : 7." },
    { q: "If (3, a) is the midpoint of (1, 4) and (5, 8), find a.", a: "Midpoint y = (4 + 8)/2 = 6, so a = 6 (and the x checks: (1 + 5)/2 = 3)." },
  ],
  revisionNotes: [
    "Distance: √[(x₂ − x₁)² + (y₂ − y₁)²].",
    "Section (m:n): ((mx₂ + nx₁)/(m+n), (my₂ + ny₁)/(m+n)).",
    "Midpoint: ((x₁ + x₂)/2, (y₁ + y₂)/2).",
    "Area = ½|x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)|; zero ⇒ collinear.",
  ],
  keyTakeaways: [
    "The midpoint formula is just the section formula at 1 : 1.",
    "Use the area formula to test collinearity quickly.",
    "Distance + side comparison proves squares, rhombi and isosceles triangles.",
  ],
  faq: [
    { q: "What does coordinate geometry let me do?", a: "It lets you compute lengths, divide segments, find midpoints and areas, and identify shapes using algebra instead of construction." },
    { q: "How do I check whether three points are collinear?", a: "Find the area of the triangle they form; if it is zero, the points are collinear." },
    { q: "Is the distance always positive?", a: "Yes — the square root in the formula always gives a non-negative length." },
  ],
  related: [
    { classId: "10", subject: "maths", slug: "triangles" },
    { classId: "10", subject: "maths", slug: "introduction-to-trigonometry" },
  ],
};

export default chapter;
