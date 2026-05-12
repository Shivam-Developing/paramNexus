"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const industries = [
  { emoji: "🏥", name: "Clinics & Hospitals" },
  { emoji: "🏫", name: "Coaching Institutes" },
  { emoji: "💍", name: "Jewellers & Showrooms" },
  { emoji: "🏠", name: "Real Estate & Builders" },
  { emoji: "🍽", name: "Restaurants & Cafés" },
  { emoji: "🏨", name: "Hotels & Heritage Properties" },
  { emoji: "🛍", name: "Boutiques & Fashion Retail" },
  { emoji: "🏗", name: "Interior Designers" },
  { emoji: "📚", name: "Schools & Colleges" },
  { emoji: "⚖", name: "Legal & Professional Services" },
  { emoji: "🚗", name: "Auto Dealers & Showrooms" },
  { emoji: "🌿", name: "Wellness & Spa Centers" },
];

export default function IndustriesWeServe() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <SectionWrapper className="bg-obsidian py-24 lg:py-32 relative overflow-hidden">
      {/* Background radial */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(99,102,241,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-20 leading-tight">
          If You Run a Business in Jaipur,
          <br />
          <span className="text-gradient-cyan">We Work For You.</span>
        </h2>

        {/* Grid */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="premium-glass px-6 py-4 flex items-center gap-4 hover:border-cyberCyan/50 group transition-all duration-300 cursor-default overflow-hidden"
            >
              <div className="absolute inset-0 bg-cyberCyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="text-2xl relative z-10 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6">{ind.emoji}</span>
              <span className="text-sm font-bold text-gray-300 relative z-10 group-hover:text-white transition-colors">
                {ind.name}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-neonIndigo italic text-xl lg:text-2xl max-w-2xl mx-auto font-display">
            &ldquo;If your customers are in Jaipur, they&apos;re already searching
            online. We make sure they find you first.&rdquo;
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
