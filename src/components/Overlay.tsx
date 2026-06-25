"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

type OverlayProps = {
  progress: MotionValue<number>;
};

function SceneOne({ progress }: OverlayProps) {
  const opacity = useTransform(progress, [0, 0.08, 0.18], [1, 1, 0]);
  const y = useTransform(progress, [0, 0.18], [0, -80]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="sticky top-0 flex h-screen items-center justify-center px-6 text-center"
    >
      <div className="max-w-5xl">
        <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-[#D7E2EA]/40 font-mono">
          Portfolio / 2026
        </p>
        <h1 className="font-display text-balance text-5xl font-black leading-[0.95] text-[#D7E2EA] sm:text-7xl lg:text-8xl tracking-tight uppercase">
          Harshit. <span className="text-[#D7E2EA]/30 font-medium">AI/ML Engineer & Full-Stack Developer.</span>
        </h1>
      </div>
    </motion.div>
  );
}

function SceneTwo({ progress }: OverlayProps) {
  const opacity = useTransform(progress, [0.18, 0.26, 0.38, 0.45], [0, 1, 1, 0]);
  const y = useTransform(progress, [0.18, 0.26, 0.38, 0.45], [60, 0, 0, -60]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="sticky top-0 -mt-[100vh] flex h-screen items-center px-6 sm:px-10 lg:px-16"
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
  const opacity = useTransform(progress, [0.48, 0.56, 0.72, 0.8], [0, 1, 1, 0]);
  const y = useTransform(progress, [0.48, 0.56, 0.72, 0.8], [60, 0, 0, -60]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="sticky top-0 -mt-[100vh] flex h-screen items-center justify-end px-6 sm:px-10 lg:px-16"
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
