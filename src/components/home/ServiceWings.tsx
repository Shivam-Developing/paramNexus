"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { MagicBento, BentoItem } from "@/components/animations/MagicBento";
import MagicRings from "@/components/animations/MagicRings";
import Link from "next/link";
import { Globe, Smartphone, Video } from "lucide-react";

const services = [
  {
    icon: <Globe className="w-12 h-12" />,
    title: "WEBSITE DEVELOPMENT",
    desc: "Your 24/7 salesperson that never sleeps. Fast, mobile-first websites that turn visitors into customers — delivered in 15 days.",
    price: "Starting at ₹8,999",
    cta: "See Packages →",
    href: "/services/website-development",
    gridClass: "md:col-span-1",
  },
  {
    icon: <Smartphone className="w-12 h-12" />,
    title: "SOCIAL MEDIA MARKETING",
    desc: "Turn your Instagram into an inquiry machine. Daily content, scroll-stopping reels, and targeted ads reaching thousands of Jaipur customers every single week.",
    price: "Starting at ₹4,999/month",
    cta: "See Plans →",
    href: "/services/social-media",
    gridClass: "md:col-span-1",
  },
  {
    icon: <Video className="w-12 h-12" />,
    title: "KLIQUENEXUS — VIDEO PRODUCTION",
    desc: "People buy from brands they can see and feel. Professional reels and brand videos that make your business impossible to scroll past.",
    price: "Starting at ₹7,999/month",
    cta: "Explore KliqueNexus →",
    href: "/kliquenexus",
    gridClass: "md:col-span-1",
  },
];

export default function ServiceWings() {
  return (
    <SectionWrapper className="bg-obsidian py-24 lg:py-32 relative overflow-hidden">
      {/* Ambient depth */}
      <MagicRings color="#6366F1" opacity={0.1} ringCount={4} blur={8} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            One Agency. Three Wings.
            <br />
            <span className="text-gradient-indigo">Complete Digital Dominance.</span>
          </h2>
          <p className="text-gray-400 text-lg">
            We don&apos;t just build websites; we build growth systems tailored for Jaipur&apos;s local market.
          </p>
        </div>

        <MagicBento className="md:grid-cols-3">
          {services.map((s) => (
            <BentoItem
              key={s.title}
              title={s.title}
              description={s.desc}
              icon={s.icon}
              className={s.gridClass}
            >
              <div className="mt-auto pt-6 flex flex-col gap-4">
                <p className="font-display text-2xl font-bold text-white">
                  {s.price}
                </p>
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-2 text-sm font-bold text-cyberCyan hover:text-white transition-all duration-300 group/link"
                >
                  {s.cta}
                  <span className="group-hover/link:translate-x-2 transition-transform duration-300">→</span>
                </Link>
              </div>
            </BentoItem>
          ))}
        </MagicBento>
      </div>
    </SectionWrapper>
  );
}
