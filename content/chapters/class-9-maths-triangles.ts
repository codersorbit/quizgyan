import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "9",
  subject: "maths",
  slug: "triangles",
  title: "Triangles",
  order: 7,
  seoTitle: "Triangles Class 9 CBSE Notes, MCQs, Quiz & Congruence Criteria",
  metaDescription:
    "Class 9 Maths Triangles: congruence of triangles, SAS, ASA, AAS, SSS and RHS criteria, properties of isosceles triangles, triangle inequalities, solved examples and MCQ quiz with answers.",
  overview:
    "This Class 9 chapter is about congruent triangles — triangles that are exact copies of each other in shape and size. You will learn the criteria used to prove triangles congruent (SAS, ASA, AAS, SSS, RHS), the special properties of isosceles triangles, and the inequalities relating the sides and angles of a triangle. Proof writing is the heart of this chapter.",
  objectives: [
    "Define congruence of triangles.",
    "Apply the SAS, ASA, AAS, SSS and RHS criteria.",
    "Use the properties of isosceles triangles.",
    "Apply inequalities between the sides and angles of a triangle.",
    "Write simple congruence proofs.",
  ],
  concepts: [
    {
      heading: "Congruence of triangles",
      body: "Two triangles are congruent if they can be made to cover each other exactly — their corresponding sides and angles are equal. The symbol used is ≅, and the order of letters shows which parts correspond.",
    },
    {
      heading: "Criteria for congruence",
      body: "Triangles are congruent by SAS (two sides and the included angle), ASA (two angles and the included side), AAS (two angles and a non-included side), SSS (all three sides), or RHS (right angle, hypotenuse and one side, for right triangles).",
    },
    {
      heading: "Isosceles triangle properties",
      body: "In an isosceles triangle, the angles opposite the equal sides are equal, and conversely, the sides opposite equal angles are equal. These follow directly from the congruence criteria.",
    },
    {
      heading: "Inequalities in a triangle",
      body: "In any triangle, the angle opposite the longer side is larger, and the side opposite the larger angle is longer. Also, the sum of the lengths of any two sides is greater than the third side (triangle inequality).",
    },
  ],
  formulas: [
    { name: "Congruence criteria", formula: "SAS, ASA, AAS, SSS, RHS" },
    { name: "Triangle inequality", formula: "any two sides' sum > the third side" },
    { name: "Isosceles property", formula: "equal sides ⇒ equal base angles" },
  ],
  definitions: [
    { term: "Congruent triangles", meaning: "Triangles equal in all corresponding sides and angles (exact copies)." },
    { term: "Included angle", meaning: "The angle formed between two given sides of a triangle." },
    { term: "Isosceles triangle", meaning: "A triangle with at least two equal sides." },
    { term: "Triangle inequality", meaning: "The rule that the sum of any two sides of a triangle exceeds the third." },
  ],
  examples: [
    {
      problem: "Which criterion proves two triangles congruent if two sides and the angle between them are equal?",
      solution: "The SAS (Side–Angle–Side) criterion.",
    },
    {
      problem: "In an isosceles triangle, the two base angles are equal and one equals 50°. Find the third (apex) angle.",
      solution: "Base angles are 50° each, so the apex angle = 180° − (50° + 50°) = 80°.",
    },
    {
      problem: "Can a triangle have sides 3 cm, 4 cm and 8 cm?",
      solution:
        "Check the triangle inequality: 3 + 4 = 7, which is less than 8. Since the sum of two sides is not greater than the third, such a triangle is not possible.",
    },
  ],
  commonMistakes: [
    "Claiming AAA proves congruence — equal angles give similar, not necessarily congruent, triangles.",
    "Using SSA (two sides and a non-included angle) as a valid criterion (it is not).",
    "Writing the vertex correspondence in the wrong order in ≅ statements.",
    "Forgetting to check all three pairs in the triangle inequality.",
  ],
  mcqs: [
    { id: "tr1", difficulty: "easy", q: "Two figures are congruent if they have the:", options: ["same perimeter only", "same area only", "same shape and size", "same shape only"], answer: 2, explanation: "Congruent means equal in both shape and size." },
    { id: "tr2", difficulty: "medium", q: "Two sides and the included angle equal proves congruence by:", options: ["RHS", "SAS", "ASA", "SSS"], answer: 1, explanation: "Side–Angle–Side is the SAS criterion." },
    { id: "tr3", difficulty: "medium", q: "Which is NOT a valid congruence criterion?", options: ["ASA", "RHS", "AAA", "SSS"], answer: 2, explanation: "AAA gives similar triangles, not necessarily congruent." },
    { id: "tr4", difficulty: "easy", q: "In an isosceles triangle, the angles opposite the equal sides are:", options: ["right angles", "equal", "unequal", "supplementary"], answer: 1, explanation: "Base angles opposite equal sides are equal." },
    { id: "tr5", difficulty: "medium", q: "The RHS criterion is used for:", options: ["all triangles", "isosceles triangles", "right-angled triangles", "equilateral triangles"], answer: 2, explanation: "RHS (Right angle–Hypotenuse–Side) applies to right triangles." },
    { id: "tr6", difficulty: "medium", q: "A triangle is possible with sides:", options: ["2, 3, 6", "4, 5, 6", "1, 2, 3", "3, 4, 8"], answer: 1, explanation: "4 + 5 = 9 > 6 and all pairs satisfy the inequality." },
    { id: "tr7", difficulty: "easy", q: "In a triangle, the longest side is opposite the:", options: ["right angle only", "smallest angle", "middle angle", "largest angle"], answer: 3, explanation: "The side opposite the largest angle is longest." },
    { id: "tr8", difficulty: "easy", q: "The symbol for congruence is:", options: ["≅", "∥", "≈", "="], answer: 0, explanation: "Congruence is written with ≅." },
    { id: "tr9", difficulty: "medium", q: "Two angles and the included side equal proves congruence by:", options: ["SAS", "SSS", "RHS", "ASA"], answer: 3, explanation: "Angle–Side–Angle is the ASA criterion." },
    { id: "tr10", difficulty: "hard", q: "In triangle ABC, if AB = AC and ∠B = 70°, then ∠C is:", options: ["110°", "40°", "55°", "70°"], answer: 3, explanation: "Isosceles base angles are equal, so ∠C = ∠B = 70°." },
  ],
  shortQuestions: [
    { q: "State the SSS congruence criterion.", a: "If the three sides of one triangle equal the three sides of another, the triangles are congruent." },
    { q: "Why is AAA not a congruence rule?", a: "Equal angles fix the shape but not the size, so AAA gives similar (not necessarily congruent) triangles." },
    { q: "What is the triangle inequality?", a: "The sum of the lengths of any two sides of a triangle is greater than the third side." },
  ],
  longQuestions: [
    { q: "Prove that the base angles of an isosceles triangle are equal (outline).", a: "Let triangle ABC have AB = AC. Draw the bisector AD of ∠A meeting BC at D. In triangles ABD and ACD: AB = AC (given), ∠BAD = ∠CAD (construction), AD = AD (common). By SAS, the triangles are congruent, so ∠B = ∠C — the base angles are equal." },
    { q: "In triangles ABC and DEF, AB = DE, ∠B = ∠E and BC = EF. Are they congruent? Name the criterion.", a: "Yes. Two sides (AB = DE, BC = EF) and the included angle (∠B = ∠E) are equal, so by SAS the triangles are congruent: △ABC ≅ △DEF." },
  ],
  hots: [
    { q: "Two sides of a triangle are 5 cm and 9 cm. Between what values must the third side lie?", a: "The third side must be greater than 9 − 5 = 4 cm and less than 9 + 5 = 14 cm, so 4 cm < third side < 14 cm." },
    { q: "If two angles of a triangle are equal, what can you say about the sides opposite them?", a: "The sides opposite the equal angles are equal, so the triangle is isosceles." },
  ],
  revisionNotes: [
    "Congruent = equal shape and size (≅).",
    "Criteria: SAS, ASA, AAS, SSS, RHS (not AAA or SSA).",
    "Isosceles: equal sides ⇒ equal base angles (and converse).",
    "Triangle inequality: sum of two sides > third side.",
  ],
  keyTakeaways: [
    "Pick the criterion that matches the equal parts given.",
    "Equal angles alone (AAA) never prove congruence.",
    "Use the triangle inequality to test if sides can form a triangle.",
  ],
  faq: [
    { q: "What is the difference between congruent and similar triangles?", a: "Congruent triangles are equal in shape and size; similar triangles have the same shape but may differ in size." },
    { q: "Which congruence criteria are valid?", a: "SAS, ASA, AAS, SSS and RHS. AAA and SSA are not valid congruence criteria." },
    { q: "How do I check if three lengths can form a triangle?", a: "They can if the sum of every pair of sides is greater than the remaining side." },
  ],
  related: [
    { classId: "9", subject: "maths", slug: "lines-and-angles" },
    { classId: "9", subject: "maths", slug: "quadrilaterals" },
  ],
};

export default chapter;
