import { Hero } from "@/components/Hero";
import { InvitationText } from "@/components/InvitationText";
import { EventDetails } from "@/components/EventDetails";
import { CountdownTimer } from "@/components/CountdownTimer";
import { Agenda } from "@/components/Agenda";
import { RSVPForm } from "@/components/RSVPForm";
import { SalamKaut } from "@/components/SalamKaut";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-gold-light/30 selection:text-royal-dark">
      <Hero />
      <InvitationText />
      <EventDetails />
      <CountdownTimer />
      <Agenda />
      <RSVPForm />
      <SalamKaut />
      <Toaster position="bottom-center" toastOptions={{
        style: {
          background: '#1a365d',
          color: '#fff',
        },
      }} />
    </main>
  );
}
