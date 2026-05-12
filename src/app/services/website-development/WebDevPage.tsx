"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import StaggeredGrid from "@/components/ui/StaggeredGrid";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

const features = [
  { emoji: "⚡", title: "Loads in Under 3 Seconds", body: "Slow sites lose 53% of visitors before the page even opens. Ours are speed-optimized by default." },
  { emoji: "📱", title: "Mobile-First Design", body: "78% of local searches happen on phones. Your site looks perfect on every screen, every device." },
  { emoji: "🔍", title: "Built-in SEO Foundation", body: "Proper meta tags, schema markup, and page structure so Google finds you from Day 1." },
  { emoji: "💬", title: "WhatsApp & Call Button", body: "One tap to contact you directly. Converts visitors into inquiries instantly." },
  { emoji: "🤖", title: "AI Chatbot Ready", body: "Never miss a customer inquiry — even at midnight. Your site answers questions while you sleep." },
  { emoji: "📍", title: "Google Maps Integration", body: "Customers find your exact location without friction. Essential for every walk-in business." },
];

const pricingTiers = [
  {
    name: "STARTER", price: "₹8,999", popular: false, perfect: "Perfect for: New businesses, shops, clinics, and freelancers who need a clean digital presence fast.",
    features: ["5 Pages (Home, About, Services, Gallery, Contact)", "Mobile Responsive Design", "WhatsApp Chat & Call Button", "Google Maps Integration", "Basic On-Page SEO Setup", "Contact Form", "Social Media Links", "1 Month Free Support"],
    delivery: "⏱ Delivered in 10–12 Days", cta: "Get Started with Starter",
  },
  {
    name: "BUSINESS", price: "₹18,999", popular: true, perfect: "Perfect for: Established local businesses, coaching institutes, clinics, and retail stores wanting a complete digital presence.",
    features: ["Everything in Starter, plus —", "Up to 12 Pages", "AI Chatbot Integration", "Enquiry & Booking Forms", "Blog / News Section", "Google Analytics & Search Console", "Social Media Feed Integration", "Advanced On-Page SEO", "2 Months Free Support"],
    delivery: "⏱ Delivered in 12–15 Days", cta: "Get Started with Business",
  },
  {
    name: "PREMIUM", price: "₹39,999", popular: false, perfect: "Perfect for: Hotels, real estate developers, large coaching brands, and jewelers needing a full custom digital experience.",
    features: ["Everything in Business, plus —", "Fully Custom UI/UX Design", "Content Management System (CMS)", "Appointment / Booking System", "Core Web Vitals Optimization", "Multi-location Support", "Advanced Analytics Dashboard", "3 Months Priority Support"],
    delivery: "⏱ Delivered in 15–20 Days", cta: "Get Started with Premium",
  },
];

