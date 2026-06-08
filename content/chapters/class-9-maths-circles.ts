import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "9",
  subject: "maths",
  slug: "circles",
  title: "Circles",
  order: 9,
  seoTitle: "Circles Class 9 CBSE Notes, MCQs, Quiz & Chord and Angle Theorems",
  metaDescription:
    "Class 9 Maths Circles: chords and their properties, perpendicular from the centre, equal chords, angle subtended by an arc, angles in the same segment and cyclic quadrilaterals, solved examples and MCQ quiz.",
  overview:
    "This Class 9 chapter studies circles through their chords and the angles formed inside them. You will learn how equal chords behave, why a perpendicular from the centre bisects a chord, the relationship between the angle an arc subtends at the centre and at the circumference, and the special property of cyclic quadrilaterals. (Class 10 later covers tangents.)",
  objectives: [
    "Use the properties of chords and their distances from the centre.",
    "Apply the result that the perpendicular from the centre bisects a chord.",
    "Relate the angle subtended by an arc at the centre and at the circumference.",
    "Use the equal-angles-in-the-same-segment property.",
    "Apply the cyclic quadrilateral property.",
  ],
  concepts: [
    {
      heading: "Chords and the centre",
      body: "Equal chords of a circle are equidistant from the centre, and conversely chords equidistant from the centre are equal. The perpendicular drawn from the centre to a chord bisects the chord.",
    },
    {
      heading: "Angle subtended by an arc",
      body: "The angle subtended by an arc at the centre is twice the angle it subtends at any point on the remaining part of the circle. This is the key angle theorem of the chapter.",
    },
    {
      heading: "Angles in the same segment",
      body: "Angles in the same segment of a circle are equal. As a special case, the angle in a semicircle is a right angle (90°).",
    },
    {
      heading: "Cyclic quadrilaterals",
      body: "A quadrilateral whose four vertices lie on a circle is cyclic. In a cyclic quadrilateral, the sum of each pair of opposite angles is 180° (they are supplementary).",
    },
  ],
  formulas: [
    { name: "Angle at centre vs circumference", formula: "angle at centre = 2 × angle at circumference" },
    { name: "Angle in a semicircle", formula: "= 90°" },
    { name: "Cyclic quadrilateral", formula: "opposite angles add to 180°" },
  ],
  definitions: [
    { term: "Chord", meaning: "A line segment joining two points on a circle." },
    { term: "Arc", meaning: "A part of the circumference of a circle." },
    { term: "Segment", meaning: "The region between a chord and an arc of the circle." },
    { term: "Cyclic quadrilateral", meaning: "A quadrilateral whose four vertices lie on a single circle." },
  ],
  examples: [
    {
      problem: "An arc subtends an angle of 80° at the centre. What angle does it subtend at a point on the remaining circle?",
      solution:
        "The angle at the circumference is half the angle at the centre: 80° ÷ 2 = 40°.",
    },
    {
      problem: "One angle of a cyclic quadrilateral is 70°. Find its opposite angle.",
      solution: "Opposite angles are supplementary, so the opposite angle = 180° − 70° = 110°.",
    },
    {
      problem: "What is the angle in a semicircle?",
      solution: "It is always a right angle, 90° (a special case of the angle-at-centre result).",
    },
  ],
  commonMistakes: [
    "Doubling instead of halving when going from the centre angle to the circumference angle.",
    "Forgetting that the perpendicular from the centre bisects the chord.",
    "Treating opposite angles of a cyclic quadrilateral as equal rather than supplementary.",
    "Assuming the angle in a semicircle could be other than 90°.",
  ],
  mcqs: [
    { id: "ci1", difficulty: "easy", q: "A line segment joining two points on a circle is a:", options: ["arc", "chord", "radius", "tangent"], answer: 1, explanation: "Such a segment is a chord." },
    { id: "ci2", difficulty: "medium", q: "The perpendicular from the centre of a circle to a chord:", options: ["doubles it", "does not meet it", "is equal to it", "bisects it"], answer: 3, explanation: "It bisects the chord." },
    { id: "ci3", difficulty: "medium", q: "The angle subtended by an arc at the centre is ____ the angle at the circumference.", options: ["equal to", "three times", "twice", "half"], answer: 2, explanation: "It is twice the angle at the circumference." },
    { id: "ci4", difficulty: "easy", q: "The angle in a semicircle is:", options: ["45°", "60°", "180°", "90°"], answer: 3, explanation: "It is a right angle, 90°." },
    { id: "ci5", difficulty: "medium", q: "In a cyclic quadrilateral, opposite angles are:", options: ["reflex", "equal", "complementary", "supplementary"], answer: 3, explanation: "They add up to 180°." },
    { id: "ci6", difficulty: "easy", q: "Equal chords of a circle are ____ from the centre.", options: ["equidistant", "different distances", "at the centre", "very far"], answer: 0, explanation: "Equal chords are equidistant from the centre." },
    { id: "ci7", difficulty: "medium", q: "Angles in the same segment of a circle are:", options: ["supplementary", "complementary", "unequal", "equal"], answer: 3, explanation: "Angles in the same segment are equal." },
    { id: "ci8", difficulty: "easy", q: "The longest chord of a circle is the:", options: ["radius", "arc", "diameter", "tangent"], answer: 2, explanation: "The diameter is the longest chord." },
    { id: "ci9", difficulty: "medium", q: "If the angle at the circumference is 35°, the angle at the centre subtended by the same arc is:", options: ["17.5°", "90°", "35°", "70°"], answer: 3, explanation: "Centre angle = 2 × 35° = 70°." },
    { id: "ci10", difficulty: "hard", q: "Two opposite angles of a cyclic quadrilateral are (2x) and (x + 30)°. Find x.", options: ["60", "50", "30", "40"], answer: 1, explanation: "2x + (x + 30) = 180 ⇒ 3x = 150 ⇒ x = 50." },
  ],
  shortQuestions: [
    { q: "What is a cyclic quadrilateral?", a: "A quadrilateral whose all four vertices lie on a circle." },
    { q: "State the relationship between equal chords and their distance from the centre.", a: "Equal chords are equidistant from the centre, and vice versa." },
    { q: "What is the angle subtended by a diameter at the circumference?", a: "90° (the angle in a semicircle)." },
  ],
  longQuestions: [
    { q: "Prove that the angle subtended by an arc at the centre is twice the angle at the circumference (outline).", a: "Let arc BC subtend ∠BOC at the centre O and ∠BAC at point A on the remaining circle. Join AO and extend it. Using the exterior angle property in triangles OAB and OAC (both isosceles, since OA = OB = OC = radius), each part of ∠BOC equals twice the corresponding part at A, so ∠BOC = 2∠BAC." },
    { q: "In a cyclic quadrilateral ABCD, ∠A = 100°. Find ∠C, and if ∠B = 80°, find ∠D.", a: "Opposite angles are supplementary: ∠C = 180° − 100° = 80°, and ∠D = 180° − ∠B = 180° − 80° = 100°." },
  ],
  hots: [
    { q: "Two equal chords of a circle intersect inside it. Why are the angles they make with the radius equal?", a: "Equal chords are equidistant from the centre, so the perpendiculars from the centre are equal; by congruent right triangles, the chords make equal angles with the radii." },
    { q: "If one pair of opposite angles of a quadrilateral is supplementary, is it cyclic?", a: "Yes — a quadrilateral is cyclic if and only if a pair of its opposite angles is supplementary (the converse of the cyclic-quadrilateral property)." },
  ],
  revisionNotes: [
    "Perpendicular from the centre bisects a chord.",
    "Equal chords are equidistant from the centre.",
    "Angle at centre = 2 × angle at circumference; semicircle angle = 90°.",
    "Cyclic quadrilateral: opposite angles supplementary.",
  ],
  keyTakeaways: [
    "Halve to go from centre angle to circumference angle.",
    "The angle in a semicircle is always 90°.",
    "Use supplementary opposite angles for cyclic quadrilaterals.",
  ],
  faq: [
    { q: "How are the angles at the centre and at the circumference related?", a: "The angle an arc subtends at the centre is twice the angle it subtends at any point on the remaining circle." },
    { q: "What is special about a cyclic quadrilateral?", a: "The sum of each pair of its opposite angles is 180°." },
    { q: "Does this chapter include tangents?", a: "No — tangents to circles are covered in Class 10; Class 9 focuses on chords and angles." },
  ],
  related: [
    { classId: "9", subject: "maths", slug: "quadrilaterals" },
    { classId: "9", subject: "maths", slug: "herons-formula" },
  ],
};

export default chapter;
