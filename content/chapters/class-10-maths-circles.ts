import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "10",
  subject: "maths",
  slug: "circles",
  title: "Circles",
  order: 10,
  seoTitle: "Circles Class 10 CBSE Notes, MCQs, Quiz & Tangent Theorems",
  metaDescription:
    "Class 10 Maths Circles: tangent to a circle, number of tangents, tangent perpendicular to radius, equal tangents from an external point, solved examples and MCQ quiz with answers.",
  overview:
    "In Class 10, the chapter on Circles focuses on tangents — straight lines that touch a circle at exactly one point. You will learn how many tangents can be drawn from a point, the key fact that a tangent is perpendicular to the radius at the point of contact, and that the two tangents drawn from an external point are equal in length. These two theorems drive almost every question.",
  objectives: [
    "Define a tangent and identify the point of contact.",
    "State how many tangents pass through points inside, on, and outside a circle.",
    "Use the fact that the tangent is perpendicular to the radius at the contact point.",
    "Use the theorem that tangents from an external point are equal.",
    "Solve numerical problems on tangent lengths.",
  ],
  concepts: [
    {
      heading: "Tangent to a circle",
      body: "A tangent is a line that touches a circle at exactly one point, called the point of contact. A secant, by contrast, cuts the circle at two points.",
    },
    {
      heading: "Number of tangents from a point",
      body: "From a point inside the circle, no tangent can be drawn. From a point on the circle, exactly one tangent can be drawn. From a point outside the circle, exactly two tangents can be drawn.",
    },
    {
      heading: "Tangent perpendicular to radius",
      body: "The tangent at any point of a circle is perpendicular to the radius drawn to that point of contact. This gives a right angle that is used in most tangent calculations.",
    },
    {
      heading: "Equal tangents from an external point",
      body: "The lengths of the two tangents drawn from an external point to a circle are equal. Combined with the right angle above, the tangent length from a point at distance d from the centre is √(d² − r²).",
    },
  ],
  formulas: [
    { name: "Tangent length", formula: "length = √(d² − r²)", note: "d = distance of the external point from the centre, r = radius." },
    { name: "Angle with radius", formula: "tangent ⟂ radius at the point of contact (90°)" },
  ],
  definitions: [
    { term: "Tangent", meaning: "A line touching a circle at exactly one point." },
    { term: "Point of contact", meaning: "The single point where a tangent touches the circle." },
    { term: "Secant", meaning: "A line that intersects a circle at two points." },
  ],
  examples: [
    {
      problem: "From a point 13 cm from the centre of a circle of radius 5 cm, find the length of the tangent.",
      solution:
        "length = √(d² − r²) = √(13² − 5²) = √(169 − 25) = √144 = 12 cm.",
    },
    {
      problem: "The tangent from a point at distance 10 cm from the centre is 8 cm long. Find the radius.",
      solution:
        "length = √(d² − r²) ⇒ 8 = √(100 − r²) ⇒ 64 = 100 − r² ⇒ r² = 36 ⇒ r = 6 cm.",
    },
    {
      problem: "Two tangents PA and PB are drawn from an external point P. If PA = 7 cm, what is PB?",
      solution: "Tangents from an external point are equal, so PB = PA = 7 cm.",
    },
  ],
  commonMistakes: [
    "Thinking a tangent meets the circle at two points (that is a secant).",
    "Forgetting the right angle between the tangent and the radius.",
    "Using d² + r² instead of d² − r² for the tangent length.",
    "Assuming a point inside the circle has tangents (it has none).",
  ],
  mcqs: [
    { id: "ci1", difficulty: "easy", q: "A tangent to a circle touches it at:", options: ["three points", "exactly one point", "two points", "no point"], answer: 1, explanation: "A tangent touches at exactly one point." },
    { id: "ci2", difficulty: "easy", q: "The angle between a tangent and the radius at the point of contact is:", options: ["45°", "180°", "90°", "60°"], answer: 2, explanation: "The tangent is perpendicular to the radius there." },
    { id: "ci3", difficulty: "easy", q: "The number of tangents that can be drawn from an external point is:", options: ["2", "infinite", "3", "1"], answer: 0, explanation: "Exactly two tangents from an external point." },
    { id: "ci4", difficulty: "easy", q: "The two tangents drawn from an external point are:", options: ["unequal", "perpendicular", "parallel", "equal in length"], answer: 3, explanation: "Tangents from an external point are equal in length." },
    { id: "ci5", difficulty: "medium", q: "The tangent length from a point 10 cm from the centre of a circle of radius 6 cm is:", options: ["14 cm", "8 cm", "4 cm", "16 cm"], answer: 1, explanation: "√(100 − 36) = √64 = 8 cm." },
    { id: "ci6", difficulty: "easy", q: "The number of tangents from a point lying on the circle is:", options: ["1", "0", "infinite", "2"], answer: 0, explanation: "Exactly one tangent at a point on the circle." },
    { id: "ci7", difficulty: "easy", q: "The number of tangents from a point inside the circle is:", options: ["1", "2", "3", "0"], answer: 3, explanation: "No tangent can be drawn from an interior point." },
    { id: "ci8", difficulty: "medium", q: "A line that cuts a circle at two points is called a:", options: ["tangent", "radius", "chord line", "secant"], answer: 3, explanation: "A line meeting a circle at two points is a secant." },
    { id: "ci9", difficulty: "medium", q: "The tangent length from a point 17 cm from the centre of a circle of radius 8 cm is:", options: ["25 cm", "12 cm", "15 cm", "9 cm"], answer: 2, explanation: "√(289 − 64) = √225 = 15 cm." },
    { id: "ci10", difficulty: "hard", q: "A circle is inscribed in a square of side 10 cm. The radius of the circle is:", options: ["2.5 cm", "5√2 cm", "10 cm", "5 cm"], answer: 3, explanation: "The diameter equals the side, so radius = 10/2 = 5 cm." },
    { id: "bk10m12", difficulty: "medium", q: "The longest chord of a circle is its?", options: ["Diameter", "Radius", "Tangent", "Arc"], answer: 0, explanation: "The diameter is the longest chord, passing through the centre." },
    { id: "bk10m13", difficulty: "medium", q: "A line that touches a circle at exactly one point is a?", options: ["Chord", "Tangent", "Secant", "Diameter"], answer: 1, explanation: "A tangent meets a circle at exactly one point." },
  ],
  shortQuestions: [
    { q: "How many tangents can a circle have in all?", a: "Infinitely many — one at every point of the circle." },
    { q: "State the angle between a tangent and the radius at the point of contact.", a: "90° (they are perpendicular)." },
    { q: "If one tangent from an external point is 9 cm, what is the other?", a: "9 cm — tangents from an external point are equal." },
  ],
  longQuestions: [
    { q: "Prove that the tangent at any point of a circle is perpendicular to the radius through the point of contact (state the idea).", a: "Take the centre O and tangent at point P. Any point Q on the tangent other than P lies outside the circle, so OQ > OP. Hence OP is the shortest distance from O to the tangent, and the shortest distance is the perpendicular — so OP ⟂ the tangent." },
    { q: "Two concentric circles have radii 5 cm and 3 cm. Find the length of the chord of the larger circle that is tangent to the smaller one.", a: "The tangent touches the smaller circle, so the radius (3 cm) is perpendicular to the chord and bisects it. Half-chord = √(5² − 3²) = √16 = 4 cm, so the full chord = 8 cm." },
  ],
  hots: [
    { q: "A quadrilateral ABCD is drawn so that all four sides touch a circle. Show that AB + CD = AD + BC.", a: "Using equal tangents from each vertex, the tangent lengths satisfy AB + CD = (AP + PB) + (CR + RD) and AD + BC = (AS + SD) + (BQ + QC); equal tangents pair up to make both sums equal." },
    { q: "Why can't a tangent be drawn from a point inside the circle?", a: "Any line through an interior point must cross the circle at two points (a secant), so it can never touch at just one point." },
  ],
  revisionNotes: [
    "Tangent: touches the circle at exactly one point.",
    "Tangents from a point: inside 0, on 1, outside 2.",
    "Tangent ⟂ radius at the point of contact (90°).",
    "Tangents from an external point are equal; length = √(d² − r²).",
  ],
  keyTakeaways: [
    "The right angle between tangent and radius unlocks most numericals.",
    "Equal tangents from a point simplify perimeter and quadrilateral problems.",
    "Distinguish tangent (one point) from secant (two points).",
  ],
  faq: [
    { q: "What is the main idea of the Class 10 Circles chapter?", a: "Tangents — how many can be drawn from a point, that a tangent is perpendicular to the radius, and that tangents from an external point are equal." },
    { q: "How do I find the length of a tangent?", a: "Use √(d² − r²), where d is the distance of the point from the centre and r is the radius." },
    { q: "Is a tangent the same as a chord?", a: "No. A tangent touches the circle at one point; a chord joins two points on the circle." },
  ],
  related: [
    { classId: "10", subject: "maths", slug: "triangles" },
    { classId: "10", subject: "maths", slug: "areas-related-to-circles" },
  ],
};

export default chapter;
