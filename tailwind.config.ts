import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: "#1e3a5f",
          accent: "#10b981",
          warm: "#f8f7f4",
          dark: "#0d1117",
          text: "#1a1a2e",
          muted: "#6b7280",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "ping-slow": "ping 2s cubic-bezier(0,0,0.2,1) infinite",
        "spin-slow": "spin 8s linear infinite",
        typewriter: "typewriter 0.05s steps(1) forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { textShadow: "0 0 8px #10b981, 0 0 20px #10b98166" },
          "50%": { textShadow: "0 0 20px #10b981, 0 0 40px #10b98199" },
        },
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(30,58,95,0.15) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
