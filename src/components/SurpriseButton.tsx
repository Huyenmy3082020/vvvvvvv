import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { fireConfetti, fireHearts } from "../lib/celebrate";
import { SectionReveal } from "./SectionReveal";

export function SurpriseButton() {
  const [attempts, setAttempts] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [open, setOpen] = useState(false);
  const dodge = () => { if (attempts < 3) { setAttempts((value) => value + 1); setPosition({ x: (Math.random() - 0.5) * 190, y: (Math.random() - 0.5) * 70 }); } };
  const openSurprise = () => { if (attempts < 3) { dodge(); return; } fireConfetti(true); fireHearts(); setOpen(true); };
  return (
    <section className="relative px-5 py-20 sm:py-28">
      <SectionReveal className="mx-auto max-w-xl text-center">
        <p className="eyebrow">một thử thách nho nhỏ</p><h2 className="section-title">Còn một bất ngờ<br /><em>nữa...</em></h2><p className="mt-4 text-sm text-ink/65">Có dám bấm không nhỉ?</p>
        <div className="mt-9 flex h-36 items-center justify-center overflow-visible">
          <motion.button animate={position} transition={{ type: "spring", stiffness: 280, damping: 18 }} onMouseEnter={dodge} onFocus={dodge} onClick={openSurprise} className="rounded-full bg-gradient-to-r from-rose to-[#db7791] px-7 py-4 text-sm font-bold text-white shadow-[0_12px_25px_rgba(213,106,134,.28)] transition hover:brightness-105">{attempts < 3 ? "Đừng bấm vào đây 😏" : "Được rồi, bấm đi!"}</motion.button>
        </div>
        {attempts > 0 && attempts < 3 && <p className="text-xs text-ink/45">Ơ, nút này nghịch quá... ({attempts}/3)</p>}
      </SectionReveal>
      <AnimatePresence>{open && <motion.div className="fixed inset-0 z-[105] grid place-items-center bg-ink/60 px-5 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><motion.div initial={{ scale: 0.85, rotate: -3 }} animate={{ scale: 1, rotate: 0 }} className="relative w-full max-w-md rounded-[2rem] bg-[#fffaf2] p-9 text-center shadow-2xl"><button onClick={() => setOpen(false)} className="absolute right-5 top-5 text-ink/45 hover:text-ink" aria-label="Đóng"><X /></button><span className="text-5xl">😆</span><h3 className="mt-4 font-display text-4xl font-bold text-ink">HAHA, biết ngay<br />là sẽ bấm mà!</h3><p className="mt-4 font-handwritten text-3xl text-rose">Happy Birthday ♥</p></motion.div></motion.div>}</AnimatePresence>
    </section>
  );
}
