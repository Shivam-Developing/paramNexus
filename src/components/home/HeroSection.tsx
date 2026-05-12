"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import TypewriterBadge from "@/components/ui/TypewriterBadge";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-offWhite overflow-hidden pt-20 lg:pt-0 flex items-center">
      {/* Ambient blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-teal/[0.03] blur-[120px] animate-blob-pulse" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold/[0.05] blur-[100px] animate-blob-pulse [animation-delay:6s]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-0">
        <div className="grid lg:grid-cols-[55fr_45fr] gap-12 lg:gap-8 items-center">
          {/* Left Column — Text */}
          <div className="order-1">
            <TypewriterBadge
              strings={[
                "Jaipur's First AI-Powered Growth Agency",
                "Where Print Legacy Meets Digital Future",
                "Your Business Deserves to Be Found",
              ]}
              className="mb-6"
            />

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight text-darkFooter"
            >
              Your Customers
              <br />
              Are Searching
              <br />
              For You Online.
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-teal"
              >
                Are You Even There?
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-6 text-base sm:text-lg text-charcoal/70 max-w-lg leading-relaxed"
            >
              Param Nexus builds websites, manages social media, and creates videos
              for Jaipur&apos;s local businesses — using AI to deliver agency-quality
              results at prices the Jaipur market can actually afford.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-teal rounded-full hover:shadow-lg hover:shadow-teal/25 hover:-translate-y-1 transition-all duration-300 mobile-full-width-cta"
              >
                🔍 Get Your Free Digital Audit
              </Link>
              <a
                href="https://wa.me/918744003727"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-teal border-2 border-teal rounded-full hover:bg-teal hover:text-white transition-all duration-300 mobile-full-width-cta"
              >
                💬 Talk on WhatsApp
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="mt-4 text-xs text-charcoal/50"
            >
              No cost. No commitment. Honest answer in 24 hours.
            </motion.p>
          </div>

          {/* Right Column — Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="order-2 flex justify-center lg:justify-end"
          >
            <div className="animate-float w-full max-w-sm">
              <div className="bg-white rounded-2xl shadow-xl shadow-teal/10 border border-black/5 overflow-hidden">
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-warmGray/50 border-b border-black/5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 ml-2 px-3 py-1 bg-white rounded-md text-xs text-charcoal/40 font-mono">
                    🌐 paramnexus.in/yourbusiness
                  </div>
                </div>
                {/* Card body */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-charcoal">Digital Presence Score</span>
                    <span className="text-2xl font-display font-bold text-teal">82%</span>
                  </div>
                  <div className="w-full h-2 bg-warmGray rounded-full mb-5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "82%" }}
                      transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-teal to-teal-light rounded-full"
                    />
                  </div>
                  <div className="space-y-2.5">
                    {[
                      { label: "Website", done: true },
                      { label: "Google Listed", done: true },
                      { label: "Instagram", done: true },
                      { label: "Video Content", done: false },
                      { label: "SEO Setup", done: false },
                      { label: "WhatsApp Auto", done: false },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-2.5">
                        <span className={item.done ? "text-green-500" : "text-red-400"}>
                          {item.done ? "✅" : "❌"}
                        </span>
                        <span className={`text-sm ${item.done ? "text-charcoal" : "text-charcoal/50"}`}>
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="mt-5 w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-teal rounded-lg hover:bg-teal-dark transition-colors"
                  >
                    Fix My Presence →
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
