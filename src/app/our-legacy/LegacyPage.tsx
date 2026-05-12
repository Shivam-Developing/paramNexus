"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import StaggeredGrid from "@/components/ui/StaggeredGrid";
import { ArrowRight } from "lucide-react";

const publishers = [
  { name: "Dainik Bhaskar", desc: "Rajasthan's #1 Hindi daily — maximum reach" },
  { name: "Rajasthan Patrika", desc: "Jaipur's most trusted regional daily" },
  { name: "Times of India", desc: "National credibility, Jaipur edition" },
  { name: "Mahanagar Times", desc: "Jaipur's pulse — city-specific hyperlocal readership" },
];

const printServices = [
  { num: "1", emoji: "📋", title: "Display Advertisements", body: "Full-page, half-page, quarter-page, and strip ads across any newspaper of your choice. Premium placement available." },
  { num: "2", emoji: "📌", title: "Classified Advertisements", body: "Cost-effective text and box classifieds for recruitment, property, business announcements, and more." },
  { num: "3", emoji: "📣", title: "Public Notices & Legal Ads", body: "Name-change ads, government tenders, lost & found — handled with accuracy and published on time." },
  { num: "4", emoji: "🎉", title: "Matrimonial & Obituary Ads", body: "Handled with care, dignity, and publication precision across all major Jaipur newspapers." },
  { num: "5", emoji: "🏢", title: "Corporate Brand Campaigns", body: "Multi-publication campaign planning for product launches, festive promotions, and brand awareness drives." },
  { num: "6", emoji: "✏", title: "Ad Design & Copywriting", body: "No ready ad? Our team designs and writes your advertisement — print-ready and fully publication-compliant." },
];

const advantages = [
  { emoji: "🗞", title: "EVERY PUBLISHER. ONE CONTACT.", body: "We are directly connected with every major newspaper in Jaipur. You don't chase publishers — we do it for you." },
  { emoji: "💰", title: "BEST RATE NEGOTIATIONS", body: "Our long-standing publisher relationships mean you get competitive rates unavailable to walk-in clients." },
  { emoji: "⚡", title: "FAST TURNAROUND", body: "Ad bookings confirmed within hours. Publication deadlines met without fail. Every time." },
  { emoji: "🔁", title: "PRINT + DIGITAL COMBO", body: "As the parent company of Param Nexus, we offer Jaipur's only combined print + digital advertising solution under one roof." },
];

const bridgeItems = [
  { left: "Dainik Bhaskar", right: "Google Search" },
  { left: "Rajasthan Patrika", right: "Instagram & Reels" },
  { left: "Times of India", right: "Professional Website" },
  { left: "Mahanagar Times", right: "WhatsApp Automation" },
  { left: "Local Publications", right: "YouTube Content" },
];

