"use client";

import React, { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // TODO: Day 1 - Implement specular glass highlights and layered box shadow configurations
  // TODO: Day 2 - Connect dynamic coordinate mouse metrics for advanced 3D tilting motion physics

  return (
    <footer
      ref={containerRef}
      id="contact"
      className="bg-[#0C0C0C] px-6 pb-20 pt-32 relative z-20 w-full flex justify-center items-center overflow-hidden"
    >
      {/* Standard non-frosted baseline shell layout */}
      <div
        ref={cardRef}
        className="w-full max-w-7xl rounded-3xl border border-zinc-800 bg-zinc-950 p-10 sm:p-14 relative flex flex-col gap-12 sm:flex-row sm:items-center sm:justify-between transition-colors duration-300"
      >
        <div className="max-w-xl relative z-10">
          <h3 className="font-display text-4xl font-black text-white tracking-tight uppercase">
            Harshit
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400 font-light tracking-wide">
            Building AI systems and full-stack products from Mumbai. Reach out
            for engineering work, collaborations, or workshop ideas.
          </p>
        </div>

        <div className="flex flex-wrap gap-8 text-xs font-mono uppercase tracking-widest text-zinc-500">
          <a
            href="https://github.com/"
            className="flex items-center gap-2 transition-colors duration-300 hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <a
            href="https://www.linkedin.com/"
            className="flex items-center gap-2 transition-colors duration-300 hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}