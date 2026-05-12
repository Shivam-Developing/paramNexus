"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";
import { Check } from "lucide-react";
import MagicRings from "@/components/animations/MagicRings";

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
    <SectionWrapper
      id="starter-bundle"
      className="relative py-24 lg:py-32 overflow-hidden bg-[#08080A]"
    >
      {/* Ambient background rings */}
      <MagicRings color="#6366F1" ringCount={3} opacity={0.15} blur={10} followMouse={false} />
      
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(99,102,241,0.08),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Copy */}
          <div>
            <span className="inline-block px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-neonIndigo bg-neonIndigo/10 border border-neonIndigo/20 rounded-full mb-8">
              🔥 MOST POPULAR — LIMITED SLOTS
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8">
              Go Completely Digital in 15 Days.
              <br />
              <span className="text-gradient-cyan">
                Less Than a Newspaper Ad.
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg mb-8">
              Everything a Jaipur business needs to own its digital identity —
              designed, built, and launched in one seamless package.
            </p>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-4">
               <span className="text-2xl">⚡</span>
               <p className="text-sm text-gray-300 font-medium">
                  3 slots already claimed this month. We cap monthly onboarding
                  to ensure every client gets personal attention.
               </p>
            </div>
          </div>

          {/* Right — Bundle Card */}
          <div className="flex justify-center relative">
            {/* Glow behind card */}
            <div className="absolute inset-0 bg-neonIndigo/20 blur-[80px] rounded-full scale-75" />
            
            <div className="relative w-full max-w-md premium-glass p-1 rounded-3xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-neonIndigo/20 via-transparent to-cyberCyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative bg-[#121216]/80 p-8 lg:p-10 rounded-[calc(1.5rem-1px)]">
                <div className="text-center mb-8">
                  <h3 className="font-display text-sm font-bold text-white uppercase tracking-widest">
                    ✦ DIGITAL IDENTITY STARTER BUNDLE ✦
                  </h3>
                </div>
                
                <div className="space-y-4 mb-10">
                  {bundleItems.map((item) => (
                    <div key={item} className="flex items-start gap-4 group/item">
                      <div className="w-5 h-5 rounded-full bg-neonIndigo/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-neonIndigo/30 transition-colors">
                        <Check className="w-3 h-3 text-neonIndigo" />
                      </div>
                      <span className="text-sm text-gray-300 group-hover/item:text-white transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-white/5 pt-8 text-center mb-8">
                  <p className="text-xs text-gray-500 line-through mb-1">
                    Market Value: ₹65,000+
                  </p>
                  <p className="text-4xl font-display font-bold text-white">
                    ₹19,999 <span className="text-sm text-gray-400 font-normal">Only</span>
                  </p>
                </div>
                
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white bg-gradient-to-r from-neonIndigo to-purple-600 rounded-2xl shadow-xl hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:-translate-y-1 transition-all duration-300"
                >
                  Claim My Bundle →
                </Link>
                
                <p className="mt-6 text-[10px] text-gray-500 text-center uppercase tracking-widest font-bold">
                  ⏱ 15 Days · No Hidden Costs · Jaipur Team
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
