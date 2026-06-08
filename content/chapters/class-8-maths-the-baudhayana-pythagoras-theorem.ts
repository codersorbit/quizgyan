import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "8",
  subject: "maths",
  slug: "the-baudhayana-pythagoras-theorem",
  title: "The Baudhayana Pythagoras Theorem",
  order: 9,
  seoTitle: "Baudhayana–Pythagoras Theorem Class 8 Maths — Right Triangles Notes & MCQs",
  metaDescription:
    "Class 8 Maths The Baudhayana–Pythagoras Theorem (Ganita Prakash): the relation between the sides of a right-angled triangle, Pythagorean triples, finding an unknown side, and real-life uses, with solved examples and an MCQ quiz.",
  overview:
    "Long before Pythagoras, the Indian mathematician Baudhayana stated the relationship between the sides of a right-angled triangle. This Class 8 chapter explores that theorem: in a right triangle the square on the hypotenuse equals the sum of the squares on the other two sides, and shows how to use it to find unknown lengths and to check right angles.",
  objectives: [
    "State the Baudhayana–Pythagoras theorem.",
    "Identify the hypotenuse and the legs of a right triangle.",
    "Find an unknown side using the theorem.",
    "Recognise and use Pythagorean triples.",
  ],
  concepts: [
    {
      heading: "The theorem",
      body: "In a right-angled triangle, the side opposite the right angle is the hypotenuse and is the longest side. The theorem states that the square on the hypotenuse equals the sum of the squares on the other two sides: hypotenuse² = base² + height². Baudhayana described this rule in the Sulba Sutras centuries before Pythagoras.",
    },
    {
      heading: "Finding an unknown side",
      body: "If two sides are known, the third follows from the theorem. With legs 3 and 4, the hypotenuse is √(3² + 4²) = √25 = 5. If the hypotenuse and one leg are known, subtract: the other leg is √(hypotenuse² − leg²).",
    },
    {
      heading: "Pythagorean triples",
      body: "Three whole numbers that fit a² + b² = c² form a Pythagorean triple, such as (3, 4, 5), (5, 12, 13) and (8, 15, 17). Any multiple of a triple is also a triple, so (6, 8, 10) works too. Triples make quick right-triangle problems.",
    },
    {
      heading: "Checking for a right angle",
      body: "The theorem also works in reverse: if the sum of the squares of two sides equals the square of the third, the triangle is right-angled. Builders use the 3-4-5 rule to set out perfect right angles, since 3² + 4² = 5².",
    },
  ],
  formulas: [
    { name: "Pythagoras theorem", formula: "hypotenuse² = base² + height² (c² = a² + b²)" },
    { name: "Unknown leg", formula: "a = √(c² − b²)" },
    { name: "Right-angle test", formula: "if a² + b² = c², the triangle is right-angled" },
  ],
  definitions: [
    { term: "Hypotenuse", meaning: "The side opposite the right angle in a right triangle; the longest side." },
    { term: "Right-angled triangle", meaning: "A triangle with one angle equal to 90°." },
    { term: "Pythagorean triple", meaning: "Three whole numbers a, b, c satisfying a² + b² = c²." },
    { term: "Leg", meaning: "Either of the two sides that form the right angle." },
  ],
  examples: [
    {
      problem: "Find the hypotenuse of a right triangle with legs 6 cm and 8 cm.",
      solution: "c = √(6² + 8²) = √(36 + 64) = √100 = 10 cm.",
    },
    {
      problem: "A right triangle has hypotenuse 13 and one leg 5. Find the other leg.",
      solution: "Other leg = √(13² − 5²) = √(169 − 25) = √144 = 12.",
    },
    {
      problem: "Is a triangle with sides 9, 12, 15 right-angled?",
      solution: "9² + 12² = 81 + 144 = 225 = 15². Yes, it is right-angled.",
    },
  ],
  commonMistakes: [
    "Taking a leg as the hypotenuse — the hypotenuse is opposite the right angle and is longest.",
    "Adding the sides instead of their squares.",
    "Forgetting to take the square root at the end.",
    "Subtracting in the wrong order when finding a leg (use c² − leg²).",
  ],
  mcqs: [
    { id: "bp1", difficulty: "easy", q: "The longest side of a right triangle is the:", options: ["base", "height", "hypotenuse", "median"], answer: 2, explanation: "The hypotenuse, opposite the right angle, is longest." },
    { id: "bp2", difficulty: "medium", q: "The theorem states c² =", options: ["a + b", "a² − b²", "a² + b²", "ab"], answer: 2, explanation: "Square of hypotenuse = sum of squares of the legs." },
    { id: "bp3", difficulty: "easy", q: "For legs 3 and 4, the hypotenuse is:", options: ["7", "12", "6", "5"], answer: 3, explanation: "√(9+16) = √25 = 5." },
    { id: "bp4", difficulty: "medium", q: "Which is a Pythagorean triple?", options: ["2, 3, 4", "4, 5, 6", "1, 2, 3", "5, 12, 13"], answer: 3, explanation: "5² + 12² = 169 = 13²." },
    { id: "bp5", difficulty: "hard", q: "A right triangle has hypotenuse 10 and a leg 6. The other leg is:", options: ["8", "4", "16", "9"], answer: 0, explanation: "√(100 − 36) = √64 = 8." },
    { id: "bp6", difficulty: "easy", q: "Baudhayana described this rule in the:", options: ["Vedas only", "Elements", "Lilavati", "Sulba Sutras"], answer: 3, explanation: "It appears in the Sulba Sutras." },
    { id: "bp7", difficulty: "medium", q: "A triangle with sides 8, 15, 17 is:", options: ["acute", "obtuse", "right-angled", "equilateral"], answer: 2, explanation: "8² + 15² = 289 = 17², so right-angled." },
    { id: "bp8", difficulty: "medium", q: "Which is also a Pythagorean triple, being a multiple of (3,4,5)?", options: ["6, 8, 10", "3, 4, 6", "5, 6, 7", "9, 10, 11"], answer: 0, explanation: "Doubling (3,4,5) gives (6,8,10)." },
    { id: "bp9", difficulty: "hard", q: "Builders use the 3-4-5 rule to make a:", options: ["circle", "right angle", "straight line", "triangle area"], answer: 1, explanation: "3² + 4² = 5² guarantees a right angle." },
    { id: "bp10", difficulty: "easy", q: "The two sides forming the right angle are called the:", options: ["hypotenuses", "legs", "arcs", "diagonals"], answer: 1, explanation: "They are the legs of the right triangle." },
  ],
  shortQuestions: [
    { q: "State the Baudhayana–Pythagoras theorem.", a: "In a right triangle, the square on the hypotenuse equals the sum of the squares on the other two sides." },
    { q: "Find the hypotenuse for legs 5 and 12.", a: "√(25 + 144) = √169 = 13." },
    { q: "Give one Pythagorean triple.", a: "(3, 4, 5) — since 3² + 4² = 5²." },
  ],
  longQuestions: [
    { q: "A ladder 13 m long leans against a wall with its foot 5 m from the wall. How high does it reach? Show the working.", a: "The ladder is the hypotenuse (13 m) and the distance from the wall is one leg (5 m). The height reached is the other leg: height = √(13² − 5²) = √(169 − 25) = √144 = 12 m. So the ladder reaches 12 m up the wall." },
    { q: "Explain how to test whether a triangle is right-angled, using sides 7, 24, 25.", a: "Identify the longest side as the possible hypotenuse (25). Square the two shorter sides and add: 7² + 24² = 49 + 576 = 625. Compare with the square of the longest side: 25² = 625. Since 7² + 24² = 25², the converse of the theorem tells us the triangle is right-angled." },
  ],
  hots: [
    { q: "Two sides of a right triangle are 9 and 12. Could the third side be 15 or could it be something else?", a: "If 9 and 12 are the legs, the hypotenuse is √(81+144) = 15. But if 12 were the hypotenuse and 9 a leg, the other leg would be √(144−81) = √63 ≈ 7.9, so the answer depends on which side is the hypotenuse." },
    { q: "Why is the hypotenuse always the longest side of a right triangle?", a: "It is opposite the largest angle (the 90° angle), and in any triangle the longest side lies opposite the largest angle." },
  ],
  revisionNotes: [
    "Hypotenuse² = base² + height² (right triangles only).",
    "Unknown leg = √(hypotenuse² − leg²).",
    "Pythagorean triples: (3,4,5), (5,12,13), (8,15,17) and their multiples.",
    "Converse: a² + b² = c² means the triangle is right-angled.",
  ],
  keyTakeaways: [
    "The hypotenuse is opposite the right angle and is longest.",
    "Square the sides, never just add them.",
    "The 3-4-5 rule builds exact right angles.",
  ],
  faq: [
    { q: "What is the Baudhayana–Pythagoras theorem?", a: "In a right triangle, the square on the hypotenuse equals the sum of the squares on the other two sides." },
    { q: "How do I find a missing side?", a: "Use c² = a² + b²; for a leg, rearrange to leg = √(c² − other leg²)." },
    { q: "What is a Pythagorean triple?", a: "Three whole numbers like 3, 4, 5 that satisfy a² + b² = c²." },
  ],
  related: [
    { classId: "8", subject: "maths", slug: "area" },
    { classId: "10", subject: "maths", slug: "triangles" },
  ],
};

export default chapter;
