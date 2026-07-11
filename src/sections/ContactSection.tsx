import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import resume from "../assets/chinmayresume.pdf";

// Placeholder links -- swap in real destinations.
const CONTACT_LINKS = [
  {
    label: 'Email',
    value: 'chinmaysaini01@gmail.com',
    href: 'mailto:chinmaysaini01@gmail.com',
    icon: Mail,
  },
  {
    label: 'GitHub',
    value: 'github.com/chinmay-yy',
    href: 'https://github.com/chinmay-yy',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/chinmay-saini',
    href: 'https://linkedin.com/in/chinmay-saini',
    icon: Linkedin,
  },
  {
    label: 'Resume',
    value: 'View / Download',
    href: resume,
    icon: FileText,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-5 sm:px-8 md:px-10 py-20 sm:py-28"
      style={{ overflowX: 'clip' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(2.4rem, 9vw, 120px)' }}
        >
          Let&apos;s Build Something
          <br />
          Great Together
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} y={20}>
        <p
          className="text-[#D7E2EA] font-light mt-8 sm:mt-10 max-w-xl"
          style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.25rem)' }}
        >
          Open to Software Engineer roles and collaborations. Whether you&apos;re a recruiter,
          a founder, or a fellow builder, feel free to reach out -- I&apos;d love to connect.
        </p>
      </FadeIn>

      <FadeIn delay={0.3} y={20}>
        <div className="mt-10 sm:mt-14 flex flex-wrap justify-center gap-4 sm:gap-6">
          {CONTACT_LINKS.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex items-center gap-3 rounded-full border border-[#D7E2EA]/25 px-5 py-3 sm:px-6 sm:py-3.5 text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10"
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
              <span className="flex flex-col items-start leading-tight">
                <span className="text-[0.65rem] sm:text-xs uppercase tracking-widest opacity-60">
                  {label}
                </span>
                <span className="text-xs sm:text-sm font-medium">{value}</span>
              </span>
            </a>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.45} y={20}>
        <div className="mt-12 sm:mt-16">
          <ContactButton />
        </div>
      </FadeIn>
    </section>
  );
}
