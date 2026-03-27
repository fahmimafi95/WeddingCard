"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Calendar } from "lucide-react";

export function EventDetails() {
  return (
    <section className="py-24 px-6 bg-white relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-royal-dark text-slate-50 rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Graphic overlay */}
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-gold">
             <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
               <path d="M12 2L9 9H2L7 14L5 21L12 17L19 21L17 14L22 9H15L12 2Z"></path>
             </svg>
          </div>

          <div className="relative z-10 text-center space-y-12">
            <h2 className="text-4xl font-serif text-gold">Maklumat Majlis</h2>
            
            <div className="grid md:grid-cols-2 gap-12 text-left">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold-dark/20 text-gold-light rounded-2xl">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-gold-light mb-1">Tarikh & Masa</h3>
                    <p className="text-lg font-light text-slate-200">Sabtu, 6 Jun 2026</p>
                    <p className="text-slate-400 font-light">11:00 Pagi - 4:00 Petang</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold-dark/20 text-gold-light rounded-2xl">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-gold-light mb-1">Lokasi</h3>
                    <p className="text-lg font-light text-slate-200 uppercase tracking-widest">
                      Dewan Mahsuri<br />Padang Serai
                    </p>
                    <p className="text-slate-400 font-light mt-2 max-w-xs">
                       Kedah Darul Aman
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-royal-light/30 flex flex-col md:flex-row justify-center items-center gap-6">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Dewan+Mahsuri,+Padang+Serai,+Kedah" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-slate-50 text-royal-dark font-semibold rounded-full hover:bg-gold transition-colors duration-300 w-full md:w-auto justify-center"
              >
                <MapPin size={20} />
                Buka Google Maps
              </a>
              <a 
                href="https://waze.com/ul?q=Dewan+Mahsuri,+Padang+Serai,+Kedah&navigate=yes" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-transparent border border-gold-light text-gold-light font-semibold rounded-full hover:bg-gold-light/10 transition-colors duration-300 w-full md:w-auto justify-center"
              >
                <Navigation size={20} />
                Buka Waze
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
