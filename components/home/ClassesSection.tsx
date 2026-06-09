"use client";
const CLASSES = [
  {
    label: "CBSE",
    time: "6 classes · 234 chapters",
    desc: "Maths, Science, Social Science & English",
    href: "/cbse",
    img:
      "https://readdy.ai/api/search-image?query=Happy%20cheerful%20preschool%20kids%20children%20playing%20together%20with%20colorful%20wooden%20toys%20in%20kindergarten%20classroom%20with%20bright%20natural%20light%20windows%2C%20professional%20childhood%20education%20photography%2C%20cozy%20warm%20clean%20preschool%20classroom%20interior%20background%2C%20vibrant%20joyful%20atmosphere%2C%20sharp%20focus%2C%20documentary%20style%20photography&width=800&height=600&seq=class-morning-01&orientation=landscape",
  },
  {
    label: "WBBPE · পশ্চিমবঙ্গ",
    time: "5 classes · 162 chapters",
    desc: "বাংলা, ইংরেজি, গণিত ও পরিবেশ",
    href: "/wbbpe",
    img:
      "https://readdy.ai/api/search-image?query=Happy%20cheerful%20preschool%20kids%20children%20laughing%20and%20playing%20outdoor%20in%20kindergarten%20school%20playground%20garden%20with%20colorful%20toys%20on%20sunny%20day%2C%20professional%20childhood%20education%20photography%2C%20vibrant%20joyful%20natural%20outdoor%20background%2C%20warm%20golden%20afternoon%20light%2C%20sharp%20focus%2C%20documentary%20style%20photography&width=800&height=600&seq=class-afternoon-01&orientation=landscape",
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A5C]/75 via-[#0F2A5C]/15 to-transparent" />
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
                <div className="absolute bottom-5 left-5 right-5 text-white">
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
