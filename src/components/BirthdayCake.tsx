import { motion } from "framer-motion";
import { Wind } from "lucide-react";
import { useState } from "react";
import { fireConfetti } from "../lib/celebrate";
import { SectionReveal } from "./SectionReveal";

export function BirthdayCake() {
  const [blown, setBlown] = useState(false);
  const blowCandles = () => { if (!blown) { setBlown(true); fireConfetti(true); } };
  return (
    <section id="cake" className="bg-white/30 px-5 py-20 sm:py-28">
      <SectionReveal className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">nhắm mắt lại một chút nhé</p><h2 className="section-title">Ước một điều đi <em>✨</em></h2><p className="mt-4 text-sm text-ink/65">Điều ước sẽ dễ thành hiện thực hơn nếu bạn tin vào nó.</p>
        <div className="cake-stage mx-auto mt-10" aria-label="Bánh sinh nhật với ba ngọn nến">
          {[0, 1, 2].map((candle) => <div key={candle} className={`cake-candle candle-${candle}`}><span className={blown ? "flame flame-out" : "flame"} />{blown && <span className="smoke" />}</div>)}
          <div className="cake-frosting"><i /><i /><i /></div><div className="cake-layer cake-layer-top" /><div className="cake-layer cake-layer-bottom" /><div className="cake-plate" />
        </div>
        <button onClick={blowCandles} disabled={blown} className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:shadow-lg disabled:cursor-default disabled:bg-plum/70"><Wind size={17} /> {blown ? "Điều ước đã bay lên!" : "Thổi nến 🎂"}</button>
        <motion.p initial={false} animate={{ opacity: blown ? 1 : 0, y: blown ? 0 : 8 }} className="mt-5 font-handwritten text-2xl text-rose">Mong điều ước của bạn sẽ thành sự thật ♥</motion.p>
      </SectionReveal>
    </section>
  );
}
