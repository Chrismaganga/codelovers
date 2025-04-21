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
        "codelovers-blue": "var(--codelovers-blue)",
        "codelovers-blue-dark": "var(--codelovers-blue-dark)",
        "codelovers-gray": "var(--codelovers-gray)",
        "codelovers-light-gray": "var(--codelovers-light-gray)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-merriweather)"],
      },
    },
  },
  plugins: [],
};

export default config; 