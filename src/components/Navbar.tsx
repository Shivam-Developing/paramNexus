"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "🌐 Website Development", href: "/services/website-development" },
      { label: "📱 Social Media Marketing", href: "/services/social-media" },
      { label: "🎬 KliqueNexus — Video", href: "/kliquenexus" },
    ],
  },
  { label: "KliqueNexus", href: "/kliquenexus" },
  { label: "Our Legacy", href: "/our-legacy" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300",
          scrolled
            ? "bg-[rgba(247,246,242,0.88)] backdrop-blur-xl border-b border-[rgba(0,0,0,0.06)] shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-10">
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold tracking-tight text-deepTeal">
                PARAM NEXUS
              </span>
              <span className="text-[9px] tracking-[0.2em] text-teal/60 uppercase -mt-1">
                AI-Powered Digital Growth
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links — Centered */}
          <div className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-charcoal/80 hover:text-teal transition-colors rounded-lg hover:bg-teal/5">
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-200",
                        servicesOpen && "rotate-180"
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-64 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-black/5 overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-3 text-sm text-charcoal hover:bg-teal/5 hover:text-teal transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-charcoal/80 hover:text-teal transition-colors rounded-lg hover:bg-teal/5"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="relative overflow-hidden px-5 py-2.5 text-sm font-semibold text-white bg-teal rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-teal/20 hover:-translate-y-0.5 group"
            >
              <span className="relative z-10">Get Free Audit →</span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 gold-shimmer" />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden z-50 p-2 rounded-lg hover:bg-teal/5 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-charcoal" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 bg-deepTeal flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col items-center gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  {link.children ? (
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-2xl font-display font-bold text-white/50 py-2">
                        {link.label}
                      </span>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-lg text-white/70 hover:text-gold transition-colors py-1"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-2xl font-display font-bold text-white hover:text-gold transition-colors py-2"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="px-8 py-3 text-lg font-bold text-deepTeal bg-gold rounded-full hover:bg-gold-light transition-colors"
                >
                  Get Free Audit →
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
