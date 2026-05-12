"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Search, TrendingDown, MousePointerClick, ArrowRight } from "lucide-react";
import { MagicBento } from "@/components/MagicBento";
import { GradientText } from "@/components/GradientText";
import { Cubes } from "@/components/Cubes";

const cards = [
  {
    icon: <Search className="w-8 h-8 text-cyan-400" />,
    title: "YOUR CUSTOMERS GOOGLE BEFORE THEY VISIT",
    body: "88% of consumers search online before walking into a local business. If you're not there, they walk into your competitor's door. Every single time.",
  },
  {
    icon: <TrendingDown className="w-8 h-8 text-indigo-400" />,
    title: "YOUR COMPETITOR ALREADY HAS THE ADVANTAGE",
    body: "Someone in your industry — in your area of Jaipur — has a website, an active Instagram, and 100+ Google reviews. That gap grows wider every month you wait.",
  },
  {
    icon: <MousePointerClick className="w-8 h-8 text-cyan-400" />,
    title: "OFFLINE ALONE IS NO LONGER ENOUGH",
    body: "Newspaper ads and hoardings still matter. But customers who see your hoarding immediately Google you. If nothing appears — you've already lost them.",
  },
];

export default function WakeUpCall() {
  return (
    <section className="bg-obsidian py-24 lg:py-32 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            While You&apos;re Reading This,
            <br />
            <GradientText>Your Competitor Just Got Another Customer Online.</GradientText>
          </h2>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            Here are 3 truths about your digital presence right now:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <MagicBento className="h-full relative rounded-2xl bg-[#121216]/60 backdrop-blur-xl border border-white/10 p-6 shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] transition-all duration-500 hover:-translate-y-1 overflow-hidden group">
                <Cubes className="opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500 relative z-10">
                  {card.icon}
                </div>
                <h3 className="font-display text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4 relative z-10">
                  {card.title}
                </h3>
                <p className="text-gray-300 leading-relaxed relative z-10">{card.body}</p>
              </MagicBento>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm inline-block"
          >
            <p className="text-gray-400 text-lg lg:text-xl italic font-medium max-w-xl mx-auto leading-relaxed">
              &ldquo;The good news? This is fixable. In 15 days.
              <br />
              <span className="text-white">For less than the cost of one print campaign.</span>&rdquo;
            </p>
          </motion.div>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="group px-8 py-4 text-sm font-bold text-white bg-gradient-to-r from-neonIndigo to-purple-600 rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all flex items-center gap-2"
            >
              Show Me How <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services/website-development"
              className="px-8 py-4 text-sm font-bold text-gray-300 border border-white/10 rounded-full hover:bg-white/5 transition-all"
            >
              View Packages
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
