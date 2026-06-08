import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "10",
  subject: "maths",
  slug: "introduction-to-trigonometry",
  title: "Introduction to Trigonometry",
  order: 8,
  seoTitle: "Introduction to Trigonometry Class 10 CBSE Notes, MCQs, Quiz & Table",
  metaDescription:
    "Class 10 Maths Introduction to Trigonometry: trigonometric ratios, standard angle values (0°, 30°, 45°, 60°, 90°), trigonometric identities, complementary angles, solved examples and MCQ quiz.",
  overview:
    "Trigonometry studies the relationships between the sides and angles of a right-angled triangle. This chapter introduces the six trigonometric ratios, their exact values for standard angles, the ratios of complementary angles, and three identities you will use again and again. It is one of the most important and high-scoring chapters of Class 10.",
  objectives: [
    "Define the six trigonometric ratios of an acute angle.",
    "Recall the values of trig ratios for 0°, 30°, 45°, 60° and 90°.",
    "Use the relationships between trig ratios of complementary angles.",
    "Apply the three fundamental trigonometric identities.",
    "Evaluate and simplify trigonometric expressions.",
  ],
  concepts: [
    {
      heading: "The six ratios",
      body: "For an acute angle A in a right triangle: sin A = opposite/hypotenuse, cos A = adjacent/hypotenuse, tan A = opposite/adjacent = sin A/cos A. Their reciprocals are cosec A = 1/sin A, sec A = 1/cos A and cot A = 1/tan A.",
    },
    {
      heading: "Standard angle values",
      body: "Learn the table: sin 0°=0, sin 30°=1/2, sin 45°=1/√2, sin 60°=√3/2, sin 90°=1; cos is the same values reversed (cos 0°=1 … cos 90°=0); tan = sin/cos, so tan 0°=0, tan 30°=1/√3, tan 45°=1, tan 60°=√3, tan 90° undefined.",
    },
    {
      heading: "Complementary angles",
      body: "Ratios of an angle relate to its complement (90° − A): sin(90° − A) = cos A, cos(90° − A) = sin A, tan(90° − A) = cot A, and similarly for the reciprocals.",
    },
    {
      heading: "Trigonometric identities",
      body: "Three identities hold for all valid angles: sin²A + cos²A = 1, 1 + tan²A = sec²A, and 1 + cot²A = cosec²A. They let you convert between ratios and prove expressions.",
    },
  ],
  formulas: [
    { name: "Identity 1", formula: "sin²A + cos²A = 1" },
    { name: "Identity 2", formula: "1 + tan²A = sec²A" },
    { name: "Identity 3", formula: "1 + cot²A = cosec²A" },
    { name: "Complementary angle", formula: "sin(90° − A) = cos A" },
  ],
  definitions: [
    { term: "Trigonometric ratio", meaning: "A ratio of two sides of a right triangle with respect to one of its acute angles." },
    { term: "Identity", meaning: "An equation that is true for all permissible values of the variable." },
    { term: "Complementary angles", meaning: "Two angles whose sum is 90°." },
  ],
  examples: [
    {
      problem: "If sin A = 3/5, find cos A and tan A.",
      solution:
        "cos A = √(1 − sin²A) = √(1 − 9/25) = √(16/25) = 4/5. tan A = sin A / cos A = (3/5)/(4/5) = 3/4.",
    },
    {
      problem: "Evaluate sin 30° + cos 60°.",
      solution: "sin 30° = 1/2 and cos 60° = 1/2, so the sum = 1/2 + 1/2 = 1.",
    },
    {
      problem: "Evaluate 2 sin 45° · cos 45°.",
      solution: "= 2 × (1/√2) × (1/√2) = 2 × 1/2 = 1.",
    },
  ],
  commonMistakes: [
    "Confusing the values of sin and cos for 30° and 60°.",
    "Writing sin²A as sin(A²) — it means (sin A)².",
    "Treating tan 90° as a number; it is undefined.",
    "Forgetting that the identities hold only for valid angles (e.g. sec needs cos ≠ 0).",
  ],
  mcqs: [
    { id: "tg1", difficulty: "easy", q: "The value of sin 30° is:", options: ["0", "1", "1/2", "√3/2"], answer: 2, explanation: "sin 30° = 1/2." },
    { id: "tg2", difficulty: "easy", q: "The value of cos 0° is:", options: ["0", "1/2", "√3/2", "1"], answer: 3, explanation: "cos 0° = 1." },
    { id: "tg3", difficulty: "easy", q: "The value of tan 45° is:", options: ["√3", "1/√3", "1", "0"], answer: 2, explanation: "tan 45° = 1." },
    { id: "tg4", difficulty: "easy", q: "sin²A + cos²A equals:", options: ["0", "2", "sin 2A", "1"], answer: 3, explanation: "Fundamental identity: sin²A + cos²A = 1." },
    { id: "tg5", difficulty: "medium", q: "sec²A − tan²A equals:", options: ["0", "2", "cos²A", "1"], answer: 3, explanation: "From 1 + tan²A = sec²A, sec²A − tan²A = 1." },
    { id: "tg6", difficulty: "medium", q: "The value of cosec 60° is:", options: ["√3", "2/√3", "2", "1/2"], answer: 1, explanation: "cosec 60° = 1/sin 60° = 1/(√3/2) = 2/√3." },
    { id: "tg7", difficulty: "medium", q: "sin(90° − A) equals:", options: ["cos A", "tan A", "cosec A", "sin A"], answer: 0, explanation: "Complementary-angle relation: sin(90° − A) = cos A." },
    { id: "tg8", difficulty: "medium", q: "If sin θ = cos θ, then θ equals:", options: ["90°", "30°", "45°", "60°"], answer: 2, explanation: "sin and cos are equal at 45°." },
    { id: "tg9", difficulty: "easy", q: "The value of tan 30° is:", options: ["0", "√3", "1/√3", "1"], answer: 2, explanation: "tan 30° = 1/√3." },
    { id: "tg10", difficulty: "easy", q: "The value of cos 90° is:", options: ["0", "1", "1/2", "√3/2"], answer: 0, explanation: "cos 90° = 0." },
    { id: "bk10m9", difficulty: "medium", q: "The value of sin 30° is?", options: ["1", "1/2", "0", "√3/2"], answer: 1, explanation: "sin 30° = 1/2." },
    { id: "bk10m10", difficulty: "medium", q: "The value of cos 0° is?", options: ["0", "1/2", "1", "√3/2"], answer: 2, explanation: "cos 0° = 1." },
    { id: "bk10m11", difficulty: "hard", q: "The value of tan 45° is?", options: ["0", "√3", "1/2", "1"], answer: 3, explanation: "tan 45° = 1." },
  ],
  shortQuestions: [
    { q: "Write the value of tan 60°.", a: "tan 60° = √3." },
    { q: "If cos A = 4/5, find sin A.", a: "sin A = √(1 − 16/25) = 3/5." },
    { q: "What is sec 0°?", a: "sec 0° = 1/cos 0° = 1." },
  ],
  longQuestions: [
    { q: "Prove that (1 − sin²A)/cos²A = 1.", a: "Using sin²A + cos²A = 1, we get 1 − sin²A = cos²A. So (1 − sin²A)/cos²A = cos²A/cos²A = 1." },
    { q: "Evaluate (sin 30° cos 60° + cos 30° sin 60°).", a: "= (1/2)(1/2) + (√3/2)(√3/2) = 1/4 + 3/4 = 1. (This is sin(30° + 60°) = sin 90° = 1.)" },
  ],
  hots: [
    { q: "If 7 sin²θ + 3 cos²θ = 4, find tan θ.", a: "Write 7 sin²θ + 3 cos²θ = 3(sin²θ + cos²θ) + 4 sin²θ = 3 + 4 sin²θ = 4, so sin²θ = 1/4, sin θ = 1/2, θ = 30°, hence tan θ = 1/√3." },
    { q: "Show that cos 48° − sin 42° = 0.", a: "Since 42° = 90° − 48°, sin 42° = sin(90° − 48°) = cos 48°. Therefore cos 48° − sin 42° = 0." },
  ],
  revisionNotes: [
    "sin = opp/hyp, cos = adj/hyp, tan = opp/adj.",
    "Standard values: memorise the 0°–90° table.",
    "sin(90° − A) = cos A and similar complementary relations.",
    "Identities: sin²+cos²=1, 1+tan²=sec², 1+cot²=cosec².",
  ],
  keyTakeaways: [
    "Master the standard-value table — it appears in almost every question.",
    "The three identities are your main tool for proofs.",
    "tan and sec are undefined at 90°; cot and cosec at 0°.",
  ],
  faq: [
    { q: "Why is trigonometry important in Class 10?", a: "It is heavily weighted, leads directly into Applications of Trigonometry, and the standard values and identities are used throughout." },
    { q: "How do I remember the standard values?", a: "Learn the sine row (0, 1/2, 1/√2, √3/2, 1) for 0°–90°; cosine is the same row reversed, and tan = sin/cos." },
    { q: "What does sin²A mean?", a: "It means (sin A)² — the square of sin A, not the sine of A²." },
  ],
  related: [
    { classId: "10", subject: "maths", slug: "some-applications-of-trigonometry" },
    { classId: "10", subject: "maths", slug: "coordinate-geometry" },
  ],
};

export default chapter;
