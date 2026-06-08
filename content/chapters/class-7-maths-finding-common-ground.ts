import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "7",
  subject: "maths",
  slug: "finding-common-ground",
  title: "Finding Common Ground",
  order: 11,
  seoTitle: "Finding Common Ground Class 7 Maths (Ganita Prakash) — Ratio & Percentage MCQs",
  metaDescription:
    "Class 7 Maths Finding Common Ground (Ganita Prakash): comparing quantities using ratios, proportion, the unitary method and percentages, with worked examples and an MCQ quiz.",
  overview:
    "To compare quantities fairly we put them on common ground. This Class 7 Ganita Prakash chapter compares quantities using ratios, checks when two ratios form a proportion, uses the unitary method to scale quantities, and expresses comparisons as percentages.",
  objectives: [
    "Compare quantities using ratios.",
    "Identify a proportion.",
    "Use the unitary method.",
    "Express comparisons as percentages.",
  ],
  concepts: [
    {
      heading: "Ratio",
      body: "A ratio compares two quantities of the same kind by division, written a : b and read 'a to b'. The ratio of 6 boys to 4 girls is 6 : 4, which simplifies to 3 : 2 by dividing both parts by their common factor. A ratio has no units and stays the same when both parts are multiplied or divided by the same number.",
    },
    {
      heading: "Proportion",
      body: "When two ratios are equal, the four quantities are in proportion, written a : b :: c : d. For example 2 : 3 :: 4 : 6, because both ratios equal 2/3. A quick check is cross-multiplication: the ratios are equal when a × d = b × c.",
    },
    {
      heading: "Unitary method",
      body: "The unitary method first finds the value of one unit, then scales up. If 5 pens cost ₹40, one pen costs ₹40 ÷ 5 = ₹8, so 3 pens cost ₹8 × 3 = ₹24. Finding 'the value of one' is the common ground that solves many comparison problems.",
    },
    {
      heading: "Percentage",
      body: "A percentage compares a quantity to 100, giving everything a common scale. To write a fraction as a percentage, multiply by 100, so 1/4 = 25%. To find a percentage of a quantity, multiply: 20% of 150 = (20/100) × 150 = 30. Percentages make different quantities easy to compare.",
    },
  ],
  formulas: [
    { name: "Proportion check", formula: "a : b :: c : d when a × d = b × c" },
    { name: "Unitary method", formula: "value of one = total ÷ number; then × required" },
    { name: "Percentage", formula: "p% of N = (p ÷ 100) × N" },
  ],
  definitions: [
    { term: "Ratio", meaning: "A comparison of two like quantities by division, written a : b." },
    { term: "Proportion", meaning: "A statement that two ratios are equal." },
    { term: "Unitary method", meaning: "Finding the value of one unit, then scaling to the required number." },
    { term: "Percentage", meaning: "A comparison to 100, written with the % sign." },
  ],
  examples: [
    {
      problem: "Simplify the ratio 6 : 4.",
      solution: "Divide both by 2: 3 : 2.",
    },
    {
      problem: "Are 2 : 3 and 4 : 6 in proportion?",
      solution: "Yes, since 2 × 6 = 3 × 4 = 12.",
    },
    {
      problem: "If 5 pens cost ₹40, what do 3 cost?",
      solution: "One pen ₹8, so 3 cost ₹24.",
    },
  ],
  commonMistakes: [
    "Comparing quantities with different units as a ratio without converting.",
    "Forgetting to simplify a ratio to lowest terms.",
    "Mixing up the order of terms in a ratio (a : b is not b : a).",
    "Treating a percentage as a fraction without the denominator 100.",
  ],
  mcqs: [
    { id: "cg1", difficulty: "easy", q: "The ratio 8 : 12 in simplest form is:", options: ["4 : 6", "8 : 12", "2 : 3", "3 : 2"], answer: 2, explanation: "Divide both by 4: 2 : 3." },
    { id: "cg2", difficulty: "easy", q: "A comparison to 100 is a:", options: ["ratio", "proportion", "fraction only", "percentage"], answer: 3, explanation: "A comparison to 100 is a percentage." },
    { id: "cg3", difficulty: "medium", q: "Are 3 : 5 and 9 : 15 in proportion?", options: ["yes", "no", "cannot say", "only if simplified"], answer: 0, explanation: "3 × 15 = 5 × 9 = 45, so yes." },
    { id: "cg4", difficulty: "medium", q: "If 4 books cost ₹100, one book costs:", options: ["₹40", "₹25", "₹4", "₹50"], answer: 1, explanation: "100 ÷ 4 = ₹25." },
    { id: "cg5", difficulty: "easy", q: "1/2 as a percentage is:", options: ["25%", "20%", "50%", "12%"], answer: 2, explanation: "1/2 × 100 = 50%." },
    { id: "cg6", difficulty: "medium", q: "25% of 80 is:", options: ["25", "40", "8", "20"], answer: 3, explanation: "(25/100) × 80 = 20." },
    { id: "cg7", difficulty: "hard", q: "Two ratios a : b and c : d are equal when:", options: ["a × d = b × c", "a + d = b + c", "a − b = c − d", "a × b = c × d"], answer: 0, explanation: "Cross-multiplication: a × d = b × c." },
    { id: "cg8", difficulty: "easy", q: "A ratio compares quantities of the:", options: ["different kinds", "same kind", "opposite sign", "same colour"], answer: 1, explanation: "A ratio compares like quantities." },
    { id: "cg9", difficulty: "medium", q: "If 6 m of cloth costs ₹90, then 4 m costs:", options: ["₹45", "₹120", "₹60", "₹360"], answer: 2, explanation: "One metre ₹15, so 4 m = ₹60." },
    { id: "cg10", difficulty: "hard", q: "3/5 written as a percentage is:", options: ["35%", "53%", "30%", "60%"], answer: 3, explanation: "3/5 × 100 = 60%." },
  ],
  shortQuestions: [
    { q: "What is a ratio?", a: "A comparison of two like quantities by division, written a : b." },
    { q: "When are two ratios in proportion?", a: "When they are equal, i.e. a × d = b × c." },
    { q: "Write 1/4 as a percentage.", a: "25%." },
  ],
  longQuestions: [
    { q: "Explain ratio and proportion with examples, including how to check a proportion.", a: "A ratio compares two quantities of the same kind by division and is written a : b, read 'a to b'; for instance, 6 boys to 4 girls is 6 : 4, which simplifies to 3 : 2 by dividing both parts by 2. A proportion is a statement that two ratios are equal, written a : b :: c : d. To check whether two ratios form a proportion, we cross-multiply: the ratios are equal when a × d = b × c. For example, 2 : 3 and 4 : 6 are in proportion because 2 × 6 = 3 × 4 = 12. Ratios and proportions let us compare and scale quantities fairly." },
    { q: "Describe the unitary method and percentages as tools for comparing quantities.", a: "The unitary method solves comparison problems by first finding the value of a single unit and then scaling to the required amount. For example, if 5 pens cost ₹40, one pen costs ₹40 ÷ 5 = ₹8, so 3 pens cost ₹8 × 3 = ₹24. Percentages give another common scale by comparing every quantity to 100: a fraction is turned into a percentage by multiplying by 100 (so 1/4 = 25%), and a percentage of a quantity is found by multiplying, as in 20% of 150 = 30. Both tools provide 'common ground', letting us compare and convert between quantities that start out in different forms." },
  ],
  hots: [
    { q: "In a class, the ratio of girls to boys is 3 : 2 and there are 20 boys. How many girls are there?", a: "Each part is 20 ÷ 2 = 10, so girls = 3 × 10 = 30." },
    { q: "Which is the better deal: 4 pens for ₹100 or 6 pens for ₹138?", a: "First is ₹25/pen, second is ₹23/pen; the 6-pen pack is cheaper per pen." },
  ],
  revisionNotes: [
    "Ratio a : b compares like quantities; simplify to lowest terms.",
    "Proportion: two equal ratios; check by a × d = b × c.",
    "Unitary method: find value of one, then scale.",
    "Percentage = comparison to 100; p% of N = (p/100) × N.",
  ],
  keyTakeaways: [
    "Ratios and percentages put quantities on common ground.",
    "A proportion is two equal ratios (cross-multiply to check).",
    "The unitary method scales via the value of one.",
  ],
  faq: [
    { q: "What is the difference between a ratio and a proportion?", a: "A ratio compares two quantities; a proportion states that two ratios are equal." },
    { q: "How do I write a fraction as a percentage?", a: "Multiply it by 100." },
    { q: "What is the unitary method?", a: "Find the value of one unit, then multiply for the number needed." },
  ],
  related: [
    { classId: "8", subject: "maths", slug: "proportional-reasoning-1" },
    { classId: "8", subject: "maths", slug: "fractions-in-disguise" },
  ],
};

export default chapter;
