import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "10",
  subject: "maths",
  slug: "pair-of-linear-equations-in-two-variables",
  title: "Pair of Linear Equations in Two Variables",
  order: 3,
  seoTitle:
    "Pair of Linear Equations in Two Variables Class 10 CBSE Notes, MCQs & Quiz",
  metaDescription:
    "Class 10 Maths Pair of Linear Equations in Two Variables: graphical method, substitution and elimination, conditions for consistency, solved examples, MCQ quiz and important questions.",
  overview:
    "Two linear equations in the same two variables form a 'pair'. This chapter teaches how to solve such a pair by substitution and elimination, and how to tell — just from the coefficients — whether the pair has one solution, no solution, or infinitely many. Geometrically, each equation is a line, and the solution is where the two lines meet.",
  objectives: [
    "Represent a pair of linear equations graphically as two lines.",
    "Solve a pair by the substitution method.",
    "Solve a pair by the elimination method.",
    "Decide consistency from the ratios of coefficients.",
    "Translate word problems into a pair of linear equations.",
  ],
  concepts: [
    {
      heading: "Geometric meaning",
      body: "Each equation a₁x + b₁y + c₁ = 0 is a straight line. The pair's solution is the point where the lines intersect. Lines may intersect at one point, be parallel, or coincide.",
    },
    {
      heading: "Conditions for consistency",
      body: "Compare ratios: if a₁/a₂ ≠ b₁/b₂ there is a unique solution (intersecting lines). If a₁/a₂ = b₁/b₂ ≠ c₁/c₂ there is no solution (parallel lines). If a₁/a₂ = b₁/b₂ = c₁/c₂ there are infinitely many solutions (coincident lines).",
    },
    {
      heading: "Substitution method",
      body: "Express one variable from one equation and substitute it into the other, reducing the pair to a single equation in one variable.",
    },
    {
      heading: "Elimination method",
      body: "Make the coefficient of one variable equal in both equations (by multiplying), then add or subtract to eliminate that variable.",
    },
  ],
  formulas: [
    { name: "Unique solution", formula: "a₁/a₂ ≠ b₁/b₂", note: "Lines intersect at one point (consistent)." },
    { name: "No solution", formula: "a₁/a₂ = b₁/b₂ ≠ c₁/c₂", note: "Parallel lines (inconsistent)." },
    { name: "Infinite solutions", formula: "a₁/a₂ = b₁/b₂ = c₁/c₂", note: "Coincident lines (dependent, consistent)." },
  ],
  definitions: [
    { term: "Consistent pair", meaning: "A pair of equations that has at least one solution." },
    { term: "Inconsistent pair", meaning: "A pair that has no solution (parallel lines)." },
    { term: "Dependent pair", meaning: "A consistent pair with infinitely many solutions (the lines coincide)." },
  ],
  examples: [
    {
      problem: "Solve x + y = 14 and x − y = 4 by elimination.",
      solution:
        "Add the two equations: 2x = 18, so x = 9. Substitute into x + y = 14: y = 5. Solution: (9, 5).",
    },
    {
      problem: "Solve x + 2y = −1 and 2x − 3y = 12 by substitution.",
      solution:
        "From the first, x = −1 − 2y. Substitute: 2(−1 − 2y) − 3y = 12 ⇒ −2 − 4y − 3y = 12 ⇒ −7y = 14 ⇒ y = −2. Then x = −1 − 2(−2) = 3. Solution: (3, −2).",
    },
    {
      problem: "Check the consistency of 3x + 2y = 5 and 6x + 4y = 10.",
      solution:
        "Write as 3x + 2y − 5 = 0 and 6x + 4y − 10 = 0. a₁/a₂ = 3/6 = 1/2, b₁/b₂ = 2/4 = 1/2, c₁/c₂ = −5/−10 = 1/2. All equal, so there are infinitely many solutions — consistent and dependent.",
    },
  ],
  commonMistakes: [
    "Comparing c₁/c₂ without writing both equations in the form ax + by + c = 0 first.",
    "Sign errors while substituting a negative expression.",
    "Eliminating before making the chosen variable's coefficients equal.",
    "Calling a dependent pair (infinite solutions) inconsistent — it is actually consistent.",
  ],
  mcqs: [
    { id: "pl1", difficulty: "medium", q: "The pair x + 2y = 4 and 2x + 4y = 12 has:", options: ["a unique solution", "exactly two solutions", "no solution", "infinitely many solutions"], answer: 2, explanation: "1/2 = 2/4 ≠ −4/−12, so the lines are parallel — no solution." },
    { id: "pl2", difficulty: "easy", q: "If a₁/a₂ ≠ b₁/b₂, the pair has:", options: ["a unique solution", "no solution", "no real meaning", "infinitely many solutions"], answer: 0, explanation: "Unequal ratios of x and y coefficients ⇒ intersecting lines ⇒ unique solution." },
    { id: "pl3", difficulty: "easy", q: "The solution of x + y = 5 and x − y = 1 is:", options: ["(4, 1)", "(3, 2)", "(2, 3)", "(1, 4)"], answer: 1, explanation: "Adding gives 2x = 6, x = 3, y = 2." },
    { id: "pl4", difficulty: "easy", q: "Two lines coincide when:", options: ["a₁/a₂ = b₁/b₂ = c₁/c₂", "they are perpendicular", "a₁/a₂ ≠ b₁/b₂", "a₁/a₂ = b₁/b₂ ≠ c₁/c₂"], answer: 0, explanation: "All three ratios equal ⇒ coincident lines ⇒ infinitely many solutions." },
    { id: "pl5", difficulty: "easy", q: "The graph of a linear equation in two variables is a:", options: ["point", "straight line", "parabola", "circle"], answer: 1, explanation: "A linear equation always graphs as a straight line." },
    { id: "pl6", difficulty: "medium", q: "A pair of equations representing parallel lines is:", options: ["consistent", "dependent", "inconsistent", "always solvable"], answer: 2, explanation: "Parallel lines never meet, so the pair is inconsistent (no solution)." },
    { id: "pl7", difficulty: "medium", q: "If x = 2 and y = 3 satisfy 2x + ky = 12, then k is:", options: ["3", "4", "8/3", "2"], answer: 2, explanation: "2(2) + k(3) = 12 ⇒ 3k = 8 ⇒ k = 8/3." },
    { id: "pl8", difficulty: "easy", q: "A consistent pair has:", options: ["negative solutions", "no solution", "only two solutions", "at least one solution"], answer: 3, explanation: "Consistent means a solution exists (one or infinitely many)." },
    { id: "pl9", difficulty: "medium", q: "The number of solutions of x + y = 3 and 2x + 2y = 6 is:", options: ["zero", "infinitely many", "one", "two"], answer: 1, explanation: "All ratios equal 1/2... here 1/2 = 1/2 = 3/6, coincident lines, infinitely many solutions." },
    { id: "pl10", difficulty: "hard", q: "For what value of k do kx + 2y = 5 and 3x + 4y = 1 have a unique solution?", options: ["k ≠ 6", "k = 6", "k ≠ 0", "k = 0"], answer: 0, explanation: "Unique ⇒ a₁/a₂ ≠ b₁/b₂ ⇒ k/3 ≠ 2/4 ⇒ k ≠ 6/4·3... i.e. k ≠ 6." },
  ],
  shortQuestions: [
    { q: "Is the pair 2x + 3y = 7 and 4x + 6y = 14 consistent?", a: "Ratios: 2/4 = 3/6 = 7/14 = 1/2, so the lines coincide — consistent with infinitely many solutions." },
    { q: "Solve 2x = y and x + y = 6.", a: "Substitute y = 2x: x + 2x = 6 ⇒ x = 2, y = 4." },
    { q: "Name the two algebraic methods of solving a pair.", a: "Substitution and elimination." },
  ],
  longQuestions: [
    { q: "Solve 3x − 5y = −2 and 2x + y = 4 by elimination.", a: "Multiply the second by 5: 10x + 5y = 20. Add to the first: 13x = 18 ⇒ x = 18/13. Hmm; instead multiply second by 5 and add: 3x − 5y = −2 and 10x + 5y = 20 give 13x = 18, x = 18/13, then y = 4 − 2(18/13) = (52 − 36)/13 = 16/13. Solution: (18/13, 16/13)." },
    { q: "The sum of two numbers is 50 and their difference is 10. Form equations and find the numbers.", a: "Let the numbers be x and y. x + y = 50 and x − y = 10. Adding: 2x = 60 ⇒ x = 30, y = 20." },
  ],
  hots: [
    { q: "A boat goes 30 km upstream and 44 km downstream in 10 hours. In 13 hours it goes 40 km upstream and 55 km downstream. (Set up only.) Why is a pair of linear equations useful here?", a: "Let boat speed be x and stream speed y. Upstream speed = x − y, downstream = x + y. The two time conditions give two equations in 1/(x−y) and 1/(x+y), which form a solvable pair of linear equations in those reciprocals." },
    { q: "For what value of k will the pair x + 2y = 3 and 5x + ky + 7 = 0 have no solution?", a: "Write 5x + ky + 7 = 0 and x + 2y − 3 = 0. No solution ⇒ 1/5 = 2/k ≠ −3/7 ⇒ k = 10 (and 2/10 ≠ −3/7 holds)." },
  ],
  revisionNotes: [
    "Each equation = a line; solution = intersection point.",
    "Unique: a₁/a₂ ≠ b₁/b₂.",
    "None: a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
    "Infinite: a₁/a₂ = b₁/b₂ = c₁/c₂.",
    "Methods: substitution and elimination.",
  ],
  keyTakeaways: [
    "Always rewrite as ax + by + c = 0 before comparing ratios.",
    "Pick elimination when coefficients line up easily, substitution otherwise.",
    "Word problems: name the variables, write two equations, then solve.",
  ],
  faq: [
    { q: "How do I know if a pair of equations has a solution?", a: "Compare the ratios a₁/a₂, b₁/b₂ and c₁/c₂. If the first two are unequal there is a unique solution; equal first two but different third means no solution; all three equal means infinitely many." },
    { q: "Which method is better, substitution or elimination?", a: "Use elimination when a variable's coefficients are easy to match, and substitution when one variable is already isolated or simple to isolate." },
    { q: "What does 'consistent' mean?", a: "A consistent pair has at least one solution; an inconsistent pair has none." },
  ],
  related: [
    { classId: "10", subject: "maths", slug: "quadratic-equations" },
    { classId: "10", subject: "maths", slug: "polynomials" },
  ],
};

export default chapter;
