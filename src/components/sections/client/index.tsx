import { CLIENTS } from "@/utils/constants";

export default function Client() {
  return (
    <div className="w-full p-8">
      <h1
        style={{
          fontFamily: '"Instrument Serif", serif',
          fontSize: "28px",
          letterSpacing: "0.12em",
          color: "#6B5543",
          fontWeight: "bold",
          textAlign: "center",
        }}
        className="mb-10"
      >
        Global Reach
      </h1>

      <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
        {CLIENTS.map((c) => (
          <div
            key={c.id}
            className="flex justify-center gap-5 w-full sm:w-[380px] mb-10"
          >
            <div
              style={{ fontFamily: '"Instrument Serif", serif' }}
              className="flex uppercase text-[#1F2A36] font-bold tracking-[0.12em] text-center"
            >
              {c.name}
            </div>
            <div className="w-2 h-2 rounded-full border-none bg-[#6B5543] mt-2"></div>
            <div className="flex flex-col gap-2">
              <p className="text-sm">{c.title}</p>
              <p className="text-sm text-[#1F2A36] italic max-w-xs">
                {c.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
