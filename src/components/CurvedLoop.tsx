"use client";
import React from "react";
import { motion } from "framer-motion";

interface CurvedLoopProps {
  marqueeText: string;
  className?: string;
  radius?: number;
}

export const CurvedLoop: React.FC<CurvedLoopProps> = ({
  marqueeText,
  className = "text-indigo-400",
  radius = 50,
}) => {
  // Ensure text is long enough to wrap the circle neatly
  const repeatedText = `${marqueeText} • `.repeat(3);

  return (
    <div className="relative flex items-center justify-center w-28 h-28 pointer-events-auto select-none">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 w-full h-full"
      >
        <svg className="w-full h-full overflow-visible" viewBox="-60 -60 120 120">
          <path id="textPath" d={`M 0,-${radius} A ${radius},${radius} 0 1,1 0,${radius} A ${radius},${radius} 0 1,1 0,-${radius}`} fill="none" />
          <text className={`text-[9.5px] font-bold uppercase tracking-widest fill-current ${className}`}>
            <textPath href="#textPath" startOffset="0%">
              {repeatedText}
            </textPath>
          </text>
        </svg>
      </motion.div>
      {/* Central static anchor dot */}
      <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_#6366f1]" />
    </div>
  );
};
