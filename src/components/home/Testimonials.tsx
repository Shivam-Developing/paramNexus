"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";
import { motion } from "framer-motion";

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
    <div className="premium-glass p-8 rounded-[2rem] w-[320px] lg:w-[400px] shrink-0 mx-3 premium-glass-hover">
      <div className="flex gap-1 mb-6">
        {Array.from({ length: t.rating }).map((_, i) => (
          <span key={i} className="text-neonIndigo text-lg">★</span>
        ))}
      </div>
      <p className="text-gray-300 leading-relaxed mb-8 italic text-base">
        &ldquo;{t.text}&rdquo;
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neonIndigo to-cyberCyan flex items-center justify-center font-bold text-white shadow-lg">
           {t.name[0]}
        </div>
        <div>
          <p className="text-base font-bold text-white">{t.name}</p>
          <p className="text-xs text-gray-500 uppercase tracking-widest">{t.business}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const row1 = placeholderTestimonials.slice(0, 3);
  const row2 = placeholderTestimonials.slice(3);

  return (
    <SectionWrapper className="bg-obsidian py-24 lg:py-32 overflow-hidden relative">
      {/* Ambient bleed */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-neonIndigo/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center">
          Real Businesses. <br /><span className="text-gradient-cyan">Real Results.</span>
        </h2>
      </div>

      {/* Row 1 */}
      <div className="mb-8 overflow-hidden logo-loop-fade" style={{'--fade-color': '#050507'} as React.CSSProperties}>
        <div className="flex animate-marquee w-max py-4">
          {[...row1, ...row1, ...row1, ...row1].map((t, i) => (
            <TestimonialCard key={`r1-${i}`} t={t} />
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="overflow-hidden logo-loop-fade" style={{'--fade-color': '#050507'} as React.CSSProperties}>
        <div className="flex animate-marquee-reverse w-max py-4">
          {[...row2, ...row2, ...row2, ...row2].map((t, i) => (
            <TestimonialCard key={`r2-${i}`} t={t} />
          ))}
        </div>
      </div>

      {/* Founding Client CTA */}
      <div className="max-w-3xl mx-auto mt-24 px-4 relative z-10">
        <div className="premium-glass p-10 lg:p-14 text-center rounded-[3rem] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-neonIndigo/5 to-cyberCyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-6">
            🌟 Become One of Our <br />First 10 Founding Clients
          </h3>
          <p className="text-gray-400 leading-relaxed mb-4 max-w-lg mx-auto">
            Get priority attention, founding-member pricing, and a permanent
            &ldquo;Founding Client&rdquo; badge on our website.
          </p>
          <p className="text-neonIndigo font-bold mb-10 text-sm uppercase tracking-widest">
            First 10 clients only — 3 slots already claimed.
          </p>
          <Link
            href="/contact"
            className="px-10 py-4 text-sm font-bold text-white bg-gradient-to-r from-neonIndigo to-purple-600 rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-300"
          >
            Apply as a Founding Client →
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
