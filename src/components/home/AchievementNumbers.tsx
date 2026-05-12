"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function AchievementNumbers() {
  return (
    <SectionWrapper className="bg-offWhite py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-darkFooter text-center mb-14 leading-tight">
          Numbers That Speak.
          <br />
          <span className="text-teal">Results That Matter.</span>
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <AnimatedCounter end={20} suffix="+" className="text-teal" labelClassName="text-charcoal/60" label="Years of Jaipur Trust" />
          <AnimatedCounter end={100} suffix="+" className="text-teal" labelClassName="text-charcoal/60" label="Businesses Served" />
          <AnimatedCounter end={3} className="text-teal" labelClassName="text-charcoal/60" label="Service Wings" />
          <AnimatedCounter end={15} className="text-teal" labelClassName="text-charcoal/60" label="Days to Go Live" />
        </div>
      </div>
    </SectionWrapper>
  );
}
