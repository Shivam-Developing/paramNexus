"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Galaxy } from "@/components/Galaxy";
import { MagicBento } from "@/components/MagicBento";
import { BlurText } from "@/components/BlurText";
import { GradientText } from "@/components/GradientText";
import { 
  Check, Play, Video, Smartphone, Calendar, Film, 
  Gem, Home, Utensils, School, Hotel, ShoppingBag, ArrowRight, MessageSquare, ClipboardList 
} from "lucide-react";

const services = [
  { 
    icon: <Smartphone className="w-6 h-6 text-yellow-400" />, 
    title: "MONTHLY REELS PACKAGE", 
    desc: "Consistent, scroll-stopping video presence for Instagram and YouTube Shorts. We handle the scripting, shooting, and editing so you stay relevant every single week.", 
    pricing: "Starter: 4 Reels — ₹7,999/mo\nPro: 8 Reels + 2 Long cuts — ₹12,999/mo" 
  },
  { 
    icon: <Video className="w-6 h-6 text-yellow-400" />, 
    title: "BRAND STORY VIDEO", 
    desc: "A cinematic 60–90 second video that tells your brand's story — who you are, why you matter, and why Jaipur should trust you.", 
    pricing: "₹14,999 – ₹24,999 (one-time)" 
  },
  { 
    icon: <Play className="w-6 h-6 text-yellow-400" />, 
    title: "PRODUCT SHOWCASE", 
    desc: "Half-day professional shoot of your products, interior, or team — ready for ads, website, and social media catalogs.", 
    pricing: "₹8,999 – ₹15,999 (one-time)" 
  },
  { 
    icon: <Calendar className="w-6 h-6 text-yellow-400" />, 
    title: "EVENT COVERAGE", 
    desc: "Full-day shoot of your launch, anniversary, or brand activation — delivered as high-energy highlight reels that build FOMO.", 
    pricing: "₹12,999 – ₹24,999 (one-time)" 
  },
  { 
    icon: <Film className="w-6 h-6 text-yellow-400" />, 
    title: "YOUTUBE CONTENT", 
    desc: "4 videos/month — scripted, shot, edited, with SEO titles and thumbnails for building long-term authority in your niche.", 
    pricing: "₹15,999 – ₹24,999/month" 
  },
];

const industries = [
  { icon: <Gem className="w-5 h-5 text-yellow-400" />, name: "Jewellers", desc: "Showcase collection in cinematic detail" },
  { icon: <Home className="w-5 h-5 text-yellow-400" />, name: "Real Estate", desc: "Property tours that sell before visit" },
  { icon: <Utensils className="w-5 h-5 text-yellow-400" />, name: "Restaurants", desc: "Food videos that make phones drop" },
  { icon: <School className="w-5 h-5 text-yellow-400" />, name: "Coaching", desc: "Faculty intros that build enrollment trust" },
  { icon: <Hotel className="w-5 h-5 text-yellow-400" />, name: "Hotels", desc: "Heritage experience videos built for bookings" },
  { icon: <ShoppingBag className="w-5 h-5 text-yellow-400" />, name: "Boutiques", desc: "Lookbook reels that turn followers into buyers" },
];

