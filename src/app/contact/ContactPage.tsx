"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CheckCircle, Loader2, Calendar, ArrowRight } from "lucide-react";
import { Galaxy } from "@/components/Galaxy";
import { MagicBento } from "@/components/MagicBento";
import { BlurText } from "@/components/BlurText";
import { GradientText } from "@/components/GradientText";

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
    <div className="bg-obsidian min-h-screen pt-32 pb-24 overflow-hidden relative selection:bg-indigo-500/30">
      {/* Galaxy Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Galaxy className="opacity-40" />
      </div>
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-indigo-600/10 blur-[140px] rounded-full z-[1] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-[10]">
        <div className="text-center mb-16 lg:mb-24">
          <BlurText 
            text="Your Digital Transformation"
            className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"
          />
          <div className="mt-2">
            <GradientText className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              Starts With One Conversation.
            </GradientText>
          </div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-8 text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            No sales pressure. No jargon. Just an honest conversation about
            what your business needs online. It&apos;s free. We actually pick up the phone.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-20 items-start">
          {/* Left — Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            {formState === "success" ? (
              <MagicBento className="!p-16 text-center">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", damping: 12 }}>
                  <CheckCircle className="w-20 h-20 text-indigo-400 mx-auto mb-6" />
                </motion.div>
                <h3 className="font-display text-3xl font-bold text-white mb-4 tracking-tight">Received!</h3>
                <p className="text-gray-400 text-lg">Our team will call you within 2 hours.</p>
                <button onClick={() => setFormState("idle")} className="mt-10 text-indigo-400 font-bold hover:text-white transition-colors">Send another inquiry</button>
              </MagicBento>
            ) : (
              <MagicBento className="!p-8 lg:!p-12 space-y-10">
                <div className="grid sm:grid-cols-2 gap-8">
                  {/* Full Name */}
                  <div>
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3 block ml-1">Full Name *</label>
                    <input type="text" value={form.fullName} onChange={e => setForm(p => ({ ...p, fullName: e.target.value }))} className={`w-full px-5 py-4 rounded-xl bg-white/5 border ${errors.fullName ? "border-red-500/50" : "border-white/10"} text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/50 transition-all placeholder:text-gray-600`} placeholder="Your full name" />
                    {errors.fullName && <p className="text-[10px] text-red-500 mt-2 font-bold ml-1 uppercase tracking-wider">{errors.fullName}</p>}
                  </div>
                  {/* Business Name */}
                  <div>
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3 block ml-1">Business Name *</label>
                    <input type="text" value={form.businessName} onChange={e => setForm(p => ({ ...p, businessName: e.target.value }))} className={`w-full px-5 py-4 rounded-xl bg-white/5 border ${errors.businessName ? "border-red-500/50" : "border-white/10"} text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/50 transition-all placeholder:text-gray-600`} placeholder="Your business name" />
                    {errors.businessName && <p className="text-[10px] text-red-500 mt-2 font-bold ml-1 uppercase tracking-wider">{errors.businessName}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  {/* Business Type */}
                  <div>
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3 block ml-1">Business Type *</label>
                    <div className="relative">
                      <select value={form.businessType} onChange={e => setForm(p => ({ ...p, businessType: e.target.value }))} className={`w-full px-5 py-4 rounded-xl bg-white/5 border ${errors.businessType ? "border-red-500/50" : "border-white/10"} text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/50 transition-all appearance-none cursor-pointer`}>
                        <option value="" className="bg-obsidian">Select your industry</option>
                        {businessTypes.map(t => <option key={t} value={t} className="bg-obsidian">{t}</option>)}
                      </select>
                    </div>
                    {errors.businessType && <p className="text-[10px] text-red-500 mt-2 font-bold ml-1 uppercase tracking-wider">{errors.businessType}</p>}
                  </div>
                  {/* Phone */}
                  <div>
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3 block ml-1">Phone Number *</label>
                    <div className="flex">
                      <span className="px-5 py-4 bg-white/5 rounded-l-xl border border-r-0 border-white/10 text-xs text-gray-500 font-bold uppercase tracking-widest">+91</span>
                      <input type="tel" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value.replace(/\D/g, "").slice(0, 10) }))} className={`flex-1 px-5 py-4 rounded-r-xl bg-white/5 border ${errors.phone ? "border-red-500/50" : "border-white/10"} text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/50 transition-all placeholder:text-gray-600`} placeholder="XXXXXXXXXX" />
                    </div>
                    {errors.phone && <p className="text-[10px] text-red-500 mt-2 font-bold ml-1 uppercase tracking-wider">{errors.phone}</p>}
                  </div>
                </div>

                {/* Services */}
                <div>
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-5 block ml-1">What are you looking for? *</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {serviceOptions.map(s => (
                      <label key={s} className={`flex items-center gap-4 px-5 py-4 rounded-xl border cursor-pointer transition-all ${form.services.includes(s) ? "bg-indigo-500/10 border-indigo-500/40 text-white" : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"}`}>
                        <input type="checkbox" checked={form.services.includes(s)} onChange={() => toggleService(s)} className="sr-only" />
                        <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-all ${form.services.includes(s) ? "bg-indigo-500 border-indigo-500" : "border-white/20"}`}>
                          {form.services.includes(s) && <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>}
                        </div>
                        <span className="text-sm font-bold tracking-tight">{s}</span>
                      </label>
                    ))}
                  </div>
                  {errors.services && <p className="text-[10px] text-red-500 mt-2 font-bold ml-1 uppercase tracking-wider">{errors.services}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3 block ml-1">Message (Optional)</label>
                  <textarea value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} rows={4} className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/50 transition-all resize-none placeholder:text-gray-600" placeholder="Tell us about your business goals..." />
                </div>

                {/* Submit */}
                <button type="submit" disabled={formState === "loading"} className="w-full py-5 bg-gradient-to-r from-neonIndigo to-purple-600 text-white font-bold rounded-xl shadow-xl hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] transition-all flex items-center justify-center gap-3 disabled:opacity-70 group/sub">
                  {formState === "loading" ? <><Loader2 className="w-6 h-6 animate-spin" /> Processing...</> : <>🚀 Submit — Get My Free Audit <ArrowRight className="w-4 h-4 group-hover/sub:translate-x-1 transition-transform" /></>}
                </button>
              </MagicBento>
            )}
          </motion.div>

          {/* Right — Contact Details */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} className="space-y-6">
            <MagicBento className="!p-8 space-y-10">
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
                  <Phone className="w-5 h-5 text-indigo-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Call / WhatsApp</p>
                  <a href="tel:+918744003727" className="text-lg text-white hover:text-indigo-400 transition-colors block font-display font-bold tracking-tight">+91 87440 03727</a>
                  <a href="tel:+918619620062" className="text-lg text-white hover:text-indigo-400 transition-colors block font-display font-bold mt-1 tracking-tight">+91 86196 20062</a>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
                  <Mail className="w-5 h-5 text-indigo-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Email</p>
                  <a href="mailto:hello@paramnexus.in" className="text-lg text-white hover:text-indigo-400 transition-colors font-display font-bold tracking-tight">hello@paramnexus.in</a>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
                  <MapPin className="w-5 h-5 text-indigo-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Main Office</p>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">
                    Param Cloth Store, 22, Arjun Nagar Phatak Rd, <br />
                    Industrial Area, Kartarpura Phatak, <br />
                    Bais Godam, Jaipur, Rajasthan 302006
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
                  <Clock className="w-5 h-5 text-indigo-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Working Hours</p>
                  <p className="text-white font-bold tracking-tight">Monday – Saturday</p>
                  <p className="text-gray-400 text-sm">10:00 AM – 7:00 PM</p>
                </div>
              </div>
            </MagicBento>

            <a href="https://wa.me/918744003727" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-8 py-5 bg-[#121216] border border-white/10 text-white font-bold rounded-2xl transition-all shadow-xl group hover:border-indigo-500/50 hover:-translate-y-1">
              <Calendar className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform" /> 
              Book a Strategy Call
            </a>

            <div className="bg-indigo-500/5 border border-indigo-500/10 rounded-2xl p-8 text-center backdrop-blur-sm">
              <p className="text-gray-400 text-xs leading-relaxed italic">
                &ldquo;We respond to every inquiry within <strong>2 business hours</strong>.
                A real person from our Jaipur team will call you back.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
