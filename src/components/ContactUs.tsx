"use client";

import { motion } from "framer-motion";

const contacts = [
  { name: "Zaidi", phone: "+60 16-732 8604", tel: "+60167328604" },
  { name: "Sakinah", phone: "+60 16-480 4984", tel: "+60164804984" },
  { name: "Ikmal", phone: "+60 16-723 0837", tel: "+60167230837" },
  { name: "Alia", phone: "+60 16-572 4409", tel: "+60165724409" },
];

export function ContactUs() {
  return (
    <section className="py-24 px-6 bg-white relative">
      <div className="max-w-xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-royal-dark mb-4">Hubungi Kami</h2>
            <div className="h-0.5 w-16 bg-gold mx-auto" />
          </div>

          <div className="flex flex-col space-y-8">
            {contacts.map((contact, idx) => (
              <a
                key={idx}
                href={`tel:${contact.tel}`}
                className="group flex flex-col items-center transition-transform hover:scale-105"
              >
                <span className="text-sm font-light text-slate-400 uppercase tracking-widest mb-1 group-hover:text-gold transition-colors">
                  {contact.name}
                </span>
                <span className="text-xl font-light text-slate-600 group-hover:text-royal-dark transition-colors">
                  {contact.phone}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
