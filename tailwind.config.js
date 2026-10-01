/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        handwritten: ["'Caveat'", "cursive"],
        sans: ["'DM Sans'", "sans-serif"]
      },
      colors: {
        ink: "#292342",
        plum: "#4f3e70",
        rose: "#ef9daf",
        blush: "#fff1f0",
        butter: "#f7cf70"
      },
      boxShadow: {
        soft: "0 18px 55px rgba(75, 47, 83, 0.15)",
        card: "0 12px 35px rgba(103, 67, 106, 0.12)"
      }
    }
  },
  plugins: []
};
