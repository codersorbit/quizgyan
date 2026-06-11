"use client";
export default function FooterSection() {
  return (
    <footer id="about" className="bg-[#FAF6EE] pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-5">
              <span className="relative w-9 h-9 flex items-center justify-center rounded-full bg-[#0F2A5C] text-[#FFD500]">
                <i className="ri-shining-2-fill text-lg" />
                <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#FF6FB5] border-2 border-[#FAF6EE]" />
              </span>
              <span
                className="text-2xl text-[#0F2A5C] leading-none"
                style={{ fontFamily: "'Bagel Fat One', cursive", letterSpacing: "0.02em" }}
              >
                StudyMatic
              </span>
            </a>
            <p className="text-[#5B6A85] text-sm leading-relaxed" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 400 }}>
              A free study space for CBSE &amp; West Bengal board students — clear notes, fun quizzes and daily practice, in English and বাংলা.
            </p>
          </div>

          <div>
            <h4 className="text-[#0F2A5C] text-sm mb-4 tracking-wide uppercase" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}>Explore</h4>
            <ul className="space-y-2 text-[#5B6A85] text-sm" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 400 }}>
              {[
                { label: "All classes", href: "/cbse" },
                { label: "Revision notes", href: "/notes" },
                { label: "MCQ quizzes", href: "/mcqs" },
                { label: "Tools", href: "/tools" },
                { label: "Study utilities", href: "/tools#student-utilities" },
                { label: "Photo & PDF tools", href: "/tools/photo-signature-resizer" },
                { label: "Daily challenge", href: "/daily" },
              ].map((l) => (
                <li key={l.label}><a href={l.href} className="hover:text-[#FF6FB5] transition-colors cursor-pointer">{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#0F2A5C] text-sm mb-4 tracking-wide uppercase" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}>Boards</h4>
            <ul className="space-y-2 text-[#5B6A85] text-sm" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 400 }}>
              {[
                { label: "CBSE", href: "/cbse" },
                { label: "WBBPE · পশ্চিমবঙ্গ", href: "/wbbpe" },
                { label: "Class 6–10", href: "/cbse" },
                { label: "প্রথম–পঞ্চম", href: "/wbbpe" },
              ].map((l) => (
                <li key={l.label}><a href={l.href} className="hover:text-[#FF6FB5] transition-colors cursor-pointer">{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#0F2A5C] text-sm mb-4 tracking-wide uppercase" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}>Say hi</h4>
            <p className="text-[#5B6A85] text-sm mb-3" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 400 }}>
              studymatic.in
              <br />
              Free, forever — no login.
            </p>
          </div>
        </div>

        <div className="border-t border-black/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[#8693AB] text-xs" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 400 }}>
          <span>© 2026 StudyMatic. Built with 💛 by Aftabuddin.</span>
          <div className="flex items-center gap-5">
            <a href="/cbse" className="hover:text-[#FF6FB5] cursor-pointer">Classes</a>
            <a href="/daily" className="hover:text-[#FF6FB5] cursor-pointer">Daily</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
