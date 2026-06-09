"use client";
const STAGES = [
  {
    label: "Primary",
    age: "Class 1 – 5",
    color: "#E63946",
    textColor: "#fff",
    img:
      "https://readdy.ai/api/search-image?query=Adorable%20smiling%20toddler%20boy%20age%203%20standing%20wearing%20navy%20blue%20overall%20suspenders%20and%20light%20blue%20polo%20shirt%2C%20full%20body%20portrait%20standing%20pose%2C%20isolated%20cutout%20on%20solid%20pure%20clean%20white%20background%2C%20professional%20childhood%20studio%20portrait%20photography%20preschool%20kindergarten%20education%20theme%2C%20bright%20joyful%20expression%20sweet%20smile%2C%20natural%20soft%20studio%20lighting%2C%20sharp%20focus%2C%20minimalist%20clean%20simple%20background%2C%20vertical%20composition&width=900&height=1200&seq=stage-early-steps-2026a&orientation=portrait",
  },
  {
    label: "Middle",
    age: "Class 6 – 8",
    color: "#FFD500",
    textColor: "#0F2A5C",
    img:
      "https://static.readdy.ai/image/ef1aae41220ad17a1705abffff22a58b/ee6e8dbb2188080c06bb9bb80d5b65e5.png",
  },
  {
    label: "Board",
    age: "Class 9 – 10",
    color: "#0F2A5C",
    textColor: "#fff",
    img:
      "https://readdy.ai/api/search-image?query=Happy%20smiling%20school%20kid%20girl%20age%206%20holding%20bright%20yellow%20notebook%20book%20wearing%20grey%20shirt%20dark%20jeans%20and%20small%20red%20backpack%2C%20full%20body%20standing%20portrait%2C%20isolated%20cutout%20on%20solid%20pure%20clean%20white%20background%2C%20professional%20childhood%20studio%20portrait%20photography%20elementary%20school%20education%20theme%2C%20joyful%20confident%20expression%2C%20natural%20soft%20studio%20lighting%2C%20sharp%20focus%2C%20minimalist%20clean%20simple%20background%2C%20vertical%20composition&width=900&height=1200&seq=stage-little-explorers-2026a&orientation=portrait",
  },
];

export default function StagesSection() {
  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Top pill badge */}
        <div className="flex justify-center mb-5">
          <span
            className="inline-flex items-center gap-2 bg-[#F5F1E8] text-[#0F2A5C] text-[11px] tracking-[0.25em] uppercase px-4 py-1.5 rounded-full"
            style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#0F2A5C]" />
            From first steps to boards
          </span>
        </div>

        {/* Title */}
        <h2
          className="text-center text-4xl md:text-6xl text-[#0F2A5C] leading-[1.05] tracking-tight mb-14 md:mb-16"
          style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }}
        >
          LEARNING THAT GROWS WITH
          <br />
          EVERY <span className="text-[#E63946]">CLASS</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
          {STAGES.map((stage) => (
            <div
              key={stage.label}
              className="relative rounded-[28px] overflow-hidden bg-white transition-transform hover:-translate-y-1 cursor-pointer"
            >
              {/* Photo area */}
              <div className="relative h-[440px] md:h-[480px] bg-white overflow-hidden">
                <img
                  src={stage.img}
                  alt={stage.label}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-auto object-contain object-bottom"
                />
              </div>
              {/* Colored footer band */}
              <div
                className="text-center py-5 px-4"
                style={{ backgroundColor: stage.color, color: stage.textColor }}
              >
                <div
                  className="text-[10px] tracking-[0.3em] uppercase opacity-80 mb-1.5"
                  style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 500 }}
                >
                  {stage.age}
                </div>
                <div
                  className="text-lg md:text-xl tracking-wide uppercase"
                  style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }}
                >
                  {stage.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}