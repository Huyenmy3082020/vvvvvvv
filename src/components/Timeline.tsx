import { motion } from "framer-motion";
import { HeartHandshake, MapPin, Sparkles, Stars } from "lucide-react";
import { birthdayConfig } from "../config/birthday";
import { SectionReveal } from "./SectionReveal";

const icons = [HeartHandshake, MapPin, Stars, Sparkles];

export function Timeline() {
  return (
    <section id="journey" className="relative overflow-hidden bg-white/35 px-5 py-20 sm:py-28">
      <div className="absolute -left-32 top-1/3 h-64 w-64 rounded-full bg-[#cfbddf]/40 blur-3xl" />
      <SectionReveal className="relative mx-auto max-w-4xl">
        <div className="text-center"><p className="eyebrow">một câu chuyện vẫn đang viết tiếp</p><h2 className="section-title">Hành trình của<br /><em>chúng ta</em> ✨</h2></div>
        <div className="relative mx-auto mt-14 max-w-2xl before:absolute before:bottom-4 before:left-5 before:top-4 before:w-px before:bg-gradient-to-b before:from-rose before:via-butter before:to-plum sm:before:left-1/2">
          {birthdayConfig.timeline.map((item, index) => {
            const Icon = icons[index];
            return <motion.article key={item.year} initial={{ opacity: 0, x: index % 2 ? 24 : -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55 }} className={`relative mb-10 pl-14 sm:mb-14 sm:w-[calc(50%+1.6rem)] sm:pl-0 ${index % 2 ? "sm:ml-auto sm:pr-0" : "sm:pr-0 sm:text-right"}`}>
              <span className="absolute left-0 top-2 grid h-10 w-10 place-items-center rounded-full border-4 border-[#fff9f4] bg-rose text-white shadow-card sm:left-auto sm:top-2 sm:h-11 sm:w-11 sm:-translate-x-1/2 sm:left-full"><Icon size={18} /></span>
              <div className="rounded-2xl border border-white/80 bg-white/65 p-5 shadow-card backdrop-blur-sm sm:mx-7">
                <span className="font-display text-3xl font-bold text-rose">{item.year}</span><span className="ml-2 text-[10px] font-bold uppercase tracking-[.13em] text-ink/45">{item.date}</span>
                <h3 className="mt-2 font-display text-xl font-bold text-ink">{item.title}</h3><p className="mt-2 text-sm leading-6 text-ink/65">{item.description}</p>
              </div>
            </motion.article>;
          })}
        </div>
      </SectionReveal>
    </section>
  );
}
