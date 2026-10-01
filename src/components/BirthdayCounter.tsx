import { useEffect, useState } from "react";
import { CakeSlice, CalendarHeart, Clock3 } from "lucide-react";
import { birthdayConfig } from "../config/birthday";
import { SectionReveal } from "./SectionReveal";

type Counter = { days: number; hours: number; minutes: number; seconds: number };

function getCountdown(): Counter {
  const now = new Date();
  const [year, month, day] = birthdayConfig.birthday.split("-").map(Number);
  const next = new Date(now.getFullYear(), month - 1, day, 0, 0, 0);
  if (next <= now) next.setFullYear(now.getFullYear() + 1);
  const diff = Math.max(0, next.getTime() - now.getTime());
  return { days: Math.floor(diff / 86400000), hours: Math.floor(diff / 3600000) % 24, minutes: Math.floor(diff / 60000) % 60, seconds: Math.floor(diff / 1000) % 60 };
}

function daysLived() { return Math.floor((Date.now() - new Date(birthdayConfig.birthday).getTime()) / 86400000).toLocaleString("vi-VN"); }

export function BirthdayCounter() {
  const [countdown, setCountdown] = useState(getCountdown);
  useEffect(() => { const id = window.setInterval(() => setCountdown(getCountdown()), 1000); return () => window.clearInterval(id); }, []);
  const units = [["ngày", countdown.days], ["giờ", countdown.hours], ["phút", countdown.minutes], ["giây", countdown.seconds]];
  return (
    <section id="birthday-count" className="px-5 py-20 sm:py-28">
      <SectionReveal className="mx-auto max-w-5xl rounded-[2rem] border border-white/70 bg-white/55 p-6 shadow-soft backdrop-blur-xl sm:p-10">
        <div className="grid items-center gap-10 md:grid-cols-[.9fr_1.1fr]">
          <div className="text-center md:text-left">
            <p className="eyebrow justify-center md:justify-start"><CakeSlice size={14} /> chào mừng tuổi mới</p>
            <div className="mt-3 flex items-end justify-center gap-3 md:justify-start"><span className="font-display text-8xl font-bold leading-none text-rose sm:text-9xl">{birthdayConfig.age}</span><span className="mb-3 font-handwritten text-3xl text-plum">tuổi rồi!</span></div>
            <p className="mt-5 flex items-center justify-center gap-2 text-sm leading-6 text-ink/70 md:justify-start"><CalendarHeart size={16} className="text-rose" /> Bạn đã làm thế giới này vui hơn trong <b>{daysLived()} ngày</b>.</p>
          </div>
          <div>
            <p className="mb-4 flex items-center justify-center gap-2 text-center text-xs font-bold uppercase tracking-[.16em] text-plum/70"><Clock3 size={14} /> Đếm đến sinh nhật tiếp theo</p>
            <div className="grid grid-cols-4 gap-2 sm:gap-3">{units.map(([label, value]) => <div key={String(label)} className="rounded-2xl bg-[#fffaf1] px-2 py-4 text-center shadow-[inset_0_0_0_1px_rgba(244,192,178,.35)]"><strong className="block font-display text-3xl text-ink sm:text-4xl">{String(value).padStart(2, "0")}</strong><span className="mt-1 block text-[10px] uppercase tracking-wider text-ink/55">{label}</span></div>)}</div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
