import type { Config } from "tailwindcss";

const config: Config = {
  content:[
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono:['var(--font-fira-code)', 'monospace'],
      }
    },
  },
  plugins:[],
};
export default config;