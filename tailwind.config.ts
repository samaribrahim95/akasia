import type { Config } from "tailwindcss";

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
        padding: '4rem',
        screens: {
          m: '600px',
          md: '728px',
          lg: '984px',
          xl: '1080px'
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
