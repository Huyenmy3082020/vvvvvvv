import { AnimatePresence, motion } from "framer-motion";
import { Expand, X } from "lucide-react";
import { useState } from "react";
import { birthdayConfig } from "../config/birthday";
import { SectionReveal } from "./SectionReveal";

export function MemoryGallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const selectedMemory = selected === null ? null : birthdayConfig.memories[selected];
  return (
    <section className="px-5 py-20 sm:py-28" id="memories">
      <SectionReveal className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow">✦ những lát cắt đáng yêu ✦</p>
          <h2 className="section-title">Những khoảnh khắc<br /><em>đáng nhớ</em> 📸</h2>
          <p className="mt-4 text-sm leading-7 text-ink/65">Mỗi bức ảnh là một mẩu ký ức nho nhỏ. Hãy thay bằng ảnh của hai bạn để món quà này thật riêng tư nhé.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-5 sm:gap-7 lg:grid-cols-4">
          {birthdayConfig.memories.map((memory, index) => (
            <motion.button key={memory.image} type="button" onClick={() => setSelected(index)} initial={{ opacity: 0, y: 22, rotate: 0 }} whileInView={{ opacity: 1, y: 0, rotate: memory.rotate }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }} whileHover={{ y: -12, rotate: 0, scale: 1.03 }} className={`group relative bg-[#fffdfa] p-2.5 pb-12 text-left shadow-card focus:outline-none focus:ring-4 focus:ring-rose/30 ${index % 2 ? "mt-8" : ""}`}>
              <img src={memory.image} alt={memory.caption} loading="lazy" className="aspect-[4/5] w-full object-cover" />
              <span className="absolute right-5 top-5 grid h-8 w-8 place-items-center rounded-full bg-white/85 text-ink opacity-0 backdrop-blur transition group-hover:opacity-100"><Expand size={15} /></span>
              <span className="absolute bottom-3 left-4 right-3 font-handwritten text-lg leading-5 text-ink">{memory.caption}</span>
            </motion.button>
          ))}
        </div>
      </SectionReveal>
      <AnimatePresence>
        {selectedMemory && <motion.div className="fixed inset-0 z-[100] grid place-items-center bg-ink/75 p-5 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
          <motion.figure initial={{ scale: 0.92, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.92, y: 20 }} onClick={(event) => event.stopPropagation()} className="relative max-h-[88svh] max-w-2xl rounded-2xl bg-[#fffdfa] p-3 shadow-2xl">
            <button onClick={() => setSelected(null)} className="absolute -right-3 -top-3 grid h-9 w-9 place-items-center rounded-full bg-ink text-white shadow-lg" aria-label="Đóng ảnh"><X size={17} /></button>
            <img src={selectedMemory.image} alt={selectedMemory.caption} className="max-h-[72svh] w-full rounded-xl object-contain" />
            <figcaption className="px-2 pb-1 pt-3 text-center font-handwritten text-2xl text-ink">{selectedMemory.caption}</figcaption>
          </motion.figure>
        </motion.div>}
      </AnimatePresence>
    </section>
  );
}
