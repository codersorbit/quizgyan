import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "10",
  subject: "science",
  slug: "how-do-organisms-reproduce",
  title: "How do Organisms Reproduce?",
  order: 7,
  seoTitle:
    "How do Organisms Reproduce Class 10 CBSE Notes, MCQs, Quiz & Diagrams",
  metaDescription:
    "Class 10 Science How do Organisms Reproduce: asexual and sexual reproduction, modes like fission, budding and vegetative propagation, reproduction in flowering plants and humans, MCQ quiz and important questions.",
  overview:
    "Reproduction is the process by which living organisms produce new individuals of their own kind, ensuring that a species continues. This chapter covers the different modes of asexual reproduction, sexual reproduction in flowering plants and humans, and the importance of variation and reproductive health. It is an important and diagram-rich biology chapter for Class 10.",
  objectives: [
    "Distinguish between asexual and sexual reproduction.",
    "Describe the modes of asexual reproduction with examples.",
    "Explain reproduction in flowering plants (pollination and fertilisation).",
    "Outline the human reproductive system and its functions.",
    "Appreciate variation and the basics of reproductive health.",
  ],
  concepts: [
    {
      heading: "Asexual reproduction",
      body: "A single parent produces offspring that are genetically identical. Modes include binary fission (Amoeba), multiple fission (Plasmodium), budding (yeast, Hydra), fragmentation (Spirogyra), regeneration (Planaria), spore formation (Rhizopus) and vegetative propagation (in plants).",
    },
    {
      heading: "Sexual reproduction and variation",
      body: "Two parents contribute gametes (sex cells) that fuse during fertilisation to form a zygote. Because genes are combined from two parents, the offspring show variation, which is important for the survival and evolution of a species.",
    },
    {
      heading: "Reproduction in flowering plants",
      body: "The flower is the reproductive organ. The stamen (anther + filament) is the male part producing pollen; the carpel/pistil (stigma, style, ovary) is the female part. Pollination transfers pollen to the stigma, and fertilisation forms a seed inside the ovary, which becomes the fruit.",
    },
    {
      heading: "Reproduction in humans",
      body: "The male system (testes) produces sperm; the female system (ovaries) produces eggs. After fertilisation in the oviduct, the zygote develops in the uterus, nourished through the placenta. Puberty marks the start of reproductive maturity.",
    },
  ],
  formulas: [],
  definitions: [
    { term: "Asexual reproduction", meaning: "Reproduction from a single parent without the fusion of gametes, giving genetically identical offspring." },
    { term: "Fertilisation", meaning: "The fusion of male and female gametes to form a zygote." },
    { term: "Pollination", meaning: "The transfer of pollen from the anther to the stigma of a flower." },
    { term: "Vegetative propagation", meaning: "Asexual reproduction in plants from vegetative parts such as roots, stems or leaves." },
  ],
  examples: [
    {
      problem: "How does Amoeba reproduce?",
      solution:
        "Amoeba reproduces by binary fission — its nucleus divides first, followed by the cytoplasm, splitting the single parent into two identical daughter cells.",
    },
    {
      problem: "Why does sexual reproduction lead to variation but asexual reproduction does not?",
      solution:
        "In sexual reproduction, offspring receive a new combination of genes from two parents, creating variation. In asexual reproduction, the single parent's genes are copied exactly, so offspring are (nearly) identical.",
    },
    {
      problem: "Name one advantage of vegetative propagation.",
      solution:
        "Plants grown by vegetative propagation (like from cuttings) are genetically identical to the parent, flower earlier, and can reproduce even if they do not produce viable seeds.",
    },
  ],
  commonMistakes: [
    "Confusing pollination (transfer of pollen) with fertilisation (fusion of gametes).",
    "Mixing up the male (stamen) and female (carpel) parts of a flower.",
    "Saying asexual reproduction produces variation — it produces identical offspring.",
    "Thinking the placenta produces the baby's blood — it allows exchange between mother and foetus.",
  ],
  mcqs: [
    { id: "hr1", difficulty: "easy", q: "Amoeba reproduces by:", options: ["fragmentation", "budding", "binary fission", "spore formation"], answer: 2, explanation: "Amoeba divides into two by binary fission." },
    { id: "hr2", difficulty: "easy", q: "Reproduction involving two parents and gametes is:", options: ["asexual", "fission", "sexual", "vegetative"], answer: 2, explanation: "Sexual reproduction involves two parents and the fusion of gametes." },
    { id: "hr3", difficulty: "easy", q: "The male reproductive part of a flower is the:", options: ["stamen", "ovary", "carpel", "stigma"], answer: 0, explanation: "The stamen (anther + filament) is the male part." },
    { id: "hr4", difficulty: "medium", q: "The transfer of pollen from anther to stigma is called:", options: ["pollination", "germination", "regeneration", "fertilisation"], answer: 0, explanation: "This transfer is pollination." },
    { id: "hr5", difficulty: "medium", q: "Yeast and Hydra reproduce by:", options: ["budding", "vegetative propagation", "binary fission", "fragmentation"], answer: 0, explanation: "Yeast and Hydra reproduce by budding." },
    { id: "hr6", difficulty: "easy", q: "The fusion of male and female gametes is called:", options: ["fission", "germination", "pollination", "fertilisation"], answer: 3, explanation: "Fertilisation forms the zygote." },
    { id: "hr7", difficulty: "medium", q: "Planaria can regrow its body parts by:", options: ["regeneration", "spore formation", "budding", "fission"], answer: 0, explanation: "Planaria shows regeneration." },
    { id: "hr8", difficulty: "easy", q: "In humans, the developing embryo is nourished through the:", options: ["ovary", "uterus wall only", "placenta", "oviduct"], answer: 2, explanation: "The placenta allows exchange of nutrients and wastes." },
    { id: "hr9", difficulty: "medium", q: "Spore formation is seen in:", options: ["Rhizopus (bread mould)", "humans", "Amoeba", "Hydra"], answer: 0, explanation: "Rhizopus reproduces by forming spores." },
    { id: "hr10", difficulty: "hard", q: "The female gamete in humans is produced by the:", options: ["oviduct", "ovaries", "uterus", "testes"], answer: 1, explanation: "Ovaries produce the egg (female gamete)." },
  ],
  shortQuestions: [
    { q: "What is a zygote?", a: "The single cell formed when the male and female gametes fuse during fertilisation." },
    { q: "Name the female reproductive part of a flower.", a: "The carpel (or pistil), made of stigma, style and ovary." },
    { q: "Give one example each of fragmentation and regeneration.", a: "Fragmentation: Spirogyra; Regeneration: Planaria." },
  ],
  longQuestions: [
    { q: "Describe the steps of sexual reproduction in a flowering plant.", a: "Pollen from the anther reaches the stigma (pollination). A pollen tube grows down the style to the ovary, carrying the male gametes. One male gamete fuses with the egg (fertilisation) to form a zygote inside the ovule. The ovule develops into a seed and the ovary into a fruit, while other floral parts usually wither." },
    { q: "Explain why variation is important for a species.", a: "Variation gives the individuals of a species a range of traits. If the environment changes, some variants may be better suited to survive and reproduce, helping the species adapt over time. Without variation, a sudden change could wipe out a whole population." },
  ],
  hots: [
    { q: "Why are offspring produced by asexual reproduction called clones?", a: "They develop from a single parent by simple cell division, so they carry exactly the same genetic material as the parent and as one another — making them clones." },
    { q: "Why do organisms that reproduce sexually adapt better to changing environments?", a: "Sexual reproduction shuffles genes from two parents, producing varied offspring. This diversity raises the chance that some individuals can cope with new conditions, improving the species' survival." },
  ],
  revisionNotes: [
    "Asexual: one parent, identical offspring (fission, budding, fragmentation, spores, vegetative).",
    "Sexual: two parents, gametes fuse, variation results.",
    "Flower: stamen (male), carpel (female); pollination then fertilisation.",
    "Humans: testes → sperm, ovaries → egg; embryo nourished by placenta.",
  ],
  keyTakeaways: [
    "Variation is the main advantage of sexual reproduction.",
    "Don't confuse pollination with fertilisation.",
    "Know one organism for each mode of asexual reproduction.",
  ],
  faq: [
    { q: "What is the difference between asexual and sexual reproduction?", a: "Asexual reproduction needs one parent and gives identical offspring; sexual reproduction needs two parents and produces offspring with variation." },
    { q: "What is the role of the placenta?", a: "It connects the developing foetus to the mother and allows exchange of nutrients, oxygen and waste between them." },
    { q: "Why is reproduction important?", a: "It ensures the continuation of a species by producing new individuals and, through variation, supports survival and evolution." },
  ],
  related: [
    { classId: "10", subject: "science", slug: "heredity" },
    { classId: "10", subject: "science", slug: "life-processes" },
  ],
};

export default chapter;
