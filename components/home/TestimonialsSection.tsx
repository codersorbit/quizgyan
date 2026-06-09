"use client";
const QUOTES = [
  {
    text:
      "Read a chapter as short, clear notes — then check you've understood it with a quick quiz, right there on the same page.",
    author: "Notes + Quiz",
    role: "on every chapter",
  },
  {
    text:
      "Every question gives instant feedback with a short explanation, so a wrong answer turns into something you actually learn.",
    author: "Instant feedback",
    role: "on every question",
  },
  {
    text:
      "From Class 1 to board exams, CBSE and West Bengal board, in English and বাংলা — free, with no login.",
    author: "All in one place",
    role: "two boards · Class 1–10",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="journal" className="relative bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col items-center text-center mb-14">
          {/* Tiny logo medal */}
          <div className="w-16 h-16 rounded-full bg-[#0F2A5C] flex items-center justify-center mb-5 relative">
            <i className="ri-shining-2-fill text-[#FFD500] text-2xl" />
            <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#E63946] border-2 border-white" />
          </div>
          <span
            className="text-xs tracking-[0.3em] uppercase text-[#E63946] mb-3"
            style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
          >
            Made for understanding
          </span>
          <h2
            className="text-3xl md:text-5xl text-[#0F2A5C] max-w-3xl"
            style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
          >
            Built around how you actually study.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {QUOTES.map((q) => (
            <div key={q.author} className="relative">
              <i
                className="ri-double-quotes-l absolute -top-2 left-0 text-[#FFD500] text-5xl"
                aria-hidden="true"
              />
              <div className="pt-12">
                <p
                  className="text-[#3A4A6B] text-[15px] leading-relaxed mb-6"
                  style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 400 }}
                >
                  {q.text}
                </p>
                <div className="border-t border-black/10 pt-4">
                  <p
                    className="text-[#0F2A5C] text-sm mb-0.5"
                    style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
                  >
                    {q.author}
                  </p>
                  <p
                    className="text-[#8693AB] text-xs"
                    style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 400 }}
                  >
                    {q.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}