"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface LiveProjectButtonProps {
  href?: string;
  label?: string;
  className?: string;
}

export function LiveProjectButton({
  href = "#",
  label = "Live Project",
  className = "",
}: LiveProjectButtonProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03, borderColor: "rgba(215, 226, 234, 0.4)" }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-widest text-[#D7E2EA] backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.05] hover:text-white ${className}`}
    >
      <span>{label}</span>
      <div className="relative overflow-hidden w-3.5 h-3.5">
        <ArrowUpRight className="absolute inset-0 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-3.5 group-hover:-translate-y-3.5" />
        <ArrowUpRight className="absolute inset-0 w-3.5 h-3.5 -translate-x-3.5 translate-y-3.5 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />
      </div>
    </motion.a>
  );
}
