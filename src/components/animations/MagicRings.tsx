"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

interface MagicRingsProps {
  color?: string;
  colorTwo?: string;
  ringCount?: number;
  speed?: number;
  opacity?: number;
  blur?: number;
  followMouse?: boolean;
}

export default function MagicRings({
  color = "#6366F1",
  colorTwo = "#06B6D4",
  ringCount = 6,
  opacity = 0.5,
  blur = 4,
  followMouse = true
}: MagicRingsProps) {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    if (!followMouse) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 400);
      mouseY.set(e.clientY - 400);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [followMouse]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center overflow-hidden">
      <motion.div
        style={{
          x: springX,
          y: springY,
          filter: `blur(${blur}px)`,
        }}
        className="relative w-[800px] h-[800px]"
      >
        {Array.from({ length: ringCount }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border border-white/5"
            style={{
              borderColor: i % 2 === 0 ? color : colorTwo,
              opacity: opacity * (1 - i / ringCount),
              scale: 0.5 + (i * 0.15),
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.5 + (i * 0.15), 0.6 + (i * 0.15), 0.5 + (i * 0.15)],
            }}
            transition={{
              rotate: {
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
