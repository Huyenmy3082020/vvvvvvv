import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BirthdayCake } from "./components/BirthdayCake";
import { BirthdayCounter } from "./components/BirthdayCounter";
import { BirthdayLetter } from "./components/BirthdayLetter";
import { FinalSection } from "./components/FinalSection";
import { FloatingHearts } from "./components/FloatingHearts";
import { HeroBirthday } from "./components/HeroBirthday";
import { IntroGift } from "./components/IntroGift";
import { MemoryGallery } from "./components/MemoryGallery";
import { MusicPlayer } from "./components/MusicPlayer";
import { RandomMessage } from "./components/RandomMessage";
import { SpecialThings } from "./components/SpecialThings";
import { SurpriseButton } from "./components/SurpriseButton";
import { Timeline } from "./components/Timeline";
import { Wishes } from "./components/Wishes";
import { fireConfetti, fireHearts } from "./lib/celebrate";

const konami = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

export default function App() {
  const [opened, setOpened] = useState(false);
  const [avatarClicks, setAvatarClicks] = useState(0);
  const [heartRain, setHeartRain] = useState(false);
  const [secret, setSecret] = useState<string | null>(null);

  const celebrateSecret = (message: string) => {
    fireConfetti(true); fireHearts(); setHeartRain(true); setSecret(message);
    window.setTimeout(() => setHeartRain(false), 4600);
    window.setTimeout(() => setSecret(null), 4200);
  };

  useEffect(() => {
    const buffer: string[] = [];
    const detectKonami = (event: KeyboardEvent) => {
      buffer.push(event.key); if (buffer.length > konami.length) buffer.shift();
      if (buffer.join("|").toLowerCase() === konami.join("|")) celebrateSecret("Bạn đã tìm thấy mã bí mật! Trời mưa trái tim rồi nè ♥");
    };
    window.addEventListener("keydown", detectKonami); return () => window.removeEventListener("keydown", detectKonami);
  }, []);

  const handleAvatarClick = () => {
    const next = avatarClicks + 1; setAvatarClicks(next);
    if (next >= 5) { setAvatarClicks(0); celebrateSecret("Sao bấm mặt người ta hoài vậy 😑"); }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fff8f2] text-ink selection:bg-rose/40">
      <AnimatePresence>{!opened && <IntroGift onOpen={() => { fireConfetti(true); setOpened(true); }} />}</AnimatePresence>
      <FloatingHearts />
      {heartRain && <FloatingHearts intense />}
      <main className={`transition-opacity duration-700 ${opened ? "opacity-100" : "opacity-0"}`}>
        <HeroBirthday onAvatarClick={handleAvatarClick} />
        <BirthdayCounter />
        <MemoryGallery />
        <Timeline />
        <SpecialThings />
        <RandomMessage />
        <SurpriseButton />
        <BirthdayCake />
        <BirthdayLetter />
        <Wishes />
        <FinalSection onFooterHeart={() => celebrateSecret("Trái tim này cũng đang gửi cho bạn một cái ôm thật chặt. ♥")} />
      </main>
      <MusicPlayer shouldStart={opened} />
      <AnimatePresence>{secret && <motion.div initial={{ opacity: 0, y: 18, x: "-50%" }} animate={{ opacity: 1, y: 0, x: "-50%" }} exit={{ opacity: 0, y: 10, x: "-50%" }} className="fixed bottom-20 left-1/2 z-[110] w-[min(90vw,430px)] rounded-2xl bg-ink px-5 py-4 text-center text-sm font-bold text-white shadow-2xl">{secret}</motion.div>}</AnimatePresence>
    </div>
  );
}
