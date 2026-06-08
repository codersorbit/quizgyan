import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "9",
  subject: "maths",
  slug: "statistics",
  title: "Statistics",
  order: 12,
  seoTitle: "Statistics Class 9 CBSE Notes, MCQs, Quiz, Mean Median & Mode",
  metaDescription:
    "Class 9 Maths Statistics: collection and presentation of data, bar graphs and histograms, mean, median and mode of ungrouped data, solved examples and MCQ quiz with answers.",
  overview:
    "Statistics is about collecting, organising and making sense of data. This Class 9 chapter covers how data is presented (bar graphs, histograms, frequency tables) and the three measures of central tendency for ungrouped data — the mean, median and mode. The ideas are intuitive, and the calculations are quick once you know each definition.",
  objectives: [
    "Organise data into a frequency distribution.",
    "Represent data using bar graphs and histograms.",
    "Calculate the mean of ungrouped data.",
    "Find the median of ungrouped data.",
    "Find the mode of ungrouped data.",
  ],
  concepts: [
    {
      heading: "Data and its presentation",
      body: "Raw data is organised into a frequency distribution showing how often each value occurs. It can be displayed using bar graphs (separated bars) or histograms (joined bars for continuous class intervals), which make patterns easy to see.",
    },
    {
      heading: "Mean",
      body: "The mean (average) of n observations is their sum divided by n: mean = (sum of all observations) ÷ (number of observations). It uses every value in the data.",
    },
    {
      heading: "Median",
      body: "The median is the middle value when the data is arranged in order. For an odd number of values it is the middle one; for an even number it is the average of the two middle values.",
    },
    {
      heading: "Mode",
      body: "The mode is the value that occurs most often in the data. A data set can have one mode, more than one mode, or no mode at all.",
    },
  ],
  formulas: [
    { name: "Mean", formula: "mean = Σx ÷ n" },
    { name: "Median (odd n)", formula: "the ((n + 1)/2)-th value (data ordered)" },
    { name: "Median (even n)", formula: "average of the (n/2)-th and (n/2 + 1)-th values" },
    { name: "Mode", formula: "the most frequently occurring value" },
  ],
  definitions: [
    { term: "Mean", meaning: "The arithmetic average of a set of observations." },
    { term: "Median", meaning: "The middle value of data arranged in order." },
    { term: "Mode", meaning: "The observation that occurs most frequently." },
    { term: "Frequency", meaning: "The number of times a particular value occurs in the data." },
  ],
  examples: [
    {
      problem: "Find the mean of 2, 4, 6, 8, 10.",
      solution: "Sum = 30, number of values = 5. Mean = 30 ÷ 5 = 6.",
    },
    {
      problem: "Find the median of 3, 5, 7, 9, 11.",
      solution:
        "The data is already ordered and has 5 (odd) values, so the median is the middle (3rd) value = 7.",
    },
    {
      problem: "Find the mode of 2, 2, 3, 4, 2, 5.",
      solution: "The value 2 occurs three times, more than any other, so the mode is 2.",
    },
  ],
  commonMistakes: [
    "Finding the median without first arranging the data in order.",
    "For an even number of values, forgetting to average the two middle values.",
    "Confusing the mode (most frequent) with the median (middle).",
    "Dividing by the wrong count when finding the mean.",
  ],
  mcqs: [
    { id: "st1", difficulty: "easy", q: "The mean of n observations is their sum divided by:", options: ["n − 1", "2n", "n + 1", "n"], answer: 3, explanation: "Mean = Σx ÷ n." },
    { id: "st2", difficulty: "easy", q: "The middle value of ordered data is the:", options: ["mean", "range", "median", "mode"], answer: 2, explanation: "The median is the middle value." },
    { id: "st3", difficulty: "easy", q: "The most frequently occurring value is the:", options: ["frequency", "mean", "mode", "median"], answer: 2, explanation: "The mode occurs most often." },
    { id: "st4", difficulty: "medium", q: "The mean of 4, 6, 8, 10 is:", options: ["6", "7", "8", "28"], answer: 1, explanation: "Sum 28 ÷ 4 = 7." },
    { id: "st5", difficulty: "medium", q: "The median of 2, 4, 6, 8 is:", options: ["5", "4", "8", "6"], answer: 0, explanation: "Average of the two middle values 4 and 6 = 5." },
    { id: "st6", difficulty: "easy", q: "Bars that are joined together represent a:", options: ["histogram", "pie chart", "bar graph", "line graph"], answer: 0, explanation: "A histogram has joined bars for continuous intervals." },
    { id: "st7", difficulty: "easy", q: "The number of times a value occurs is its:", options: ["frequency", "mean", "mode", "median"], answer: 0, explanation: "That count is the frequency." },
    { id: "st8", difficulty: "medium", q: "The mode of 1, 3, 3, 5, 7 is:", options: ["7", "3", "1", "5"], answer: 1, explanation: "3 occurs most often." },
    { id: "st9", difficulty: "medium", q: "The median of 5, 1, 3, 9, 7 (after ordering) is:", options: ["9", "5", "7", "3"], answer: 1, explanation: "Ordered: 1, 3, 5, 7, 9; middle value = 5." },
    { id: "st10", difficulty: "hard", q: "If the mean of 4, 6, x, 10 is 7, then x is:", options: ["9", "7", "6", "8"], answer: 3, explanation: "(4 + 6 + x + 10)/4 = 7 ⇒ 20 + x = 28 ⇒ x = 8." },
    { id: "bk9m13", difficulty: "medium", q: "The mean (average) of 2, 4, 6, 8 and 10 is?", options: ["5", "6", "30", "8"], answer: 1, explanation: "Sum = 30; 30 ÷ 5 = 6." },
    { id: "bk9m14", difficulty: "medium", q: "The value that occurs most frequently in a data set is the?", options: ["Mean", "Median", "Mode", "Range"], answer: 2, explanation: "The mode is the most frequent value." },
  ],
  shortQuestions: [
    { q: "What is the mean of 10, 20, 30?", a: "(10 + 20 + 30)/3 = 20." },
    { q: "Find the median of 4, 4, 6, 8, 10.", a: "Middle (3rd) value of the ordered data = 6." },
    { q: "Can a data set have more than one mode?", a: "Yes — if two or more values occur with the same highest frequency." },
  ],
  longQuestions: [
    { q: "The marks of 7 students are 35, 40, 45, 40, 50, 40, 55. Find the mean, median and mode.", a: "Sum = 305, so mean = 305 ÷ 7 ≈ 43.6. Ordered data: 35, 40, 40, 40, 45, 50, 55; median (4th value) = 40. The value 40 occurs three times, so the mode = 40." },
    { q: "Explain the difference between a bar graph and a histogram.", a: "A bar graph uses bars with gaps to compare distinct categories, while a histogram uses bars with no gaps to show the frequency of data in continuous class intervals. The width of histogram bars represents the class size." },
  ],
  hots: [
    { q: "The mean of five numbers is 18. If one number is removed, the mean becomes 16. What is the removed number?", a: "Sum of five = 90; sum of remaining four = 64. Removed number = 90 − 64 = 26." },
    { q: "Why is the median sometimes more representative than the mean?", a: "Because the median is not affected by extreme values (outliers), it better represents data that has a few very large or very small values." },
  ],
  revisionNotes: [
    "Mean = sum ÷ number of observations.",
    "Median = middle value of ordered data (average the two middle if even).",
    "Mode = most frequent value.",
    "Histograms have joined bars; bar graphs have gaps.",
  ],
  keyTakeaways: [
    "Order the data first before finding the median.",
    "The mean uses all values; the mode uses frequency; the median uses position.",
    "Pick the right graph for the type of data.",
  ],
  faq: [
    { q: "What is the difference between mean, median and mode?", a: "The mean is the average, the median is the middle value of ordered data, and the mode is the most frequent value." },
    { q: "How do I find the median for an even number of observations?", a: "Arrange the data in order and take the average of the two middle values." },
    { q: "What is a histogram?", a: "A graph of joined bars showing the frequency of data over continuous class intervals." },
  ],
  related: [
    { classId: "9", subject: "maths", slug: "surface-areas-and-volumes" },
    { classId: "9", subject: "maths", slug: "number-systems" },
  ],
};

export default chapter;
