import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "9",
  subject: "science",
  slug: "work-and-energy",
  title: "Work and Energy",
  order: 10,
  seoTitle: "Work and Energy Class 9 CBSE Notes, MCQs, Quiz & Formulas",
  metaDescription:
    "Class 9 Science Work and Energy: work done by a force, kinetic and potential energy, law of conservation of energy, power and the commercial unit of energy, solved numericals and MCQ quiz with answers.",
  overview:
    "In physics, work is done only when a force moves an object, and energy is the capacity to do work. This Class 9 chapter defines work, the two main forms of mechanical energy (kinetic and potential), the law of conservation of energy, and power along with its commercial unit. The formulas are simple and the numericals are very scoring.",
  objectives: [
    "Define work and calculate it from force and displacement.",
    "Distinguish kinetic and potential energy.",
    "Apply the formulas for kinetic and potential energy.",
    "State the law of conservation of energy.",
    "Define power and the commercial unit of energy.",
  ],
  concepts: [
    {
      heading: "Work",
      body: "Work is done when a force produces motion. When the force and displacement are along the same line, work W = F × s. The SI unit of work is the joule (J). No work is done if there is no displacement or if the force is perpendicular to the motion.",
    },
    {
      heading: "Kinetic and potential energy",
      body: "Kinetic energy is the energy of a moving body, KE = ½mv². Potential energy is the energy due to position or height, PE = mgh. Energy, like work, is measured in joules.",
    },
    {
      heading: "Conservation of energy",
      body: "Energy can neither be created nor destroyed; it only changes from one form to another, and the total energy stays the same. For a freely falling body, potential energy converts into kinetic energy while their sum stays constant.",
    },
    {
      heading: "Power",
      body: "Power is the rate of doing work, P = W/t, measured in watts (W). One watt is one joule per second. The commercial unit of electrical energy is the kilowatt-hour (kWh): 1 kWh = 3.6 × 10⁶ J.",
    },
  ],
  formulas: [
    { name: "Work", formula: "W = F × s  (joule)" },
    { name: "Kinetic energy", formula: "KE = ½mv²" },
    { name: "Potential energy", formula: "PE = mgh" },
    { name: "Power", formula: "P = W ÷ t  (watt);  1 kWh = 3.6 × 10⁶ J" },
  ],
  definitions: [
    { term: "Work", meaning: "The product of force and the displacement in the direction of the force (W = Fs)." },
    { term: "Kinetic energy", meaning: "The energy possessed by a body due to its motion." },
    { term: "Potential energy", meaning: "The energy possessed by a body due to its position or height." },
    { term: "Power", meaning: "The rate of doing work or transferring energy (P = W/t)." },
  ],
  examples: [
    {
      problem: "A force of 10 N moves a body 5 m in its direction. Find the work done.",
      solution: "W = F × s = 10 × 5 = 50 J.",
    },
    {
      problem: "Find the kinetic energy of a 2 kg body moving at 4 m/s.",
      solution: "KE = ½mv² = ½ × 2 × 4² = ½ × 2 × 16 = 16 J.",
    },
    {
      problem: "A machine does 600 J of work in 30 s. Find its power.",
      solution: "P = W/t = 600/30 = 20 W.",
    },
  ],
  commonMistakes: [
    "Saying work is done even when there is no displacement.",
    "Forgetting to square the velocity in ½mv².",
    "Confusing power (rate of work) with energy (work done).",
    "Mixing up the joule (energy) with the watt (power).",
  ],
  mcqs: [
    { id: "we1", difficulty: "easy", q: "The SI unit of work is the:", options: ["joule", "newton", "watt", "pascal"], answer: 0, explanation: "Work is measured in joules (J)." },
    { id: "we2", difficulty: "easy", q: "Work done is given by:", options: ["F ÷ s", "m × v", "F × t", "F × s"], answer: 3, explanation: "W = F × s (force along displacement)." },
    { id: "we3", difficulty: "medium", q: "Kinetic energy is given by:", options: ["mv", "mgh", "½mv²", "Fs"], answer: 2, explanation: "KE = ½mv²." },
    { id: "we4", difficulty: "medium", q: "The potential energy of a body at height h is:", options: ["½mv²", "Fs", "mgh", "mg"], answer: 2, explanation: "PE = mgh." },
    { id: "we5", difficulty: "easy", q: "Power is the rate of doing:", options: ["displacement", "work", "mass", "force"], answer: 1, explanation: "Power = work ÷ time." },
    { id: "we6", difficulty: "easy", q: "The SI unit of power is the:", options: ["newton", "kWh", "watt", "joule"], answer: 2, explanation: "Power is measured in watts (W)." },
    { id: "we7", difficulty: "medium", q: "The work done by a 10 N force moving a body 5 m is:", options: ["500 J", "2 J", "50 J", "15 J"], answer: 2, explanation: "W = 10 × 5 = 50 J." },
    { id: "we8", difficulty: "medium", q: "1 kilowatt-hour equals:", options: ["1000 J", "3.6 × 10⁶ J", "3600 J", "60 J"], answer: 1, explanation: "1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J." },
    { id: "we9", difficulty: "easy", q: "Energy due to the motion of a body is:", options: ["kinetic energy", "heat energy", "potential energy", "chemical energy"], answer: 0, explanation: "Motion gives kinetic energy." },
    { id: "we10", difficulty: "hard", q: "The kinetic energy of a 3 kg body moving at 2 m/s is:", options: ["12 J", "6 J", "9 J", "3 J"], answer: 1, explanation: "KE = ½ × 3 × 2² = ½ × 3 × 4 = 6 J." },
    { id: "bk9s14", difficulty: "medium", q: "The SI unit of work and energy is the?", options: ["Newton", "Joule", "Watt", "Pascal"], answer: 1, explanation: "Work and energy are measured in joules." },
    { id: "bk9s15", difficulty: "medium", q: "The energy possessed by a body because of its motion is?", options: ["Potential energy", "Chemical energy", "Kinetic energy", "Heat energy"], answer: 2, explanation: "Kinetic energy is the energy of a moving body." },
  ],
  shortQuestions: [
    { q: "When is no work said to be done by a force?", a: "When there is no displacement, or when the force acts perpendicular to the displacement." },
    { q: "State the law of conservation of energy.", a: "Energy can neither be created nor destroyed; it only changes form, and the total energy remains constant." },
    { q: "Define one watt.", a: "One watt is the power when one joule of work is done in one second." },
  ],
  longQuestions: [
    { q: "Show that for a freely falling body, the total mechanical energy is conserved.", a: "At the top, the body has maximum potential energy (mgh) and zero kinetic energy. As it falls, height decreases (PE falls) while speed increases (KE rises). At each point, the loss in PE equals the gain in KE, so the sum PE + KE stays constant. Just before hitting the ground, all the energy is kinetic and equals the original potential energy — total energy is conserved." },
    { q: "A boy of mass 40 kg climbs stairs of height 5 m in 10 s. Find the work done and his power. (g = 10 m/s².)", a: "Work done against gravity = mgh = 40 × 10 × 5 = 2000 J. Power = W/t = 2000/10 = 200 W." },
  ],
  hots: [
    { q: "A coolie carries a heavy bag on his head and walks on a level platform. Is he doing work against gravity? Explain.", a: "No work is done against gravity, because the displacement is horizontal while gravity acts vertically — the force of gravity is perpendicular to the motion, so the work done against it is zero." },
    { q: "If the speed of a moving body is doubled, how does its kinetic energy change?", a: "Kinetic energy depends on v², so doubling the speed makes the kinetic energy four times (2²) larger." },
  ],
  revisionNotes: [
    "Work W = F × s (joule); no displacement ⇒ no work.",
    "KE = ½mv²; PE = mgh.",
    "Energy is conserved — only changes form.",
    "Power P = W/t (watt); 1 kWh = 3.6 × 10⁶ J.",
  ],
  keyTakeaways: [
    "Work needs a force AND a displacement along it.",
    "Square the velocity in kinetic energy.",
    "Power is how fast work is done, not how much.",
  ],
  faq: [
    { q: "When is work done in physics?", a: "When a force acts on a body and moves it in the direction of the force; W = F × s." },
    { q: "What is the difference between kinetic and potential energy?", a: "Kinetic energy is due to motion (½mv²); potential energy is due to position or height (mgh)." },
    { q: "What is the commercial unit of electrical energy?", a: "The kilowatt-hour (kWh), where 1 kWh = 3.6 × 10⁶ joules." },
  ],
  related: [
    { classId: "9", subject: "science", slug: "gravitation" },
    { classId: "9", subject: "science", slug: "sound" },
  ],
};

export default chapter;
