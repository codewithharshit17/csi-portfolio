"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
  label?: string;
}

export function ContactButton({
  onClick,
  className = "",
  label = "Contact Me",
}: ContactButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default to scrolling to the contact/footer section
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = "mailto:harshit@example.com";
      }
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      onClick={handleClick}
      className={`group relative flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D7E2EA] to-[#BBCCD7] px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-[#0C0C0C] shadow-lg transition-shadow duration-300 hover:shadow-white/5 ${className}`}
    >
      <span>{label}</span>
      <div className="relative overflow-hidden w-4 h-4">
        <ArrowUpRight className="absolute inset-0 w-4 h-4 transition-transform duration-300 group-hover:translate-x-4 group-hover:-translate-y-4" />
        <ArrowUpRight className="absolute inset-0 w-4 h-4 -translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />
      </div>
    </motion.button>
  );
}
