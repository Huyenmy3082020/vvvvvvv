import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { birthdayConfig } from "../config/birthday";
import { SectionReveal } from "./SectionReveal";

export function SpecialThings() {
  return (
    <section id="special" className="px-5 py-20 sm:py-28">
      <SectionReveal className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center"><p className="eyebrow">thật ra, còn nhiều hơn thế nữa</p><h2 className="section-title">10 điều mình thích<br /><em>ở bạn</em> <span className="text-3xl">♥</span></h2></div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {birthdayConfig.specialThings.map((thing, index) => <motion.article key={thing} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (index % 5) * 0.08 }} whileHover={{ y: -8 }} className="group relative min-h-40 overflow-hidden rounded-[1.4rem] border border-white bg-white/60 p-5 shadow-card backdrop-blur-sm">
            <span className="font-display text-3xl font-bold text-rose/45">{String(index + 1).padStart(2, "0")}</span><Heart className="absolute right-4 top-4 text-rose opacity-0 transition duration-300 group-hover:scale-125 group-hover:opacity-100" size={21} fill="currentColor" />
            <p className="mt-6 text-sm font-bold leading-6 text-ink">{thing}</p>
          </motion.article>)}
        </div>
      </SectionReveal>
    </section>
  );
}
