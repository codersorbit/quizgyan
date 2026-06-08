import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "9",
  subject: "maths",
  slug: "coordinate-geometry",
  title: "Coordinate Geometry",
  order: 3,
  seoTitle: "Coordinate Geometry Class 9 CBSE Notes, MCQs, Quiz & Quadrants",
  metaDescription:
    "Class 9 Maths Coordinate Geometry: the Cartesian plane, axes and quadrants, abscissa and ordinate, sign conventions and plotting points, solved examples and MCQ quiz with answers.",
  overview:
    "Coordinate geometry lets us describe the position of a point using a pair of numbers. This Class 9 chapter introduces the Cartesian plane, its axes and four quadrants, the meaning of abscissa and ordinate, the sign conventions in each quadrant, and how to plot points. It builds the base for the distance and section formulas you will meet in Class 10.",
  objectives: [
    "Describe the Cartesian plane and its axes.",
    "Identify the four quadrants and their sign conventions.",
    "Define abscissa and ordinate.",
    "Plot a point given its coordinates.",
    "Locate points on the axes and the origin.",
  ],
  concepts: [
    {
      heading: "The Cartesian plane",
      body: "Two perpendicular number lines — the horizontal x-axis and the vertical y-axis — meet at the origin O(0, 0) and divide the plane into four regions called quadrants.",
    },
    {
      heading: "Coordinates, abscissa and ordinate",
      body: "A point is written as an ordered pair (x, y). The first number x (distance from the y-axis) is the abscissa; the second number y (distance from the x-axis) is the ordinate.",
    },
    {
      heading: "Sign conventions in the quadrants",
      body: "Quadrant I: (+, +); Quadrant II: (−, +); Quadrant III: (−, −); Quadrant IV: (+, −). A point on the x-axis has y = 0, and a point on the y-axis has x = 0.",
    },
    {
      heading: "Plotting points",
      body: "To plot (x, y), move x units along the x-axis (right if positive, left if negative), then y units parallel to the y-axis (up if positive, down if negative), and mark the point.",
    },
  ],
  formulas: [
    { name: "Origin", formula: "O = (0, 0)" },
    { name: "Point on x-axis", formula: "(x, 0)" },
    { name: "Point on y-axis", formula: "(0, y)" },
    { name: "Quadrant signs", formula: "I(+,+)  II(−,+)  III(−,−)  IV(+,−)" },
  ],
  definitions: [
    { term: "Cartesian plane", meaning: "A plane formed by two perpendicular number lines, used to locate points." },
    { term: "Abscissa", meaning: "The x-coordinate of a point — its distance from the y-axis." },
    { term: "Ordinate", meaning: "The y-coordinate of a point — its distance from the x-axis." },
    { term: "Quadrant", meaning: "One of the four regions into which the axes divide the plane." },
  ],
  examples: [
    {
      problem: "In which quadrant does the point (−3, 2) lie?",
      solution:
        "The x-coordinate is negative and the y-coordinate is positive, so the point lies in Quadrant II.",
    },
    {
      problem: "Where does the point (4, 0) lie?",
      solution: "Its y-coordinate is 0, so it lies on the x-axis (4 units to the right of the origin).",
    },
    {
      problem: "Name the abscissa and ordinate of (7, −5).",
      solution: "Abscissa = 7 (the x-coordinate); ordinate = −5 (the y-coordinate).",
    },
  ],
  commonMistakes: [
    "Swapping x and y while writing or plotting a point.",
    "Mixing up abscissa (x) and ordinate (y).",
    "Getting the quadrant signs wrong, especially for II and IV.",
    "Forgetting that points on the axes are not in any quadrant.",
  ],
  mcqs: [
    { id: "cg1", difficulty: "easy", q: "The point (3, 4) lies in:", options: ["Quadrant III", "Quadrant I", "Quadrant IV", "Quadrant II"], answer: 1, explanation: "Both coordinates positive ⇒ Quadrant I." },
    { id: "cg2", difficulty: "easy", q: "The x-coordinate of a point is called its:", options: ["ordinate", "quadrant", "origin", "abscissa"], answer: 3, explanation: "The x-coordinate is the abscissa." },
    { id: "cg3", difficulty: "easy", q: "The coordinates of the origin are:", options: ["(0, 0)", "(0, 1)", "(1, 1)", "(1, 0)"], answer: 0, explanation: "The origin is (0, 0)." },
    { id: "cg4", difficulty: "medium", q: "The point (−5, −2) lies in:", options: ["Quadrant III", "Quadrant I", "Quadrant II", "Quadrant IV"], answer: 0, explanation: "Both coordinates negative ⇒ Quadrant III." },
    { id: "cg5", difficulty: "easy", q: "A point on the y-axis has its x-coordinate equal to:", options: ["any number", "0", "its y-value", "1"], answer: 1, explanation: "On the y-axis, x = 0." },
    { id: "cg6", difficulty: "medium", q: "The point (2, −7) lies in:", options: ["Quadrant I", "Quadrant II", "Quadrant IV", "Quadrant III"], answer: 2, explanation: "Positive x, negative y ⇒ Quadrant IV." },
    { id: "cg7", difficulty: "easy", q: "The ordinate of the point (6, −3) is:", options: ["−6", "−3", "3", "6"], answer: 1, explanation: "The ordinate is the y-coordinate, −3." },
    { id: "cg8", difficulty: "medium", q: "A point on the x-axis has its y-coordinate equal to:", options: ["−1", "1", "0", "its x-value"], answer: 2, explanation: "On the x-axis, y = 0." },
    { id: "cg9", difficulty: "easy", q: "The two axes meet at a point called the:", options: ["centre", "vertex", "origin", "node"], answer: 2, explanation: "The axes meet at the origin." },
    { id: "cg10", difficulty: "hard", q: "If a point has a negative abscissa and a positive ordinate, it lies in:", options: ["Quadrant IV", "Quadrant I", "Quadrant II", "Quadrant III"], answer: 2, explanation: "(−, +) is Quadrant II." },
    { id: "bk9m3", difficulty: "medium", q: "In the point (3, 5), what is the x-coordinate?", options: ["5", "8", "2", "3"], answer: 3, explanation: "In (x, y) the first number is x, so x = 3." },
    { id: "bk9m4", difficulty: "medium", q: "Every point lying on the x-axis has a y-coordinate equal to?", options: ["0", "1", "x", "−1"], answer: 0, explanation: "Points on the x-axis have y = 0." },
  ],
  shortQuestions: [
    { q: "What is an ordered pair?", a: "A pair of numbers (x, y) written in a fixed order to locate a point." },
    { q: "Name the quadrant where both coordinates are negative.", a: "Quadrant III." },
    { q: "Where does the point (0, 5) lie?", a: "On the y-axis, 5 units above the origin." },
  ],
  longQuestions: [
    { q: "Plot the points A(2, 3), B(−2, 3), C(−2, −3) and D(2, −3). What figure do they form?", a: "A is in Quadrant I, B in II, C in III and D in IV. They are symmetric about both axes and form a rectangle (in fact, with these values, a rectangle of width 4 and height 6)." },
    { q: "State the sign of the coordinates of a point in each quadrant.", a: "Quadrant I: (+, +); Quadrant II: (−, +); Quadrant III: (−, −); Quadrant IV: (+, −)." },
  ],
  hots: [
    { q: "A point lies on the x-axis at a distance of 5 units to the left of the origin. What are its coordinates?", a: "On the x-axis y = 0, and 'left' means negative x, so the point is (−5, 0)." },
    { q: "If the abscissa and ordinate of a point are equal and negative, in which quadrant does it lie?", a: "Both negative means Quadrant III (e.g. (−4, −4))." },
  ],
  revisionNotes: [
    "Axes meet at origin (0, 0), making four quadrants.",
    "Point = (abscissa, ordinate) = (x, y).",
    "Signs: I(+,+), II(−,+), III(−,−), IV(+,−).",
    "x-axis: y = 0; y-axis: x = 0.",
  ],
  keyTakeaways: [
    "Always write coordinates as (x, y) in that order.",
    "Memorise the quadrant sign pattern.",
    "Points on the axes belong to no quadrant.",
  ],
  faq: [
    { q: "What is the difference between abscissa and ordinate?", a: "The abscissa is the x-coordinate (distance from the y-axis); the ordinate is the y-coordinate (distance from the x-axis)." },
    { q: "How many quadrants are there?", a: "Four, numbered I to IV anticlockwise starting from the top-right." },
    { q: "Where is the point (0, 0)?", a: "At the origin, where the x-axis and y-axis intersect." },
  ],
  related: [
    { classId: "9", subject: "maths", slug: "linear-equations-in-two-variables" },
    { classId: "9", subject: "maths", slug: "number-systems" },
  ],
};

export default chapter;
