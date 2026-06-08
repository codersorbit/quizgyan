import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "10",
  subject: "science",
  slug: "electricity",
  title: "Electricity",
  order: 11,
  seoTitle: "Electricity Class 10 CBSE Notes, MCQs, Quiz, Ohm's Law & Numericals",
  metaDescription:
    "Class 10 Science Electricity: electric current, potential difference, Ohm's law, resistance and resistivity, series and parallel circuits, heating effect and electric power, solved numericals and MCQ quiz.",
  overview:
    "Electricity studies the flow of electric charge and the rules that govern circuits. This chapter introduces electric current, potential difference, Ohm's law and resistance, the factors that change resistance, how resistors combine in series and parallel, and the heating effect and power of electric current. It is numerical-heavy and one of the most scoring chapters in Class 10 physics.",
  objectives: [
    "Define electric current and potential difference with their units.",
    "State and apply Ohm's law.",
    "Explain the factors affecting the resistance of a conductor.",
    "Calculate equivalent resistance in series and parallel.",
    "Use the formulas for heating effect and electric power.",
  ],
  concepts: [
    {
      heading: "Current and potential difference",
      body: "Electric current is the rate of flow of charge, I = Q/t, measured in amperes (A). Potential difference is the work done to move a unit charge between two points, V = W/Q, measured in volts (V). A cell or battery maintains the potential difference that drives the current.",
    },
    {
      heading: "Ohm's law and resistance",
      body: "Ohm's law states that, at constant temperature, the current through a conductor is directly proportional to the potential difference across it: V = IR. Here R is the resistance, measured in ohms (Ω), which opposes the flow of current.",
    },
    {
      heading: "Factors affecting resistance",
      body: "The resistance of a wire is R = ρl/A: it increases with length l, decreases with cross-sectional area A, and depends on the material through its resistivity ρ. Resistance also increases with temperature for most conductors.",
    },
    {
      heading: "Combinations, heating effect and power",
      body: "In series, resistances add: R = R₁ + R₂ + R₃. In parallel, 1/R = 1/R₁ + 1/R₂ + 1/R₃, giving a smaller total. Current produces heat by Joule's law H = I²Rt, and electric power is P = VI = I²R = V²/R; energy used is P × t (often in kilowatt-hours).",
    },
  ],
  formulas: [
    { name: "Electric current", formula: "I = Q ÷ t (ampere)" },
    { name: "Potential difference", formula: "V = W ÷ Q (volt)" },
    { name: "Ohm's law", formula: "V = IR" },
    { name: "Resistance of a wire", formula: "R = ρl ÷ A" },
    { name: "Series / parallel", formula: "Series: R = R₁ + R₂ + … ; Parallel: 1/R = 1/R₁ + 1/R₂ + …" },
    { name: "Power and heat", formula: "P = VI = I²R = V²/R ;  H = I²Rt" },
  ],
  definitions: [
    { term: "Electric current", meaning: "The rate of flow of electric charge through a conductor (I = Q/t)." },
    { term: "Potential difference", meaning: "The work done per unit charge in moving it between two points (V = W/Q)." },
    { term: "Resistance", meaning: "The opposition offered by a conductor to the flow of current, measured in ohms." },
    { term: "Resistivity", meaning: "A property of a material that, with length and area, decides a wire's resistance (R = ρl/A)." },
  ],
  examples: [
    {
      problem: "A potential difference of 10 V is applied across a 5 Ω resistor. Find the current.",
      solution: "By Ohm's law, I = V/R = 10/5 = 2 A.",
    },
    {
      problem: "Three resistors of 2 Ω, 3 Ω and 5 Ω are joined in series. Find the equivalent resistance.",
      solution: "In series, R = 2 + 3 + 5 = 10 Ω.",
    },
    {
      problem: "An electric bulb draws 0.5 A at 220 V. Find its power.",
      solution: "P = VI = 220 × 0.5 = 110 W.",
    },
  ],
  commonMistakes: [
    "Adding resistances directly in parallel — use the reciprocal formula.",
    "Forgetting units (A, V, Ω, W) or mixing them up.",
    "Using V²/R with the wrong voltage (use the voltage across that resistor).",
    "Confusing power (rate of energy use, watt) with energy (P × t, joule or kWh).",
  ],
  mcqs: [
    { id: "el1", difficulty: "easy", q: "The SI unit of electric current is the:", options: ["volt", "watt", "ampere", "ohm"], answer: 2, explanation: "Current is measured in amperes (A)." },
    { id: "el2", difficulty: "easy", q: "Ohm's law is expressed as:", options: ["R = VI", "V = I/R", "I = VR", "V = IR"], answer: 3, explanation: "V = IR at constant temperature." },
    { id: "el3", difficulty: "easy", q: "The SI unit of resistance is the:", options: ["joule", "ohm", "volt", "ampere"], answer: 1, explanation: "Resistance is measured in ohms (Ω)." },
    { id: "el4", difficulty: "medium", q: "Two resistors of 3 Ω and 6 Ω in parallel give an equivalent resistance of:", options: ["18 Ω", "4.5 Ω", "2 Ω", "9 Ω"], answer: 2, explanation: "1/R = 1/3 + 1/6 = 1/2, so R = 2 Ω." },
    { id: "el5", difficulty: "medium", q: "Electric power can be written as:", options: ["P = V/I", "P = R/V", "P = Q/t", "P = I²R"], answer: 3, explanation: "P = VI = I²R = V²/R." },
    { id: "el6", difficulty: "easy", q: "The resistance of a wire increases when its length is:", options: ["increased", "decreased", "halved", "kept constant"], answer: 0, explanation: "R = ρl/A, so resistance increases with length." },
    { id: "el7", difficulty: "medium", q: "A current of 2 A flows for 5 s. The charge passed is:", options: ["2.5 C", "10 C", "7 C", "0.4 C"], answer: 1, explanation: "Q = It = 2 × 5 = 10 C." },
    { id: "el8", difficulty: "medium", q: "In a series circuit, the resistances:", options: ["cancel", "add up", "give a smaller total", "stay equal"], answer: 1, explanation: "Series resistances add: R = R₁ + R₂ + …" },
    { id: "el9", difficulty: "easy", q: "The heating effect of current is given by:", options: ["H = V/R", "H = I²Rt", "H = IRt", "H = I/t"], answer: 1, explanation: "Joule's law of heating: H = I²Rt." },
    { id: "el10", difficulty: "hard", q: "A 220 V, 100 W bulb has a resistance of about:", options: ["2.2 Ω", "484 Ω", "100 Ω", "220 Ω"], answer: 1, explanation: "R = V²/P = 220²/100 = 48400/100 = 484 Ω." },
    { id: "bk10s13", difficulty: "medium", q: "The SI unit of electric current is the?", options: ["Volt", "Ampere", "Ohm", "Watt"], answer: 1, explanation: "Electric current is measured in amperes." },
    { id: "bk10s14", difficulty: "hard", q: "According to Ohm's law, voltage equals current multiplied by?", options: ["Power", "Charge", "Resistance", "Time"], answer: 2, explanation: "Ohm's law: V = I × R (voltage = current × resistance)." },
  ],
  shortQuestions: [
    { q: "Define one ampere.", a: "One ampere is the current when one coulomb of charge flows through a point in one second." },
    { q: "Why is the resistance of a thick wire less than that of a thin one of the same material and length?", a: "A larger cross-sectional area means lower resistance, since R = ρl/A." },
    { q: "Write the unit of electrical energy used in homes.", a: "The kilowatt-hour (kWh), commonly called a 'unit'." },
  ],
  longQuestions: [
    { q: "Compare series and parallel combinations of resistors.", a: "In series, the same current flows through all resistors, the voltage divides among them, and the equivalent resistance R = R₁ + R₂ + … (largest). In parallel, the same voltage is across all resistors, the current divides, and 1/R = 1/R₁ + 1/R₂ + … (smallest). Household appliances are connected in parallel so each gets the full voltage and can be switched independently." },
    { q: "A 4 Ω and a 6 Ω resistor are connected in series across a 20 V supply. Find the current and the power consumed.", a: "Series resistance = 4 + 6 = 10 Ω. Current I = V/R = 20/10 = 2 A. Power P = VI = 20 × 2 = 40 W (or I²R = 4 × 10 = 40 W)." },
  ],
  hots: [
    { q: "Why are household appliances connected in parallel rather than in series?", a: "In parallel, each appliance gets the full supply voltage, works at its rated power, and can be switched on or off independently; a fault in one does not stop the others." },
    { q: "Why is tungsten used for the filament of an electric bulb?", a: "Tungsten has a very high melting point and high resistivity, so it can glow white-hot to give light without melting." },
  ],
  revisionNotes: [
    "I = Q/t (A); V = W/Q (V); Ohm's law V = IR; R in ohms.",
    "R = ρl/A: increases with length, decreases with area.",
    "Series: R adds; Parallel: 1/R adds (smaller total).",
    "P = VI = I²R = V²/R; H = I²Rt; energy in kWh.",
  ],
  keyTakeaways: [
    "Use the reciprocal rule for parallel resistors.",
    "Choose the right power formula based on what is given.",
    "Keep units consistent throughout a numerical.",
  ],
  faq: [
    { q: "What is Ohm's law?", a: "At constant temperature, the current through a conductor is proportional to the potential difference across it: V = IR." },
    { q: "Why are appliances connected in parallel at home?", a: "So each gets the full voltage, operates at its rated power, and can be controlled independently." },
    { q: "What is the difference between electric power and electric energy?", a: "Power is the rate at which energy is used (in watts); energy is power multiplied by time (in joules or kilowatt-hours)." },
  ],
  related: [
    { classId: "10", subject: "science", slug: "magnetic-effects-of-electric-current" },
    { classId: "10", subject: "science", slug: "the-human-eye-and-the-colourful-world" },
  ],
};

export default chapter;
