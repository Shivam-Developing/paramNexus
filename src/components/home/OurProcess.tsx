"use client";

import { motion } from "framer-motion";
import { Search, ListChecks, Code, Rocket } from "lucide-react";
import { GradientText } from "@/components/GradientText";

const steps = [
  {
    num: "STEP 1",
    icon: <Search className="w-6 h-6" />,
    title: "Free Audit",
    desc: "We analyze your current digital presence and show exactly what's missing.",
  },
  {
    num: "STEP 2",
    icon: <ListChecks className="w-6 h-6" />,
    title: "Strategy",
    desc: "We finalize your package, content, and timeline together.",
  },
  {
    num: "STEP 3",
    icon: <Code className="w-6 h-6" />,
    title: "We Build",
    desc: "AI-powered execution begins. You see daily progress updates.",
  },
  {
    num: "STEP 4",
    icon: <Rocket className="w-6 h-6" />,
    title: "Go Live",
    desc: "Your digital identity is live and capturing customers.",
  },
];

export default function OurProcess() {
  return (
    <section className="bg-obsidian py-24 lg:py-32 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-24 leading-tight">
          From Zero to Digital in
          <br />
          <GradientText>4 Simple Steps</GradientText>
        </h2>

        {/* Desktop horizontal stepper */}
        <div className="hidden lg:flex items-start justify-between relative px-10">
          {/* Connector line */}
          <div className="absolute top-12 left-[12%] right-[12%] h-[2px] bg-white/5">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-neonIndigo to-purple-600 shadow-[0_0_15px_rgba(99,102,241,0.5)]"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>

          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center w-1/4 group">
              {/* Node Dot */}
              <div className="w-24 h-24 rounded-full bg-[#121216] border border-white/10 flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform duration-500 group-hover:border-indigo-500/50 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.1)]">
                <div className="text-indigo-400 group-hover:text-white transition-colors duration-500">
                  {step.icon}
                </div>
              </div>
              
              <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.3em] mb-4">
                {step.num}
              </span>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed max-w-[200px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile vertical */}
        <div className="lg:hidden space-y-12 relative">
          {/* Mobile connector line */}
          <div className="absolute left-8 top-10 bottom-10 w-[2px] bg-white/5" />
          
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-20"
            >
              <div className="absolute left-0 top-0 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 z-10">
                {step.icon}
              </div>
              <div className="bg-[#121216]/40 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-1 block">
                  {step.num}
                </span>
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
