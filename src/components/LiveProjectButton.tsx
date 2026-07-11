interface LiveProjectButtonProps {
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
}

export default function LiveProjectButton({
  className = '',
  href,
  target = '_blank',
  rel = 'noopener noreferrer',
}: LiveProjectButtonProps) {
  const classes = `rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest transition-colors duration-200 hover:bg-[#D7E2EA]/10 ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        Live Project
      </a>
    );
  }

  return (
    <button type="button" className={classes}>
      Live Project
    </button>
  );
}
