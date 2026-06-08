import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "8",
  subject: "maths",
  slug: "proportional-reasoning-2",
  title: "Proportional Reasoning 2",
  order: 10,
  seoTitle: "Proportional Reasoning 2 Class 8 Maths — Inverse Proportion Notes & MCQs",
  metaDescription:
    "Class 8 Maths Proportional Reasoning 2 (Ganita Prakash): inverse proportion and its constant product, telling direct from inverse proportion, and applications such as time and work and speed and time, with solved examples and an MCQ quiz.",
  overview:
    "This second part of proportional reasoning turns to quantities that change in opposite directions. In inverse proportion, as one quantity grows the other shrinks so that their product stays the same. The chapter shows how to recognise inverse (versus direct) proportion and how to use it in real situations like time and work, and speed and time.",
  objectives: [
    "Recognise and define inverse proportion.",
    "Use the constant-product rule of inverse proportion.",
    "Tell direct proportion from inverse proportion.",
    "Apply inverse proportion to time-and-work and speed-time problems.",
  ],
  concepts: [
    {
      heading: "Inverse proportion",
      body: "Two quantities are in inverse proportion if an increase in one causes a proportional decrease in the other, so that their product stays constant: x × y = k. If 6 workers take 8 days to finish a job (product 48), then 12 workers — twice as many — take only 4 days, because the product 12 × 4 is still 48.",
    },
    {
      heading: "Direct versus inverse",
      body: "In direct proportion the ratio of the quantities stays constant (they rise and fall together), while in inverse proportion the product stays constant (one rises as the other falls). Cost and quantity of rice are directly proportional; the number of workers and the days needed for a fixed job are inversely proportional. Deciding which relationship applies is the key first step.",
    },
    {
      heading: "Time and work",
      body: "When a fixed amount of work is shared, more people finish it in fewer days, so workers and days are in inverse proportion. The total effort, measured in 'person-days', stays the same: workers × days = constant. This lets us predict how long a job will take if the number of workers changes.",
    },
    {
      heading: "Speed and time",
      body: "For a fixed distance, the faster you travel the less time you take, so speed and time are inversely proportional: speed × time = distance, a constant. Doubling the speed halves the time for the same journey. Recognising this helps solve everyday travel problems.",
    },
  ],
  formulas: [
    { name: "Inverse proportion", formula: "x₁ × y₁ = x₂ × y₂ (product constant)" },
    { name: "Time and work", formula: "workers × days = constant (person-days)" },
    { name: "Speed and time", formula: "speed × time = distance (fixed distance)" },
  ],
  definitions: [
    { term: "Inverse proportion", meaning: "A relation in which two quantities change oppositely with a constant product." },
    { term: "Constant of proportionality", meaning: "The fixed value k that the product (or ratio) of the quantities equals." },
    { term: "Person-days", meaning: "The total work measured as the number of workers multiplied by the days taken." },
    { term: "Direct proportion", meaning: "A relation in which two quantities change together with a constant ratio." },
  ],
  examples: [
    {
      problem: "If 10 workers build a wall in 6 days, how long will 15 workers take?",
      solution: "Inverse proportion: 10 x 6 = 15 x T, so T = 60 / 15 = 4 days.",
    },
    {
      problem: "A car covers a fixed distance in 3 hours at 60 km/h. How long at 90 km/h?",
      solution: "Speed x time is constant: 60 x 3 = 90 x T, so T = 180 / 90 = 2 hours.",
    },
    {
      problem: "Is the number of taps filling a tank and the time taken direct or inverse?",
      solution: "Inverse - more taps fill the tank in less time, so their product stays constant.",
    },
  ],
  commonMistakes: [
    "Treating inverse proportion like direct proportion (the product, not the ratio, is constant).",
    "Multiplying when you should keep the product equal, or vice versa.",
    "Assuming more workers always means more time - it means less time for a fixed job.",
    "Forgetting to check which relationship (direct or inverse) the problem describes.",
  ],
  mcqs: [
    { id: "p2a", difficulty: "medium", q: "In inverse proportion, the ___ of the quantities stays constant.", options: ["sum", "ratio", "product", "difference"], answer: 2, explanation: "x x y is constant in inverse proportion." },
    { id: "p2b", difficulty: "easy", q: "Which pair is in inverse proportion?", options: ["speed and time for a fixed distance", "cost and quantity of rice", "distance and time at fixed speed", "side and perimeter of a square"], answer: 0, explanation: "Higher speed means less time for the same distance." },
    { id: "p2c", difficulty: "hard", q: "If 8 taps fill a tank in 9 hours, 12 taps take:", options: ["7 hours", "4 hours", "8 hours", "6 hours"], answer: 3, explanation: "8 x 9 = 12 x T gives T = 72/12 = 6 hours." },
    { id: "p2d", difficulty: "medium", q: "As one quantity increases in inverse proportion, the other:", options: ["increases", "decreases", "stays equal", "doubles"], answer: 1, explanation: "One rises while the other falls, keeping the product constant." },
    { id: "p2e", difficulty: "hard", q: "A journey takes 4 hours at 45 km/h. At 60 km/h it takes:", options: ["2 hours", "3.5 hours", "5 hours", "3 hours"], answer: 3, explanation: "45 x 4 = 60 x T, so T = 180/60 = 3 hours." },
    { id: "p2f", difficulty: "easy", q: "In direct proportion, what stays constant?", options: ["the product", "the ratio", "the sum", "the difference"], answer: 1, explanation: "Direct proportion keeps the ratio constant." },
    { id: "p2g", difficulty: "medium", q: "Total work in a time-and-work problem is measured in:", options: ["kilometres", "rupees", "person-days", "litres"], answer: 2, explanation: "Work equals workers x days, the person-days." },
    { id: "p2h", difficulty: "easy", q: "More workers on a fixed job means the days needed:", options: ["increase", "decrease", "stay the same", "double"], answer: 1, explanation: "Workers and days are inversely proportional." },
    { id: "p2i", difficulty: "medium", q: "If 6 workers finish a job in 8 days, 12 workers finish it in:", options: ["16 days", "12 days", "10 days", "4 days"], answer: 3, explanation: "6 x 8 = 12 x T, so T = 48/12 = 4 days." },
    { id: "p2j", difficulty: "hard", q: "For a fixed distance, doubling the speed makes the time:", options: ["half", "double", "the same", "four times"], answer: 0, explanation: "Speed and time are inversely proportional, so time halves." },
  ],
  shortQuestions: [
    { q: "What is inverse proportion?", a: "A relation in which one quantity increases as the other decreases, keeping their product constant." },
    { q: "How is inverse proportion different from direct proportion?", a: "In direct proportion the ratio is constant; in inverse proportion the product is constant." },
    { q: "Why are speed and time inversely proportional for a fixed distance?", a: "Because their product is the fixed distance, so going faster takes less time." },
  ],
  longQuestions: [
    { q: "Explain inverse proportion using workers and days, and give the rule.", a: "Two quantities are in inverse proportion when increasing one decreases the other so that their product stays constant: x1 x y1 = x2 x y2. For a fixed job, more workers finish it in fewer days. If 10 workers take 6 days (product 60), then 15 workers take 60 / 15 = 4 days, since the total work (person-days) is unchanged. The product, not the ratio, stays the same." },
    { q: "How can you decide whether two quantities are in direct or inverse proportion? Give an example of each.", a: "Check what happens as one quantity increases. If the other increases too and their ratio stays constant, it is direct proportion - for example, the cost of rice rises in step with the quantity bought. If the other decreases and their product stays constant, it is inverse proportion - for example, the more workers there are on a fixed job, the fewer days it takes. Identifying the type tells you whether to keep the ratio or the product constant when solving." },
  ],
  hots: [
    { q: "Food stored for 20 soldiers lasts 30 days. If 10 more soldiers join, how long will it last?", a: "Inverse proportion: 20 x 30 = 30 x T, so T = 600 / 30 = 20 days." },
    { q: "Why does a job with twice as many workers not always take exactly half the time in real life?", a: "Inverse proportion assumes every worker is equally efficient and work shares perfectly; in reality coordination, space and fatigue can change individual output, so the ideal halving is only approximate." },
  ],
  revisionNotes: [
    "Inverse proportion: one up, the other down; product x x y constant.",
    "Direct keeps the ratio constant; inverse keeps the product constant.",
    "Time and work: workers x days = constant (person-days).",
    "Speed and time: speed x time = distance for a fixed journey.",
  ],
  keyTakeaways: [
    "Inverse proportion keeps a product, not a ratio, constant.",
    "First decide whether a problem is direct or inverse.",
    "More workers or higher speed means less time.",
  ],
  faq: [
    { q: "What is inverse proportion?", a: "A relation where one quantity rises as the other falls, so their product is constant." },
    { q: "How do I know if a problem is direct or inverse?", a: "If quantities rise and fall together it is direct (constant ratio); if one rises as the other falls it is inverse (constant product)." },
    { q: "Are speed and time directly or inversely proportional?", a: "For a fixed distance they are inversely proportional, since speed x time equals the distance." },
  ],
  related: [
    { classId: "8", subject: "maths", slug: "proportional-reasoning-1" },
  ],
};

export default chapter;
