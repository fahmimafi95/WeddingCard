"use client";

import { useState, useEffect } from "react";
import { Hero } from "@/components/Hero";
import { InvitationText } from "@/components/InvitationText";
import { EventDetails } from "@/components/EventDetails";
import { CountdownTimer } from "@/components/CountdownTimer";
import { Agenda } from "@/components/Agenda";
import { RSVPForm } from "@/components/RSVPForm";
import { SalamKaut } from "@/components/SalamKaut";
import { ContactUs } from "@/components/ContactUs";
import { Footer } from "@/components/Footer";
import { OpeningOverlay } from "@/components/OpeningOverlay";
import { MusicPlayer } from "@/components/MusicPlayer";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    if (!isOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpened]);

  const handleOpen = () => {
    setIsOpened(true);
  };

  return (
    <main className="min-h-screen selection:bg-gold-light/30 selection:text-royal-dark">
      <OpeningOverlay isOpen={isOpened} onOpen={handleOpen} />
      
      <MusicPlayer 
        url="/BGMusic.mp3" 
        playing={isOpened} 
      />

      <Hero />
      <InvitationText />
      <EventDetails />
      <CountdownTimer />
      <Agenda />
      <RSVPForm />
      <SalamKaut />
      <ContactUs />
      <Footer />
      
      <Toaster position="bottom-center" toastOptions={{
        style: {
          background: '#1a365d',
          color: '#fff',
        },
      }} />
    </main>
  );
}
