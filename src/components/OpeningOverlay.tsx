"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MailOpen } from "lucide-react";

interface OpeningOverlayProps {
  onOpen: () => void;
  isOpen: boolean;
}

export function OpeningOverlay({ onOpen, isOpen }: OpeningOverlayProps) {
  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-royal overflow-hidden"
        >
          {/* Decorative Background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-royal-light)_0%,_var(--color-royal)_100%)] opacity-80" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay" />
          
          <div className="relative z-10 flex flex-col items-center text-center px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-8"
            >
              <p className="uppercase tracking-[0.3em] text-sm text-gold-light mb-4 font-sans">
                Walimatul Urus
              </p>
              <h1 className="font-serif text-5xl md:text-7xl text-gold tracking-tight leading-tight">
                Alia & Fahmi
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button
                onClick={onOpen}
                className="group relative flex items-center space-x-3 bg-gold hover:bg-gold-light text-royal-dark px-8 py-3 rounded-full font-sans font-medium tracking-wide transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-gold/20"
              >
                <MailOpen size={20} className="group-hover:rotate-12 transition-transform" />
                <span>Buka Undangan</span>
              </button>
            </motion.div>
          </div>

          {/* Bottom Decoration */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-royal-dark/50 to-transparent pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
