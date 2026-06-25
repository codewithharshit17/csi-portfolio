"use client";

import React from "react";
import { FadeIn } from "./FadeIn";

interface SkillItem {
  id: string;
  name: string;
  description: string;
}

const skillsList: SkillItem[] = [
  {
    id: "01",
    name: "AI & Multi-Agent Systems",
    description:
      "Designing and building multi-agent architectures, memory systems, and voice pipelines — from model selection to the orchestration layer that ties it together.",
  },
  {
    id: "02",
    name: "Full-Stack Development",
    description:
      "Production web apps end to end — Next.js, TypeScript, FastAPI, PostgreSQL — shipped and maintained, not just prototyped.",
  },
  {
    id: "03",
    name: "Computer Vision & Voice",
    description:
      "Pipelines built on OpenCV, MediaPipe, DeepFace, and Whisper for real-time perception and speech interfaces.",
  },
  {
    id: "04",
    name: "Mobile Development",
    description:
      "Cross-platform apps with Flutter, including GPS mapping, photo verification, and real-world deployment with NGO partners.",
  },
  {
    id: "05",
    name: "Technical Community & Teaching",
    description:
      "Organizing workshops and technical events as Web Tech Officer at CSI VESIT, breaking down complex topics for mixed-skill audiences.",
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative z-10 w-full bg-[#F5F2ED] text-[#0C0C0C] rounded-t-[2.5rem] sm:rounded-t-[4rem] px-6 py-24 sm:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-12 lg:gap-16">
        
        {/* Sticky Left Column for Title */}
        <div className="lg:col-span-4 mb-16 lg:mb-0">
          <div className="lg:sticky lg:top-28">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500 font-mono block mb-4">
              EXPERTISE
            </span>
            <h2 className="font-display font-black uppercase text-5xl sm:text-7xl lg:text-[5.5rem] leading-none tracking-tight">
              Skills
            </h2>
          </div>
        </div>

        {/* Right Column for Skills Vertical List */}
        <div className="lg:col-span-8 flex flex-col">
          {skillsList.map((skill, index) => (
            <FadeIn
              key={skill.id}
              delay={index * 0.15}
              yOffset={40}
              className="group relative border-t border-black/10 py-10 sm:py-12 first:border-t-0 flex flex-col md:grid md:grid-cols-12 gap-4 sm:gap-6 md:gap-10 transition-colors duration-300 hover:bg-black/[0.02] px-4 -mx-4 rounded-2xl"
            >
              {/* Skill ID Number */}
              <div className="md:col-span-1 text-sm font-bold font-mono text-zinc-400 group-hover:text-black transition-colors duration-300">
                {skill.id}
              </div>

              {/* Skill Content */}
              <div className="md:col-span-11 flex flex-col md:grid md:grid-cols-10 gap-2 md:gap-8">
                <div className="md:col-span-4">
                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 group-hover:text-black transition-colors duration-300">
                    {skill.name}
                  </h3>
                </div>
                <div className="md:col-span-6">
                  <p className="text-sm sm:text-base md:text-lg text-zinc-600 group-hover:text-zinc-800 transition-colors duration-300 font-light leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
          {/* Bottom Border to Close the List */}
          <div className="border-t border-black/10 w-full" />
        </div>
      </div>
    </section>
  );
}
