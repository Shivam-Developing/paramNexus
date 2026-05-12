"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";
import MagicRings from "@/components/animations/MagicRings";

export default function FinalCTA() {
  return (
    <SectionWrapper className="bg-obsidian py-24 lg:py-32 relative overflow-hidden">
      {/* Dynamic background */}
      <MagicRings color="#6366F1" colorTwo="#06B6D4" ringCount={5} opacity={0.2} blur={6} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-8">
          Your Competitor Won&apos;t Wait.
          <br />
          <span className="text-gradient-indigo">Neither Should You.</span>
        </h2>
        <p className="mt-8 text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
          Every week without a digital presence is customers lost, revenue
          missed, and ground handed to competitors. Let us fix that — starting
          today, with a free audit.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/contact"
            className="px-10 py-4 text-sm font-bold text-white bg-gradient-to-r from-neonIndigo to-purple-600 rounded-full shadow-2xl hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] hover:-translate-y-1 transition-all duration-300 mobile-full-width-cta"
          >
            📋 Get My Free Digital Audit
          </Link>
          <a
            href="tel:+918744003727"
            className="px-10 py-4 text-sm font-bold text-gray-300 border border-white/10 rounded-full hover:bg-white/5 transition-all duration-300 mobile-full-width-cta"
          >
            📞 Call Us Now
          </a>
        </div>
        
        <p className="mt-10 text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">
          ⚡ Response within 2 hours · Mon–Sat · Real humans
        </p>
      </div>
    </SectionWrapper>
  );
}
