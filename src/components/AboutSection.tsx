"use client";

import React from "react";
import { FadeIn } from "./FadeIn";
import { AnimatedText } from "./AnimatedText";
import { ContactButton } from "./ContactButton";
import { Terminal, Cpu, Network, Binary } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen w-full flex flex-col justify-center items-center bg-[#0C0C0C] px-6 py-28 md:py-40 overflow-hidden">
      
      {/* Corner Decorative Tech Graphics */}
      {/* Top-Left: Terminal Screen Corner */}
      <div className="absolute top-12 left-12 opacity-25 hidden sm:block">
        <FadeIn delay={0.1} yOffset={-20}>
          <div className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-[#D7E2EA]">
            <Terminal className="w-8 h-8 text-[#BBCCD7]" />
            <div className="w-16 h-1.5 rounded-full bg-white/10" />
            <div className="w-10 h-1.5 rounded-full bg-white/10" />
          </div>
        </FadeIn>
      </div>

      {/* Top-Right: Neural Network Graph Corner */}
      <div className="absolute top-12 right-12 opacity-25 hidden sm:block">
        <FadeIn delay={0.2} yOffset={-20}>
          <div className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-[#D7E2EA] items-end">
            <Network className="w-8 h-8 text-[#BBCCD7]" />
            <div className="w-10 h-1.5 rounded-full bg-white/10" />
            <div className="w-14 h-1.5 rounded-full bg-white/10" />
          </div>
        </FadeIn>
      </div>

      {/* Bottom-Left: CPU Microchip Corner */}
      <div className="absolute bottom-12 left-12 opacity-25 hidden sm:block">
        <FadeIn delay={0.3} yOffset={20}>
          <div className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-[#D7E2EA]">
            <Cpu className="w-8 h-8 text-[#BBCCD7]" />
            <div className="w-12 h-1.5 rounded-full bg-white/10" />
            <div className="w-16 h-1.5 rounded-full bg-white/10" />
          </div>
        </FadeIn>
      </div>

      {/* Bottom-Right: Binary Matrix Corner */}
      <div className="absolute bottom-12 right-12 opacity-25 hidden sm:block">
        <FadeIn delay={0.4} yOffset={20}>
          <div className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-[#D7E2EA] items-end">
            <Binary className="w-8 h-8 text-[#BBCCD7]" />
            <div className="w-16 h-1.5 rounded-full bg-white/10" />
            <div className="w-8 h-1.5 rounded-full bg-white/10" />
          </div>
        </FadeIn>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl w-full flex flex-col items-center text-center gap-12 sm:gap-16 z-10">
        
        {/* About Me Section Title */}
        <FadeIn delay={0.2} yOffset={30}>
          <h2 className="hero-heading font-black uppercase tracking-tight text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[6vw] leading-none">
            About me
          </h2>
        </FadeIn>

        {/* Bio Text Paragraph with Scroll-Triggered Character Reveal */}
        <AnimatedText
          text="I'm an AI/ML engineer and full-stack developer studying at VESIT Mumbai, currently building multi-agent systems, voice pipelines, and a production e-commerce platform. I run technical workshops at CSI VESIT and contribute to open source. I like working close to the metal of a problem — from model architecture down to the UI someone actually touches."
          className="font-display font-light text-xl sm:text-2xl md:text-3xl lg:text-[2.2rem] text-[#D7E2EA] leading-[1.4] sm:leading-[1.5] text-center"
        />

        {/* Contact Button */}
        <FadeIn delay={0.4} yOffset={20}>
          <ContactButton label="Let's Chat" />
        </FadeIn>
      </div>
    </section>
  );
}
