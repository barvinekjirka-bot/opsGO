import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#040302",
        signal: {
          DEFAULT: "#FF7A1A",
          dim: "#B3550F",
          glow: "#FFA25C",
        },
        gold: {
          DEFAULT: "#D8B27C",
          dim: "#9C7C4E",
          glow: "#EAD2A6",
        },
        line: "rgba(255,214,170,0.09)",
        glass: "rgba(255,200,150,0.025)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        serif: ["var(--font-serif)", "serif"],
      },
      backdropBlur: {
        xl: "24px",
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseSignal: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        pulseSignal: "pulseSignal 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
