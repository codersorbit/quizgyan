import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "6",
  subject: "maths",
  slug: "data-handling-and-presentation",
  title: "Data Handling and Presentation",
  order: 4,
  seoTitle: "Data Handling and Presentation Class 6 Maths (Ganita Prakash) — Notes & MCQs",
  metaDescription:
    "Class 6 Maths Data Handling and Presentation (Ganita Prakash): collecting and organising data, tally marks, pictographs and bar graphs, and reading information from them, with examples and an MCQ quiz.",
  overview:
    "Information collected as numbers or facts is called data. This Class 6 Ganita Prakash chapter shows how to organise data using tally marks and tables, present it as pictographs and bar graphs, and read useful information back out of these pictures.",
  objectives: [
    "Collect and organise data into a table.",
    "Record data using tally marks.",
    "Read and draw pictographs and bar graphs.",
    "Interpret information from a data display.",
  ],
  concepts: [
    {
      heading: "Data and tally marks",
      body: "Data is a collection of facts or numbers gathered for a purpose, such as the favourite fruits of a class. To count quickly we use tally marks, drawing one stroke per item and crossing every fifth one, so groups of five are easy to total.",
    },
    {
      heading: "Organising data in a table",
      body: "Raw data is hard to read, so we organise it into a frequency table that lists each category beside how many times it occurs (its frequency). A clear table makes comparisons and totals straightforward.",
    },
    {
      heading: "Pictographs",
      body: "A pictograph shows data using a symbol or picture to stand for a fixed number of items. A key tells the value of one symbol, so if one apple picture means 5 apples, three pictures mean 15 apples. Half a symbol shows half that value.",
    },
    {
      heading: "Bar graphs",
      body: "A bar graph uses bars of equal width whose heights (or lengths) represent the frequencies. Taller bars mean larger values, so a bar graph makes it easy to compare categories at a glance and to read each value against the scale.",
    },
  ],
  formulas: [
    { name: "Pictograph value", formula: "value = number of symbols × value of one symbol" },
  ],
  definitions: [
    { term: "Data", meaning: "A collection of facts or numbers gathered for a purpose." },
    { term: "Tally marks", meaning: "Strokes used to count, grouped in fives for easy totalling." },
    { term: "Frequency", meaning: "The number of times a value or category occurs." },
    { term: "Pictograph", meaning: "A display that represents data using pictures or symbols." },
  ],
  examples: [
    {
      problem: "How is the number 7 shown in tally marks?",
      solution: "One group of five (four strokes crossed) followed by two more strokes.",
    },
    {
      problem: "In a pictograph, one star = 10 books. How many books do 4 stars show?",
      solution: "4 × 10 = 40 books.",
    },
    {
      problem: "In a bar graph, which category is most popular?",
      solution: "The one shown by the tallest (longest) bar.",
    },
  ],
  commonMistakes: [
    "Forgetting the key when reading a pictograph.",
    "Drawing bars of unequal width in a bar graph.",
    "Miscounting tally marks by ignoring the grouping of five.",
    "Reading a bar's height against the wrong scale marking.",
  ],
  mcqs: [
    { id: "dh1", difficulty: "easy", q: "A collection of facts or numbers is called:", options: ["a graph", "data", "a tally", "a scale"], answer: 1, explanation: "Such a collection is called data." },
    { id: "dh2", difficulty: "easy", q: "Tally marks are usually grouped in:", options: ["twos", "threes", "fives", "tens"], answer: 2, explanation: "Every fifth stroke crosses the previous four." },
    { id: "dh3", difficulty: "medium", q: "The number of times a category occurs is its:", options: ["frequency", "key", "axis", "scale"], answer: 0, explanation: "That count is the frequency." },
    { id: "dh4", difficulty: "medium", q: "In a pictograph, one symbol = 5 cars. 6 symbols show:", options: ["11 cars", "56 cars", "25 cars", "30 cars"], answer: 3, explanation: "6 × 5 = 30 cars." },
    { id: "dh5", difficulty: "easy", q: "Bars in a bar graph all have the same:", options: ["height", "colour", "width", "value"], answer: 2, explanation: "Bars have equal width; heights vary." },
    { id: "dh6", difficulty: "medium", q: "The tallest bar in a bar graph shows the:", options: ["smallest value", "largest value", "average", "total"], answer: 1, explanation: "Taller bar = larger value." },
    { id: "dh7", difficulty: "hard", q: "One picture = 4 trees. How many pictures show 14 trees?", options: ["3 pictures", "4 pictures", "three and a half pictures", "2 pictures"], answer: 2, explanation: "14 ÷ 4 = 3½, so three and a half symbols." },
    { id: "dh8", difficulty: "easy", q: "The symbol meaning in a pictograph is given by the:", options: ["key", "title", "bar", "tally"], answer: 0, explanation: "The key tells the value of one symbol." },
    { id: "dh9", difficulty: "medium", q: "Which display uses pictures to represent data?", options: ["bar graph", "table", "pictograph", "tally chart"], answer: 2, explanation: "A pictograph uses pictures/symbols." },
    { id: "dh10", difficulty: "hard", q: "A table that lists categories with their counts is a:", options: ["pictograph", "bar graph", "number line", "frequency table"], answer: 3, explanation: "It is a frequency table." },
  ],
  shortQuestions: [
    { q: "Why do we use tally marks?", a: "To count quickly, grouping strokes in fives for easy totalling." },
    { q: "What does the key of a pictograph tell us?", a: "How many items one symbol stands for." },
    { q: "What does the height of a bar in a bar graph represent?", a: "The frequency or value of that category." },
  ],
  longQuestions: [
    { q: "Explain how a pictograph is made and read, with an example.", a: "A pictograph represents data using a symbol that stands for a fixed number of items, stated in a key. To make one, choose a symbol and a suitable value (say one book picture = 10 books), then draw the right number of symbols for each category, using a part-symbol for part of the value. To read it, multiply the number of symbols by the key value: if 'fiction' shows 3½ book symbols and one symbol means 10 books, that is 3½ × 10 = 35 books." },
    { q: "Compare a bar graph and a pictograph as ways of presenting data.", a: "Both turn a table of frequencies into a picture that is easier to compare. A pictograph uses repeated symbols with a key, which is friendly and visual but awkward for values that are not neat multiples of the key. A bar graph uses bars of equal width whose heights are read against a scale, which handles any value precisely and makes comparing categories very quick. Bar graphs are usually clearer for larger or uneven numbers, while pictographs are appealing for simple data." },
  ],
  hots: [
    { q: "In a pictograph one symbol = 8 mangoes. A row has 2½ symbols. How many mangoes is that?", a: "2½ × 8 = 20 mangoes." },
    { q: "Why must all bars in a bar graph have equal width?", a: "So that only the height shows the value; unequal widths would make comparison misleading." },
  ],
  revisionNotes: [
    "Data = collected facts/numbers; organise in a frequency table.",
    "Tally marks group in fives.",
    "Pictograph: symbols with a key; value = symbols × key.",
    "Bar graph: equal-width bars; height = value.",
  ],
  keyTakeaways: [
    "Organising data makes it easy to read and compare.",
    "A pictograph always needs a key.",
    "Bar height (not width) carries the value.",
  ],
  faq: [
    { q: "What is data?", a: "A collection of facts or numbers gathered for a purpose." },
    { q: "What is frequency?", a: "How many times a value or category occurs." },
    { q: "What is the difference between a pictograph and a bar graph?", a: "A pictograph uses symbols with a key; a bar graph uses bars read against a scale." },
  ],
  related: [
    { classId: "6", subject: "maths", slug: "number-play" },
    { classId: "9", subject: "maths", slug: "statistics" },
  ],
};

export default chapter;
