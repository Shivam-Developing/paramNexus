"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";

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
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/5 min-w-[300px] max-w-[340px] shrink-0 mx-2">
      <div className="flex gap-1 mb-3">
        {Array.from({ length: t.rating }).map((_, i) => (
          <span key={i} className="text-gold text-sm">★</span>
        ))}
      </div>
      <p className="text-sm text-charcoal/70 leading-relaxed mb-4 italic">
        &ldquo;{t.text}&rdquo;
      </p>
      <div>
        <p className="text-sm font-semibold text-darkFooter">{t.name}</p>
        <p className="text-xs text-charcoal/50">{t.business}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const row1 = placeholderTestimonials.slice(0, 3);
  const row2 = placeholderTestimonials.slice(3);

  return (
    <SectionWrapper className="bg-offWhite py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-darkFooter text-center">
          Real Businesses. <span className="text-teal">Real Results.</span>
        </h2>
      </div>

      {/* Marquee Row 1 — Left */}
      <div className="mb-4 overflow-hidden">
        <div className="flex animate-marquee w-max">
          {[...row1, ...row1, ...row1, ...row1].map((t, i) => (
            <TestimonialCard key={`r1-${i}`} t={t} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 — Right */}
      <div className="overflow-hidden">
        <div className="flex animate-marquee-reverse w-max">
          {[...row2, ...row2, ...row2, ...row2].map((t, i) => (
            <TestimonialCard key={`r2-${i}`} t={t} />
          ))}
        </div>
      </div>

      {/* Founding Client CTA */}
      <div className="max-w-2xl mx-auto mt-14 px-4">
        <div className="border-2 border-gold/40 rounded-2xl p-8 bg-gold/5 text-center">
          <h3 className="font-display text-xl font-bold text-darkFooter mb-3">
            🌟 Become One of Our First 10 Founding Clients
          </h3>
          <p className="text-sm text-charcoal/60 leading-relaxed mb-2">
            Get priority attention, founding-member pricing, and a permanent
            &ldquo;Founding Client&rdquo; badge on our website.
          </p>
          <p className="text-sm text-gold font-semibold mb-5">
            First 10 clients only — 3 slots already claimed.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-gold hover:bg-gold-dark rounded-full transition-colors"
          >
            Apply as a Founding Client →
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
