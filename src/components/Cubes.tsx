"use client";
import React from "react";
import { motion } from "framer-motion";

export const Cubes: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center ${className}`}>
      <motion.div
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="w-32 h-32 relative [transform-style:preserve-3d] opacity-20"
      >
        {/* Wireframe isometric cube layout construction */}
        <div className="absolute inset-0 border border-indigo-500 rounded-lg [transform:translateZ(64px)]" />
        <div className="absolute inset-0 border border-cyan-500 rounded-lg [transform:rotateY(90deg)_translateZ(64px)]" />
        <div className="absolute inset-0 border border-purple-500 rounded-lg [transform:rotateX(90deg)_translateZ(64px)]" />
      </motion.div>
    </div>
  );
};
