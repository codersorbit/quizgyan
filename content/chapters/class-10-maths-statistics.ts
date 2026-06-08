import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "10",
  subject: "maths",
  slug: "statistics",
  title: "Statistics",
  order: 13,
  seoTitle: "Statistics Class 10 CBSE Notes, MCQs, Quiz & Mean Median Mode",
  metaDescription:
    "Class 10 Maths Statistics: mean, median and mode of grouped data, assumed-mean method, modal and median class, empirical relationship, solved examples and MCQ quiz with answers.",
  overview:
    "Statistics deals with summarising data using a single representative value. In Class 10 you learn to find the mean, median and mode of grouped data, and the empirical relationship that links the three. The formulas look long but follow a fixed recipe, so practice makes this a dependable scoring chapter.",
  objectives: [
    "Find the mean of grouped data by the direct and assumed-mean methods.",
    "Identify the modal class and compute the mode.",
    "Identify the median class and compute the median.",
    "Use the empirical relationship between mean, median and mode.",
    "Interpret what each measure tells you about the data.",
  ],
  concepts: [
    {
      heading: "Mean of grouped data",
      body: "Use the class marks (midpoints) xᵢ with frequencies fᵢ. Direct method: mean = Σfᵢxᵢ / Σfᵢ. The assumed-mean method, mean = a + Σfᵢdᵢ/Σfᵢ (with dᵢ = xᵢ − a), simplifies the arithmetic.",
    },
    {
      heading: "Mode of grouped data",
      body: "The modal class is the class with the highest frequency. Mode = l + [(f₁ − f₀)/(2f₁ − f₀ − f₂)] × h, where l is the lower limit of the modal class, f₁ its frequency, f₀ and f₂ the frequencies of the classes before and after, and h the class size.",
    },
    {
      heading: "Median of grouped data",
      body: "The median class is the one in which the cumulative frequency first reaches n/2. Median = l + [(n/2 − cf)/f] × h, where l is the lower limit of the median class, cf the cumulative frequency before it, f its frequency, and h the class size.",
    },
    {
      heading: "Empirical relationship",
      body: "For moderately skewed data, the three measures are linked by: Mode = 3 Median − 2 Mean. It lets you find any one of them when the other two are known.",
    },
  ],
  formulas: [
    { name: "Mean (direct)", formula: "Σfᵢxᵢ / Σfᵢ" },
    { name: "Mean (assumed)", formula: "a + Σfᵢdᵢ / Σfᵢ" },
    { name: "Mode", formula: "l + [(f₁ − f₀)/(2f₁ − f₀ − f₂)] × h" },
    { name: "Median", formula: "l + [(n/2 − cf)/f] × h" },
    { name: "Empirical relation", formula: "Mode = 3 Median − 2 Mean" },
  ],
  definitions: [
    { term: "Class mark", meaning: "The midpoint of a class interval, (lower limit + upper limit)/2." },
    { term: "Modal class", meaning: "The class interval with the highest frequency." },
    { term: "Cumulative frequency", meaning: "The running total of frequencies up to and including a class." },
  ],
  examples: [
    {
      problem: "Find the mean of the data: classes 0–10, 10–20, 20–30 with frequencies 4, 6, 10.",
      solution:
        "Class marks: 5, 15, 25. Σfᵢxᵢ = 4(5) + 6(15) + 10(25) = 20 + 90 + 250 = 360. Σfᵢ = 20. Mean = 360/20 = 18.",
    },
    {
      problem: "In a data set, the mean is 30 and the median is 28. Estimate the mode.",
      solution: "Mode = 3 Median − 2 Mean = 3(28) − 2(30) = 84 − 60 = 24.",
    },
    {
      problem: "What is the class mark of the interval 20–30?",
      solution: "Class mark = (20 + 30)/2 = 25.",
    },
  ],
  commonMistakes: [
    "Using class limits instead of class marks (midpoints) for the mean.",
    "Picking the modal class by cumulative frequency instead of by the highest frequency.",
    "Forgetting to use n/2 (not the highest cumulative frequency) to find the median class.",
    "Misremembering the empirical relation — it is Mode = 3 Median − 2 Mean.",
  ],
  mcqs: [
    { id: "st1", difficulty: "easy", q: "The mean of grouped data by the direct method is:", options: ["Σfᵢ/Σxᵢ", "Σfᵢxᵢ", "Σxᵢ / n", "Σfᵢxᵢ / Σfᵢ"], answer: 3, explanation: "Mean = Σfᵢxᵢ / Σfᵢ." },
    { id: "st2", difficulty: "easy", q: "The mode is the value that occurs:", options: ["least often", "first", "most often", "in the middle"], answer: 2, explanation: "Mode = the most frequently occurring value." },
    { id: "st3", difficulty: "easy", q: "The median is the:", options: ["largest value", "most frequent value", "middle value", "average value"], answer: 2, explanation: "Median is the middle value of ordered data." },
    { id: "st4", difficulty: "medium", q: "The modal class is the class with the:", options: ["lowest frequency", "highest frequency", "largest class mark", "smallest class mark"], answer: 1, explanation: "The modal class has the highest frequency." },
    { id: "st5", difficulty: "medium", q: "The empirical relationship is:", options: ["Mean = 3 Mode − 2 Median", "Mode = 3 Median − 2 Mean", "Mode = Mean − Median", "Median = Mean + Mode"], answer: 1, explanation: "Mode = 3 Median − 2 Mean." },
    { id: "st6", difficulty: "easy", q: "Σfᵢ in a frequency distribution represents:", options: ["the total number of observations (n)", "the highest frequency", "the mean", "the median"], answer: 0, explanation: "Σfᵢ is the total frequency n." },
    { id: "st7", difficulty: "easy", q: "The class mark of the interval 10–20 is:", options: ["15", "10", "30", "20"], answer: 0, explanation: "(10 + 20)/2 = 15." },
    { id: "st8", difficulty: "medium", q: "To find the median class, we look for where the cumulative frequency first reaches:", options: ["2n", "n/2", "n", "n/4"], answer: 1, explanation: "The median class contains the n/2-th observation." },
    { id: "st9", difficulty: "medium", q: "If the mean is 40 and the median is 36, the mode is:", options: ["44", "30", "32", "28"], answer: 3, explanation: "Mode = 3(36) − 2(40) = 108 − 80 = 28." },
    { id: "st10", difficulty: "hard", q: "For the data 0–10, 10–20, 20–30 with frequencies 5, 8, 7, the mean is:", options: ["14", "17", "16.5", "15.5"], answer: 2, explanation: "Σfx = 5(5)+8(15)+7(25)=25+120+175=320; Σf=20; mean=320/20=16." },
  ],
  shortQuestions: [
    { q: "Write the formula for the median of grouped data.", a: "Median = l + [(n/2 − cf)/f] × h." },
    { q: "How do you find the class mark?", a: "Class mark = (lower limit + upper limit)/2." },
    { q: "If mode = 24 and mean = 30, find the median.", a: "From Mode = 3 Median − 2 Mean: 24 = 3M − 60 ⇒ 3M = 84 ⇒ M = 28." },
  ],
  longQuestions: [
    { q: "Find the mean of: 0–20 (f=7), 20–40 (f=10), 40–60 (f=8) using the direct method.", a: "Class marks 10, 30, 50. Σfx = 7(10)+10(30)+8(50)=70+300+400=770. Σf = 25. Mean = 770/25 = 30.8." },
    { q: "The frequencies of classes 0–10, 10–20, 20–30, 30–40 are 6, 10, 8, 6. Find the modal class and explain how you would compute the mode.", a: "The highest frequency is 10 in the class 10–20, so that is the modal class. Then apply Mode = l + [(f₁ − f₀)/(2f₁ − f₀ − f₂)]h with l = 10, f₁ = 10, f₀ = 6, f₂ = 8, h = 10, giving Mode = 10 + [(10 − 6)/(20 − 6 − 8)]×10 = 10 + (4/6)×10 ≈ 16.67." },
  ],
  hots: [
    { q: "Can the mean, median and mode of a data set all be equal? When?", a: "Yes — for a perfectly symmetric distribution (such as a normal-shaped data set), the mean, median and mode coincide." },
    { q: "Why is the median sometimes preferred over the mean?", a: "The median is not affected by extreme values (outliers), so it represents skewed data better than the mean." },
  ],
  revisionNotes: [
    "Mean (direct) = Σfᵢxᵢ / Σfᵢ; use class marks.",
    "Mode uses the modal class (highest frequency).",
    "Median uses the median class (where cf reaches n/2).",
    "Empirical: Mode = 3 Median − 2 Mean.",
  ],
  keyTakeaways: [
    "Always use class marks, not class limits, for the mean.",
    "Build a cumulative-frequency column for the median.",
    "The empirical relation links all three measures.",
  ],
  faq: [
    { q: "What is the difference between mean, median and mode?", a: "The mean is the average, the median is the middle value, and the mode is the most frequent value." },
    { q: "Which method is easiest for the mean?", a: "The assumed-mean method reduces large multiplications and is often the quickest for grouped data." },
    { q: "How do I choose the median class?", a: "Find n/2, then locate the class where the cumulative frequency first reaches or exceeds n/2." },
  ],
  related: [
    { classId: "10", subject: "maths", slug: "probability" },
  ],
};

export default chapter;
