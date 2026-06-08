import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "6",
  subject: "maths",
  slug: "the-other-side-of-zero",
  title: "The Other Side of Zero",
  order: 10,
  seoTitle: "The Other Side of Zero Class 6 Maths (Ganita Prakash) — Integers Notes & MCQs",
  metaDescription:
    "Class 6 Maths The Other Side of Zero (Ganita Prakash): negative numbers and integers, the number line with negatives, comparing and ordering integers, and simple addition and subtraction, with real-life examples and an MCQ quiz.",
  overview:
    "What lies to the left of zero? This Class 6 Ganita Prakash chapter extends numbers beyond the counting numbers to introduce negative numbers and integers. Students place them on a number line, compare and order them, add and subtract simple integers, and meet real-life uses like temperature and depth.",
  objectives: [
    "Understand negative numbers and integers.",
    "Place integers on a number line.",
    "Compare and order integers.",
    "Add and subtract simple integers.",
  ],
  concepts: [
    {
      heading: "Negative numbers and integers",
      body: "Numbers less than zero are negative numbers, written with a minus sign such as −3. Together, the positive whole numbers, zero, and the negative whole numbers form the integers: …, −3, −2, −1, 0, 1, 2, 3, …. Zero is an integer that is neither positive nor negative.",
    },
    {
      heading: "Integers on the number line",
      body: "On a number line, zero sits in the middle, positive integers extend to the right and negative integers to the left, each step the same distance apart. Numbers like 3 and −3 are opposites, lying the same distance from zero on either side.",
    },
    {
      heading: "Comparing and ordering integers",
      body: "On the number line, a number to the right is always greater than one to the left. So every positive number is greater than zero, zero is greater than every negative number, and among negatives the one closer to zero is greater — for example −2 is greater than −5.",
    },
    {
      heading: "Adding and subtracting integers",
      body: "Moving right on the number line means adding, and moving left means subtracting, which also covers negative numbers. So 2 + (−5) lands on −3, and −1 − 2 lands on −3. Real-life settings such as temperatures below zero, depths below sea level, and money owed all use these ideas.",
    },
  ],
  formulas: [
    { name: "Opposite of a number", formula: "the opposite of n is −n" },
    { name: "On the number line", formula: "right = add; left = subtract" },
  ],
  definitions: [
    { term: "Negative number", meaning: "A number less than zero, written with a minus sign." },
    { term: "Integer", meaning: "A positive whole number, zero, or a negative whole number." },
    { term: "Opposite", meaning: "Two numbers the same distance from zero on either side, like 4 and −4." },
    { term: "Number line", meaning: "A line on which numbers are marked at equal steps, with zero in the middle." },
  ],
  examples: [
    {
      problem: "Which is greater, −2 or −7?",
      solution: "−2 is greater, because it lies to the right of −7 (closer to zero).",
    },
    {
      problem: "What is the opposite of 6?",
      solution: "−6, the same distance from zero on the other side.",
    },
    {
      problem: "Find 3 + (−5).",
      solution: "Start at 3 and move 5 steps left to reach −2.",
    },
  ],
  commonMistakes: [
    "Thinking −5 is greater than −2 because 5 is bigger than 2.",
    "Treating zero as a positive (or negative) number.",
    "Moving the wrong way on the number line when adding a negative.",
    "Dropping the minus sign and using the number as positive.",
  ],
  mcqs: [
    { id: "oz1", difficulty: "easy", q: "A number less than zero is called:", options: ["a whole number", "a negative number", "a positive number", "a fraction"], answer: 1, explanation: "Numbers below zero are negative." },
    { id: "oz2", difficulty: "easy", q: "Which of these is an integer?", options: ["½", "−4", "2.5", "¾"], answer: 1, explanation: "−4 is a negative whole number, an integer." },
    { id: "oz3", difficulty: "medium", q: "Which is greater?", options: ["−6", "−1", "−3", "−9"], answer: 1, explanation: "−1 is closest to zero, so it is greatest." },
    { id: "oz4", difficulty: "medium", q: "The opposite of −8 is:", options: ["0", "−16", "1", "8"], answer: 3, explanation: "The opposite of −8 is 8." },
    { id: "oz5", difficulty: "easy", q: "Zero is:", options: ["neither positive nor negative", "always positive", "always negative", "not an integer"], answer: 0, explanation: "Zero is neither positive nor negative." },
    { id: "oz6", difficulty: "medium", q: "On a number line, negative integers lie:", options: ["to the right of zero", "to the left of zero", "above zero", "on zero"], answer: 1, explanation: "Negatives are to the left of zero." },
    { id: "oz7", difficulty: "hard", q: "The value of 2 + (−5) is:", options: ["7", "−7", "−3", "3"], answer: 2, explanation: "Start at 2, move 5 left → −3." },
    { id: "oz8", difficulty: "easy", q: "Which number is the smallest?", options: ["−4", "0", "2", "−1"], answer: 0, explanation: "−4 is farthest left, so smallest." },
    { id: "oz9", difficulty: "medium", q: "A temperature of 5° below zero is written as:", options: ["5°", "+5°", "−5°", "50°"], answer: 2, explanation: "Below zero is negative: −5°." },
    { id: "oz10", difficulty: "hard", q: "Moving 3 steps left from −1 on a number line reaches:", options: ["2", "−2", "4", "−4"], answer: 3, explanation: "−1 − 3 = −4." },
  ],
  shortQuestions: [
    { q: "What are integers?", a: "The positive whole numbers, zero, and the negative whole numbers together." },
    { q: "Which is greater, −3 or −8?", a: "−3, because it is closer to zero (to the right) on the number line." },
    { q: "Give a real-life use of negative numbers.", a: "Temperatures below zero, depths below sea level, or money owed." },
  ],
  longQuestions: [
    { q: "Explain how integers are arranged on a number line and how to compare them.", a: "On a number line, zero is placed in the middle, the positive integers go to the right and the negative integers to the left, with each integer one equal step from the next. To compare two integers, the one lying further to the right is greater. This means every positive number is greater than zero, zero is greater than every negative number, and among two negatives the one nearer to zero is greater — for instance −2 is greater than −5, even though 5 is a bigger digit than 2." },
    { q: "Using the number line, explain how to work out 4 + (−6) and −2 − 3.", a: "Adding moves right and subtracting moves left, and this works with negatives too. For 4 + (−6), start at 4 and move 6 steps to the left, landing on −2, so 4 + (−6) = −2. For −2 − 3, start at −2 and move 3 steps further left, landing on −5, so −2 − 3 = −5. Picturing the moves on the number line keeps the direction clear and prevents losing the minus sign." },
  ],
  hots: [
    { q: "The temperature was −3°C and then fell by 4°C. What is the new temperature?", a: "Falling means moving left: −3 − 4 = −7°C." },
    { q: "Name all the integers that lie between −3 and 2.", a: "−2, −1, 0 and 1." },
  ],
  revisionNotes: [
    "Negative numbers are less than zero (e.g., −3); integers are …−2, −1, 0, 1, 2…",
    "Number line: negatives left, positives right, zero in the middle.",
    "Right of another number = greater; closer to zero among negatives = greater.",
    "Add → move right; subtract → move left.",
  ],
  keyTakeaways: [
    "Integers extend numbers to 'the other side of zero'.",
    "Among negatives, closer to zero means greater.",
    "Negative numbers describe temperature, depth and debt.",
  ],
  faq: [
    { q: "What is an integer?", a: "A positive whole number, zero, or a negative whole number." },
    { q: "Is −2 greater or less than −5?", a: "Greater, because it is closer to zero on the number line." },
    { q: "How do I add a negative number on the number line?", a: "Move that many steps to the left from your starting number." },
  ],
  related: [
    { classId: "6", subject: "maths", slug: "number-play" },
    { classId: "6", subject: "maths", slug: "patterns-in-mathematics" },
  ],
};

export default chapter;
