import React from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.8,
  yOffset = 30,
  className = "",
}: FadeInProps) {
  // TODO: Day 1 Hands-On - Upgrade this wrapper with motion.div for viewpoint reveals
  return (
    <div className={className}>
      {children}
    </div>
  );
}