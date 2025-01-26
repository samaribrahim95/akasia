import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          m: '600px',
          md: '728px',
          lg: '984px',
          xl: '1000px'
        }
      }
    },
  },
  plugins: [require("@midudev/tailwind-animations")],
} satisfies Config;
