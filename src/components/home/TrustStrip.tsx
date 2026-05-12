"use client";

import { LogoLoop } from "@/components/LogoLoop";
import { Newspaper, Bot, Zap, PhoneCall } from "lucide-react";

const trustItems = [
  { icon: <Newspaper className="w-5 h-5 text-indigo-400" />, text: "Backed by Param Advertising — 20+ Years of Jaipur Trust" },
  { icon: <Bot className="w-5 h-5 text-cyan-400" />, text: "AI-Powered Execution — 60% Lower Cost Than Traditional Agencies" },
  { icon: <Zap className="w-5 h-5 text-indigo-400" />, text: "Live in 15 Days — Guaranteed or We Work for Free" },
  { icon: <PhoneCall className="w-5 h-5 text-cyan-400" />, text: "Jaipur-Based Team — Real People, Real Calls" },
];

export default function TrustStrip() {
  const items = trustItems.map((item, i) => (
    <div key={i} className="flex items-center gap-4 px-6 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
      {item.icon}
      <span className="text-xs font-bold text-gray-300 uppercase tracking-widest whitespace-nowrap">
        {item.text}
      </span>
      <span className="text-white/20 ml-4">✦</span>
    </div>
  ));

  return (
    <section className="bg-obsidian py-8 overflow-hidden border-y border-white/5 relative z-20">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-transparent to-indigo-500/5 pointer-events-none" />
      <LogoLoop items={items} speed={35} gap={40} />
    </section>
  );
}
