"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Galaxy } from "@/components/Galaxy";
import { MagicBento } from "@/components/MagicBento";
import { BlurText } from "@/components/BlurText";
import { GradientText } from "@/components/GradientText";
import { 
  Check, ChevronDown, ChevronUp, Globe, Smartphone, Search, 
  MessageSquare, Zap, MapPin, ClipboardList, Palette, Code, Rocket, ArrowRight 
} from "lucide-react";

const features = [
  { icon: <Zap className="w-6 h-6 text-indigo-400" />, title: "Loads in Under 3 Seconds", body: "Slow sites lose 53% of visitors before the page even opens. Ours are speed-optimized by default." },
  { icon: <Smartphone className="w-6 h-6 text-cyan-400" />, title: "Mobile-First Design", body: "78% of local searches happen on phones. Your site looks perfect on every screen, every device." },
  { icon: <Search className="w-6 h-6 text-indigo-400" />, title: "Built-in SEO Foundation", body: "Proper meta tags, schema markup, and page structure so Google finds you from Day 1." },
  { icon: <MessageSquare className="w-6 h-6 text-cyan-400" />, title: "WhatsApp & Call Button", body: "One tap to contact you directly. Converts visitors into inquiries instantly." },
  { icon: <Globe className="w-6 h-6 text-indigo-400" />, title: "AI Chatbot Ready", body: "Never miss a customer inquiry — even at midnight. Your site answers questions while you sleep." },
  { icon: <MapPin className="w-6 h-6 text-cyan-400" />, title: "Google Maps Integration", body: "Customers find your exact location without friction. Essential for every walk-in business." },
];

const pricingTiers = [
  {
    name: "STARTER", price: "₹8,999", popular: false, perfect: "Perfect for: New businesses, shops, clinics, and freelancers who need a clean digital presence fast.",
    features: ["5 Professional Pages", "Mobile Responsive Design", "WhatsApp & Call Button", "Google Maps Integration", "Basic On-Page SEO Setup", "1 Month Free Support"],
    delivery: "10–12 Days", cta: "Get Started with Starter",
  },
  {
    name: "BUSINESS", price: "₹18,999", popular: true, perfect: "Perfect for: Established local businesses, coaching institutes, clinics, and retail stores wanting a complete digital presence.",
    features: ["Up to 12 Pages", "AI Chatbot Integration", "Enquiry & Booking Forms", "Blog / News Section", "Google Analytics & Search Console", "2 Months Free Support"],
    delivery: "12–15 Days", cta: "Get Started with Business",
  },
  {
    name: "PREMIUM", price: "₹39,999", popular: false, perfect: "Perfect for: Hotels, real estate developers, large coaching brands, and jewelers needing a full custom digital experience.",
    features: ["Fully Custom UI/UX Design", "Content Management System (CMS)", "Appointment / Booking System", "Core Web Vitals Optimization", "Advanced Analytics Dashboard", "3 Months Priority Support"],
    delivery: "15–20 Days", cta: "Get Started with Premium",
  },
];

