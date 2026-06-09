"use client";
const CHECKLIST = [
  "Notes and a quiz on every chapter",
  "Instant feedback on every question",
  "Free, ad-free, no login — ever",
];

export default function EduTechSection() {
  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <h2
            className="text-3xl md:text-[44px] text-[#0F2A5C] leading-[1.1] tracking-tight mb-6 uppercase"
            style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }}
          >
            Built to help you{" "}
            <span className="text-[#E63946]">understand</span>
          </h2>

          <p
            className="text-[#3A4A6B] text-[15px] leading-relaxed mb-8 max-w-md"
            style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 400 }}
          >
            StudyMatic turns each chapter into short, clear notes and a quick quiz that
            checks your understanding right away — in English and বাংলা, across CBSE and
            the West Bengal board.
          </p>

          <ul className="space-y-4 mb-9">
            {CHECKLIST.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-[#0F2A5C] text-sm"
                style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 500 }}
              >
                <span className="w-6 h-6 rounded-full bg-[#FFD500] flex items-center justify-center flex-shrink-0">
                  <i className="ri-check-line text-[#0F2A5C] text-sm" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="/cbse"
            className="inline-flex items-center gap-2 bg-[#E63946] hover:bg-[#c92d3a] text-white px-6 py-3 rounded-full text-sm transition-colors whitespace-nowrap cursor-pointer"
            style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
          >
            Browse classes
            <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center" />
          </a>
        </div>

        <div className="relative bg-[#F5F1E8] rounded-[32px] p-10 md:p-14 overflow-hidden min-h-[420px] md:min-h-[480px]">
          <div className="absolute top-8 right-8 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#E63946]" />
          <div className="absolute top-1/2 right-12 w-12 h-12 md:w-14 md:h-14 bg-[#FFD500] rounded-md rotate-12" />
          <div
            className="relative z-10 text-[#0F2A5C] uppercase leading-[0.95] tracking-tight"
            style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }}
          >
            <div className="text-5xl md:text-7xl">Notes</div>
            <div className="text-5xl md:text-7xl mt-3 mb-3 text-[#E63946]">+</div>
            <div className="text-5xl md:text-7xl">Quizzes</div>
          </div>

          <div className="absolute bottom-8 left-10 md:left-14 right-10 md:right-14 flex items-center">
            <div className="relative">
              <div className="w-10 h-10 rounded-full border-[3px] border-[#0F2A5C] border-r-transparent" />
            </div>
            <div className="ml-3 flex items-center gap-2 bg-white rounded-full pl-1 pr-4 py-1">
              <span className="w-7 h-7 rounded-full bg-[#FFD500] flex items-center justify-center">
                <i className="ri-emotion-happy-fill text-[#0F2A5C] text-sm" />
              </span>
              <span
                className="text-[#0F2A5C] text-xs md:text-sm"
                style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 500 }}
              >
                Made for Class 1 to 10
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
