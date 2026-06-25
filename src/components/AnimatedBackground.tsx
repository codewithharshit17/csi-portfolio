"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 75;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        size: Math.random() * 2 + 0.8,
        opacity: Math.random() * 0.18 + 0.05,
      });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Draw subtle grid backdrop
      ctx.strokeStyle = "rgba(215, 226, 234, 0.012)";
      ctx.lineWidth = 1;
      const gridSize = 50;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // 2. Draw and connect particles
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around borders
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw particle
        ctx.fillStyle = `rgba(215, 226, 234, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect near particles
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 100) {
            ctx.strokeStyle = `rgba(215, 226, 234, ${(1 - dist / 100) * 0.035})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    drawParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-[-2] pointer-events-none bg-[#0C0C0C]"
      />
      {/* Blurred moving gradient orbs */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden select-none">
        <div className="absolute top-[15%] left-[10%] w-[55vw] h-[55vw] rounded-full bg-[#646973] opacity-[0.045] blur-[130px] animate-orb-slow" />
        <div className="absolute bottom-[10%] right-[5%] w-[60vw] h-[60vw] rounded-full bg-[#BBCCD7] opacity-[0.035] blur-[160px] animate-orb-reverse" />
      </div>
    </>
  );
}
