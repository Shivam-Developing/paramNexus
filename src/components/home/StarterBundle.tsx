"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";
import { Check } from "lucide-react";

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
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#01696f] to-[#0c4e54]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(200,169,97,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Copy */}
          <div>
            <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold bg-gold/10 rounded-full mb-6">
              🔥 MOST POPULAR — LIMITED SLOTS PER MONTH
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Go Completely Digital in 15 Days.
              <br />
              <span className="text-gold/90">
                For Less Than the Cost of a Newspaper Ad.
              </span>
            </h2>
            <p className="mt-6 text-white/70 text-lg leading-relaxed">
              Everything a Jaipur business needs to own its digital identity —
              designed, built, and launched in one seamless package.
            </p>
            <p className="mt-4 text-gold font-semibold">
              ★ 3 slots already claimed this month. We cap monthly onboarding
              to ensure every client gets personal attention.
            </p>
          </div>

          {/* Right — Bundle Card with glow border */}
          <div className="flex justify-center">
            <div className="relative p-[2px] rounded-2xl w-full max-w-md">
              {/* Animated glow border */}
              <div className="absolute inset-0 rounded-2xl border-glow bg-400% opacity-60" />
              <div className="relative bg-white rounded-2xl p-8">
                <div className="text-center mb-6">
                  <h3 className="font-display text-lg font-bold text-deepTeal tracking-wide">
                    ✦ DIGITAL IDENTITY STARTER BUNDLE ✦
                  </h3>
                </div>
                <div className="space-y-3 mb-6">
                  {bundleItems.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-sm text-charcoal">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-black/10 pt-5 text-center">
                  <p className="text-sm text-charcoal/50 line-through">
                    Market Value: ₹65,000+
                  </p>
                  <p className="text-3xl font-display font-bold text-teal mt-1">
                    🎯 ₹19,999 Only
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="mt-6 w-full inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-white bg-teal rounded-xl hover:bg-teal-dark transition-colors mobile-full-width-cta"
                >
                  Claim My Bundle — Limited Slots
                </Link>
                <p className="mt-4 text-xs text-charcoal/50 text-center">
                  ⏱ Delivered in 15 days · No hidden costs · Jaipur team
                  handles everything
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
