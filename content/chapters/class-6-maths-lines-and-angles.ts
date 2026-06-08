import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "6",
  subject: "maths",
  slug: "lines-and-angles",
  title: "Lines and Angles",
  order: 2,
  seoTitle: "Lines and Angles Class 6 Maths (Ganita Prakash) — Notes, Angle Types & MCQs",
  metaDescription:
    "Class 6 Maths Lines and Angles (Ganita Prakash): points, line segments, rays and lines, what an angle is, types of angles (acute, right, obtuse, straight, reflex), and measuring angles in degrees, with examples and an MCQ quiz.",
  overview:
    "Geometry begins with simple ideas. This Class 6 Ganita Prakash chapter introduces the point, line segment, ray and line, explains what an angle is and how it is measured in degrees, and sorts angles into types — acute, right, obtuse, straight and reflex.",
  objectives: [
    "Distinguish a point, line segment, ray and line.",
    "Describe how an angle is formed.",
    "Classify angles by their size.",
    "Measure and draw angles in degrees.",
  ],
  concepts: [
    {
      heading: "Points, segments, rays and lines",
      body: "A point marks an exact position and has no size. A line segment is a straight path between two endpoints. A ray starts at one point and goes on endlessly in one direction, while a line has no endpoints and extends endlessly in both directions.",
    },
    {
      heading: "What is an angle?",
      body: "An angle is formed when two rays meet at a common endpoint called the vertex; the two rays are its arms. The size of an angle tells how much one arm is turned from the other, and it is measured in degrees (°) using a protractor.",
    },
    {
      heading: "Types of angles",
      body: "Angles are named by their size: an acute angle is less than 90°, a right angle is exactly 90°, an obtuse angle is between 90° and 180°, a straight angle is exactly 180°, and a reflex angle is between 180° and 360°. A complete turn is 360°.",
    },
    {
      heading: "Measuring angles",
      body: "We measure an angle by placing the centre of a protractor on the vertex and one arm along the zero line, then reading where the other arm crosses the scale. The same tool is used to draw an angle of a required size.",
    },
  ],
  formulas: [
    { name: "Right angle", formula: "right angle = 90°" },
    { name: "Straight angle", formula: "straight angle = 180°" },
    { name: "Complete angle", formula: "one full turn = 360°" },
  ],
  definitions: [
    { term: "Line segment", meaning: "A straight path with two endpoints." },
    { term: "Ray", meaning: "A part of a line with one endpoint, extending endlessly in one direction." },
    { term: "Angle", meaning: "The figure formed by two rays meeting at a common endpoint." },
    { term: "Vertex", meaning: "The common endpoint where the two arms of an angle meet." },
  ],
  examples: [
    {
      problem: "An angle measures 45°. What type of angle is it?",
      solution: "Since 45° is less than 90°, it is an acute angle.",
    },
    {
      problem: "How many endpoints does a ray have?",
      solution: "A ray has exactly one endpoint and goes on endlessly in the other direction.",
    },
    {
      problem: "An angle measures 200°. Name its type.",
      solution: "Between 180° and 360°, so it is a reflex angle.",
    },
  ],
  commonMistakes: [
    "Mixing up a line (no endpoints) with a line segment (two endpoints).",
    "Reading the wrong scale of the protractor.",
    "Calling a 90° angle 'acute' instead of a right angle.",
    "Thinking an angle's size depends on the length of its arms.",
  ],
  mcqs: [
    { id: "la1", difficulty: "easy", q: "A figure with two endpoints is a:", options: ["ray", "line", "line segment", "point"], answer: 2, explanation: "A line segment has two endpoints." },
    { id: "la2", difficulty: "easy", q: "An angle of exactly 90° is a:", options: ["acute angle", "right angle", "obtuse angle", "straight angle"], answer: 1, explanation: "A right angle measures 90°." },
    { id: "la3", difficulty: "medium", q: "An angle of 130° is:", options: ["acute", "right", "reflex", "obtuse"], answer: 3, explanation: "Between 90° and 180° is obtuse." },
    { id: "la4", difficulty: "easy", q: "The common point where two arms of an angle meet is the:", options: ["vertex", "ray", "degree", "edge"], answer: 0, explanation: "It is called the vertex." },
    { id: "la5", difficulty: "medium", q: "A straight angle measures:", options: ["90°", "360°", "180°", "270°"], answer: 2, explanation: "A straight angle is 180°." },
    { id: "la6", difficulty: "medium", q: "Which has no endpoints and extends both ways?", options: ["ray", "segment", "point", "line"], answer: 3, explanation: "A line extends endlessly in both directions." },
    { id: "la7", difficulty: "easy", q: "An acute angle is:", options: ["less than 90°", "exactly 90°", "more than 90°", "exactly 180°"], answer: 0, explanation: "An acute angle is below 90°." },
    { id: "la8", difficulty: "hard", q: "An angle of 245° is a:", options: ["straight angle", "obtuse angle", "reflex angle", "right angle"], answer: 2, explanation: "Between 180° and 360° is reflex." },
    { id: "la9", difficulty: "medium", q: "Angles are measured in:", options: ["metres", "degrees", "grams", "litres"], answer: 1, explanation: "Angles are measured in degrees (°)." },
    { id: "la10", difficulty: "hard", q: "One complete turn equals:", options: ["90°", "180°", "270°", "360°"], answer: 3, explanation: "A full turn is 360°." },
  ],
  shortQuestions: [
    { q: "What is the difference between a ray and a line segment?", a: "A ray has one endpoint and extends endlessly one way; a line segment has two endpoints." },
    { q: "Name the angle that measures exactly 180°.", a: "A straight angle." },
    { q: "With what instrument do we measure an angle?", a: "A protractor, in degrees." },
  ],
  longQuestions: [
    { q: "Describe the five main types of angles by their size.", a: "An acute angle measures less than 90°. A right angle is exactly 90° and looks like the corner of a book. An obtuse angle is more than 90° but less than 180°. A straight angle is exactly 180°, forming a straight line. A reflex angle is more than 180° but less than 360°. A complete turn back to the start measures 360°." },
    { q: "Explain how to measure an angle with a protractor.", a: "Place the centre point of the protractor exactly on the vertex of the angle, and line up one arm with the zero line of the protractor. Then follow the other arm to where it crosses the curved scale and read the number there, making sure to use the scale that starts from zero on your chosen arm. That reading, in degrees, is the size of the angle." },
  ],
  hots: [
    { q: "Does making the arms of an angle longer change its size? Explain.", a: "No. The size of an angle depends only on how much one arm is turned from the other, not on the length of the arms." },
    { q: "An angle and its reflex together make a full turn. If an angle is 110°, what is its reflex?", a: "A full turn is 360°, so the reflex angle is 360° − 110° = 250°." },
  ],
  revisionNotes: [
    "Point (position), segment (2 ends), ray (1 end), line (no ends).",
    "Angle = two rays from a common vertex; measured in degrees.",
    "Acute <90°, right =90°, obtuse 90°–180°, straight =180°, reflex 180°–360°.",
    "Full turn = 360°.",
  ],
  keyTakeaways: [
    "An angle's size is about turning, not arm length.",
    "Angle types are defined by their degree measure.",
    "A protractor measures and draws angles.",
  ],
  faq: [
    { q: "What is an angle?", a: "The figure formed when two rays meet at a common endpoint (the vertex)." },
    { q: "How is a line different from a line segment?", a: "A line has no endpoints and extends both ways; a line segment has two endpoints." },
    { q: "What is a reflex angle?", a: "An angle greater than 180° but less than 360°." },
  ],
  related: [
    { classId: "6", subject: "maths", slug: "playing-with-constructions" },
    { classId: "9", subject: "maths", slug: "lines-and-angles" },
  ],
};

export default chapter;
