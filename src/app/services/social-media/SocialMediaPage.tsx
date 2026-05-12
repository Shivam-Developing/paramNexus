"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { MagicBento, BentoItem } from "@/components/animations/MagicBento";
import MagicRings from "@/components/animations/MagicRings";
import BlurText from "@/components/animations/BlurText";
import { Check, Camera, Globe, TrendingUp, Users, Target, MessageCircle } from "lucide-react";

const plans = [
  {
    name: "SPARK", price: "₹4,999/month", popular: false,
    perfect: "Perfect for: New businesses and shops starting their social presence.",
    features: ["2 Platforms (Insta + FB)", "12 Posts/Month — AI Design", "Caption Copywriting (Hindi/Eng)", "Hashtag Strategy", "Seasonal Posts Included"],
    cta: "Start with Spark",
  },
  {
    name: "GROW", price: "₹8,999/month", popular: true,
    perfect: "Perfect for: Active local businesses wanting consistent growth.",
    features: ["3 Platforms (Insta + FB + Google)", "20 Posts + 4 Reels + Daily Stories", "Custom Content Calendar", "Community Management", "Bi-weekly Performance Reports"],
    cta: "Start with Grow",
  },
  {
    name: "DOMINATE", price: "₹14,999/month", popular: false,
    perfect: "Perfect for: Real estate, hospitals, and hotels wanting aggressive leads.",
    features: ["4 Platforms (+ YouTube Shorts)", "30 Posts + 8 Reels + Highlights", "Meta & Google Ads Management", "AI-Generated Ad Creatives", "Monthly Strategy Calls"],
    cta: "Start with Dominate",
  },
];

const industryPromises = [
  { emoji: "🏥", title: "For Clinics", icon: <Users />, desc: "We turn expertise into trust-building content that fills your appointment calendar." },
  { emoji: "🏠", title: "For Real Estate", icon: <Target />, desc: "We create property showcase reels that generate direct buyer inquiries from Instagram." },
  { emoji: "🏫", title: "For Coaching", icon: <TrendingUp />, desc: "We build admission-season campaigns that fill your batches before the peak." },
  { emoji: "💍", title: "For Jewellers", icon: <Camera />, desc: "We make your collection shine on Instagram exactly the way it does in your showroom." },
  { emoji: "🍽", title: "For Restaurants", icon: <MessageCircle />, desc: "We post food content so compelling it makes people hungry and walk through your door." },
  { emoji: "🏨", title: "For Hotels", icon: <Globe />, desc: "We build your Google and Instagram presence into a 24/7 booking engine." },
];

export default function SocialMediaPage() {
  return (
    <div className="bg-obsidian text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <MagicRings color="#06B6D4" opacity={0.1} ringCount={4} blur={10} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
              <BlurText 
                text="Your Instagram Has Been Silent. Your Competitor's Hasn't."
                className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-8"
                animateBy="words"
                direction="top"
              />
              <p className="text-gray-400 text-lg lg:text-xl leading-relaxed mb-10">
                Consistent, creative social presence isn&apos;t optional anymore. We manage your entire digital presence 
                so you can focus on running your business while we focus on growing it.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="#plans" className="px-10 py-4 text-sm font-bold text-white bg-gradient-to-r from-neonIndigo to-purple-600 rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all text-center">See Plans</a>
                <Link href="/contact" className="px-10 py-4 text-sm font-bold text-gray-300 border border-white/10 rounded-full hover:bg-white/5 transition-all text-center">Get Free Social Audit</Link>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 1 }} className="hidden lg:flex justify-center relative">
               <div className="absolute inset-0 bg-cyberCyan/10 blur-[100px] scale-75" />
               <div className="w-72 h-[520px] bg-[#121216] rounded-[3rem] p-4 shadow-2xl border border-white/10 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyberCyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative border border-white/5">
                    <div className="bg-gradient-to-r from-neonIndigo to-purple-600 text-white p-5 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold border border-white/20 shadow-lg">PN</div>
                      <div><p className="text-xs font-bold">paramnexus</p><p className="text-[10px] opacity-60 uppercase tracking-widest font-bold">Jaipur Business</p></div>
                    </div>
                    <div className="p-5 space-y-4">
                      {[1,2,3].map(i => (
                        <div key={i} className="bg-white/5 rounded-2xl p-4 border border-white/5">
                          <div className="h-24 bg-white/5 rounded-xl mb-3" />
                          <div className="h-2 w-3/4 bg-white/10 rounded-full mb-2" />
                          <div className="h-2 w-1/2 bg-white/5 rounded-full" />
                        </div>
                      ))}
                    </div>
                  </div>
               </div>
            </motion.div>
          </div>
          
          {/* Stats */}
          <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-white/5 pt-16">
            <AnimatedCounter end={88} suffix="%" className="text-white" labelClassName="text-gray-500" label="Check social before purchase" />
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-white">4.2 Cr</div>
              <p className="text-xs text-gray-500 mt-2 uppercase tracking-widest font-bold">Insta users in Rajasthan</p>
            </div>
            <AnimatedCounter end={40} suffix="%" className="text-white" labelClassName="text-gray-500" label="Lost by inconsistent posting" />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <SectionWrapper id="plans" className="bg-eerieBlack py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-20">Our Social Media <span className="text-gradient-indigo">Plans</span></h2>
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {plans.map(p => (
              <div key={p.name} className={`premium-glass p-8 lg:p-10 transition-all duration-500 group premium-glass-hover ${p.popular ? "border-neonIndigo/30 bg-neonIndigo/[0.03] scale-105 z-10" : "border-white/10"}`}>
                {p.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 text-[10px] font-bold bg-neonIndigo text-white rounded-full uppercase tracking-widest shadow-xl">⭐ Recommended</div>}
                <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-neonIndigo transition-colors">{p.name}</h3>
                <p className="text-4xl font-display font-bold mb-6 text-white">{p.price}</p>
                <p className="text-sm text-gray-500 mb-8 leading-relaxed">{p.perfect}</p>
                <div className="space-y-4 mb-10">
                  {p.features.map(f => (
                    <div key={f} className="flex items-start gap-3">
                      <Check className="w-4 h-4 mt-1 text-neonIndigo shrink-0" />
                      <span className="text-sm text-gray-300">{f}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className={`w-full py-4 text-sm font-bold rounded-2xl text-center transition-all ${p.popular ? "bg-neonIndigo text-white shadow-xl hover:shadow-neonIndigo/30" : "bg-white/5 text-white hover:bg-white/10"}`}>{p.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Industry Promises */}
      <SectionWrapper className="bg-obsidian py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-20">Built for Every <span className="text-gradient-cyan">Jaipur Business</span></h2>
          <MagicBento className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryPromises.map(p => (
              <BentoItem key={p.title} title={p.title} description={p.desc} icon={p.icon} />
            ))}
          </MagicBento>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-20">
            <Link href="/contact" className="px-10 py-4 text-sm font-bold text-white bg-gradient-to-r from-neonIndigo to-purple-600 rounded-full shadow-2xl transition-all">📋 Get Free Social Audit</Link>
            <a href="https://wa.me/918744003727" target="_blank" rel="noopener noreferrer" className="px-10 py-4 text-sm font-bold text-gray-300 border border-white/10 rounded-full hover:bg-white/5 transition-all">💬 WhatsApp Enquiry</a>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
