import { useEffect, useRef, useState } from "react";
import SkillTile, { type Skill } from "../components/SkillsTile";

const ROW_1: Skill[] = [
  { name: "HTML5", iconSlug: "html5" },
  { name: "CSS3", iconSlug: "css3" },
  { name: "JavaScript", iconSlug: "javascript" },
  { name: "TypeScript", iconSlug: "typescript" },
  { name: "React", iconSlug: "react" },
  { name: "Next.js", iconSlug: "nextdotjs" },
  { name: "Tailwind CSS", iconSlug: "tailwindcss" },
];

const ROW_2: Skill[] = [
  { name: "Node.js", iconSlug: "nodedotjs" },
  { name: "Express.js", iconSlug: "express" },
  { name: "MongoDB", iconSlug: "mongodb" },
  { name: "PostgreSQL", iconSlug: "postgresql" },
  { name: "Prisma", iconSlug: "prisma" },
  { name: "JWT", iconSlug: "jsonwebtokens" },
  { name: "Postman", iconSlug: "postman" },
];

const ROW_3: Skill[] = [
  { name: "Git", iconSlug: "git" },
  { name: "GitHub", iconSlug: "github" },
  { name: "Cloudinary", iconSlug: "cloudinary" },
  { name: "Razorpay", iconSlug: "razorpay" },
  { name: "Gemini AI", iconSlug: "googlegemini" },
  { name: "Markdown", iconSlug: "markdown" },
  { name: "JSON", iconSlug: "json" },
];

const ROW_4: Skill[] = [
  { name: "Vite", iconSlug: "vite" },
  { name: "npm", iconSlug: "npm" },
  { name: "Figma", iconSlug: "figma" },
  { name: "Vercel", iconSlug: "vercel" },
  { name: "Visual Studio Code", iconSlug: "vscode" },
  { name: "Firebase", iconSlug: "firebase" },
  { name: "Linux", iconSlug: "linux" },
];
const repeat = (skills: Skill[]) => [...skills, ...skills, ...skills];

interface SkillsRowProps {
  skills: Skill[];
  offset: number;
  reverse?: boolean;
  speed?: number;
}

function SkillsRow({
  skills,
  offset,
  reverse = false,
  speed = 1,
}: SkillsRowProps) {
  const translate = reverse
    ? -(offset * speed - 200)
    : offset * speed - 200;

  return (
    <div className="overflow-hidden">
      <div
        className="flex gap-4 w-max"
        style={{
          transform: `translate3d(${translate}px,0,0)`,
          willChange: "transform",
        }}
      >
        {skills.map((skill, index) => (
          <SkillTile
            key={`${skill.name}-${index}`}
            {...skill}
          />
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY;

      const scrollOffset =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3;

      setOffset(scrollOffset);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-24"
      style={{
        overflowX: "clip",
      }}
    >
      <h2
        className="hero-heading font-black uppercase tracking-tight leading-none text-center mb-16 px-5"
        style={{
          fontSize: "clamp(3rem,10vw,130px)",
        }}
      >
        Skills
      </h2>

      <div className="flex flex-col gap-5">

        <SkillsRow
          skills={repeat(ROW_1)}
          offset={offset}
          speed={0.7}
        />

        <SkillsRow
          skills={repeat(ROW_2)}
          offset={offset}
          reverse
          speed={0.9}
        />

        <SkillsRow
          skills={repeat(ROW_3)}
          offset={offset}
          speed={1.1}
        />

        <SkillsRow
          skills={repeat(ROW_4)}
          offset={offset}
          reverse
          speed={1.3}
        />

      </div>
    </section>
  );
}