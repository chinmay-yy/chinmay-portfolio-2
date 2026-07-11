import { Webhook } from "lucide-react";

export interface Skill {
  name: string;
  iconSlug?: string;
  iconColor?: string;
}

const TILE_W = 260;
const TILE_H = 76;

export default function SkillTile({
  name,
  iconSlug,
  iconColor,
}: Skill) {
  return (
    <div
      className="group relative flex-shrink-0 overflow-hidden rounded-full transition-all duration-300 ease-out cursor-pointer"
      style={{
        width: TILE_W,
        height: TILE_H,
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.12)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform =
          "translateY(-4px) scale(1.03)";
        e.currentTarget.style.borderColor =
          "rgba(215,226,234,0.35)";
        e.currentTarget.style.boxShadow =
          "0 0 35px rgba(182,0,168,.22), 0 10px 30px rgba(0,0,0,.35)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform =
          "translateY(0px) scale(1)";
        e.currentTarget.style.borderColor =
          "rgba(255,255,255,0.12)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Shine Effect */}
      <div
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
        style={{
          background:
            "linear-gradient(115deg, transparent 20%, rgba(255,255,255,.12) 50%, transparent 80%)",
        }}
      />

      <div className="relative h-full px-7 flex items-center gap-5">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10">
          {iconSlug ? (
            <img
              src={`https://cdn.simpleicons.org/${iconSlug}${
                iconColor ? `/${iconColor}` : ""
              }`}
              alt={name}
              loading="lazy"
              className="w-7 h-7 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110"
            />
          ) : (
            <Webhook
              className="w-7 h-7 text-[#D7E2EA] transition-all duration-300 group-hover:rotate-6 group-hover:scale-110"
              strokeWidth={1.8}
            />
          )}
        </div>

        <span className="text-[#D7E2EA] text-lg font-medium tracking-wide whitespace-nowrap">
          {name}
        </span>
      </div>
    </div>
  );
}