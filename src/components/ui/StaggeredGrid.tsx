"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface StaggeredGridProps {
  children: React.ReactNode[];
  className?: string;
  childClassName?: string;
  staggerDelay?: number;
}

export default function StaggeredGrid({
  children,
  className,
  childClassName,
  staggerDelay = 0.12,
}: StaggeredGridProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className={cn(className)}>
      {children.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: i * staggerDelay,
          }}
          className={cn(childClassName)}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
