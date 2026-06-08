import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "7",
  subject: "maths",
  slug: "connecting-the-dots",
  title: "Connecting the Dots",
  order: 13,
  seoTitle: "Connecting the Dots Class 7 Maths (Ganita Prakash) — Data Handling MCQs",
  metaDescription:
    "Class 7 Maths Connecting the Dots (Ganita Prakash): collecting and organising data, bar graphs and double bar graphs, mean, median and mode, and an introduction to chance, with examples and an MCQ quiz.",
  overview:
    "Data only tells a story when we connect the dots. This Class 7 Ganita Prakash chapter organises data, represents it with bar graphs and double bar graphs, summarises it using the mean, median and mode, and takes a first look at chance and probability.",
  objectives: [
    "Organise data into tables.",
    "Draw and read bar and double bar graphs.",
    "Find the mean, median and mode.",
    "Describe the chance of an event.",
  ],
  concepts: [
    {
      heading: "Organising data",
      body: "Raw data is a jumble until it is organised. We arrange it into a frequency table that lists each value or category with how often it occurs. Organising makes patterns visible and is the first step before drawing any graph or finding an average.",
    },
    {
      heading: "Bar graphs and double bar graphs",
      body: "A bar graph shows data as bars of equal width whose heights represent the values, making comparison easy. A double bar graph places two bars side by side for each category, which is ideal for comparing two sets of data — like marks of two students across subjects.",
    },
    {
      heading: "Mean, median and mode",
      body: "These three averages summarise data. The mean is the sum of all values divided by how many there are. The median is the middle value when the data is arranged in order. The mode is the value that occurs most often. Each gives a different sense of a 'typical' value.",
    },
    {
      heading: "Chance and probability",
      body: "Some events are certain, some impossible, and many are in between. The chance of an event is measured by probability, found as the number of favourable outcomes divided by the total number of outcomes. For a fair coin, the probability of heads is 1/2.",
    },
  ],
  formulas: [
    { name: "Mean", formula: "mean = sum of values ÷ number of values" },
    { name: "Probability", formula: "P(event) = favourable outcomes ÷ total outcomes" },
  ],
  definitions: [
    { term: "Frequency", meaning: "The number of times a value or category occurs." },
    { term: "Mean", meaning: "The sum of all values divided by their count (the average)." },
    { term: "Median", meaning: "The middle value when data is arranged in order." },
    { term: "Mode", meaning: "The value that appears most often in the data." },
  ],
  examples: [
    {
      problem: "Find the mean of 4, 6, 8, 10.",
      solution: "(4 + 6 + 8 + 10) ÷ 4 = 28 ÷ 4 = 7.",
    },
    {
      problem: "Find the mode of 2, 3, 3, 5, 7.",
      solution: "3, since it occurs most often.",
    },
    {
      problem: "What is the probability of getting heads on a fair coin?",
      solution: "1 favourable out of 2 outcomes = 1/2.",
    },
  ],
  commonMistakes: [
    "Finding the median without first ordering the data.",
    "Confusing the mean (average) with the mode (most frequent).",
    "Drawing bars of unequal width in a bar graph.",
    "Forgetting that probability lies between 0 and 1.",
  ],
  mcqs: [
    { id: "cd1", difficulty: "easy", q: "The average found by dividing the sum by the count is the:", options: ["mean", "mode", "median", "range"], answer: 0, explanation: "Sum ÷ count is the mean." },
    { id: "cd2", difficulty: "easy", q: "The value that occurs most often is the:", options: ["mean", "mode", "median", "total"], answer: 1, explanation: "Most frequent value is the mode." },
    { id: "cd3", difficulty: "medium", q: "The mean of 5, 10, 15 is:", options: ["15", "30", "10", "5"], answer: 2, explanation: "(5+10+15) ÷ 3 = 10." },
    { id: "cd4", difficulty: "medium", q: "The median of 3, 7, 9, 11, 13 is:", options: ["7", "11", "13", "9"], answer: 3, explanation: "Middle value (already ordered) is 9." },
    { id: "cd5", difficulty: "easy", q: "A graph with two bars per category is a:", options: ["double bar graph", "pie chart", "line graph", "pictograph"], answer: 0, explanation: "Two bars per category = double bar graph." },
    { id: "cd6", difficulty: "medium", q: "The probability of a fair coin showing heads is:", options: ["1", "1/2", "0", "2"], answer: 1, explanation: "1 of 2 outcomes = 1/2." },
    { id: "cd7", difficulty: "hard", q: "The mode of 2, 4, 4, 4, 6, 9 is:", options: ["6", "2", "4", "9"], answer: 2, explanation: "4 occurs most often." },
    { id: "cd8", difficulty: "easy", q: "Before finding the median, the data must be:", options: ["doubled", "squared", "added", "arranged in order"], answer: 3, explanation: "Order the data first." },
    { id: "cd9", difficulty: "medium", q: "The probability of a certain event is:", options: ["1", "0", "1/2", "2"], answer: 0, explanation: "A certain event has probability 1." },
    { id: "cd10", difficulty: "hard", q: "The mean of 4, 6, 8, 10 is:", options: ["6", "7", "8", "9"], answer: 1, explanation: "28 ÷ 4 = 7." },
  ],
  shortQuestions: [
    { q: "How is the mean calculated?", a: "Divide the sum of the values by the number of values." },
    { q: "What is the mode?", a: "The value that occurs most often in the data." },
    { q: "What is the probability of an impossible event?", a: "0." },
  ],
  longQuestions: [
    { q: "Explain the mean, median and mode, with an example data set.", a: "These three measures summarise data in different ways. The mean is the sum of all the values divided by how many there are — for the data 4, 6, 8, 10 the mean is 28 ÷ 4 = 7. The median is the middle value once the data is arranged in order; for an odd number of values it is the central one, and for an even number it is the average of the two middle values. The mode is the value that appears most often. For example, in 2, 3, 3, 5, 7 the mode is 3. Together they describe what is 'typical', and which is most useful depends on the data." },
    { q: "What is probability, and how is it found for simple events?", a: "Probability measures the chance that an event will happen, on a scale from 0 (impossible) to 1 (certain). For equally likely outcomes, it is found by dividing the number of favourable outcomes by the total number of possible outcomes. For example, a fair coin has two outcomes, heads and tails, so the probability of heads is 1 ÷ 2 = 1/2. A fair die has six outcomes, so the probability of rolling a 3 is 1/6. Events that are sure to happen have probability 1, and those that cannot happen have probability 0." },
  ],
  hots: [
    { q: "The mean of four numbers is 10. Three of them are 8, 9 and 11. What is the fourth?", a: "The total is 4 × 10 = 40; the fourth is 40 − (8 + 9 + 11) = 12." },
    { q: "A bag has 2 red and 3 blue balls. What is the probability of drawing a red ball?", a: "2 favourable out of 5 total = 2/5." },
  ],
  revisionNotes: [
    "Organise data into a frequency table first.",
    "Bar graph: equal-width bars; double bar graph compares two sets.",
    "Mean = sum ÷ count; median = middle (ordered); mode = most frequent.",
    "Probability = favourable ÷ total, between 0 and 1.",
  ],
  keyTakeaways: [
    "Averages summarise a data set in different ways.",
    "Double bar graphs compare two data sets at once.",
    "Probability measures chance from 0 to 1.",
  ],
  faq: [
    { q: "What is the difference between mean and mode?", a: "The mean is the average; the mode is the most frequent value." },
    { q: "How do I find the median?", a: "Arrange the data in order and take the middle value." },
    { q: "What does probability 1 mean?", a: "The event is certain to happen." },
  ],
  related: [
    { classId: "6", subject: "maths", slug: "data-handling-and-presentation" },
    { classId: "9", subject: "maths", slug: "statistics" },
  ],
};

export default chapter;
