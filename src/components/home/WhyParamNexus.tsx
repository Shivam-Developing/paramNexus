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
    <SectionWrapper className="bg-warmGray/50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-darkFooter text-center mb-14">
          Not Just Cheaper. <span className="text-teal">Built Different.</span>
        </h2>
        <StaggeredGrid className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-3xl block mb-4">{f.emoji}</span>
              <h3 className="font-display text-sm font-bold text-darkFooter uppercase tracking-wide mb-3">
                {f.title}
              </h3>
              <p className="text-sm text-charcoal/60 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </StaggeredGrid>
      </div>
    </SectionWrapper>
  );
}
