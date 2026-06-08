import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "9",
  subject: "maths",
  slug: "introduction-to-euclids-geometry",
  title: "Introduction to Euclid's Geometry",
  order: 5,
  seoTitle:
    "Introduction to Euclid's Geometry Class 9 CBSE Notes, MCQs & Quiz",
  metaDescription:
    "Class 9 Maths Introduction to Euclid's Geometry: Euclid's definitions, axioms and postulates, the five postulates, difference between axiom and postulate, solved examples and MCQ quiz.",
  overview:
    "Euclid organised geometry into a logical system built on a few accepted truths. This Class 9 chapter introduces his definitions, axioms (common notions) and the five postulates, explains the difference between an axiom and a postulate, and shows how all geometric results follow from these basic assumptions. It is short, conceptual and builds careful reasoning.",
  objectives: [
    "State Euclid's idea of definitions, axioms and postulates.",
    "Distinguish between an axiom and a postulate.",
    "List Euclid's five postulates.",
    "Apply axioms to simple geometric reasoning.",
    "Appreciate the logical structure of geometry.",
  ],
  concepts: [
    {
      heading: "Definitions and undefined terms",
      body: "Euclid began with definitions (e.g. a point has no part, a line has length but no breadth). Some basic terms like point, line and plane are taken as undefined and understood intuitively, because every definition must rest on simpler ideas.",
    },
    {
      heading: "Axioms and postulates",
      body: "Axioms (or common notions) are assumptions used throughout mathematics, such as 'things equal to the same thing are equal to one another'. Postulates are assumptions specific to geometry. Both are accepted as true without proof.",
    },
    {
      heading: "Euclid's five postulates",
      body: "1) A straight line may be drawn from any point to any other point. 2) A finite line can be extended indefinitely. 3) A circle can be drawn with any centre and radius. 4) All right angles are equal. 5) If a line crossing two lines makes interior angles on one side less than two right angles, those two lines meet on that side.",
    },
    {
      heading: "The fifth postulate",
      body: "Euclid's fifth (parallel) postulate is more complex than the others. An equivalent version (Playfair's axiom) states that through a point not on a line, exactly one line can be drawn parallel to the given line.",
    },
  ],
  formulas: [],
  definitions: [
    { term: "Axiom", meaning: "A basic assumption used across all of mathematics, accepted without proof." },
    { term: "Postulate", meaning: "A basic assumption specific to geometry, accepted without proof." },
    { term: "Theorem", meaning: "A statement that is proved using definitions, axioms and postulates." },
    { term: "Point (Euclid)", meaning: "That which has no part — a basic, undefined idea in geometry." },
  ],
  examples: [
    {
      problem: "State Euclid's first postulate.",
      solution:
        "A straight line segment can be drawn joining any two points. (In short, two points determine a line.)",
    },
    {
      problem: "Which axiom does this use: 'If A = B and B = C, then A = C'?",
      solution:
        "It uses the axiom 'things equal to the same thing are equal to one another.'",
    },
    {
      problem: "How many lines can pass through a single point?",
      solution: "Infinitely many lines can pass through one given point.",
    },
  ],
  commonMistakes: [
    "Using the words axiom and postulate as if they meant exactly the same thing.",
    "Trying to prove an axiom or postulate — they are accepted without proof.",
    "Thinking two distinct points can have more than one line through them.",
    "Confusing a theorem (proved) with a postulate (assumed).",
  ],
  mcqs: [
    { id: "eu1", difficulty: "easy", q: "Statements accepted as true without proof in geometry are called:", options: ["postulates", "theorems", "corollaries", "proofs"], answer: 0, explanation: "Postulates are geometric assumptions accepted without proof." },
    { id: "eu2", difficulty: "easy", q: "How many lines can be drawn through two distinct points?", options: ["two", "infinitely many", "none", "one"], answer: 3, explanation: "Exactly one straight line passes through two distinct points." },
    { id: "eu3", difficulty: "medium", q: "'Things equal to the same thing are equal to one another' is an example of a/an:", options: ["theorem", "postulate", "definition", "axiom"], answer: 3, explanation: "It is a common notion, i.e. an axiom." },
    { id: "eu4", difficulty: "easy", q: "According to Euclid, a point has:", options: ["breadth only", "area", "no part", "length only"], answer: 2, explanation: "Euclid defined a point as that which has no part." },
    { id: "eu5", difficulty: "medium", q: "How many lines can pass through a single given point?", options: ["infinitely many", "one", "two", "three"], answer: 0, explanation: "Infinitely many lines pass through one point." },
    { id: "eu6", difficulty: "medium", q: "Euclid's fourth postulate states that all right angles are:", options: ["acute", "equal", "obtuse", "supplementary"], answer: 1, explanation: "All right angles are equal to one another." },
    { id: "eu7", difficulty: "easy", q: "A statement that is proved using logic is a:", options: ["postulate", "notion", "axiom", "theorem"], answer: 3, explanation: "A proved statement is a theorem." },
    { id: "eu8", difficulty: "medium", q: "Playfair's axiom is an equivalent form of Euclid's:", options: ["first postulate", "fifth postulate", "fourth postulate", "third postulate"], answer: 1, explanation: "It is an equivalent version of the parallel (fifth) postulate." },
    { id: "eu9", difficulty: "easy", q: "Assumptions used throughout mathematics (not only geometry) are called:", options: ["theorems", "lemmas", "postulates", "axioms"], answer: 3, explanation: "Axioms (common notions) apply across mathematics." },
    { id: "eu10", difficulty: "hard", q: "Through a point not on a given line, the number of lines parallel to it is:", options: ["exactly one", "infinitely many", "two", "zero"], answer: 0, explanation: "By Playfair's axiom, exactly one parallel line can be drawn." },
    { id: "bk9m5", difficulty: "medium", q: "According to Euclid, a point has?", options: ["Length only", "No dimensions", "Two dimensions", "Three dimensions"], answer: 1, explanation: "A point has no length, breadth or height." },
  ],
  shortQuestions: [
    { q: "Define a postulate.", a: "An assumption specific to geometry that is accepted as true without proof." },
    { q: "How many points can lie on one line?", a: "Infinitely many points." },
    { q: "State Euclid's third postulate.", a: "A circle can be drawn with any centre and any radius." },
  ],
  longQuestions: [
    { q: "Explain the difference between an axiom and a postulate with examples.", a: "Both are accepted without proof. An axiom (common notion) applies to all of mathematics, e.g. 'the whole is greater than the part'. A postulate is specific to geometry, e.g. 'a straight line can be drawn from any point to any other point'. Theorems are then proved from these." },
    { q: "State Euclid's five postulates briefly.", a: "1) A line can join any two points. 2) A finite line can be extended indefinitely. 3) A circle can be drawn with any centre and radius. 4) All right angles are equal. 5) If interior angles on one side of a transversal sum to less than two right angles, the two lines meet on that side." },
  ],
  hots: [
    { q: "Why are some terms like 'point' and 'line' left undefined in geometry?", a: "Because defining one term needs simpler terms, which need even simpler ones; to avoid an endless chain, a few basic terms are accepted as undefined and understood intuitively." },
    { q: "Euclid's fifth postulate looks different from the first four. What does this suggest?", a: "Its greater complexity led mathematicians to try (unsuccessfully) to prove it from the others, eventually giving rise to non-Euclidean geometries where it does not hold." },
  ],
  revisionNotes: [
    "Definitions rest on undefined terms (point, line, plane).",
    "Axioms = general assumptions; postulates = geometric assumptions.",
    "Five postulates underpin Euclidean geometry.",
    "Fifth postulate ≡ Playfair's axiom (one parallel through a point).",
  ],
  keyTakeaways: [
    "Axioms and postulates are accepted, theorems are proved.",
    "Two points fix exactly one line; one point has infinitely many.",
    "Geometry is built logically from a few basic truths.",
  ],
  faq: [
    { q: "What is the difference between an axiom and a postulate?", a: "An axiom is a general assumption used throughout mathematics; a postulate is an assumption specific to geometry. Both are accepted without proof." },
    { q: "What is Euclid's fifth postulate about?", a: "It is the parallel postulate; an equivalent version says that through a point not on a line, exactly one line can be drawn parallel to it." },
    { q: "Why is this chapter important?", a: "It teaches the logical foundation of geometry — how all results are built from definitions, axioms and postulates." },
  ],
  related: [
    { classId: "9", subject: "maths", slug: "lines-and-angles" },
    { classId: "9", subject: "maths", slug: "triangles" },
  ],
};

export default chapter;
