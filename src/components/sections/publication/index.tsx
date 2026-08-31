import { MEDIUM } from "@/utils/constants";

export default function Publication() {
  return (
    <div className="w-full bg-[#E7DCCF] p-8 rounded-xl mb-10">
      <h1
        style={{
          fontFamily: '"Instrument Serif", serif',
          fontSize: "28px",
          letterSpacing: "0.12em",
          color: "#1F2A36",
          fontWeight: "bold",
        }}
        className="mb-10"
      >
        Publications
      </h1>

      <div className="relative flex flex-col gap-10 mt-10">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#1F2A36] opacity-20" />

        {MEDIUM.map((exp) => (
          <div key={exp.id} className="relative flex-1 pl-7">
            <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-[#6B5543]" />

            <p
              className="inline-block text-[16px] font-bold uppercase tracking-[0.12em] text-[#6B5543] underline decoration-transparent underline-offset-4 transition-all duration-200 hover:text-[#6B5543] hover:decoration-[#6B5543]"
              style={{ fontFamily: "var(--font-mono), monospace" }}
            >
              {exp.title}
            </p>

            <h2 className="mt-2 text-sm text-[#4B5666]">{exp.description} </h2>

            <p className="mt-1 text-xs italic hover:text-[#BFB9B1] transition-all duration-200">
              <a href={exp.link} target="_blank" rel="noopener noreferrer">
                {exp.link}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
