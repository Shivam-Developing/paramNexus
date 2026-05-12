"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const trustItems = [
  "📰 Backed by Param Advertising — 20+ Years of Jaipur Trust",
  "🤖 AI-Powered Execution — 60% Lower Cost Than Traditional Agencies",
  "⚡ Live in 15 Days — Guaranteed or We Work for Free",
  "📞 Jaipur-Based Team — Real People, Real Calls",
];

export default function TrustStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="bg-warmGray py-8 lg:py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6">
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <span className="text-sm font-medium text-charcoal/70 text-center lg:text-left whitespace-nowrap">
                {item}
              </span>
              {i < trustItems.length - 1 && (
                <span className="hidden lg:block text-charcoal/20">·</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
