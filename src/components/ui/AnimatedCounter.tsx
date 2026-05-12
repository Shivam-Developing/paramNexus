"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  labelClassName?: string;
  label: string;
  sublabel?: string;
}

export default function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  duration = 2000,
  className,
  labelClassName,
  label,
  sublabel,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const startTime = Date.now();
      const step = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className={cn("text-4xl md:text-5xl lg:text-6xl font-display font-bold", className)}>
        {prefix}
        {count}
        {suffix}
      </div>
      <div className={cn("text-sm md:text-base font-medium mt-2", labelClassName)}>
        {label}
      </div>
      {sublabel && (
        <p className="text-xs text-white/40 mt-1">{sublabel}</p>
      )}
    </div>
  );
}
