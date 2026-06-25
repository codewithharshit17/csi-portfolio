"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
}

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 240, mass: 0.8 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      mouseX.set(x);
      mouseY.set(y);

      // Spawn trail particles when mouse moves at least 12px
      const dist = Math.hypot(x - lastPos.current.x, y - lastPos.current.y);
      if (dist > 12) {
        const id = Math.random() + Date.now();
        setParticles((prev) => [...prev.slice(-10), { id, x, y }]);
        lastPos.current = { x, y };
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".cursor-pointer")
      ) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".cursor-pointer")
      ) {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Particles Trailing */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ scale: 1, opacity: 0.4 }}
          animate={{ scale: 0, opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed w-1.5 h-1.5 rounded-full bg-[#D7E2EA]/30 pointer-events-none z-50 mix-blend-difference"
          style={{ left: p.x - 3, top: p.y - 3 }}
        />
      ))}

      {/* Inner Dot */}
      <motion.div
        className="fixed w-2 h-2 rounded-full bg-[#D7E2EA] pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mouseX,
          top: mouseY,
          transform: "translate3d(-50%, -50%, 0)",
        }}
      />

      {/* Outer Ring */}
      <motion.div
        className="fixed w-8 h-8 rounded-full border border-[#D7E2EA]/40 pointer-events-none z-50"
        style={{
          left: ringX,
          top: ringY,
          transform: "translate3d(-50%, -50%, 0)",
        }}
        animate={{
          scale: isHovered ? 1.6 : 1,
          backgroundColor: isHovered ? "rgba(215, 226, 234, 0.05)" : "rgba(215, 226, 234, 0)",
          borderColor: isHovered ? "rgba(215, 226, 234, 0.6)" : "rgba(215, 226, 234, 0.4)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      />
    </>
  );
}
