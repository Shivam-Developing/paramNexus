"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            className="premium-glass text-white text-sm font-medium px-4 py-2 rounded-full shadow-2xl whitespace-nowrap"
          >
            Chat with us now →
          </motion.div>
        )}
      </AnimatePresence>
      <a
        href="https://wa.me/918744003727?text=Hi%20Param%20Nexus!%20I%20want%20to%20know%20more%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        {/* Sonar ping rings */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-sonar-ping opacity-40" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-sonar-ping opacity-30 [animation-delay:1s]" />
        <MessageCircle className="w-7 h-7 text-white relative z-10" fill="white" />
      </a>
    </div>
  );
}
