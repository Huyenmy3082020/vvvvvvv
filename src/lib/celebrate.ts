import confetti from "canvas-confetti";

const palette = ["#ef9daf", "#f7cf70", "#8bc8d3", "#9a7bbd", "#fff9e9"];

export function fireConfetti(isBig = false) {
  const options = { colors: palette, disableForReducedMotion: true, zIndex: 100 };
  confetti({ ...options, particleCount: isBig ? 130 : 68, spread: isBig ? 110 : 70, origin: { y: 0.64 } });
  if (isBig) {
    window.setTimeout(() => confetti({ ...options, particleCount: 85, spread: 95, origin: { x: 0.12, y: 0.7 } }), 180);
    window.setTimeout(() => confetti({ ...options, particleCount: 85, spread: 95, origin: { x: 0.88, y: 0.7 } }), 340);
  }
}

export function fireHearts() {
  confetti({
    particleCount: 54,
    spread: 76,
    scalar: 1.25,
    shapes: ["circle"],
    colors: ["#ef9daf", "#ef9daf", "#fff1f0"],
    disableForReducedMotion: true,
    zIndex: 100,
    origin: { y: 0.72 }
  });
}
