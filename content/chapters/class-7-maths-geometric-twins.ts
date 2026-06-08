import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "7",
  subject: "maths",
  slug: "geometric-twins",
  title: "Geometric Twins",
  order: 9,
  seoTitle: "Geometric Twins Class 7 Maths (Ganita Prakash) — Congruence Notes & MCQs",
  metaDescription:
    "Class 7 Maths Geometric Twins (Ganita Prakash): congruent figures, congruence of segments and angles, and the triangle congruence criteria SSS, SAS, ASA and RHS, with worked examples and an MCQ quiz.",
  overview:
    "Two figures that are exact copies of each other are 'geometric twins' — congruent. This Class 7 Ganita Prakash chapter explains congruence of figures, segments and angles, and the rules (SSS, SAS, ASA and RHS) that let us decide when two triangles are congruent without checking every part.",
  objectives: [
    "Understand congruence of figures.",
    "Recognise congruent segments and angles.",
    "State the triangle congruence criteria.",
    "Decide if two triangles are congruent.",
  ],
  concepts: [
    {
      heading: "Congruent figures",
      body: "Two figures are congruent if they have exactly the same shape and size, so that one would fit perfectly over the other. Congruence is written with the symbol ≅. Two segments are congruent if they have the same length, and two angles are congruent if they have the same measure.",
    },
    {
      heading: "Congruence of triangles",
      body: "Two triangles are congruent if their corresponding sides and angles are equal — but we do not need to check all six. A few matching parts are enough, which is what the congruence criteria provide. When triangles are congruent, their matching sides and angles are all equal.",
    },
    {
      heading: "SSS and SAS criteria",
      body: "By the SSS (Side-Side-Side) criterion, if the three sides of one triangle equal the three sides of another, the triangles are congruent. By the SAS (Side-Angle-Side) criterion, two sides and the angle between them being equal is enough. The angle must be the included angle, between the two sides.",
    },
    {
      heading: "ASA and RHS criteria",
      body: "By the ASA (Angle-Side-Angle) criterion, two angles and the side between them being equal makes triangles congruent. The RHS (Right angle-Hypotenuse-Side) criterion applies to right triangles: equal hypotenuses and one equal leg make them congruent.",
    },
  ],
  formulas: [
    { name: "Congruence symbol", formula: "≅ means 'is congruent to'" },
    { name: "Criteria", formula: "SSS, SAS, ASA, RHS" },
  ],
  definitions: [
    { term: "Congruent", meaning: "Having exactly the same shape and size." },
    { term: "Corresponding parts", meaning: "Sides or angles that match between two congruent figures." },
    { term: "Included angle", meaning: "The angle lying between two given sides of a triangle." },
    { term: "Hypotenuse", meaning: "The longest side of a right triangle, opposite the right angle." },
  ],
  examples: [
    {
      problem: "Two segments are 5 cm and 5 cm. Are they congruent?",
      solution: "Yes, equal-length segments are congruent.",
    },
    {
      problem: "Which criterion uses three equal sides?",
      solution: "SSS (Side-Side-Side).",
    },
    {
      problem: "Which criterion is only for right triangles?",
      solution: "RHS (Right angle-Hypotenuse-Side).",
    },
  ],
  commonMistakes: [
    "Confusing congruent (same size) with merely similar (same shape).",
    "Using SAS with a non-included angle.",
    "Thinking equal angles alone (AAA) prove congruence — they do not.",
    "Applying RHS to triangles without a right angle.",
  ],
  mcqs: [
    { id: "gt1", difficulty: "easy", q: "Two figures with the same shape and size are:", options: ["similar", "parallel", "congruent", "equal in area only"], answer: 2, explanation: "Same shape and size means congruent." },
    { id: "gt2", difficulty: "easy", q: "The symbol for congruence is:", options: ["=", "~", ">", "≅"], answer: 3, explanation: "≅ means 'is congruent to'." },
    { id: "gt3", difficulty: "medium", q: "Which criterion uses three equal sides?", options: ["SSS", "ASA", "SAS", "RHS"], answer: 0, explanation: "SSS = Side-Side-Side." },
    { id: "gt4", difficulty: "medium", q: "In SAS, the equal angle must be the:", options: ["largest angle", "included angle", "right angle", "exterior angle"], answer: 1, explanation: "The angle must lie between the two sides." },
    { id: "gt5", difficulty: "easy", q: "Two angles are congruent if they have the same:", options: ["colour", "name", "measure", "vertex"], answer: 2, explanation: "Equal measure means congruent angles." },
    { id: "gt6", difficulty: "medium", q: "The RHS criterion applies only to:", options: ["equilateral triangles", "all triangles", "obtuse triangles", "right triangles"], answer: 3, explanation: "RHS needs a right angle." },
    { id: "gt7", difficulty: "hard", q: "Which is NOT a valid congruence criterion?", options: ["AAA", "SSS", "ASA", "SAS"], answer: 0, explanation: "AAA shows similarity, not congruence." },
    { id: "gt8", difficulty: "easy", q: "Two segments are congruent if they have equal:", options: ["colour", "length", "thickness", "names"], answer: 1, explanation: "Equal length means congruent segments." },
    { id: "gt9", difficulty: "medium", q: "ASA stands for:", options: ["All-Sides-Angle", "Angle-Sum-Angle", "Angle-Side-Angle", "Area-Side-Area"], answer: 2, explanation: "Angle-Side-Angle." },
    { id: "gt10", difficulty: "hard", q: "If two triangles are congruent, their corresponding parts are:", options: ["different", "proportional only", "unrelated", "equal"], answer: 3, explanation: "All corresponding sides and angles are equal." },
  ],
  shortQuestions: [
    { q: "What does congruent mean?", a: "Having exactly the same shape and size." },
    { q: "Name the four triangle congruence criteria.", a: "SSS, SAS, ASA and RHS." },
    { q: "Does AAA prove congruence?", a: "No; equal angles only show similarity, not congruence." },
  ],
  longQuestions: [
    { q: "What does it mean for two triangles to be congruent, and why do we use criteria?", a: "Two triangles are congruent when they have exactly the same shape and size, so that one could be placed exactly over the other; this means all three pairs of corresponding sides and all three pairs of corresponding angles are equal. Checking all six parts every time would be tedious, so we use congruence criteria — short sets of conditions that guarantee congruence. If just enough matching parts agree (for example three sides, or two sides and the included angle), the triangles must be congruent, and then every other corresponding part is automatically equal too." },
    { q: "Describe the SSS, SAS, ASA and RHS criteria for congruent triangles.", a: "There are four standard criteria. SSS (Side-Side-Side): if the three sides of one triangle equal the three sides of another, they are congruent. SAS (Side-Angle-Side): if two sides and the angle included between them are equal, the triangles are congruent — the angle must be the one between the two sides. ASA (Angle-Side-Angle): if two angles and the side between them are equal, the triangles are congruent. RHS (Right angle-Hypotenuse-Side): for right triangles, if the hypotenuses are equal and one other side is equal, they are congruent. Note that having all three angles equal (AAA) is not enough — it only proves the triangles are the same shape, not the same size." },
  ],
  hots: [
    { q: "Two triangles have all three angles equal but different side lengths. Are they congruent?", a: "No — equal angles only make them similar (same shape). Congruence also needs equal sizes." },
    { q: "Why is SAS valid only with the included angle?", a: "Because fixing two sides and the angle between them locks the triangle's shape; an angle not between them could allow two different triangles." },
  ],
  revisionNotes: [
    "Congruent = same shape and size (≅).",
    "Segments congruent if equal length; angles if equal measure.",
    "Triangle criteria: SSS, SAS (included angle), ASA, RHS (right triangles).",
    "AAA shows similarity, not congruence.",
  ],
  keyTakeaways: [
    "Congruent figures are exact copies.",
    "A few matching parts can prove triangle congruence.",
    "Equal angles alone do not prove congruence.",
  ],
  faq: [
    { q: "What is the difference between congruent and similar?", a: "Congruent figures are the same shape and size; similar figures are the same shape but may differ in size." },
    { q: "What does SAS mean?", a: "Two sides and the included angle between them are equal." },
    { q: "When is RHS used?", a: "For right triangles, when the hypotenuses and one other side are equal." },
  ],
  related: [
    { classId: "7", subject: "maths", slug: "a-tale-of-three-intersecting-lines" },
    { classId: "9", subject: "maths", slug: "triangles" },
  ],
};

export default chapter;
