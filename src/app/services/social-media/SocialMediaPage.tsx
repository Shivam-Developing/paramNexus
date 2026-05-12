"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Galaxy } from "@/components/Galaxy";
import { MagicBento } from "@/components/MagicBento";
import { BlurText } from "@/components/BlurText";
import { GradientText } from "@/components/GradientText";
import { 
  Check, Globe, Building2, Home, School, Gem, Utensils, Hotel, ArrowRight, MessageSquare, ClipboardList 
} from "lucide-react";

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
  { title: "For Clinics", icon: <Building2 className="w-6 h-6 text-indigo-400" />, desc: "We turn expertise into trust-building content that fills your appointment calendar." },
  { title: "For Real Estate", icon: <Home className="w-6 h-6 text-cyan-400" />, desc: "We create property showcase reels that generate direct buyer inquiries from Instagram." },
  { title: "For Coaching", icon: <School className="w-6 h-6 text-indigo-400" />, desc: "We build admission-season campaigns that fill your batches before the peak." },
  { title: "For Jewellers", icon: <Gem className="w-6 h-6 text-cyan-400" />, desc: "We make your collection shine on Instagram exactly the way it does in your showroom." },
  { title: "For Restaurants", icon: <Utensils className="w-6 h-6 text-indigo-400" />, desc: "We post food content so compelling it makes people hungry and walk through your door." },
  { title: "For Hotels", icon: <Hotel className="w-6 h-6 text-cyan-400" />, desc: "We build your Google and Instagram presence into a 24/7 booking engine." },
];

export default function SocialMediaPage() {
  return (
    <div className="bg-obsidian text-white selection:bg-indigo-500/30">
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden z-0">
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <Galaxy color="#06B6D4" className="opacity-40" />
        </div>
        
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-600/10 blur-[140px] rounded-full z-[2] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-[10]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
              <BlurText 
                text="Your Instagram Has Been Silent."
                className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1]"
              />
              <div className="mt-2">
                <GradientText className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1]">
                  Your Competitor&apos;s Hasn&apos;t.
                </GradientText>
              </div>
              <p className="mt-8 text-gray-400 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl">
                Consistent, creative social presence isn&apos;t optional anymore. 
                We manage your entire digital presence so you can focus on running 
                your business while we focus on growing it.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="#plans" className="group px-10 py-4 text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all text-center flex items-center justify-center gap-2">
                  See Our Plans <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link href="/contact" className="px-10 py-4 text-sm font-bold text-gray-300 border border-white/10 rounded-full hover:bg-white/5 transition-all text-center">
                  Get Free Social Audit
                </Link>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 1 }} className="hidden lg:flex justify-center relative">
               <div className="absolute inset-0 bg-cyan-500/10 blur-[120px] scale-75 opacity-50" />
               <div className="w-72 h-[540px] bg-[#0B0B0E] rounded-[3.5rem] p-4 shadow-3xl border border-white/10 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-full h-full bg-black rounded-[3rem] overflow-hidden relative border border-white/5">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-6 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold border border-white/20 shadow-lg">PN</div>
                      <div><p className="text-xs font-bold">paramnexus</p><p className="text-[9px] opacity-60 uppercase tracking-widest font-bold">Jaipur Business</p></div>
                    </div>
                    <div className="p-5 space-y-4">
                      {[1,2,3].map(i => (
                        <div key={i} className="bg-white/5 rounded-2xl p-4 border border-white/5">
                          <div className="h-28 bg-white/5 rounded-xl mb-3" />
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
            <AnimatedCounter end={88} suffix="%" className="text-4xl font-display font-bold text-white mb-2" labelClassName="text-[10px] font-bold text-gray-500 uppercase tracking-widest" label="Check social before purchase" />
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-white">4.2 Cr</div>
              <p className="text-[10px] font-bold text-gray-500 mt-3 uppercase tracking-widest">Insta users in Rajasthan</p>
            </div>
            <AnimatedCounter end={40} suffix="%" className="text-4xl font-display font-bold text-white mb-2" labelClassName="text-[10px] font-bold text-gray-500 uppercase tracking-widest" label="Lost by inconsistent posting" />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="plans" className="bg-obsidian py-24 lg:py-32 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-20 leading-tight">
            Our Social Media
            <br />
            <GradientText>Management Plans</GradientText>
          </h2>
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {plans.map((p, i) => (
              <MagicBento 
                key={i} 
                className={`flex flex-col relative !p-0 ${p.popular ? "border-indigo-500/40 shadow-[0_0_40px_rgba(99,102,241,0.1)] lg:-translate-y-4" : ""}`}
              >
                <div className="p-8 lg:p-10 flex flex-col h-full">
                  <h3 className="font-display text-2xl font-bold mb-2 text-white group-hover:text-indigo-400 transition-colors">
                    {p.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl font-display font-bold text-white">{p.price}</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-8 leading-relaxed h-12">
                    {p.perfect}
                  </p>
                  
                  <div className="space-y-4 mb-10 flex-1">
                    {p.features.map((f, idx) => (
                      <div key={idx} className="flex items-start gap-3 group/feat">
                        <Check className="w-4 h-4 mt-1 text-indigo-400 shrink-0" />
                        <span className="text-sm text-gray-300 group-hover/feat:text-white transition-colors">{f}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    href="/contact" 
                    className={`group/btn w-full py-4 text-sm font-bold rounded-2xl text-center transition-all flex items-center justify-center gap-2 ${p.popular ? "bg-indigo-500 text-white shadow-xl hover:shadow-indigo-500/30" : "bg-white/5 text-white hover:bg-white/10"}`}
                  >
                    {p.cta} <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </MagicBento>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Promises */}
      <section className="bg-obsidian py-24 lg:py-32 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-20 leading-tight">
            Built for Every
            <br />
            <GradientText>Jaipur Business</GradientText>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryPromises.map((p, i) => (
              <MagicBento key={i} className="h-full">
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-indigo-400 group-hover:scale-110 transition-transform duration-500">
                  {p.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-3 tracking-tight">{p.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{p.desc}</p>
              </MagicBento>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-24">
            <Link href="/contact" className="group px-10 py-4 text-sm font-bold text-white bg-gradient-to-r from-neonIndigo to-purple-600 rounded-full shadow-2xl flex items-center gap-2 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all">
              <ClipboardList className="w-4 h-4" /> Get Free Social Audit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="https://wa.me/918744003727" target="_blank" rel="noopener noreferrer" className="px-10 py-4 text-sm font-bold text-gray-300 border border-white/10 rounded-full hover:bg-white/5 transition-all flex items-center gap-2">
              <MessageSquare className="w-4 h-4" /> WhatsApp Enquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