export default function LegacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-offWhite pt-28 pb-20 lg:pt-32 lg:pb-28 newspaper-texture sepia-overlay overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-darkFooter leading-[1.08]" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
            Jaipur Has Read Our Clients&apos; Ads
            <br />For Over <span className="text-teal">Two Decades.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-6 text-charcoal/60 text-lg max-w-2xl mx-auto">
            Before websites. Before Instagram. Before Google.
            There was print — and Param Advertising Agency was placing campaigns
            in every major newspaper in Rajasthan.
          </motion.p>
        </div>
      </section>

      {/* Publisher Network */}
      <SectionWrapper className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-darkFooter text-center mb-4">One Call. Every Major Newspaper in Jaipur.</h2>
          <p className="text-center text-charcoal/60 max-w-2xl mx-auto mb-12">
            Planning a newspaper ad campaign used to mean calling five different publishers,
            negotiating five different rates, and managing five different deadlines.
            With Param Advertising Agency, you make one call — and we handle everything.
          </p>
          <StaggeredGrid className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {publishers.map(p => (
              <div key={p.name} className="bg-offWhite rounded-2xl p-6 border border-black/5 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <span className="text-2xl mb-3 block">📰</span>
                <h3 className="font-display text-xl font-bold text-darkFooter mb-2" style={{ fontFamily: "'Georgia', serif" }}>{p.name}</h3>
                <div className="w-12 h-0.5 bg-teal/30 mx-auto mb-3" />
                <p className="text-sm text-charcoal/50">{p.desc}</p>
              </div>
            ))}
          </StaggeredGrid>
          <p className="text-center text-sm text-charcoal/50 mt-6">📰 + All Major Local, Regional & Vernacular Publications — Hindi · English · Rajasthani across Jaipur & Rajasthan</p>
          <p className="text-center text-sm text-charcoal/60 mt-4 max-w-xl mx-auto italic">Whether you need a classifieds ad, a half-page display, a front-page strip, or a city supplement feature — we plan, design, and publish it.</p>
        </div>
      </SectionWrapper>

      {/* Print Services */}
      <SectionWrapper className="bg-offWhite py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-darkFooter text-center mb-14">Everything Print. <span className="text-teal">Under One Roof.</span></h2>
          <div className="space-y-6">
            {printServices.map(s => (
              <div key={s.num} className="flex gap-5 items-start">
                <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center shrink-0 text-lg">{s.emoji}</div>
                <div>
                  <h3 className="font-display text-base font-bold text-darkFooter mb-1">{s.num}. {s.title}</h3>
                  <p className="text-sm text-charcoal/60 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Advantages */}
      <SectionWrapper className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-darkFooter text-center mb-14">The Param Advertising <span className="text-teal">Advantage</span></h2>
          <StaggeredGrid className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {advantages.map(a => (
              <div key={a.title} className="bg-offWhite rounded-2xl p-6 border border-black/5 hover:shadow-md transition-all">
                <span className="text-2xl block mb-3">{a.emoji}</span>
                <h3 className="font-display text-sm font-bold text-darkFooter uppercase tracking-wide mb-2">{a.title}</h3>
                <p className="text-sm text-charcoal/60 leading-relaxed">{a.body}</p>
              </div>
            ))}
          </StaggeredGrid>
        </div>
      </SectionWrapper>

      {/* Print + Digital Bridge */}
      <SectionWrapper className="py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-darkFooter text-center mb-4">Your Business Needs Both. <span className="text-teal">We Deliver Both.</span></h2>
          <p className="text-center text-charcoal/60 max-w-2xl mx-auto mb-12">
            Newspaper advertising builds credibility and reaches Jaipur&apos;s established audience.
            Digital marketing captures the next generation of customers searching on Google and scrolling Instagram.
          </p>
          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-0 items-stretch max-w-4xl mx-auto">
            {/* Left — Print */}
            <div className="bg-warmGray rounded-l-2xl lg:rounded-r-none rounded-2xl lg:rounded-l-2xl p-8">
              <h3 className="font-display text-lg font-bold text-darkFooter mb-1">PARAM ADVERTISING</h3>
              <p className="text-xs text-charcoal/50 uppercase tracking-wider mb-6">(Traditional Reach)</p>
              <div className="space-y-3">{bridgeItems.map(b => (<div key={b.left} className="text-sm text-charcoal/70 font-medium">{b.left}</div>))}</div>
            </div>
            {/* Center arrows */}
            <div className="hidden lg:flex flex-col items-center justify-center px-4 bg-offWhite gap-3 py-8">
              {bridgeItems.map((_, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }} viewport={{ once: true }}>
                  <ArrowRight className="w-5 h-5 text-gold" />
                </motion.div>
              ))}
            </div>
            {/* Right — Digital */}
            <div className="bg-teal rounded-r-2xl lg:rounded-l-none rounded-2xl lg:rounded-r-2xl p-8">
              <h3 className="font-display text-lg font-bold text-white mb-1">PARAM NEXUS</h3>
              <p className="text-xs text-white/50 uppercase tracking-wider mb-6">(Digital Dominance)</p>
              <div className="space-y-3">{bridgeItems.map(b => (<div key={b.right} className="text-sm text-white/80 font-medium">{b.right}</div>))}</div>
            </div>
          </div>
          <p className="text-center mt-8 font-display text-lg font-bold text-teal">Together: Every Customer. Every Platform. Every Day.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link href="/contact" className="px-6 py-3 text-sm font-semibold text-white bg-teal rounded-full hover:bg-teal-dark transition-colors mobile-full-width-cta">📰 Book a Print Campaign</Link>
            <Link href="/services/website-development" className="px-6 py-3 text-sm font-semibold text-teal border-2 border-teal rounded-full hover:bg-teal hover:text-white transition-all mobile-full-width-cta">🌐 Explore Param Nexus Digital</Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
