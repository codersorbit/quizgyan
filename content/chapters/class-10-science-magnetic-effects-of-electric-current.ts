import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "10",
  subject: "science",
  slug: "magnetic-effects-of-electric-current",
  title: "Magnetic Effects of Electric Current",
  order: 12,
  seoTitle:
    "Magnetic Effects of Electric Current Class 10 CBSE Notes, MCQs & Quiz",
  metaDescription:
    "Class 10 Science Magnetic Effects of Electric Current: magnetic field of a current, right-hand thumb rule, solenoid, force on a conductor, Fleming's rules, electric motor, electromagnetic induction and generator, MCQ quiz and important questions.",
  overview:
    "An electric current creates a magnetic field around it — this link between electricity and magnetism powers motors and generators. This chapter covers magnetic field lines, the field due to a current in a straight wire and a solenoid, the force on a current-carrying conductor, the electric motor, electromagnetic induction and the generator. It is a conceptual physics chapter with several important rules.",
  objectives: [
    "Describe the magnetic field produced by an electric current.",
    "Apply the right-hand thumb rule and Fleming's left-hand rule.",
    "Explain the field due to a solenoid and the working of an electromagnet.",
    "Explain the working principle of an electric motor.",
    "Explain electromagnetic induction and the electric generator.",
  ],
  concepts: [
    {
      heading: "Magnetic field due to a current",
      body: "A current-carrying straight conductor produces a magnetic field in the form of concentric circles around it. The direction is given by the right-hand thumb rule: point the thumb along the current, and the curled fingers show the field direction.",
    },
    {
      heading: "Field due to a solenoid",
      body: "A solenoid (a coil of many turns) produces a magnetic field like that of a bar magnet, with a north and a south pole. Placing a soft-iron core inside makes a strong, temporary magnet called an electromagnet.",
    },
    {
      heading: "Force on a conductor and the electric motor",
      body: "A current-carrying conductor placed in a magnetic field experiences a force. Fleming's left-hand rule gives its direction (thumb = force, forefinger = field, middle finger = current). This force is used in an electric motor, which converts electrical energy into mechanical energy.",
    },
    {
      heading: "Electromagnetic induction and the generator",
      body: "When the magnetic field through a coil changes, an electric current is induced in it — this is electromagnetic induction, and its direction is given by Fleming's right-hand rule. An electric generator uses this effect to convert mechanical energy into electrical energy.",
    },
  ],
  formulas: [
    { name: "Right-hand thumb rule", formula: "thumb → current, curled fingers → magnetic field" },
    { name: "Fleming's left-hand rule (motor)", formula: "thumb = Force, forefinger = Field, middle = Current" },
    { name: "Fleming's right-hand rule (generator)", formula: "thumb = motion, forefinger = field, middle = induced current" },
  ],
  definitions: [
    { term: "Magnetic field", meaning: "The region around a magnet or current in which a magnetic force can be felt." },
    { term: "Solenoid", meaning: "A coil of many circular turns of insulated wire that behaves like a bar magnet when carrying current." },
    { term: "Electromagnetic induction", meaning: "The production of a current in a coil due to a changing magnetic field." },
    { term: "Electromagnet", meaning: "A temporary magnet made by passing current through a coil wound on a soft-iron core." },
  ],
  examples: [
    {
      problem: "How is the direction of the magnetic field around a straight current-carrying wire found?",
      solution:
        "By the right-hand thumb rule: hold the wire in your right hand with the thumb pointing along the current; your curled fingers then show the direction of the circular magnetic field lines.",
    },
    {
      problem: "State the energy conversion in an electric motor and a generator.",
      solution:
        "An electric motor converts electrical energy into mechanical energy. A generator does the reverse — it converts mechanical energy into electrical energy.",
    },
    {
      problem: "How can the strength of an electromagnet be increased?",
      solution:
        "By increasing the current, increasing the number of turns in the coil, and using a soft-iron core.",
    },
  ],
  commonMistakes: [
    "Mixing up Fleming's left-hand rule (motor) with the right-hand rule (generator).",
    "Saying a motor generates electricity — it uses electricity to produce motion.",
    "Forgetting that only a changing magnetic field induces a current.",
    "Confusing the field of a solenoid (like a bar magnet) with that of a straight wire (circles).",
  ],
  mcqs: [
    { id: "mg1", difficulty: "easy", q: "The magnetic field around a straight current-carrying wire is in the form of:", options: ["ellipses", "concentric circles", "no field", "straight lines"], answer: 1, explanation: "Field lines are concentric circles around the wire." },
    { id: "mg2", difficulty: "easy", q: "A solenoid carrying current behaves like a:", options: ["capacitor", "battery", "resistor", "bar magnet"], answer: 3, explanation: "Its field resembles that of a bar magnet." },
    { id: "mg3", difficulty: "medium", q: "Fleming's left-hand rule gives the direction of:", options: ["the force on a conductor", "the magnetic field", "the voltage", "induced current"], answer: 0, explanation: "It gives the direction of force on a current-carrying conductor (used in motors)." },
    { id: "mg4", difficulty: "medium", q: "An electric motor converts:", options: ["heat to light", "mechanical energy to electrical energy", "electrical energy to mechanical energy", "sound to electricity"], answer: 2, explanation: "A motor converts electrical energy into mechanical energy." },
    { id: "mg5", difficulty: "medium", q: "The production of current due to a changing magnetic field is called:", options: ["induction", "resistance", "dispersion", "conduction"], answer: 0, explanation: "This is electromagnetic induction." },
    { id: "mg6", difficulty: "easy", q: "The right-hand thumb rule relates the directions of:", options: ["force and field", "voltage and current", "current and magnetic field", "motion and force"], answer: 2, explanation: "Thumb = current, curled fingers = magnetic field." },
    { id: "mg7", difficulty: "medium", q: "Fleming's right-hand rule is used for an electric:", options: ["motor", "heater", "bell", "generator"], answer: 3, explanation: "It gives the direction of induced current in a generator." },
    { id: "mg8", difficulty: "easy", q: "A temporary magnet made using a current-carrying coil and an iron core is a/an:", options: ["bar magnet", "solenoid only", "permanent magnet", "electromagnet"], answer: 3, explanation: "This is an electromagnet." },
    { id: "mg9", difficulty: "medium", q: "An electric generator converts:", options: ["electrical to mechanical energy", "chemical to electrical energy", "mechanical to electrical energy", "light to electrical energy"], answer: 2, explanation: "A generator converts mechanical energy into electrical energy." },
    { id: "mg10", difficulty: "hard", q: "The strength of an electromagnet can be increased by:", options: ["increasing the number of turns", "removing the iron core", "decreasing the current", "using a copper core only"], answer: 0, explanation: "More turns (and more current, with a soft-iron core) increase the strength." },
    { id: "bk10s15", difficulty: "medium", q: "A current-carrying conductor produces a ... around it.", options: ["Sound wave", "Gravitational field", "Rainbow", "Magnetic field"], answer: 3, explanation: "An electric current produces a magnetic field (Oersted's discovery)." },
  ],
  shortQuestions: [
    { q: "What does the right-hand thumb rule tell us?", a: "The direction of the magnetic field around a current-carrying conductor relative to the current direction." },
    { q: "Name the rule used to find the direction of force on a conductor in a magnetic field.", a: "Fleming's left-hand rule." },
    { q: "What is the function of a fuse in a circuit?", a: "It melts and breaks the circuit if the current becomes dangerously high, protecting appliances and wiring." },
  ],
  longQuestions: [
    { q: "Explain the principle and working of an electric motor.", a: "An electric motor works on the principle that a current-carrying coil placed in a magnetic field experiences a force. When current flows through the coil, the two sides experience forces in opposite directions (by Fleming's left-hand rule), creating a turning effect that rotates the coil. A split-ring commutator reverses the current every half rotation so the coil keeps turning in the same direction, converting electrical energy into mechanical energy." },
    { q: "What is electromagnetic induction? State how it is used in a generator.", a: "Electromagnetic induction is the production of a current in a coil when the magnetic field through it changes. In a generator, a coil is rotated in a magnetic field; the continuously changing field through the coil induces a current (direction given by Fleming's right-hand rule), thus converting mechanical energy into electrical energy." },
  ],
  hots: [
    { q: "Why does a current-carrying conductor placed in a magnetic field experience a force?", a: "The magnetic field of the current interacts with the external magnetic field; the two fields combine unevenly, producing a net force on the conductor whose direction follows Fleming's left-hand rule." },
    { q: "Why is an earth wire used in domestic circuits?", a: "The earth wire provides a low-resistance path to the ground for any leakage current, so if a live wire touches a metal appliance body, the current flows safely to earth instead of through a person." },
  ],
  revisionNotes: [
    "Current → magnetic field (circles around a straight wire; bar-magnet field for a solenoid).",
    "Right-hand thumb rule: thumb = current, fingers = field.",
    "Fleming's left hand → motor (force); right hand → generator (induced current).",
    "Motor: electrical → mechanical; generator: mechanical → electrical.",
  ],
  keyTakeaways: [
    "Keep the two Fleming's rules straight: left = motor, right = generator.",
    "Only a changing magnetic field induces a current.",
    "Electromagnet strength rises with current, turns and an iron core.",
  ],
  faq: [
    { q: "What is the difference between Fleming's left-hand and right-hand rules?", a: "The left-hand rule gives the direction of force in a motor; the right-hand rule gives the direction of induced current in a generator." },
    { q: "How does an electric motor work?", a: "A current-carrying coil in a magnetic field experiences forces that make it rotate; a commutator keeps the rotation in one direction, converting electrical energy into mechanical energy." },
    { q: "What is electromagnetic induction?", a: "It is the generation of a current in a coil caused by a change in the magnetic field passing through it." },
  ],
  related: [
    { classId: "10", subject: "science", slug: "electricity" },
    { classId: "10", subject: "science", slug: "light-reflection-and-refraction" },
  ],
};

export default chapter;
