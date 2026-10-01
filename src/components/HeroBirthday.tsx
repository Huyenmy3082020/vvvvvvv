import { motion } from "framer-motion";
import { ArrowDown, Heart, Sparkles } from "lucide-react";
import { birthdayConfig } from "../config/birthday";

export function HeroBirthday({ onAvatarClick }: { onAvatarClick: () => void }) {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 pb-16 pt-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,.9),transparent_22rem),radial-gradient(circle_at_14%_20%,rgba(255,191,205,.62),transparent_23rem),radial-gradient(circle_at_88%_78%,rgba(198,177,229,.55),transparent_28rem)]" />
      <div className="absolute left-[7%] top-[24%] h-3 w-3 rounded-full bg-butter/70 blur-[1px]" />
      <div className="absolute bottom-[18%] right-[12%] h-4 w-4 rounded-full bg-rose/60 blur-[1px]" />
      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }}>
          <p className="eyebrow"><Sparkles size={13} /> today is all about you <Sparkles size={13} /></p>
          <h1 className="mt-3 font-display text-5xl font-bold leading-[.9] tracking-tight text-ink sm:text-7xl md:text-8xl">Happy<br /><em className="font-handwritten text-rose not-italic">Birthday</em> <span className="text-4xl sm:text-5xl">🎂</span></h1>
          <p className="mt-4 font-handwritten text-4xl text-plum sm:text-5xl">{birthdayConfig.recipientName}</p>
        </motion.div>
        <motion.button
          type="button"
          aria-label="Bấm vào ảnh đại diện để có bất ngờ"
          onClick={onAvatarClick}
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.38, duration: 0.6 }}
          className="group relative my-7 rounded-full p-1.5 focus:outline-none focus:ring-4 focus:ring-rose/30"
        >
          <span className="absolute -inset-2 rounded-full bg-gradient-to-br from-rose via-butter to-[#9bcbd1] opacity-80 blur-[2px]" />
          <motion.img animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} src={birthdayConfig.heroImage} alt={birthdayConfig.recipientName} className="relative h-36 w-36 rounded-full border-4 border-white object-cover shadow-soft sm:h-44 sm:w-44" />
          <Heart className="absolute -right-5 top-4 fill-rose text-rose animate-pulse-soft" size={23} />
          <Sparkles className="absolute -bottom-2 -left-6 text-butter" size={25} />
          <span className="sr-only">Bấm năm lần để mở bí mật</span>
        </motion.button>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.52, duration: 0.7 }}>
          <p className="mx-auto max-w-md text-sm leading-7 text-ink/70 sm:text-base">{birthdayConfig.mainMessage}</p>
          <p className="mt-3 font-handwritten text-2xl text-[#9b637c]">Chúc bạn có một ngày thật tuyệt vời ✨</p>
          <a href="#birthday-count" className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/55 px-5 py-3 text-sm font-bold text-ink backdrop-blur-md transition hover:-translate-y-1 hover:bg-white">Khám phá món quà <ArrowDown size={16} /></a>
        </motion.div>
      </div>
    </section>
  );
}
