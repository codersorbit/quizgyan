import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "10",
  subject: "science",
  slug: "the-human-eye-and-the-colourful-world",
  title: "The Human Eye and the Colourful World",
  order: 10,
  seoTitle:
    "The Human Eye and the Colourful World Class 10 CBSE Notes, MCQs & Quiz",
  metaDescription:
    "Class 10 Science The Human Eye and the Colourful World: structure of the eye, accommodation, defects of vision and their correction, dispersion through a prism, atmospheric refraction and scattering of light, MCQ quiz and important questions.",
  overview:
    "This chapter applies the optics of lenses to the human eye and to natural phenomena in the sky. You will learn how the eye forms images and focuses at different distances, the common defects of vision and the lenses that correct them, how a prism splits white light, and why the sky is blue and the setting Sun is red. It is a scoring, concept-rich physics chapter.",
  objectives: [
    "Label the parts of the human eye and their functions.",
    "Explain accommodation and the least distance of distinct vision.",
    "Identify defects of vision and the lenses used to correct them.",
    "Explain dispersion of white light through a prism.",
    "Explain atmospheric refraction and scattering effects.",
  ],
  concepts: [
    {
      heading: "Structure of the eye",
      body: "Light enters through the cornea, passes the pupil (whose size is controlled by the iris), and is focused by the eye lens onto the retina, forming a real, inverted image. Light-sensitive cells on the retina send signals to the brain through the optic nerve.",
    },
    {
      heading: "Accommodation",
      body: "The ciliary muscles change the focal length of the eye lens so that both near and far objects are focused on the retina — this ability is called accommodation. The least distance of distinct vision for a normal eye is about 25 cm.",
    },
    {
      heading: "Defects of vision and correction",
      body: "Myopia (short-sightedness): distant objects blur because the image forms in front of the retina — corrected with a concave lens. Hypermetropia (long-sightedness): near objects blur because the image forms behind the retina — corrected with a convex lens. Presbyopia is an age-related loss of accommodation, often corrected with bifocal lenses.",
    },
    {
      heading: "Dispersion, atmospheric refraction and scattering",
      body: "A prism splits white light into its seven colours (VIBGYOR) because each colour bends differently — this is dispersion. Atmospheric refraction makes stars twinkle and the Sun appear to rise early and set late. Scattering of light explains the blue colour of the clear sky and the red colour of the Sun at sunrise and sunset.",
    },
  ],
  formulas: [
    { name: "Least distance of distinct vision", formula: "≈ 25 cm (normal eye)" },
    { name: "Power of a lens", formula: "P = 1/f (f in metres), unit dioptre (D)" },
    { name: "Myopia correction", formula: "concave (diverging) lens, negative power" },
    { name: "Hypermetropia correction", formula: "convex (converging) lens, positive power" },
  ],
  definitions: [
    { term: "Accommodation", meaning: "The ability of the eye lens to adjust its focal length to focus objects at different distances." },
    { term: "Myopia", meaning: "Short-sightedness, where distant objects cannot be seen clearly; corrected with a concave lens." },
    { term: "Hypermetropia", meaning: "Long-sightedness, where near objects cannot be seen clearly; corrected with a convex lens." },
    { term: "Dispersion", meaning: "The splitting of white light into its component colours." },
  ],
  examples: [
    {
      problem: "A person cannot see distant objects clearly. Which defect is this and how is it corrected?",
      solution:
        "This is myopia (short-sightedness); the image forms in front of the retina. It is corrected using a concave (diverging) lens of suitable negative power.",
    },
    {
      problem: "Why does the sky appear blue?",
      solution:
        "Air molecules scatter shorter wavelengths (blue) much more than longer ones (red). The scattered blue light reaches our eyes from all directions, making the clear sky look blue.",
    },
    {
      problem: "Why does the Sun look reddish at sunrise and sunset?",
      solution:
        "At these times sunlight travels through more atmosphere, so most of the blue light is scattered away and mainly the longer-wavelength red light reaches us, making the Sun appear red.",
    },
  ],
  commonMistakes: [
    "Swapping the corrective lenses: myopia uses concave, hypermetropia uses convex.",
    "Saying the eye forms an erect image — the retinal image is real and inverted.",
    "Confusing dispersion (splitting of colours) with scattering (redirection by particles).",
    "Forgetting that scattering of blue light, not absorption, makes the sky blue.",
  ],
  mcqs: [
    { id: "ey1", difficulty: "easy", q: "The image formed on the retina is:", options: ["virtual and erect", "virtual and inverted", "real and inverted", "real and erect"], answer: 2, explanation: "The eye lens forms a real, inverted image on the retina." },
    { id: "ey2", difficulty: "easy", q: "The least distance of distinct vision for a normal eye is about:", options: ["1 m", "10 cm", "5 cm", "25 cm"], answer: 3, explanation: "It is about 25 cm." },
    { id: "ey3", difficulty: "medium", q: "Myopia is corrected using a:", options: ["plane mirror", "concave lens", "convex lens", "prism"], answer: 1, explanation: "A concave (diverging) lens corrects short-sightedness." },
    { id: "ey4", difficulty: "medium", q: "Hypermetropia is corrected using a:", options: ["concave lens", "concave mirror", "cylindrical lens", "convex lens"], answer: 3, explanation: "A convex (converging) lens corrects long-sightedness." },
    { id: "ey5", difficulty: "easy", q: "The splitting of white light into seven colours is called:", options: ["refraction", "dispersion", "reflection", "scattering"], answer: 1, explanation: "Splitting into VIBGYOR is dispersion." },
    { id: "ey6", difficulty: "easy", q: "The part of the eye that controls the size of the pupil is the:", options: ["retina", "lens", "cornea", "iris"], answer: 3, explanation: "The iris adjusts the pupil size." },
    { id: "ey7", difficulty: "medium", q: "The blue colour of the sky is due to:", options: ["scattering of light", "absorption", "dispersion", "reflection"], answer: 0, explanation: "Scattering of shorter (blue) wavelengths makes the sky blue." },
    { id: "ey8", difficulty: "medium", q: "The twinkling of stars is due to:", options: ["total internal reflection", "atmospheric refraction", "reflection", "dispersion"], answer: 1, explanation: "Changing atmospheric refraction makes star light flicker." },
    { id: "ey9", difficulty: "easy", q: "The ability of the eye to focus objects at different distances is:", options: ["accommodation", "dispersion", "adaptation", "persistence"], answer: 0, explanation: "This adjustment is called accommodation." },
    { id: "ey10", difficulty: "hard", q: "The Sun appears reddish at sunset because at the horizon:", options: ["blue light is scattered away and red reaches us", "of total internal reflection", "the Sun is actually red", "red light is scattered most"], answer: 0, explanation: "Longer path scatters blue away; mainly red light reaches the eye." },
    { id: "bk10s11", difficulty: "medium", q: "The image formed on the retina of the human eye is?", options: ["Virtual and erect", "Real and erect", "Virtual and inverted", "Real and inverted"], answer: 3, explanation: "The eye lens forms a real, inverted image on the retina." },
    { id: "bk10s12", difficulty: "hard", q: "The defect of vision in which a person cannot see distant objects clearly is?", options: ["Myopia", "Hypermetropia", "Cataract", "Colour blindness"], answer: 0, explanation: "Myopia (short-sightedness) blurs distant objects." },
  ],
  shortQuestions: [
    { q: "Which lens corrects short-sightedness?", a: "A concave (diverging) lens." },
    { q: "What is the function of the retina?", a: "It is the light-sensitive screen on which the image forms; its cells send signals to the brain." },
    { q: "Name the seven colours of the spectrum in order.", a: "Violet, Indigo, Blue, Green, Yellow, Orange, Red (VIBGYOR)." },
  ],
  longQuestions: [
    { q: "Explain myopia, its cause and correction with the help of lens power.", a: "In myopia, the eyeball is too long or the lens too curved, so the image of a distant object forms in front of the retina and looks blurred. A concave (diverging) lens of suitable negative power is used; it spreads the rays slightly before they enter the eye so the image shifts back onto the retina." },
    { q: "Why is the colour of the sky blue but the Sun red at sunrise and sunset?", a: "Sunlight is scattered by tiny air molecules. Blue (shorter wavelength) scatters much more than red, so the daytime sky looks blue. At sunrise and sunset the light passes through a thicker layer of atmosphere, scattering away most of the blue; mainly the longer-wavelength red light reaches us, so the Sun looks red." },
  ],
  hots: [
    { q: "Why do planets not twinkle but stars do?", a: "Stars are point sources, so atmospheric refraction makes their tiny light flicker. Planets are nearer and appear as small discs (many points), and the flickering of all those points averages out, so planets do not twinkle." },
    { q: "Why is a red colour used for danger signals and traffic stop lights?", a: "Red light has the longest wavelength and is scattered the least by fog and dust, so it travels farthest and remains visible from a long distance." },
  ],
  revisionNotes: [
    "Eye forms a real, inverted image on the retina; iris controls the pupil.",
    "Accommodation via ciliary muscles; near point ≈ 25 cm.",
    "Myopia → concave lens; hypermetropia → convex lens.",
    "Dispersion splits white light; scattering explains blue sky and red Sun.",
  ],
  keyTakeaways: [
    "Remember: concave for myopia, convex for hypermetropia.",
    "Scattering, not dispersion, causes the blue sky and red Sun.",
    "Atmospheric refraction explains twinkling stars and early sunrise.",
  ],
  faq: [
    { q: "What is the difference between myopia and hypermetropia?", a: "In myopia, distant objects are blurred (corrected with a concave lens); in hypermetropia, near objects are blurred (corrected with a convex lens)." },
    { q: "Why is the sky blue?", a: "Air molecules scatter blue light much more than red, and the scattered blue light reaching us from all directions makes the sky look blue." },
    { q: "What is dispersion of light?", a: "The splitting of white light into its seven component colours, as seen when light passes through a prism." },
  ],
  related: [
    { classId: "10", subject: "science", slug: "light-reflection-and-refraction" },
    { classId: "10", subject: "science", slug: "electricity" },
  ],
};

export default chapter;
