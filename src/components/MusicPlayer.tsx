"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Music, Music2 } from "lucide-react";
import { motion } from "framer-motion";

// Import ReactPlayer dynamically to avoid hydration issues in Next.js
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface MusicPlayerProps {
  url: string;
  playing: boolean;
}

export function MusicPlayer({ url, playing }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (playing) {
      setIsPlaying(true);
    }
  }, [playing]);

  if (!isMounted) return null;

  return (
    <>
      <div className="absolute top-0 left-0 w-[1px] h-[1px] opacity-0 pointer-events-none overflow-hidden">
        <ReactPlayer
          url={url}
          playing={isPlaying}
          loop={true}
          volume={1.0}
          muted={false}
          playsinline={true}
          width="100%"
          height="100%"
          config={{
            youtube: {
              // @ts-ignore
              playerVars: {
                autoplay: 1,
                controls: 0,
                rel: 0,
                modestbranding: 1,
                playsinline: 1,
                origin: typeof window !== "undefined" ? window.location.origin : "https://wedding-card-aliafahmi.vercel.app"
              }
            }
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-6 left-6 z-50"
      >
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`relative group flex items-center justify-center w-12 h-12 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-90 ${
            isPlaying ? "bg-gold text-royal-dark" : "bg-royal-light/80 text-gold backdrop-blur-sm border border-gold/30"
          }`}
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {/* Pulsing rings when playing */}
          {isPlaying && (
            <>
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full border-2 border-gold opacity-50"
              />
              <motion.div
                animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute inset-0 rounded-full border border-gold opacity-30"
              />
            </>
          )}

          <div className="relative z-10">
            {isPlaying ? (
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Music2 size={22} className="stroke-[2.5]" />
              </motion.div>
            ) : (
              <Music size={22} className="stroke-[2.5]" />
            )}
          </div>
          
          <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-royal-dark/95 text-xs text-gold-light opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap rounded font-sans border border-gold/20 pointer-events-none hidden md:block backdrop-blur-sm">
            {isPlaying ? "Matikan Muzik" : "Pasang Muzik"}
          </div>
        </button>
      </motion.div>
    </>
  );
}
