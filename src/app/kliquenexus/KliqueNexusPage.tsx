"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import MagicRings from "@/components/animations/MagicRings";
import BlurText from "@/components/animations/BlurText";
import { Check, Play, Video, Smartphone, Calendar, Film } from "lucide-react";

const services = [
  { icon: <Smartphone />, title: "MONTHLY REELS PACKAGE", desc: "Consistent, scroll-stopping video presence for Instagram and YouTube Shorts.", pricing: "Starter: 4 Reels — ₹7,999/mo\nPro: 8 Reels + 2 Long cuts — ₹12,999/mo" },
  { icon: <Video />, title: "BRAND STORY VIDEO", desc: "A cinematic 60–90 second video that tells your brand's story — who you are and why you matter.", pricing: "₹14,999 – ₹24,999 (one-time)" },
  { icon: <Play />, title: "PRODUCT SHOWCASE", desc: "Half-day professional shoot of your products, interior, or team — ready for ads and website.", pricing: "₹8,999 – ₹15,999 (one-time)" },
  { icon: <Calendar />, title: "EVENT COVERAGE", desc: "Full-day shoot of your launch or brand activation — delivered as high-energy highlights.", pricing: "₹12,999 – ₹24,999 (one-time)" },
  { icon: <Film />, title: "YOUTUBE CONTENT", desc: "4 videos/month — scripted, shot, edited, with SEO titles and thumbnails for building authority.", pricing: "₹15,999 – ₹24,999/month" },
];

const industries = [
  { emoji: "💍", name: "Jewellers", desc: "Showcase collection in cinematic detail" },
  { emoji: "🏠", name: "Real Estate", desc: "Property tours that sell before visit" },
  { emoji: "🍽", name: "Restaurants", desc: "Food videos that make phones drop" },
  { emoji: "🏫", name: "Coaching", desc: "Faculty intros that build enrollment trust" },
  { emoji: "🏨", name: "Hotels", desc: "Heritage experience videos built for bookings" },
  { emoji: "🛍", name: "Boutiques", desc: "Lookbook reels that turn followers into buyers" },
];

export default function KliqueNexusPage() {
  return (
    <div className="bg-obsidian text-white">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <MagicRings color="#FACC15" opacity={0.1} ringCount={4} blur={10} />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="inline-block px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-400 bg-yellow-400/10 rounded-full mb-10 border border-yellow-400/20">
            🎬 Introducing KliqueNexus — The Video Wing
          </motion.span>
          
          <BlurText 
            text="Video Is No Longer Optional. It's the Language of Business."
            className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-8"
            animateBy="words"
            direction="top"
          />
          
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            Reels get 22x more engagement. YouTube is the second-largest search engine.
            Most Jaipur businesses have never made a professional video. <span className="text-white font-bold">KliqueNexus changes that.</span>
          </motion.p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#services" className="px-10 py-4 text-sm font-bold text-black bg-yellow-400 rounded-full shadow-2xl hover:shadow-yellow-400/30 transition-all">See Video Packages</a>
            <a href="tel:+918619620062" className="px-10 py-4 text-sm font-bold text-white border border-white/10 rounded-full hover:bg-white/5 transition-all">Free Consultation</a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <SectionWrapper className="bg-eerieBlack py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-12">
          <AnimatedCounter end={22} suffix="×" className="text-yellow-400" labelClassName="text-gray-500" label="More reach with Reels" />
          <AnimatedCounter end={95} suffix="%" className="text-yellow-400" labelClassName="text-gray-500" label="Message retention in video" />
          <AnimatedCounter end={73} suffix="%" className="text-yellow-400" labelClassName="text-gray-500" label="Influenced by brand video" />
          <AnimatedCounter end={66} suffix="%" className="text-yellow-400" labelClassName="text-gray-500" label="More qualified leads" />
        </div>
      </SectionWrapper>

      {/* Services */}
      <SectionWrapper id="services" className="bg-obsidian py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-24">What KliqueNexus <span className="text-yellow-400">Delivers</span></h2>
          
          <div className="space-y-12">
            {services.map((s, i) => (
              <div key={s.title} className="premium-glass p-8 lg:p-12 rounded-[2.5rem] group premium-glass-hover overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 blur-[80px] pointer-events-none group-hover:bg-yellow-400/10 transition-colors" />
                
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 text-yellow-400 group-hover:bg-yellow-400/20 transition-all">
                      {s.icon}
                    </div>
                    <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-4">{s.title}</h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">{s.desc}</p>
                    <div className="inline-block px-6 py-3 rounded-xl bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 font-bold whitespace-pre-line">
                      {s.pricing}
                    </div>
                  </div>
                  <div className="hidden lg:block">
                     <div className="aspect-video bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent" />
                        <div className="w-16 h-16 rounded-full bg-yellow-400/20 border border-yellow-400/40 flex items-center justify-center text-yellow-400 group-hover:scale-110 transition-transform">
                          <Play className="w-8 h-8 fill-yellow-400" />
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Industries */}
      <SectionWrapper className="bg-eerieBlack py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-20">Built for Businesses That Want to Be <span className="text-yellow-400">Seen</span></h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map(ind => (
              <div key={ind.name} className="premium-glass p-6 flex items-start gap-5 hover:border-yellow-400/30 transition-all group">
                <span className="text-3xl mt-1 group-hover:scale-125 transition-transform">{ind.emoji}</span>
                <div>
                  <h3 className="font-display text-lg font-bold text-white mb-1">{ind.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-6">
             <Link href="/contact" className="px-10 py-4 text-sm font-bold text-black bg-yellow-400 rounded-full shadow-2xl">📅 Book Creative Consultation</Link>
             <a href="https://wa.me/918619620062?text=Hi%20KliqueNexus!" target="_blank" rel="noopener noreferrer" className="px-10 py-4 text-sm font-bold text-gray-300 border border-white/10 rounded-full hover:bg-white/5 transition-all">💬 WhatsApp KliqueNexus</a>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
