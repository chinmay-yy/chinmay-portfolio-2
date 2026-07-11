import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';
import aiCareerCoach1 from "../assets/ai-career-coach-1.png";
import aiCareerCoach2 from "../assets/ai-career-coach-2.png";
import aiCareerCoach3 from "../assets/ai-career-coach-3.png";

import aiCodeReviewer1 from "../assets/ai-code-reviewer-1.png";

//images, live link for CartNow project is remaining to add in assests 

import cartNow1 from "../assets/cartnow-1.png";
import cartNow2 from "../assets/cartnow-2.png";
import cartNow3 from "../assets/cartnow-3.png";


interface Project {
  number: string;
  name: string;
  tagline: string;
  stack: string[];
  category: string;
  liveUrl: string;
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
}

const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'AI Career Coach',
    tagline: 'AI-powered career platform',
    stack: ['Next.js', 'React', 'TypeScript', 'Prisma', 'PostgreSQL', 'Clerk', 'Gemini AI'],
    category: 'AI Product',
    liveUrl: 'https://ai-career-coach-one-psi.vercel.app/',
    col1Image1: aiCareerCoach2,
    col1Image2: aiCareerCoach3,
    col2Image: aiCareerCoach1,
  },
  
  {
    number: '02',
    name: 'AI Code Reviewer',
    tagline: 'AI-powered developer tool',
    stack: ['React', 'Node.js', 'Express', 'Gemini API'],
    category: 'Developer Tool',
    liveUrl: 'https://ai-code-reviewer-alpha-ruddy.vercel.app/',
    col1Image1: aiCodeReviewer1,
    col1Image2: aiCodeReviewer1,
    col2Image: aiCodeReviewer1,
  },
  {
    number: '03',
    name: 'CartNow',
    tagline: 'Full Stack MERN E-Commerce Platform',
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    category: 'E-Commerce',
    liveUrl: 'https://cartnow.com',
    // remaining images for CartNow project
    col1Image1: 'cartnow-1.png',
    col1Image2: 'cartnow-2.png',
    col2Image: 'cartnow-3.png',
  },
];

const TOTAL_CARDS = PROJECTS.length;

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const targetScale = 1 - (TOTAL_CARDS - 1 - index) * 0.03;

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky top-24 md:top-32 h-[85vh]"
      style={{ top: `${96 + index * 28}px` }}
    >
      <motion.div
        style={{ scale, transformOrigin: 'top' }}
        className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 h-full flex flex-col"
      >
        {/* Top row */}
        <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
          <span
            className="text-[#D7E2EA] font-black leading-none"
            style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
          >
            {project.number}
          </span>
          <div className="flex flex-col gap-1">
            <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm">
              {project.category}
            </span>
            <h3 className="text-[#D7E2EA] font-medium uppercase text-lg sm:text-2xl md:text-3xl">
              {project.name}
            </h3>
          </div>
          <div className="ml-auto">
            <LiveProjectButton href={project.liveUrl} />
          </div>
        </div>

        {/* Bottom row: image grid */}
        <div className="flex gap-3 mt-4 sm:mt-6 flex-1 min-h-0">
          <div className="flex flex-col gap-3" style={{ width: '40%' }}>
            <img
              src={project.col1Image1}
              alt={`${project.name} detail 1`}
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.col1Image2}
              alt={`${project.name} detail 2`}
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>
          <div style={{ width: '60%' }}>
            <img
              src={project.col2Image}
              alt={`${project.name} showcase`}
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20"
      style={{ overflowX: 'clip' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
