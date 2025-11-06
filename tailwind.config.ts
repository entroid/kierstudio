import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  safelist: ["min-h-[200px]"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
