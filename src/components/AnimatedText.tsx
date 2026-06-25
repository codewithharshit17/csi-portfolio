"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function Char({ children, progress, range }: CharProps) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return <motion.span style={{ opacity }} className="relative">{children}</motion.span>;
}

export function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.4"],
  });

  const words = text.split(" ");
  
  // Total characters count, including spaces
  let totalChars = text.length;
  let charCounter = 0;

  return (
    <p ref={containerRef} className={`flex flex-wrap ${className}`}>
      {words.map((word, wordIndex) => {
        return (
          <span key={wordIndex} className="mr-[0.25em] inline-block whitespace-nowrap">
            {word.split("").map((char, charIndex) => {
              const start = charCounter / totalChars;
              // Add some overlap to make the fade smoother
              const end = Math.min(1, (charCounter + 2) / totalChars);
              charCounter++;
              return (
                <Char
                  key={charIndex}
                  progress={scrollYProgress}
                  range={[start, end]}
                >
                  {char}
                </Char>
              );
            })}
            {/* Account for space after the word in counting */}
            {(() => {
              charCounter++; // Increment for space
              return null;
            })()}
          </span>
        );
      })}
    </p>
  );
}
