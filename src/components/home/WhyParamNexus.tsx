"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import StaggeredGrid from "@/components/ui/StaggeredGrid";

const features = [
  {
    emoji: "🤖",
    title: "AI-POWERED — PAY LESS, GET MORE",
    body: "We run AI tools across every part of our workflow — design, copywriting, editing, and research. This slashes delivery time and cost by up to 70%. Every rupee we save in operations goes back to you as pricing no traditional agency in Jaipur can match.",
  },
  {
    emoji: "🏛",
    title: "20+ YEARS OF JAIPUR TRUST BEHIND US",
    body: "Param Nexus is the digital arm of Param Advertising Agency — a name that has placed campaigns in Jaipur's biggest newspapers for decades. We're not outsiders trying to understand your market. We are your market.",
  },
  {
    emoji: "📍",
    title: "BUILT FOR JAIPUR. PRICED FOR JAIPUR.",
    body: "No Mumbai pricing models. No Delhi agency playbooks. Every package is designed around what Jaipur businesses actually need — and what they can actually afford to invest.",
  },
  {
    emoji: "📊",
    title: "WE MEASURE CUSTOMERS, NOT CLICKS",
    body: "Vanity metrics don't pay rent. We track calls received, form inquiries, walk-ins, and booking requests. Our job isn't done until your numbers are moving.",
  },
];

export default function WhyParamNexus() {
  return (
    <SectionWrapper className="bg-eerieBlack py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-20">
          Not Just Cheaper. <br /><span className="text-gradient-cyan">Built Different.</span>
        </h2>
        
        <StaggeredGrid className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="premium-glass p-8 group premium-glass-hover"
            >
              <span className="text-4xl block mb-6 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6">{f.emoji}</span>
              <h3 className="font-display text-xs font-bold text-white uppercase tracking-widest mb-4 group-hover:text-cyberCyan transition-colors">
                {f.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{f.body}</p>
            </div>
          ))}
        </StaggeredGrid>
      </div>
    </SectionWrapper>
  );
}
