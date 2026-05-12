"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CheckCircle, Loader2, Calendar } from "lucide-react";
import BlurText from "@/components/animations/BlurText";

const businessTypes = ["Clinic / Hospital", "Coaching Institute", "Real Estate", "Restaurant / Café", "Hotel / Heritage Property", "Jewellery", "Retail / Boutique", "Other"];
const serviceOptions = ["Website Development", "Social Media Management", "KliqueNexus — Video Content", "Digital Identity Bundle", "Newspaper Advertising", "Not Sure — Tell Me What I Need"];

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success">("idle");
  const [form, setForm] = useState({ fullName: "", businessName: "", businessType: "", phone: "", services: [] as string[], message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!form.businessName.trim()) e.businessName = "Business name is required";
    if (!form.businessType) e.businessType = "Please select a business type";
    if (!form.phone.match(/^[6-9]\d{9}$/)) e.phone = "Enter a valid 10-digit Indian phone number";
    if (form.services.length === 0) e.services = "Please select at least one service";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setFormState("loading");
    setTimeout(() => setFormState("success"), 1500);
  };

  const toggleService = (s: string) => {
    setForm(prev => ({
      ...prev,
      services: prev.services.includes(s) ? prev.services.filter(x => x !== s) : [...prev.services, s],
    }));
  };

  return (
    <div className="bg-obsidian min-h-screen pt-32 pb-24 overflow-hidden relative">
      {/* Ambient backgrounds */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyberCyan/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <BlurText 
            text="Your Digital Transformation Starts With One Conversation."
            className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-8"
            animateBy="words"
            direction="top"
          />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            No sales pressure. No jargon. Just an honest conversation about
            what your business needs online. It&apos;s free. We actually pick up the phone.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20">
          {/* Left — Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            {formState === "success" ? (
              <div className="premium-glass p-16 text-center rounded-3xl">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", damping: 12 }}>
                  <CheckCircle className="w-20 h-20 text-neonIndigo mx-auto mb-6" />
                </motion.div>
                <h3 className="font-display text-3xl font-bold text-white mb-4">Received!</h3>
                <p className="text-gray-400 text-lg">Our team will call you within 2 hours.</p>
                <button onClick={() => setFormState("idle")} className="mt-10 text-neonIndigo font-bold hover:underline">Send another inquiry</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="premium-glass p-8 lg:p-12 rounded-[2.5rem] space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  {/* Full Name */}
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 block ml-1">Full Name *</label>
                    <input type="text" value={form.fullName} onChange={e => setForm(p => ({ ...p, fullName: e.target.value }))} className={`w-full px-5 py-4 rounded-2xl bg-white/5 border ${errors.fullName ? "border-red-500" : "border-white/10"} text-white focus:outline-none focus:ring-2 focus:ring-neonIndigo/20 focus:border-neonIndigo transition-all`} placeholder="Your full name" />
                    {errors.fullName && <p className="text-[10px] text-red-500 mt-2 font-bold ml-1 uppercase tracking-wider">{errors.fullName}</p>}
                  </div>
                  {/* Business Name */}
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 block ml-1">Business Name *</label>
                    <input type="text" value={form.businessName} onChange={e => setForm(p => ({ ...p, businessName: e.target.value }))} className={`w-full px-5 py-4 rounded-2xl bg-white/5 border ${errors.businessName ? "border-red-500" : "border-white/10"} text-white focus:outline-none focus:ring-2 focus:ring-neonIndigo/20 focus:border-neonIndigo transition-all`} placeholder="Your business name" />
                    {errors.businessName && <p className="text-[10px] text-red-500 mt-2 font-bold ml-1 uppercase tracking-wider">{errors.businessName}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  {/* Business Type */}
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 block ml-1">Business Type *</label>
                    <select value={form.businessType} onChange={e => setForm(p => ({ ...p, businessType: e.target.value }))} className={`w-full px-5 py-4 rounded-2xl bg-white/5 border ${errors.businessType ? "border-red-500" : "border-white/10"} text-white focus:outline-none focus:ring-2 focus:ring-neonIndigo/20 focus:border-neonIndigo transition-all appearance-none cursor-pointer`}>
                      <option value="" className="bg-obsidian">Select your industry</option>
                      {businessTypes.map(t => <option key={t} value={t} className="bg-obsidian">{t}</option>)}
                    </select>
                    {errors.businessType && <p className="text-[10px] text-red-500 mt-2 font-bold ml-1 uppercase tracking-wider">{errors.businessType}</p>}
                  </div>
                  {/* Phone */}
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 block ml-1">Phone Number *</label>
                    <div className="flex">
                      <span className="px-5 py-4 bg-white/5 rounded-l-2xl border border-r-0 border-white/10 text-sm text-gray-500 font-bold">+91</span>
                      <input type="tel" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value.replace(/\D/g, "").slice(0, 10) }))} className={`flex-1 px-5 py-4 rounded-r-2xl bg-white/5 border ${errors.phone ? "border-red-500" : "border-white/10"} text-white focus:outline-none focus:ring-2 focus:ring-neonIndigo/20 focus:border-neonIndigo transition-all`} placeholder="XXXXXXXXXX" />
                    </div>
                    {errors.phone && <p className="text-[10px] text-red-500 mt-2 font-bold ml-1 uppercase tracking-wider">{errors.phone}</p>}
                  </div>
                </div>

                {/* Services */}
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 block ml-1">What are you looking for? *</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {serviceOptions.map(s => (
                      <label key={s} className={`flex items-center gap-4 px-4 py-4 rounded-2xl border cursor-pointer transition-all ${form.services.includes(s) ? "bg-neonIndigo/10 border-neonIndigo text-white" : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"}`}>
                        <input type="checkbox" checked={form.services.includes(s)} onChange={() => toggleService(s)} className="sr-only" />
                        <div className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center shrink-0 transition-all ${form.services.includes(s) ? "bg-neonIndigo border-neonIndigo" : "border-white/20"}`}>
                          {form.services.includes(s) && <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>}
                        </div>
                        <span className="text-sm font-medium">{s}</span>
                      </label>
                    ))}
                  </div>
                  {errors.services && <p className="text-[10px] text-red-500 mt-2 font-bold ml-1 uppercase tracking-wider">{errors.services}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 block ml-1">Message (Optional)</label>
                  <textarea value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} rows={4} className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-neonIndigo/20 focus:border-neonIndigo transition-all resize-none" placeholder="Tell us about your business goals..." />
                </div>

                {/* Submit */}
                <button type="submit" disabled={formState === "loading"} className="w-full py-5 bg-gradient-to-r from-neonIndigo to-purple-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] transition-all flex items-center justify-center gap-3 disabled:opacity-70">
                  {formState === "loading" ? <><Loader2 className="w-6 h-6 animate-spin" /> Processing...</> : "🚀 Submit — Get My Free Audit"}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right — Contact Details */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} className="space-y-8">
            <div className="premium-glass p-8 lg:p-10 rounded-[2.5rem] space-y-10">
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-neonIndigo/20 transition-colors">
                  <Phone className="w-5 h-5 text-neonIndigo" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Call / WhatsApp</p>
                  <a href="tel:+918744003727" className="text-lg text-white hover:text-neonIndigo transition-colors block font-display font-bold">+91 87440 03727</a>
                  <a href="tel:+918619620062" className="text-lg text-white hover:text-neonIndigo transition-colors block font-display font-bold mt-1">+91 86196 20062</a>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-neonIndigo/20 transition-colors">
                  <Mail className="w-5 h-5 text-neonIndigo" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Email</p>
                  <a href="mailto:hello@paramnexus.in" className="text-lg text-white hover:text-neonIndigo transition-colors font-display font-bold">hello@paramnexus.in</a>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-neonIndigo/20 transition-colors">
                  <MapPin className="w-5 h-5 text-neonIndigo" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Main Office</p>
                  <p className="text-gray-300 leading-relaxed font-medium">
                    Param Cloth Store, 22, Arjun Nagar Phatak Rd, <br />
                    Industrial Area, Kartarpura Phatak, <br />
                    Bais Godam, Jaipur, Rajasthan 302006
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-neonIndigo/20 transition-colors">
                  <Clock className="w-5 h-5 text-neonIndigo" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Working Hours</p>
                  <p className="text-gray-300 font-medium">Monday – Saturday</p>
                  <p className="text-gray-300 font-medium">10:00 AM – 7:00 PM</p>
                </div>
              </div>
            </div>

            <a href="https://wa.me/918744003727" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-8 py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-2xl transition-all shadow-xl group">
              <Calendar className="w-5 h-5 text-neonIndigo group-hover:scale-110 transition-transform" /> 
              Book a Free Strategy Call
            </a>

            <div className="bg-neonIndigo/5 border border-neonIndigo/10 rounded-[2rem] p-8 text-center">
              <p className="text-gray-400 text-sm leading-relaxed italic">
                &ldquo;We respond to every inquiry within <strong>2 business hours</strong>.
                A real person from our Jaipur team will call you back.
                No bots. No offshore teams. Just us.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
