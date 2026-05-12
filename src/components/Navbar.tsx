"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe, Smartphone, Video, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "Website Development", href: "/services/website-development", icon: <Globe className="w-4 h-4" /> },
      { label: "Social Media Marketing", href: "/services/social-media", icon: <Smartphone className="w-4 h-4" /> },
      { label: "KliqueNexus — Video", href: "/kliquenexus", icon: <Video className="w-4 h-4" /> },
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
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-500",
          scrolled
            ? "bg-[#050507] border-b border-white/5 shadow-2xl"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col z-[70] group">
            <span className="font-display text-xl lg:text-2xl font-bold tracking-tight text-white group-hover:text-neonIndigo transition-colors duration-300">
              PARAM NEXUS
            </span>
            <span className="text-[9px] tracking-[0.3em] text-gray-500 uppercase -mt-0.5 group-hover:text-cyberCyan transition-colors duration-300 font-bold">
              AI-Powered Digital Growth
            </span>
          </Link>

          {/* Desktop Nav Links — Centered */}
          <div className="hidden lg:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className="flex items-center gap-1.5 px-5 py-2 text-sm font-bold text-gray-400 hover:text-white transition-all rounded-full hover:bg-white/5 uppercase tracking-widest text-[11px]">
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-300 opacity-50",
                        servicesOpen && "rotate-180 opacity-100"
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-3 w-80 bg-[#0B0B0E] p-3 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/10 z-[100]"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center gap-4 px-5 py-4 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-2xl transition-all duration-300 group/item"
                          >
                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-neonIndigo group-hover/item:bg-neonIndigo group-hover/item:text-white transition-all">
                              {child.icon}
                            </div>
                            <span className="font-bold tracking-wide">{child.label}</span>
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
                  className="px-5 py-2 text-sm font-bold text-gray-400 hover:text-white transition-all rounded-full hover:bg-white/5 uppercase tracking-widest text-[11px]"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 text-[11px] font-bold text-white bg-gradient-to-r from-neonIndigo to-purple-600 rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-widest flex items-center gap-2"
            >
              Get Free Audit <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden z-50 p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-obsidian flex flex-col p-6 pt-32"
          >
            <div className="absolute inset-0 opacity-20 pointer-events-none">
               <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neonIndigo blur-[150px]" />
               <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyberCyan blur-[150px]" />
            </div>

            <nav className="flex flex-col gap-6 relative z-10 overflow-y-auto pb-20">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.children ? (
                    <div className="space-y-4">
                      <span className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.3em] pl-4">
                        {link.label}
                      </span>
                      <div className="grid gap-3">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-4 p-5 rounded-3xl bg-white/5 border border-white/5 text-gray-300 active:bg-white/10 transition-all"
                          >
                            <div className="text-neonIndigo">{child.icon}</div>
                            <span className="font-bold text-lg">{child.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-4xl font-display font-bold text-white hover:text-neonIndigo transition-colors pl-4"
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
                className="pt-10 px-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-neonIndigo to-purple-600 rounded-3xl shadow-2xl"
                >
                  Get Free Audit <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
