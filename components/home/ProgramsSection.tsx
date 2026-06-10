"use client";
const PROGRAMS = [
  { icon: "ri-book-open-line", color: "#E63946", title: "CLEAR NOTES", href: "/notes", desc: "Short, friendly notes for every chapter — in English and বাংলা.", highlight: false },
  { icon: "ri-checkbox-circle-line", color: "#E63946", title: "INSTANT QUIZZES", href: "/mcqs", desc: "Tap an answer and see if you're right straight away.", highlight: false },
  { icon: "ri-file-list-3-line", color: "#E63946", title: "EXAM-STYLE Q&A", href: "/cbse", desc: "Short, long and HOTS questions like the real exam.", highlight: false },
  { icon: "ri-fire-line", color: "#E63946", title: "DAILY CHALLENGE", href: "/daily", desc: "One fresh question a day to keep your streak alive.", highlight: false },
  { icon: "ri-government-line", color: "#FFD500", title: "TWO BOARDS", href: "/wbbpe", desc: "CBSE and West Bengal board, all in one place.", highlight: true },
  { icon: "ri-gift-line", color: "#E63946", title: "FREE FOREVER", href: "/cbse", desc: "No login, no ads, no fees — just open and learn.", highlight: false },
];

export default function ProgramsSection() {
  return (
    <section id="works" className="relative bg-[#0F2A5C] py-20 md:py-28 overflow-hidden">
      {/* Decorative stars */}
      <i className="ri-shining-2-fill absolute top-10 left-10 text-[#FFD500]/20 text-3xl" />
      <i className="ri-shining-2-fill absolute top-32 right-20 text-[#E63946]/30 text-2xl" />
      <i className="ri-shining-2-fill absolute bottom-20 left-1/4 text-white/10 text-2xl" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative">
        {/* Pill badge */}
        <div className="flex justify-center mb-5">
          <span
            className="inline-flex items-center gap-2 bg-white/10 text-white text-[11px] tracking-[0.25em] uppercase px-4 py-1.5 rounded-full"
            style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD500]" />
            Why students like it
          </span>
        </div>

        <h2
          className="text-center text-4xl md:text-6xl text-white leading-[1.05] tracking-tight mb-14 md:mb-16 uppercase max-w-4xl mx-auto"
          style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }}
        >
          Made to <span className="text-[#FFD500]">educate</span>,
          <br />
          not just to memorise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {PROGRAMS.map((p) => (
            <a
              key={p.title}
              href={p.href}
              className={`block rounded-2xl p-7 md:p-8 transition-colors cursor-pointer ${
                p.highlight
                  ? "bg-white/[0.04] border border-[#FFD500]/60"
                  : "bg-white/[0.04] border border-white/10 hover:border-white/25"
              }`}
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center mb-5"
                style={{
                  backgroundColor: p.color,
                  color: p.color === "#FFD500" ? "#0F2A5C" : "#fff",
                }}
              >
                <i className={`${p.icon} text-lg`} />
              </div>
              <h3
                className="text-white text-lg mb-2.5 tracking-wide"
                style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }}
              >
                {p.title}
              </h3>
              <p
                className="text-white/60 text-sm leading-relaxed"
                style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 400 }}
              >
                {p.desc}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}