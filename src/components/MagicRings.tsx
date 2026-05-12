"use client";
import React from "react";
import { motion } from "framer-motion";

interface MagicRingsProps {
  className?: string;
  color?: string;
}

export const MagicRings: React.FC<MagicRingsProps> = ({
  className = "",
  color = "border-indigo-500/20",
}) => {
  const rings = [200, 320, 440, 560];

  return (
    <div className={`absolute inset-0 flex items-center justify-center pointer-events-none ${className}`}>
      {rings.map((size, index) => (
        <motion.div
          key={index}
          style={{ width: size, height: size }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + index * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute rounded-full border ${color}`}
        />
      ))}
    </div>
  );
};
