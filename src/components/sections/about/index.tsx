export default function About() {
  return (
    <div className="w-full bg-[#E7DCCF] flex flex-row justify-between mt-15 p-6 rounded-t-lg">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col gap-6">
          <p
            className="font-mono text-[12px] font-bold tracking-[0.12em] uppercase opacity-70 transition-opacity duration-200"
            style={{ fontFamily: "var(--font-mono), monospace" }}
          >
            Based in - Kathmandu, Nepal
          </p>
          <h1
            className="text-[clamp(60px,8vw,150px)] leading-[0.9] tracking-[-0.025em] text-[#1F2A36]"
            style={{ fontFamily: '"Instrument Serif", serif' }}
          >
            Lishu Maharjan
          </h1>
        </div>

        <div className="mt-8">
          <p className="text-[#4B5666] max-w-sm leading-relaxed italic">
            <span>
              "Full-stack developer building thoughtful web and mobile products
              across React, Node.js, and NestJS".
            </span>{" "}
            <br /> <br />
            Currently at <span className="font-bold">Rumsan Associates</span>.
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex bg-[#6B5543] rounded-full h-80 w-80 border-2 border-[#fff] overflow-hidden">
          <img
            src="/photo.jpeg"
            alt=""
            className="rounded-full object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
