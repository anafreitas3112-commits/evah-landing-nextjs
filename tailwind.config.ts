import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        canvas: "var(--bg-canvas)",
        surface: "var(--bg-surface)",
        "surface-sunken": "var(--bg-surface-sunken)",
        inverse: "var(--bg-inverse)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-tertiary": "var(--text-tertiary)",
        "text-on-inverse": "var(--text-on-inverse)",
        "border-subtle": "var(--border-subtle)",
        "border-default": "var(--border-default)",
        accent: "var(--accent)",
        "accent-strong": "var(--accent-strong)",
        "accent-soft": "var(--accent-soft)",
        gold: "var(--gold-500)",
        "gold-strong": "var(--gold-700)",
        "gold-soft": "var(--gold-100)",
      },
      maxWidth: {
        content: "1120px",
      },
    },
  },
  plugins: [],
};

export default config;
