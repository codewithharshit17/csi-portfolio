"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";

// Register the React wrapper plugin safely
gsap.registerPlugin(useGSAP);

interface Project {
  title: string;
  status: string;
  description: string;
  details: string;
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "J.A.R.V.I.S.",
    status: "Active Development",
    description: "Multi-agent AI operating system with a Next.js frontend, FastAPI backend, and voice pipeline.",
    details: "Redis, PostgreSQL, Vector DB, OpenCV, MediaPipe, Whisper.",
    link: "https://github.com/codewithharshit17/J.A.R.V.I.S",
    image: "/jarvis_preview.png",
  },
  {
    title: "MapMyTree",
    status: "Shipped 2026",
    description: "Mobile app built with NGO VSM for GPS-tagged tree mapping and QR verification.",
    details: "Flutter, PostgreSQL, field workflows, and verification tooling.",
    link: "https://github.com/codewithharshit17/MapMyTree",
    image: "/mapmytree_preview.png",
  },
  {
    title: "PMS Stationery",
    status: "In Progress",
    description: "Production e-commerce platform for a retail business, covering payments and state.",
    details: "Next.js 15, TypeScript, Tailwind, Prisma ORM, Razorpay, Zustand.",
    link: "https://github.com/codewithharshit17/anuj-ecommerce",
    image: "/pms_preview.png",
  },
  {
    title: "Ecoverse",
    status: "Completed",
    description: "An interactive web platform for environmental awareness and sustainability education.",
    details: "React, Vite, Typscript, Tailwind CSS, Django, Three.js, and WebGL for immersive visualizations.",
    link: "https://ecoverse-sepia.vercel.app/",
    image: "/ecoverse_preview.png",
  },
];

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  // useGSAP acts as a React-safe replacement for useEffect/useLayoutEffect
  useGSAP(() => {
    const cards = cardsRef.current.filter(Boolean);
    const total = cards.length;

    // 1. Define the Initial "Resting/Stacked" State
    cards.forEach((card, index) => {
      const centerOffset = index - (total - 1) / 2;
      gsap.set(card, {
        x: centerOffset * 15, // Nested stacking translation
        y: index * -4,
        rotate: centerOffset * 2,
        scale: 1 - (total - 1 - index) * 0.03, // Base perspective layers
        transformOrigin: "bottom center",
      });
    });

    // 2. Create the Fan-Out Animation Timeline
    const tl = gsap.timeline({ paused: true });

    // Animate all cards simultaneously to create a unified deck expansion
    cards.forEach((card, index) => {
      const centerOffset = index - (total - 1) / 2;
      tl.to(card, {
        x: centerOffset * 260, // Wide fan-out horizontal dispersion
        y: Math.abs(centerOffset) * 20, // Arch-drop curve mapping
        rotate: centerOffset * 8, // Symmetrical rotation angle fan
        scale: 0.96,
        duration: 0.5,
        ease: "power3.out",
      }, 0); // ", 0" ensures all animations run at timestamp 0 together
    });

    timelineRef.current = tl;
  }, { scope: containerRef });

  // Mouse Deck Interactions
  const handleMouseEnterDeck = () => {
    timelineRef.current?.play();
  };

  const handleMouseLeaveDeck = () => {
    timelineRef.current?.reverse();
    // Reset any individual card hover states
    cardsRef.current.forEach((card) => {
      if (card) gsap.to(card, { scale: 0.96, zIndex: "", duration: 0.3, ease: "power2.out" });
    });
  };

  // Individual Card Spotlight focus changes
  const handleMouseEnterCard = (index: number) => {
    const card = cardsRef.current[index];
    if (card) {
      gsap.to(card, {
        scale: 1.05, // Pop focus scale out
        zIndex: 50,  // Push card over adjacent layers
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeaveCard = (index: number) => {
    const card = cardsRef.current[index];
    if (card) {
      gsap.to(card, {
        scale: 0.96,
        zIndex: 10 + index, // Return card back to relative stack layer
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  return (
    <section id="projects" className="relative bg-[#0C0C0C] px-6 py-32 overflow-hidden w-full min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-7xl w-full mb-16 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#BBCCD7] font-mono mb-3">
          Selected work
        </p>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
          Systems, apps, and product code.
        </h2>
      </div>

      {/* GSAP Deck Context Scope */}
      <div
        ref={containerRef}
        className="relative w-full max-w-sm h-[480px] flex items-center justify-center mt-12 cursor-none"
        onMouseEnter={handleMouseEnterDeck}
        onMouseLeave={handleMouseLeaveDeck}
      >
        {projects.map((project, index) => (
          <div
            key={project.title}
            ref={(el) => { cardsRef.current[index] = el; }}
            onClick={() => window.open(project.link, "_blank", "noopener,noreferrer")}
            onMouseEnter={() => handleMouseEnterCard(index)}
            onMouseLeave={() => handleMouseLeaveCard(index)}
            className="absolute w-[280px] h-[400px] rounded-2xl border border-white/10 bg-[#121212] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.8)] backdrop-blur-md select-none flex flex-col group transition-colors duration-300 hover:border-white/20 cursor-none"
            style={{ zIndex: 10 + index }}
          >
            {/* Image Canvas Layer */}
            <div className="relative w-full h-1/2 overflow-hidden bg-black/40 border-b border-white/5">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
            </div>

            {/* Information Layer */}
            <div className="p-5 flex-1 flex flex-col justify-between relative bg-gradient-to-b from-[#121212] to-[#161616]">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold font-display text-white tracking-tight uppercase">
                    {project.title}
                  </h3>
                  <span className="text-[9px] font-mono tracking-widest text-[#BBCCD7] border border-white/10 rounded-full px-2 py-0.5 bg-white/[0.02]">
                    {project.status}
                  </span>
                </div>
                <p className="text-xs text-[#D7E2EA]/70 font-light leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-white/5 pt-3">
                <p className="text-[10px] font-mono text-zinc-500 max-w-[70%] truncate">
                  {project.details}
                </p>
                <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}