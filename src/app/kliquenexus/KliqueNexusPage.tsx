"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const services = [
  { emoji: "📱", title: "MONTHLY REELS PACKAGE", desc: "Consistent, scroll-stopping video presence for Instagram and YouTube Shorts.", pricing: "Reel Starter: 4 Reels/month — ₹7,999/month\nReel Pro: 8 Reels/month + 2 long-form cuts — ₹12,999/month", imageRight: true },
  { emoji: "🎥", title: "BRAND STORY VIDEO", desc: "The one video every business must have. A 60–90 second cinematic video that tells your brand's story — who you are, what you do, and why customers should choose you.", pricing: "₹14,999 – ₹24,999 (one-time)", imageRight: false },
  { emoji: "📦", title: "PRODUCT & SERVICE SHOWCASE SHOOT", desc: "Half-day professional shoot of your products, services, interior, or team — with 10 edited clips ready for social media, website, and paid ads.", pricing: "₹8,999 – ₹15,999 (one-time)", imageRight: true },
  { emoji: "🎊", title: "EVENT COVERAGE", desc: "Full-day shoot of your launch, inauguration, sale event, or brand activation — delivered as a highlight reel plus individual clips for social media.", pricing: "₹12,999 – ₹24,999 (one-time)", imageRight: false },
  { emoji: "▶", title: "YOUTUBE CONTENT PACKAGE", desc: "4 videos/month — scripted, shot, edited, with SEO-optimized titles, descriptions, and thumbnails. For coaching institutes, hospitals, and professionals building authority on YouTube.", pricing: "₹15,999 – ₹24,999/month", imageRight: true },
];

const industries = [
  { emoji: "💍", name: "Jewellers", desc: "Showcase your collection in cinematic detail" },
  { emoji: "🏠", name: "Real Estate", desc: "Property tours that sell before a site visit" },
  { emoji: "🍽", name: "Restaurants", desc: "Food videos that make phones drop and tables fill" },
  { emoji: "🏫", name: "Coaching", desc: "Faculty intro videos that build enrollment trust" },
  { emoji: "🏨", name: "Hotels", desc: "Heritage experience videos built for bookings" },
  { emoji: "🛍", name: "Boutiques", desc: "Lookbook reels that turn followers into buyers" },
  { emoji: "🏥", name: "Clinics", desc: "Doctor intro videos that build credibility before the first appointment" },
];

export default function KliqueNexusPage() {
  // Gradually lighten backgrounds
  const bgShades = ["bg-nearBlack", "bg-[#111]", "bg-[#151515]", "bg-[#1a1a1a]", "bg-[#1f1f1f]"];

  return (
    <div className="bg-nearBlack">
      {/* Hero — Cinematic Dark */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-nearBlack via-nearBlack/95 to-[#111]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(1,105,111,0.08),transparent_60%)]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold bg-gold/10 rounded-full mb-8">
            🎬 Introducing KliqueNexus — The Video Wing of Param Nexus
          </motion.span>
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }} className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.08]">
            Video Is No Longer Optional.
            <br />
            <span className="text-gold">It&apos;s the Language of Modern Business.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.6 }} className="mt-6 text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Reels get 22x more engagement than static posts.
            YouTube is the second-largest search engine in the world.
            And yet — most Jaipur businesses have never made a single
            professional video. KliqueNexus changes that.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#services" className="px-8 py-3.5 text-sm font-bold text-nearBlack bg-gold rounded-full hover:bg-gold-light transition-colors mobile-full-width-cta">See Our Video Packages</a>
            <a href="tel:+918619620062" className="px-8 py-3.5 text-sm font-semibold text-white border-2 border-white/20 rounded-full hover:bg-white hover:text-nearBlack transition-all mobile-full-width-cta">📞 Book a Free Creative Consultation</a>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <SectionWrapper className="py-16 lg:py-20 bg-[#111]">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatedCounter end={22} suffix="×" className="text-gold" labelClassName="text-white/40" label="More reach with Reels vs photo posts" />
          <AnimatedCounter end={95} suffix="%" className="text-gold" labelClassName="text-white/40" label="Message retention in video vs 10% when read as text" />
          <AnimatedCounter end={73} suffix="%" className="text-gold" labelClassName="text-white/40" label="Consumers influenced by a brand video" />
          <AnimatedCounter end={66} suffix="%" className="text-gold" labelClassName="text-white/40" label="More qualified leads for businesses with video content" />
        </div>
      </SectionWrapper>

      {/* Services — Alternating rows */}
      <div id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper className="py-14 text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              What KliqueNexus <span className="text-gold">Delivers</span>
            </h2>
          </SectionWrapper>
        </div>
        {services.map((s, i) => (
          <SectionWrapper key={s.title} className={`${bgShades[i]} py-16 lg:py-20`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${!s.imageRight ? "lg:flex-row-reverse" : ""}`}>
                <div className={s.imageRight ? "order-1" : "order-1 lg:order-2"}>
                  <span className="text-3xl mb-4 block">{s.emoji}</span>
                  <h3 className="font-display text-2xl font-bold text-white mb-4">{s.title}</h3>
                  <p className="text-white/60 leading-relaxed mb-4">{s.desc}</p>
                  <p className="text-gold font-display font-bold whitespace-pre-line">{s.pricing}</p>
                </div>
                <div className={s.imageRight ? "order-2" : "order-2 lg:order-1"}>
                  <div className="h-48 lg:h-64 rounded-2xl bg-gradient-to-br from-teal/10 to-gold/5 border border-white/5 flex items-center justify-center">
                    <span className="text-6xl opacity-30">{s.emoji}</span>
                  </div>
                </div>
              </div>
            </div>
          </SectionWrapper>
        ))}
      </div>

      {/* Industries */}
      <SectionWrapper className="bg-[#222] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white text-center mb-14">
            Built for Businesses That Want to Be <span className="text-gold">Seen</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map(ind => (
              <div key={ind.name} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-gold/10 hover:border-gold/20 transition-all duration-300">
                <span className="text-2xl shrink-0 mt-0.5">{ind.emoji}</span>
                <div>
                  <h3 className="font-display text-base font-bold text-white">{ind.name}</h3>
                  <p className="text-sm text-white/50">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Link href="/contact" className="px-8 py-3.5 text-sm font-bold text-nearBlack bg-gold rounded-full hover:bg-gold-light transition-colors mobile-full-width-cta">📅 Book a Free Creative Consultation</Link>
            <a href="https://wa.me/918619620062?text=Hi%20KliqueNexus!" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 text-sm font-semibold text-white border-2 border-white/20 rounded-full hover:bg-white hover:text-nearBlack transition-all mobile-full-width-cta">💬 WhatsApp KliqueNexus</a>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