export default function KliqueNexusPage() {
  return (
    <div className="bg-obsidian text-white selection:bg-yellow-400/30">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden z-0">
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <Galaxy color="#FACC15" className="opacity-40" />
        </div>
        
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-500/10 blur-[140px] rounded-full z-[2] pointer-events-none" />

        <div className="relative z-[10] max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-yellow-400 bg-yellow-400/10 rounded-full mb-10 border border-yellow-400/20">
            <Film className="w-3 h-3" /> Introducing KliqueNexus — The Video Wing
          </motion.div>
          
          <BlurText 
            text="Video Is No Longer Optional."
            className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"
          />
          <div className="mt-4">
            <GradientText colors={["#FACC15", "#EAB308", "#FDE047"]} className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              It&apos;s the Language of Business.
            </GradientText>
          </div>
          
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-8 text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            Reels get 22x more engagement. YouTube is the second-largest search engine.
            Most Jaipur businesses have never made a professional video. <span className="text-white font-bold">KliqueNexus changes that.</span>
          </motion.p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#services" className="group px-10 py-4 text-sm font-bold text-black bg-yellow-400 rounded-full shadow-2xl hover:shadow-yellow-400/30 hover:scale-105 transition-all flex items-center justify-center gap-2">
               See Video Packages <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="tel:+918619620062" className="px-10 py-4 text-sm font-bold text-white border border-white/10 rounded-full hover:bg-white/5 transition-all">Free Consultation</a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-obsidian py-20 border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-12">
          <AnimatedCounter end={22} suffix="×" className="text-4xl lg:text-5xl font-display font-bold text-yellow-400 mb-2" labelClassName="text-[10px] font-bold text-gray-500 uppercase tracking-widest" label="More reach with Reels" />
          <AnimatedCounter end={95} suffix="%" className="text-4xl lg:text-5xl font-display font-bold text-yellow-400 mb-2" labelClassName="text-[10px] font-bold text-gray-500 uppercase tracking-widest" label="Message retention in video" />
          <AnimatedCounter end={73} suffix="%" className="text-4xl lg:text-5xl font-display font-bold text-yellow-400 mb-2" labelClassName="text-[10px] font-bold text-gray-500 uppercase tracking-widest" label="Influenced by brand video" />
          <AnimatedCounter end={66} suffix="%" className="text-4xl lg:text-5xl font-display font-bold text-yellow-400 mb-2" labelClassName="text-[10px] font-bold text-gray-500 uppercase tracking-widest" label="More qualified leads" />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-obsidian py-24 lg:py-32 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-24 leading-tight">
            What KliqueNexus
            <br />
            <GradientText colors={["#FACC15", "#EAB308", "#FDE047"]}>Delivers</GradientText>
          </h2>
          
          <div className="space-y-12">
            {services.map((s, i) => (
              <MagicBento key={i} className="!p-0 overflow-hidden">
                <div className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-yellow-400 group-hover:scale-110 transition-transform duration-500">
                        {s.icon}
                      </div>
                      <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-4 tracking-tight">{s.title}</h3>
                      <p className="text-gray-400 text-lg leading-relaxed mb-8">{s.desc}</p>
                      <div className="inline-block px-6 py-4 rounded-xl bg-yellow-400/5 border border-yellow-400/20 text-yellow-400 font-bold whitespace-pre-line text-sm leading-relaxed">
                        {s.pricing}
                      </div>
                    </div>
                    <div className="hidden lg:block relative group/video">
                       <div className="aspect-video bg-[#121216] rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-transparent opacity-0 group-hover/video:opacity-100 transition-opacity duration-500" />
                          <div className="w-20 h-20 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 group-hover/video:scale-110 transition-all duration-500 shadow-[0_0_40px_rgba(250,204,21,0.1)]">
                            <Play className="w-8 h-8 fill-yellow-400 ml-1" />
                          </div>
                       </div>
                    </div>
                  </div>
                </div>
              </MagicBento>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-obsidian py-24 lg:py-32 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-20 leading-tight">
            Built for Businesses
            <br />
            <GradientText colors={["#FACC15", "#EAB308", "#FDE047"]}>That Want to Be Seen</GradientText>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <MagicBento key={i} className="flex items-start gap-5">
                <div className="mt-1 group-hover:scale-110 transition-transform duration-500">
                  {ind.icon}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white mb-1 uppercase tracking-wide">{ind.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">{ind.desc}</p>
                </div>
              </MagicBento>
            ))}
          </div>
          
          <div className="mt-24 flex flex-col sm:flex-row items-center justify-center gap-6">
             <Link href="/contact" className="group px-10 py-5 text-sm font-bold text-black bg-yellow-400 rounded-full shadow-2xl hover:shadow-yellow-400/30 hover:scale-105 transition-all flex items-center justify-center gap-2">
               <ClipboardList className="w-4 h-4" /> Book Creative Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </Link>
             <a href="https://wa.me/918619620062?text=Hi%20KliqueNexus!" target="_blank" rel="noopener noreferrer" className="px-10 py-5 text-sm font-bold text-gray-300 border border-white/10 rounded-full hover:bg-white/5 transition-all flex items-center gap-2">
               <MessageSquare className="w-4 h-4" /> WhatsApp KliqueNexus
             </a>
          </div>
        </div>
      </section>
    </div>
  );
}
