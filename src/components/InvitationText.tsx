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
          <div className="text-lg text-slate-700 leading-relaxed font-light">
            Dengan penuh kesyukuran ke hadrat Ilahi, kami <br />
            <span className="text-xl md:text-2xl font-serif text-royal-dark font-semibold block mt-4">Zaidi Abdul Rashid</span>
            dan
            <span className="text-xl md:text-2xl font-serif text-royal-dark font-semibold block mb-4">Sakinah Ibrahim</span>
            menjemput Dato&apos;/Datin/Tuan/Puan ke majlis perkahwinan puteri kami <br />
            <span className="text-2xl md:text-3xl font-serif text-royal-dark font-bold block mt-8 mb-2">Nurul Alia Binti Zaidi</span>
            <span className="italic">dengan pilihan hatinya</span> <br />
            <span className="text-2xl md:text-3xl font-serif text-royal-dark font-bold block mt-2">Muhammad Fahmi bin Hisamudin</span>
          </div>
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
