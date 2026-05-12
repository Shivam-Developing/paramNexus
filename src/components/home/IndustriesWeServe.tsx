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
    <SectionWrapper className="bg-offWhite py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-darkFooter text-center mb-14">
          If You Run a Business in Jaipur,
          <br />
          <span className="text-teal">We Work For You.</span>
        </h2>

        {/* Desktop Grid */}
        <div ref={ref} className="hidden md:grid grid-cols-3 lg:grid-cols-4 gap-3">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-black/5 hover:bg-teal hover:text-white hover:border-teal transition-all duration-300 cursor-default group"
            >
              <span className="text-xl">{ind.emoji}</span>
              <span className="text-sm font-medium group-hover:text-white text-charcoal/80">
                {ind.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Mobile Marquee */}
        <div className="md:hidden overflow-hidden">
          <div className="flex animate-marquee gap-3 w-max">
            {[...industries, ...industries].map((ind, i) => (
              <div
                key={`${ind.name}-${i}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-black/5 whitespace-nowrap shrink-0"
              >
                <span>{ind.emoji}</span>
                <span className="text-sm font-medium text-charcoal/80">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center mt-10 text-teal italic text-lg max-w-xl mx-auto">
          &ldquo;If your customers are in Jaipur, they&apos;re already searching
          online. We make sure they find you first.&rdquo;
        </p>
      </div>
    </SectionWrapper>
  );
}
