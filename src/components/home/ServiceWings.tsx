"use client";

import Link from "next/link";
import { Globe, Smartphone, Video, ArrowRight } from "lucide-react";
import { MagicBento } from "@/components/MagicBento";
import { GradientText } from "@/components/GradientText";
import { MagicRings } from "@/components/MagicRings";
import { Cubes } from "@/components/Cubes";

const services = [
  {
    icon: <Globe className="w-12 h-12 text-indigo-400" />,
    title: "WEBSITE DEVELOPMENT",
    desc: "Your 24/7 salesperson that never sleeps. Fast, mobile-first websites that turn visitors into customers — delivered in 15 days.",
    price: "Starting at ₹8,999",
    cta: "See Packages",
    href: "/services/website-development",
    glowColor: "bg-indigo-500/10",
  },
  {
    icon: <Smartphone className="w-12 h-12 text-cyan-400" />,
    title: "SOCIAL MEDIA MARKETING",
    desc: "Turn your Instagram into an inquiry machine. Daily content, scroll-stopping reels, and targeted ads reaching thousands of Jaipur customers every single week.",
    price: "Starting at ₹4,999/month",
    cta: "See Plans",
    href: "/services/social-media",
    glowColor: "bg-cyan-500/10",
  },
  {
    icon: <Video className="w-12 h-12 text-purple-400" />,
    title: "KLIQUENEXUS — VIDEO & CONTENT",
    desc: "People buy from brands they can see and feel. Professional reels and brand videos that make your business impossible to scroll past.",
    price: "Starting at ₹7,999/month",
    cta: "Explore KliqueNexus",
    href: "/kliquenexus",
    glowColor: "bg-purple-500/10",
  },
];

export default function ServiceWings() {
  return (
    <section className="bg-obsidian py-24 lg:py-32 relative overflow-hidden border-t border-white/5">
      {/* Background focus rings */}
      <MagicRings className="opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-20">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            One Agency. Three Powerful Wings.
            <br />
            <GradientText>Complete Digital Dominance.</GradientText>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            We don&apos;t just build websites; we build growth systems tailored for Jaipur&apos;s local market.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <MagicBento key={i} className="h-full flex flex-col relative rounded-2xl bg-[#121216]/60 backdrop-blur-xl border border-white/10 p-6 shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] transition-all duration-500 hover:-translate-y-1 overflow-hidden group">
              <Cubes className="opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              
              <div className="mb-8 p-4 rounded-2xl bg-white/5 border border-white/10 w-fit group-hover:scale-110 transition-transform duration-500 relative z-10">
                {s.icon}
              </div>
              
              <div className="flex-1 relative z-10">
                <h3 className="font-display text-xl font-bold text-white mb-4 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {s.desc}
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-white/5 relative z-10">
                <p className="font-display text-2xl font-bold text-white mb-4">
                  {s.price}
                </p>
                <Link
                  href={s.href}
                  className="group/link inline-flex items-center gap-2 text-[11px] font-bold text-indigo-400 hover:text-white uppercase tracking-[0.2em] transition-all duration-300"
                >
                  {s.cta} <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Hover backglow */}
              <div className={`absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-[100px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${s.glowColor}`} />
            </MagicBento>
          ))}
        </div>
      </div>
    </section>
  );
}
