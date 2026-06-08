import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "10",
  subject: "maths",
  slug: "areas-related-to-circles",
  title: "Areas Related to Circles",
  order: 11,
  seoTitle: "Areas Related to Circles Class 10 CBSE Notes, MCQs, Quiz & Formulas",
  metaDescription:
    "Class 10 Maths Areas Related to Circles: area and circumference, area of a sector and segment, length of an arc, solved examples, MCQ quiz with answers and important questions.",
  overview:
    "This chapter is about measuring parts of a circle. Starting from the area (πr²) and circumference (2πr), you learn to find the length of an arc, the area of a sector (a 'pizza slice'), and the area of a segment. The formulas all scale the whole-circle value by the fraction θ/360, which makes them easy to remember.",
  objectives: [
    "Recall the area and circumference of a circle.",
    "Find the length of an arc for a given central angle.",
    "Find the area of a sector of a circle.",
    "Find the area of a segment of a circle.",
    "Apply the formulas to circular regions and designs.",
  ],
  concepts: [
    {
      heading: "Area and circumference",
      body: "For a circle of radius r, the area is πr² and the circumference (perimeter) is 2πr. The value of π is taken as 22/7 or 3.14 as instructed.",
    },
    {
      heading: "Length of an arc",
      body: "An arc subtending a central angle θ (in degrees) is the fraction θ/360 of the whole circumference: arc length = (θ/360) × 2πr.",
    },
    {
      heading: "Area of a sector",
      body: "A sector is the region between two radii and the arc between them. Its area is the same fraction of the whole area: area of sector = (θ/360) × πr².",
    },
    {
      heading: "Area of a segment",
      body: "A segment is the region between a chord and its arc. Area of a (minor) segment = area of the corresponding sector − area of the triangle formed by the two radii and the chord.",
    },
  ],
  formulas: [
    { name: "Area of circle", formula: "πr²" },
    { name: "Circumference", formula: "2πr" },
    { name: "Length of arc", formula: "(θ/360) × 2πr" },
    { name: "Area of sector", formula: "(θ/360) × πr²" },
    { name: "Area of segment", formula: "area of sector − area of triangle" },
  ],
  definitions: [
    { term: "Sector", meaning: "The region of a circle enclosed by two radii and the arc between them." },
    { term: "Segment", meaning: "The region of a circle enclosed by a chord and the arc it cuts off." },
    { term: "Arc", meaning: "A part of the circumference of a circle." },
  ],
  examples: [
    {
      problem: "Find the area of a circle of radius 7 cm. (Take π = 22/7.)",
      solution: "Area = πr² = (22/7) × 7 × 7 = 22 × 7 = 154 cm².",
    },
    {
      problem: "Find the area of a sector of radius 14 cm with central angle 90°. (π = 22/7.)",
      solution:
        "Area = (θ/360) × πr² = (90/360) × (22/7) × 14 × 14 = (1/4) × 616 = 154 cm².",
    },
    {
      problem: "Find the length of an arc of radius 21 cm subtending 60° at the centre. (π = 22/7.)",
      solution:
        "Arc = (θ/360) × 2πr = (60/360) × 2 × (22/7) × 21 = (1/6) × 132 = 22 cm.",
    },
  ],
  commonMistakes: [
    "Mixing up area (πr²) with circumference (2πr).",
    "Forgetting the θ/360 fraction for arcs and sectors.",
    "Using the diameter in place of the radius.",
    "For a segment, forgetting to subtract the triangle's area.",
  ],
  mcqs: [
    { id: "ar1", difficulty: "easy", q: "The area of a circle of radius r is:", options: ["πd", "2πr", "πr", "πr²"], answer: 3, explanation: "Area = πr²." },
    { id: "ar2", difficulty: "easy", q: "The circumference of a circle of radius r is:", options: ["πr²", "4πr", "2πr", "πr"], answer: 2, explanation: "Circumference = 2πr." },
    { id: "ar3", difficulty: "easy", q: "The area of a sector with central angle θ is:", options: ["πr²", "θ × πr²", "(θ/360) × 2πr", "(θ/360) × πr²"], answer: 3, explanation: "Area of sector = (θ/360) × πr²." },
    { id: "ar4", difficulty: "easy", q: "The area of a semicircle of radius r is:", options: ["πr²/4", "πr²/2", "2πr", "πr²"], answer: 1, explanation: "Half the circle's area = πr²/2." },
    { id: "ar5", difficulty: "medium", q: "The area of a circle of radius 7 cm (π = 22/7) is:", options: ["154 cm²", "22 cm²", "49 cm²", "44 cm²"], answer: 0, explanation: "(22/7) × 49 = 154 cm²." },
    { id: "ar6", difficulty: "medium", q: "The length of an arc subtending 90° in a circle of radius 14 cm (π = 22/7) is:", options: ["22 cm", "88 cm", "11 cm", "44 cm"], answer: 0, explanation: "(90/360) × 2 × (22/7) × 14 = (1/4) × 88 = 22 cm." },
    { id: "ar7", difficulty: "easy", q: "The area of a quarter circle of radius r is:", options: ["πr²/2", "πr²/4", "πr²", "πr/4"], answer: 1, explanation: "A quarter is (90/360) = 1/4 of πr²." },
    { id: "ar8", difficulty: "medium", q: "The area of a segment equals the area of the sector minus the area of the:", options: ["circle", "triangle", "chord", "arc"], answer: 1, explanation: "Segment = sector − triangle formed by the radii and chord." },
    { id: "ar9", difficulty: "easy", q: "If the diameter of a circle is 14 cm, its circumference (π = 22/7) is:", options: ["154 cm", "22 cm", "88 cm", "44 cm"], answer: 3, explanation: "2πr with r = 7 ⇒ 2 × (22/7) × 7 = 44 cm." },
    { id: "ar10", difficulty: "hard", q: "The area of a sector of angle 60° in a circle of radius 6 cm (π = 22/7) is about:", options: ["18.86 cm²", "9.43 cm²", "37.7 cm²", "12 cm²"], answer: 0, explanation: "(60/360) × (22/7) × 36 = (1/6) × 113.14 ≈ 18.86 cm²." },
  ],
  shortQuestions: [
    { q: "Write the formula for the area of a sector.", a: "(θ/360) × πr², where θ is the central angle." },
    { q: "Find the circumference of a circle of radius 21 cm (π = 22/7).", a: "2 × (22/7) × 21 = 132 cm." },
    { q: "What is a segment of a circle?", a: "The region between a chord and the arc it cuts off." },
  ],
  longQuestions: [
    { q: "A chord of a circle of radius 10 cm subtends a right angle at the centre. Find the area of the corresponding minor segment. (π = 3.14)", a: "Area of sector = (90/360) × 3.14 × 100 = 78.5 cm². Area of triangle = ½ × 10 × 10 = 50 cm². Segment = 78.5 − 50 = 28.5 cm²." },
    { q: "Find the area of a sector of radius 7 cm whose arc length is 11 cm. (π = 22/7)", a: "Arc = (θ/360) × 2πr ⇒ 11 = (θ/360) × 44 ⇒ θ/360 = 1/4. Area = (1/4) × πr² = (1/4) × 154 = 38.5 cm²." },
  ],
  hots: [
    { q: "A square of side 14 cm has a circle inscribed in it. Find the area between the square and the circle. (π = 22/7)", a: "Circle radius = 7 cm, area = 154 cm². Square area = 14² = 196 cm². Area between them = 196 − 154 = 42 cm²." },
    { q: "Why do the arc, sector and circumference formulas all contain the fraction θ/360?", a: "Because a full circle corresponds to 360°, an angle θ represents the fraction θ/360 of the whole, so each whole-circle quantity is scaled by that fraction." },
  ],
  revisionNotes: [
    "Area = πr²; circumference = 2πr.",
    "Arc length = (θ/360) × 2πr.",
    "Sector area = (θ/360) × πr².",
    "Segment area = sector area − triangle area.",
  ],
  keyTakeaways: [
    "Everything scales the whole-circle value by θ/360.",
    "Use the radius, never the diameter, inside the formulas.",
    "For a segment, always subtract the triangle.",
  ],
  faq: [
    { q: "What value of π should I use?", a: "Use 22/7 or 3.14 as stated in the question; many questions are designed to give whole numbers with 22/7." },
    { q: "What is the difference between a sector and a segment?", a: "A sector is bounded by two radii and an arc; a segment is bounded by a chord and an arc." },
    { q: "How do I find the area of a segment?", a: "Find the area of the corresponding sector, then subtract the area of the triangle formed by the two radii and the chord." },
  ],
  related: [
    { classId: "10", subject: "maths", slug: "circles" },
    { classId: "10", subject: "maths", slug: "surface-areas-and-volumes" },
  ],
};

export default chapter;
