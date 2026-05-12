"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import StaggeredGrid from "@/components/ui/StaggeredGrid";
import { ArrowRight, Newspaper, TrendingUp, Target, Users } from "lucide-react";
import MagicRings from "@/components/animations/MagicRings";
import BlurText from "@/components/animations/BlurText";

const publishers = [
  { name: "Dainik Bhaskar", desc: "Rajasthan's #1 Hindi daily — maximum reach" },
  { name: "Rajasthan Patrika", desc: "Jaipur's most trusted regional daily" },
  { name: "Times of India", desc: "National credibility, Jaipur edition" },
  { name: "Mahanagar Times", desc: "Jaipur's pulse — hyperlocal readership" },
];

const printServices = [
  { num: "1", emoji: "📋", title: "Display Advertisements", body: "Full-page, half-page, and strip ads across any newspaper. Premium placement guaranteed." },
  { num: "2", emoji: "📌", title: "Classified Advertisements", body: "Cost-effective text and box classifieds for recruitment, property, and announcements." },
  { num: "3", emoji: "📣", title: "Public Notices & Legal Ads", body: "Name-change, tenders, lost & found — handled with precision and on time." },
  { num: "4", emoji: "🎉", title: "Matrimonial & Obituary", body: "Handled with care and dignity across all major Jaipur newspapers." },
  { num: "5", emoji: "🏢", title: "Brand Campaigns", body: "Multi-publication planning for product launches and brand awareness." },
  { num: "6", emoji: "✏", title: "Ad Design", body: "Our team designs and writes your ad — fully publication-compliant." },
];

const advantages = [
  { emoji: <Users />, title: "EVERY PUBLISHER. ONE CONTACT.", body: "We are directly connected with every major newspaper in Jaipur. You don't chase publishers — we do it for you." },
  { emoji: <Target />, title: "BEST RATE NEGOTIATIONS", body: "Our long-standing publisher relationships mean you get competitive rates unavailable to walk-in clients." },
  { emoji: <TrendingUp />, title: "FAST TURNAROUND", body: "Ad bookings confirmed within hours. Publication deadlines met without fail. Every time." },
  { emoji: <Newspaper />, title: "PRINT + DIGITAL COMBO", body: "As the parent company of Param Nexus, we offer Jaipur's only combined print + digital advertising solution." },
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
    <div className="bg-obsidian text-white">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden">
        <MagicRings color="#6366F1" opacity={0.15} ringCount={4} blur={8} />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BlurText 
            text="Jaipur Has Read Our Clients' Ads For Over Two Decades."
            className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-8"
            animateBy="words"
            direction="top"
          />
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1.2 }} 
            className="text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Before websites. Before Instagram. Before Google.
            There was print — and <span className="text-white font-bold">Param Advertising Agency</span> was placing campaigns
            in every major newspaper in Rajasthan.
          </motion.p>
        </div>
      </section>

      {/* Publisher Network */}
      <SectionWrapper className="bg-eerieBlack py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">One Call. Every Newspaper.</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Planning a newspaper ad campaign used to be complex. With Param Advertising, 
              you make one call — and we handle everything from design to publication.
            </p>
          </div>
          
          <StaggeredGrid className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {publishers.map(p => (
              <div key={p.name} className="premium-glass p-8 text-center group premium-glass-hover">
                <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">📰</span>
                <h3 className="font-display text-xl font-bold text-white mb-3">{p.name}</h3>
                <div className="w-10 h-0.5 bg-neonIndigo/40 mx-auto mb-4" />
                <p className="text-sm text-gray-400">{p.desc}</p>
              </div>
            ))}
          </StaggeredGrid>
        </div>
      </SectionWrapper>

      {/* Print Services */}
      <SectionWrapper className="bg-obsidian py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyberCyan/5 blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-20">Everything Print. <br /><span className="text-gradient-cyan">Under One Roof.</span></h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {printServices.map(s => (
              <div key={s.num} className="flex gap-6 items-start group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-2xl group-hover:bg-neonIndigo/20 transition-colors">
                  {s.emoji}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Print + Digital Bridge */}
      <SectionWrapper className="bg-eerieBlack py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Your Business Needs Both.</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Newspaper advertising builds credibility for today. Digital marketing captures 
              the next generation. We are the only agency in Jaipur delivering both seamlessly.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-0 items-stretch max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden border border-white/10">
            {/* Left — Print */}
            <div className="bg-white/5 p-10 lg:p-14">
              <h3 className="font-display text-xl font-bold text-white mb-2">PARAM ADVERTISING</h3>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-8">Traditional Trust</p>
              <div className="space-y-4">
                {bridgeItems.map(b => (
                  <div key={b.left} className="text-base text-gray-300 font-medium flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                    {b.left}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Center arrows */}
            <div className="hidden lg:flex flex-col items-center justify-center px-8 bg-white/[0.02] gap-4">
              {bridgeItems.map((_, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }} viewport={{ once: true }}>
                  <ArrowRight className="w-5 h-5 text-neonIndigo" />
                </motion.div>
              ))}
            </div>
            
            {/* Right — Digital */}
            <div className="bg-neonIndigo/10 p-10 lg:p-14">
              <h3 className="font-display text-xl font-bold text-white mb-2">PARAM NEXUS</h3>
              <p className="text-[10px] text-neonIndigo uppercase tracking-widest font-bold mb-8">Digital Dominance</p>
              <div className="space-y-4">
                {bridgeItems.map(b => (
                  <div key={b.right} className="text-base text-gray-300 font-medium flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-neonIndigo/40" />
                    {b.right}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center mt-20">
            <h3 className="font-display text-2xl font-bold text-white mb-10">Together: Every Customer. Every Platform. Every Day.</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="px-10 py-4 text-sm font-bold text-white bg-gradient-to-r from-neonIndigo to-purple-600 rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all">
                📰 Book a Print Campaign
              </Link>
              <Link href="/services/website-development" className="px-10 py-4 text-sm font-bold text-gray-300 border border-white/10 rounded-full hover:bg-white/5 transition-all">
                🌐 Explore Digital Services
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
