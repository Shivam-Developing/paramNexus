"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CheckCircle, Loader2, Calendar } from "lucide-react";

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
    <>
      <section className="bg-offWhite pt-28 pb-20 lg:pt-32 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-darkFooter leading-[1.08]">
              Your Digital Transformation
              <br /><span className="text-teal">Starts With One Conversation.</span>
            </h1>
            <p className="mt-6 text-charcoal/60 text-lg max-w-xl mx-auto">
              No sales pressure. No jargon. Just an honest 20 minutes about
              what your business needs online. It&apos;s free. We actually pick up the phone.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-[3fr_2fr] gap-12">
            {/* Left — Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              {formState === "success" ? (
                <div className="bg-white rounded-2xl p-12 shadow-sm border border-black/5 text-center">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="font-display text-2xl font-bold text-darkFooter mb-2">Received!</h3>
                  <p className="text-charcoal/60">We&apos;ll call you within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border border-black/5 space-y-5">
                  {/* Full Name */}
                  <div>
                    <label className="text-sm font-semibold text-darkFooter mb-1.5 block">Full Name *</label>
                    <input type="text" value={form.fullName} onChange={e => setForm(p => ({ ...p, fullName: e.target.value }))} className={`w-full px-4 py-3 rounded-xl border ${errors.fullName ? "border-red-400" : "border-black/10"} bg-offWhite/50 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-colors`} placeholder="Your full name" />
                    {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                  </div>
                  {/* Business Name */}
                  <div>
                    <label className="text-sm font-semibold text-darkFooter mb-1.5 block">Business Name *</label>
                    <input type="text" value={form.businessName} onChange={e => setForm(p => ({ ...p, businessName: e.target.value }))} className={`w-full px-4 py-3 rounded-xl border ${errors.businessName ? "border-red-400" : "border-black/10"} bg-offWhite/50 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-colors`} placeholder="Your business name" />
                    {errors.businessName && <p className="text-xs text-red-500 mt-1">{errors.businessName}</p>}
                  </div>
                  {/* Business Type */}
                  <div>
                    <label className="text-sm font-semibold text-darkFooter mb-1.5 block">Business Type *</label>
                    <select value={form.businessType} onChange={e => setForm(p => ({ ...p, businessType: e.target.value }))} className={`w-full px-4 py-3 rounded-xl border ${errors.businessType ? "border-red-400" : "border-black/10"} bg-offWhite/50 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-colors`}>
                      <option value="">Select your industry</option>
                      {businessTypes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    {errors.businessType && <p className="text-xs text-red-500 mt-1">{errors.businessType}</p>}
                  </div>
                  {/* Phone */}
                  <div>
                    <label className="text-sm font-semibold text-darkFooter mb-1.5 block">Phone Number *</label>
                    <div className="flex">
                      <span className="px-4 py-3 bg-warmGray rounded-l-xl border border-r-0 border-black/10 text-sm text-charcoal/50">+91</span>
                      <input type="tel" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value.replace(/\D/g, "").slice(0, 10) }))} className={`flex-1 px-4 py-3 rounded-r-xl border ${errors.phone ? "border-red-400" : "border-black/10"} bg-offWhite/50 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-colors`} placeholder="XXXXXXXXXX" />
                    </div>
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>
                  {/* Services */}
                  <div>
                    <label className="text-sm font-semibold text-darkFooter mb-2 block">What are you looking for? *</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {serviceOptions.map(s => (
                        <label key={s} className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg border cursor-pointer transition-all text-sm ${form.services.includes(s) ? "bg-teal/10 border-teal text-teal font-medium" : "bg-offWhite/50 border-black/10 text-charcoal/60 hover:bg-warmGray"}`}>
                          <input type="checkbox" checked={form.services.includes(s)} onChange={() => toggleService(s)} className="sr-only" />
                          <div className={`w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 ${form.services.includes(s) ? "bg-teal border-teal" : "border-black/20"}`}>
                            {form.services.includes(s) && <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>}
                          </div>
                          {s}
                        </label>
                      ))}
                    </div>
                    {errors.services && <p className="text-xs text-red-500 mt-1">{errors.services}</p>}
                  </div>
                  {/* Message */}
                  <div>
                    <label className="text-sm font-semibold text-darkFooter mb-1.5 block">Message (Optional)</label>
                    <textarea value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} rows={3} className="w-full px-4 py-3 rounded-xl border border-black/10 bg-offWhite/50 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-colors resize-none" placeholder="Tell us about your business or any specific requirements..." />
                  </div>
                  {/* Submit */}
                  <button type="submit" disabled={formState === "loading"} className="w-full py-4 bg-teal text-white font-bold rounded-xl hover:bg-teal-dark transition-colors flex items-center justify-center gap-2 text-sm disabled:opacity-70 mobile-full-width-cta">
                    {formState === "loading" ? <><Loader2 className="w-5 h-5 animate-spin" /> Submitting...</> : "🚀 Submit — Get My Free Audit Within 24 Hours"}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Right — Contact Details */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/5 space-y-5">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-teal mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-darkFooter">Call / WhatsApp</p>
                    <a href="tel:+918744003727" className="text-sm text-charcoal/60 hover:text-teal transition-colors block">+91 87440 03727 (Shivam)</a>
                    <a href="tel:+918619620062" className="text-sm text-charcoal/60 hover:text-teal transition-colors block">+91 86196 20062 (Ayush)</a>
                    <p className="text-xs text-charcoal/40 mt-1">(We answer both — Mon to Sat)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-teal mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-darkFooter">Email</p>
                    <a href="mailto:hello@paramnexus.in" className="text-sm text-charcoal/60 hover:text-teal transition-colors">hello@paramnexus.in</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-darkFooter">Office</p>
                    <p className="text-sm text-charcoal/60">Jaipur, Rajasthan 302001</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-teal mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-darkFooter">Working Hours</p>
                    <p className="text-sm text-charcoal/60">Monday – Saturday</p>
                    <p className="text-sm text-charcoal/60">10:00 AM – 7:00 PM</p>
                  </div>
                </div>
              </div>

              <a href="#" className="flex items-center justify-center gap-2 px-5 py-3 bg-teal/10 text-teal font-semibold rounded-xl hover:bg-teal/20 transition-colors text-sm">
                <Calendar className="w-4 h-4" /> Book a Free 30-Minute Strategy Call
              </a>

              <div className="bg-gold/5 border border-gold/20 rounded-2xl p-5">
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  We respond to every inquiry within <strong>2 business hours</strong>.
                  A real person from our Jaipur team will call you back.
                  <br /><strong>No bots. No offshore teams. Just us.</strong>
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-2xl overflow-hidden h-48 bg-warmGray border border-black/5 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-teal/30 mx-auto mb-2" />
                  <p className="text-sm text-charcoal/40">Jaipur, Rajasthan</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
