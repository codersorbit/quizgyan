import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "6",
  subject: "maths",
  slug: "symmetry",
  title: "Symmetry",
  order: 9,
  seoTitle: "Symmetry Class 6 Maths (Ganita Prakash) — Line & Rotational Symmetry, MCQs",
  metaDescription:
    "Class 6 Maths Symmetry (Ganita Prakash): line (reflection) symmetry, finding lines of symmetry in shapes and letters, and an introduction to rotational symmetry, with examples and an MCQ quiz.",
  overview:
    "Many shapes in nature and design look balanced because they are symmetric. This Class 6 Ganita Prakash chapter explains line symmetry, where a figure matches its mirror image across a line, shows how to find lines of symmetry in shapes and letters, and introduces rotational symmetry.",
  objectives: [
    "Understand line (reflection) symmetry.",
    "Find the lines of symmetry of a figure.",
    "Recognise symmetry in letters and everyday shapes.",
    "Identify simple rotational symmetry.",
  ],
  concepts: [
    {
      heading: "Line symmetry",
      body: "A figure has line symmetry if a line can divide it into two halves that are mirror images of each other. That line is called the line of symmetry or axis of symmetry — folding the figure along it makes the two halves match exactly.",
    },
    {
      heading: "Lines of symmetry in shapes",
      body: "Different shapes have different numbers of lines of symmetry. A rectangle has 2, an equilateral triangle has 3, and a square has 4, while a circle has countless lines of symmetry through its centre. Some shapes, like a scalene triangle, have none.",
    },
    {
      heading: "Symmetry in letters and objects",
      body: "Capital letters show symmetry too: A, M and T have a vertical line of symmetry, B and E have a horizontal one, and H and X have both. Many natural and made objects — butterflies, leaves, flags and rangoli designs — are built on the same idea of balance.",
    },
    {
      heading: "Rotational symmetry",
      body: "A figure has rotational symmetry if it looks the same after being turned by less than a full turn about its centre. A square looks the same after a quarter turn, so it has rotational symmetry, while the number of matching positions in one full turn is its order of rotational symmetry.",
    },
  ],
  formulas: [],
  definitions: [
    { term: "Line of symmetry", meaning: "A line that divides a figure into two mirror-image halves." },
    { term: "Reflection symmetry", meaning: "Another name for line symmetry, based on a mirror image." },
    { term: "Rotational symmetry", meaning: "When a figure looks the same after a turn of less than 360°." },
    { term: "Axis of symmetry", meaning: "The line along which a symmetric figure can be folded to match." },
  ],
  examples: [
    {
      problem: "How many lines of symmetry does a square have?",
      solution: "Four — two diagonals and the two lines joining midpoints of opposite sides.",
    },
    {
      problem: "Does the letter H have a line of symmetry?",
      solution: "Yes, it has both a vertical and a horizontal line of symmetry.",
    },
    {
      problem: "How many lines of symmetry does a scalene triangle have?",
      solution: "None, because no line divides it into mirror-image halves.",
    },
  ],
  commonMistakes: [
    "Assuming every shape has at least one line of symmetry.",
    "Thinking a rectangle has 4 lines of symmetry (it has only 2).",
    "Confusing line symmetry with rotational symmetry.",
    "Drawing a line of symmetry that does not give matching halves.",
  ],
  mcqs: [
    { id: "sy1", difficulty: "easy", q: "A line that divides a figure into two mirror-image halves is a:", options: ["number line", "line of symmetry", "diagonal", "radius"], answer: 1, explanation: "That is a line of symmetry." },
    { id: "sy2", difficulty: "easy", q: "How many lines of symmetry does a rectangle have?", options: ["1", "2", "4", "0"], answer: 1, explanation: "A rectangle has 2 lines of symmetry." },
    { id: "sy3", difficulty: "medium", q: "An equilateral triangle has how many lines of symmetry?", options: ["3", "1", "2", "0"], answer: 0, explanation: "It has 3 lines of symmetry." },
    { id: "sy4", difficulty: "medium", q: "Which letter has both horizontal and vertical symmetry?", options: ["A", "B", "T", "H"], answer: 3, explanation: "H is symmetric both ways." },
    { id: "sy5", difficulty: "easy", q: "Line symmetry is also called:", options: ["reflection symmetry", "rotational symmetry", "point symmetry", "no symmetry"], answer: 0, explanation: "It is based on a mirror image (reflection)." },
    { id: "sy6", difficulty: "medium", q: "How many lines of symmetry does a circle have?", options: ["1", "countless", "2", "4"], answer: 1, explanation: "Every line through the centre is a line of symmetry." },
    { id: "sy7", difficulty: "hard", q: "A square looks the same after a turn of:", options: ["a third turn", "a fifth turn", "a quarter turn", "no turn"], answer: 2, explanation: "A square matches itself every quarter (90°) turn." },
    { id: "sy8", difficulty: "easy", q: "Which shape has no line of symmetry?", options: ["scalene triangle", "square", "circle", "rectangle"], answer: 0, explanation: "A scalene triangle has none." },
    { id: "sy9", difficulty: "medium", q: "The letter T has a:", options: ["horizontal line of symmetry", "vertical line of symmetry", "no symmetry", "two lines"], answer: 1, explanation: "T is symmetric about a vertical line." },
    { id: "sy10", difficulty: "hard", q: "When a figure looks the same after turning (less than a full turn), it has:", options: ["line symmetry", "no symmetry", "mirror symmetry", "rotational symmetry"], answer: 3, explanation: "That is rotational symmetry." },
  ],
  shortQuestions: [
    { q: "What is a line of symmetry?", a: "A line that divides a figure into two mirror-image halves." },
    { q: "How many lines of symmetry does a square have?", a: "Four." },
    { q: "Give a letter with only a vertical line of symmetry.", a: "A (or M, or T)." },
  ],
  longQuestions: [
    { q: "Explain line symmetry and give the number of lines of symmetry for a rectangle, an equilateral triangle and a circle.", a: "A figure has line symmetry when a straight line, called the line of symmetry, divides it into two halves that are exact mirror images — folding along the line makes the halves match. Different shapes have different numbers of such lines: a rectangle has 2 (the lines joining midpoints of opposite sides), an equilateral triangle has 3 (one from each vertex), and a circle has countless lines of symmetry, since any line through its centre divides it into matching halves." },
    { q: "What is the difference between line symmetry and rotational symmetry? Illustrate with a square.", a: "Line symmetry is about reflection: a line divides the figure into mirror-image halves. Rotational symmetry is about turning: the figure looks the same after a rotation of less than a full turn about its centre. A square shows both — it has 4 lines of symmetry (so 4-fold line symmetry), and it also has rotational symmetry because it looks identical after each quarter turn (90°), matching itself 4 times in a full turn. So a shape can have one kind of symmetry, both, or neither." },
  ],
  hots: [
    { q: "Which capital letters have a horizontal line of symmetry but not a vertical one?", a: "Letters such as B, C, D and E have a horizontal line of symmetry but no vertical one." },
    { q: "A shape looks the same after every quarter turn. How many times does it match itself in one full turn?", a: "Four times, since a full turn (360°) contains four quarter turns." },
  ],
  revisionNotes: [
    "Line symmetry: a line splits a figure into mirror-image halves.",
    "Lines of symmetry — rectangle 2, equilateral triangle 3, square 4, circle countless.",
    "Letters: A/M/T vertical; B/E horizontal; H/X both.",
    "Rotational symmetry: looks the same after a turn less than 360°.",
  ],
  keyTakeaways: [
    "Symmetry is about balance — by reflection or by turning.",
    "Not every shape has a line of symmetry.",
    "A figure can have line symmetry, rotational symmetry, or both.",
  ],
  faq: [
    { q: "What is line symmetry?", a: "A figure has it when a line divides it into two mirror-image halves." },
    { q: "How many lines of symmetry does an equilateral triangle have?", a: "Three." },
    { q: "What is rotational symmetry?", a: "When a figure looks the same after being turned by less than a full turn about its centre." },
  ],
  related: [
    { classId: "6", subject: "maths", slug: "lines-and-angles" },
    { classId: "6", subject: "maths", slug: "playing-with-constructions" },
  ],
};

export default chapter;
