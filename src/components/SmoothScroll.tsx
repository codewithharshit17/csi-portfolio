"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      smoothWheel: true,
    });

    let frameId: number;

    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    frameId = requestAnimationFrame(raf);

    // Sync scroll triggers (e.g. Framer Motion useScroll) with Lenis
    const handleScroll = () => {
      // Force scroll update triggers
      window.dispatchEvent(new Event("scroll"));
    };
    lenis.on("scroll", handleScroll);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
