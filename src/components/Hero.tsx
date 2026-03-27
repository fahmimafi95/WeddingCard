"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-royal text-slate-50">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-royal-light)_0%,_var(--color-royal)_100%)] opacity-80" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay" />
      
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="uppercase tracking-widest text-sm text-gold-light mb-4 font-sans"
        >
          Walimatul Urus
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-gold mb-6 tracking-tight leading-tight"
        >
          Alia & Fahmi
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col items-center space-y-2 mt-6"
        >
          <p className="text-xl font-sans font-light tracking-wider text-slate-200">
            Sabtu, 6 Jun 2026
          </p>
          <div className="h-px w-24 bg-gold opacity-50 my-2" />
          <p className="text-lg font-sans font-light text-slate-300">
            Dewan Mahsuri Padang Serai
          </p>
        </motion.div>
      </div>
    </section>
  );
}
