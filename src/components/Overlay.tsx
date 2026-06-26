"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Magnet } from "./Magnet";

type OverlayProps = {
  progress: MotionValue<number>;
};

function SceneOne({ progress }: OverlayProps) {
  // 0.05 Portfolio Label Fade In -> 0.25 Fade Out
  const labelOpacity = useTransform(progress, [0.03, 0.05, 0.25, 0.30], [0, 1, 1, 0]);
  const labelY = useTransform(progress, [0.03, 0.05, 0.25, 0.30], [10, 0, 0, -20]);
  const labelBlur = useTransform(progress, [0.03, 0.05, 0.25, 0.30], ["blur(5px)", "blur(0px)", "blur(0px)", "blur(10px)"]);
  const labelScale = useTransform(progress, [0.03, 0.05, 0.25, 0.30], [0.98, 1, 1, 1.05]);

  // 0.30 Professional Title Fade In -> 0.45 Fade Out
  const titleOpacity = useTransform(progress, [0.30, 0.33, 0.42, 0.45], [0, 1, 1, 0]);
  const titleY = useTransform(progress, [0.30, 0.33, 0.42, 0.45], [20, 0, 0, -20]);
  const titleBlur = useTransform(progress, [0.30, 0.33, 0.42, 0.45], ["blur(8px)", "blur(0px)", "blur(0px)", "blur(8px)"]);
  const titleScale = useTransform(progress, [0.30, 0.33, 0.42, 0.45], [0.95, 1, 1, 1.05]);

  // 0.50 Description Fade In -> 0.65 Fade Out
  const descOpacity = useTransform(progress, [0.50, 0.53, 0.62, 0.65], [0, 1, 1, 0]);
  const descY = useTransform(progress, [0.50, 0.53, 0.62, 0.65], [20, 0, 0, -20]);
  const descBlur = useTransform(progress, [0.50, 0.53, 0.62, 0.65], ["blur(6px)", "blur(0px)", "blur(0px)", "blur(6px)"]);
  const descScale = useTransform(progress, [0.50, 0.53, 0.62, 0.65], [0.95, 1, 1, 1.05]);

  // 0.70 CTA Buttons Fade In -> 0.85 Buttons stay visible -> fade out before Scene 2
  const buttonsOpacity = useTransform(progress, [0.70, 0.73, 0.85, 0.88], [0, 1, 1, 0]);
  const buttonsY = useTransform(progress, [0.70, 0.73, 0.85, 0.88], [20, 0, 0, -20]);
  const buttonsBlur = useTransform(progress, [0.70, 0.73, 0.85, 0.88], ["blur(6px)", "blur(0px)", "blur(0px)", "blur(6px)"]);
  const buttonsScale = useTransform(progress, [0.70, 0.73, 0.85, 0.88], [0.95, 1, 1, 1.05]);
  const buttonsPointerEvents = useTransform(progress, (v) => (v >= 0.70 && v <= 0.88 ? "auto" : "none"));

  // Scroll Indicator naturally disappears as scrolling begins
  const indicatorOpacity = useTransform(progress, [0, 0.05], [1, 0]);
  const indicatorDotY = useTransform(progress, [0, 0.05], [0, 15]);
  const indicatorPointerEvents = useTransform(progress, (v) => (v <= 0.05 ? "auto" : "none"));

  const nameLetters = "HARSHIT".split("");

  return (
    <div className="sticky top-0 flex h-screen items-center justify-center px-6 text-center overflow-hidden z-20 pointer-events-none">
      {/* Soft atmospheric glow behind text */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(215,226,234,0.05)_0%,transparent_60%)] pointer-events-none" />

      {/* Central overlapping narrative container */}
      <div className="relative z-10 w-full max-w-5xl flex items-center justify-center h-full">
        
        {/* Label and HARSHIT block */}
        <motion.div 
          className="absolute flex flex-col items-center justify-center gap-6 sm:gap-8"
        >
          {/* Small Monospace Label */}
          <motion.p
            style={{ opacity: labelOpacity, y: labelY, filter: labelBlur, scale: labelScale }}
            className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#BBCCD7]/60"
          >
            PORTFOLIO / 2026
          </motion.p>

          {/* Large Name with Staggered Scroll Reveal */}
          <h1 className="font-display text-7xl sm:text-8xl lg:text-[9.5rem] font-black leading-none text-white tracking-tighter flex select-none">
            {nameLetters.map((char, i) => {
              const start = 0.08 + i * 0.012;
              const end = start + 0.05;
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const opacity = useTransform(progress, [start, end, 0.25, 0.30], [0, 1, 1, 0]);
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const y = useTransform(progress, [start, end, 0.25, 0.30], [35, 0, 0, -40]);
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const blur = useTransform(progress, [start, end, 0.25, 0.30], ["blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)"]);
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const scale = useTransform(progress, [start, end, 0.25, 0.30], [0.9, 1, 1, 1.05]);

              return (
                <motion.span
                  key={i}
                  style={{ opacity, y, filter: blur, scale }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              );
            })}
          </h1>
        </motion.div>

        {/* Professional Title */}
        <motion.div
          style={{ opacity: titleOpacity, y: titleY, filter: titleBlur, scale: titleScale }}
          className="absolute flex items-center justify-center"
        >
          <span className="text-base sm:text-lg md:text-2xl font-bold tracking-[0.18em] uppercase text-[#BBCCD7] bg-clip-text select-none">
            AI/ML Engineer & Full-Stack Developer
          </span>
        </motion.div>

        {/* Sub-description */}
        <motion.p
          style={{ opacity: descOpacity, y: descY, filter: descBlur, scale: descScale }}
          className="absolute text-xs sm:text-sm md:text-base font-light tracking-widest text-[#D7E2EA]/60 max-w-lg uppercase leading-relaxed text-center"
        >
          an ai/ml engineer building multi-agent systems, voice pipelines, and the products around them.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          style={{ opacity: buttonsOpacity, y: buttonsY, filter: buttonsBlur, scale: buttonsScale, pointerEvents: buttonsPointerEvents }}
          className="absolute flex flex-row items-center gap-4"
        >
          <Magnet strength={3} padding={80}>
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-6 py-3 font-mono text-[10px] uppercase tracking-widest text-[#D7E2EA] backdrop-blur-md transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
              <span>Go to Projects</span>
              <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
            </button>
          </Magnet>

          <Magnet strength={3} padding={80}>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative flex items-center gap-2 rounded-full border border-white/15 bg-[#D7E2EA]/5 px-6 py-3 font-mono text-[10px] uppercase tracking-widest text-white backdrop-blur-md transition-all duration-300 hover:bg-[#D7E2EA]/10 hover:border-white/35 hover:shadow-[0_0_25px_rgba(215,226,234,0.1)] overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
              <span>Contact Me</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </Magnet>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        style={{ opacity: indicatorOpacity, pointerEvents: indicatorPointerEvents }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight * 0.9, behavior: "smooth" })}
      >
        <span className="text-[8px] uppercase tracking-[0.25em] text-[#D7E2EA]/35 font-mono select-none">
          Scroll to explore
        </span>
        <div className="w-[18px] h-[30px] rounded-full border border-white/10 flex justify-center p-1.5 bg-white/[0.01]">
          <motion.div
            style={{ y: indicatorDotY }}
            className="w-1 h-1.5 rounded-full bg-[#D7E2EA]/45"
          />
        </div>
      </motion.div>
    </div>
  );
}

