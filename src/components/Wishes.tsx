import { motion } from "framer-motion";
import { birthdayConfig } from "../config/birthday";
import { SectionReveal } from "./SectionReveal";

export function Wishes() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-white/30 to-[#e9daed]/60 px-5 py-20 sm:py-28">
      <SectionReveal className="mx-auto max-w-5xl text-center"><p className="eyebrow">gom lại thành một bó thật xinh</p><h2 className="section-title">Lời chúc dành cho<br /><em>tuổi mới</em></h2>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
          {birthdayConfig.wishes.map((wish, index) => <motion.div key={wish.text} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} whileHover={{ y: -7, rotate: index % 2 ? 2 : -2 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }} className={`wish-chip wish-chip-${index % 4}`}><span>{wish.icon}</span>{wish.text}</motion.div>)}
        </div>
      </SectionReveal>
    </section>
  );
}
