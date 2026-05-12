"use client";

import Link from "next/link";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { MagicBento } from "@/components/MagicBento";
import { GradientText } from "@/components/GradientText";
import { MagicRings } from "@/components/MagicRings";

const bundleItems = [
  "5-Page Professional Website",
  "Google Business Profile Setup & Optimization",
  "Instagram + Facebook Business Page — Fully Branded",
  "1 Brand Introduction Reel (Shot + Edited)",
  "WhatsApp Business Setup with Quick Replies",
  "1-Month Free Website Support",
];

export default function StarterBundle() {
  return (
    <section className="bg-obsidian py-24 lg:py-32 relative overflow-hidden border-t border-white/5">
      {/* Background ambient rings */}
      <MagicRings className="opacity-15" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(99,102,241,0.05),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
              <Sparkles className="w-3 h-3" /> MOST POPULAR — LIMITED SLOTS PER MONTH
            </div>
            
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8">
              Go Completely Digital in 15 Days.
              <br />
              <GradientText>
                For Less Than the Cost of a Newspaper Ad.
              </GradientText>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg mb-8">
              Everything a Jaipur business needs to own its digital identity — 
              designed, built, and launched in one seamless package.
            </p>

            <div className="p-6 rounded-2xl bg-[#121216]/60 backdrop-blur-xl border border-white/10 flex items-start gap-4 shadow-[0_0_30px_rgba(99,102,241,0.15)] max-w-md">
               <span className="text-2xl text-indigo-400">★</span>
               <p className="text-sm text-gray-300 font-medium">
                  3 slots already claimed this month. We cap monthly onboarding
                  to ensure every client gets personal attention.
               </p>
            </div>
          </div>

          {/* Right — Bundle Card */}
          <div className="flex justify-center relative">
            <div className="absolute inset-0 bg-indigo-500/10 blur-[100px] rounded-full scale-75" />
            
            <MagicBento className="max-w-md w-full !p-0 shadow-[0_0_50px_rgba(99,102,241,0.2)] overflow-hidden">
              <div className="pt-8 px-6 pb-6 lg:pt-10 lg:px-10 lg:pb-10">
                <div className="text-center mb-10">
                  <h3 className="font-display text-[10px] font-bold text-indigo-400 uppercase tracking-[0.25em]">
                    ✦ DIGITAL IDENTITY STARTER BUNDLE ✦
                  </h3>
                </div>
                
                <div className="space-y-4 mb-12">
                  {bundleItems.map((item) => (
                    <div key={item} className="flex items-start gap-4 group/item">
                      <div className="w-5 h-5 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-indigo-500/30 transition-all duration-300">
                        <Check className="w-3 h-3 text-indigo-400" />
                      </div>
                      <span className="text-sm text-gray-300 group-hover/item:text-white transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-white/10 pt-10 text-center mb-10">
                  <p className="text-[10px] text-gray-500 line-through mb-1 uppercase tracking-widest font-bold">
                    Market Value: ₹65,000+
                  </p>
                  <div className="relative inline-block">
                    <p className="text-4xl font-display font-bold text-white">
                      ₹19,999 <span className="text-sm text-gray-500 font-normal">Only</span>
                    </p>
                  </div>
                </div>
                
                <Link
                  href="/contact"
                  className="w-full group inline-flex items-center justify-center gap-2 px-8 py-5 text-sm font-bold text-white bg-gradient-to-r from-neonIndigo to-purple-600 rounded-2xl shadow-xl hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-300"
                >
                  Claim My Bundle — Limited Slots <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <p className="mt-8 text-[9px] text-gray-500 text-center uppercase tracking-widest font-bold">
                  Delivered in 15 days · No hidden costs · Jaipur team handles everything
                </p>
              </div>
            </MagicBento>
          </div>
        </div>
      </div>
    </section>
  );
}
