"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import StaggeredGrid from "@/components/ui/StaggeredGrid";
import Link from "next/link";

const cards = [
  {
    icon: "🔍",
    title: "YOUR CUSTOMERS GOOGLE BEFORE THEY VISIT",
    stat: "88% of consumers",
    body: "88% of consumers search online before walking into a local business. If you're not there, they walk into your competitor's door. Every single time.",
  },
  {
    icon: "📉",
    title: "YOUR COMPETITOR ALREADY HAS THE ADVANTAGE",
    stat: "3.2x more leads",
    body: "Someone in your industry — in your area of Jaipur — has a website, an active Instagram, and 100+ Google reviews. That gap grows wider every month you wait.",
  },
  {
    icon: "💸",
    title: "OFFLINE ALONE IS NO LONGER ENOUGH",
    stat: "₹0 spent, customers lost",
    body: "Newspaper ads and hoardings still matter. But customers who see your hoarding immediately Google you. If nothing appears — you've already lost them.",
  },
];

export default function WakeUpCall() {
  return (
    <SectionWrapper className="bg-deepTeal py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            While You&apos;re Reading This,
            <br />
            Your Competitor Just Got Another Customer Online.
          </h2>
          <p className="mt-4 text-white/60 text-lg">
            Here are 3 truths about your digital presence right now:
          </p>
        </div>

        <StaggeredGrid
          className="grid md:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {cards.map((card) => (
            <div
              key={card.title}
              className="glass rounded-2xl p-6 lg:p-8 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group"
            >
              <span className="text-3xl mb-4 block">{card.icon}</span>
              <h3 className="font-display text-sm font-bold text-white/90 uppercase tracking-wide mb-3">
                {card.title}
              </h3>
              <p className="text-2xl lg:text-3xl font-display font-bold text-gold mb-3">
                {card.stat}
              </p>
              <p className="text-sm text-white/60 leading-relaxed">{card.body}</p>
            </div>
          ))}
        </StaggeredGrid>

        <div className="text-center mt-14">
          <p className="text-gold text-lg lg:text-xl italic font-medium max-w-xl mx-auto">
            &ldquo;The good news? This is fixable. In 15 days.
            <br />
            For less than the cost of one print campaign.&rdquo;
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center mt-8 px-6 py-3 text-sm font-semibold text-white border-2 border-white/30 rounded-full hover:bg-white hover:text-deepTeal transition-all duration-300"
          >
            Show Me How →
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
