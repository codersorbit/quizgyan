import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "8",
  subject: "maths",
  slug: "exploring-some-geometric-themes",
  title: "Exploring Some Geometric Themes",
  order: 11,
  seoTitle: "Exploring Some Geometric Themes Class 8 Maths — Solid Shapes & Euler's Formula",
  metaDescription:
    "Class 8 Maths Exploring Some Geometric Themes (Ganita Prakash): 3D solid shapes, faces, edges and vertices, nets of solids, views of objects, and Euler's relation F + V − E = 2, with solved examples and an MCQ quiz.",
  overview:
    "This Class 8 chapter explores shapes in space. It looks at common solids and their faces, edges and vertices, at how flat nets fold into solids, at the different views of an object, and at Euler's neat relation connecting faces, vertices and edges of a polyhedron.",
  objectives: [
    "Identify faces, edges and vertices of solids.",
    "Match solids with their nets.",
    "Describe top, front and side views of objects.",
    "Verify Euler's relation F + V − E = 2.",
  ],
  concepts: [
    {
      heading: "Solids and polyhedra",
      body: "A solid occupies space and has three dimensions. A polyhedron is a solid bounded by flat polygonal faces, such as a cube, cuboid, prism or pyramid; solids with curved surfaces, like the sphere, cylinder and cone, are not polyhedra. Where faces meet we get edges, and where edges meet we get vertices (corners).",
    },
    {
      heading: "Faces, edges and vertices",
      body: "Counting these features describes a solid. A cube has 6 faces, 12 edges and 8 vertices; a square pyramid has 5 faces, 8 edges and 5 vertices. A face is a flat surface, an edge is a line where two faces meet, and a vertex is a point where edges meet.",
    },
    {
      heading: "Nets and views",
      body: "A net is a flat figure that folds up to make a solid; a cube, for example, can be unfolded into six joined squares. We can also picture a solid by its views — the top view, front view and side view — which is how objects are drawn in plans and used in design.",
    },
    {
      heading: "Euler's relation",
      body: "For any convex polyhedron, the numbers of faces (F), vertices (V) and edges (E) satisfy F + V − E = 2. For a cube, 6 + 8 − 12 = 2, and for a square pyramid, 5 + 5 − 8 = 2. This elegant rule links the parts of a solid.",
    },
  ],
  formulas: [
    { name: "Euler's relation", formula: "F + V − E = 2 (convex polyhedron)" },
    { name: "Cube features", formula: "faces 6, edges 12, vertices 8" },
  ],
  definitions: [
    { term: "Polyhedron", meaning: "A solid bounded entirely by flat polygonal faces." },
    { term: "Face", meaning: "A flat surface of a solid." },
    { term: "Edge", meaning: "A line segment where two faces of a solid meet." },
    { term: "Net", meaning: "A flat shape that can be folded to form a solid." },
  ],
  examples: [
    {
      problem: "How many faces, edges and vertices does a cuboid have?",
      solution: "A cuboid has 6 faces, 12 edges and 8 vertices.",
    },
    {
      problem: "Verify Euler's relation for a triangular pyramid (tetrahedron) with F = 4, V = 4.",
      solution: "F + V − E = 2 → 4 + 4 − E = 2 → E = 6, which matches the tetrahedron's 6 edges.",
    },
    {
      problem: "Is a cylinder a polyhedron?",
      solution: "No — it has curved surfaces, so it is not a polyhedron.",
    },
  ],
  commonMistakes: [
    "Counting a curved surface as a polygonal face (a cylinder is not a polyhedron).",
    "Confusing edges (lines) with vertices (corners).",
    "Assuming every flat arrangement of squares folds into a cube — only certain nets do.",
    "Misapplying Euler's relation to solids with holes or curved faces.",
  ],
  mcqs: [
    { id: "gt1", difficulty: "easy", q: "A cube has how many faces?", options: ["4", "6", "8", "12"], answer: 1, explanation: "A cube has 6 square faces." },
    { id: "gt2", difficulty: "medium", q: "A line where two faces meet is an:", options: ["edge", "vertex", "axis", "arc"], answer: 0, explanation: "Two faces meet at an edge." },
    { id: "gt3", difficulty: "easy", q: "Which solid is NOT a polyhedron?", options: ["cube", "prism", "sphere", "pyramid"], answer: 2, explanation: "A sphere has a curved surface, so it is not a polyhedron." },
    { id: "gt4", difficulty: "medium", q: "Euler's relation is:", options: ["F + V + E = 2", "F × V = E", "F − V + E = 2", "F + V − E = 2"], answer: 3, explanation: "For a convex polyhedron, F + V − E = 2." },
    { id: "gt5", difficulty: "easy", q: "A cube has how many vertices?", options: ["6", "12", "8", "4"], answer: 2, explanation: "A cube has 8 corners (vertices)." },
    { id: "gt6", difficulty: "hard", q: "A solid has 5 faces and 6 vertices. Its number of edges is:", options: ["9", "11", "7", "8"], answer: 0, explanation: "F + V − E = 2 → 5 + 6 − E = 2 → E = 9." },
    { id: "gt7", difficulty: "medium", q: "A flat shape that folds into a solid is a:", options: ["view", "net", "face", "plan"], answer: 1, explanation: "Such a shape is called a net." },
    { id: "gt8", difficulty: "easy", q: "A point where edges meet is a:", options: ["face", "net", "vertex", "edge"], answer: 2, explanation: "Edges meet at a vertex." },
    { id: "gt9", difficulty: "medium", q: "A cube has how many edges?", options: ["8", "6", "10", "12"], answer: 3, explanation: "A cube has 12 edges." },
    { id: "gt10", difficulty: "hard", q: "For a square pyramid (5 faces, 5 vertices), the number of edges is:", options: ["7", "10", "9", "8"], answer: 3, explanation: "5 + 5 − E = 2 → E = 8." },
  ],
  shortQuestions: [
    { q: "What is a polyhedron?", a: "A solid whose surfaces are all flat polygons, such as a cube or pyramid." },
    { q: "State Euler's relation.", a: "F + V − E = 2 for a convex polyhedron." },
    { q: "What is a net?", a: "A flat figure that can be folded to form a solid." },
  ],
  longQuestions: [
    { q: "Describe the faces, edges and vertices of a cube and a square pyramid, and check Euler's relation for each.", a: "A cube has 6 faces, 12 edges and 8 vertices: F + V − E = 6 + 8 − 12 = 2. A square pyramid has a square base and four triangular faces, giving 5 faces, 8 edges and 5 vertices: F + V − E = 5 + 5 − 8 = 2. Both satisfy Euler's relation, which holds for every convex polyhedron." },
    { q: "Explain how nets and views help us understand solids, with examples.", a: "A net is the solid 'unfolded' into a flat shape; folding it rebuilds the solid. For example, six squares joined in a cross fold into a cube, and a square with four triangles folds into a square pyramid. Views describe a solid as seen from different directions — top, front and side — so a cylinder seen from the top looks like a circle but from the front like a rectangle. Nets and views let us represent three-dimensional objects on flat paper." },
  ],
  hots: [
    { q: "A solid has 8 faces and 12 vertices. How many edges does it have?", a: "By Euler's relation, 8 + 12 − E = 2, so E = 18 edges." },
    { q: "Why can the same cube be drawn as different two-dimensional views?", a: "Because each view shows only one direction; the top, front and side reveal different faces, so several flat pictures together describe the single solid." },
  ],
  revisionNotes: [
    "Polyhedron = flat faces only; sphere, cylinder, cone are not polyhedra.",
    "Face (flat surface), edge (faces meet), vertex (edges meet).",
    "Cube: 6 faces, 12 edges, 8 vertices.",
    "Euler's relation: F + V − E = 2.",
  ],
  keyTakeaways: [
    "Counting faces, edges and vertices describes any solid.",
    "Nets fold flat shapes into solids; views flatten solids onto paper.",
    "Euler's relation links F, V and E for convex polyhedra.",
  ],
  faq: [
    { q: "What is the difference between an edge and a vertex?", a: "An edge is a line where two faces meet; a vertex is a corner point where edges meet." },
    { q: "Does Euler's relation work for a sphere?", a: "No — it applies to convex polyhedra with flat faces, not to curved solids." },
    { q: "What is a net of a solid?", a: "A flat arrangement of its faces that folds up to form the solid." },
  ],
  related: [
    { classId: "8", subject: "maths", slug: "quadrilaterals" },
    { classId: "9", subject: "maths", slug: "surface-areas-and-volumes" },
  ],
};

export default chapter;
