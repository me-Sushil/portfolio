import { SKILLS } from "@/utils/constants";

export default function TechStack() {
  return (
    <div className="w-full bg-[#1F2A36] p-8 rounded-xl mb-10">
      <h1
        style={{
          fontFamily: '"Instrument Serif", serif',
          fontSize: "28px",
          letterSpacing: "0.12em",
          color: "#D7B7C2",
          fontWeight: "bold",
        }}
        className="mb-10"
      >
        Tech Stack
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
        {SKILLS.map((sk) => (
          <div key={sk.id} className="group relative pl-4">
            <div className="absolute left-0 top-1 bottom-1 w-px bg-[#D7B7C2]/20 transition-colors duration-300 group-hover:bg-[#D7B7C2]/70" />

            <div className="flex items-baseline gap-2">
              <span
                className="text-[11px] text-[#D7B7C2]/50"
                style={{ fontFamily: "var(--font-mono), monospace" }}
              >
                {sk.id}
              </span>
              <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#D7B7C2]">
                {sk.title}
              </h2>
            </div>

            <div className="mt-4 flex flex-row flex-wrap gap-2">
              {sk.skills.map((s) => (
                <span
                  key={s}
                  className="rounded-md bg-white/[0.03] px-3 py-1.5 text-[13px] text-white/80 ring-1 ring-white/10 transition-all duration-200 hover:bg-white/[0.07] hover:text-white hover:ring-white/20"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
