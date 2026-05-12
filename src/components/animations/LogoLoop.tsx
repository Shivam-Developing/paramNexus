"use client";

import React from 'react';

interface LogoLoopProps {
  images?: string[];
  speed?: number;
  direction?: 'left' | 'right';
  gap?: number;
  scaleOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
}

export default function LogoLoop({
  images = [],
  speed = 40,
  direction = 'left',
  gap = 64,
  scaleOnHover = true,
  fadeOut = true,
  fadeOutColor = '#050507'
}: LogoLoopProps) {
  return (
    <div 
      className={`relative overflow-hidden w-full logo-loop-fade`} 
      style={{ '--fade-color': fadeOutColor } as React.CSSProperties}
    >
      <div 
        className={`flex w-max animate-marquee ${direction === 'right' ? 'flex-row-reverse' : ''}`}
        style={{ 
          gap: `${gap}px`, 
          animationDuration: `${speed}s`,
          animationDirection: direction === 'right' ? 'reverse' : 'normal'
        }}
      >
        {[...images, ...images, ...images].map((src, i) => (
          <div 
            key={i} 
            className={`flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ${scaleOnHover ? 'hover:scale-110' : ''}`}
          >
            <img src={src} alt="Partner Logo" className="h-12 w-auto object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}
