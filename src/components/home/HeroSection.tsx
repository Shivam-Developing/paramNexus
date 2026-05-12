"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import TypewriterBadge from "@/components/ui/TypewriterBadge";
import Prism from "@/components/animations/Prism";
import BlurText from "@/components/animations/BlurText";
import CurvedLoop from "@/components/animations/CurvedLoop";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-obsidian overflow-hidden pt-24 lg:pt-0 flex items-center">
      {/* Background Component */}
      <Prism height={3.5} baseWidth={5.5} animationType="rotate" glow={1.2} noise={0.4} transparent={true} />
      
      {/* Ambient bleeds */}
      <div className="ambient-bleed top-1/4 right-0 w-[600px] h-[600px] bg-neonIndigo/20" />
      <div className="ambient-bleed bottom-1/4 left-0 w-[400px] h-[400px] bg-cyberCyan/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-0 relative z-10">
        <div className="grid lg:grid-cols-[55fr_45fr] gap-12 lg:gap-8 items-center">
          {/* Left Column — Text */}
          <div className="order-1 relative">
            <TypewriterBadge
              strings={[
                "Jaipur's First AI-Powered Growth Agency",
                "Where Print Legacy Meets Digital Future",
                "Your Business Deserves to Be Found",
              ]}
              className="mb-8"
            />

            <BlurText 
              text="Your Customers Are Searching For You Online."
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-6"
              animateBy="words"
              direction="top"
              delay={150}
              stepDuration={0.35}
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="mt-6 text-base sm:text-lg text-gray-400 max-w-lg leading-relaxed"
            >
              Param Nexus builds websites, manages social media, and creates videos
              for Jaipur&apos;s local businesses — using AI to deliver agency-quality
              results at prices the Jaipur market can actually afford.
            </motion.p>

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
                🔍 Get Your Free Digital Audit
              </Link>
              <a
                href="https://wa.me/918744003727"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-gray-300 border border-white/10 rounded-full hover:bg-white/5 transition-all duration-300 mobile-full-width-cta"
              >
                💬 Talk on WhatsApp
              </a>
              
              {/* Floating Curved Accent near CTA */}
              <CurvedLoop 
                className="absolute -top-16 -right-20 lg:-right-40 w-80 opacity-40 scale-75 lg:scale-100 hidden sm:block"
                marqueeText="✦ AI POWERED GROWTH ✦ JAIPUR TRUST ✦"
                speed={0.03}
                curveAmount={200}
              />
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
              <div className="premium-glass rounded-2xl shadow-2xl overflow-hidden border border-white/10">
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <div className="flex-1 ml-2 px-3 py-1 bg-black/40 rounded-md text-[10px] text-gray-500 font-mono">
                    🌐 paramnexus.in/yourbusiness
                  </div>
                </div>
                {/* Card body */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-gray-300">Digital Presence Score</span>
                    <span className="text-2xl font-display font-bold text-neonIndigo">82%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full mb-6 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "82%" }}
                      transition={{ delay: 2, duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-neonIndigo to-cyberCyan rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                    />
                  </div>
                  <div className="space-y-3.5">
                    {[
                      { label: "Website", done: true },
                      { label: "Google Listed", done: true },
                      { label: "Instagram", done: true },
                      { label: "Video Content", done: false },
                      { label: "SEO Setup", done: false },
                      { label: "WhatsApp Auto", done: false },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${item.done ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}>
                          {item.done ? "✓" : "×"}
                        </div>
                        <span className={`text-sm ${item.done ? "text-gray-200" : "text-gray-500"}`}>
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="mt-8 w-full inline-flex items-center justify-center px-4 py-3 text-sm font-bold text-white bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    Fix My Presence →
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
