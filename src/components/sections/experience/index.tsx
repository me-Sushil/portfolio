import { EXPERIENCE } from "@/utils/constants";

export default function Experience() {
  return (
    <div className="w-full bg-[#C9DCE6] mb-10 p-6 rounded-b-lg">
      <div className="flex">
        <h1
          style={{
            fontFamily: '"Instrument Serif", serif',
            fontSize: "28px",
            letterSpacing: "0.12em",
            color: "#6B5543",
            fontWeight: "bold",
          }}
        >
          Career Path
        </h1>
      </div>

      <div className="relative flex flex-col gap-10 mt-10">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#1F2A36] opacity-20" />

        {EXPERIENCE.map((exp) => (
          <div key={exp.id} className="relative flex-1 pl-7">
            <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-[#6B5543]" />

            <p
              className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] text-[#4B5666] underline decoration-transparent underline-offset-4 transition-all duration-200 hover:text-[#6B5543] hover:decoration-[#6B5543]"
              style={{ fontFamily: "var(--font-mono), monospace" }}
            >
              {exp.period}
            </p>

            <h2 className="mt-1 text-lg text-[#6B5543] font-bold">
              {exp.role}{" "}
              <span className="text-sm text-[#1F2A36]">— {exp.company}</span>
            </h2>

            <p className="mt-1 text-sm text-[#CBB6A2] italic max-w-xs line-clamp-5">
              {exp.summary}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
