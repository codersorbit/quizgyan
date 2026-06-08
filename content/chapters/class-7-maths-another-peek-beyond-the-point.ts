import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "7",
  subject: "maths",
  slug: "another-peek-beyond-the-point",
  title: "Another Peek Beyond the Point",
  order: 12,
  seoTitle: "Another Peek Beyond the Point Class 7 Maths — Decimal Operations MCQs",
  metaDescription:
    "Class 7 Maths Another Peek Beyond the Point (Ganita Prakash): adding, subtracting, multiplying and dividing decimals, multiplying and dividing by 10, 100 and 1000, and decimal word problems, with examples and an MCQ quiz.",
  overview:
    "Having met decimals, we now calculate with them. This Class 7 Ganita Prakash chapter takes another look beyond the decimal point — adding and subtracting decimals, multiplying and dividing them (including by 10, 100 and 1000), and applying these skills to everyday problems with money and measures.",
  objectives: [
    "Add and subtract decimals.",
    "Multiply decimals, including by 10, 100, 1000.",
    "Divide decimals.",
    "Solve decimal word problems.",
  ],
  concepts: [
    {
      heading: "Adding and subtracting decimals",
      body: "To add or subtract decimals, line up the decimal points so that tenths sit under tenths and hundredths under hundredths, then add or subtract as with whole numbers. Writing extra zeros keeps the columns even, so 2.5 + 1.25 becomes 2.50 + 1.25 = 3.75.",
    },
    {
      heading: "Multiplying decimals",
      body: "To multiply decimals, multiply as if there were no points, then place the point so the answer has as many decimal places as the two factors together. So 0.2 × 0.3: multiply 2 × 3 = 6, and with two decimal places the answer is 0.06.",
    },
    {
      heading: "Multiplying and dividing by 10, 100, 1000",
      body: "Multiplying a decimal by 10, 100 or 1000 shifts the point right by 1, 2 or 3 places (3.4 × 100 = 340). Dividing by them shifts the point left by the same number of places (3.4 ÷ 100 = 0.034). The number of zeros tells how many places to move.",
    },
    {
      heading: "Dividing decimals",
      body: "To divide by a decimal, make the divisor a whole number by shifting both points the same number of places, then divide normally. So 4.5 ÷ 0.5 becomes 45 ÷ 5 = 9. Dividing by a number less than 1 gives a larger result.",
    },
  ],
  formulas: [
    { name: "Decimal places in a product", formula: "= total decimal places of the factors" },
    { name: "× by 10/100/1000", formula: "shift point right 1/2/3 places" },
    { name: "÷ by 10/100/1000", formula: "shift point left 1/2/3 places" },
  ],
  definitions: [
    { term: "Decimal places", meaning: "The number of digits after the decimal point." },
    { term: "Product", meaning: "The result of multiplying numbers." },
    { term: "Quotient", meaning: "The result of dividing one number by another." },
    { term: "Divisor", meaning: "The number you divide by." },
  ],
  examples: [
    {
      problem: "Add 2.5 + 1.25.",
      solution: "Line up points: 2.50 + 1.25 = 3.75.",
    },
    {
      problem: "Multiply 0.2 × 0.3.",
      solution: "2 × 3 = 6, two decimal places: 0.06.",
    },
    {
      problem: "Divide 3.4 ÷ 100.",
      solution: "Shift point left two places: 0.034.",
    },
  ],
  commonMistakes: [
    "Not lining up the decimal points when adding or subtracting.",
    "Misplacing the point in a product (wrong number of decimal places).",
    "Shifting the point the wrong way when multiplying or dividing by 10, 100.",
    "Forgetting to shift both points equally when dividing by a decimal.",
  ],
  mcqs: [
    { id: "ap1", difficulty: "easy", q: "3.4 × 10 equals:", options: ["34", "0.34", "340", "3.40"], answer: 0, explanation: "Shift the point right one place: 34." },
    { id: "ap2", difficulty: "easy", q: "When adding decimals, you should line up the:", options: ["last digits", "decimal points", "first digits", "denominators"], answer: 1, explanation: "Line up the decimal points." },
    { id: "ap3", difficulty: "medium", q: "0.2 × 0.4 equals:", options: ["0.8", "8", "0.08", "0.008"], answer: 2, explanation: "2 × 4 = 8, two places: 0.08." },
    { id: "ap4", difficulty: "medium", q: "3.4 ÷ 100 equals:", options: ["340", "34", "0.34", "0.034"], answer: 3, explanation: "Shift point left two places: 0.034." },
    { id: "ap5", difficulty: "easy", q: "2.5 + 1.25 equals:", options: ["3.75", "3.30", "37.5", "1.50"], answer: 0, explanation: "2.50 + 1.25 = 3.75." },
    { id: "ap6", difficulty: "medium", q: "Multiplying a decimal by 1000 shifts the point:", options: ["left 3 places", "right 3 places", "left 2 places", "right 2 places"], answer: 1, explanation: "× 1000 moves the point right 3 places." },
    { id: "ap7", difficulty: "hard", q: "4.5 ÷ 0.5 equals:", options: ["0.9", "90", "9", "0.09"], answer: 2, explanation: "45 ÷ 5 = 9 after shifting both points." },
    { id: "ap8", difficulty: "easy", q: "The product 0.5 × 0.5 has how many decimal places?", options: ["one", "three", "zero", "two"], answer: 3, explanation: "1 + 1 = 2 decimal places (0.25)." },
    { id: "ap9", difficulty: "medium", q: "5.6 − 2.35 equals:", options: ["3.25", "3.35", "2.25", "3.21"], answer: 0, explanation: "5.60 − 2.35 = 3.25." },
    { id: "ap10", difficulty: "hard", q: "Dividing a number by 0.1 gives a result that is:", options: ["smaller", "10 times larger", "the same", "negative"], answer: 1, explanation: "Dividing by 0.1 is the same as multiplying by 10." },
  ],
  shortQuestions: [
    { q: "How do you add two decimals?", a: "Line up the decimal points and add column by column." },
    { q: "What is 2.3 × 100?", a: "230 (shift the point right two places)." },
    { q: "How many decimal places are in the product 0.3 × 0.2?", a: "Two (the answer is 0.06)." },
  ],
  longQuestions: [
    { q: "Explain how to multiply decimals and place the decimal point correctly.", a: "To multiply two decimals, first ignore the decimal points and multiply the numbers as whole numbers. Then count the total number of decimal places in the two factors, and place the decimal point in the answer so that it has that many decimal places. For example, to find 0.2 × 0.3, multiply 2 × 3 = 6; since each factor has one decimal place, the product has two, giving 0.06. A useful check is that multiplying two numbers each less than 1 gives an answer smaller than either, which is why 0.2 × 0.3 is much less than 0.2." },
    { q: "How does multiplying or dividing by 10, 100 and 1000 affect a decimal?", a: "Multiplying a decimal by 10, 100 or 1000 shifts the decimal point to the right by 1, 2 or 3 places respectively, because each zero makes the number ten times larger — so 3.4 × 100 = 340. Dividing by 10, 100 or 1000 shifts the point to the left by 1, 2 or 3 places, making the number smaller — so 3.4 ÷ 100 = 0.034. The number of zeros in 10, 100 or 1000 tells you exactly how many places to move the point, and the direction depends on whether you are multiplying (right) or dividing (left)." },
  ],
  hots: [
    { q: "A 1.5 m ribbon is cut into 0.3 m pieces. How many pieces are made?", a: "1.5 ÷ 0.3 = 15 ÷ 3 = 5 pieces." },
    { q: "Why is 0.4 × 0.5 less than both 0.4 and 0.5?", a: "Because multiplying by a number less than 1 takes only a part of it, giving 0.20, smaller than either factor." },
  ],
  revisionNotes: [
    "Add/subtract: line up decimal points.",
    "Multiply: ignore points, then give the product the combined decimal places.",
    "× 10/100/1000: point right 1/2/3; ÷ 10/100/1000: point left 1/2/3.",
    "Divide by a decimal: shift both points to make the divisor whole.",
  ],
  keyTakeaways: [
    "Line up points for addition and subtraction.",
    "A product's decimal places equal the factors' total.",
    "Powers of ten just shift the decimal point.",
  ],
  faq: [
    { q: "How do I multiply by 100?", a: "Move the decimal point two places to the right." },
    { q: "Where does the point go in a decimal product?", a: "The product has as many decimal places as the two factors combined." },
    { q: "How do I divide by a decimal?", a: "Shift both decimal points to make the divisor a whole number, then divide." },
  ],
  related: [
    { classId: "7", subject: "maths", slug: "a-peek-beyond-the-point" },
    { classId: "8", subject: "maths", slug: "fractions-in-disguise" },
  ],
};

export default chapter;
