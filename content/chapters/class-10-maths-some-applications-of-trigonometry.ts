import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "10",
  subject: "maths",
  slug: "some-applications-of-trigonometry",
  title: "Some Applications of Trigonometry",
  order: 9,
  seoTitle:
    "Some Applications of Trigonometry Class 10 CBSE Notes, MCQs & Heights and Distances",
  metaDescription:
    "Class 10 Maths Some Applications of Trigonometry: heights and distances, angle of elevation and depression, line of sight, solved examples, MCQ quiz with answers and important questions.",
  overview:
    "This chapter puts trigonometry to work in the real world — finding the heights of towers and the distances of objects without measuring them directly. The key idea is to draw a right triangle from the situation and use the angle of elevation or depression with a trig ratio. The problems are visual and, once the diagram is right, quick to solve.",
  objectives: [
    "Define line of sight, angle of elevation and angle of depression.",
    "Draw a correct right-triangle diagram from a word problem.",
    "Choose the right trig ratio (sin, cos or tan) for the given sides.",
    "Solve heights-and-distances problems using standard angles.",
    "Handle problems with two observation points or angles.",
  ],
  concepts: [
    {
      heading: "Line of sight and angles",
      body: "The line of sight is the line from the observer's eye to the object. The angle of elevation is the angle this line makes with the horizontal when the object is above; the angle of depression is the angle below the horizontal when the object is lower.",
    },
    {
      heading: "Setting up the triangle",
      body: "Represent the height as the vertical side and the ground distance as the horizontal side of a right triangle, with the angle of elevation/depression at the observation point. Then height/distance = tan(angle).",
    },
    {
      heading: "Choosing the ratio",
      body: "Use tan when the horizontal distance and height are involved, sin when the hypotenuse (e.g. a ladder or rope) and the opposite side are involved, and cos when the hypotenuse and the adjacent side are involved.",
    },
    {
      heading: "Depression equals elevation",
      body: "The angle of depression of a point from an observer equals the angle of elevation of the observer from that point (they are alternate angles), which is useful in two-point problems.",
    },
  ],
  formulas: [
    { name: "Height from elevation", formula: "height = distance × tan(angle of elevation)" },
    { name: "Distance from height", formula: "distance = height ÷ tan(angle of depression)" },
    { name: "Using hypotenuse", formula: "opposite = hypotenuse × sin(angle)" },
  ],
  definitions: [
    { term: "Angle of elevation", meaning: "The angle between the horizontal and the line of sight to an object above the observer." },
    { term: "Angle of depression", meaning: "The angle between the horizontal and the line of sight to an object below the observer." },
    { term: "Line of sight", meaning: "The straight line from the observer's eye to the object being viewed." },
  ],
  examples: [
    {
      problem: "The angle of elevation of the top of a pole from a point 30 m away on the ground is 30°. Find the height of the pole.",
      solution:
        "height = distance × tan 30° = 30 × (1/√3) = 30/√3 = 10√3 m ≈ 17.3 m.",
    },
    {
      problem: "From the top of a 50 m building, the angle of depression of a car is 45°. How far is the car from the foot of the building?",
      solution:
        "tan 45° = height/distance ⇒ 1 = 50/distance ⇒ distance = 50 m.",
    },
    {
      problem: "A ladder leaning against a wall makes a 60° angle with the ground, and its foot is 2 m from the wall. Find the length of the ladder.",
      solution:
        "cos 60° = adjacent/hypotenuse = 2/ladder ⇒ 1/2 = 2/ladder ⇒ ladder = 4 m.",
    },
  ],
  commonMistakes: [
    "Confusing elevation (looking up) with depression (looking down).",
    "Measuring the angle of depression from the vertical instead of the horizontal.",
    "Using tan where the hypotenuse is involved (should be sin or cos).",
    "Forgetting to add the observer's height when required.",
  ],
  mcqs: [
    { id: "at1", difficulty: "easy", q: "The angle of elevation is measured from the horizontal to the line of sight when the object is:", options: ["above the observer", "below the observer", "at eye level", "behind the observer"], answer: 0, explanation: "Elevation is for objects above the observer." },
    { id: "at2", difficulty: "medium", q: "If a 10 m pole casts a 10 m shadow, the Sun's angle of elevation is:", options: ["90°", "45°", "60°", "30°"], answer: 1, explanation: "tan θ = 10/10 = 1, so θ = 45°." },
    { id: "at3", difficulty: "easy", q: "The line joining the observer's eye to the object is called the:", options: ["base", "line of sight", "horizontal", "vertical"], answer: 1, explanation: "It is the line of sight." },
    { id: "at4", difficulty: "easy", q: "Height of an object equals:", options: ["distance × tan(elevation)", "distance + tan(elevation)", "distance ÷ tan(elevation)", "distance × sin(elevation)"], answer: 0, explanation: "tan = height/distance, so height = distance × tan(angle)." },
    { id: "at5", difficulty: "medium", q: "The angle of depression of a boat from a 100 m cliff is 30°. The boat's distance from the foot is:", options: ["50 m", "100√3 m", "100 m", "100/√3 m"], answer: 1, explanation: "tan 30° = 100/d ⇒ d = 100/tan 30° = 100√3 m." },
    { id: "at6", difficulty: "easy", q: "The angle of depression of a point equals the angle of elevation of the observer because they are:", options: ["right angles", "alternate angles", "co-interior", "vertically opposite"], answer: 1, explanation: "Horizontal lines are parallel, so the angles are alternate (equal)." },
    { id: "at7", difficulty: "medium", q: "A kite is at height 60 m with the string at 30° to the ground. The string length is:", options: ["120 m", "30√3 m", "60 m", "60√3 m"], answer: 0, explanation: "sin 30° = 60/length ⇒ 1/2 = 60/length ⇒ length = 120 m." },
    { id: "at8", difficulty: "easy", q: "Which ratio links the height and the ground distance directly?", options: ["tan", "cos", "sin", "cosec"], answer: 0, explanation: "tan(angle) = opposite/adjacent = height/distance." },
    { id: "at9", difficulty: "medium", q: "The top of a 30 m tower has an elevation of 45° from a point on the ground. The point is:", options: ["30√3 m away", "15 m away", "60 m away", "30 m away"], answer: 3, explanation: "tan 45° = 30/d ⇒ d = 30 m." },
    { id: "at10", difficulty: "easy", q: "The angle of elevation of the Sun when a tower equals its shadow is:", options: ["0°", "30°", "45°", "60°"], answer: 2, explanation: "tan θ = height/shadow = 1 ⇒ θ = 45°." },
  ],
  shortQuestions: [
    { q: "Define angle of depression.", a: "The angle below the horizontal from the observer's eye to an object that is lower than the observer." },
    { q: "A tower is 20 m high and a point is 20 m away. What is the angle of elevation of the top?", a: "tan θ = 20/20 = 1, so θ = 45°." },
    { q: "Which ratio uses the hypotenuse and the opposite side?", a: "sine (sin)." },
  ],
  longQuestions: [
    { q: "From a point on the ground, the angle of elevation of the top of a 60 m tower is 60°. Find the distance of the point from the foot of the tower.", a: "tan 60° = 60/d ⇒ √3 = 60/d ⇒ d = 60/√3 = 20√3 m ≈ 34.6 m." },
    { q: "An observer 1.5 m tall is 28.5 m from a tower. The angle of elevation of the top of the tower from his eyes is 45°. Find the height of the tower.", a: "From the eye level, height above the eyes = 28.5 × tan 45° = 28.5 m. Adding the observer's height: total tower height = 28.5 + 1.5 = 30 m." },
  ],
  hots: [
    { q: "The angles of elevation of the top of a tower from two points at distances 4 m and 9 m from the base (on the same side) are complementary. Find the height of the tower.", a: "Let the angles be θ and 90° − θ, and height h. Then tan θ = h/9 and tan(90° − θ) = cot θ = h/4. Multiplying: (h/9)(h/4) = tan θ · cot θ = 1, so h² = 36 ⇒ h = 6 m." },
    { q: "Why do we often get 'nice' answers like 10√3 in these problems?", a: "Because the questions use standard angles (30°, 45°, 60°) whose trig values are simple surds, the arithmetic stays clean." },
  ],
  revisionNotes: [
    "Line of sight: eye to object; elevation = up, depression = down.",
    "tan(angle) = height ÷ distance.",
    "Use sin/cos when the hypotenuse (ladder, rope, string) is involved.",
    "Angle of depression = angle of elevation (alternate angles).",
  ],
  keyTakeaways: [
    "A correct, labelled diagram is half the solution.",
    "Pick the ratio that connects the side you know to the side you want.",
    "Watch for the observer's own height in some problems.",
  ],
  faq: [
    { q: "What is the difference between elevation and depression?", a: "Elevation is the angle looking up at a higher object; depression is the angle looking down at a lower object — both measured from the horizontal." },
    { q: "Which trig ratio should I use?", a: "tan for height and ground distance, sin for hypotenuse and opposite, cos for hypotenuse and adjacent." },
    { q: "Do I need to memorise new formulas for this chapter?", a: "No — you reuse the standard trig ratios; the skill is translating the word problem into a right triangle." },
  ],
  related: [
    { classId: "10", subject: "maths", slug: "introduction-to-trigonometry" },
    { classId: "10", subject: "maths", slug: "triangles" },
  ],
};

export default chapter;
