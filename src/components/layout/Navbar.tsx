import { NAV_ITEMS } from "@/utils/constants";

export default function Navbar() {
  return (
    <div className="w-full flex justify-between items-center">
      <div
        style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: "14px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        <b>Portfolio</b>
      </div>

      <div className="flex gap-6">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={`#${item.href}`}
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "12px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              opacity: 0.7,
              transition: "opacity 0.2s",
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
