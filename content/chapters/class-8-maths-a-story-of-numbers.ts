import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "8",
  subject: "maths",
  slug: "a-story-of-numbers",
  title: "A Story of Numbers",
  order: 3,
  seoTitle: "A Story of Numbers Class 8 Maths (Ganita Prakash) — Number Systems Notes & MCQs",
  metaDescription:
    "Class 8 Maths A Story of Numbers (Ganita Prakash): how counting and numerals developed, Roman and Egyptian number systems, the Indian decimal place-value system and zero, base systems and place value, with solved examples and an MCQ quiz.",
  overview:
    "Numbers have a long history. This Class 8 Ganita Prakash chapter traces how people first counted with tally marks and body parts, how different civilizations built number systems like the Roman and Egyptian ones, and how the Indian decimal system with the digits 0–9 and place value spread across the world to become the numerals we use today.",
  objectives: [
    "Describe early ways of counting and recording numbers.",
    "Read and write Roman numerals.",
    "Explain place value in the decimal (base-10) system.",
    "Understand how numbers can be grouped in other bases.",
  ],
  concepts: [
    {
      heading: "Early counting",
      body: "Before written numerals, people counted by one-to-one matching — a pebble or a notch for each object — and by using body parts and tally marks. Tally marks group counts (often in fives) so large numbers can be read quickly, but they become clumsy for very big numbers.",
    },
    {
      heading: "Number systems of civilizations",
      body: "Many civilizations invented symbols for numbers. The Egyptians and Romans used additive systems, writing a number by adding the values of its symbols. In Roman numerals I = 1, V = 5, X = 10, L = 50, C = 100, D = 500 and M = 1000, so XII means 12; a smaller symbol before a larger one means subtraction, as in IX = 9.",
    },
    {
      heading: "The Indian decimal system and zero",
      body: "The Indian number system uses just ten digits, 0 to 9, together with place value, and importantly includes zero as a number and a place holder. This idea spread through the Arab world to the rest of the world, which is why these are called Hindu–Arabic numerals. Place value makes arithmetic far easier than additive systems.",
    },
    {
      heading: "Place value and bases",
      body: "In base ten, each place is ten times the one to its right, so 345 means 3 hundreds, 4 tens and 5 ones: 3×100 + 4×10 + 5×1. Numbers can also be grouped in other bases — for example grouping in twos gives base two — which shows that place value is a general idea, not tied only to ten.",
    },
  ],
  formulas: [
    { name: "Place value expansion", formula: "345 = 3×100 + 4×10 + 5×1" },
    { name: "Roman numerals", formula: "I=1, V=5, X=10, L=50, C=100, D=500, M=1000" },
  ],
  definitions: [
    { term: "Numeral", meaning: "A symbol or group of symbols used to represent a number." },
    { term: "Place value", meaning: "The value of a digit according to its position in a number." },
    { term: "Base", meaning: "The number of single digits a system uses before grouping; base ten uses 0–9." },
    { term: "Tally marks", meaning: "Simple strokes used to count, usually grouped in fives." },
  ],
  examples: [
    {
      problem: "Write 27 in Roman numerals.",
      solution: "27 = 20 + 7 = XX + VII = XXVII.",
    },
    {
      problem: "Write the place-value expansion of 4072.",
      solution: "4072 = 4×1000 + 0×100 + 7×10 + 2×1.",
    },
    {
      problem: "What does the Roman numeral XL represent, and why?",
      solution: "A smaller symbol (X = 10) before a larger one (L = 50) means subtraction, so XL = 50 − 10 = 40.",
    },
  ],
  commonMistakes: [
    "Writing Roman numerals with four identical symbols (using IIII instead of IV).",
    "Forgetting that zero acts as a place holder, e.g. dropping the 0 in 4072.",
    "Mixing up place value with face value (in 345 the 3 has value 300, not 3).",
    "Thinking number symbols were the same in all ancient cultures.",
  ],
  mcqs: [
    { id: "sn1", difficulty: "easy", q: "The Roman numeral for 10 is:", options: ["V", "X", "L", "C"], answer: 1, explanation: "X stands for 10." },
    { id: "sn2", difficulty: "medium", q: "Which number system uses place value and the digit zero?", options: ["Roman", "Egyptian", "decimal (Indian)", "tally"], answer: 2, explanation: "The Indian decimal system uses place value and zero." },
    { id: "sn3", difficulty: "easy", q: "IX in Roman numerals equals:", options: ["11", "19", "21", "9"], answer: 3, explanation: "A smaller symbol before a larger one subtracts: 10 − 1 = 9." },
    { id: "sn4", difficulty: "medium", q: "In 345, the digit 3 has a place value of:", options: ["3", "30", "300", "345"], answer: 2, explanation: "3 is in the hundreds place, so its value is 300." },
    { id: "sn5", difficulty: "easy", q: "Tally marks are usually grouped in:", options: ["twos", "fives", "tens", "threes"], answer: 1, explanation: "Tally marks are commonly bundled in fives." },
    { id: "sn6", difficulty: "medium", q: "Hindu–Arabic numerals use how many digits?", options: ["nine", "twelve", "ten", "five"], answer: 2, explanation: "They use ten digits, 0 to 9." },
    { id: "sn7", difficulty: "easy", q: "The Roman numeral L stands for:", options: ["50", "100", "500", "5"], answer: 0, explanation: "L = 50." },
    { id: "sn8", difficulty: "hard", q: "In base ten, each place is ___ times the place to its right.", options: ["two", "five", "hundred", "ten"], answer: 3, explanation: "Each place is ten times the next, e.g. tens vs ones." },
    { id: "sn9", difficulty: "medium", q: "Roman and Egyptian number systems are mainly:", options: ["place-value systems", "decimal systems", "binary systems", "additive systems"], answer: 3, explanation: "They add up symbol values to form a number." },
    { id: "sn10", difficulty: "hard", q: "The expansion 5×1000 + 0×100 + 6×10 + 3 represents:", options: ["5063", "563", "5603", "50603"], answer: 0, explanation: "5×1000 + 6×10 + 3 = 5063, with 0 in the hundreds place." },
  ],
  shortQuestions: [
    { q: "Why was the invention of zero important?", a: "Zero acts as a number and a place holder, making place-value notation and easy arithmetic possible." },
    { q: "Write 44 in Roman numerals.", a: "XLIV (XL = 40 and IV = 4)." },
    { q: "What is the difference between place value and face value?", a: "Face value is the digit itself; place value is the digit multiplied by the value of its position." },
  ],
  longQuestions: [
    { q: "Explain how the Roman number system works, with examples and a limitation.", a: "Roman numerals use symbols I, V, X, L, C, D and M with fixed values, combined mainly by addition: XV = 10 + 5 = 15. When a smaller symbol is placed before a larger one it is subtracted: IV = 4, IX = 9, XL = 40. A limitation is that there is no zero and no place value, so writing and calculating with very large numbers is awkward compared with the decimal system." },
    { q: "Describe how the decimal place-value system represents numbers and why it is powerful.", a: "The decimal system uses ten digits (0–9) and gives each position a value ten times the one to its right: ones, tens, hundreds, thousands, and so on. A number like 4072 means 4×1000 + 0×100 + 7×10 + 2×1, where zero holds the empty hundreds place. Because only ten symbols and their positions encode any number, arithmetic operations like addition and multiplication follow simple, regular rules — which is why this system spread worldwide." },
  ],
  hots: [
    { q: "Why is 2025 easier to write in decimal than in a purely additive system?", a: "In decimal, place value lets four digits capture the whole value; an additive system would need many repeated symbols, making it long and error-prone." },
    { q: "If we grouped in twos instead of tens, how would counting change?", a: "We would use base two, where each place is twice the previous one and only the digits 0 and 1 appear; the same number would be written with more digits but the place-value idea stays the same." },
  ],
  revisionNotes: [
    "Counting began with one-to-one matching, body parts and tally marks.",
    "Roman/Egyptian systems are additive; Roman uses I, V, X, L, C, D, M.",
    "Indian decimal system: digits 0–9, place value and zero.",
    "Place value: each place is ten times the one to its right.",
  ],
  keyTakeaways: [
    "Zero and place value transformed how we write numbers.",
    "Additive systems are clumsy for large numbers.",
    "Place value is a general idea that works in any base.",
  ],
  faq: [
    { q: "Why are our digits called Hindu–Arabic numerals?", a: "They were developed in India and reached Europe through the Arab world." },
    { q: "How do you know when to subtract in Roman numerals?", a: "When a smaller-value symbol is written before a larger one, such as IV (4) or IX (9)." },
    { q: "What is a base in a number system?", a: "The number of digits used before grouping; base ten groups in tens using digits 0–9." },
  ],
  related: [
    { classId: "8", subject: "maths", slug: "number-play" },
    { classId: "9", subject: "maths", slug: "number-systems" },
  ],
};

export default chapter;
