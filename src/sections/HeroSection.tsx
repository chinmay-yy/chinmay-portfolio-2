import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import ContactButton from '../components/ContactButton';
import portrait from "../assets/facecard.png";

const NAV_LINKS = ["About", "Skills", "Projects", "Contact"];
const PORTRAIT_URL = portrait;

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col" style={{ overflowX: 'clip' }}>
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav">
        <div className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
            >
              {link}
            </a>
          ))}
        </div>
      </FadeIn>

      {/* Hero heading */}
      <div className="overflow-hidden w-full mt-6 sm:mt-4 md:-mt-5">
        <FadeIn delay={0.15} y={40}>
          <div className="hero-marquee">
            <div className="hero-track">
              {Array.from({ length: 10 }).map((_, i) => (
                <span
                  key={i}
                  className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap"
                  style={{
                    fontSize: "clamp(5rem, 17vw, 17.5rem)",
                    marginRight: "3rem",
                  }}
                >
                  Hi, I'm Chinmay
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Subtitle + description, sits under the heading */}
      <FadeIn delay={0.28} y={20}>
        <div className="px-6 md:px-10 mt-4 md:mt-6 max-w-xl relative z-20">
          <p className="text-[#D7E2EA] font-medium uppercase tracking-wide text-xs sm:text-sm md:text-base">
            Full Stack Developer &bull; AI Enthusiast &bull; SOFTWARE ENGINEER
          </p>
        </div>
      </FadeIn>

      {/* Portrait */}
      <Magnet
        padding={150}
        strength={3}
        activeTransition="transform 0.3s ease-out"
        inactiveTransition="transform 0.6s ease-in-out"
        className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-[-55px] w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
      >
        <FadeIn delay={0.6} y={30}>
          <div className="flex justify-center items-center">
            <img
              src={portrait}
              alt="portrait"
              className="w-full h-auto scale-[1.8] origin-center select-none pointer-events-none"
              draggable={false}
            />
          </div>
        </FadeIn>
      </Magnet>

      {/* Bottom bar */}
      <div className="mt-auto flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[260px] md:max-w-[320px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            I build modern full-stack web applications, AI-powered tools, and scalable backend systems with a focus on clean design, performance, and great user experience.
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
