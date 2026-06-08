import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "7",
  subject: "science",
  slug: "electricity-circuits-and-their-components",
  title: "Electricity Circuits and their Components",
  order: 3,
  seoTitle: "Electricity Circuits and their Components Class 7 Science — Notes & MCQs",
  metaDescription:
    "Class 7 Science Electricity Circuits and their Components (Curiosity): cells and batteries, electric circuits and switches, circuit symbols, conductors and insulators, and the heating and magnetic effects of current, with an MCQ quiz.",
  overview:
    "Flick a switch and a bulb lights up — because a complete circuit lets current flow. This Class 7 Curiosity chapter explains the components of an electric circuit, how to draw them with symbols, the difference between conductors and insulators, and the heating and magnetic effects of electric current.",
  objectives: [
    "Identify the components of a circuit.",
    "Draw circuits using symbols.",
    "Distinguish conductors and insulators.",
    "Describe heating and magnetic effects of current.",
  ],
  concepts: [
    {
      heading: "Electric circuit and its components",
      body: "An electric circuit is a complete path along which electric current flows. Its main components are a cell or battery (the source), connecting wires, a bulb or other device, and a switch to open or close the path. Current flows only when the circuit is complete, called a closed circuit.",
    },
    {
      heading: "Cells, batteries and switches",
      body: "A cell stores chemical energy and provides electricity; two or more cells joined together make a battery. A switch is a device that closes the circuit to let current flow (on) or breaks it to stop the flow (off). When the switch is open the bulb does not glow.",
    },
    {
      heading: "Circuit symbols and conductors",
      body: "To draw circuits neatly, we use standard symbols for the cell, bulb, switch and wires. Materials that allow current to pass are conductors, such as metals; materials that do not are insulators, such as rubber, plastic and wood. Wires are made of conductors covered with insulators for safety.",
    },
    {
      heading: "Effects of electric current",
      body: "Electric current produces useful effects. The heating effect makes a wire hot when current passes, used in heaters and bulbs. The magnetic effect means a current-carrying wire behaves like a magnet; a coil of wire with current becomes an electromagnet, used in electric bells and many machines.",
    },
  ],
  formulas: [],
  definitions: [
    { term: "Electric circuit", meaning: "A complete path through which electric current can flow." },
    { term: "Battery", meaning: "Two or more cells joined together to supply electricity." },
    { term: "Conductor", meaning: "A material that allows electric current to pass through it." },
    { term: "Electromagnet", meaning: "A coil that acts as a magnet when current flows through it." },
  ],
  examples: [
    {
      problem: "When does a bulb in a circuit glow?",
      solution: "When the circuit is closed (complete) so current can flow.",
    },
    {
      problem: "Is copper a conductor or an insulator?",
      solution: "A conductor; metals conduct electricity.",
    },
    {
      problem: "Name the effect used in an electric heater.",
      solution: "The heating effect of electric current.",
    },
  ],
  commonMistakes: [
    "Thinking a bulb glows even when the circuit is open.",
    "Confusing a single cell with a battery.",
    "Believing plastic and rubber conduct electricity.",
    "Mixing up the heating effect with the magnetic effect.",
  ],
  mcqs: [
    { id: "ec1", difficulty: "easy", q: "Current flows only when the circuit is:", options: ["open", "broken", "closed", "cut"], answer: 2, explanation: "A closed (complete) circuit allows current to flow." },
    { id: "ec2", difficulty: "easy", q: "Two or more cells joined together form a:", options: ["switch", "bulb", "wire", "battery"], answer: 3, explanation: "Joined cells make a battery." },
    { id: "ec3", difficulty: "medium", q: "A material that allows current to pass is a:", options: ["conductor", "insulator", "switch", "magnet"], answer: 0, explanation: "It is a conductor." },
    { id: "ec4", difficulty: "medium", q: "Which is an insulator?", options: ["copper", "rubber", "iron", "aluminium"], answer: 1, explanation: "Rubber does not conduct electricity." },
    { id: "ec5", difficulty: "easy", q: "A switch is used to:", options: ["store energy", "produce light", "open or close a circuit", "measure current"], answer: 2, explanation: "A switch opens or closes the circuit." },
    { id: "ec6", difficulty: "medium", q: "A coil that acts as a magnet when current flows is an:", options: ["insulator", "open circuit", "indicator", "electromagnet"], answer: 3, explanation: "It is an electromagnet." },
    { id: "ec7", difficulty: "hard", q: "An electric heater works mainly due to the:", options: ["heating effect", "magnetic effect", "chemical effect", "lighting effect only"], answer: 0, explanation: "The heating effect makes the element hot." },
    { id: "ec8", difficulty: "easy", q: "The source of electricity in a simple circuit is the:", options: ["wire", "cell", "bulb", "switch"], answer: 1, explanation: "The cell (or battery) is the source." },
    { id: "ec9", difficulty: "medium", q: "Wires are usually covered with plastic because plastic is an:", options: ["conductor", "electromagnet", "insulator", "acid"], answer: 2, explanation: "Plastic insulates for safety." },
    { id: "ec10", difficulty: "hard", q: "A current-carrying wire can deflect a nearby compass because of the:", options: ["heating effect", "chemical effect", "sound effect", "magnetic effect"], answer: 3, explanation: "Current produces a magnetic effect." },
  ],
  shortQuestions: [
    { q: "What is an electric circuit?", a: "A complete path through which current can flow." },
    { q: "Give one conductor and one insulator.", a: "Conductor: copper; insulator: rubber." },
    { q: "What is an electromagnet?", a: "A coil that acts as a magnet when current flows through it." },
  ],
  longQuestions: [
    { q: "Describe the components of a simple electric circuit and the role of each.", a: "A simple electric circuit needs a few components working together to form a complete path for current. The cell or battery is the source that supplies electricity. Connecting wires, made of a conducting metal, carry the current around the circuit. A device such as a bulb uses the current to do something useful, like giving light. A switch is included to open or close the circuit: when the switch is closed the path is complete and current flows, so the bulb glows; when it is open the path is broken and the bulb goes off. Current flows only when the whole circuit is closed." },
    { q: "Explain the heating and magnetic effects of electric current with examples.", a: "Electric current produces several effects, two of which are especially useful. The heating effect occurs because current makes a wire hot as it passes through; this is used in electric heaters, irons, geysers and the filaments of bulbs. The magnetic effect means that a wire carrying current behaves like a magnet and can deflect a nearby compass needle. When the wire is wound into a coil and current flows, it becomes an electromagnet — a magnet that can be switched on and off — which is used in electric bells, cranes that lift iron, and many electrical machines." },
  ],
  hots: [
    { q: "Why are the handles of electricians' tools covered with rubber or plastic?", a: "Because rubber and plastic are insulators; they prevent current from passing into the user, keeping them safe." },
    { q: "An electromagnet can be switched off but an ordinary magnet cannot. Why is this useful in a scrapyard crane?", a: "The crane can pick up iron when current flows and drop it by switching off the current, controlling the magnetism at will." },
  ],
  revisionNotes: [
    "Closed circuit = current flows; open circuit = no flow.",
    "Cell is the source; joined cells = battery.",
    "Conductors (metals) pass current; insulators (rubber, plastic) don't.",
    "Current effects: heating (heaters) and magnetic (electromagnet).",
  ],
  keyTakeaways: [
    "A bulb glows only in a complete circuit.",
    "Conductors carry current; insulators block it.",
    "Current can heat and can act like a magnet.",
  ],
  faq: [
    { q: "Why doesn't a bulb glow when the switch is off?", a: "The circuit is open, so current cannot flow." },
    { q: "What is the difference between a cell and a battery?", a: "A battery is two or more cells joined together." },
    { q: "What is an electromagnet used for?", a: "Electric bells, cranes that lift iron, and many machines." },
  ],
  related: [
    { classId: "6", subject: "science", slug: "exploring-magnets" },
    { classId: "8", subject: "science", slug: "electricity-magnetic-and-heating-effects" },
  ],
};

export default chapter;
