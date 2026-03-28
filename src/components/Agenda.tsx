"use client";

import { motion } from "framer-motion";

const agendaItems = [
  { time: "11.30 Pagi", desc: "Ketibaan Tetamu" },
  { time: "12:30 Tengah Hari", desc: "Ketibaan Pengantin" },
  { time: "1:00 Petang", desc: "Makan Beradab & Sesi Bergambar" },
  { time: "4:00 Petang", desc: "Majlis Bersurai" },
];

export function Agenda() {
  return (
    <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      <div className="absolute left-0 top-1/4 w-64 h-64 bg-gold-light/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-royal-dark mb-4">Aturcara Majlis</h2>
          <div className="h-0.5 w-24 bg-gold mx-auto" />
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gold-light/50 before:to-transparent">
          {agendaItems.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 bg-gold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2" />
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mt-0 hover:shadow-md transition">
                <time className="font-serif text-gold-dark text-xl block mb-2">{item.time}</time>
                <div className="text-slate-600 font-light">{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
