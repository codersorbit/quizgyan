import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "7",
  subject: "maths",
  slug: "expressions-using-letter-numbers",
  title: "Expressions using Letter-Numbers",
  order: 4,
  seoTitle: "Expressions using Letter-Numbers Class 7 Maths (Ganita Prakash) — Algebra MCQs",
  metaDescription:
    "Class 7 Maths Expressions using Letter-Numbers (Ganita Prakash): using letters as variables, forming and evaluating algebraic expressions, terms and coefficients, and simple patterns, with examples and an MCQ quiz.",
  overview:
    "What if a number is unknown or can change? This Class 7 Ganita Prakash chapter introduces algebra by letting letters stand for numbers. Students form expressions with these 'letter-numbers', evaluate them for given values, and use them to describe patterns and rules.",
  objectives: [
    "Use letters to represent numbers.",
    "Form algebraic expressions from situations.",
    "Identify terms and coefficients.",
    "Evaluate expressions for given values.",
  ],
  concepts: [
    {
      heading: "Letters as numbers",
      body: "A letter such as x or n can stand for a number that is unknown or that can change — a variable. Writing 'a box of n pencils plus 2 loose pencils' as n + 2 captures the situation for any value of n. The letter behaves exactly like a number in calculations.",
    },
    {
      heading: "Forming expressions",
      body: "We build algebraic expressions by combining letters and numbers with operations. 'Three times a number' is 3 × x, written 3x; 'five more than a number' is x + 5; 'a number halved' is x/2. The skill is translating words into these compact forms.",
    },
    {
      heading: "Terms and coefficients",
      body: "An algebraic expression is made of terms separated by + or −. In 3x + 5, the terms are 3x and 5; the number multiplying the letter, here 3, is the coefficient. Knowing terms and coefficients helps in reading and later simplifying expressions.",
    },
    {
      heading: "Evaluating expressions",
      body: "To evaluate an expression, we replace the letter with a given number and calculate. If x = 4, then 3x + 5 = 3 × 4 + 5 = 17. The same expression gives different values for different values of the letter, which is what makes it powerful.",
    },
  ],
  formulas: [
    { name: "Multiplication shorthand", formula: "3 × x is written 3x" },
    { name: "Evaluate", formula: "substitute the value of the letter and calculate" },
  ],
  definitions: [
    { term: "Variable", meaning: "A letter that stands for a number that is unknown or can change." },
    { term: "Algebraic expression", meaning: "A combination of letters and numbers joined by operations." },
    { term: "Coefficient", meaning: "The number multiplying a letter in a term, as 3 in 3x." },
    { term: "Term", meaning: "A part of an expression separated by + or −." },
  ],
  examples: [
    {
      problem: "Write 'seven more than a number x' as an expression.",
      solution: "x + 7.",
    },
    {
      problem: "Find the value of 2x + 3 when x = 5.",
      solution: "2 × 5 + 3 = 13.",
    },
    {
      problem: "What is the coefficient of x in 4x − 1?",
      solution: "4.",
    },
  ],
  commonMistakes: [
    "Reading 3x as 'three and x' instead of 'three times x'.",
    "Forgetting the order of operations when evaluating, e.g. 2x + 3.",
    "Confusing the coefficient with the constant term.",
    "Thinking a letter can only mean one fixed number.",
  ],
  mcqs: [
    { id: "lt1", difficulty: "easy", q: "A letter that stands for a number is called a:", options: ["variable", "constant", "term", "digit"], answer: 0, explanation: "Such a letter is a variable." },
    { id: "lt2", difficulty: "easy", q: "'3 times a number x' is written:", options: ["3 + x", "3x", "x − 3", "x/3"], answer: 1, explanation: "3 × x is written 3x." },
    { id: "lt3", difficulty: "medium", q: "The value of x + 4 when x = 6 is:", options: ["24", "2", "10", "46"], answer: 2, explanation: "6 + 4 = 10." },
    { id: "lt4", difficulty: "medium", q: "In 5x − 2, the coefficient of x is:", options: ["2", "−2", "x", "5"], answer: 3, explanation: "The number multiplying x is 5." },
    { id: "lt5", difficulty: "easy", q: "'A number n decreased by 3' is:", options: ["n − 3", "3 − n", "3n", "n + 3"], answer: 0, explanation: "Decreased by 3 means n − 3." },
    { id: "lt6", difficulty: "medium", q: "The terms of 2x + 7 are:", options: ["2 and x and 7", "2x and 7", "2 and 7", "2x7"], answer: 1, explanation: "Terms are separated by +: 2x and 7." },
    { id: "lt7", difficulty: "hard", q: "Find 3x + 5 when x = 4.", options: ["12", "32", "17", "20"], answer: 2, explanation: "3 × 4 = 12, then 12 + 5 = 17." },
    { id: "lt8", difficulty: "easy", q: "'Half of a number x' is written:", options: ["2x", "x − 2", "x + 2", "x/2"], answer: 3, explanation: "Half of x is x/2." },
    { id: "lt9", difficulty: "medium", q: "If y = 0, the value of 4y + 6 is:", options: ["6", "10", "0", "46"], answer: 0, explanation: "4 × 0 = 0, then 0 + 6 = 6." },
    { id: "lt10", difficulty: "hard", q: "The cost of n books at ₹20 each plus ₹5 postage is:", options: ["20 + n + 5", "20n + 5", "25n", "n/20 + 5"], answer: 1, explanation: "n books cost 20n, plus 5: 20n + 5." },
  ],
  shortQuestions: [
    { q: "What is a variable?", a: "A letter that stands for a number that is unknown or can change." },
    { q: "Write 'four more than twice a number x'.", a: "2x + 4." },
    { q: "Evaluate 5x when x = 3.", a: "5 × 3 = 15." },
  ],
  longQuestions: [
    { q: "Explain how letters are used to form expressions, with examples.", a: "In algebra we use a letter, such as x or n, to stand for a number that is unknown or that can vary — this is called a variable. We then combine letters and numbers using the usual operations to form expressions that describe situations. For example, 'three times a number' is written 3x, 'five more than a number' is x + 5, and 'a number halved' is x/2. The letter behaves just like a number, so 3x means 3 multiplied by whatever x stands for. This lets a single short expression describe a rule for many different values." },
    { q: "What does it mean to evaluate an expression? Show with 3x + 5.", a: "To evaluate an algebraic expression means to find its value for a particular value of the letter, by substituting that value and then calculating using the order of operations. For the expression 3x + 5: if x = 4, we replace x by 4 to get 3 × 4 + 5, then multiply first to get 12 + 5 = 17. If instead x = 0, we get 3 × 0 + 5 = 5. The same expression gives different values for different values of x, which is exactly why variables are useful for describing changing quantities." },
  ],
  hots: [
    { q: "A pattern uses 3n + 1 matchsticks for the n-th figure. How many for the 5th figure?", a: "3 × 5 + 1 = 16 matchsticks." },
    { q: "For what value of x does x + x equal 2x? Explain.", a: "For every value of x, because x + x always equals 2x — they are equal expressions." },
  ],
  revisionNotes: [
    "A variable is a letter standing for a number.",
    "3 × x is written 3x; coefficient of x is 3.",
    "Terms are separated by + and −.",
    "Evaluate by substituting the value and using order of operations.",
  ],
  keyTakeaways: [
    "Letters let us describe rules for any number.",
    "Coefficient = number multiplying the letter.",
    "Evaluate by substitution.",
  ],
  faq: [
    { q: "What does 3x mean?", a: "Three times the number x." },
    { q: "What is a coefficient?", a: "The number multiplying a variable, like 3 in 3x." },
    { q: "How do I evaluate an expression?", a: "Replace the letter with its value and calculate." },
  ],
  related: [
    { classId: "7", subject: "maths", slug: "arithmetic-expressions" },
    { classId: "8", subject: "maths", slug: "algebra-play" },
  ],
};

export default chapter;
