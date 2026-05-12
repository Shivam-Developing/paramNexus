"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { MagicBento, BentoItem } from "@/components/animations/MagicBento";
import MagicRings from "@/components/animations/MagicRings";
import BlurText from "@/components/animations/BlurText";
import { Check, ChevronDown, ChevronUp, Globe, Smartphone, Search, MessageSquare, Zap, MapPin } from "lucide-react";

const features = [
  { icon: <Zap />, title: "Loads in Under 3 Seconds", body: "Slow sites lose 53% of visitors before the page even opens. Ours are speed-optimized by default." },
  { icon: <Smartphone />, title: "Mobile-First Design", body: "78% of local searches happen on phones. Your site looks perfect on every screen, every device." },
  { icon: <Search />, title: "Built-in SEO Foundation", body: "Proper meta tags, schema markup, and page structure so Google finds you from Day 1." },
  { icon: <MessageSquare />, title: "WhatsApp & Call Button", body: "One tap to contact you directly. Converts visitors into inquiries instantly." },
  { icon: <Globe />, title: "AI Chatbot Ready", body: "Never miss a customer inquiry — even at midnight. Your site answers questions while you sleep." },
  { icon: <MapPin />, title: "Google Maps Integration", body: "Customers find your exact location without friction. Essential for every walk-in business." },
];

const pricingTiers = [
  {
    name: "STARTER", price: "₹8,999", popular: false, perfect: "Perfect for: New businesses, shops, clinics, and freelancers needing a fast digital presence.",
    features: ["5 Professional Pages", "Mobile Responsive Design", "WhatsApp & Call Button", "Google Maps Integration", "Basic On-Page SEO", "1 Month Free Support"],
    delivery: "⏱ 10–12 Days Delivery", cta: "Start with Starter",
  },
  {
    name: "BUSINESS", price: "₹18,999", popular: true, perfect: "Perfect for: Established local businesses, coaching institutes, and retail stores wanting more growth.",
    features: ["Up to 12 Pages", "AI Chatbot Integration", "Enquiry & Booking Forms", "Google Search Console Setup", "Social Media Feed Integration", "2 Months Free Support"],
    delivery: "⏱ 12–15 Days Delivery", cta: "Start with Business",
  },
  {
    name: "PREMIUM", price: "₹39,999", popular: false, perfect: "Perfect for: Hotels, real estate developers, and jewelers needing a full custom digital experience.",
    features: ["Fully Custom UI/UX", "Content Management System", "Appointment Booking System", "Core Web Vitals Optimization", "Advanced Analytics Dashboard", "3 Months Priority Support"],
    delivery: "⏱ 15–20 Days Delivery", cta: "Start with Premium",
  },
];

const processSteps = [
  { days: "Day 1–2", emoji: "📋", title: "Kickoff", desc: "Brief, domain & hosting setup." },
  { days: "Day 3–5", emoji: "🎨", title: "Design", desc: "Mockup shown for approval." },
  { days: "Day 6–10", emoji: "⚙", title: "Development", desc: "Site built page by page." },
  { days: "Day 11–15", emoji: "🚀", title: "Launch", desc: "Final review & go live." },
];

