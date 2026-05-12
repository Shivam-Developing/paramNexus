"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Award, ArrowRight } from "lucide-react";
import { MagicBento } from "@/components/MagicBento";
import { GradientText } from "@/components/GradientText";
import { LogoLoop } from "@/components/LogoLoop";

const placeholderTestimonials = [
  { name: "Rajesh K.", business: "Heritage Hotel, Amer", text: "Param Nexus transformed our online presence completely. We started getting direct bookings within the first month.", rating: 5 },
  { name: "Priya M.", business: "Coaching Institute, Gopalpura", text: "Our admissions doubled after they revamped our website and Instagram. Best investment we made.", rating: 5 },
  { name: "Vikram S.", business: "Jewellers, Johari Bazar", text: "They understood our brand perfectly. The reels they create showcase our collection beautifully.", rating: 5 },
  { name: "Dr. Sneha A.", business: "Dental Clinic, Malviya Nagar", text: "My appointment calendar is now full. Their Google Business optimization alone was worth it.", rating: 5 },
  { name: "Amit T.", business: "Real Estate, Mansarovar", text: "Professional team, great communication. Our property inquiries have increased 3x since working with them.", rating: 5 },
  { name: "Meena D.", business: "Boutique, C-Scheme", text: "Instagram went from 200 followers to 5000 in three months. Real, engaged followers — not bots.", rating: 5 },
];

function TestimonialCard({ t }: { t: typeof placeholderTestimonials[0] }) {
  return (
    <div className="relative group w-[350px] lg:w-[450px] shrink-0 mx-4 transform-none" style={{ transform: 'none' }}>
      <MagicBento className="h-full">
        <div className="flex gap-1.5 mb-6">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-indigo-400 text-indigo-400" />
          ))}
        </div>
        <p className="text-gray-300 leading-relaxed mb-10 italic text-base">
          &ldquo;{t.text}&rdquo;
        </p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg">
             {t.name[0]}
          </div>
          <div>
            <p className="text-base font-bold text-white">{t.name}</p>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-1">{t.business}</p>
          </div>
        </div>
        {/* Decorative quote icon */}
        <div className="absolute top-4 right-6 opacity-5">
           <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H13.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.017C7.46472 8 7.017 8.44772 7.017 9V12C7.017 12.5523 6.5693 13 6.017 13H5.017V21H6.017Z" /></svg>
        </div>
      </MagicBento>
    </div>
  );
}

export default function Testimonials() {
  const row1 = placeholderTestimonials.slice(0, 3);
  const row2 = placeholderTestimonials.slice(3);

  const row1Items = row1.map((t, i) => <TestimonialCard key={i} t={t} />);
  const row2Items = row2.map((t, i) => <TestimonialCard key={i} t={t} />);

  return (
    <section className="bg-obsidian py-24 lg:py-32 overflow-hidden relative border-t border-white/5">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10 text-center">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Real Businesses.
          <br />
          <GradientText>Real Results.</GradientText>
        </h2>
      </div>

      <div className="space-y-10">
        <LogoLoop items={row1Items} speed={40} gap={0} />
        <LogoLoop items={row2Items} speed={45} gap={0} />
      </div>

      {/* Founding Client CTA */}
      <div className="max-w-4xl mx-auto mt-28 px-4 relative z-10">
        <MagicBento className="text-center !p-10 lg:!p-16">
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase tracking-[0.2em]">
            <Award className="w-4 h-4" /> Founding Member Program
          </div>

          <h3 className="font-display text-3xl lg:text-4xl font-bold text-white mb-6">
            Become One of Our <br />First 10 Founding Clients
          </h3>
          <p className="text-gray-400 leading-relaxed mb-10 max-w-xl mx-auto text-lg">
            Get priority attention, founding-member pricing, and a permanent
            &ldquo;Founding Client&rdquo; badge on our website.
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-12">
             <div className="h-[1px] w-8 bg-indigo-500/30" />
             <p className="text-indigo-400 font-bold text-xs uppercase tracking-widest">
               Only 3 slots remaining
             </p>
             <div className="h-[1px] w-8 bg-indigo-500/30" />
          </div>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-10 py-5 text-sm font-bold text-white bg-gradient-to-r from-neonIndigo to-purple-600 rounded-full shadow-2xl hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] transition-all duration-500"
          >
            Apply as a Founding Client <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </MagicBento>
      </div>
    </section>
  );
}
