import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "8",
  subject: "maths",
  slug: "tales-by-dots-and-lines",
  title: "Tales by Dots and Lines",
  order: 12,
  seoTitle: "Tales by Dots and Lines Class 8 Maths — Intro to Graphs (Networks) Notes & MCQs",
  metaDescription:
    "Class 8 Maths Tales by Dots and Lines (Ganita Prakash): an introduction to graphs as networks of vertices and edges, the degree of a vertex, paths and circuits, and when a network can be traced in one go, with solved examples and an MCQ quiz.",
  overview:
    "This Class 8 Ganita Prakash chapter introduces graphs in the sense of networks — dots joined by lines. Such graphs model roads between cities, friendships, and circuits. The chapter looks at vertices and edges, the degree of a vertex, paths and circuits, and the neat question of when a network can be drawn in a single stroke.",
  objectives: [
    "Describe a graph as vertices (dots) joined by edges (lines).",
    "Find the degree of a vertex.",
    "Use the rule that degrees add up to twice the number of edges.",
    "Decide when a network can be traced without lifting the pen.",
  ],
  concepts: [
    {
      heading: "Graphs as dots and lines",
      body: "Here a graph is a network: dots called vertices joined by lines called edges. The dots can stand for places, people or junctions, and the lines for the connections between them — roads, friendships or wires. The picture matters only for which dots are joined, not for how the lines are drawn.",
    },
    {
      heading: "Degree of a vertex",
      body: "The degree of a vertex is the number of edges meeting at it. A vertex with an even number of edges is an even vertex, and one with an odd number is an odd vertex. Degrees tell us a lot about how a network behaves.",
    },
    {
      heading: "The handshake idea",
      body: "If we add up the degrees of all vertices, each edge is counted twice — once at each end. So the sum of all degrees equals twice the number of edges: Σ degrees = 2 × (number of edges). A useful consequence is that the number of odd-degree vertices is always even.",
    },
    {
      heading: "Paths, circuits and tracing",
      body: "A path moves along edges from one vertex to another without repeating an edge; a circuit returns to where it started. A famous question asks when a network can be traced in one continuous stroke without lifting the pen or repeating an edge. This is possible exactly when the network has zero or two odd-degree vertices.",
    },
  ],
  formulas: [
    { name: "Degree sum (handshake)", formula: "sum of all degrees = 2 × number of edges" },
    { name: "Traceable in one stroke", formula: "if the network has 0 or 2 odd-degree vertices" },
  ],
  definitions: [
    { term: "Vertex", meaning: "A dot in a graph, representing a point such as a place or person." },
    { term: "Edge", meaning: "A line joining two vertices, representing a connection." },
    { term: "Degree", meaning: "The number of edges meeting at a vertex." },
    { term: "Circuit", meaning: "A path that returns to its starting vertex without repeating an edge." },
  ],
  examples: [
    {
      problem: "A graph has vertices of degrees 2, 3, 3 and 2. What is the total degree, and how many edges?",
      solution: "Total degree = 2+3+3+2 = 10, so edges = 10 ÷ 2 = 5.",
    },
    {
      problem: "How many odd-degree vertices does the graph above have?",
      solution: "Two vertices have odd degree (3 and 3), and two is an even count, as expected.",
    },
    {
      problem: "Can a network with exactly two odd vertices be traced in one stroke?",
      solution: "Yes — a network is traceable in one stroke when it has zero or two odd-degree vertices.",
    },
  ],
  commonMistakes: [
    "Thinking the way the lines are drawn (straight or curved) changes the graph — only the connections matter.",
    "Counting a vertex's degree wrongly when several edges meet there.",
    "Forgetting that each edge adds to two vertices' degrees.",
    "Believing every network can be traced in one stroke — it needs 0 or 2 odd vertices.",
  ],
  mcqs: [
    { id: "dl1", difficulty: "easy", q: "In a graph, the dots are called:", options: ["edges", "vertices", "faces", "paths"], answer: 1, explanation: "The dots are vertices." },
    { id: "dl2", difficulty: "easy", q: "A line joining two vertices is an:", options: ["edge", "arc only", "angle", "axis"], answer: 0, explanation: "It is called an edge." },
    { id: "dl3", difficulty: "medium", q: "The degree of a vertex is the number of:", options: ["vertices", "circuits", "faces", "edges meeting at it"], answer: 3, explanation: "Degree counts edges at that vertex." },
    { id: "dl4", difficulty: "medium", q: "The sum of all degrees in a graph equals:", options: ["number of edges", "half the edges", "number of vertices", "twice the number of edges"], answer: 3, explanation: "Each edge is counted at both ends." },
    { id: "dl5", difficulty: "hard", q: "If the total degree is 12, the number of edges is:", options: ["12", "24", "6", "3"], answer: 2, explanation: "Edges = total degree ÷ 2 = 6." },
    { id: "dl6", difficulty: "easy", q: "A vertex with 3 edges has degree:", options: ["1", "2", "3", "6"], answer: 2, explanation: "Degree equals the number of edges, 3." },
    { id: "dl7", difficulty: "medium", q: "The number of odd-degree vertices in any graph is:", options: ["always odd", "always one", "always zero", "always even"], answer: 3, explanation: "It is always an even number." },
    { id: "dl8", difficulty: "hard", q: "A network can be traced in one stroke if it has:", options: ["any number of odd vertices", "exactly one odd vertex", "zero or two odd vertices", "three odd vertices"], answer: 2, explanation: "Tracing is possible with 0 or 2 odd vertices." },
    { id: "dl9", difficulty: "easy", q: "A path that returns to its start without repeating an edge is a:", options: ["circuit", "vertex", "degree", "net"], answer: 0, explanation: "That is a circuit." },
    { id: "dl10", difficulty: "medium", q: "What matters most in a graph is:", options: ["how lines are drawn", "which vertices are joined", "the colour of dots", "the size of the page"], answer: 1, explanation: "Only the connections between vertices matter." },
  ],
  shortQuestions: [
    { q: "What is the degree of a vertex?", a: "The number of edges meeting at that vertex." },
    { q: "State the handshake rule for graphs.", a: "The sum of all vertex degrees equals twice the number of edges." },
    { q: "When can a network be traced in a single stroke?", a: "When it has zero or two vertices of odd degree." },
  ],
  longQuestions: [
    { q: "Explain why the sum of the degrees of a graph is always twice the number of edges.", a: "Every edge joins exactly two vertices, so when we count the degree at each vertex, that edge is counted once at each of its two ends — a total of two. Adding the degrees of all vertices therefore counts every edge twice, giving sum of degrees = 2 × number of edges. A direct consequence is that the number of odd-degree vertices must be even, since the total of all degrees is an even number." },
    { q: "Describe the rule for tracing a network in one stroke, with an example.", a: "A connected network can be drawn in one continuous stroke, without lifting the pen or repeating an edge, exactly when it has either zero or two vertices of odd degree. If there are no odd vertices, the trace can start anywhere and returns to the start; if there are two, the trace must start at one odd vertex and finish at the other. For example, a single square (each corner has degree 2, all even) can be traced in one stroke, but a network with four odd vertices cannot." },
  ],
  hots: [
    { q: "A network has degrees 4, 4, 3 and 1. Can it be traced in one stroke? Why?", a: "It has exactly two odd-degree vertices (3 and 1), so yes — it can be traced in one stroke, starting at one odd vertex and ending at the other." },
    { q: "Why is it impossible for a graph to have exactly three odd-degree vertices?", a: "Because the number of odd-degree vertices must be even (the degrees sum to twice the edges), so three is impossible." },
  ],
  revisionNotes: [
    "Graph = vertices (dots) joined by edges (lines); only connections matter.",
    "Degree = edges at a vertex; even or odd vertex.",
    "Sum of degrees = 2 × edges; odd vertices come in even numbers.",
    "Traceable in one stroke ⇔ 0 or 2 odd vertices.",
  ],
  keyTakeaways: [
    "A graph models connections, not shapes.",
    "Each edge contributes to two degrees.",
    "Odd vertices decide whether a network can be drawn in one stroke.",
  ],
  faq: [
    { q: "What is a graph in this chapter?", a: "A network of dots (vertices) joined by lines (edges) showing connections." },
    { q: "What does the degree of a vertex mean?", a: "How many edges meet at that vertex." },
    { q: "How do I know if a network can be traced in one stroke?", a: "It can if it has zero or exactly two odd-degree vertices." },
  ],
  related: [
    { classId: "8", subject: "maths", slug: "number-play" },
  ],
};

export default chapter;
