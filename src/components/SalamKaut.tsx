"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function SalamKaut() {
  const bankName = "Touch n Go (Alia)";

  return (
    <section className="py-24 px-6 bg-white relative">
      <div className="max-w-xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-royal-dark text-slate-50 p-10 md:p-14 rounded-[3rem] shadow-xl space-y-8"
        >
          <div>
            <h2 className="text-3xl font-serif text-gold mb-4">Salam Kaut</h2>
            <p className="text-slate-200 font-light max-w-sm mx-auto">
              Bagi tetamu yang ingin memberikan hadiah berbentuk wang ringgit, anda boleh mengimbas kod QR atau menggunakan maklumat bank di bawah.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl mx-auto w-56 flex items-center justify-center flex-col shadow-inner">
            <Image 
              src="/duitnow-qr.png" 
              alt="DuitNow QR" 
              width={200} 
              height={200}
              className="rounded-xl w-full h-auto object-contain"
            />
            <p className="text-xs text-slate-400 mt-4 tracking-widest uppercase">Imbas QR DuitNow</p>
          </div>

          <div className="space-y-4 pt-4 border-t border-royal-light/50">
            <p className="text-sm font-light text-slate-300 uppercase tracking-widest">{bankName}</p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
