import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "9",
  subject: "science",
  slug: "sound",
  title: "Sound",
  order: 11,
  seoTitle: "Sound Class 9 CBSE Notes, MCQs, Quiz & Wave Equation",
  metaDescription:
    "Class 9 Science Sound: production and propagation of sound, longitudinal waves, frequency, amplitude and speed, v = fλ, echo and reverberation, SONAR and range of hearing, solved numericals and MCQ quiz.",
  overview:
    "Sound is a form of energy that travels as a wave and lets us hear. This Class 9 chapter explains how sound is produced and propagated, why it needs a medium, the characteristics of sound waves, the relation v = fλ, reflection of sound (echo and reverberation), SONAR, and the range of human hearing. It rounds off the Class 9 physics section.",
  objectives: [
    "Explain how sound is produced and propagated.",
    "Describe sound as a longitudinal wave.",
    "Relate frequency, wavelength and speed using v = fλ.",
    "Explain echo and reverberation.",
    "Describe SONAR and the range of human hearing.",
  ],
  concepts: [
    {
      heading: "Production and propagation of sound",
      body: "Sound is produced by vibrating objects and travels as a wave through a material medium (solid, liquid or gas). It cannot travel through a vacuum because there are no particles to carry the vibration.",
    },
    {
      heading: "Sound as a longitudinal wave",
      body: "In a sound wave, particles of the medium vibrate back and forth along the direction the wave travels, forming compressions (high pressure) and rarefactions (low pressure) — this makes sound a longitudinal wave.",
    },
    {
      heading: "Characteristics and the wave equation",
      body: "Frequency (f) is the number of vibrations per second (hertz), wavelength (λ) is the distance of one complete wave, and amplitude decides loudness. The speed of a wave is v = fλ. Pitch depends on frequency; loudness depends on amplitude.",
    },
    {
      heading: "Reflection of sound, SONAR and hearing range",
      body: "An echo is a reflected sound heard distinctly when the reflecting surface is far enough (a minimum interval of 0.1 s). Persistence of sound due to repeated reflections is reverberation. SONAR uses reflected ultrasound to find distances under water. Humans hear roughly 20 Hz to 20,000 Hz.",
    },
  ],
  formulas: [
    { name: "Wave equation", formula: "v = f × λ" },
    { name: "Speed of sound in air", formula: "≈ 344 m/s (at 22 °C)" },
    { name: "SONAR distance", formula: "2d = v × t  ⇒  d = (v × t) ÷ 2" },
  ],
  definitions: [
    { term: "Frequency", meaning: "The number of complete vibrations per second, measured in hertz (Hz)." },
    { term: "Wavelength", meaning: "The distance covered in one complete wave (compression + rarefaction)." },
    { term: "Echo", meaning: "A sound heard again after reflection from a distant surface." },
    { term: "Ultrasound", meaning: "Sound of frequency above 20,000 Hz, beyond the range of human hearing." },
  ],
  examples: [
    {
      problem: "A sound wave has a frequency of 500 Hz and a wavelength of 0.66 m. Find its speed.",
      solution: "v = fλ = 500 × 0.66 = 330 m/s.",
    },
    {
      problem: "Why can't sound travel through a vacuum?",
      solution:
        "Sound needs a material medium with particles to pass on the vibrations; a vacuum has no particles, so sound cannot travel through it.",
    },
    {
      problem: "A SONAR signal returns in 4 s, with sound speed 1500 m/s in water. Find the depth.",
      solution: "Total distance = v × t = 1500 × 4 = 6000 m; depth = 6000 ÷ 2 = 3000 m.",
    },
  ],
  commonMistakes: [
    "Saying sound can travel through a vacuum (it cannot).",
    "Confusing pitch (frequency) with loudness (amplitude).",
    "Forgetting that an echo needs the surface to be far enough (≥ 0.1 s interval).",
    "Treating sound as a transverse wave — it is longitudinal.",
  ],
  mcqs: [
    { id: "so1", difficulty: "easy", q: "Sound is produced by:", options: ["vibrating objects", "heating", "still objects", "lightning only"], answer: 0, explanation: "Vibrating objects produce sound." },
    { id: "so2", difficulty: "easy", q: "Sound cannot travel through a:", options: ["solid", "gas", "vacuum", "liquid"], answer: 2, explanation: "A vacuum has no particles to carry sound." },
    { id: "so3", difficulty: "medium", q: "Sound waves are:", options: ["electromagnetic", "longitudinal", "transverse", "stationary only"], answer: 1, explanation: "Sound travels as a longitudinal wave." },
    { id: "so4", difficulty: "medium", q: "The wave equation is:", options: ["v = f + λ", "v = fλ", "v = f/λ", "v = λ/f"], answer: 1, explanation: "Speed = frequency × wavelength." },
    { id: "so5", difficulty: "easy", q: "The unit of frequency is the:", options: ["hertz", "second", "decibel", "metre"], answer: 0, explanation: "Frequency is measured in hertz (Hz)." },
    { id: "so6", difficulty: "medium", q: "The pitch of a sound depends on its:", options: ["wavelength only", "frequency", "amplitude", "speed"], answer: 1, explanation: "Higher frequency means higher pitch." },
    { id: "so7", difficulty: "easy", q: "A reflected sound heard distinctly is called a/an:", options: ["tone", "noise", "echo", "pitch"], answer: 2, explanation: "A distinctly reflected sound is an echo." },
    { id: "so8", difficulty: "medium", q: "The audible range of human hearing is about:", options: ["0 Hz – 20 Hz", "20 Hz – 20,000 Hz", "20 kHz – 200 kHz", "2 Hz – 200 Hz"], answer: 1, explanation: "Humans hear roughly 20 Hz to 20,000 Hz." },
    { id: "so9", difficulty: "easy", q: "Loudness of a sound depends on its:", options: ["frequency", "amplitude", "speed", "wavelength"], answer: 1, explanation: "Greater amplitude means louder sound." },
    { id: "so10", difficulty: "hard", q: "A wave of frequency 200 Hz and wavelength 1.5 m travels at:", options: ["201.5 m/s", "133 m/s", "300 m/s", "150 m/s"], answer: 2, explanation: "v = fλ = 200 × 1.5 = 300 m/s." },
    { id: "bk9s16", difficulty: "medium", q: "Sound cannot travel through a vacuum because it needs a?", options: ["Magnet", "Mirror", "Battery", "Material medium"], answer: 3, explanation: "Sound needs a medium (solid, liquid or gas) to travel." },
  ],
  shortQuestions: [
    { q: "Why is sound called a mechanical wave?", a: "Because it needs a material medium to travel and cannot pass through a vacuum." },
    { q: "What is reverberation?", a: "The persistence of sound caused by repeated reflections in an enclosed space." },
    { q: "Define ultrasound.", a: "Sound of frequency above 20,000 Hz, beyond human hearing." },
  ],
  longQuestions: [
    { q: "Explain the formation of an echo and the condition required to hear it.", a: "An echo is heard when sound reflects off a distant surface and returns to the listener. Because the sensation of sound persists for about 0.1 s, the reflected sound must arrive at least 0.1 s after the original. In air (speed ≈ 344 m/s), this needs the reflecting surface to be at least about 17 m away." },
    { q: "Describe how SONAR is used to find the depth of the sea.", a: "SONAR (Sound Navigation And Ranging) sends ultrasonic waves into the water; they reflect off the seabed and return to a detector. By measuring the time t for the round trip and knowing the speed v of sound in water, the depth d is found from 2d = v × t, so d = (v × t)/2." },
  ],
  hots: [
    { q: "Why is an echo usually not heard inside a small room?", a: "The walls are too close, so the reflected sound returns in less than 0.1 s and merges with the original sound instead of being heard separately." },
    { q: "Two children talk through a long iron pipe. Why is the sound clearer through the pipe than through the air?", a: "Sound travels faster and with less spreading through solids like iron than through air, so it reaches the other end louder and clearer." },
  ],
  revisionNotes: [
    "Sound is produced by vibrations and needs a medium (no vacuum).",
    "It is a longitudinal wave (compressions and rarefactions).",
    "v = fλ; pitch ∝ frequency, loudness ∝ amplitude.",
    "Echo needs ≥ 0.1 s; SONAR uses reflected ultrasound; hearing 20 Hz–20 kHz.",
  ],
  keyTakeaways: [
    "Sound is mechanical and longitudinal.",
    "Use v = fλ for wave numericals.",
    "Echo and SONAR both rely on reflection of sound.",
  ],
  faq: [
    { q: "Why can't sound travel in a vacuum?", a: "Sound needs particles of a medium to pass on its vibrations, and a vacuum has none." },
    { q: "What is the difference between pitch and loudness?", a: "Pitch depends on the frequency of the sound; loudness depends on its amplitude." },
    { q: "What is SONAR used for?", a: "It uses reflected ultrasound to measure distances and depths under water, such as the depth of the sea." },
  ],
  related: [
    { classId: "9", subject: "science", slug: "work-and-energy" },
    { classId: "9", subject: "science", slug: "motion" },
  ],
};

export default chapter;
