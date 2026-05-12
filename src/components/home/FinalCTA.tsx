"use client";

import Link from "next/link";
import { Search, Phone, Zap } from "lucide-react";
import { GradientText } from "@/components/GradientText";
import { MagicRings } from "@/components/MagicRings";

export default function FinalCTA() {
  return (
    <section className="bg-obsidian py-24 lg:py-32 relative overflow-hidden border-t border-white/5">
      {/* Background focus */}
      <MagicRings className="opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05),transparent_60%)] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-8">
          Your Competitor Won&apos;t Wait.
          <br />
          <GradientText>Neither Should You.</GradientText>
        </h2>
        <p className="mt-8 text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
          Every week without a digital presence is customers lost, revenue
          missed, and ground handed to competitors. Let us fix that — starting
          today, with a free audit.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 text-sm font-bold text-white bg-gradient-to-r from-neonIndigo to-purple-600 rounded-full shadow-2xl hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] hover:-translate-y-1 transition-all duration-300"
          >
            <Search className="w-4 h-4" /> Get My Free Digital Audit
          </Link>
          <a
            href="tel:+918744003727"
            className="inline-flex items-center gap-2 px-10 py-4 text-sm font-bold text-gray-300 border border-white/10 rounded-full hover:bg-white/5 transition-all duration-300"
          >
            <Phone className="w-4 h-4" /> Call Us Now
          </a>
        </div>
        
        <div className="mt-16 flex items-center justify-center gap-6">
           <div className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-[0.25em] font-bold">
             <Zap className="w-3 h-3 text-indigo-400" /> Response within 2 hours
           </div>
           <div className="w-1 h-1 rounded-full bg-gray-700" />
           <div className="text-[10px] text-gray-500 uppercase tracking-[0.25em] font-bold">
             Mon–Sat
           </div>
           <div className="w-1 h-1 rounded-full bg-gray-700" />
           <div className="text-[10px] text-gray-500 uppercase tracking-[0.25em] font-bold">
             Real humans, not bots
           </div>
        </div>
      </div>
    </section>
  );
}
