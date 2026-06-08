import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "6",
  subject: "maths",
  slug: "patterns-in-mathematics",
  title: "Patterns in Mathematics",
  order: 1,
  seoTitle: "Patterns in Mathematics Class 6 Maths (Ganita Prakash) — Notes & MCQs",
  metaDescription:
    "Class 6 Maths Patterns in Mathematics (Ganita Prakash): number patterns and sequences, odd, even, triangular and square numbers, shape patterns, and how mathematics is the study of patterns, with examples and an MCQ quiz.",
  overview:
    "Mathematics is often called the science of patterns. This opening Class 6 Ganita Prakash chapter looks at patterns in numbers and shapes — counting, odd and even numbers, triangular and square numbers, and growing shape sequences — and shows how spotting the rule behind a pattern lets us predict what comes next.",
  objectives: [
    "Recognise and extend number patterns.",
    "Identify odd, even, triangular and square numbers.",
    "Describe patterns made by shapes.",
    "Find the rule that generates a pattern.",
  ],
  concepts: [
    {
      heading: "Number sequences",
      body: "A sequence is a list of numbers arranged by a rule. The counting numbers 1, 2, 3, 4… go up by 1, the even numbers 2, 4, 6, 8… go up by 2, and the odd numbers 1, 3, 5, 7… also go up by 2. Once we know the rule, we can continue the sequence as far as we like.",
    },
    {
      heading: "Triangular and square numbers",
      body: "Some numbers make neat shapes with dots. Triangular numbers 1, 3, 6, 10… can be drawn as triangles, and square numbers 1, 4, 9, 16… can be drawn as squares. A square number is a number multiplied by itself, so 4 = 2 × 2 and 9 = 3 × 3.",
    },
    {
      heading: "Patterns with shapes",
      body: "Patterns also appear in shapes that grow step by step, such as a row of squares or an L-shape that adds one more square each time. Counting the squares at each step often reveals a number pattern hiding inside the shape pattern.",
    },
    {
      heading: "Finding the rule",
      body: "To extend a pattern, we look for the rule: how each term is made from the one before, or from its position. The sum of the first few odd numbers gives square numbers (1 + 3 = 4, 1 + 3 + 5 = 9), a surprising link between two patterns.",
    },
  ],
  formulas: [
    { name: "Even number", formula: "even number = 2 × a whole number" },
    { name: "Square number", formula: "square number = n × n" },
    { name: "Odd-number sum", formula: "1 + 3 + 5 + … (n terms) = n × n" },
  ],
  definitions: [
    { term: "Pattern", meaning: "An arrangement of numbers or shapes that follows a rule." },
    { term: "Sequence", meaning: "An ordered list of numbers formed by a rule." },
    { term: "Triangular number", meaning: "A number of dots that can be arranged in a triangle, like 1, 3, 6, 10." },
    { term: "Square number", meaning: "A number that is a whole number multiplied by itself, like 4, 9, 16." },
  ],
  examples: [
    {
      problem: "Write the next two numbers: 2, 4, 6, 8, ___, ___.",
      solution: "The rule is 'add 2', so the next numbers are 10 and 12.",
    },
    {
      problem: "Is 16 a square number? Why?",
      solution: "Yes, because 16 = 4 × 4, so it can be drawn as a 4-by-4 square of dots.",
    },
    {
      problem: "Find the sum 1 + 3 + 5 + 7.",
      solution: "The sum of the first 4 odd numbers is 4 × 4 = 16.",
    },
  ],
  commonMistakes: [
    "Guessing the next term without first finding the rule.",
    "Confusing triangular numbers with square numbers.",
    "Thinking a square number means doubling (4 squared is 16, not 8).",
    "Assuming every increasing list is a pattern, even with no fixed rule.",
  ],
  mcqs: [
    { id: "pa1", difficulty: "easy", q: "The next number in 1, 3, 5, 7, ___ is:", options: ["8", "9", "10", "11"], answer: 1, explanation: "Odd numbers go up by 2, so 7 + 2 = 9." },
    { id: "pa2", difficulty: "easy", q: "Which of these is a square number?", options: ["6", "8", "9", "10"], answer: 2, explanation: "9 = 3 × 3, a square number." },
    { id: "pa3", difficulty: "medium", q: "The rule for the sequence 5, 10, 15, 20 is:", options: ["add 2", "add 10", "multiply by 2", "add 5"], answer: 3, explanation: "Each term is 5 more than the last." },
    { id: "pa4", difficulty: "medium", q: "1 + 3 + 5 equals which square number?", options: ["9", "8", "6", "12"], answer: 0, explanation: "Sum of first 3 odd numbers = 3 × 3 = 9." },
    { id: "pa5", difficulty: "easy", q: "Numbers like 1, 3, 6, 10 are called:", options: ["square numbers", "even numbers", "triangular numbers", "odd numbers"], answer: 2, explanation: "They can be arranged as triangles." },
    { id: "pa6", difficulty: "medium", q: "The next term in 3, 6, 9, 12, ___ is:", options: ["15", "14", "16", "18"], answer: 0, explanation: "Add 3 each time: 12 + 3 = 15." },
    { id: "pa7", difficulty: "hard", q: "The 5th square number is:", options: ["20", "30", "25", "10"], answer: 2, explanation: "5 × 5 = 25." },
    { id: "pa8", difficulty: "easy", q: "Even numbers are made by:", options: ["multiplying by 2 a whole number", "adding 1", "subtracting 2", "dividing by 3"], answer: 0, explanation: "An even number is 2 × a whole number." },
    { id: "pa9", difficulty: "medium", q: "Which number continues 1, 4, 9, 16, ___?", options: ["20", "24", "32", "25"], answer: 3, explanation: "Square numbers: next is 5 × 5 = 25." },
    { id: "pa10", difficulty: "hard", q: "How do consecutive odd numbers relate to square numbers?", options: ["their product is a square", "their sum gives square numbers", "they are all square", "they have no link"], answer: 1, explanation: "1+3=4, 1+3+5=9: sums of odd numbers are squares." },
  ],
  shortQuestions: [
    { q: "What is a number sequence?", a: "An ordered list of numbers formed by following a rule." },
    { q: "Give an example of a triangular number.", a: "6 (it can be drawn as a triangle of dots: 1 + 2 + 3)." },
    { q: "What do you get by adding the first four odd numbers?", a: "1 + 3 + 5 + 7 = 16, the square number 4 × 4." },
  ],
  longQuestions: [
    { q: "Explain how to find and extend the rule of a pattern, using 2, 5, 8, 11 as an example.", a: "To find a rule, compare each term with the one before it. In 2, 5, 8, 11 each term is 3 more than the previous one, so the rule is 'add 3'. Using this rule we extend the pattern: 11 + 3 = 14, then 14 + 3 = 17, and so on. Knowing the rule lets us predict any later term without drawing the whole sequence." },
    { q: "Describe triangular and square numbers and one link between number patterns.", a: "Triangular numbers (1, 3, 6, 10…) are dots arranged as triangles, each formed by adding the next counting number (1, 1+2, 1+2+3…). Square numbers (1, 4, 9, 16…) are dots arranged as squares, formed by n × n. A neat link is that adding consecutive odd numbers gives square numbers: 1 = 1, 1 + 3 = 4, 1 + 3 + 5 = 9 — showing how one pattern is built from another." },
  ],
  hots: [
    { q: "Without adding all of them, find 1 + 3 + 5 + 7 + 9 + 11.", a: "These are the first 6 odd numbers, and their sum is 6 × 6 = 36." },
    { q: "The 10th triangular number is 55. What is the 11th, and why?", a: "Each triangular number adds the next counting number, so the 11th is 55 + 11 = 66." },
  ],
  revisionNotes: [
    "A pattern follows a rule; find the rule to extend it.",
    "Even: 2,4,6…; Odd: 1,3,5…; both step by 2.",
    "Triangular numbers 1,3,6,10…; square numbers 1,4,9,16… (n × n).",
    "Sum of the first n odd numbers = n × n.",
  ],
  keyTakeaways: [
    "Maths is the study of patterns in numbers and shapes.",
    "Finding the rule lets you predict what comes next.",
    "Different patterns can be surprisingly linked.",
  ],
  faq: [
    { q: "What is a pattern in mathematics?", a: "An arrangement of numbers or shapes that follows a definite rule." },
    { q: "What is a square number?", a: "A whole number multiplied by itself, such as 9 = 3 × 3." },
    { q: "How are odd numbers linked to square numbers?", a: "Adding consecutive odd numbers from 1 gives square numbers (1, 4, 9, 16…)." },
  ],
  related: [
    { classId: "6", subject: "maths", slug: "number-play" },
    { classId: "6", subject: "maths", slug: "prime-time" },
  ],
};

export default chapter;
