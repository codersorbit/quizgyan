import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "9",
  subject: "maths",
  slug: "linear-equations-in-two-variables",
  title: "Linear Equations in Two Variables",
  order: 4,
  seoTitle:
    "Linear Equations in Two Variables Class 9 CBSE Notes, MCQs & Quiz",
  metaDescription:
    "Class 9 Maths Linear Equations in Two Variables: standard form, solutions as ordered pairs, graph as a straight line, equations of lines parallel to the axes, solved examples and MCQ quiz.",
  overview:
    "A linear equation in two variables, such as 2x + 3y = 6, has not one but infinitely many solutions, and its graph is a straight line. This Class 9 chapter teaches the standard form of such equations, how to find and check solutions, how to draw their graphs, and the special equations of lines parallel to the axes.",
  objectives: [
    "Write a linear equation in two variables in standard form.",
    "Find solutions of a linear equation as ordered pairs.",
    "Understand that such an equation has infinitely many solutions.",
    "Draw the graph of a linear equation.",
    "Write equations of lines parallel to the x- and y-axes.",
  ],
  concepts: [
    {
      heading: "Standard form and solutions",
      body: "A linear equation in two variables can be written as ax + by + c = 0, where a and b are not both zero. A solution is an ordered pair (x, y) that makes the equation true; there are infinitely many such pairs.",
    },
    {
      heading: "Graph of a linear equation",
      body: "Plotting the solutions of a linear equation gives points that all lie on a single straight line. So the graph of ax + by + c = 0 is a line, and every point on that line is a solution.",
    },
    {
      heading: "Lines parallel to the axes",
      body: "The equation x = a (a constant) is a vertical line parallel to the y-axis, and y = b is a horizontal line parallel to the x-axis. In two variables, x = 2 means all points with x-coordinate 2.",
    },
    {
      heading: "Checking a solution",
      body: "To test whether a pair (x, y) is a solution, substitute the values into the equation; if both sides are equal, the pair is a solution.",
    },
  ],
  formulas: [
    { name: "Standard form", formula: "ax + by + c = 0 (a, b not both 0)" },
    { name: "Vertical line", formula: "x = a (parallel to the y-axis)" },
    { name: "Horizontal line", formula: "y = b (parallel to the x-axis)" },
  ],
  definitions: [
    { term: "Linear equation in two variables", meaning: "An equation of the form ax + by + c = 0 with a, b not both zero." },
    { term: "Solution", meaning: "An ordered pair (x, y) that satisfies the equation." },
    { term: "Graph of an equation", meaning: "The set of all points whose coordinates satisfy the equation — a straight line here." },
  ],
  examples: [
    {
      problem: "Find two solutions of 2x + y = 7.",
      solution:
        "Put x = 0: y = 7, giving (0, 7). Put x = 1: 2 + y = 7 ⇒ y = 5, giving (1, 5). So (0, 7) and (1, 5) are two solutions.",
    },
    {
      problem: "Is (2, 3) a solution of x + y = 5?",
      solution: "Substitute: 2 + 3 = 5, which is true, so (2, 3) is a solution.",
    },
    {
      problem: "What does the graph of x = 3 look like?",
      solution:
        "It is a straight line parallel to the y-axis, passing through all points with x-coordinate 3, such as (3, 0), (3, 1) and (3, −2).",
    },
  ],
  commonMistakes: [
    "Thinking a linear equation in two variables has only one solution.",
    "Writing x = 3 as a single point instead of a vertical line in the plane.",
    "Plotting too few points or a wrong point, giving a crooked 'line'.",
    "Mixing up which axis x = a and y = b are parallel to.",
  ],
  mcqs: [
    { id: "le1", difficulty: "easy", q: "A linear equation in two variables has:", options: ["infinitely many solutions", "no solution", "one solution", "two solutions"], answer: 0, explanation: "Such equations have infinitely many solutions." },
    { id: "le2", difficulty: "easy", q: "The graph of a linear equation in two variables is a:", options: ["parabola", "circle", "point", "straight line"], answer: 3, explanation: "It is always a straight line." },
    { id: "le3", difficulty: "easy", q: "The standard form of a linear equation in two variables is:", options: ["x + y = 1 only", "ax + b = 0", "ax² + bx + c = 0", "ax + by + c = 0"], answer: 3, explanation: "ax + by + c = 0, with a, b not both zero." },
    { id: "le4", difficulty: "medium", q: "Which is a solution of x + y = 6?", options: ["(4, 2)", "(1, 4)", "(2, 3)", "(5, 0) only"], answer: 0, explanation: "4 + 2 = 6, so (4, 2) satisfies the equation." },
    { id: "le5", difficulty: "easy", q: "The graph of y = 4 is a line parallel to the:", options: ["y-axis", "origin", "x-axis", "line y = x"], answer: 2, explanation: "y = constant is parallel to the x-axis." },
    { id: "le6", difficulty: "easy", q: "The graph of x = −2 is a line parallel to the:", options: ["line y = x", "neither axis", "y-axis", "x-axis"], answer: 2, explanation: "x = constant is parallel to the y-axis." },
    { id: "le7", difficulty: "medium", q: "If (0, k) satisfies 3x + 2y = 8, then k is:", options: ["2", "3", "8", "4"], answer: 3, explanation: "3(0) + 2k = 8 ⇒ k = 4." },
    { id: "le8", difficulty: "medium", q: "The point where a line crosses the y-axis has:", options: ["y = 0", "x = y", "no coordinates", "x = 0"], answer: 3, explanation: "On the y-axis, x = 0." },
    { id: "le9", difficulty: "easy", q: "How many points are needed to draw the graph of a linear equation?", options: ["at least two", "one", "four", "three exactly"], answer: 0, explanation: "Two points determine a straight line (a third is a good check)." },
    { id: "le10", difficulty: "hard", q: "The equation of the x-axis is:", options: ["x + y = 0", "x = y", "x = 0", "y = 0"], answer: 3, explanation: "Every point on the x-axis has y = 0, so its equation is y = 0." },
    { id: "bk9m2", difficulty: "medium", q: "A linear equation in two variables has how many solutions?", options: ["Only one", "Exactly two", "Infinitely many", "None"], answer: 2, explanation: "Its graph is a line, so it has infinitely many solutions." },
  ],
  shortQuestions: [
    { q: "Write any one solution of x − y = 0.", a: "(2, 2) — since 2 − 2 = 0 (any pair with x = y works)." },
    { q: "What is the equation of the y-axis?", a: "x = 0." },
    { q: "How many solutions does 5x + 2y = 10 have?", a: "Infinitely many." },
  ],
  longQuestions: [
    { q: "Draw the graph of x + y = 4 by finding three solutions.", a: "Solutions: (0, 4), (4, 0) and (2, 2). Plotting these three points and joining them gives a straight line — the graph of x + y = 4. Each point on the line is a solution of the equation." },
    { q: "Express 'the cost of a pen (x) and a pencil (y) is ₹20' as a linear equation and give two solutions.", a: "x + y = 20. Two solutions: (10, 10) — pen ₹10, pencil ₹10; and (15, 5) — pen ₹15, pencil ₹5." },
  ],
  hots: [
    { q: "The graph of a linear equation passes through (0, 0). What can you say about its constant term c?", a: "Substituting (0, 0) into ax + by + c = 0 gives c = 0, so the line passes through the origin only when c = 0." },
    { q: "Lines x = 3 and y = 2 are drawn on the same plane. At which point do they meet?", a: "x = 3 is vertical, y = 2 is horizontal; they intersect at the single point (3, 2)." },
  ],
  revisionNotes: [
    "Standard form: ax + by + c = 0 (a, b not both 0).",
    "A solution is an ordered pair; there are infinitely many.",
    "Graph is a straight line; two points are enough to draw it.",
    "x = a is vertical (∥ y-axis); y = b is horizontal (∥ x-axis).",
  ],
  keyTakeaways: [
    "Two variables ⇒ infinitely many solutions ⇒ a line.",
    "Find easy solutions by setting x = 0 and y = 0.",
    "Remember x-axis is y = 0 and y-axis is x = 0.",
  ],
  faq: [
    { q: "Why does a linear equation in two variables have infinitely many solutions?", a: "Because for every value of x you choose, you can find a matching y, so there are endless ordered pairs that satisfy it." },
    { q: "How do I draw the graph of such an equation?", a: "Find at least two solution points, plot them, and join them with a straight line." },
    { q: "What is the equation of a line parallel to the x-axis?", a: "It has the form y = b, where b is a constant." },
  ],
  related: [
    { classId: "9", subject: "maths", slug: "coordinate-geometry" },
    { classId: "9", subject: "maths", slug: "polynomials" },
  ],
};

export default chapter;
