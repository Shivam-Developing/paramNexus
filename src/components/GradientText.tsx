"use client";
import React from "react";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = "",
  colors = ["#6366F1", "#A855F7", "#06B6D4", "#6366F1"], // Seamless loop colors
  animationSpeed = 8,
  showBorder = false,
}) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    backgroundSize: "300% 100%",
  };

  return (
    <div className={`relative inline-block ${className}`}>
      {showBorder && (
        <div
          className="absolute inset-0 rounded-lg bg-[length:300%_100%] animate-gradient-shift p-[1px]"
          style={gradientStyle}
        >
          <div className="w-full h-full bg-[#050507] rounded-[calc(0.5rem-1px)]" />
        </div>
      )}
      <span
        className="relative z-10 bg-[length:300%_100%] bg-clip-text text-transparent animate-gradient-shift"
        style={gradientStyle}
      >
        {children}
      </span>
    </div>
  );
};
