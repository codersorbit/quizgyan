import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "8",
  subject: "maths",
  slug: "a-square-and-a-cube",
  title: "A Square and A Cube",
  order: 1,
  seoTitle: "A Square and A Cube Class 8 Maths (Ganita Prakash) — Squares, Cubes & Roots",
  metaDescription:
    "Class 8 Maths A Square and A Cube (Ganita Prakash): square numbers and their patterns, square roots by prime factorisation, perfect cubes and cube roots, with solved examples and an MCQ quiz.",
  overview:
    "“A Square and A Cube” brings squares and cubes together. Squaring a number multiplies it by itself (5² = 25) and cubing multiplies it three times (5³ = 125). This Class 8 Ganita Prakash chapter explores the patterns hidden in square and cube numbers and shows how to find square roots and cube roots, most reliably by prime factorisation.",
  objectives: [
    "Recognise perfect squares and perfect cubes.",
    "Use patterns and properties of square numbers.",
    "Find square roots by prime factorisation.",
    "Find cube roots of perfect cubes by prime factorisation.",
  ],
  concepts: [
    {
      heading: "Square numbers",
      body: "A number multiplied by itself gives its square, so 6² = 36. Numbers like 1, 4, 9, 16, 25 are perfect squares. A perfect square always ends in 0, 1, 4, 5, 6 or 9 — never in 2, 3, 7 or 8 — and the number of zeros at the end of a perfect square is always even.",
    },
    {
      heading: "Patterns in squares",
      body: "Square numbers hide neat patterns: the sum of the first n odd numbers is n² (1 + 3 + 5 = 9 = 3²), and between consecutive squares n² and (n+1)² there are exactly 2n non-square numbers. These patterns help estimate and check squares quickly.",
    },
    {
      heading: "Square roots",
      body: "A square root undoes squaring: since 7² = 49, √49 = 7. For perfect squares, write the number as a product of primes, pair the equal factors, and take one factor from each pair. For 144 = 2×2×2×2×3×3, the pairs give √144 = 2×2×3 = 12.",
    },
    {
      heading: "Cubes and cube roots",
      body: "Cubing multiplies a number three times, so 4³ = 64; numbers like 1, 8, 27, 64, 125 are perfect cubes. To find a cube root, factor into primes and group the equal factors in threes, taking one from each group. For 216 = 2×2×2×3×3×3, ∛216 = 2×3 = 6.",
    },
  ],
  formulas: [
    { name: "Square", formula: "square of n = n × n = n²" },
    { name: "Cube", formula: "cube of n = n × n × n = n³" },
    { name: "Sum of odd numbers", formula: "1 + 3 + 5 + … + (2n − 1) = n²" },
    { name: "Square root (prime factors)", formula: "√(perfect square) = product of one factor from each equal pair" },
    { name: "Cube root (prime factors)", formula: "∛(perfect cube) = product of one factor from each equal triple" },
  ],
  definitions: [
    { term: "Perfect square", meaning: "A number that is the square of a whole number, e.g. 49 = 7²." },
    { term: "Square root", meaning: "A number which, when multiplied by itself, gives the original number." },
    { term: "Perfect cube", meaning: "A number that is the cube of a whole number, e.g. 27 = 3³." },
    { term: "Cube root", meaning: "A number which, when multiplied by itself three times, gives the original number." },
  ],
  examples: [
    {
      problem: "Find √324 by prime factorisation.",
      solution: "324 = 2×2×3×3×3×3. Pairs: (2×2),(3×3),(3×3). Take one from each pair: 2×3×3 = 18. So √324 = 18.",
    },
    {
      problem: "Is 1000 a perfect square? Why?",
      solution: "1000 ends in three zeros (an odd number of zeros), so it cannot be a perfect square.",
    },
    {
      problem: "Find ∛512.",
      solution: "512 = 2⁹ = (2×2×2)×(2×2×2)×(2×2×2). One factor from each triple: 2×2×2 = 8. So ∛512 = 8.",
    },
    {
      problem: "Express 25 as a sum of consecutive odd numbers.",
      solution: "Since 25 = 5², it is the sum of the first 5 odd numbers: 1 + 3 + 5 + 7 + 9 = 25.",
    },
  ],
  commonMistakes: [
    "Assuming any number ending in 5 or 6 is a perfect square — the ending is necessary but not sufficient.",
    "Pairing factors in twos when finding a cube root (cube roots group in threes).",
    "Confusing squaring with doubling (5² = 25, not 10).",
    "Forgetting that a perfect square ends with an even number of zeros.",
  ],
  mcqs: [
    { id: "sc1", difficulty: "easy", q: "The square of 9 is:", options: ["18", "81", "72", "99"], answer: 1, explanation: "9² = 9 × 9 = 81." },
    { id: "sc2", difficulty: "easy", q: "Which number is a perfect square?", options: ["27", "50", "64", "72"], answer: 2, explanation: "64 = 8², a perfect square." },
    { id: "sc3", difficulty: "medium", q: "A perfect square can never end in:", options: ["4", "9", "5", "8"], answer: 3, explanation: "Squares never end in 2, 3, 7 or 8." },
    { id: "sc4", difficulty: "medium", q: "√196 equals:", options: ["14", "16", "12", "18"], answer: 0, explanation: "14² = 196, so √196 = 14." },
    { id: "sc5", difficulty: "easy", q: "The cube of 3 is:", options: ["9", "6", "27", "12"], answer: 2, explanation: "3³ = 3 × 3 × 3 = 27." },
    { id: "sc6", difficulty: "medium", q: "Which is a perfect cube?", options: ["100", "125", "150", "200"], answer: 1, explanation: "125 = 5³." },
    { id: "sc7", difficulty: "medium", q: "∛729 equals:", options: ["7", "8", "27", "9"], answer: 3, explanation: "9³ = 729, so ∛729 = 9." },
    { id: "sc8", difficulty: "hard", q: "The sum 1 + 3 + 5 + 7 equals:", options: ["16", "15", "14", "13"], answer: 0, explanation: "Sum of first 4 odd numbers = 4² = 16." },
    { id: "sc9", difficulty: "easy", q: "How many zeros can a perfect square end with?", options: ["any number", "only odd numbers", "an even number", "exactly one"], answer: 2, explanation: "A perfect square ends in an even number of zeros." },
    { id: "sc10", difficulty: "hard", q: "How many non-square numbers lie between 9 and 16?", options: ["7", "6", "5", "8"], answer: 1, explanation: "Between n² and (n+1)² there are 2n numbers; here n = 3, so 2×3 = 6." },
  ],
  shortQuestions: [
    { q: "How can you tell a number is not a perfect square from its last digit?", a: "If it ends in 2, 3, 7 or 8 it cannot be a perfect square." },
    { q: "State the odd-number pattern for squares.", a: "The sum of the first n odd numbers equals n²." },
    { q: "How do you find a cube root by prime factorisation?", a: "Factor into primes, group equal factors in threes, and take one factor from each group." },
  ],
  longQuestions: [
    { q: "Find the square root of 1764 by prime factorisation, showing each step.", a: "1764 = 2 × 2 × 3 × 3 × 7 × 7. Make pairs: (2×2), (3×3), (7×7). Take one number from each pair: 2 × 3 × 7 = 42. Therefore √1764 = 42." },
    { q: "Explain why 243 is not a perfect cube, then find the smallest number to multiply it by to make one.", a: "243 = 3⁵ = (3×3×3) × 3 × 3. One complete triple gives a 3, but two 3s are left over, so 243 is not a perfect cube. Multiplying by 3 makes 3⁶ = 729 = 9³, a perfect cube; so the smallest multiplier is 3." },
  ],
  hots: [
    { q: "Without computing, explain why 768 cannot be a perfect square.", a: "768 = 2⁸ × 3 = (pairs of 2) × 3. The single 3 has no pair, so the factorisation cannot be split fully into equal pairs; hence 768 is not a perfect square." },
    { q: "A square garden has area 529 m². Find its side and explain.", a: "The side is √529. Since 23² = 529, the side is 23 m — the side of a square equals the square root of its area." },
  ],
  revisionNotes: [
    "Square: n²; perfect squares end in 0,1,4,5,6,9 with an even number of trailing zeros.",
    "Sum of first n odd numbers = n².",
    "Square root: pair equal prime factors, take one per pair.",
    "Cube: n³; cube root: group equal prime factors in threes.",
  ],
  keyTakeaways: [
    "Prime factorisation is the reliable way to find square and cube roots.",
    "Digit and zero patterns quickly rule out non-squares.",
    "Squares pair factors in twos; cubes group them in threes.",
  ],
  faq: [
    { q: "What is a perfect square?", a: "A number that equals the square of a whole number, such as 36 = 6²." },
    { q: "How is a cube root different from a square root?", a: "A square root undoes squaring (pairs of factors); a cube root undoes cubing (groups of three equal factors)." },
    { q: "Can a perfect square end in 8?", a: "No — perfect squares only end in 0, 1, 4, 5, 6 or 9." },
  ],
  related: [
    { classId: "8", subject: "maths", slug: "power-play" },
  ],
};

export default chapter;
