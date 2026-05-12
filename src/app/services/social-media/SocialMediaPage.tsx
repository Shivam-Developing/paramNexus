"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import StaggeredGrid from "@/components/ui/StaggeredGrid";
import { Check } from "lucide-react";

const plans = [
  {
    name: "SPARK", price: "₹4,999/month", popular: false,
    perfect: "Perfect for: New businesses and shops starting their social presence.",
    features: ["2 Platforms (Instagram + Facebook)", "12 Posts/Month — AI-designed graphics", "Caption Copywriting (Hindi & English)", "Hashtag Research & Strategy", "Monthly Performance Report", "Festive & Seasonal Posts Included"],
    cta: "Start with Spark",
  },
  {
    name: "GROW", price: "₹8,999/month", popular: true,
    perfect: "Perfect for: Active local businesses wanting consistent growth.",
    features: ["3 Platforms (Instagram + Facebook + Google Business)", "20 Posts + 4 Reels + Daily Stories", "Custom Monthly Content Calendar", "Professional Caption Copywriting", "Community Management (Comments & DM Replies)", "Competitor Monitoring", "Bi-weekly Performance Reports"],
    cta: "Start with Grow",
  },
  {
    name: "DOMINATE", price: "₹14,999/month", popular: false,
    perfect: "Perfect for: Real estate, coaching institutes, hospitals, and hotels wanting aggressive lead generation.",
    features: ["4 Platforms (Instagram + Facebook + Google Business + YouTube Shorts)", "30 Posts + 8 Reels + Stories + Highlights", "Meta & Google Ads Management", "AI-Generated Ad Creatives", "A/B Ad Testing", "Lead Tracking Dashboard", "Monthly Strategy Call with Our Team", "Weekly Performance Report"],
    cta: "Start with Dominate",
  },
];

const industryPromises = [
  { emoji: "🏥", title: "For Clinics", front: "We turn your expertise into trust-building content", back: "Fill your appointment calendar with SEO + reels", backStat: "3x more appointments" },
  { emoji: "🏠", title: "For Real Estate", front: "We create property showcase reels that generate", back: "Generate direct buyer inquiries from Instagram", backStat: "Direct buyer leads" },
  { emoji: "🏫", title: "For Coaching Institutes", front: "We build admission-season campaigns that fill", back: "Fill your batches before the season even peaks", backStat: "2x enrollment rate" },
  { emoji: "💍", title: "For Jewellers", front: "We make your collection shine on Instagram", back: "Make your collection shine exactly the way it does inside your showroom", backStat: "Premium showcase" },
  { emoji: "🍽", title: "For Restaurants", front: "We post food content so compelling it makes people hungry", back: "Make people hungry and walk through your door the same evening", backStat: "Walk-in traffic boost" },
  { emoji: "🏨", title: "For Hotels", front: "We build your Google and Instagram presence", back: "Build a booking engine that works around the clock", backStat: "24/7 booking engine" },
];