const processSteps = [
  { days: "Day 1–2", emoji: "📋", title: "Kickoff", desc: "Content brief, domain & hosting setup." },
  { days: "Day 3–5", emoji: "🎨", title: "Design", desc: "Full mockup shown for approval. You approve before we build." },
  { days: "Day 6–10", emoji: "⚙", title: "Development", desc: "Site built page by page. Daily progress visible to you." },
  { days: "Day 11–15", emoji: "🚀", title: "Launch", desc: "Final review, SEO check, go live." },
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
    <div className="border border-black/5 rounded-xl overflow-hidden bg-white">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left hover:bg-offWhite transition-colors">
        <span className="font-display text-base font-semibold text-darkFooter pr-4">{q}</span>
        {open ? <ChevronUp className="w-5 h-5 text-teal shrink-0" /> : <ChevronDown className="w-5 h-5 text-charcoal/40 shrink-0" />}
      </button>
      <div className={`overflow-hidden transition-all duration-400 ${open ? "max-h-40 pb-5 px-5" : "max-h-0"}`}>
        <p className="text-sm text-charcoal/60 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function WebDevPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-offWhite pt-28 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-darkFooter leading-[1.08]">
                Your Business Deserves a Website
                <br />
                <span className="text-teal">That Works as Hard as You Do.</span>
              </h1>
              <p className="mt-6 text-charcoal/60 text-lg leading-relaxed">
                75% of consumers judge a business&apos;s credibility by its website alone.
                If yours is outdated, broken, or nonexistent — you&apos;re losing customers
                before they even speak to you.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="#pricing" className="px-6 py-3.5 text-sm font-semibold text-white bg-teal rounded-full hover:bg-teal-dark transition-colors text-center mobile-full-width-cta">See Our Packages</a>
                <Link href="/contact" className="px-6 py-3.5 text-sm font-semibold text-teal border-2 border-teal rounded-full hover:bg-teal hover:text-white transition-all text-center mobile-full-width-cta">Get a Free Quote in 10 Minutes</Link>
              </div>
            </motion.div>
            {/* Browser Mockup */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="hidden lg:block">
              <div className="bg-white rounded-2xl shadow-xl border border-black/5 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-warmGray/50 border-b border-black/5">
                  <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-400" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><div className="w-2.5 h-2.5 rounded-full bg-green-400" /></div>
                  <div className="flex-1 ml-2 px-3 py-1 bg-white rounded-md text-xs text-charcoal/40 font-mono">paramnexus.in/your-website</div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="h-4 w-3/4 bg-teal/10 rounded" /><div className="h-3 w-full bg-warmGray rounded" /><div className="h-3 w-5/6 bg-warmGray rounded" />
                  <div className="grid grid-cols-3 gap-3 pt-4">{[1,2,3].map(i => (<div key={i} className="h-20 bg-teal/5 rounded-lg border border-teal/10" />))}</div>
                  <div className="h-10 w-1/3 bg-teal rounded-lg mt-4" />
                </div>
              </div>
            </motion.div>
          </div>
          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            <AnimatedCounter end={75} suffix="%" className="text-teal" labelClassName="text-charcoal/50" label="Judge credibility by website design" />
            <AnimatedCounter end={88} suffix="%" className="text-teal" labelClassName="text-charcoal/50" label="Search before visiting locally" />
            <AnimatedCounter end={53} suffix="%" className="text-teal" labelClassName="text-charcoal/50" label="Leave if page loads slowly" />
          </div>
        </div>
      </section>

      {/* Features */}
      <SectionWrapper className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-darkFooter text-center mb-14">What a Param Nexus Website <span className="text-teal">Gives You</span></h2>
          <StaggeredGrid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(f => (
              <div key={f.title} className="flex gap-4"><span className="text-2xl shrink-0 mt-1">{f.emoji}</span><div><h3 className="font-display text-base font-bold text-darkFooter mb-1">{f.title}</h3><p className="text-sm text-charcoal/60 leading-relaxed">{f.body}</p></div></div>
            ))}
          </StaggeredGrid>
        </div>
      </SectionWrapper>

      {/* Pricing */}
      <SectionWrapper id="pricing" className="bg-offWhite py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-darkFooter text-center mb-14">Choose the Plan That <span className="text-teal">Fits Your Business</span></h2>
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {pricingTiers.map(tier => (
              <div key={tier.name} className={`rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${tier.popular ? "bg-teal text-white lg:-translate-y-2 shadow-lg shadow-teal/20 relative" : "bg-white shadow-md border border-black/5"}`}>
                {tier.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold bg-gold text-deepTeal rounded-full">⭐ MOST POPULAR</span>}
                <h3 className="font-display text-xl font-bold mb-1">{tier.name}</h3>
                <p className={`text-3xl font-display font-bold mb-3 ${tier.popular ? "text-gold-light" : "text-teal"}`}>{tier.price}</p>
                <p className={`text-sm mb-5 leading-relaxed ${tier.popular ? "text-white/70" : "text-charcoal/50"}`}>{tier.perfect}</p>
                <div className="space-y-2.5 mb-6">{tier.features.map(f => (<div key={f} className="flex items-start gap-2"><Check className={`w-4 h-4 mt-0.5 shrink-0 ${tier.popular ? "text-gold-light" : "text-teal"}`} /><span className={`text-sm ${tier.popular ? "text-white/90" : "text-charcoal/70"}`}>{f}</span></div>))}</div>
                <p className={`text-xs mb-4 ${tier.popular ? "text-white/60" : "text-charcoal/40"}`}>{tier.delivery}</p>
                <Link href="/contact" className={`w-full inline-flex items-center justify-center px-5 py-3 text-sm font-bold rounded-xl transition-colors ${tier.popular ? "bg-white text-teal hover:bg-offWhite" : "bg-teal text-white hover:bg-teal-dark"}`}>{tier.cta}</Link>
              </div>
            ))}
          </div>
          {/* Maintenance */}
          <div className="mt-8 max-w-md mx-auto bg-white rounded-2xl p-6 shadow-sm border border-black/5 text-center">
            <h3 className="font-display text-lg font-bold text-darkFooter">MAINTENANCE RETAINER — <span className="text-teal">₹1,999/month</span></h3>
            <p className="text-sm text-charcoal/50 mt-2">Keep your website alive, secure, and up to date every month.</p>
            <div className="mt-4 space-y-2 text-left">{["Hosting & Uptime Monitoring","Monthly Content Updates (up to 5 changes)","Security Patches & Backups","Speed Optimization Checks","Priority Support Response"].map(f=>(<div key={f} className="flex items-center gap-2"><Check className="w-4 h-4 text-teal" /><span className="text-sm text-charcoal/70">{f}</span></div>))}</div>
          </div>
          {/* Comparison */}
          <div className="mt-8 max-w-2xl mx-auto border-2 border-gold/40 rounded-2xl p-6 bg-gold/5 text-center">
            <p className="text-base text-charcoal/80 font-medium">A Delhi agency charges <strong>₹80,000–₹2,50,000</strong> for the same work. We charge <strong className="text-teal">₹8,999–₹39,999</strong> — and deliver in 15 days.</p>
          </div>
        </div>
      </SectionWrapper>

      {/* Process */}
      <SectionWrapper className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-darkFooter text-center mb-14">Our Website Development <span className="text-teal">Process</span></h2>
          <div className="hidden lg:flex items-start justify-between relative">
            <div className="absolute top-10 left-[12%] right-[12%] h-0.5 bg-teal/20"><div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-teal animate-traveling-dot" /></div>
            {processSteps.map(s => (
              <div key={s.title} className="relative flex flex-col items-center text-center w-1/4 px-4">
                <div className="w-20 h-20 rounded-full bg-teal/10 flex items-center justify-center mb-4 relative z-10 border-2 border-teal/20"><span className="text-2xl">{s.emoji}</span></div>
                <span className="text-xs font-bold text-teal/60 uppercase mb-1">{s.days}</span>
                <h3 className="font-display text-lg font-bold text-darkFooter mb-2">{s.title}</h3>
                <p className="text-sm text-charcoal/60">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="lg:hidden space-y-4">{processSteps.map(s => (<div key={s.title} className="bg-offWhite rounded-xl p-5 border border-black/5"><div className="flex items-center gap-4 mb-2"><div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center"><span className="text-xl">{s.emoji}</span></div><div><span className="text-xs font-bold text-teal/60 uppercase">{s.days}</span><h3 className="font-display text-base font-bold text-darkFooter">{s.title}</h3></div></div><p className="text-sm text-charcoal/60 ml-16">{s.desc}</p></div>))}</div>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper className="bg-offWhite py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-darkFooter text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-3">{faqs.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}</div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Link href="/contact" className="px-6 py-3 text-sm font-semibold text-white bg-teal rounded-full hover:bg-teal-dark transition-colors mobile-full-width-cta">📋 Get a Free Quote</Link>
            <a href="https://wa.me/918744003727" target="_blank" rel="noopener noreferrer" className="px-6 py-3 text-sm font-semibold text-teal border-2 border-teal rounded-full hover:bg-teal hover:text-white transition-all mobile-full-width-cta">💬 WhatsApp for Quick Enquiry</a>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
