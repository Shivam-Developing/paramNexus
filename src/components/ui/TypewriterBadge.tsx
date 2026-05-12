"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface TypewriterBadgeProps {
  strings: string[];
  interval?: number;
  className?: string;
}

export default function TypewriterBadge({
  strings,
  interval = 3000,
  className,
}: TypewriterBadgeProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % strings.length);
    }, interval);
    return () => clearInterval(timer);
  }, [strings.length, interval]);

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal/5 border border-teal/15",
        className
      )}
    >
      <span className="text-teal font-bold text-lg">⚡</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="text-sm font-medium text-teal"
        >
          {strings[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
