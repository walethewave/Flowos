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
        },
      },
    },
  },
  plugins: [],
};

export default config;
