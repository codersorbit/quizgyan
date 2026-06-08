import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "10",
  subject: "maths",
  slug: "arithmetic-progressions",
  title: "Arithmetic Progressions",
  order: 5,
  seoTitle: "Arithmetic Progressions Class 10 CBSE Notes, MCQs, Quiz & Formulas",
  metaDescription:
    "Class 10 Maths Arithmetic Progressions (AP): common difference, nth term formula, sum of n terms, solved examples, MCQ quiz with answers and important board questions.",
  overview:
    "An Arithmetic Progression (AP) is a list of numbers in which each term is obtained by adding a fixed number, the common difference, to the previous term. This chapter gives you two powerful formulas — one for the nth term and one for the sum of the first n terms — and is a reliable source of full marks in the CBSE board exam.",
  objectives: [
    "Recognise an AP and find its common difference.",
    "Use aₙ = a + (n − 1)d to find any term.",
    "Use the sum formula to add the first n terms.",
    "Find which term of an AP equals a given value.",
    "Apply AP formulas to real-life situations.",
  ],
  concepts: [
    {
      heading: "What makes a list an AP",
      body: "A sequence is an AP if the difference between any term and the one before it is constant. This constant is the common difference d = aₙ − aₙ₋₁. The first term is denoted a.",
    },
    {
      heading: "The nth term",
      body: "The general (nth) term of an AP with first term a and common difference d is aₙ = a + (n − 1)d. It lets you jump straight to any term without listing all the earlier ones.",
    },
    {
      heading: "Sum of the first n terms",
      body: "The sum of the first n terms is Sₙ = n/2 [2a + (n − 1)d]. If the last term l is known, it can also be written Sₙ = n/2 (a + l).",
    },
  ],
  formulas: [
    { name: "Common difference", formula: "d = aₙ − aₙ₋₁" },
    { name: "nth term", formula: "aₙ = a + (n − 1)d" },
    { name: "Sum of n terms", formula: "Sₙ = n/2 [2a + (n − 1)d]" },
    { name: "Sum with last term", formula: "Sₙ = n/2 (a + l)" },
  ],
  definitions: [
    { term: "Arithmetic Progression", meaning: "A sequence where each term differs from the previous by a fixed common difference." },
    { term: "Common difference (d)", meaning: "The constant added to each term to get the next." },
    { term: "First term (a)", meaning: "The starting term of the progression." },
  ],
  examples: [
    {
      problem: "Find the 10th term of the AP 2, 7, 12, …",
      solution: "Here a = 2 and d = 5. a₁₀ = a + 9d = 2 + 9(5) = 47.",
    },
    {
      problem: "Find the sum of the first 20 terms of the AP 1, 3, 5, …",
      solution:
        "a = 1, d = 2, n = 20. S₂₀ = 20/2 [2(1) + 19(2)] = 10[2 + 38] = 10 × 40 = 400.",
    },
    {
      problem: "Which term of the AP 5, 11, 17, … is 95?",
      solution:
        "a = 5, d = 6. Set aₙ = 95: 5 + (n − 1)6 = 95 ⇒ (n − 1)6 = 90 ⇒ n − 1 = 15 ⇒ n = 16. So the 16th term is 95.",
    },
  ],
  commonMistakes: [
    "Using n instead of (n − 1) in the nth-term formula.",
    "Taking d as the second term rather than the difference of two consecutive terms.",
    "Forgetting the 1/2 in the sum formula.",
    "Mixing up aₙ (a single term) with Sₙ (the sum of terms).",
  ],
  mcqs: [
    { id: "ap1", difficulty: "easy", q: "The common difference of the AP 3, 7, 11, … is:", options: ["7", "11", "4", "3"], answer: 2, explanation: "d = 7 − 3 = 4." },
    { id: "ap2", difficulty: "easy", q: "The 10th term of the AP 2, 4, 6, … is:", options: ["18", "16", "20", "22"], answer: 2, explanation: "a = 2, d = 2; a₁₀ = 2 + 9(2) = 20." },
    { id: "ap3", difficulty: "easy", q: "The nth term of an AP is given by:", options: ["a + nd", "an + d", "a + (n − 1)d", "a − (n − 1)d"], answer: 2, explanation: "aₙ = a + (n − 1)d." },
    { id: "ap4", difficulty: "medium", q: "The sum of the first n natural numbers is:", options: ["n²", "n(n − 1)/2", "n(n + 1)", "n(n + 1)/2"], answer: 3, explanation: "1 + 2 + … + n = n(n + 1)/2." },
    { id: "ap5", difficulty: "easy", q: "If a = 5 and d = 3, the 4th term is:", options: ["11", "17", "12", "14"], answer: 3, explanation: "a₄ = 5 + 3(3) = 14." },
    { id: "ap6", difficulty: "easy", q: "The sum of the first n terms of an AP is:", options: ["2a + (n − 1)d", "n[a + (n − 1)d]", "n/2[2a + (n − 1)d]", "n/2[a + d]"], answer: 2, explanation: "Sₙ = n/2[2a + (n − 1)d]." },
    { id: "ap7", difficulty: "medium", q: "For the AP with a = 10 and d = −2, the 3rd term is:", options: ["4", "12", "8", "6"], answer: 3, explanation: "a₃ = 10 + 2(−2) = 6." },
    { id: "ap8", difficulty: "easy", q: "The next term of the AP 1, 4, 7, 10, … is:", options: ["11", "14", "12", "13"], answer: 3, explanation: "d = 3, so next term = 10 + 3 = 13." },
    { id: "ap9", difficulty: "medium", q: "In an AP, aₙ − aₙ₋₁ is:", options: ["zero", "the common difference", "the first term", "the sum"], answer: 1, explanation: "The difference of consecutive terms is the common difference d." },
    { id: "ap10", difficulty: "hard", q: "The sum of the first 10 multiples of 3 is:", options: ["155", "150", "180", "165"], answer: 3, explanation: "a = 3, d = 3, n = 10; S = 10/2[6 + 27] = 5 × 33 = 165." },
    { id: "bk10m6", difficulty: "medium", q: "The constant difference between consecutive terms of an AP is the?", options: ["Common ratio", "Mean", "Common difference", "Median"], answer: 2, explanation: "An arithmetic progression has a constant common difference." },
    { id: "bk10m7", difficulty: "medium", q: "The next term in the AP 2, 5, 8, 11, ... is?", options: ["13", "15", "12", "14"], answer: 3, explanation: "The common difference is 3, so the next term is 11 + 3 = 14." },
  ],
  shortQuestions: [
    { q: "Find the common difference of 100, 95, 90, …", a: "d = 95 − 100 = −5." },
    { q: "Find the 5th term of the AP with a = 7 and d = 4.", a: "a₅ = 7 + 4(4) = 23." },
    { q: "Is 0, 0, 0, … an AP?", a: "Yes, with first term 0 and common difference 0." },
  ],
  longQuestions: [
    { q: "Find the sum of the first 25 terms of the AP whose nth term is 3n + 1.", a: "First term a = 3(1) + 1 = 4, and the 25th term = 3(25) + 1 = 76. S₂₅ = 25/2 (a + l) = 25/2 (4 + 76) = 25/2 × 80 = 1000." },
    { q: "How many terms of the AP 9, 17, 25, … add up to 636?", a: "a = 9, d = 8. Sₙ = n/2[18 + (n − 1)8] = 636 ⇒ n/2[8n + 10] = 636 ⇒ 4n² + 5n − 636 = 0. Solving, n = 12 (rejecting the negative root)." },
  ],
  hots: [
    { q: "The 7th term of an AP is 34 and the 13th term is 64. Find the AP.", a: "a + 6d = 34 and a + 12d = 64. Subtracting: 6d = 30 ⇒ d = 5, then a = 34 − 30 = 4. The AP is 4, 9, 14, 19, …" },
    { q: "If the sum of the first n terms of an AP is 3n² + 5n, find its 10th term.", a: "Sₙ = 3n² + 5n, so a₁₀ = S₁₀ − S₉ = (300 + 50) − (243 + 45) = 350 − 288 = 62." },
  ],
  revisionNotes: [
    "AP: each term = previous term + d.",
    "nth term: aₙ = a + (n − 1)d.",
    "Sum: Sₙ = n/2[2a + (n − 1)d] = n/2(a + l).",
    "d = difference of any two consecutive terms.",
  ],
  keyTakeaways: [
    "Always identify a and d first.",
    "Use Sₙ = n/2(a + l) when the last term is known — it's quicker.",
    "aₙ = Sₙ − Sₙ₋₁ links the term and sum formulas.",
  ],
  faq: [
    { q: "Is Arithmetic Progressions a scoring chapter?", a: "Yes. The two formulas cover most questions, and the chapter regularly appears in the CBSE board exam." },
    { q: "How do I find which term equals a given number?", a: "Set aₙ = a + (n − 1)d equal to that number and solve for n." },
    { q: "What is the difference between aₙ and Sₙ?", a: "aₙ is a single term (the nth one); Sₙ is the total of the first n terms." },
  ],
  related: [
    { classId: "10", subject: "maths", slug: "quadratic-equations" },
    { classId: "10", subject: "maths", slug: "polynomials" },
  ],
};

export default chapter;