function SceneTwo({ progress }: OverlayProps) {
  const opacity = useTransform(progress, [0.88, 0.90, 0.93, 0.95], [0, 1, 1, 0]);
  const y = useTransform(progress, [0.88, 0.90, 0.93, 0.95], [40, 0, 0, -40]);
  const blur = useTransform(progress, [0.88, 0.90, 0.93, 0.95], ["blur(8px)", "blur(0px)", "blur(0px)", "blur(8px)"]);
  const scale = useTransform(progress, [0.88, 0.90, 0.93, 0.95], [0.95, 1, 1, 1.05]);

  return (
    <motion.div
      style={{ opacity, y, filter: blur, scale }}
      className="sticky top-0 -mt-[100vh] flex h-screen items-center px-6 sm:px-10 lg:px-16 pointer-events-none"
    >
      <p className="max-w-3xl font-display text-balance text-3xl font-bold leading-[1.08] text-[#D7E2EA] sm:text-5xl lg:text-6xl tracking-tight uppercase">
        I build{" "}
        <span className="bg-gradient-to-r from-[#D7E2EA] via-[#D7E2EA]/90 to-[#D7E2EA]/30 bg-clip-text text-transparent">
          multi-agent systems
        </span>
        , voice pipelines, and the products around them.
      </p>
    </motion.div>
  );
}

function SceneThree({ progress }: OverlayProps) {
  const opacity = useTransform(progress, [0.95, 0.97, 1.0], [0, 1, 1]);
  const y = useTransform(progress, [0.95, 0.97, 1.0], [40, 0, 0]);
  const blur = useTransform(progress, [0.95, 0.97, 1.0], ["blur(8px)", "blur(0px)", "blur(0px)"]);
  const scale = useTransform(progress, [0.95, 0.97, 1.0], [0.95, 1, 1]);

  return (
    <motion.div
      style={{ opacity, y, filter: blur, scale }}
      className="sticky top-0 -mt-[100vh] flex h-screen items-center justify-end px-6 sm:px-10 lg:px-16 pointer-events-none"
    >
      <p className="max-w-4xl text-right font-display text-balance text-3xl font-bold leading-[1.08] text-[#D7E2EA] sm:text-5xl lg:text-6xl tracking-tight uppercase">
        Currently shipping a{" "}
        <span className="bg-gradient-to-r from-[#D7E2EA] via-[#D7E2EA]/90 to-[#D7E2EA]/30 bg-clip-text text-transparent">
          production e-commerce platform
        </span>{" "}
        and organizing CSI VESIT&apos;s tech workshops.
      </p>
    </motion.div>
  );
}

export function Overlay({ progress }: OverlayProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      <SceneOne progress={progress} />
      <SceneTwo progress={progress} />
      <SceneThree progress={progress} />
    </div>
  );
}
