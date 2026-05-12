"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { GradientText } from "@/components/GradientText";

export default function AchievementNumbers() {
  return (
    <section className="bg-obsidian py-24 lg:py-32 border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-20 leading-tight">
          Numbers That Speak.
          <br />
          <GradientText>Results That Matter.</GradientText>
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="relative group">
            <AnimatedCounter end={20} suffix="+" className="text-5xl lg:text-7xl font-display font-bold text-white mb-4" labelClassName="text-xs font-bold text-gray-500 uppercase tracking-widest" label="Years of Jaipur Trust" />
            <div className="absolute -bottom-4 left-1/4 right-1/4 h-px bg-indigo-500/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </div>
          
          <div className="relative group">
            <AnimatedCounter end={100} suffix="+" className="text-5xl lg:text-7xl font-display font-bold text-white mb-4" labelClassName="text-xs font-bold text-gray-500 uppercase tracking-widest" label="Businesses Served" />
            <div className="absolute -bottom-4 left-1/4 right-1/4 h-px bg-cyan-500/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </div>
          
          <div className="relative group">
            <AnimatedCounter end={3} className="text-5xl lg:text-7xl font-display font-bold text-white mb-4" labelClassName="text-xs font-bold text-gray-500 uppercase tracking-widest" label="Service Wings" />
            <div className="absolute -bottom-4 left-1/4 right-1/4 h-px bg-indigo-500/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </div>
          
          <div className="relative group">
            <AnimatedCounter end={15} className="text-5xl lg:text-7xl font-display font-bold text-white mb-4" labelClassName="text-xs font-bold text-gray-500 uppercase tracking-widest" label="Days to Go Live" />
            <div className="absolute -bottom-4 left-1/4 right-1/4 h-px bg-cyan-500/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