export default function SocialMediaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-offWhite pt-28 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-darkFooter leading-[1.08]">
                Your Instagram Has Been Silent.
                <br /><span className="text-teal">Your Competitor&apos;s Hasn&apos;t.</span>
              </h1>
              <p className="mt-6 text-charcoal/60 text-lg leading-relaxed">
                Consistent, creative, and strategic social media presence isn&apos;t optional
                anymore — it&apos;s the difference between a business that&apos;s talked about
                and one that&apos;s forgotten. We manage your entire social media so you
                can focus on running your business while we focus on growing it.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="#plans" className="px-6 py-3.5 text-sm font-semibold text-white bg-teal rounded-full hover:bg-teal-dark transition-colors text-center mobile-full-width-cta">See Our Plans</a>
                <Link href="/contact" className="px-6 py-3.5 text-sm font-semibold text-teal border-2 border-teal rounded-full hover:bg-teal hover:text-white transition-all text-center mobile-full-width-cta">Get a Free Social Media Audit</Link>
              </div>
            </motion.div>
            {/* Phone mockup */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="hidden lg:flex justify-center">
              <div className="w-64 h-[460px] bg-nearBlack rounded-[2.5rem] p-3 shadow-2xl border-2 border-charcoal/30">
                <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                  <div className="bg-gradient-to-r from-teal to-teal-dark text-white p-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">PN</div>
                    <div><p className="text-xs font-bold">paramnexus</p><p className="text-[10px] opacity-70">Jaipur Business</p></div>
                  </div>
                  <div className="p-3 space-y-3">
                    {[1,2,3].map(i => (
                      <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 + i * 0.3, duration: 0.5 }} className="bg-offWhite rounded-lg p-3 border border-black/5">
                        <div className="h-20 bg-teal/10 rounded mb-2" />
                        <div className="h-2 w-3/4 bg-warmGray rounded mb-1" />
                        <div className="h-2 w-1/2 bg-warmGray rounded" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            <AnimatedCounter end={88} suffix="%" className="text-teal" labelClassName="text-charcoal/50" label="Customers check social before making a purchase decision" />
            <div className="text-center"><div className="text-4xl md:text-5xl font-display font-bold text-teal">4.2 Cr</div><p className="text-sm text-charcoal/50 mt-2">Instagram users in Rajasthan alone — your audience is there</p></div>
            <AnimatedCounter end={40} suffix="%" className="text-teal" labelClassName="text-charcoal/50" label="Engagement lost by businesses that post inconsistently" />
          </div>
          <p className="text-center mt-8 text-teal font-medium italic text-lg">We post. We engage. We run ads. We grow your audience. You just collect the inquiries.</p>
        </div>
      </section>

      {/* Pricing */}
      <SectionWrapper id="plans" className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-darkFooter text-center mb-14">Our Social Media <span className="text-teal">Plans</span></h2>
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {plans.map(p => (
              <div key={p.name} className={`rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${p.popular ? "bg-teal text-white lg:-translate-y-2 shadow-lg shadow-teal/20 relative" : "bg-offWhite shadow-sm border border-black/5"}`}>
                {p.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold bg-gold text-deepTeal rounded-full">⭐ RECOMMENDED</span>}
                <h3 className="font-display text-xl font-bold mb-1">{p.name}</h3>
                <p className={`text-3xl font-display font-bold mb-3 ${p.popular ? "text-gold-light" : "text-teal"}`}>{p.price}</p>
                <p className={`text-sm mb-5 ${p.popular ? "text-white/70" : "text-charcoal/50"}`}>{p.perfect}</p>
                <div className="space-y-2.5 mb-6">{p.features.map(f => (<div key={f} className="flex items-start gap-2"><Check className={`w-4 h-4 mt-0.5 shrink-0 ${p.popular ? "text-gold-light" : "text-teal"}`} /><span className={`text-sm ${p.popular ? "text-white/90" : "text-charcoal/70"}`}>{f}</span></div>))}</div>
                <Link href="/contact" className={`w-full inline-flex items-center justify-center px-5 py-3 text-sm font-bold rounded-xl transition-colors ${p.popular ? "bg-white text-teal hover:bg-offWhite" : "bg-teal text-white hover:bg-teal-dark"}`}>{p.cta}</Link>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center"><p className="text-sm text-charcoal/50">ADD-ON: <strong className="text-charcoal/70">Meta / Google Ads Management — ₹5,000/month + Ad Spend</strong><br />Strategy, creative, targeting, and optimization — you set the budget.</p></div>
        </div>
      </SectionWrapper>

      {/* Industry Promises — 3D Flip */}
      <SectionWrapper className="bg-offWhite py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-darkFooter text-center mb-14">Built for Every <span className="text-teal">Jaipur Business</span></h2>
          <StaggeredGrid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryPromises.map(p => (
              <div key={p.title} className="flip-card h-48">
                <div className="flip-card-inner relative w-full h-full">
                  <div className="flip-card-front absolute inset-0 bg-white rounded-2xl p-6 shadow-sm border border-black/5 flex flex-col justify-center">
                    <span className="text-3xl mb-3">{p.emoji}</span>
                    <h3 className="font-display text-base font-bold text-darkFooter mb-2">{p.title}</h3>
                    <p className="text-sm text-charcoal/60">{p.front}</p>
                  </div>
                  <div className="flip-card-back absolute inset-0 bg-teal rounded-2xl p-6 flex flex-col justify-center text-center">
                    <p className="text-lg font-display font-bold text-gold mb-2">{p.backStat}</p>
                    <p className="text-sm text-white/80">{p.back}</p>
                  </div>
                </div>
              </div>
            ))}
          </StaggeredGrid>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Link href="/contact" className="px-6 py-3 text-sm font-semibold text-white bg-teal rounded-full hover:bg-teal-dark transition-colors mobile-full-width-cta">📋 Get a Free Social Media Audit</Link>
            <a href="https://wa.me/918744003727" target="_blank" rel="noopener noreferrer" className="px-6 py-3 text-sm font-semibold text-teal border-2 border-teal rounded-full hover:bg-teal hover:text-white transition-all mobile-full-width-cta">💬 WhatsApp for Quick Enquiry</a>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
