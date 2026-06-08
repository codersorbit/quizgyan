import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "9",
  subject: "maths",
  slug: "lines-and-angles",
  title: "Lines and Angles",
  order: 6,
  seoTitle: "Lines and Angles Class 9 CBSE Notes, MCQs, Quiz & Angle Theorems",
  metaDescription:
    "Class 9 Maths Lines and Angles: types of angles, linear pair, vertically opposite angles, parallel lines and a transversal, angle sum property of a triangle, solved examples and MCQ quiz.",
  overview:
    "This chapter studies the angles formed when lines meet or are crossed by a transversal. You will learn the types of angles and angle pairs, the linear-pair and vertically-opposite-angle relationships, the properties of parallel lines cut by a transversal, and the angle sum and exterior-angle results for triangles. These angle rules are used in every later geometry chapter.",
  objectives: [
    "Classify angles and identify angle pairs.",
    "Apply the linear pair and vertically opposite angle properties.",
    "Use the angle relationships of parallel lines and a transversal.",
    "Apply the angle sum property of a triangle.",
    "Use the exterior angle theorem.",
  ],
  concepts: [
    {
      heading: "Types of angles and pairs",
      body: "Angles are acute (< 90°), right (90°), obtuse (between 90° and 180°), straight (180°) or reflex (between 180° and 360°). Two angles are complementary if they add to 90°, and supplementary if they add to 180°.",
    },
    {
      heading: "Linear pair and vertically opposite angles",
      body: "When two lines intersect, adjacent angles on a straight line form a linear pair and add to 180°. The angles opposite each other (vertically opposite angles) are equal.",
    },
    {
      heading: "Parallel lines and a transversal",
      body: "When a transversal cuts two parallel lines: corresponding angles are equal, alternate interior angles are equal, and co-interior (same-side interior) angles are supplementary (add to 180°).",
    },
    {
      heading: "Angles of a triangle",
      body: "The three interior angles of a triangle add up to 180° (angle sum property). An exterior angle of a triangle equals the sum of the two interior opposite angles (exterior angle theorem).",
    },
  ],
  formulas: [
    { name: "Linear pair", formula: "∠1 + ∠2 = 180°" },
    { name: "Complementary / supplementary", formula: "sum = 90° / sum = 180°" },
    { name: "Angle sum of a triangle", formula: "∠A + ∠B + ∠C = 180°" },
    { name: "Exterior angle theorem", formula: "exterior angle = sum of two interior opposite angles" },
  ],
  definitions: [
    { term: "Linear pair", meaning: "Two adjacent angles formed on a straight line, summing to 180°." },
    { term: "Vertically opposite angles", meaning: "The equal angles formed opposite each other when two lines intersect." },
    { term: "Transversal", meaning: "A line that crosses two or more other lines." },
    { term: "Complementary angles", meaning: "Two angles whose measures add up to 90°." },
  ],
  examples: [
    {
      problem: "Two angles form a linear pair and one of them is 110°. Find the other.",
      solution: "Linear pair angles sum to 180°, so the other angle = 180° − 110° = 70°.",
    },
    {
      problem: "Two parallel lines are cut by a transversal. If one alternate interior angle is 65°, find the other.",
      solution: "Alternate interior angles are equal, so the other angle is also 65°.",
    },
    {
      problem: "Two angles of a triangle are 50° and 60°. Find the third angle.",
      solution: "Third angle = 180° − (50° + 60°) = 70°.",
    },
  ],
  commonMistakes: [
    "Confusing complementary (90°) with supplementary (180°).",
    "Assuming alternate angles are supplementary — they are equal for parallel lines.",
    "Forgetting the angle sum of a triangle is 180°, not 360°.",
    "Mixing up corresponding and co-interior angle relationships.",
  ],
  mcqs: [
    { id: "la1", difficulty: "easy", q: "Two angles that add up to 180° are called:", options: ["vertically opposite", "adjacent only", "complementary", "supplementary"], answer: 3, explanation: "Angles summing to 180° are supplementary." },
    { id: "la2", difficulty: "easy", q: "The angles of a linear pair add up to:", options: ["270°", "360°", "180°", "90°"], answer: 2, explanation: "A linear pair sums to 180°." },
    { id: "la3", difficulty: "easy", q: "When two lines intersect, the vertically opposite angles are:", options: ["equal", "complementary", "reflex", "supplementary"], answer: 0, explanation: "Vertically opposite angles are equal." },
    { id: "la4", difficulty: "medium", q: "For parallel lines cut by a transversal, corresponding angles are:", options: ["equal", "unequal", "complementary", "supplementary"], answer: 0, explanation: "Corresponding angles are equal." },
    { id: "la5", difficulty: "medium", q: "Co-interior angles between parallel lines are:", options: ["supplementary", "reflex", "complementary", "equal"], answer: 0, explanation: "Co-interior (same-side interior) angles add to 180°." },
    { id: "la6", difficulty: "easy", q: "The sum of the interior angles of a triangle is:", options: ["90°", "270°", "360°", "180°"], answer: 3, explanation: "Angle sum property: 180°." },
    { id: "la7", difficulty: "medium", q: "An exterior angle of a triangle equals:", options: ["the adjacent interior angle", "90°", "the sum of the two interior opposite angles", "180°"], answer: 2, explanation: "Exterior angle = sum of the two interior opposite angles." },
    { id: "la8", difficulty: "easy", q: "An angle of exactly 90° is called:", options: ["right", "acute", "straight", "obtuse"], answer: 0, explanation: "A 90° angle is a right angle." },
    { id: "la9", difficulty: "medium", q: "The complement of a 35° angle is:", options: ["65°", "55°", "145°", "35°"], answer: 1, explanation: "90° − 35° = 55°." },
    { id: "la10", difficulty: "hard", q: "In a triangle, if two interior opposite angles are 40° and 70°, the exterior angle at the third vertex is:", options: ["40°", "150°", "70°", "110°"], answer: 3, explanation: "Exterior angle = 40° + 70° = 110°." },
    { id: "bk9m6", difficulty: "medium", q: "The two angles forming a linear pair add up to?", options: ["90°", "360°", "180°", "270°"], answer: 2, explanation: "Angles of a linear pair are supplementary (180°)." },
    { id: "bk9m7", difficulty: "medium", q: "The sum of the three angles of a triangle is?", options: ["90°", "360°", "270°", "180°"], answer: 3, explanation: "By the angle sum property, a triangle's angles add to 180°." },
  ],
  shortQuestions: [
    { q: "What is the supplement of 120°?", a: "180° − 120° = 60°." },
    { q: "Define alternate interior angles.", a: "The pair of equal angles on opposite sides of a transversal, between two parallel lines." },
    { q: "Can a triangle have two right angles? Why?", a: "No — two right angles already total 180°, leaving nothing for the third angle." },
  ],
  longQuestions: [
    { q: "Two parallel lines are cut by a transversal. If one of the eight angles is 70°, find all the others.", a: "The angles come in two groups. All angles equal to the 70° one (its vertically opposite, corresponding and alternate angles) are 70°. The remaining angles are its supplements, each 110°. So four angles are 70° and four are 110°." },
    { q: "Prove using the angle sum property that the angles of an equilateral triangle are each 60°.", a: "All three angles are equal (say x each). By the angle sum property, x + x + x = 180°, so 3x = 180° and x = 60°. Hence each angle is 60°." },
  ],
  hots: [
    { q: "Two lines are each parallel to a third line. What can you conclude about the two lines?", a: "They are parallel to each other, since lines parallel to the same line are parallel to one another." },
    { q: "The angles of a triangle are in the ratio 1 : 2 : 3. Find them.", a: "Let the angles be x, 2x, 3x. Then x + 2x + 3x = 180° ⇒ 6x = 180° ⇒ x = 30°. The angles are 30°, 60° and 90°." },
  ],
  revisionNotes: [
    "Complementary = 90°; supplementary = 180°.",
    "Linear pair = 180°; vertically opposite angles are equal.",
    "Parallel + transversal: corresponding equal, alternate equal, co-interior supplementary.",
    "Triangle: angle sum 180°; exterior angle = sum of opposite interiors.",
  ],
  keyTakeaways: [
    "Alternate and corresponding angles are equal (not supplementary).",
    "Use the exterior angle theorem to find angles quickly.",
    "The 180° triangle rule solves most angle-chasing problems.",
  ],
  faq: [
    { q: "What is the difference between complementary and supplementary angles?", a: "Complementary angles add to 90°; supplementary angles add to 180°." },
    { q: "What are alternate interior angles?", a: "Equal angles on opposite sides of a transversal that lies between two parallel lines." },
    { q: "What is the exterior angle theorem?", a: "An exterior angle of a triangle equals the sum of the two interior angles opposite to it." },
  ],
  related: [
    { classId: "9", subject: "maths", slug: "triangles" },
    { classId: "9", subject: "maths", slug: "introduction-to-euclids-geometry" },
  ],
};

export default chapter;
