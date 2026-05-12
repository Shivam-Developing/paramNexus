"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Search, MessageSquare, Globe, ArrowRight } from "lucide-react";
import { Prism } from "@/components/Prism";
import { BlurText } from "@/components/BlurText";
import { GradientText } from "@/components/GradientText";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-obsidian overflow-hidden z-0 flex items-center pt-24 lg:pt-0">
      {/* Layer 1: Ambient Backdrop Canvas */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <Prism className="opacity-50" />
      </div>

      {/* Layer 2: Corrected Ambient Radial Glow (Fixes broken circular strip) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[140px] rounded-full z-[2] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full z-[2] pointer-events-none" />

      {/* Layer 3: Foreground Content Stacking */}
      <div className="relative z-[10] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-0">
        <div className="grid lg:grid-cols-[55fr_45fr] gap-12 lg:gap-8 items-center">
          {/* Left Column — Text */}
          <div className="order-1 relative">

            <div className="mb-6">
              <BlurText 
                text="Your Customers Are Searching For You Online."
                className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-white"
                delay={200}
              />
              <div className="mt-4">
                <GradientText className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
                  Are You Even There?
                </GradientText>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Jaipur&apos;s First AI-Powered Digital Growth Agency
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.5 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 items-center relative"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-gradient-to-r from-neonIndigo to-purple-600 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] hover:-translate-y-1 transition-all duration-300 mobile-full-width-cta z-10"
              >
                <Search className="w-4 h-4" /> Get Your Free Digital Audit
              </Link>
              <a
                href="https://wa.me/918744003727"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-gray-300 border border-white/10 rounded-full hover:bg-white/5 transition-all duration-300 mobile-full-width-cta"
              >
                <MessageSquare className="w-4 h-4" /> Talk on WhatsApp
              </a>
              
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.3 }}
              className="mt-6 text-xs text-gray-500"
            >
              No cost. No commitment. Honest answer in 24 hours.
            </motion.p>
          </div>

          {/* Right Column — Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="order-2 flex justify-center lg:justify-end"
          >
            <div className="animate-float w-full max-w-sm">
              <div className="relative group rounded-3xl p-px bg-gradient-to-b from-white/20 to-transparent overflow-hidden shadow-[0_0_50px_rgba(99,102,241,0.2)]">
                <div className="relative bg-[#0B0B0E]/80 backdrop-blur-3xl rounded-[calc(1.5rem-1px)] overflow-hidden p-8 border border-white/5">
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-500/20 blur-[60px] pointer-events-none" />
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/20 blur-[60px] pointer-events-none" />
                  
                  <div className="flex items-center justify-between mb-8">
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.3em]">Foundation</p>
                      <h3 className="font-display text-2xl font-bold text-white tracking-tight">PARAM ADVERTISING</h3>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden group/item">
                       <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity" />
                       <p className="text-4xl font-display font-black text-white mb-1">20+</p>
                       <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Years of Jaipur Legacy</p>
                    </div>
                    
                    <div className="flex items-center gap-4 px-2">
                       <div className="flex -space-x-3">
                          {[1,2,3,4].map(i => (
                            <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0B0B0E] bg-white/10 flex items-center justify-center text-[10px] font-bold text-gray-400">
                               {String.fromCharCode(64 + i)}
                            </div>
                          ))}
                       </div>
                       <p className="text-xs text-gray-500 font-medium">Trusted by <span className="text-white">500+ Local Brands</span></p>
                    </div>
                  </div>

                  <Link
                    href="/our-legacy"
                    className="mt-10 w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold text-white bg-indigo-500 rounded-2xl hover:bg-indigo-600 shadow-[0_10px_30px_rgba(99,102,241,0.3)] transition-all duration-300 group/btn"
                  >
                    View Our Legacy <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
