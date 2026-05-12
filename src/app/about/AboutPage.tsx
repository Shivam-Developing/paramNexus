"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Building2, Bot, TrendingUp, Phone, MessageSquare, ClipboardList } from "lucide-react";
import { Galaxy } from "@/components/Galaxy";
import { MagicBento } from "@/components/MagicBento";
import { GradientText } from "@/components/GradientText";
import { Prism } from "@/components/Prism";
import { Cubes } from "@/components/Cubes";

const pillars = [
  {
    icon: <Building2 className="w-8 h-8 text-indigo-400" />,
    title: "ROOTED IN JAIPUR",
    body: "We didn't study your market from a Mumbai office. We grew up in it. We know the Diwali rush for jewelers, the admission season for coaching institutes, and the wedding tourism spike for hotels. Our strategies are built around your actual business calendar — not generic templates.",
  },
  {
    icon: <Bot className="w-8 h-8 text-cyan-400" />,
    title: "POWERED BY AI",
    body: "Every service we deliver is executed with a carefully chosen AI toolstack that reduces delivery time and cost by up to 70%. This isn't automation for automation's sake — it's precision efficiency that lets us price fairly without ever compromising on quality.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-indigo-400" />,
    title: "OBSESSED WITH YOUR GROWTH",
    body: "We don't chase follower counts or website traffic numbers. We chase the metrics that matter to a local business owner: calls received, inquiries submitted, customers who said 'I found you on Google.' That is our report card.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-obsidian text-white min-h-screen selection:bg-indigo-500/30">
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden z-0">
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <Galaxy className="opacity-40" />
        </div>
        
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[140px] rounded-full z-[2] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-[10]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold leading-[1.05] tracking-tight">
                We&apos;ve Served Jaipur <br />
                <GradientText>For Decades.</GradientText>
              </h1>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-gray-400">
                Now We&apos;re Taking It Digital.
              </h2>
              <p className="mt-8 text-gray-400 text-lg lg:text-xl leading-relaxed max-w-xl">
                Param Advertising Agency has been a household name in Jaipur advertising for 20+ years. 
                Param Nexus is the next evolution — taking that trust into the digital future.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="hidden lg:block relative"
            >
               <div className="absolute inset-0 bg-indigo-500/20 blur-[120px] scale-75 opacity-50" />
               <div className="relative overflow-hidden rounded-2xl bg-[#121216]/60 backdrop-blur-xl border border-white/10 p-8 shadow-[0_0_40px_rgba(99,102,241,0.15)] flex flex-col justify-between ml-auto max-w-md aspect-square">
                 <div className="absolute -right-10 -top-10 w-40 h-40 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
                 <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">Verified Impact</span>
                 <div className="my-6">
                   <h3 className="text-6xl font-extrabold text-white tracking-tight">20+</h3>
                   <p className="text-sm font-medium text-gray-400 mt-1">Years of Local Rajasthan Authority</p>
                 </div>
                 <div className="border-t border-white/5 pt-4 flex justify-between items-center text-xs text-gray-500">
                   <span>Dainik Bhaskar</span>
                   <span>•</span>
                   <span>Rajasthan Patrika</span>
                 </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-obsidian py-24 lg:py-32 relative border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
             <div className="space-y-12">
                <div className="p-8 rounded-3xl bg-[#121216]/60 backdrop-blur-xl border-l-4 border-l-indigo-500 border border-white/5 shadow-[0_0_30px_rgba(99,102,241,0.1)]">
                  <p className="text-xl text-gray-200 leading-relaxed font-display">
                    Param Advertising Agency has placed thousands of campaigns across
                    Dainik Bhaskar, Rajasthan Patrika, Times of India, and Mahanagar Times. 
                    In that time, we built genuine trust with hundreds of Jaipur business owners.
                  </p>
                </div>
                
                <div className="p-8 rounded-3xl bg-[#121216]/40 backdrop-blur-xl border-l-4 border-l-cyan-500 border border-white/5">
                  <p className="text-lg text-gray-400 leading-relaxed">
                    But we kept seeing the same story repeat itself. A brilliant jewelry
                    showroom in Johari Bazar. A thriving coaching institute near Gopalpura. 
                    A heritage hotel near Amer. All investing in print — while their digital 
                    presence was broken, outdated, or simply didn&apos;t exist.
                  </p>
                </div>
             </div>

             <div className="space-y-12 lg:mt-24">
                <div className="p-8 rounded-3xl bg-[#121216]/40 backdrop-blur-xl border-l-4 border-l-purple-500 border border-white/5">
                  <p className="text-lg text-gray-400 leading-relaxed">
                    Param Nexus is our answer to that problem. Not with overpriced retainers. 
                    Not with generic strategies imported from Delhi or Mumbai. With AI-powered 
                    execution, deep local market knowledge, and pricing that respects where 
                    our clients actually are.
                  </p>
                </div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="p-8 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-3xl border border-white/5"
                >
                  <p className="text-2xl font-display font-bold text-white italic leading-tight">
                    &ldquo;Our Mission: Make every Jaipur business impossible to ignore online.&rdquo;
                  </p>
                </motion.div>
             </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="bg-obsidian py-24 lg:py-32 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <MagicBento className="h-full relative rounded-2xl bg-[#121216]/60 backdrop-blur-xl border border-white/10 p-6 shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] transition-all duration-500 hover:-translate-y-1 overflow-hidden group">
                  <Cubes className="opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                  <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500 relative z-10">
                    {p.icon}
                  </div>
                  <h3 className="font-display text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4 group-hover:text-white transition-colors relative z-10">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors relative z-10">{p.body}</p>
                </MagicBento>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-obsidian py-24 lg:py-32 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white text-center mb-20 leading-tight">
            The People Behind <br />
            <GradientText>Param Nexus</GradientText>
          </h2>
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
             <MagicBento className="flex flex-col gap-6 p-10 relative rounded-2xl bg-[#121216]/60 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(99,102,241,0.15)] overflow-hidden">
                <Cubes className="absolute top-0 right-0 opacity-10" />
                <div className="absolute top-0 right-0 p-8 opacity-10">
                   <Building2 className="w-24 h-24 text-indigo-500" />
                </div>
                <div>
                  <h3 className="font-display text-3xl font-bold text-white mb-1">Shivam Dhanda</h3>
                  <p className="text-sm text-indigo-400 font-bold uppercase tracking-widest mb-6">Founder & Director</p>
                  <p className="text-base text-gray-400 leading-relaxed">Driving the technology and creative vision at Param Nexus, Shivam combines AI expertise with a passion for helping local businesses achieve digital dominance.</p>
                </div>
             </MagicBento>
             <MagicBento className="flex flex-col gap-6 p-10 relative rounded-2xl bg-[#121216]/60 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(99,102,241,0.15)] overflow-hidden">
                <Cubes className="absolute top-0 right-0 opacity-10" />
                <div className="absolute top-0 right-0 p-8 opacity-10">
                   <Building2 className="w-24 h-24 text-indigo-500" />
                </div>
                <div>
                  <h3 className="font-display text-3xl font-bold text-white mb-1">Ayush Sharma</h3>
                  <p className="text-sm text-indigo-400 font-bold uppercase tracking-widest mb-6">Founder & Director</p>
                  <p className="text-base text-gray-400 leading-relaxed">Leading Param Nexus&apos;s vision to bridge print legacy with digital innovation, Ayush brings strategic business acumen and deep understanding of the Jaipur market.</p>
                </div>
             </MagicBento>
          </div>
        </div>
      </section>

      {/* Parent Brand Bridge */}
      <section className="bg-obsidian py-24 lg:py-32 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(99,102,241,0.1),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
              Our Parent Brand — <GradientText>The Foundation</GradientText>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed">
              Param Advertising Agency is not just our parent company — it&apos;s our proof of concept. 
              Decades of building trust, delivering campaigns on time, and helping Jaipur businesses grow 
              is the foundation on which Param Nexus stands.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <MagicBento className="text-center flex-1 max-w-xs !p-10">
              <h3 className="font-display text-xl font-bold text-white mb-2">PARAM ADVERTISING</h3>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Print · Legacy · Trust</p>
            </MagicBento>
            
            <div className="flex items-center justify-center opacity-30">
              <ArrowRight className="w-12 h-12 text-indigo-500 hidden md:block" />
              <div className="w-0.5 h-12 bg-white/10 md:hidden" />
            </div>

            <MagicBento className="text-center flex-1 max-w-xs !p-10 border-indigo-500/20">
              <h3 className="font-display text-xl font-bold text-white mb-2">PARAM NEXUS</h3>
              <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Digital · AI · Future</p>
            </MagicBento>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-20">
            <Link href="/contact" className="px-10 py-4 text-sm font-bold text-white bg-gradient-to-r from-neonIndigo to-purple-600 rounded-full shadow-2xl flex items-center gap-2 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all">
              <ClipboardList className="w-4 h-4" /> Start Your Journey
            </Link>
            <a href="tel:+918744003727" className="px-10 py-4 text-sm font-bold text-gray-300 border border-white/10 rounded-full hover:bg-white/5 transition-all flex items-center gap-2">
              <MessageSquare className="w-4 h-4" /> Talk to Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
