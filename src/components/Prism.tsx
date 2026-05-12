"use client";
import React from "react";
import { motion } from "framer-motion";

interface PrismProps {
  className?: string;
  glow?: number;
}

export const Prism: React.FC<PrismProps> = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Primary Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-5xl bg-gradient-to-tr from-indigo-600/20 via-purple-600/10 to-transparent rounded-full blur-[120px]"
      />
      {/* Secondary Accent Glow */}
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/3 -left-1/4 w-[60vw] h-[60vw] max-w-4xl bg-gradient-to-br from-cyan-500/10 via-indigo-500/10 to-transparent rounded-full blur-[100px]"
      />
      {/* Subtle Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
    </div>
  );
};
