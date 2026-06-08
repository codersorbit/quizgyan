import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "7",
  subject: "maths",
  slug: "a-peek-beyond-the-point",
  title: "A Peek Beyond the Point",
  order: 3,
  seoTitle: "A Peek Beyond the Point Class 7 Maths (Ganita Prakash) — Decimals Notes & MCQs",
  metaDescription:
    "Class 7 Maths A Peek Beyond the Point (Ganita Prakash): decimal place value (tenths, hundredths, thousandths), reading and writing decimals, the fraction–decimal link, comparing decimals and the number line, with examples and an MCQ quiz.",
  overview:
    "Numbers do not stop at the decimal point — there is a whole world beyond it. This Class 7 Ganita Prakash chapter explores decimals: the place values of tenths, hundredths and thousandths, how decimals relate to fractions, and how to read, write, compare and place them on a number line.",
  objectives: [
    "Understand decimal place value.",
    "Convert between fractions and decimals.",
    "Compare and order decimals.",
    "Place decimals on a number line.",
  ],
  concepts: [
    {
      heading: "Place value beyond the point",
      body: "To the right of the decimal point, places become smaller: the first is tenths (1/10), the next hundredths (1/100), then thousandths (1/1000). So in 3.46, the 4 means 4 tenths and the 6 means 6 hundredths, making 3 and 46 hundredths.",
    },
    {
      heading: "Decimals and fractions",
      body: "A decimal is just another way of writing a fraction with denominator 10, 100 or 1000. For example 0.7 = 7/10 and 0.25 = 25/100 = 1/4. We move between the two forms by reading the last decimal place as the denominator.",
    },
    {
      heading: "Comparing decimals",
      body: "To compare decimals, first compare the whole-number parts; if equal, compare tenths, then hundredths, and so on. Writing extra zeros helps line them up, so 0.5 = 0.50, which makes 0.50 and 0.47 easy to compare — 0.50 is greater.",
    },
    {
      heading: "Decimals on the number line",
      body: "Decimals fit between whole numbers on the number line. The space between 0 and 1 can be divided into ten equal parts for tenths, and each of those into ten again for hundredths, so 0.3 sits three tenths of the way from 0 to 1.",
    },
  ],
  formulas: [
    { name: "Tenths and hundredths", formula: "0.1 = 1/10, 0.01 = 1/100, 0.001 = 1/1000" },
    { name: "Decimal to fraction", formula: "read the last place as the denominator" },
  ],
  definitions: [
    { term: "Decimal point", meaning: "The dot separating the whole-number part from the fractional part." },
    { term: "Tenths", meaning: "The first place after the decimal point, worth 1/10." },
    { term: "Hundredths", meaning: "The second place after the decimal point, worth 1/100." },
    { term: "Like decimals", meaning: "Decimals having the same number of decimal places." },
  ],
  examples: [
    {
      problem: "Write 0.6 as a fraction.",
      solution: "0.6 = 6/10 = 3/5.",
    },
    {
      problem: "Which is greater, 0.50 or 0.47?",
      solution: "0.50, since 5 tenths is more than 4 tenths.",
    },
    {
      problem: "What does the 8 mean in 2.08?",
      solution: "8 hundredths (8/100).",
    },
  ],
  commonMistakes: [
    "Thinking 0.5 is smaller than 0.45 because 45 looks bigger than 5.",
    "Confusing tenths with hundredths.",
    "Forgetting that adding zeros at the end of a decimal does not change its value.",
    "Reading 0.25 as 'twenty-five' rather than 'twenty-five hundredths'.",
  ],
  mcqs: [
    { id: "pp1", difficulty: "easy", q: "The first place after the decimal point is:", options: ["tenths", "hundredths", "ones", "thousandths"], answer: 0, explanation: "It is the tenths place (1/10)." },
    { id: "pp2", difficulty: "easy", q: "0.7 written as a fraction is:", options: ["7/100", "7/10", "1/7", "70"], answer: 1, explanation: "0.7 = 7 tenths = 7/10." },
    { id: "pp3", difficulty: "medium", q: "Which is greater?", options: ["0.45", "0.405", "0.5", "0.09"], answer: 2, explanation: "0.5 = 0.50, more than 0.45." },
    { id: "pp4", difficulty: "medium", q: "The 6 in 3.46 stands for:", options: ["6 tenths", "6 ones", "6 thousandths", "6 hundredths"], answer: 3, explanation: "Second place after the point is hundredths." },
    { id: "pp5", difficulty: "easy", q: "0.25 equals which fraction?", options: ["1/4", "1/2", "2/5", "1/25"], answer: 0, explanation: "0.25 = 25/100 = 1/4." },
    { id: "pp6", difficulty: "medium", q: "0.5 is the same as:", options: ["0.05", "0.50", "0.005", "5.0"], answer: 1, explanation: "Adding a zero at the end keeps the value: 0.50." },
    { id: "pp7", difficulty: "hard", q: "Arrange in ascending order: 0.3, 0.03, 0.33.", options: ["0.33, 0.3, 0.03", "0.3, 0.03, 0.33", "0.03, 0.3, 0.33", "0.03, 0.33, 0.3"], answer: 2, explanation: "0.03 < 0.3 < 0.33." },
    { id: "pp8", difficulty: "easy", q: "The dot in a decimal number is called the:", options: ["comma", "place", "tenth", "decimal point"], answer: 3, explanation: "It is the decimal point." },
    { id: "pp9", difficulty: "medium", q: "9/100 as a decimal is:", options: ["0.09", "0.9", "9.0", "0.009"], answer: 0, explanation: "9 hundredths = 0.09." },
    { id: "pp10", difficulty: "hard", q: "On the number line, 0.3 lies:", options: ["between 1 and 2", "between 0 and 1", "beyond 3", "at exactly 3"], answer: 1, explanation: "0.3 is three tenths of the way from 0 to 1." },
  ],
  shortQuestions: [
    { q: "What is the value of the first place after the decimal point?", a: "One tenth (1/10)." },
    { q: "Write 0.25 as a fraction in simplest form.", a: "0.25 = 25/100 = 1/4." },
    { q: "Is 0.6 greater or less than 0.06?", a: "Greater, because 6 tenths is more than 6 hundredths." },
  ],
  longQuestions: [
    { q: "Explain decimal place value and how decimals relate to fractions, with examples.", a: "To the right of the decimal point, each place is ten times smaller than the one before: tenths (1/10), hundredths (1/100), then thousandths (1/1000). So in the number 3.46, the 4 means four tenths and the 6 means six hundredths. Because of this, every decimal is just a fraction with denominator 10, 100 or 1000 — for example 0.7 = 7/10 and 0.25 = 25/100, which simplifies to 1/4. Reading the last decimal place tells us the denominator to use when converting a decimal to a fraction." },
    { q: "How do you compare decimals? Use 0.5, 0.45 and 0.405 as an example.", a: "To compare decimals, first compare the whole-number parts; if they are equal, compare the tenths, then the hundredths, and so on. Writing the decimals with the same number of places makes this easier. For 0.5, 0.45 and 0.405, rewrite as 0.500, 0.450 and 0.405. Now compare place by place: all have 0 ones; the tenths are 5, 4 and 4, so 0.500 is the largest; between 0.450 and 0.405 the hundredths are 5 and 0, so 0.450 is larger. The order from greatest to least is 0.5, 0.45, 0.405." },
  ],
  hots: [
    { q: "Why does 0.50 equal 0.5 but 0.05 does not?", a: "A zero added at the end of a decimal does not change its value, so 0.50 = 0.5; but 0.05 has the 5 in the hundredths place, a different (smaller) value." },
    { q: "Which decimal lies exactly halfway between 0.2 and 0.3?", a: "0.25, since it is halfway between two tenths and three tenths." },
  ],
  revisionNotes: [
    "Places after the point: tenths, hundredths, thousandths.",
    "Decimal = fraction with denominator 10/100/1000.",
    "Compare whole part first, then tenths, then hundredths.",
    "Trailing zeros don't change a decimal's value (0.5 = 0.50).",
  ],
  keyTakeaways: [
    "Decimals extend place value beyond the point.",
    "Every decimal is a fraction in disguise.",
    "Compare decimals place by place.",
  ],
  faq: [
    { q: "What is the tenths place?", a: "The first place after the decimal point, worth one tenth." },
    { q: "Is 0.5 the same as 1/2?", a: "Yes, 0.5 = 5/10 = 1/2." },
    { q: "Does 0.5 equal 0.50?", a: "Yes; a trailing zero does not change the value." },
  ],
  related: [
    { classId: "7", subject: "maths", slug: "another-peek-beyond-the-point" },
    { classId: "6", subject: "maths", slug: "fractions" },
  ],
};

export default chapter;
