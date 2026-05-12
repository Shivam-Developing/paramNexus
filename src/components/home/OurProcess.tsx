"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";

const steps = [
  {
    num: "01",
    emoji: "🔍",
    title: "Free Audit",
    days: "Day 1",
    desc: "We analyze your current digital presence and show exactly what's missing.",
  },
  {
    num: "02",
    emoji: "📋",
    title: "Strategy",
    days: "Day 2–3",
    desc: "We finalize your package, content, and timeline together.",
  },
  {
    num: "03",
    emoji: "⚙",
    title: "We Build",
    days: "Day 4–12",
    desc: "AI-powered execution begins. You see daily progress updates.",
  },
  {
    num: "04",
    emoji: "🚀",
    title: "Go Live",
    days: "Day 13–15",
    desc: "Your digital identity is live and capturing customers.",
  },
];

export default function OurProcess() {
  return (
    <SectionWrapper className="bg-warmGray/50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-darkFooter text-center mb-14">
          From Zero to Digital in{" "}
          <span className="text-teal">4 Simple Steps</span>
        </h2>

        {/* Desktop horizontal stepper */}
        <div className="hidden lg:flex items-start justify-between relative">
          {/* Connector line */}
          <div className="absolute top-10 left-[12%] right-[12%] h-0.5 bg-teal/20">
            <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-teal animate-traveling-dot" />
          </div>

          {steps.map((step, i) => (
            <div key={step.num} className="relative flex flex-col items-center text-center w-1/4 px-4">
              <div className="w-20 h-20 rounded-full bg-teal/10 flex items-center justify-center mb-4 relative z-10 border-2 border-teal/20">
                <span className="text-2xl">{step.emoji}</span>
              </div>
              <span className="text-xs font-bold text-teal/60 uppercase tracking-wider mb-1">
                {step.days}
              </span>
              <h3 className="font-display text-lg font-bold text-darkFooter mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-charcoal/60 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile vertical accordion */}
        <div className="lg:hidden space-y-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white rounded-xl p-5 shadow-sm border border-black/5"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                  <span className="text-xl">{step.emoji}</span>
                </div>
                <div>
                  <span className="text-xs font-bold text-teal/60 uppercase">
                    {step.days}
                  </span>
                  <h3 className="font-display text-base font-bold text-darkFooter">
                    {step.title}
                  </h3>
                </div>
              </div>
              <p className="text-sm text-charcoal/60 ml-16">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
