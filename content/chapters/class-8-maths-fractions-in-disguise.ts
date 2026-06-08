import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "8",
  subject: "maths",
  slug: "fractions-in-disguise",
  title: "Fractions in Disguise",
  order: 8,
  seoTitle: "Fractions in Disguise Class 8 Maths (Ganita Prakash) — Percentages & Interest, MCQs",
  metaDescription:
    "Class 8 Maths Fractions in Disguise (Ganita Prakash Part 2): the fraction–decimal–percentage relationship, comparing with percentages, profit and loss, discount, and simple and compound interest, with solved examples and an MCQ quiz.",
  overview:
    "A fraction can hide in many forms — as a decimal, a percentage, or a ratio. This Class 8 Ganita Prakash chapter reveals these disguises: how to move between fractions, decimals and percentages, how percentages let us compare quantities fairly, and how the same idea powers everyday money maths — profit and loss, discount, and simple and compound interest.",
  objectives: [
    "Convert between fractions, decimals and percentages.",
    "Use percentages to compare quantities.",
    "Solve profit, loss and discount problems.",
    "Calculate simple and compound interest.",
  ],
  concepts: [
    {
      heading: "The fraction–decimal–percentage trio",
      body: "A fraction, a decimal and a percentage can describe the same value. Divide to turn a fraction into a decimal, multiply a decimal by 100 to get a percentage, and write a percentage over 100 to get a fraction. For example ½ = 0.5 = 50%, and ¾ = 0.75 = 75%. A percentage is simply a fraction whose denominator is 100.",
    },
    {
      heading: "Comparing with percentages",
      body: "Percentages put different quantities on the same scale of 100, which makes comparison easy. To find a percentage of a quantity, multiply: 20% of 150 = (20/100) × 150 = 30. Scoring 18 out of 20 (90%) can then be compared directly with 27 out of 30 (90%), even though the totals differ.",
    },
    {
      heading: "Profit, loss and discount",
      body: "In buying and selling, profit or loss is calculated on the cost price: profit% = (profit ÷ CP) × 100, and loss% likewise. A discount is a reduction on the marked price: discount = marked price − selling price, and discount% = (discount ÷ marked price) × 100. Taxes such as GST are percentages added to the price.",
    },
    {
      heading: "Simple and compound interest",
      body: "Interest is the extra money paid for using a sum (the principal). Simple interest is the same each year: SI = (P × R × T) ÷ 100. Compound interest is charged on the growing amount, so it earns 'interest on interest'; the amount after n years is A = P(1 + R/100)ⁿ. A value that falls by a fixed percent each year is said to depreciate.",
    },
  ],
  formulas: [
    { name: "Fraction to percentage", formula: "fraction × 100 = percentage" },
    { name: "Percentage of a quantity", formula: "p% of N = (p ÷ 100) × N" },
    { name: "Profit / loss percent", formula: "= (profit or loss ÷ cost price) × 100" },
    { name: "Simple interest", formula: "SI = (P × R × T) ÷ 100" },
    { name: "Compound amount", formula: "A = P(1 + R/100)ⁿ" },
  ],
  definitions: [
    { term: "Percentage", meaning: "A fraction with denominator 100, written with the % sign." },
    { term: "Discount", meaning: "A reduction given on the marked price of an article." },
    { term: "Simple interest", meaning: "Interest calculated only on the original principal, SI = PRT/100." },
    { term: "Compound interest", meaning: "Interest calculated on the principal plus the interest already added." },
  ],
  examples: [
    {
      problem: "Express 3/5 as a decimal and a percentage.",
      solution: "3 ÷ 5 = 0.6, and 0.6 × 100 = 60%. So 3/5 = 0.6 = 60%.",
    },
    {
      problem: "A pen costing ₹40 is sold for ₹50. Find the profit percent.",
      solution: "Profit = ₹10; profit% = (10 ÷ 40) × 100 = 25%.",
    },
    {
      problem: "Find the compound amount on ₹1000 at 10% per year for 2 years.",
      solution: "A = 1000(1 + 10/100)² = 1000 × 1.1 × 1.1 = ₹1210.",
    },
    {
      problem: "A marked price of ₹800 has a 10% discount. Find the selling price.",
      solution: "Discount = 10% of 800 = ₹80, so selling price = 800 − 80 = ₹720.",
    },
  ],
  commonMistakes: [
    "Forgetting that a percentage is 'out of 100' when converting to a fraction.",
    "Finding profit% on the selling price instead of the cost price.",
    "Using simple interest steps where compound interest is required.",
    "Confusing the marked price with the selling price in discount problems.",
  ],
  mcqs: [
    { id: "fd1", difficulty: "easy", q: "A percentage is a fraction with denominator:", options: ["10", "1", "1000", "100"], answer: 3, explanation: "Per cent means 'per hundred', so the denominator is 100." },
    { id: "fd2", difficulty: "easy", q: "½ written as a percentage is:", options: ["50%", "5%", "25%", "20%"], answer: 0, explanation: "½ = 0.5 = 50%." },
    { id: "fd3", difficulty: "medium", q: "20% of 150 is:", options: ["15", "45", "30", "20"], answer: 2, explanation: "(20/100) × 150 = 30." },
    { id: "fd4", difficulty: "medium", q: "Profit percent is calculated on the:", options: ["selling price", "cost price", "marked price", "discount"], answer: 1, explanation: "Profit% is based on the cost price." },
    { id: "fd5", difficulty: "hard", q: "0.75 as a fraction in lowest terms is:", options: ["7/5", "3/4", "75/10", "4/3"], answer: 1, explanation: "0.75 = 75/100 = 3/4." },
    { id: "fd6", difficulty: "medium", q: "Simple interest on ₹2000 at 5% for 3 years is:", options: ["₹300", "₹100", "₹500", "₹30"], answer: 0, explanation: "(2000 × 5 × 3)/100 = ₹300." },
    { id: "fd7", difficulty: "hard", q: "The compound amount on ₹1000 at 10% for 2 years is:", options: ["₹1200", "₹1100", "₹1210", "₹1020"], answer: 2, explanation: "1000(1.1)² = ₹1210." },
    { id: "fd8", difficulty: "easy", q: "A discount is given on the:", options: ["cost price", "interest", "principal", "marked price"], answer: 3, explanation: "Discount is a reduction on the marked price." },
    { id: "fd9", difficulty: "medium", q: "An item costing ₹250 sold for ₹200 gives a loss percent of:", options: ["25%", "10%", "20%", "50%"], answer: 2, explanation: "Loss = ₹50; (50/250) × 100 = 20%." },
    { id: "fd10", difficulty: "hard", q: "A value falling by a fixed percent each year is said to:", options: ["appreciate", "depreciate", "stay equal", "double"], answer: 1, explanation: "A yearly percentage fall is depreciation." },
  ],
  shortQuestions: [
    { q: "Convert 0.4 into a percentage and a fraction.", a: "0.4 × 100 = 40%, and 0.4 = 40/100 = 2/5." },
    { q: "On which price is discount calculated?", a: "On the marked price; discount% = (discount ÷ marked price) × 100." },
    { q: "How does compound interest differ from simple interest?", a: "Compound interest is charged on the principal plus interest already added, while simple interest is only on the original principal." },
  ],
  longQuestions: [
    { q: "Explain how fractions, decimals and percentages are connected, with an example.", a: "They are three forms of the same value. To convert a fraction to a decimal, divide the numerator by the denominator; to turn a decimal into a percentage, multiply by 100; and to write a percentage as a fraction, place it over 100 and simplify. For example, 3/4 = 3 ÷ 4 = 0.75, and 0.75 × 100 = 75%, while 75% = 75/100 = 3/4. Recognising these 'disguises' lets us pick whichever form is easiest for a problem." },
    { q: "Find the compound interest on ₹5000 at 10% per annum for 2 years, and compare it with the simple interest.", a: "For compound interest, the amount A = P(1 + R/100)ⁿ = 5000(1 + 10/100)² = 5000 × 1.1 × 1.1 = ₹6050, so the compound interest is 6050 − 5000 = ₹1050. The simple interest would be SI = (5000 × 10 × 2)/100 = ₹1000. Compound interest (₹1050) is ₹50 more than simple interest, because in the second year interest is also earned on the first year's interest." },
  ],
  hots: [
    { q: "Which is a better score: 18 out of 25 or 70%? Show your reasoning using percentages.", a: "18 out of 25 = (18/25) × 100 = 72%. Since 72% is greater than 70%, the score of 18 out of 25 is better — percentages let us compare across different totals." },
    { q: "Why does compound interest exceed simple interest after the first year?", a: "After the first year, compound interest is charged on the principal plus the interest already added, so it earns 'interest on interest', while simple interest is always on the original principal alone." },
  ],
  revisionNotes: [
    "Fraction ÷ → decimal; decimal × 100 → percentage; percentage over 100 → fraction.",
    "p% of N = (p/100) × N; percentages compare across different totals.",
    "Profit/loss% on cost price; discount% on marked price.",
    "SI = PRT/100; compound amount A = P(1 + R/100)ⁿ; depreciation is a yearly percentage fall.",
  ],
  keyTakeaways: [
    "Fractions, decimals and percentages are the same value in different disguises.",
    "Profit and loss go on the cost price; discount on the marked price.",
    "Compound interest grows faster than simple interest.",
  ],
  faq: [
    { q: "How do I change a fraction into a percentage?", a: "Convert it to a decimal by dividing, then multiply by 100; or multiply the fraction by 100 directly." },
    { q: "What is the difference between simple and compound interest?", a: "Simple interest is computed only on the original principal; compound interest is computed on the principal plus accumulated interest." },
    { q: "On which price is profit percent based?", a: "On the cost price, using profit% = (profit ÷ cost price) × 100." },
  ],
  related: [
    { classId: "8", subject: "maths", slug: "proportional-reasoning-1" },
    { classId: "8", subject: "maths", slug: "proportional-reasoning-2" },
  ],
};

export default chapter;
