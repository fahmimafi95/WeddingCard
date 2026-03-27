"use client";

import { motion } from "framer-motion";

export function InvitationText() {
  return (
    <section className="py-24 px-6 bg-slate-50 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto space-y-12"
      >
        <div className="space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl text-royal-dark">
            Assalamualaikum W.B.T & Salam Sejahtera
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed font-light">
            Dengan penuh kesyukuran ke hadrat Ilahi, kami menjemput Dato'/Datin/Tuan/Puan ke majlis perkahwinan putera & puteri kami.
          </p>
        </div>

        <div className="py-8">
          <p className="font-serif text-2xl text-royal italic mb-8">
             "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang."
          </p>
          <p className="text-sm font-semibold tracking-widest text-gold-dark uppercase">
            — Surah Ar-Rum : 21 —
          </p>
        </div>
      </motion.div>
    </section>
  );
}
