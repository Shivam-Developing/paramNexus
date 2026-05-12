"use client";

import React from 'react';

interface LogoLoopProps {
  children?: React.ReactNode;
  speed?: number;
  direction?: 'left' | 'right';
  gap?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
}

export default function LogoLoop({
  children,
  speed = 40,
  direction = 'left',
  gap = 64,
  fadeOut = true,
  fadeOutColor = '#050507'
}: LogoLoopProps) {
  return (
    <div 
      className="relative overflow-hidden w-full"
      style={{
        maskImage: fadeOut ? `linear-gradient(to right, transparent, black 10%, black 90%, transparent)` : 'none',
        WebkitMaskImage: fadeOut ? `linear-gradient(to right, transparent, black 10%, black 90%, transparent)` : 'none',
      }}
    >
      <div 
        className="flex w-max animate-marquee"
        style={{ 
          gap: `${gap}px`, 
          animationDuration: `${speed}s`,
          animationDirection: direction === 'right' ? 'reverse' : 'normal'
        }}
      >
        {children}
        {children}
        {children}
      </div>
    </div>
  );
}
