import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "7",
  subject: "maths",
  slug: "constructions-and-tilings",
  title: "Constructions and Tilings",
  order: 14,
  seoTitle: "Constructions and Tilings Class 7 Maths (Ganita Prakash) — Notes & MCQs",
  metaDescription:
    "Class 7 Maths Constructions and Tilings (Ganita Prakash): ruler-and-compass constructions of perpendiculars, parallels and triangles, and tilings (tessellations) of the plane, with examples and an MCQ quiz.",
  overview:
    "Geometry is also about making and patterning shapes. This Class 7 Ganita Prakash chapter uses a ruler and compass to construct perpendiculars, parallel lines and triangles accurately, and explores tilings — how copies of a shape can cover a plane with no gaps or overlaps.",
  objectives: [
    "Construct perpendicular and parallel lines.",
    "Construct triangles from given measures.",
    "Understand tilings (tessellations).",
    "Identify shapes that tile the plane.",
  ],
  concepts: [
    {
      heading: "Tools of construction",
      body: "Accurate geometric drawings use a ruler (for straight lines and lengths) and a compass (for arcs and equal lengths). A construction relies only on these tools, not on measuring angles with a protractor, so the steps must create the required figure exactly using arcs.",
    },
    {
      heading: "Perpendiculars and parallels",
      body: "Using a compass, we can drop a perpendicular from a point to a line, or raise one at a point on a line, by making equal arcs. Parallel lines are constructed by copying an angle so that corresponding angles are equal, which guarantees the new line never meets the original.",
    },
    {
      heading: "Constructing triangles",
      body: "A triangle can be constructed when enough measurements are given: three sides (SSS), two sides and the included angle (SAS), or two angles and the included side (ASA). The same information that proves congruence also determines a unique triangle to construct.",
    },
    {
      heading: "Tilings (tessellations)",
      body: "A tiling, or tessellation, covers a flat surface with copies of one or more shapes leaving no gaps or overlaps. Squares, equilateral triangles and regular hexagons tile by themselves because their angles meet to make 360° around each point, which is why honeycombs are hexagonal.",
    },
  ],
  formulas: [
    { name: "Tiling condition", formula: "shapes meeting at a point have angles summing to 360°" },
    { name: "Triangle construction", formula: "needs SSS, SAS or ASA information" },
  ],
  definitions: [
    { term: "Compass", meaning: "A tool for drawing arcs and marking equal lengths." },
    { term: "Perpendicular", meaning: "A line meeting another at a right angle (90°)." },
    { term: "Tessellation", meaning: "A tiling that covers a plane with no gaps or overlaps." },
    { term: "Regular polygon", meaning: "A polygon with all sides and angles equal." },
  ],
  examples: [
    {
      problem: "Which tool draws arcs in a construction?",
      solution: "The compass.",
    },
    {
      problem: "Name three regular shapes that tile the plane by themselves.",
      solution: "Equilateral triangle, square and regular hexagon.",
    },
    {
      problem: "What information lets you construct a unique triangle?",
      solution: "SSS, SAS or ASA.",
    },
  ],
  commonMistakes: [
    "Using a protractor where a compass construction is required.",
    "Changing the compass width between arcs that should be equal.",
    "Thinking every shape can tile the plane.",
    "Trying to construct a triangle from too little information.",
  ],
  mcqs: [
    { id: "ct1", difficulty: "easy", q: "Arcs in a construction are drawn with a:", options: ["ruler", "protractor", "compass", "set square"], answer: 2, explanation: "A compass draws arcs." },
    { id: "ct2", difficulty: "easy", q: "A line meeting another at 90° is:", options: ["parallel", "curved", "oblique", "perpendicular"], answer: 3, explanation: "A right-angle meeting is perpendicular." },
    { id: "ct3", difficulty: "medium", q: "A tiling that covers a plane with no gaps is a:", options: ["tessellation", "rotation", "reflection", "graph"], answer: 0, explanation: "It is a tessellation." },
    { id: "ct4", difficulty: "medium", q: "Which regular polygon tiles the plane by itself?", options: ["regular pentagon", "regular hexagon", "regular octagon", "regular heptagon"], answer: 1, explanation: "Regular hexagons tile the plane (like honeycombs)." },
    { id: "ct5", difficulty: "easy", q: "Parallel lines:", options: ["always meet", "meet at 90°", "never meet", "cross once"], answer: 2, explanation: "Parallel lines never meet." },
    { id: "ct6", difficulty: "medium", q: "To construct a triangle from three sides, you use:", options: ["AAA", "two angles only", "one side only", "SSS"], answer: 3, explanation: "Three sides is the SSS case." },
    { id: "ct7", difficulty: "hard", q: "Shapes tile around a point when their angles there sum to:", options: ["360°", "90°", "180°", "270°"], answer: 0, explanation: "A full turn around a point is 360°." },
    { id: "ct8", difficulty: "easy", q: "A polygon with all sides and angles equal is:", options: ["irregular", "regular", "curved", "open"], answer: 1, explanation: "It is a regular polygon." },
    { id: "ct9", difficulty: "medium", q: "Which shape does NOT tile the plane by itself?", options: ["square", "equilateral triangle", "regular pentagon", "regular hexagon"], answer: 2, explanation: "A regular pentagon leaves gaps." },
    { id: "ct10", difficulty: "hard", q: "Constructions are meant to be done using only a:", options: ["protractor and ruler", "set square only", "calculator", "ruler and compass"], answer: 3, explanation: "Classical constructions use ruler and compass." },
  ],
  shortQuestions: [
    { q: "Which two tools are used for constructions?", a: "A ruler and a compass." },
    { q: "What is a tessellation?", a: "A tiling that covers a plane with no gaps or overlaps." },
    { q: "Name a regular polygon that does not tile the plane.", a: "A regular pentagon." },
  ],
  longQuestions: [
    { q: "Explain why squares, equilateral triangles and regular hexagons tile the plane.", a: "A shape tiles the plane when copies of it can surround each meeting point completely, with their angles adding up to a full turn of 360° and leaving no gaps or overlaps. A square has 90° angles, and four of them meet to make 360°. An equilateral triangle has 60° angles, and six meet to make 360°. A regular hexagon has 120° angles, and three meet to make 360°. Because each of these angles divides evenly into 360°, the shapes fit perfectly around every point — which is why floors are often tiled with squares and honeycombs are built from hexagons. A regular pentagon, with 108° angles, does not divide 360° evenly, so it cannot tile by itself." },
    { q: "What information is needed to construct a unique triangle, and how does this relate to congruence?", a: "A triangle can be constructed exactly when we are given one of the sets of measurements that also guarantee congruence: three sides (SSS), two sides and the angle between them (SAS), or two angles and the side between them (ASA). Each of these fixes the triangle's shape and size completely, so there is only one possible triangle to draw. This is the same idea as congruence: any two triangles built from the same SSS, SAS or ASA information must be identical. If too little is given — for example only the three angles — the shape is fixed but the size is not, so a unique triangle cannot be constructed." },
  ],
  hots: [
    { q: "Can a regular octagon tile the plane on its own? Explain.", a: "No. Its interior angle is 135°, which does not divide 360° evenly, so octagons alone leave gaps (they tile only when combined with squares)." },
    { q: "Why can't a triangle be constructed from its three angles alone?", a: "Because equal angles fix only the shape, not the size — infinitely many triangles of different sizes share the same angles." },
  ],
  revisionNotes: [
    "Constructions use only a ruler and compass.",
    "Perpendicular = meets at 90°; parallels never meet.",
    "Construct triangles from SSS, SAS or ASA.",
    "Shapes tile when angles around a point total 360°.",
  ],
  keyTakeaways: [
    "A compass makes accurate arcs and equal lengths.",
    "SSS, SAS, ASA each fix a unique triangle.",
    "Squares, triangles and hexagons tile the plane.",
  ],
  faq: [
    { q: "What tools are allowed in a construction?", a: "Only a ruler and a compass." },
    { q: "What is a tessellation?", a: "A pattern of shapes covering a plane with no gaps or overlaps." },
    { q: "Why do hexagons tile the plane?", a: "Three 120° angles meet to make 360° around each point." },
  ],
  related: [
    { classId: "6", subject: "maths", slug: "playing-with-constructions" },
    { classId: "7", subject: "maths", slug: "geometric-twins" },
  ],
};

export default chapter;
