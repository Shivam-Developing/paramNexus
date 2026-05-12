"use client";
import React from "react";
import { motion } from "framer-motion";

interface LogoLoopProps {
  items: React.ReactNode[];
  speed?: number;
  gap?: number;
}

export const LogoLoop: React.FC<LogoLoopProps> = ({ items, speed = 25, gap = 48 }) => {
  return (
    <div className="relative w-full overflow-hidden flex items-center [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: "linear",
        }}
        className="flex flex-shrink-0 items-center"
        style={{ gap: `${gap}px` }}
      >
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center justify-center transition-transform hover:scale-105 duration-300">
            {item}
          </div>
        ))}
        {/* Duplicate items to achieve seamless loop visually */}
        {items.map((item, idx) => (
          <div key={`dup-${idx}`} className="flex items-center justify-center transition-transform hover:scale-105 duration-300">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
