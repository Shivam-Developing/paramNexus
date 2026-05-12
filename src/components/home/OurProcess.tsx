"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    emoji: "🔍",
    title: "Free Audit",
    days: "Day 1",
    desc: "We analyze your current digital presence and show exactly what's missing.",
  },
  {
    num: "02",
    emoji: "📋",
    title: "Strategy",
    days: "Day 2–3",
    desc: "We finalize your package, content, and timeline together.",
  },
  {
    num: "03",
    emoji: "⚙",
    title: "We Build",
    days: "Day 4–12",
    desc: "AI-powered execution begins. You see daily progress updates.",
  },
  {
    num: "04",
    emoji: "🚀",
    title: "Go Live",
    days: "Day 13–15",
    desc: "Your digital identity is live and capturing customers.",
  },
];

export default function OurProcess() {
  return (
    <SectionWrapper className="bg-obsidian py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-24">
          From Zero to Digital in <br />
          <span className="text-gradient-indigo">4 Simple Steps</span>
        </h2>

        {/* Desktop horizontal stepper */}
        <div className="hidden lg:flex items-start justify-between relative px-10">
          {/* Connector line */}
          <div className="absolute top-12 left-[15%] right-[15%] h-[1px] bg-white/10">
            <motion.div 
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-neonIndigo shadow-[0_0_15px_rgba(99,102,241,0.8)]"
              animate={{ left: ["0%", "100%", "0%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {steps.map((step, i) => (
            <div key={step.num} className="relative flex flex-col items-center text-center w-1/4 group">
              <div className="w-24 h-24 rounded-3xl premium-glass flex items-center justify-center mb-8 relative z-10 premium-glass-hover group-hover:scale-110 transition-transform duration-500">
                <span className="text-3xl transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125">{step.emoji}</span>
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-neonIndigo flex items-center justify-center text-[10px] font-bold text-white border-4 border-obsidian">
                  {step.num}
                </div>
              </div>
              <span className="text-xs font-bold text-neonIndigo uppercase tracking-[0.2em] mb-3">
                {step.days}
              </span>
              <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-cyberCyan transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed max-w-[200px] group-hover:text-gray-300 transition-colors">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile vertical */}
        <div className="lg:hidden space-y-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="premium-glass p-6 group"
            >
              <div className="flex items-center gap-5 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <span className="text-2xl">{step.emoji}</span>
                </div>
                <div>
                  <span className="text-xs font-bold text-neonIndigo uppercase tracking-widest">
                    {step.days}
                  </span>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-cyberCyan transition-colors">
                    {step.title}
                  </h3>
                </div>
              </div>
              <p className="text-sm text-gray-400 ml-1 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
