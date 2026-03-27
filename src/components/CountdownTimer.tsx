"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Target: June 6, 2026 11:00 AM Event Start
    const targetDate = new Date("2026-06-06T11:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 bg-slate-100 text-center">
      <h2 className="text-3xl font-serif text-royal-dark mb-10">Menghitung Hari</h2>
      <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
        {[
          { label: "Hari", value: timeLeft.days },
          { label: "Jam", value: timeLeft.hours },
          { label: "Minit", value: timeLeft.minutes },
          { label: "Saat", value: timeLeft.seconds }
        ].map((item, idx) => (
          <motion.div 
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col items-center bg-white p-6 rounded-2xl min-w-[100px] shadow-sm border border-gold-light/20"
          >
            <span className="text-4xl md:text-5xl font-sans font-light text-royal mb-2">{item.value}</span>
            <span className="text-xs tracking-widest uppercase text-slate-500">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
