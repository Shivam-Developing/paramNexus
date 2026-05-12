"use client";

import React, { useEffect, useRef, useMemo } from 'react';

interface CurvedLoopProps {
  marqueeText?: string;
  speed?: number;
  curveAmount?: number;
  interactive?: boolean;
  className?: string;
}

export default function CurvedLoop({
  marqueeText = '✦ AI POWERED DIGITAL GROWTH ✦ JAIPUR TRUST ✦',
  speed = 0.05,
  curveAmount = 300,
  interactive = true,
  className = ''
}: CurvedLoopProps) {
  const textRef = useRef<SVGTextPathElement>(null);
  const offsetRef = useRef(0);

  const pathDefinition = useMemo(() => {
    // Creating a smooth curve path
    return `M 0 150 Q 500 ${150 - curveAmount} 1000 150`;
  }, [curveAmount]);

  useEffect(() => {
    let request: number;
    const animate = () => {
      offsetRef.current -= speed;
      if (textRef.current) {
        textRef.current.setAttribute('startOffset', `${offsetRef.current}%`);
      }
      request = requestAnimationFrame(animate);
    };
    request = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(request);
  }, [speed]);

  return (
    <div className={`w-full overflow-visible pointer-events-none ${className}`}>
      <svg viewBox="0 0 1000 300" className="w-full h-auto overflow-visible select-none">
        <defs>
          <path id="curvePath" d={pathDefinition} />
        </defs>
        <text className="fill-white/10 text-[40px] font-bold uppercase tracking-widest">
          <textPath href="#curvePath" ref={textRef} startOffset="0%">
            {marqueeText} {marqueeText} {marqueeText} {marqueeText}
          </textPath>
        </text>
      </svg>
    </div>
  );
}
