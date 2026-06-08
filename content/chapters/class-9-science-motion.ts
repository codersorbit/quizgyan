import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "9",
  subject: "science",
  slug: "motion",
  title: "Motion",
  order: 7,
  seoTitle: "Motion Class 9 CBSE Notes, MCQs, Quiz & Equations of Motion",
  metaDescription:
    "Class 9 Science Motion: distance and displacement, speed and velocity, acceleration, the three equations of motion, distance-time and velocity-time graphs and uniform circular motion, solved numericals and MCQ quiz.",
  overview:
    "Motion describes how the position of an object changes with time. This Class 9 chapter defines distance and displacement, speed and velocity, and acceleration, derives and applies the three equations of motion, interprets motion graphs, and introduces uniform circular motion. It is numerical-rich and a strong scoring chapter in Class 9 physics.",
  objectives: [
    "Distinguish distance from displacement and speed from velocity.",
    "Define acceleration and uniform/non-uniform motion.",
    "Apply the three equations of motion.",
    "Interpret distance-time and velocity-time graphs.",
    "Describe uniform circular motion.",
  ],
  concepts: [
    {
      heading: "Distance and displacement, speed and velocity",
      body: "Distance is the total path length (a scalar); displacement is the shortest straight-line change in position with direction (a vector). Speed is distance per unit time; velocity is displacement per unit time and has direction.",
    },
    {
      heading: "Acceleration",
      body: "Acceleration is the rate of change of velocity, a = (v − u)/t. Motion is uniform if velocity is constant (zero acceleration) and non-uniform if velocity changes. Acceleration is positive when speeding up and negative (retardation) when slowing down.",
    },
    {
      heading: "Equations of motion",
      body: "For uniform acceleration: v = u + at, s = ut + ½at², and v² = u² + 2as, where u is initial velocity, v final velocity, a acceleration, t time and s displacement.",
    },
    {
      heading: "Graphs and circular motion",
      body: "On a distance-time graph, the slope gives speed; on a velocity-time graph, the slope gives acceleration and the area under it gives displacement. In uniform circular motion the speed is constant but the direction keeps changing, so it is accelerated motion.",
    },
  ],
  formulas: [
    { name: "Speed", formula: "speed = distance ÷ time" },
    { name: "Velocity", formula: "velocity = displacement ÷ time" },
    { name: "Acceleration", formula: "a = (v − u) ÷ t" },
    { name: "Equations of motion", formula: "v = u + at ;  s = ut + ½at² ;  v² = u² + 2as" },
  ],
  definitions: [
    { term: "Displacement", meaning: "The shortest distance from the initial to the final position, with direction." },
    { term: "Velocity", meaning: "The rate of change of displacement (speed in a given direction)." },
    { term: "Acceleration", meaning: "The rate of change of velocity with time." },
    { term: "Uniform motion", meaning: "Motion in which equal distances are covered in equal intervals of time." },
  ],
  examples: [
    {
      problem: "A car starts from rest and accelerates at 2 m/s² for 5 s. Find its final velocity.",
      solution: "u = 0, a = 2 m/s², t = 5 s. Using v = u + at: v = 0 + 2 × 5 = 10 m/s.",
    },
    {
      problem: "For the same car, find the distance covered in 5 s.",
      solution: "s = ut + ½at² = 0 + ½ × 2 × 5² = 25 m.",
    },
    {
      problem: "A body moving at 20 m/s decelerates uniformly and stops after travelling 50 m. Find the acceleration.",
      solution: "u = 20, v = 0, s = 50. Using v² = u² + 2as: 0 = 400 + 2a(50) ⇒ a = −4 m/s² (retardation).",
    },
  ],
  commonMistakes: [
    "Treating distance and displacement as the same — displacement has direction.",
    "Forgetting that uniform circular motion is accelerated (direction changes).",
    "Dropping the negative sign for deceleration (retardation).",
    "Using the wrong equation of motion for the given quantities.",
  ],
  mcqs: [
    { id: "mo1", difficulty: "easy", q: "Which quantity has both magnitude and direction?", options: ["time", "speed", "distance", "displacement"], answer: 3, explanation: "Displacement is a vector with direction." },
    { id: "mo2", difficulty: "easy", q: "The SI unit of acceleration is:", options: ["m", "m/s²", "s", "m/s"], answer: 1, explanation: "Acceleration is measured in m/s²." },
    { id: "mo3", difficulty: "medium", q: "The equation v = u + at relates velocity and:", options: ["energy", "mass", "force", "time"], answer: 3, explanation: "It relates velocity, acceleration and time." },
    { id: "mo4", difficulty: "medium", q: "A car from rest reaches 10 m/s in 5 s. Its acceleration is:", options: ["2 m/s²", "5 m/s²", "50 m/s²", "1 m/s²"], answer: 0, explanation: "a = (10 − 0)/5 = 2 m/s²." },
    { id: "mo5", difficulty: "medium", q: "On a velocity-time graph, the area under the line gives:", options: ["speed", "acceleration", "force", "displacement"], answer: 3, explanation: "Area under a v-t graph is displacement." },
    { id: "mo6", difficulty: "easy", q: "Uniform circular motion is:", options: ["unaccelerated", "impossible", "accelerated", "at rest"], answer: 2, explanation: "Direction changes, so it is accelerated motion." },
    { id: "mo7", difficulty: "medium", q: "The slope of a distance-time graph gives:", options: ["acceleration", "speed", "force", "displacement"], answer: 1, explanation: "The slope of a d-t graph is speed." },
    { id: "mo8", difficulty: "easy", q: "Velocity is the rate of change of:", options: ["speed", "distance", "displacement", "acceleration"], answer: 2, explanation: "Velocity = displacement ÷ time." },
    { id: "mo9", difficulty: "medium", q: "Which equation does NOT contain time?", options: ["v = u + at", "all contain time", "v² = u² + 2as", "s = ut + ½at²"], answer: 2, explanation: "v² = u² + 2as has no t term." },
    { id: "mo10", difficulty: "hard", q: "A body moving at 6 m/s accelerates at 2 m/s² for 3 s. Its final velocity is:", options: ["10 m/s", "12 m/s", "18 m/s", "8 m/s"], answer: 1, explanation: "v = 6 + 2 × 3 = 12 m/s." },
    { id: "bk9s10", difficulty: "easy", q: "The distance travelled by an object in unit time is its?", options: ["Acceleration", "Speed", "Force", "Mass"], answer: 1, explanation: "Speed = distance ÷ time." },
  ],
  shortQuestions: [
    { q: "Define uniform motion.", a: "Motion in which an object covers equal distances in equal intervals of time." },
    { q: "Can displacement be zero while distance is not? Give an example.", a: "Yes — a runner who completes one full circular lap returns to the start, so distance is the track length but displacement is zero." },
    { q: "Write the equation that gives displacement using initial velocity, acceleration and time.", a: "s = ut + ½at²." },
  ],
  longQuestions: [
    { q: "A train starting from rest attains a velocity of 72 km/h in 5 minutes. Find its acceleration and the distance travelled.", a: "Convert: 72 km/h = 20 m/s; t = 5 min = 300 s; u = 0. Acceleration a = (20 − 0)/300 = 0.067 m/s². Distance s = ut + ½at² = 0 + ½ × 0.067 × 300² = 3000 m = 3 km." },
    { q: "Explain how a velocity-time graph is used to find acceleration and distance.", a: "On a velocity-time graph, the slope of the line equals the acceleration (change in velocity ÷ time). The area enclosed between the line and the time axis equals the distance (or displacement) travelled. A straight slanting line indicates uniform acceleration." },
  ],
  hots: [
    { q: "Two cars start together; one moves at constant velocity, the other accelerates from rest. Whose distance-time graph is a straight line?", a: "The car moving at constant velocity has a straight-line distance-time graph; the accelerating car's graph is a curve (since distance increases faster over time)." },
    { q: "Why is the motion of a body in a circle at constant speed still called accelerated?", a: "Because velocity includes direction, and the direction changes continuously even though the speed is constant — a changing velocity means acceleration." },
  ],
  revisionNotes: [
    "Distance (scalar) vs displacement (vector); speed vs velocity.",
    "a = (v − u)/t; retardation is negative acceleration.",
    "Equations: v = u + at, s = ut + ½at², v² = u² + 2as.",
    "d-t slope = speed; v-t slope = acceleration, area = distance.",
  ],
  keyTakeaways: [
    "Choose the equation of motion that matches the known quantities.",
    "Uniform circular motion is accelerated.",
    "Always convert units (km/h to m/s) before calculating.",
  ],
  faq: [
    { q: "What is the difference between distance and displacement?", a: "Distance is the total path length (scalar); displacement is the shortest distance between start and end with direction (vector)." },
    { q: "What are the three equations of motion?", a: "v = u + at, s = ut + ½at², and v² = u² + 2as, valid for uniform acceleration." },
    { q: "Why is uniform circular motion accelerated?", a: "Because the direction of velocity changes continuously, even though the speed stays constant." },
  ],
  related: [
    { classId: "9", subject: "science", slug: "force-and-laws-of-motion" },
    { classId: "9", subject: "science", slug: "gravitation" },
  ],
};

export default chapter;
