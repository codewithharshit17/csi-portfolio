"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";

// Register the React-safe GSAP lifecycle wrapper
gsap.registerPlugin(useGSAP);

export function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const container = containerRef.current;
    const card = cardRef.current;
    const spotlight = spotlightRef.current;

    if (!container || !card || !spotlight) return;

    // Coordinate-mapped 3D Tilt Interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const cardWidth = rect.width;
      const cardHeight = rect.height;

      // Find the cursor position relative to the absolute center of the card (-0.5 to 0.5)
      const relativeX = (e.clientX - rect.left) / cardWidth - 0.5;
      const relativeY = (e.clientY - rect.top) / cardHeight - 0.5;

      // Max degrees of physical 3D structural tilt
      const maxTiltX = 8; 
      const maxTiltY = 8;

      // GSAP animate the 3D spatial matrix rotations and directional shifts
      gsap.to(card, {
        rotateY: relativeX * maxTiltX,   // Rotates horizontally on mouse X
        rotateX: -relativeY * maxTiltY,  // Rotates vertically on mouse Y
        x: relativeX * 15,               // Parallax translation X
        y: relativeY * 15,               // Parallax translation Y
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto",
      });

      // Map the internal specular reflection spotlight position
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      gsap.to(spotlight, {
        x: mouseX,
        y: mouseY,
        duration: 0.2,
        ease: "power1.out",
      });
    };

    // Elastic reset animation when the mouse exits the boundary
    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, { scope: containerRef });

  return (
    <footer 
      ref={containerRef}
      id="contact" 
      className="bg-[#0C0C0C] px-6 pb-20 pt-32 relative z-20 w-full flex justify-center items-center overflow-hidden"
      style={{ perspective: "1200px" }} // Sets the virtual 3D camera distance
    >
      {/* Structural 3D Card Panel Wrapper */}
      <div
        ref={cardRef}
        className="w-full max-w-7xl rounded-3xl border border-white/[0.07] bg-gradient-to-b from-white/[0.02] to-white/[0.005] backdrop-blur-2xl p-10 sm:p-14 relative overflow-hidden flex flex-col gap-12 sm:flex-row sm:items-center sm:justify-between transform-gpu select-none cursor-none group/footer
          
          /* Hyper-3D Drop Shadows mimicking physical light occlusion layers */
          shadow-[
            0_4px_5px_rgba(0,0,0,0.4),
            0_20px_40px_rgba(0,0,0,0.5),
            0_60px_120px_rgba(0,0,0,0.7),
            inset_0_1px_0px_rgba(255,255,255,0.12),
            inset_0_0_40px_rgba(255,255,255,0.01)
          ]
          hover:border-white/[0.14] 
          transition-colors duration-500"
        style={{ transformStyle: "preserve-3d" }} // Forces internal layers to respect separate Z-indices
      >
        
        {/* Context Layer (Pushed out into virtual foreground via parallax) */}
        <div 
          className="max-w-xl relative z-10"
          style={{ transform: "translateZ(40px)" }} // Extracts text out 40px into the 3D plane
        >
          <h3 className="font-display text-4xl font-black text-white tracking-tight uppercase bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent select-none">
            Harshit Jaiswar
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-[#D7E2EA]/75 font-light tracking-wide">
            Building AI systems and full-stack products from Mumbai. Reach out
            for engineering work, collaborations, or workshop ideas.
          </p>
        </div>

        {/* Social Links Panel (Pushed out into intermediate foreground) */}
        <div 
          className="flex flex-wrap gap-8 text-xs font-mono uppercase tracking-widest text-[#BBCCD7]/60 relative z-10"
          style={{ transform: "translateZ(30px)" }} // Extracts links 30px out into the 3D plane
        >
          <a
            href="https://github.com/codewithharshit17"
            className="group/link flex items-center gap-2 transition-colors duration-300 hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            <span>GitHub</span>
            <div className="relative overflow-hidden w-3.5 h-3.5">
              <ArrowUpRight className="absolute inset-0 w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-4 group-hover/link:-translate-y-4 opacity-60 group-hover/link:opacity-100" />
              <ArrowUpRight className="absolute inset-0 w-3.5 h-3.5 -translate-x-4 translate-y-4 transition-transform duration-300 group-hover/link:translate-x-0 group-hover/link:translate-y-0 text-white" />
            </div>
          </a>
          
          <a
            href="https://www.linkedin.com/in/harshit-jaiswar/"
            className="group/link flex items-center gap-2 transition-colors duration-300 hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            <span>LinkedIn</span>
            <div className="relative overflow-hidden w-3.5 h-3.5">
              <ArrowUpRight className="absolute inset-0 w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-4 group-hover/link:-translate-y-4 opacity-60 group-hover/link:opacity-100" />
              <ArrowUpRight className="absolute inset-0 w-3.5 h-3.5 -translate-x-4 translate-y-4 transition-transform duration-300 group-hover/link:translate-x-0 group-hover/link:translate-y-0 text-white" />
            </div>
          </a>
        </div>

        {/* Dynamic Specular Shading Light Spotlight Layer */}
        <div 
          ref={spotlightRef}
          className="absolute w-[450px] h-[450px] rounded-full bg-radial from-white/[0.045] to-transparent pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover/footer:opacity-100 transition-opacity duration-500 mix-blend-screen"
          style={{ transform: "translateZ(10px)" }}
        />
      </div>
    </footer>
  );
}