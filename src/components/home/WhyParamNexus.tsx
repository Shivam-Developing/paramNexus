"use client";

import { Bot, ShieldCheck, MapPin, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { MagicBento } from "@/components/MagicBento";
import { GradientText } from "@/components/GradientText";
import { Cubes } from "@/components/Cubes";

const features = [
  {
    icon: <Bot className="w-8 h-8 text-indigo-400" />,
    title: "AI-POWERED — PAY LESS, GET MORE",
    body: "We run AI tools across every part of our workflow — design, copywriting, editing, and research. This slashes delivery time and cost by up to 70%. Every rupee we save in operations goes back to you.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-cyan-400" />,
    title: "20+ YEARS OF JAIPUR TRUST BEHIND US",
    body: "Param Nexus is the digital arm of Param Advertising Agency — a name that has placed campaigns in Jaipur's biggest newspapers for decades. We are your market.",
  },
  {
    icon: <MapPin className="w-8 h-8 text-indigo-400" />,
    title: "BUILT FOR JAIPUR. PRICED FOR JAIPUR.",
    body: "No Mumbai pricing models. No Delhi agency playbooks. Every package is designed around what Jaipur businesses actually need — and what they can actually afford.",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
    title: "WE MEASURE CUSTOMERS, NOT CLICKS",
    body: "Vanity metrics don't pay rent. We track calls received, form inquiries, walk-ins, and booking requests. Our job isn't done until your numbers are moving.",
  },
];

export default function WhyParamNexus() {
  return (
    <section className="bg-obsidian py-24 lg:py-32 relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-24 leading-tight">
          Not Just Cheaper.
          <br />
          <GradientText>Built Different.</GradientText>
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((f, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <MagicBento className="h-full relative rounded-2xl bg-[#121216]/60 backdrop-blur-xl border border-white/10 p-6 shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] transition-all duration-500 hover:-translate-y-1 overflow-hidden group">
                <Cubes className="opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500 relative z-10">
                  {f.icon}
                </div>
                <h3 className="font-display text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4 group-hover:text-white transition-colors relative z-10">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors relative z-10">
                  {f.body}
                </p>
              </MagicBento>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
