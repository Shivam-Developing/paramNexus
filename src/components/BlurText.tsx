"use client";
import React from "react";
import { motion } from "framer-motion";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const BlurText: React.FC<BlurTextProps> = ({ text, className = "", delay = 0 }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay / 1000 },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] },
    },
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 10,
    },
  };

  return (
    <motion.h1
      style={{ display: "flex", flexWrap: "wrap", gap: "0.25em" }}
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={child} className="inline-block">
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
};
