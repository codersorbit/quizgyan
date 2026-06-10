"use client";
const CLASSES = [
  {
    label: "CBSE",
    time: "6 classes · 234 chapters",
    desc: "Maths, Science, Social Science & English",
    href: "/cbse",
    img:
      "/img/board-cbse.jpg",
  },
  {
    label: "WBBPE · পশ্চিমবঙ্গ",
    time: "5 classes · 162 chapters",
    desc: "বাংলা, ইংরেজি, গণিত ও পরিবেশ",
    href: "/wbbpe",
    img:
      "/img/board-wbbpe.jpg",
  },
];

const STATS = [
  { value: "396", label: "Chapters" },
  { value: "3,169", label: "Questions" },
  { value: "11", label: "Classes" },
  { value: "100%", label: "Free, no login" },
];

export default function ClassesSection() {
  return (
    <section id="boards" className="relative bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs tracking-[0.3em] uppercase text-[#E63946] mb-3"
            style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
          >
            ✦ Two boards, one place
          </span>
          <h2
            className="text-3xl md:text-[42px] text-[#0F2A5C] leading-tight"
            style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
          >
            Pick your board.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {CLASSES.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              className="relative rounded-3xl overflow-hidden border border-black/5 group cursor-pointer block"
            >
              <div className="relative h-72 md:h-80 overflow-hidden">
                <img
                  src={c.img}
                  alt={c.label}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A5C]/92 via-[#0F2A5C]/45 to-[#0F2A5C]/10" />
                <span
                  className="absolute top-5 left-5 px-3 py-1 rounded-full text-xs"
                  style={{
                    backgroundColor: i === 0 ? "#FFD500" : "#E63946",
                    color: i === 0 ? "#0F2A5C" : "#fff",
                    fontFamily: "'Fredoka', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {c.time}
                </span>
                <div className="absolute bottom-5 left-5 right-5 text-white [text-shadow:_0_1px_8px_rgba(0,0,0,0.55)]">
                  <h3
                    className="text-2xl mb-1"
                    style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
                  >
                    {c.label}
                  </h3>
                  <p
                    className="text-white/85 text-sm"
                    style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 400 }}
                  >
                    {c.desc}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="rounded-3xl bg-[#0F2A5C] py-10 md:py-12 px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`text-center md:px-4 ${
                i !== STATS.length - 1 ? "md:border-r md:border-white/15" : ""
              }`}
            >
              <p
                className="text-[#FFD500] text-4xl md:text-5xl mb-2 leading-none"
                style={{ fontFamily: "'Bagel Fat One', cursive" }}
              >
                {s.value}
              </p>
              <p
                className="text-white/80 text-xs md:text-sm"
                style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 400 }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
