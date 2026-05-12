"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function AchievementNumbers() {
  return (
    <SectionWrapper className="bg-obsidian py-24 lg:py-32 border-y border-white/5 relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-neonIndigo/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-20 leading-tight">
          Numbers That Speak.
          <br />
          <span className="text-gradient-cyan">Results That Matter.</span>
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <AnimatedCounter end={20} suffix="+" className="text-white" labelClassName="text-gray-500" label="Years of Jaipur Trust" />
          <AnimatedCounter end={100} suffix="+" className="text-white" labelClassName="text-gray-500" label="Businesses Served" />
          <AnimatedCounter end={3} className="text-white" labelClassName="text-gray-500" label="Service Wings" />
          <AnimatedCounter end={15} className="text-white" labelClassName="text-gray-500" label="Days to Go Live" />
        </div>
      </div>
    </SectionWrapper>
  );
}
