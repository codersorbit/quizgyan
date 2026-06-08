import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "10",
  subject: "maths",
  slug: "real-numbers",
  title: "Real Numbers",
  order: 1,
  seoTitle:
    "Real Numbers Class 10 CBSE Notes, MCQs, Quiz & Important Questions",
  metaDescription:
    "Class 10 Maths Real Numbers: Fundamental Theorem of Arithmetic, HCF and LCM by prime factorisation, irrational number proofs, solved examples, MCQ quiz with answers, and important board questions.",
  overview:
    "Real Numbers is the opening chapter of CBSE Class 10 Maths and the foundation for almost everything that follows. It formalises how every composite number is built from primes (the Fundamental Theorem of Arithmetic), shows how to find HCF and LCM through prime factorisation, and proves why numbers like √2, √3 and √5 are irrational. The chapter is scoring and concept-light, so it is an easy place to secure full marks if the ideas are clear.",
  objectives: [
    "State and apply the Fundamental Theorem of Arithmetic.",
    "Find the HCF and LCM of two or more numbers using prime factorisation.",
    "Use the relation HCF × LCM = product of the two numbers.",
    "Prove that numbers such as √2, √3 and √5 are irrational using contradiction.",
    "Identify whether a number is rational or irrational.",
  ],
  concepts: [
    {
      heading: "Fundamental Theorem of Arithmetic",
      body: "Every composite number can be written as a product of prime numbers, and this factorisation is unique except for the order of the factors. For example, 60 = 2 × 2 × 3 × 5, and no other set of primes produces 60.",
    },
    {
      heading: "HCF and LCM by prime factorisation",
      body: "Write each number as a product of primes. The HCF is the product of the smallest powers of the common prime factors; the LCM is the product of the greatest powers of every prime factor that appears in any of the numbers.",
    },
    {
      heading: "Relation between HCF and LCM",
      body: "For any two positive integers a and b, HCF(a, b) × LCM(a, b) = a × b. This lets you find one quantity quickly when the other three are known. Note that this relation works for two numbers only, not for three.",
    },
    {
      heading: "Rational and irrational numbers",
      body: "A rational number can be written as p/q where p and q are integers and q ≠ 0. An irrational number cannot. The square root of any number that is not a perfect square (like √2 or √7) is irrational, and we prove it by contradiction.",
    },
  ],
  formulas: [
    {
      name: "HCF–LCM relation",
      formula: "HCF(a, b) × LCM(a, b) = a × b",
      note: "Valid for two numbers only.",
    },
    {
      name: "LCM from HCF",
      formula: "LCM(a, b) = (a × b) ÷ HCF(a, b)",
    },
  ],
  definitions: [
    { term: "Prime number", meaning: "A number greater than 1 with exactly two factors: 1 and itself (e.g. 2, 3, 5, 7)." },
    { term: "Composite number", meaning: "A number greater than 1 that has more than two factors (e.g. 4, 6, 9, 12)." },
    { term: "HCF", meaning: "Highest Common Factor — the largest number that divides each of the given numbers exactly." },
    { term: "LCM", meaning: "Lowest Common Multiple — the smallest number that is a multiple of each of the given numbers." },
    { term: "Irrational number", meaning: "A number that cannot be expressed in the form p/q with integers p and q (q ≠ 0); its decimal is non-terminating and non-repeating." },
  ],
  examples: [
    {
      problem: "Find the HCF and LCM of 96 and 404 by prime factorisation and verify HCF × LCM = product.",
      solution:
        "96 = 2⁵ × 3 and 404 = 2² × 101. HCF = 2² = 4 (smallest power of the common prime 2). LCM = 2⁵ × 3 × 101 = 9696. Check: HCF × LCM = 4 × 9696 = 38784, and 96 × 404 = 38784. They match.",
    },
    {
      problem: "The HCF of two numbers is 18 and their LCM is 720. If one number is 90, find the other.",
      solution:
        "Using HCF × LCM = product of the numbers: 18 × 720 = 90 × x, so x = 12960 ÷ 90 = 144. The other number is 144.",
    },
    {
      problem: "Prove that √2 is irrational.",
      solution:
        "Assume √2 is rational, so √2 = p/q in lowest terms (p, q have no common factor). Then 2 = p²/q², so p² = 2q², meaning p² is even and therefore p is even. Let p = 2k. Then 4k² = 2q², so q² = 2k², meaning q is also even. But then p and q share the factor 2, contradicting 'lowest terms'. Hence √2 cannot be rational — it is irrational.",
    },
  ],
  commonMistakes: [
    "Swapping the rules: HCF uses the smallest powers of common primes; LCM uses the greatest powers of all primes.",
    "Applying HCF × LCM = product to three numbers — it only holds for two.",
    "Assuming the square root of a non-perfect-square is rational.",
    "In irrationality proofs, forgetting to start with 'p/q in lowest terms', which is what creates the contradiction.",
  ],
  mcqs: [
    { id: "rn1", difficulty: "easy", q: "The Fundamental Theorem of Arithmetic is about expressing a composite number as a product of:", options: ["primes, uniquely", "odd numbers", "perfect squares", "even numbers"], answer: 0, explanation: "Every composite number is a unique product of primes." },
    { id: "rn2", difficulty: "medium", q: "If the HCF of two numbers is 18 and their LCM is 720, and one number is 90, the other is:", options: ["90", "180", "360", "144"], answer: 3, explanation: "HCF × LCM = product, so the other = (18 × 720) ÷ 90 = 144." },
    { id: "rn3", difficulty: "easy", q: "The LCM of the smallest prime number and the smallest composite number is:", options: ["4", "2", "6", "8"], answer: 0, explanation: "Smallest prime = 2, smallest composite = 4, LCM(2, 4) = 4." },
    { id: "rn4", difficulty: "medium", q: "If a = 2³ × 3 and b = 2 × 3 × 5, then HCF(a, b) is:", options: ["30", "2", "12", "6"], answer: 3, explanation: "Common primes with smallest powers: 2¹ × 3¹ = 6." },
    { id: "rn5", difficulty: "easy", q: "Which of the following is an irrational number?", options: ["√9", "0.25", "√2", "√16"], answer: 2, explanation: "√2 is non-terminating and non-repeating; the others are rational." },
    { id: "rn6", difficulty: "easy", q: "For any two positive integers, HCF × LCM equals:", options: ["their HCF", "their difference", "the product of the two numbers", "their sum"], answer: 2, explanation: "HCF(a,b) × LCM(a,b) = a × b." },
    { id: "rn7", difficulty: "medium", q: "The prime factorisation of 156 is:", options: ["2² × 3 × 13", "2² × 39", "4 × 39", "2 × 3 × 13"], answer: 0, explanation: "156 = 2 × 78 = 2 × 2 × 39 = 2² × 3 × 13." },
    { id: "rn8", difficulty: "hard", q: "If p is a prime and p divides a², then p also divides:", options: ["2a", "a", "a + 1", "a²+1"], answer: 1, explanation: "A key lemma used in irrationality proofs: if a prime divides a², it divides a." },
    { id: "rn9", difficulty: "medium", q: "The smallest number that is divisible by both 12 and 18 is their:", options: ["HCF, which is 6", "LCM, which is 36", "product, 216", "sum, 30"], answer: 1, explanation: "12 = 2²×3, 18 = 2×3², LCM = 2²×3² = 36." },
    { id: "rn10", difficulty: "hard", q: "The decimal expansion of 13/3125 is:", options: ["non-terminating non-repeating", "terminating", "cannot be decided", "non-terminating repeating"], answer: 1, explanation: "3125 = 5⁵ (only the prime 5), so the decimal terminates." },
    { id: "bk10m0", difficulty: "medium", q: "The HCF of 6 and 20 is?", options: ["2", "60", "10", "120"], answer: 0, explanation: "6 = 2×3 and 20 = 2²×5; the common factor is 2." },
    { id: "bk10m1", difficulty: "hard", q: "The LCM of 6 and 20 is?", options: ["2", "60", "120", "26"], answer: 1, explanation: "LCM × HCF = product, so LCM = (6×20)÷2 = 60." },
  ],
  shortQuestions: [
    { q: "Define HCF and LCM in one line each.", a: "HCF is the largest number dividing all given numbers exactly; LCM is the smallest number that is a multiple of all of them." },
    { q: "Find the HCF of 6 and 20 by prime factorisation.", a: "6 = 2 × 3, 20 = 2² × 5; common prime is 2 with smallest power 2¹, so HCF = 2." },
    { q: "State the Fundamental Theorem of Arithmetic.", a: "Every composite number can be factorised into primes uniquely, apart from the order of the factors." },
  ],
  longQuestions: [
    { q: "Find the LCM and HCF of 6, 72 and 120 using prime factorisation.", a: "6 = 2 × 3, 72 = 2³ × 3², 120 = 2³ × 3 × 5. HCF = 2 × 3 = 6 (smallest powers of common primes). LCM = 2³ × 3² × 5 = 360 (greatest powers of all primes)." },
    { q: "Prove that 3 + 2√5 is irrational, given that √5 is irrational.", a: "Assume 3 + 2√5 is rational = r. Then 2√5 = r − 3, so √5 = (r − 3)/2. The right side is rational (difference and quotient of rationals), which would make √5 rational — a contradiction. Hence 3 + 2√5 is irrational." },
  ],
  hots: [
    { q: "A sweet seller has 420 kaju barfis and 130 badam barfis. He stacks them so each stack has the same number and takes least area. What is the number that should be in each stack?", a: "He needs the HCF of 420 and 130. 420 = 2² × 3 × 5 × 7, 130 = 2 × 5 × 13. HCF = 2 × 5 = 10. So 10 barfis per stack." },
    { q: "Can two numbers have 16 as their HCF and 380 as their LCM? Justify.", a: "No. The LCM must be a multiple of the HCF, but 380 ÷ 16 = 23.75 is not a whole number, so such numbers cannot exist." },
  ],
  revisionNotes: [
    "Composite number ⇒ unique product of primes (Fundamental Theorem of Arithmetic).",
    "HCF = product of smallest powers of common primes.",
    "LCM = product of greatest powers of all primes.",
    "HCF × LCM = product of the two numbers (two numbers only).",
    "√(non-perfect-square) is always irrational.",
  ],
  keyTakeaways: [
    "This chapter is short and high-scoring — master prime factorisation and the HCF–LCM relation.",
    "Always reduce p/q to lowest terms before an irrationality proof.",
    "The LCM is always a multiple of the HCF.",
  ],
  faq: [
    { q: "Is Real Numbers an important chapter for the Class 10 board exam?", a: "Yes. It is short, conceptually simple and reliably appears in the exam, making it one of the easiest places to score full marks." },
    { q: "Which proofs should I practise from Real Numbers?", a: "Practise proving that √2, √3 and √5 are irrational, and proofs that combinations such as 3 + 2√5 are irrational." },
    { q: "Does HCF × LCM = product work for three numbers?", a: "No, that relation is true only for two numbers. For three or more, find HCF and LCM separately by prime factorisation." },
  ],
  related: [{ classId: "10", subject: "maths", slug: "quadratic-equations" }],
};

export default chapter;
