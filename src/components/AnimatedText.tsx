import { useRef, type CSSProperties } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

interface CharProps {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function Char({ char, index, total, progress }: CharProps) {
  const start = index / total;
  const end = start + 1 / total;

  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative">
      {/* Keeps the correct spacing for layout */}
      <span className="invisible">{char}</span>

      <motion.span
        className="absolute inset-0"
        style={{ opacity }}
      >
        {char}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({
  text,
  className = "",
  style,
}: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = text.split(" ");

  const totalCharacters = text.replace(/ /g, "").length;

  let globalIndex = 0;

  return (
    <p
      ref={ref}
      className={`${className} flex flex-wrap justify-center`}
      style={style}
    >
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="inline-flex mr-[0.35em] mb-[0.15em]"
        >
          {Array.from(word).map((char) => {
            const currentIndex = globalIndex++;

            return (
              <Char
                key={`${char}-${currentIndex}`}
                char={char}
                index={currentIndex}
                total={totalCharacters}
                progress={scrollYProgress}
              />
            );
          })}
        </span>
      ))}
    </p>
  );
}