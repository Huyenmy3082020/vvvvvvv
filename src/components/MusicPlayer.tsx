import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { birthdayConfig } from "../config/birthday";

type MusicPlayerProps = { shouldStart: boolean };

export function MusicPlayer({ shouldStart }: MusicPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const contextRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);
  const playingRef = useRef(false);
  const getContext = () => { contextRef.current ??= new AudioContext(); return contextRef.current; };
  const tone = (frequency: number, time: number, context: AudioContext) => {
    const oscillator = context.createOscillator(); const gain = context.createGain();
    oscillator.type = "triangle"; oscillator.frequency.value = frequency; gain.gain.setValueAtTime(0.0001, time); gain.gain.exponentialRampToValueAtTime(muted ? 0.0001 : 0.022, time + 0.015); gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.28); oscillator.connect(gain).connect(context.destination); oscillator.start(time); oscillator.stop(time + 0.32);
  };
  const loop = () => { if (!playingRef.current) return; const context = getContext(); const start = context.currentTime + 0.04; [523.25, 659.25, 783.99, 659.25, 587.33, 698.46, 783.99, 1046.5].forEach((note, index) => tone(note, start + index * 0.34, context)); timerRef.current = window.setTimeout(loop, 2920); };
  const toggle = () => { const next = !playing; setPlaying(next); playingRef.current = next; if (next) { getContext().resume().then(loop); } else if (timerRef.current) window.clearTimeout(timerRef.current); };
  useEffect(() => { if (shouldStart && !playingRef.current) toggle(); }, [shouldStart]); // User gesture from opening gift permits music.
  useEffect(() => () => { if (timerRef.current) window.clearTimeout(timerRef.current); }, []);
  return <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-2xl border border-white/50 bg-white/75 p-2.5 pr-3 shadow-card backdrop-blur-xl"><button onClick={toggle} className="grid h-9 w-9 place-items-center rounded-xl bg-ink text-white" aria-label={playing ? "Tạm dừng nhạc" : "Phát nhạc"}>{playing ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}</button><div className="hidden min-w-0 sm:block"><p className="max-w-28 truncate text-[11px] font-bold text-ink">{birthdayConfig.music.title}</p><p className="text-[9px] text-ink/50">{birthdayConfig.music.artist}</p></div><button onClick={() => setMuted((value) => !value)} className="ml-1 text-ink/55 hover:text-ink" aria-label={muted ? "Bật tiếng" : "Tắt tiếng"}>{muted ? <VolumeX size={16} /> : <Volume2 size={16} />}</button></div>;
}
