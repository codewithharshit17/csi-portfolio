export function Footer() {
  return (
    <footer id="contact" className="bg-[#0C0C0C] px-6 pb-16 pt-24 sm:px-10 lg:px-16 border-t border-white/5">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-2xl font-bold text-white tracking-tight">Harshit</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-white/50">
            Building AI systems and full-stack products from Mumbai. Reach out
            for engineering work, collaborations, or workshop ideas.
          </p>
        </div>
        <div className="flex gap-6 text-sm text-white/60">
          <a
            href="https://github.com/"
            className="group flex items-center gap-1 transition-colors duration-300 hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs text-white/40 group-hover:text-white">
              ↗
            </span>
          </a>
          <a
            href="https://www.linkedin.com/"
            className="group flex items-center gap-1 transition-colors duration-300 hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs text-white/40 group-hover:text-white">
              ↗
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

