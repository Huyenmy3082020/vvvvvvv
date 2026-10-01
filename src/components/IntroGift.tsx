import { motion } from "framer-motion";
import { Gift, Sparkles } from "lucide-react";
import { useState } from "react";

type IntroGiftProps = {
  onOpen: () => void;
};

export function IntroGift({ onOpen }: IntroGiftProps) {
  const [opening, setOpening] = useState(false);
  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    window.setTimeout(onOpen, 620);
  };
  return (
        <motion.section
          className="fixed inset-0 z-[80] grid place-items-center overflow-hidden bg-[#1f1930] px-5 text-center text-white"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="absolute -left-20 top-8 h-72 w-72 rounded-full bg-rose/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-[#9475b9]/25 blur-3xl" />
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative z-10 flex flex-col items-center">
            <motion.div
              animate={opening ? { rotate: [0, -4, 4, 0], scale: [1, 1.04, 1] } : { y: [0, -9, 0] }}
              transition={{ duration: opening ? 0.4 : 3.2, repeat: opening ? 0 : Infinity, ease: "easeInOut" }}
              className="relative mb-9 grid h-44 w-44 place-items-center"
            >
              <span className="absolute inset-x-3 bottom-0 h-28 rounded-b-2xl bg-gradient-to-br from-[#f79cae] to-[#bd6b92] shadow-[0_20px_35px_rgba(0,0,0,.26)]" />
              <span className="absolute inset-x-3 top-4 h-8 rounded-[50%] bg-[#ffd5db]" />
              <motion.span animate={opening ? { rotateX: -120, y: -27 } : {}} transition={{ duration: 0.46, ease: "easeOut" }} className="absolute left-1/2 top-1 h-9 w-[148px] -translate-x-1/2 rounded-[50%] bg-[#f28da4] [transform-origin:bottom]" />
              <span className="absolute bottom-0 left-1/2 h-32 w-6 -translate-x-1/2 bg-[#f9d779]" />
              <span className="absolute inset-x-3 top-[73px] h-6 bg-[#f9d779]" />
              <Gift className="relative z-10 mt-7 text-white" size={48} strokeWidth={1.4} />
              <Sparkles className="absolute right-0 top-3 text-butter" size={20} />
              <Sparkles className="absolute bottom-8 left-0 text-white/80" size={14} />
            </motion.div>
            <p className="mb-6 font-handwritten text-3xl leading-tight sm:text-4xl">Có một món quà nhỏ<br />dành cho bạn 🎁</p>
            <button onClick={handleOpen} className="rounded-full bg-white px-7 py-3.5 text-sm font-bold text-ink shadow-lg transition hover:-translate-y-1 hover:bg-butter focus:outline-none focus:ring-4 focus:ring-white/25">
              Mở quà <span className="ml-1">→</span>
            </button>
            <p className="mt-6 text-[10px] uppercase tracking-[0.22em] text-white/45">chạm để bắt đầu một điều dễ thương</p>
          </motion.div>
        </motion.section>
  );
}
