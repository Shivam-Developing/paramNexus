"use client";

import { motion } from "framer-motion";

const trustItems = [
  "📰 Backed by Param Advertising — 20+ Years of Jaipur Trust",
  "🤖 AI-Powered Execution — 60% Lower Cost Than Traditional Agencies",
  "⚡ Live in 15 Days — Guaranteed or We Work for Free",
  "📞 Jaipur-Based Team — Real People, Real Calls",
];

export default function TrustStrip() {
  return (
    <section className="bg-eerieBlack py-8 lg:py-10 overflow-hidden border-y border-white/5 relative">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-neonIndigo/5 blur-[80px]" />
      </div>

      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12">
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-center gap-4 group"
            >
              <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300 text-center lg:text-left whitespace-nowrap">
                {item}
              </span>
              {i < trustItems.length - 1 && (
                <span className="hidden lg:block text-white/10">✦</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
