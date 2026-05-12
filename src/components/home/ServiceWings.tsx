"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import StaggeredGrid from "@/components/ui/StaggeredGrid";
import Link from "next/link";
import { Globe, Smartphone, Video } from "lucide-react";

const services = [
  {
    icon: <Globe className="w-8 h-8" />,
    emoji: "🌐",
    title: "WEBSITE DEVELOPMENT",
    desc: "Your 24/7 salesperson that never sleeps. Fast, mobile-first websites that turn visitors into customers — delivered in 15 days.",
    price: "Starting at ₹8,999",
    cta: "See Packages →",
    href: "/services/website-development",
    elevated: false,
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    emoji: "📱",
    title: "SOCIAL MEDIA MARKETING",
    desc: "Turn your Instagram into an inquiry machine. Daily content, scroll-stopping reels, and targeted ads reaching thousands of Jaipur customers every single week.",
    price: "Starting at ₹4,999/month",
    cta: "See Plans →",
    href: "/services/social-media",
    elevated: true,
  },
  {
    icon: <Video className="w-8 h-8" />,
    emoji: "🎬",
    title: "KLIQUENEXUS — VIDEO & CONTENT",
    desc: "People buy from brands they can see and feel. Professional reels and brand videos that make your business impossible to scroll past.",
    price: "Starting at ₹7,999/month",
    cta: "Explore KliqueNexus →",
    href: "/kliquenexus",
    elevated: false,
  },
];

export default function ServiceWings() {
  return (
    <SectionWrapper className="bg-offWhite py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-darkFooter leading-tight">
            One Agency. Three Powerful Wings.
            <br />
            <span className="text-teal">Complete Digital Dominance.</span>
          </h2>
        </div>

        <StaggeredGrid className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {services.map((s) => (
            <div
              key={s.title}
              className={`relative bg-white rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group ${
                s.elevated
                  ? "border-t-[3px] border-t-teal shadow-lg lg:-translate-y-2"
                  : "shadow-md border border-black/5"
              }`}
            >
              <span className="text-3xl mb-4 block">{s.emoji}</span>
              <h3 className="font-display text-lg font-bold text-darkFooter mb-3">
                {s.title}
              </h3>
              <p className="text-sm text-charcoal/60 leading-relaxed mb-6">
                {s.desc}
              </p>
              <p className="font-display text-xl font-bold text-teal mb-4">
                {s.price}
              </p>
              <Link
                href={s.href}
                className="inline-flex items-center text-sm font-semibold text-teal hover:text-teal-dark transition-colors group-hover:gap-3 gap-2"
              >
                {s.cta}
              </Link>
            </div>
          ))}
        </StaggeredGrid>
      </div>
    </SectionWrapper>
  );
}
