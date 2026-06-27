"use client";

import React, { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  link: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "J.A.R.V.I.S.",
    description: "An intelligent personal assistant powered by AI.",
    link: "#",
    tags: ["React", "Node.js", "AI"],
  },
  {
    title: "MapMyTree",
    description: "A platform for tracking and mapping tree plantations.",
    link: "#",
    tags: ["Next.js", "Maps API", "Tailwind"],
  },
  {
    title: "KAPI Stationery",
    description: "E-commerce platform for boutique stationery items.",
    link: "#",
    tags: ["TypeScript", "Next.js", "Stripe"],
  }
];

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    // Stub for workshop: Add GSAP animation logic here later
    setActiveProject(index);
  };

  const handleMouseLeave = () => {
    // Stub for workshop: Add GSAP animation reverse logic here later
    setActiveProject(null);
  };

  return (
    <section className="py-20 px-8 max-w-7xl mx-auto" ref={containerRef}>
      <h2 className="text-4xl font-bold mb-12 text-white">Featured Projects</h2>
      
      <div className="relative h-[600px] w-full flex items-center justify-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="absolute inset-0 m-auto w-full max-w-2xl h-[400px] rounded-2xl bg-zinc-900 border border-zinc-800 p-8 flex flex-col justify-between transition-colors hover:border-zinc-700"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={{ zIndex: projects.length - index }}
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                <a href={project.link} className="text-zinc-400 hover:text-white transition-colors">
                  <ArrowUpRight size={28} />
                </a>
              </div>
              <p className="text-zinc-400 text-lg">{project.description}</p>
            </div>
            
            <div className="flex gap-3 flex-wrap mt-6">
              {project.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex} 
                  className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}