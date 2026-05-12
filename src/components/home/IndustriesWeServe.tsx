"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Building2, School, Gem, Home, Utensils, Hotel, ShoppingBag, 
  Paintbrush, GraduationCap, Scale, Car, Flower2 
} from "lucide-react";
import { GradientText } from "@/components/GradientText";

const industries = [
  { icon: <Building2 className="w-5 h-5" />, name: "Clinics & Hospitals" },
  { icon: <School className="w-5 h-5" />, name: "Coaching Institutes" },
  { icon: <Gem className="w-5 h-5" />, name: "Jewellers & Showrooms" },
  { icon: <Home className="w-5 h-5" />, name: "Real Estate & Builders" },
  { icon: <Utensils className="w-5 h-5" />, name: "Restaurants & Cafés" },
  { icon: <Hotel className="w-5 h-5" />, name: "Hotels & Heritage" },
  { icon: <ShoppingBag className="w-5 h-5" />, name: "Boutiques & Retail" },
  { icon: <Paintbrush className="w-5 h-5" />, name: "Interior Designers" },
  { icon: <GraduationCap className="w-5 h-5" />, name: "Schools & Colleges" },
  { icon: <Scale className="w-5 h-5" />, name: "Legal Services" },
  { icon: <Car className="w-5 h-5" />, name: "Auto Dealers" },
  { icon: <Flower2 className="w-5 h-5" />, name: "Wellness & Spa" },
];

export default function IndustriesWeServe() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="bg-obsidian py-24 lg:py-32 relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(99,102,241,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            If You Run a Business in Jaipur,
            <br />
            <GradientText>We Work For You.</GradientText>
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative px-6 py-5 flex items-center gap-4 bg-[#121216]/40 backdrop-blur-md border border-white/10 rounded-2xl hover:border-indigo-500/30 transition-all duration-300 cursor-default overflow-hidden"
            >
              <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="text-indigo-400 group-hover:text-white transition-colors duration-300 relative z-10 group-hover:scale-110 transition-transform">
                {ind.icon}
              </div>
              <span className="text-xs font-bold text-gray-400 relative z-10 group-hover:text-white transition-colors uppercase tracking-wider">
                {ind.name}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm inline-block">
            <p className="text-gray-400 italic text-xl lg:text-2xl max-w-2xl mx-auto font-display leading-relaxed">
              &ldquo;If your customers are in Jaipur, they&apos;re already searching
              online. <span className="text-white">We make sure they find you first.</span>&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
