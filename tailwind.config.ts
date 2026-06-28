import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#EDE6DC",
          50: "#F5F0EA",
          100: "#EDE6DC",
          200: "#E3D9CE",
          300: "#D5C9BB",
        },
        terracotta: {
          DEFAULT: "#9B5540",
          50: "#F8EBE6",
          100: "#EDD4C9",
          200: "#D4A088",
          300: "#BB7A62",
          400: "#A8654F",
          500: "#9B5540",
          600: "#854A38",
          700: "#6E3D2E",
          800: "#573026",
          900: "#40241C",
        },
        charcoal: {
          DEFAULT: "#1C1917",
          50: "#F5F5F4",
          100: "#E7E5E4",
          200: "#D6D3D1",
          300: "#A8A29E",
          400: "#78716C",
          500: "#57534E",
          600: "#44403C",
          700: "#292524",
          800: "#1C1917",
          900: "#0C0A09",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 24px rgba(28, 25, 23, 0.09)",
        card: "0 8px 32px rgba(28, 25, 23, 0.11)",
        nav: "0 4px 20px rgba(28, 25, 23, 0.09)",
      },
    },
  },
  plugins: [],
};

export default config;
