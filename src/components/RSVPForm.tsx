"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { Send } from "lucide-react";

export function RSVPForm() {
  const [messages, setMessages] = useState<{ name: string; wish: string }[]>([]);
  const [loadingMessages, setLoadingMessages] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    attendance: "Hadir",
    pax: "1",
    wish: ""
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
      if (!scriptUrl) {
        setLoadingMessages(false);
        return;
      }

      try {
        const response = await fetch(scriptUrl);
        const result = await response.json();
        if (result.result === "success") {
          setMessages(result.data);
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setLoadingMessages(false);
      }
    };

    fetchMessages();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

    if (scriptUrl) {
      try {
        const formDataToSend = new URLSearchParams();
        formDataToSend.append('Timestamp', new Date().toLocaleString('en-MY', { timeZone: 'Asia/Kuala_Lumpur' }));
        formDataToSend.append('Nama', formData.name);
        formDataToSend.append('Kehadiran', formData.attendance);
        formDataToSend.append('Pax', formData.pax);
        formDataToSend.append('Ucapan', formData.wish);

        await fetch(scriptUrl, {
          method: "POST",
          body: formDataToSend,
          mode: 'no-cors' // Bypasses precise CORS restrictions on the client side perfectly for simple App Script web hooks
        });

        setMessages([{ name: formData.name, wish: formData.wish }, ...messages]);
        toast.success("Pengesahan dan ucapan anda berjaya dihantar ke buku tetamu!");
        setFormData({ name: "", attendance: "Hadir", pax: "1", wish: "" });
      } catch (err) {
        toast.error("Maaf, pautan ralat. Sila cuba lagi.");
      } finally {
        setLoading(false);
      }
    } else {
      // Fallback simulating network request if user hasn't configured the script URL yet
      setTimeout(() => {
        setMessages([{ name: formData.name, wish: formData.wish }, ...messages]);
        toast.success("[Simulasi] Pengesahan direkodkan! Sila tetapkan NEXT_PUBLIC_GOOGLE_SCRIPT_URL dalam .env.local.");
        setFormData({ name: "", attendance: "Hadir", pax: "1", wish: "" });
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <section className="py-24 px-6 bg-slate-100">
      <div className="max-w-2xl mx-auto space-y-16">
        
        {/* RSVP FORM */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-200/50"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif text-royal-dark mb-4">Pengesahan Kehadiran</h2>
            <p className="text-slate-500 font-light">Sila sahkan kehadiran anda sebelum 20 Mei 2026</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Nama</label>
              <input 
                required
                type="text" 
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition"
                placeholder="Nama Penuh"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Kehadiran</label>
                <select 
                  value={formData.attendance}
                  onChange={e => setFormData({ ...formData, attendance: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-gold outline-none"
                >
                  <option>Hadir</option>
                  <option>Tidak Hadir</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Bilangan</label>
                <select 
                  value={formData.pax}
                  onChange={e => setFormData({ ...formData, pax: e.target.value })}
                  disabled={formData.attendance === "Tidak Hadir"}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-gold outline-none disabled:bg-slate-50"
                >
                  {[1, 2, 3, 4, 5].map(n => <option key={n}>{n}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Ucapan Ringkas</label>
              <textarea 
                required
                rows={3}
                value={formData.wish}
                onChange={e => setFormData({ ...formData, wish: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition resize-none"
                placeholder="Doa dan ucapan..."
              />
            </div>

            <button 
              disabled={loading}
              className="w-full py-4 bg-royal-dark text-white rounded-xl font-semibold hover:bg-royal transition flex justify-center items-center gap-2 group disabled:opacity-70"
            >
              {loading ? "Menghantar..." : (
                <>
                  Hantar
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* GUESTBOOK */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-royal-dark/5 p-8 rounded-3xl border border-royal-light/10"
        >
          <h3 className="text-2xl font-serif text-royal-dark mb-8 text-center">Buku Tetamu</h3>
          <div className="space-y-4 max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gold scrollbar-track-transparent">
            {loadingMessages ? (
              <div className="text-center py-10 text-slate-500 animate-pulse">
                Memuatkan ucapan...
              </div>
            ) : messages.length > 0 ? (
              messages.map((msg, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl shadow-sm">
                  <p className="font-semibold text-royal mb-1">{msg.name}</p>
                  <p className="text-slate-600 font-light italic text-sm">"{msg.wish}"</p>
                </div>
              ))
            ) : (
              <div className="text-center py-10 text-slate-500">
                Belum ada ucapan. Jadilah yang pertama!
              </div>
            )}
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
