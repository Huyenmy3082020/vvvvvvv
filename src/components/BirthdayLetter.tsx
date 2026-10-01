import { motion } from "framer-motion";
import { Heart, MailOpen } from "lucide-react";
import { useState } from "react";
import { birthdayConfig } from "../config/birthday";
import { SectionReveal } from "./SectionReveal";

export function BirthdayLetter() {
  const [opened, setOpened] = useState(false);
  return (
    <section id="letter" className="px-5 py-20 sm:py-28">
      <SectionReveal className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">một điều thật lòng</p><h2 className="section-title">Có một lá thư<br /><em>dành cho bạn</em> 💌</h2>
        <div className={`envelope-scene mx-auto mt-10 ${opened ? "is-open" : ""}`}>
          <motion.article layout className="letter-paper text-left">
            <p className="font-handwritten text-2xl text-[#a45c75]">Gửi {birthdayConfig.recipientName},</p>
            {opened && birthdayConfig.letter.map((paragraph, index) => <motion.p key={paragraph} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + index * 0.4 }} className="mt-4 text-sm leading-7 text-ink/75">{paragraph}</motion.p>)}
            {opened && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.55 }} className="mt-6 text-right font-handwritten text-3xl text-rose">Happy Birthday ♥</motion.p>}
          </motion.article>
          <button type="button" onClick={() => setOpened(true)} className="envelope-front group" aria-label="Mở phong thư">
            <span className="envelope-flap" /><span className="envelope-left" /><span className="envelope-right" /><span className="seal"><Heart size={16} fill="currentColor" /></span>
            {!opened && <span className="absolute inset-0 z-20 grid place-items-end pb-6 font-handwritten text-2xl text-white drop-shadow">Chạm để mở thư</span>}
          </button>
        </div>
        {!opened && <p className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[.14em] text-ink/45"><MailOpen size={14} /> có một điều muốn nói</p>}
      </SectionReveal>
    </section>
  );
}
