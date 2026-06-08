import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "8",
  subject: "maths",
  slug: "proportional-reasoning-1",
  title: "Proportional Reasoning 1",
  order: 7,
  seoTitle: "Proportional Reasoning 1 Class 8 Maths — Ratio, Proportion & Unitary Method, MCQs",
  metaDescription:
    "Class 8 Maths Proportional Reasoning 1 (Ganita Prakash): ratios and equivalent ratios, proportion and the cross-product rule, the unitary method and direct proportion, with solved examples and an MCQ quiz.",
  overview:
    "Proportional reasoning is about comparing quantities and scaling them up or down fairly. This first Class 8 chapter on the topic covers ratios and equivalent ratios, what it means for quantities to be in proportion, the unitary method, and direct proportion — the basis of recipes, maps, speeds and prices.",
  objectives: [
    "Write and simplify ratios.",
    "Test whether quantities are in proportion using cross products.",
    "Solve problems by the unitary method.",
    "Recognise and use direct proportion.",
  ],
  concepts: [
    {
      heading: "Ratio",
      body: "A ratio compares two quantities of the same kind by division, written a : b. Ratios can be simplified like fractions, so 8 : 12 = 2 : 3, and equivalent ratios are found by multiplying or dividing both terms by the same number. Order matters: 2 : 3 is not the same as 3 : 2.",
    },
    {
      heading: "Proportion",
      body: "Two equal ratios form a proportion, written a : b :: c : d, meaning a/b = c/d. Four numbers are in proportion when the cross products are equal: a × d = b × c. For example 2 : 3 = 8 : 12 because 2 × 12 = 3 × 8.",
    },
    {
      heading: "Unitary method",
      body: "In the unitary method we first find the value of one unit, then multiply for the required number. If 5 pens cost ₹60, one pen costs ₹60 ÷ 5 = ₹12, so 8 pens cost ₹12 × 8 = ₹96. It is a reliable way to scale quantities.",
    },
    {
      heading: "Direct proportion",
      body: "Two quantities are in direct proportion if they increase or decrease together so that their ratio stays constant: x/y = k. More petrol means more distance, and doubling one doubles the other. Many everyday relationships — cost and quantity, distance and time at fixed speed — are directly proportional.",
    },
  ],
  formulas: [
    { name: "Proportion (cross product)", formula: "a : b :: c : d ⇒ a × d = b × c" },
    { name: "Direct proportion", formula: "x₁ ÷ y₁ = x₂ ÷ y₂ (ratio stays constant)" },
    { name: "Unitary method", formula: "value of many = (value of one) × number" },
  ],
  definitions: [
    { term: "Ratio", meaning: "A comparison of two like quantities by division, written a : b." },
    { term: "Proportion", meaning: "A statement that two ratios are equal, a : b :: c : d." },
    { term: "Unitary method", meaning: "Finding the value of one unit first, then scaling to the required number." },
    { term: "Direct proportion", meaning: "A relation where two quantities change together keeping a constant ratio." },
  ],
  examples: [
    {
      problem: "Simplify the ratio 18 : 24.",
      solution: "Divide both by 6: 18 : 24 = 3 : 4.",
    },
    {
      problem: "Are 4, 6, 10, 15 in proportion?",
      solution: "Check cross products: 4 × 15 = 60 and 6 × 10 = 60. Equal, so yes, 4 : 6 :: 10 : 15.",
    },
    {
      problem: "If 3 kg of rice costs ₹150, find the cost of 7 kg.",
      solution: "One kg costs ₹150 ÷ 3 = ₹50, so 7 kg costs ₹50 × 7 = ₹350.",
    },
  ],
  commonMistakes: [
    "Reversing a ratio — writing b : a when a : b is meant.",
    "Comparing quantities in different units without converting first.",
    "Forgetting to simplify a ratio to lowest terms.",
    "Multiplying the wrong pairs when checking a proportion (use a×d and b×c).",
  ],
  mcqs: [
    { id: "p1a", difficulty: "easy", q: "The ratio 10 : 15 in simplest form is:", options: ["5 : 3", "10 : 15", "3 : 2", "2 : 3"], answer: 3, explanation: "Divide both by 5 to get 2 : 3." },
    { id: "p1b", difficulty: "medium", q: "Four numbers are in proportion when:", options: ["a + d = b + c", "a ÷ d = b ÷ c", "a − d = b − c", "a × d = b × c"], answer: 3, explanation: "Cross products are equal: a×d = b×c." },
    { id: "p1c", difficulty: "easy", q: "If 4 pens cost ₹48, one pen costs:", options: ["₹8", "₹16", "₹12", "₹6"], answer: 2, explanation: "48 ÷ 4 = ₹12." },
    { id: "p1d", difficulty: "medium", q: "In direct proportion, as one quantity increases the other:", options: ["decreases", "becomes zero", "stays fixed", "increases"], answer: 3, explanation: "Directly proportional quantities increase together." },
    { id: "p1e", difficulty: "medium", q: "Are 2 : 5 and 6 : 15 equal ratios?", options: ["yes", "no", "only if doubled", "cannot say"], answer: 0, explanation: "6 : 15 simplifies to 2 : 5, so they are equal." },
    { id: "p1f", difficulty: "easy", q: "A ratio compares quantities of:", options: ["different kinds", "any kind in any unit", "the same kind", "only money"], answer: 2, explanation: "A ratio compares like quantities." },
    { id: "p1g", difficulty: "hard", q: "If 5 m cloth costs ₹200, then 8 m costs:", options: ["₹320", "₹280", "₹250", "₹400"], answer: 0, explanation: "One m = ₹40, so 8 m = ₹320." },
    { id: "p1h", difficulty: "medium", q: "The missing term in 3 : 4 :: 9 : ? is:", options: ["10", "16", "12", "13"], answer: 2, explanation: "3×? = 4×9 → ? = 36/3 = 12." },
    { id: "p1i", difficulty: "easy", q: "Equivalent ratios are obtained by:", options: ["adding the same number", "multiplying both terms by the same number", "swapping terms", "subtracting"], answer: 1, explanation: "Multiply or divide both terms by the same number." },
    { id: "p1j", difficulty: "hard", q: "Which pair is in direct proportion?", options: ["speed and time for fixed distance", "cost and quantity of rice", "number of workers and days for a job", "none"], answer: 1, explanation: "More rice costs proportionally more; the ratio stays constant." },
  ],
  shortQuestions: [
    { q: "Write 25 : 35 in simplest form.", a: "Divide both by 5: 5 : 7." },
    { q: "How do you check if four numbers are in proportion?", a: "See whether the cross products are equal: a×d = b×c." },
    { q: "Define direct proportion.", a: "Two quantities are in direct proportion if they change together so that their ratio stays constant." },
  ],
  longQuestions: [
    { q: "Explain the unitary method using the cost of notebooks, with a worked example.", a: "The unitary method first finds the value of a single unit, then scales up. For example, if 6 notebooks cost ₹90, one notebook costs ₹90 ÷ 6 = ₹15. To find the cost of 10 notebooks, multiply: ₹15 × 10 = ₹150. By going through the value of one unit, we can find the cost of any number of notebooks reliably." },
    { q: "What does it mean for two quantities to be in direct proportion? Give the rule and an example.", a: "Two quantities are in direct proportion when an increase in one causes a proportional increase in the other, keeping their ratio constant: x₁/y₁ = x₂/y₂. For instance, if a car uses 4 litres of petrol for 60 km, then for 90 km the petrol needed satisfies 4/60 = x/90, giving x = 6 litres. Doubling the distance would double the petrol used." },
  ],
  hots: [
    { q: "A map uses 1 cm to represent 5 km. How far apart in reality are two towns 7 cm apart on the map?", a: "Using direct proportion, 1 cm → 5 km, so 7 cm → 7 × 5 = 35 km." },
    { q: "If the ratio of boys to girls in a class is 3 : 2 and there are 18 boys, how many girls are there?", a: "3 parts = 18, so 1 part = 6, and girls = 2 parts = 12." },
  ],
  revisionNotes: [
    "Ratio a : b compares like quantities; simplify like fractions; order matters.",
    "Proportion a : b :: c : d means a×d = b×c.",
    "Unitary method: find one unit, then multiply.",
    "Direct proportion: quantities rise/fall together, ratio constant.",
  ],
  keyTakeaways: [
    "Always compare quantities in the same units.",
    "Cross products test a proportion quickly.",
    "The unitary method scales any quantity reliably.",
  ],
  faq: [
    { q: "What is a ratio?", a: "A comparison of two quantities of the same kind by division, written a : b." },
    { q: "How do I find a missing term in a proportion?", a: "Use the cross-product rule a×d = b×c and solve for the unknown." },
    { q: "What is the unitary method?", a: "A way to solve problems by first finding the value of one unit, then multiplying." },
  ],
  related: [
    { classId: "8", subject: "maths", slug: "proportional-reasoning-2" },
  ],
};

export default chapter;
