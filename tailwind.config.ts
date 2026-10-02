import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          void: "#03050c",
          base: "#050713",
          dark: "#020308",
          card: "rgba(14, 18, 38, 0.65)",
          "card-hover": "rgba(22, 28, 58, 0.85)",
          glass: "rgba(18, 24, 52, 0.55)",
          "glass-strong": "rgba(15, 20, 44, 0.85)",
        },
        cosmic: {
          cyan: "#38bdf8",
          violet: "#8b5cf6",
          rose: "#f43f5e",
          amber: "#fbbf24",
          emerald: "#10b981",
          teal: "#14b8a6",
          nebula: "#a78bfa",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        mono: ["var(--font-fira)", "Fira Code", "JetBrains Mono", "monospace"],
        poetic: ["var(--font-caveat)", "Caveat", "cursive"],
      },
      boxShadow: {
        "cyan-glow": "0 0 25px rgba(56, 189, 248, 0.35)",
        "violet-glow": "0 0 25px rgba(139, 92, 246, 0.35)",
        "emerald-glow": "0 0 25px rgba(16, 185, 129, 0.35)",
        "amber-glow": "0 0 25px rgba(251, 191, 36, 0.35)",
        "cosmic-card": "0 16px 36px rgba(0, 0, 0, 0.6), 0 0 20px rgba(56, 189, 248, 0.15)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "orbit-spin": "spin 25s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
