"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, Newspaper, Megaphone, FileText, Bell, Heart, Palette, PenTool, ClipboardList, Globe
} from "lucide-react";
import { Galaxy } from "@/components/Galaxy";
import { MagicBento } from "@/components/MagicBento";
import { BlurText } from "@/components/BlurText";
import { GradientText } from "@/components/GradientText";
import { Prism } from "@/components/Prism";

const publishers = [
  { name: "Dainik Bhaskar", desc: "Rajasthan's #1 Hindi daily — maximum reach for every local business." },
  { name: "Rajasthan Patrika", desc: "Jaipur's most trusted regional daily with deep cultural roots." },
  { name: "Times of India", desc: "National credibility with a dedicated Jaipur edition for upscale audiences." },
  { name: "Mahanagar Times", desc: "Jaipur's pulse — hyperlocal readership for targeted community reach." },
];

const printServices = [
  { num: "1", icon: <Megaphone className="w-6 h-6 text-indigo-400" />, title: "Display Advertisements", body: "Full-page, half-page, and strip ads across any newspaper. Premium placement guaranteed." },
  { num: "2", icon: <FileText className="w-6 h-6 text-cyan-400" />, title: "Classified Advertisements", body: "Cost-effective text and box classifieds for recruitment, property, and announcements." },
  { num: "3", icon: <Bell className="w-6 h-6 text-indigo-400" />, title: "Public Notices & Legal Ads", body: "Name-change, tenders, lost & found — handled with precision and on time." },
  { num: "4", icon: <Heart className="w-6 h-6 text-cyan-400" />, title: "Matrimonial & Obituary", body: "Handled with care and dignity across all major Jaipur newspapers." },
  { num: "5", icon: <Palette className="w-6 h-6 text-indigo-400" />, title: "Brand Campaigns", body: "Multi-publication planning for product launches and brand awareness." },
  { num: "6", icon: <PenTool className="w-6 h-6 text-cyan-400" />, title: "Ad Design", body: "Our team designs and writes your ad — fully publication-compliant and impactful." },
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
    <div className="bg-obsidian text-white selection:bg-indigo-500/30">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden z-0">
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <Galaxy className="opacity-40" />
        </div>
        
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[140px] rounded-full z-[2] pointer-events-none" />

        <div className="relative z-[10] max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight text-center">
            Jaipur Has Read Our Clients&apos; Ads <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              For Over Two Decades.
            </span>
          </h2>
          
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.8 }} 
            className="mt-8 text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Before websites. Before Instagram. Before Google.
            There was print — and <span className="text-white font-bold">Param Advertising Agency</span> was placing campaigns
            in every major newspaper in Rajasthan since the early 2000s.
          </motion.p>
        </div>
      </section>

      {/* Publisher Network */}
      <section className="bg-obsidian py-24 lg:py-32 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              One Call. <GradientText>Every Newspaper.</GradientText>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Planning a newspaper ad campaign used to be complex. With Param Advertising, 
              you make one call — and we handle everything from design to publication.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {publishers.map((p, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <MagicBento className="text-center h-full">
                  <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform duration-500">
                    <Newspaper className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3 tracking-tight">{p.name}</h3>
                  <div className="w-8 h-1 bg-indigo-500/30 mx-auto mb-4 group-hover:w-12 transition-all duration-500" />
                  <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{p.desc}</p>
                </MagicBento>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Print Services */}
      <section className="bg-obsidian py-24 lg:py-32 relative border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-24 leading-tight">
            Everything Print.
            <br />
            <GradientText>Under One Roof.</GradientText>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {printServices.map((s, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-8 items-start group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#121216] border border-white/10 flex items-center justify-center shrink-0 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500 shadow-xl group-hover:shadow-indigo-500/20">
                  {s.icon}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-3 tracking-tight group-hover:text-indigo-400 transition-colors">{s.title}</h3>
                  <p className="text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{s.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Print + Digital Bridge */}
      <section className="bg-obsidian py-24 lg:py-32 relative border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(99,102,241,0.05),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Your Business Needs <GradientText>Both.</GradientText>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Newspaper advertising builds credibility for today. Digital marketing captures 
              the next generation. We are the only agency in Jaipur delivering both seamlessly.
            </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-[1fr_auto_1fr] gap-0 items-stretch max-w-5xl mx-auto rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl bg-[#0B0B0E]"
          >
            {/* Left — Print */}
            <div className="p-10 lg:p-16 border-r border-white/5">
              <h3 className="font-display text-2xl font-bold text-white mb-2 tracking-tight">PARAM ADVERTISING</h3>
              <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold mb-10">Traditional Trust</p>
              <div className="space-y-5">
                {bridgeItems.map((b, i) => (
                  <div key={i} className="text-base text-gray-400 font-medium flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                    {b.left}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Center arrows */}
            <div className="hidden lg:flex flex-col items-center justify-center px-10 bg-white/[0.01] gap-6">
              {bridgeItems.map((_, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.1 }} viewport={{ once: true }}>
                  <ArrowRight className="w-5 h-5 text-indigo-500/40" />
                </motion.div>
              ))}
            </div>
            
            {/* Right — Digital */}
            <div className="bg-indigo-500/[0.02] p-10 lg:p-16">
              <h3 className="font-display text-2xl font-bold text-white mb-2 tracking-tight">PARAM NEXUS</h3>
              <p className="text-[10px] text-indigo-400 uppercase tracking-[0.3em] font-bold mb-10">Digital Dominance</p>
              <div className="space-y-5">
                {bridgeItems.map((b, i) => (
                  <div key={i} className="text-base text-gray-300 font-medium flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/40" />
                    {b.right}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <div className="text-center mt-24">
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-12">Together: Every Customer. Every Platform. Every Day.</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="group px-10 py-5 text-sm font-bold text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all flex items-center gap-2">
                <ClipboardList className="w-4 h-4" /> Book a Print Campaign
              </Link>
              <Link href="/services/website-development" className="group px-10 py-5 text-sm font-bold text-white bg-gradient-to-r from-neonIndigo to-purple-600 rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all flex items-center gap-2">
                <Globe className="w-4 h-4" /> Explore Digital Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
