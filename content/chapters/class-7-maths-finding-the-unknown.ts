import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "7",
  subject: "maths",
  slug: "finding-the-unknown",
  title: "Finding the Unknown",
  order: 15,
  seoTitle: "Finding the Unknown Class 7 Maths (Ganita Prakash) — Simple Equations MCQs",
  metaDescription:
    "Class 7 Maths Finding the Unknown (Ganita Prakash): simple linear equations in one variable, forming equations, solving by balancing and inverse operations, and word problems, with examples and an MCQ quiz.",
  overview:
    "When a number is hidden in a situation, an equation helps us find it. This Class 7 Ganita Prakash chapter forms simple equations in one variable and solves them by keeping the equation balanced — using inverse operations — then applies the method to word problems.",
  objectives: [
    "Understand what an equation is.",
    "Form equations from word problems.",
    "Solve equations by balancing.",
    "Check a solution by substitution.",
  ],
  concepts: [
    {
      heading: "What is an equation?",
      body: "An equation is a statement that two expressions are equal, joined by an equals sign, such as x + 3 = 7. The letter stands for an unknown number, and solving the equation means finding the value of the letter that makes the two sides equal — here x = 4.",
    },
    {
      heading: "Forming equations",
      body: "Word problems become solvable once written as equations. 'A number increased by 5 gives 12' becomes x + 5 = 12; 'three times a number is 21' becomes 3x = 21. Translating the words faithfully into symbols is half the work.",
    },
    {
      heading: "Solving by balancing",
      body: "An equation is like a balanced scale: whatever we do to one side we must do to the other to keep it balanced. To solve x + 3 = 7, subtract 3 from both sides to get x = 4. To solve 3x = 21, divide both sides by 3 to get x = 7. We use the inverse operation to undo what is done to the unknown.",
    },
    {
      heading: "Checking the solution",
      body: "After solving, we check by substituting the value back into the original equation. For x = 4 in x + 3 = 7, the left side becomes 4 + 3 = 7, which equals the right side, so the solution is correct. Checking guards against slips.",
    },
  ],
  formulas: [
    { name: "Balancing rule", formula: "do the same operation to both sides" },
    { name: "Inverse operations", formula: "+ undone by −; × undone by ÷" },
  ],
  definitions: [
    { term: "Equation", meaning: "A statement that two expressions are equal." },
    { term: "Solution", meaning: "The value of the unknown that makes the equation true." },
    { term: "Inverse operation", meaning: "The operation that undoes another (− undoes +)." },
    { term: "Balance", meaning: "Keeping both sides equal by doing the same to each." },
  ],
  examples: [
    {
      problem: "Solve x + 3 = 7.",
      solution: "Subtract 3 from both sides: x = 4.",
    },
    {
      problem: "Solve 3x = 21.",
      solution: "Divide both sides by 3: x = 7.",
    },
    {
      problem: "Solve x − 5 = 2.",
      solution: "Add 5 to both sides: x = 7.",
    },
  ],
  commonMistakes: [
    "Doing an operation to only one side of the equation.",
    "Using the wrong inverse operation (subtracting when you should divide).",
    "Forgetting to check the solution.",
    "Mis-translating the word problem into the equation.",
  ],
  mcqs: [
    { id: "fu1", difficulty: "easy", q: "A statement that two expressions are equal is an:", options: ["equation", "expression", "estimate", "inequality"], answer: 0, explanation: "It is an equation." },
    { id: "fu2", difficulty: "easy", q: "Solve x + 4 = 9.", options: ["x = 13", "x = 5", "x = 4", "x = 36"], answer: 1, explanation: "Subtract 4: x = 5." },
    { id: "fu3", difficulty: "medium", q: "Solve 5x = 20.", options: ["x = 100", "x = 15", "x = 4", "x = 25"], answer: 2, explanation: "Divide by 5: x = 4." },
    { id: "fu4", difficulty: "medium", q: "The inverse operation of addition is:", options: ["multiplication", "division", "squaring", "subtraction"], answer: 3, explanation: "Subtraction undoes addition." },
    { id: "fu5", difficulty: "easy", q: "Solve x − 2 = 6.", options: ["x = 8", "x = 4", "x = 12", "x = 3"], answer: 0, explanation: "Add 2: x = 8." },
    { id: "fu6", difficulty: "medium", q: "'Three times a number is 21' as an equation is:", options: ["x + 3 = 21", "3x = 21", "x − 3 = 21", "x/3 = 21"], answer: 1, explanation: "Three times a number is 3x = 21." },
    { id: "fu7", difficulty: "hard", q: "Solve 2x + 1 = 11.", options: ["x = 6", "x = 11", "x = 5", "x = 4"], answer: 2, explanation: "2x = 10, so x = 5." },
    { id: "fu8", difficulty: "easy", q: "To keep an equation balanced, do the same to:", options: ["the left only", "the right only", "neither side", "both sides"], answer: 3, explanation: "Apply the operation to both sides." },
    { id: "fu9", difficulty: "medium", q: "Solve x/4 = 3.", options: ["x = 12", "x = 7", "x = 1", "x = 0.75"], answer: 0, explanation: "Multiply by 4: x = 12." },
    { id: "fu10", difficulty: "hard", q: "Which value of x makes x + 7 = 7 true?", options: ["7", "0", "14", "1"], answer: 1, explanation: "x must be 0." },
  ],
  shortQuestions: [
    { q: "What does it mean to solve an equation?", a: "To find the value of the unknown that makes both sides equal." },
    { q: "What is the inverse of multiplication?", a: "Division." },
    { q: "Solve x + 6 = 10.", a: "x = 4." },
  ],
  longQuestions: [
    { q: "Explain how to solve a simple equation by balancing, with an example.", a: "An equation can be thought of as a balanced scale, where the two sides are equal. To keep it balanced while finding the unknown, we must do exactly the same operation to both sides, using inverse operations to undo what has been done to the variable. For example, to solve 2x + 1 = 11, we first subtract 1 from both sides to get 2x = 10, then divide both sides by 2 to get x = 5. Each step keeps the equation balanced while peeling away the operations around x, until x is left alone. Finally, we check by substituting x = 5 back: 2 × 5 + 1 = 11, which matches the right side." },
    { q: "How do you turn a word problem into an equation and solve it? Give an example.", a: "First, choose a letter for the unknown quantity, then translate the words into an equation using that letter. For example, 'a number increased by 5 gives 12' becomes x + 5 = 12. Next, solve by balancing: subtracting 5 from both sides gives x = 7. Finally, check the answer against the original wording — 7 increased by 5 is indeed 12 — so the solution is correct. The key skills are translating the problem faithfully into symbols and then applying inverse operations carefully to both sides." },
  ],
  hots: [
    { q: "I think of a number, double it and add 3 to get 17. What is the number?", a: "2x + 3 = 17 → 2x = 14 → x = 7." },
    { q: "For what value of x is x + x + x = 12?", a: "3x = 12, so x = 4." },
  ],
  revisionNotes: [
    "Equation: two expressions joined by '='.",
    "Solve by doing the same operation to both sides.",
    "Use inverse operations (− undoes +, ÷ undoes ×).",
    "Check by substituting the answer back.",
  ],
  keyTakeaways: [
    "Solving means finding the unknown that balances the equation.",
    "Keep both sides equal at every step.",
    "Always check the solution.",
  ],
  faq: [
    { q: "What is the difference between an expression and an equation?", a: "An expression has no equals sign; an equation states that two expressions are equal." },
    { q: "How do I solve 3x = 21?", a: "Divide both sides by 3 to get x = 7." },
    { q: "Why check the solution?", a: "Substituting it back confirms both sides are equal and catches mistakes." },
  ],
  related: [
    { classId: "7", subject: "maths", slug: "expressions-using-letter-numbers" },
    { classId: "9", subject: "maths", slug: "linear-equations-in-two-variables" },
  ],
};

export default chapter;
