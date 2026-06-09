import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  board: "wbbpe",
  classId: "1",
  subject: "english",
  slug: "words-around-us",
  title: "Words Around Us",
  order: 4,
  seoTitle: "Words Around Us — WBBPE Class 1 English (Amar Boi) | StudyMatic",
  metaDescription:
    "WBBPE Class 1 English: learn English names of everyday things — pen, book, bag, table, chair. Simple notes, Bengali help and a quiz.",
  overview:
    "In this chapter we learn the English names of things around us — in our classroom and at home, like pen, book, bag and table.",
  objectives: [
    "Name classroom things in English.",
    "Name some things at home in English.",
    "Match a thing to its English word.",
    "Use the words in simple talk.",
  ],
  concepts: [
    {
      heading: "Classroom things",
      body: "Some things we see in class — pen, pencil, book, bag and board. We write with a pen or pencil and read a book.",
    },
    {
      heading: "Things at home",
      body: "Some things we see at home — table, chair, cup and door. We sit on a chair and drink from a cup.",
    },
    {
      heading: "Point and name",
      body: "Point to a thing and say its English name. This helps us learn new words quickly.",
    },
  ],
  formulas: [],
  definitions: [
    { term: "Pen (কলম)", meaning: "A thing we write with." },
    { term: "Book (বই)", meaning: "A thing we read." },
    { term: "Bag (ব্যাগ)", meaning: "A thing we carry our books in." },
  ],
  examples: [
    { problem: "We write with a ___.", solution: "A pen (or pencil)." },
    { problem: "We read a ___.", solution: "A book." },
  ],
  commonMistakes: [
    "Mixing up the English names of two things.",
    "Forgetting the new word — practise by pointing and naming.",
  ],
  mcqs: [
    {
      id: "w1e-wa-1",
      q: "We write with a ___.",
      options: ["chair", "cup", "door", "pen"],
      answer: 3,
      explanation: "We write with a pen.",
      difficulty: "easy",
    },
    {
      id: "w1e-wa-2",
      q: "We read a ___.",
      options: ["book", "table", "bag", "cup"],
      answer: 0,
      explanation: "We read a book.",
      difficulty: "easy",
    },
    {
      id: "w1e-wa-3",
      q: "We sit on a ___.",
      options: ["pen", "chair", "book", "board"],
      answer: 1,
      explanation: "We sit on a chair.",
      difficulty: "easy",
    },
    {
      id: "w1e-wa-4",
      q: "Which one do you carry your books in?",
      options: ["door", "cup", "bag", "board"],
      answer: 2,
      explanation: "We carry books in a bag.",
      difficulty: "medium",
    },
    {
      id: "w1e-wa-5",
      q: "The English word for 'কলম' is ___.",
      options: ["cup", "book", "bag", "pen"],
      answer: 3,
      explanation: "'কলম' is 'pen' in English.",
      difficulty: "medium",
    },
  ],
  shortQuestions: [
    { q: "What do we drink from?", a: "A cup." },
    { q: "The English word for 'বই' is?", a: "Book." },
  ],
  longQuestions: [
    { q: "Name three things you see in your classroom.", a: "For example — pen, book and bag." },
  ],
  hots: [
    {
      q: "You want to write and then read. Which two things do you need?",
      a: "A pen (to write) and a book (to read).",
    },
  ],
  revisionNotes: [
    "Classroom: pen, pencil, book, bag, board.",
    "Home: table, chair, cup, door.",
    "Point to a thing and name it.",
  ],
  keyTakeaways: ["Name everyday things in English.", "Match things to words."],
  faq: [
    { q: "What is 'বই' in English?", a: "Book." },
  ],
  related: [
    { board: "wbbpe", classId: "1", subject: "english", slug: "beginning-sounds" },
    { board: "wbbpe", classId: "1", subject: "english", slug: "naming-animals" },
  ],
};

export default chapter;
