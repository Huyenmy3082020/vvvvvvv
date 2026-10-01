import { AnimatePresence, motion } from "framer-motion";
import { MailOpen } from "lucide-react";
import { useState } from "react";
import { birthdayConfig } from "../config/birthday";
import { SectionReveal } from "./SectionReveal";

export function RandomMessage() {
  const [messageIndex, setMessageIndex] = useState(0);
  const showNext = () => setMessageIndex((current) => (current + 1 + Math.floor(Math.random() * (birthdayConfig.messages.length - 1))) % birthdayConfig.messages.length);
  return (
    <section className="px-5 py-20 sm:py-28">
      <SectionReveal className="mx-auto max-w-3xl rounded-[2rem] bg-gradient-to-br from-[#fde5e6] via-[#fff7ec] to-[#e9ddf0] p-7 text-center shadow-soft sm:p-14">
        <MailOpen className="mx-auto text-rose" size={34} strokeWidth={1.35} />
        <p className="eyebrow mt-4">mở một lời nhắn thật nhỏ</p>
        <h2 className="section-title text-4xl sm:text-5xl">Có một vài điều<br />mình muốn nói...</h2>
        <div className="mt-8 grid min-h-32 place-items-center rounded-2xl border border-white/80 bg-white/60 p-5">
          <AnimatePresence mode="wait"><motion.p key={messageIndex} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.28 }} className="max-w-lg font-handwritten text-2xl leading-relaxed text-plum sm:text-3xl">“{birthdayConfig.messages[messageIndex]}”</motion.p></AnimatePresence>
        </div>
        <button onClick={showNext} className="mt-7 rounded-full bg-ink px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:shadow-lg">Nhấn thử xem 💌</button>
      </SectionReveal>
    </section>
  );
}
