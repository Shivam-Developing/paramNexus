"use client";
import React from "react";

interface MagicBentoProps {
  children: React.ReactNode;
  className?: string;
}

export const MagicBento: React.FC<MagicBentoProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`relative group rounded-2xl p-6 bg-[#121216]/60 backdrop-blur-md border border-white/10 overflow-hidden transition-all duration-300 hover:bg-[#18181E]/80 hover:border-indigo-500/30 hover:-translate-y-1 ${className}`}
    >
      {/* Top subtle inner gradient glow */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
};
