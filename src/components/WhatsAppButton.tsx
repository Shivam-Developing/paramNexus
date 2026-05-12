"use client";

import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9, filter: "blur(4px)" }}
            animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: 10, scale: 0.9, filter: "blur(4px)" }}
            className="bg-[#121216]/90 backdrop-blur-xl border border-white/10 text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.5)] whitespace-nowrap"
          >
            Start a Conversation
          </motion.div>
        )}
      </AnimatePresence>
      <a
        href="https://wa.me/918744003727"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative w-16 h-16 bg-[#121216] border border-white/10 rounded-2xl flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_60px_rgba(99,102,241,0.2)] hover:border-indigo-500/50 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
        aria-label="Chat with us"
      >
        {/* Internal glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Animated rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-12 h-12 rounded-full border border-indigo-500/20 animate-ping opacity-20" />
        </div>

        <MessageSquare className="w-7 h-7 text-indigo-400 group-hover:text-white transition-colors duration-500 relative z-10" />
      </a>
    </div>
  );
}
