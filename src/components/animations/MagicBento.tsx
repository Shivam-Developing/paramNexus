"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface BentoItemProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

export function BentoItem({ children, className = '', title, description, icon }: BentoItemProps) {
  return (
    <motion.div 
      className={`premium-glass p-8 relative overflow-hidden group premium-glass-hover ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">
        {icon}
      </div>
      
      <div className="relative z-10 flex flex-col h-full">
        {icon && <div className="mb-4 text-neonIndigo group-hover:scale-110 transition-transform duration-300 w-fit">{icon}</div>}
        {title && <h3 className="text-xl font-bold mb-3 text-white group-hover:text-neonIndigo transition-colors duration-300">{title}</h3>}
        {description && <p className="text-gray-500 text-sm leading-relaxed mb-6">{description}</p>}
        {children}
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neonIndigo/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </motion.div>
  );
}

interface MagicBentoProps {
  children: React.ReactNode;
  className?: string;
}

export function MagicBento({ children, className = '' }: MagicBentoProps) {
  return (
    <div className={`grid gap-4 lg:gap-6 ${className}`}>
      {children}
    </div>
  );
}