const processSteps = [
  { days: "Day 1–2", icon: <ClipboardList className="w-6 h-6" />, title: "Kickoff", desc: "Brief, domain & hosting setup." },
  { days: "Day 3–5", icon: <Palette className="w-6 h-6" />, title: "Design", desc: "Mockup shown for approval." },
  { days: "Day 6–10", icon: <Code className="w-6 h-6" />, title: "Development", desc: "Site built page by page." },
  { days: "Day 11–15", icon: <Rocket className="w-6 h-6" />, title: "Launch", desc: "Final review & go live." },
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
    <div className="relative group rounded-2xl mb-4 overflow-hidden">
      <button 
        onClick={() => setOpen(!open)} 
        className="w-full flex items-center justify-between p-6 text-left bg-[#121216]/60 backdrop-blur-md border border-white/10 hover:border-indigo-500/30 transition-all duration-300"
      >
        <span className="font-display text-base font-bold text-white pr-4">{q}</span>
        {open ? <ChevronUp className="w-5 h-5 text-indigo-400" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
      </button>
      <motion.div 
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="bg-[#121216]/40 border-x border-b border-white/5"
      >
        <div className="p-6">
          <p className="text-sm text-gray-400 leading-relaxed">{a}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function WebDevPage() {
  return (
    <div className="bg-obsidian text-white selection:bg-indigo-500/30">
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden z-0">
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <Galaxy className="opacity-40" />
        </div>
        
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[140px] rounded-full z-[2] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-[10]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
              <BlurText 
                text="Your Business Deserves a Website"
                className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1]"
              />
              <div className="mt-2">
                <GradientText className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1]">
                  That Works Hard.
                </GradientText>
              </div>
              <p className="mt-8 text-gray-400 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl">
                75% of consumers judge a business&apos;s credibility by its website alone.
                If yours is outdated, broken, or nonexistent — you&apos;re losing customers 
                before they even speak to you.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="#pricing" className="group px-10 py-4 text-sm font-bold text-white bg-gradient-to-r from-neonIndigo to-purple-600 rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all text-center flex items-center justify-center gap-2">
                  See Our Packages <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link href="/contact" className="px-10 py-4 text-sm font-bold text-gray-300 border border-white/10 rounded-full hover:bg-white/5 transition-all text-center">
                  Get a Free Quote
                </Link>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 1 }} className="hidden lg:block relative">
               <div className="absolute inset-0 bg-indigo-500/20 blur-[120px] scale-75 opacity-50" />
               <MagicBento className="!p-0 overflow-hidden shadow-3xl">
                  <div className="flex items-center gap-2 px-6 py-4 bg-white/5 border-b border-white/5">
                    <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-500/40" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" /><div className="w-2.5 h-2.5 rounded-full bg-green-500/40" /></div>
                    <div className="flex-1 ml-4 px-4 py-1.5 bg-black/40 rounded-full text-[10px] text-gray-500 font-mono flex items-center gap-2">
                      <Globe className="w-3 h-3" /> paramnexus.in/your-site
                    </div>
                  </div>
                  <div className="p-10 space-y-6">
                    <div className="h-6 w-3/4 bg-indigo-500/20 rounded-lg animate-pulse" />
                    <div className="h-3 w-full bg-white/5 rounded-lg" />
                    <div className="h-3 w-5/6 bg-white/5 rounded-lg" />
                    <div className="grid grid-cols-3 gap-4 pt-6">
                      {[1,2,3].map(i => (<div key={i} className="h-24 bg-white/5 rounded-2xl border border-white/10" />))}
                    </div>
                    <div className="h-12 w-1/3 bg-indigo-500/40 rounded-xl mt-6 shadow-[0_0_20px_rgba(99,102,241,0.2)]" />
                  </div>
               </MagicBento>
            </motion.div>
          </div>
          
          {/* Stats */}
          <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-white/5 pt-16">
            <AnimatedCounter end={75} suffix="%" className="text-4xl font-display font-bold text-white mb-2" labelClassName="text-[10px] font-bold text-gray-500 uppercase tracking-widest" label="Judge credibility by website" />
            <AnimatedCounter end={88} suffix="%" className="text-4xl font-display font-bold text-white mb-2" labelClassName="text-[10px] font-bold text-gray-500 uppercase tracking-widest" label="Search before visiting locally" />
            <AnimatedCounter end={53} suffix="%" className="text-4xl font-display font-bold text-white mb-2" labelClassName="text-[10px] font-bold text-gray-500 uppercase tracking-widest" label="Leave if page loads slowly" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-obsidian py-24 lg:py-32 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-20 leading-tight">
            What a Param Nexus Website
            <br />
            <GradientText>Gives You</GradientText>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <MagicBento key={i} className="h-full">
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-indigo-400 group-hover:scale-110 transition-transform duration-500">
                  {f.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-3 tracking-tight">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{f.body}</p>
              </MagicBento>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-obsidian py-24 lg:py-32 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-20 leading-tight">
            Choose the Plan That
            <br />
            <GradientText>Fits Your Business</GradientText>
          </h2>
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {pricingTiers.map((tier, i) => (
              <MagicBento 
                key={i} 
                className={`flex flex-col relative !p-0 ${tier.popular ? "border-indigo-500/40 shadow-[0_0_40px_rgba(99,102,241,0.1)] lg:-translate-y-4" : ""}`}
              >
                <div className="p-8 lg:p-10 flex flex-col h-full">
                  <h3 className="font-display text-2xl font-bold mb-2 text-white group-hover:text-indigo-400 transition-colors">
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl font-display font-bold text-white">{tier.price}</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-8 leading-relaxed h-12">
                    {tier.perfect}
                  </p>
                  
                  <div className="space-y-4 mb-10 flex-1">
                    {tier.features.map((f, idx) => (
                      <div key={idx} className="flex items-start gap-3 group/feat">
                        <Check className="w-4 h-4 mt-1 text-indigo-400 shrink-0 group-hover/feat:scale-110 transition-transform" />
                        <span className="text-sm text-gray-300 group-hover/feat:text-white transition-colors">{f}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2 mb-8 p-3 rounded-xl bg-white/5 border border-white/5">
                     <Zap className="w-3 h-3 text-indigo-400" />
                     <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Delivered in {tier.delivery}</p>
                  </div>
                  
                  <Link 
                    href="/contact" 
                    className={`group/btn w-full py-4 text-sm font-bold rounded-2xl text-center transition-all flex items-center justify-center gap-2 ${tier.popular ? "bg-indigo-500 text-white shadow-xl hover:shadow-indigo-500/30" : "bg-white/5 text-white hover:bg-white/10"}`}
                  >
                    {tier.cta} <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
                {/* Internal neon backglow */}
                <div className={`absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-[100px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${tier.popular ? "bg-indigo-500/10" : "bg-white/5"}`} />
              </MagicBento>
            ))}
          </div>
          
          <div className="mt-16 max-w-xl mx-auto bg-[#121216]/60 backdrop-blur-md p-8 text-center border border-dashed border-white/10 rounded-3xl">
             <p className="text-base text-gray-400">
               A Delhi agency charges <strong className="text-white">₹80,000–₹2,50,000</strong> for the same work. 
               <br />
               We charge <strong className="text-indigo-400 font-bold">₹8,999–₹39,999</strong> — and deliver in 15 days.
             </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-obsidian py-24 lg:py-32 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-20 leading-tight">
            Our Website
            <br />
            <GradientText>Development Process</GradientText>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((s, i) => (
              <MagicBento key={i} className="flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
                  {s.icon}
                </div>
                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.25em] block mb-2">{s.days}</span>
                <h3 className="font-display text-xl font-bold text-white mb-3 tracking-tight">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{s.desc}</p>
              </MagicBento>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-obsidian py-24 lg:py-32 relative border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="font-display text-4xl font-bold text-white text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-2">
            {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
          </div>
          <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="group px-10 py-4 text-sm font-bold text-white bg-gradient-to-r from-neonIndigo to-purple-600 rounded-full shadow-2xl flex items-center gap-2 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all">
              <ClipboardList className="w-4 h-4" /> Get a Free Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
