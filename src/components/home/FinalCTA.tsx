"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <SectionWrapper className="bg-deepTeal py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
          Your Competitor Won&apos;t Wait.
          <br />
          Neither Should You.
        </h2>
        <p className="mt-6 text-white/60 text-lg max-w-xl mx-auto leading-relaxed">
          Every week without a digital presence is customers lost, revenue
          missed, and ground handed to competitors. Let us fix that — starting
          today, with a free audit.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-3.5 text-sm font-bold text-deepTeal bg-gold rounded-full hover:bg-gold-light transition-colors mobile-full-width-cta"
          >
            📋 Get My Free Digital Audit
          </Link>
          <a
            href="tel:+918744003727"
            className="px-8 py-3.5 text-sm font-semibold text-white border-2 border-white/30 rounded-full hover:bg-white hover:text-deepTeal transition-all duration-300 mobile-full-width-cta"
          >
            📞 Call Us Now
          </a>
        </div>
        <p className="mt-6 text-xs text-white/40">
          Response within 2 hours · Mon–Sat · Real humans, not bots
        </p>
      </div>
    </SectionWrapper>
  );
}
