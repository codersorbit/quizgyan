import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "7",
  subject: "maths",
  slug: "working-with-fractions",
  title: "Working with Fractions",
  order: 8,
  seoTitle: "Working with Fractions Class 7 Maths (Ganita Prakash) — Multiply & Divide MCQs",
  metaDescription:
    "Class 7 Maths Working with Fractions (Ganita Prakash): multiplying a fraction by a whole number and by a fraction, the meaning of 'of', reciprocals and division of fractions, with worked examples and an MCQ quiz.",
  overview:
    "Class 6 introduced fractions; now we operate with them. This Class 7 Ganita Prakash chapter covers multiplying fractions by whole numbers and by other fractions, what 'of' means, the idea of a reciprocal, and how to divide fractions — turning fractions into a flexible tool.",
  objectives: [
    "Multiply a fraction by a whole number.",
    "Multiply a fraction by a fraction.",
    "Understand 'of' as multiplication.",
    "Divide fractions using reciprocals.",
  ],
  concepts: [
    {
      heading: "Multiplying by a whole number",
      body: "To multiply a fraction by a whole number, multiply the numerator by the whole number and keep the denominator. So 3 × 2/5 = 6/5. This is just repeated addition: 2/5 + 2/5 + 2/5 = 6/5.",
    },
    {
      heading: "Multiplying a fraction by a fraction",
      body: "To multiply two fractions, multiply the numerators together and the denominators together: 2/3 × 4/5 = 8/15. Multiplying by a proper fraction gives a smaller result, since we are taking only a part of a part.",
    },
    {
      heading: "The meaning of 'of'",
      body: "In fractions, 'of' means multiply. So 'half of 8' is 1/2 × 8 = 4, and '3/4 of 20' is 3/4 × 20 = 15. Recognising 'of' as multiplication makes many word problems straightforward.",
    },
    {
      heading: "Reciprocals and dividing fractions",
      body: "The reciprocal of a fraction is found by flipping it: the reciprocal of 2/3 is 3/2. To divide by a fraction, multiply by its reciprocal: 4/5 ÷ 2/3 = 4/5 × 3/2 = 12/10 = 6/5. Dividing by a fraction less than 1 gives a larger result.",
    },
  ],
  formulas: [
    { name: "Fraction × fraction", formula: "a/b × c/d = (a×c)/(b×d)" },
    { name: "'of'", formula: "'of' means ×" },
    { name: "Dividing fractions", formula: "a/b ÷ c/d = a/b × d/c" },
  ],
  definitions: [
    { term: "Reciprocal", meaning: "The fraction obtained by swapping numerator and denominator." },
    { term: "Product", meaning: "The result of multiplying numbers or fractions." },
    { term: "Proper fraction", meaning: "A fraction less than one (numerator below denominator)." },
    { term: "Of", meaning: "In fraction problems, the word 'of' means multiply." },
  ],
  examples: [
    {
      problem: "Find 3 × 2/5.",
      solution: "Multiply the numerator: 6/5.",
    },
    {
      problem: "Find 2/3 × 4/5.",
      solution: "(2 × 4)/(3 × 5) = 8/15.",
    },
    {
      problem: "Find 3/4 of 20.",
      solution: "3/4 × 20 = 60/4 = 15.",
    },
  ],
  commonMistakes: [
    "Adding denominators when multiplying fractions.",
    "Forgetting that 'of' means multiply.",
    "Dividing without flipping (multiplying by the reciprocal).",
    "Expecting multiplication by a proper fraction to give a bigger answer.",
  ],
  mcqs: [
    { id: "wf1", difficulty: "easy", q: "3 × 1/4 equals:", options: ["3/4", "4/3", "1/12", "12"], answer: 0, explanation: "Multiply numerator: 3/4." },
    { id: "wf2", difficulty: "easy", q: "In fractions, the word 'of' means:", options: ["add", "multiply", "subtract", "divide"], answer: 1, explanation: "'of' means multiply." },
    { id: "wf3", difficulty: "medium", q: "2/3 × 3/4 equals:", options: ["6/7", "5/12", "1/2", "6/12"], answer: 2, explanation: "(2×3)/(3×4) = 6/12 = 1/2." },
    { id: "wf4", difficulty: "medium", q: "The reciprocal of 2/5 is:", options: ["2/5", "1/5", "−2/5", "5/2"], answer: 3, explanation: "Flip it: 5/2." },
    { id: "wf5", difficulty: "easy", q: "Half of 10 is:", options: ["5", "20", "2", "15"], answer: 0, explanation: "1/2 × 10 = 5." },
    { id: "wf6", difficulty: "medium", q: "1/2 ÷ 1/4 equals:", options: ["1/8", "2", "1/2", "8"], answer: 1, explanation: "1/2 × 4/1 = 4/2 = 2." },
    { id: "wf7", difficulty: "hard", q: "3/4 of 20 is:", options: ["12", "16", "15", "10"], answer: 2, explanation: "3/4 × 20 = 15." },
    { id: "wf8", difficulty: "easy", q: "To divide by a fraction, multiply by its:", options: ["numerator", "square", "double", "reciprocal"], answer: 3, explanation: "Multiply by the reciprocal." },
    { id: "wf9", difficulty: "medium", q: "2/5 × 5 equals:", options: ["2", "10/5", "7/5", "2/25"], answer: 0, explanation: "10/5 = 2." },
    { id: "wf10", difficulty: "hard", q: "Multiplying a number by a proper fraction (less than 1) gives a result that is:", options: ["larger", "smaller", "the same", "zero"], answer: 1, explanation: "Taking a part of it gives a smaller value." },
  ],
  shortQuestions: [
    { q: "What does 'of' mean in fraction problems?", a: "It means multiply." },
    { q: "What is the reciprocal of 3/7?", a: "7/3." },
    { q: "How do you multiply two fractions?", a: "Multiply numerators together and denominators together." },
  ],
  longQuestions: [
    { q: "Explain how to multiply fractions, including by a whole number, with examples.", a: "To multiply a fraction by a whole number, multiply the numerator by the whole number and keep the denominator the same — for example, 3 × 2/5 = 6/5, which is the same as adding 2/5 three times. To multiply a fraction by another fraction, multiply the numerators together and the denominators together — for example, 2/3 × 4/5 = (2 × 4)/(3 × 5) = 8/15. A useful observation is that multiplying by a proper fraction (one less than 1) gives a smaller result, because we are taking only a part of the original amount." },
    { q: "Explain how to divide fractions using reciprocals, with an example.", a: "Dividing by a fraction is done by multiplying by its reciprocal, which is the fraction turned upside down. So to compute 4/5 ÷ 2/3, we replace dividing by 2/3 with multiplying by its reciprocal 3/2: 4/5 × 3/2 = 12/10 = 6/5. The reason this works is that dividing asks 'how many of the divisor fit into the number', and flipping converts that question into a multiplication. Notice that dividing by a fraction smaller than 1 gives a larger answer, since many small pieces fit into the whole." },
  ],
  hots: [
    { q: "Without calculating exactly, is 8 × 3/4 more or less than 8? Why?", a: "Less, because multiplying by 3/4 (a proper fraction) takes only three-quarters of 8, giving 6." },
    { q: "A recipe needs 2/3 cup of sugar, but you make half the recipe. How much sugar?", a: "Half of 2/3 = 1/2 × 2/3 = 2/6 = 1/3 cup." },
  ],
  revisionNotes: [
    "Fraction × whole: multiply numerator, keep denominator.",
    "Fraction × fraction: multiply tops, multiply bottoms.",
    "'of' means multiply.",
    "Divide by a fraction = multiply by its reciprocal.",
  ],
  keyTakeaways: [
    "Multiplying fractions multiplies tops and bottoms.",
    "'of' is multiplication.",
    "Divide by flipping the divisor.",
  ],
  faq: [
    { q: "How do I multiply two fractions?", a: "Multiply the numerators together and the denominators together." },
    { q: "What is a reciprocal?", a: "A fraction flipped upside down; the reciprocal of 2/3 is 3/2." },
    { q: "Does multiplying by a fraction always make a number bigger?", a: "No — multiplying by a fraction less than 1 makes it smaller." },
  ],
  related: [
    { classId: "6", subject: "maths", slug: "fractions" },
    { classId: "8", subject: "maths", slug: "fractions-in-disguise" },
  ],
};

export default chapter;