const faqs = [
  { q: "Do I need to provide content and copy?", a: "No. Our AI copywriting team writes all content based on a simple brief you fill in. You just review and approve." },
  { q: "Do you provide domain and hosting?", a: "We help you set up your domain and hosting, or manage it for you on our servers with the monthly maintenance retainer." },
  { q: "Can I update the website myself later?", a: "Yes — our Business and Premium plans include a CMS so you can update content anytime without any technical knowledge." },
  { q: "What if I don't like the design?", a: "We show you a complete design mockup before development begins. Not a single line of code is written until you're happy with the design." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="premium-glass overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-all">
        <span className="font-display text-base font-bold text-white pr-4">{q}</span>
        {open ? <ChevronUp className="w-5 h-5 text-neonIndigo" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
      </button>
      <div className={`overflow-hidden transition-all duration-400 ${open ? "max-h-60 pb-6 px-6" : "max-h-0"}`}>
        <p className="text-sm text-gray-400 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function WebDevPage() {
  return (
    <div className="bg-obsidian text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <MagicRings color="#6366F1" opacity={0.1} ringCount={3} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
              <BlurText 
                text="Your Business Deserves a Website That Works Hard."
                className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-8"
                animateBy="words"
                direction="top"
              />
              <p className="text-gray-400 text-lg lg:text-xl leading-relaxed mb-10">
                75% of consumers judge a business&apos;s credibility by its website alone.
                We build fast, SEO-ready sites that turn Jaipur&apos;s browsers into buyers.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="#pricing" className="px-10 py-4 text-sm font-bold text-white bg-gradient-to-r from-neonIndigo to-purple-600 rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all text-center">See Packages</a>
                <Link href="/contact" className="px-10 py-4 text-sm font-bold text-gray-300 border border-white/10 rounded-full hover:bg-white/5 transition-all text-center">Get Free Quote</Link>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 1 }} className="hidden lg:block relative">
               <div className="absolute inset-0 bg-neonIndigo/20 blur-[100px] scale-75" />
               <div className="premium-glass rounded-2xl overflow-hidden border border-white/10 relative">
                  <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                    <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-500/50" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" /><div className="w-2.5 h-2.5 rounded-full bg-green-500/50" /></div>
                    <div className="flex-1 ml-4 px-3 py-1 bg-black/40 rounded-lg text-[10px] text-gray-500 font-mono">paramnexus.in/your-site</div>
                  </div>
                  <div className="p-10 space-y-6">
                    <div className="h-6 w-3/4 bg-neonIndigo/20 rounded-lg" />
                    <div className="h-3 w-full bg-white/5 rounded-lg" />
                    <div className="h-3 w-5/6 bg-white/5 rounded-lg" />
                    <div className="grid grid-cols-3 gap-4 pt-6">
                      {[1,2,3].map(i => (<div key={i} className="h-24 bg-white/5 rounded-xl border border-white/5" />))}
                    </div>
                    <div className="h-12 w-1/3 bg-neonIndigo/40 rounded-xl mt-6" />
                  </div>
               </div>
            </motion.div>
          </div>
          
          {/* Stats */}
          <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-white/5 pt-16">
            <AnimatedCounter end={75} suffix="%" className="text-white" labelClassName="text-gray-500" label="Judge credibility by website" />
            <AnimatedCounter end={88} suffix="%" className="text-white" labelClassName="text-gray-500" label="Search before visiting locally" />
            <AnimatedCounter end={53} suffix="%" className="text-white" labelClassName="text-gray-500" label="Leave if page loads slowly" />
          </div>
        </div>
      </section>

      {/* Features */}
      <SectionWrapper className="bg-eerieBlack py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-20">What a Param Nexus Website <span className="text-gradient-indigo">Gives You</span></h2>
          <MagicBento className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(f => (
              <BentoItem key={f.title} title={f.title} description={f.body} icon={f.icon} />
            ))}
          </MagicBento>
        </div>
      </SectionWrapper>

      {/* Pricing */}
      <SectionWrapper id="pricing" className="bg-obsidian py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-20">Choose the Plan That <span className="text-gradient-cyan">Fits Your Business</span></h2>
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {pricingTiers.map(tier => (
              <div key={tier.name} className={`premium-glass p-8 lg:p-10 transition-all duration-500 group premium-glass-hover ${tier.popular ? "border-neonIndigo/30 bg-neonIndigo/[0.03] scale-105 z-10" : "border-white/10"}`}>
                {tier.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 text-[10px] font-bold bg-neonIndigo text-white rounded-full uppercase tracking-widest shadow-xl">⭐ Recommended</div>}
                <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-neonIndigo transition-colors">{tier.name}</h3>
                <p className="text-4xl font-display font-bold mb-6 text-white">{tier.price}</p>
                <p className="text-sm text-gray-500 mb-8 leading-relaxed">{tier.perfect}</p>
                <div className="space-y-4 mb-10">
                  {tier.features.map(f => (
                    <div key={f} className="flex items-start gap-3">
                      <Check className="w-4 h-4 mt-1 text-neonIndigo shrink-0" />
                      <span className="text-sm text-gray-300">{f}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-6">{tier.delivery}</p>
                <Link href="/contact" className={`w-full py-4 text-sm font-bold rounded-2xl text-center transition-all ${tier.popular ? "bg-neonIndigo text-white shadow-xl hover:shadow-neonIndigo/30" : "bg-white/5 text-white hover:bg-white/10"}`}>{tier.cta}</Link>
              </div>
            ))}
          </div>
          
          <div className="mt-12 max-w-xl mx-auto premium-glass p-8 text-center border-dashed border-white/10">
             <p className="text-base text-gray-400">A Delhi agency charges <strong>₹80k–₹2.5L</strong> for the same work. <br />We charge <strong className="text-neonIndigo font-bold">₹9k–₹40k</strong> — and deliver in 15 days.</p>
          </div>
        </div>
      </SectionWrapper>

      {/* Process */}
      <SectionWrapper className="bg-eerieBlack py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-20">The Development <span className="text-gradient-indigo">Process</span></h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map(s => (
              <div key={s.title} className="premium-glass p-8 group premium-glass-hover">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-3xl group-hover:bg-neonIndigo/20 transition-all">{s.emoji}</div>
                <span className="text-[10px] font-bold text-neonIndigo uppercase tracking-[0.2em] block mb-2">{s.days}</span>
                <h3 className="font-display text-lg font-bold text-white mb-3">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper className="bg-obsidian py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-white text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}
          </div>
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="px-10 py-4 text-sm font-bold text-white bg-gradient-to-r from-neonIndigo to-purple-600 rounded-full shadow-2xl">📋 Get a Free Quote</Link>
            <a href="https://wa.me/918744003727" target="_blank" rel="noopener noreferrer" className="px-10 py-4 text-sm font-bold text-gray-300 border border-white/10 rounded-full hover:bg-white/5 transition-all">💬 WhatsApp Enquiry</a>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
