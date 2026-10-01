import { Heart, Sparkles, Star } from "lucide-react";

const particles = [
  ["5%", "12%", 18, 0], ["13%", "72%", 14, 1.4], ["25%", "20%", 13, 2.1], ["78%", "11%", 16, 0.8],
  ["91%", "30%", 13, 1.8], ["87%", "82%", 18, 0.3], ["68%", "73%", 12, 2.7], ["43%", "88%", 15, 1.1]
] as const;

export function FloatingHearts({ intense = false }: { intense?: boolean }) {
  const amount = intense ? 34 : particles.length;
  return (
    <div className={intense ? "pointer-events-none fixed inset-0 z-[90] overflow-hidden" : "pointer-events-none absolute inset-0 overflow-hidden"} aria-hidden="true">
      {Array.from({ length: amount }, (_, index) => {
        const item = particles[index % particles.length];
        const Icon = index % 3 === 0 ? Heart : index % 3 === 1 ? Sparkles : Star;
        const style = intense
          ? { left: `${(index * 19) % 100}%`, animationDelay: `${(index % 8) * 0.16}s`, animationDuration: `${3.2 + (index % 4) * 0.45}s` }
          : { left: item[0], top: item[1], animationDelay: `${item[3]}s`, animationDuration: `${4.8 + (index % 3)}s` };
        return <Icon key={index} className={intense ? "absolute animate-heart-rain text-rose/80" : "absolute animate-drift text-white/70"} style={{ ...style, width: item[2], height: item[2] }} strokeWidth={1.5} fill={index % 3 === 0 ? "currentColor" : "none"} />;
      })}
    </div>
  );
}
