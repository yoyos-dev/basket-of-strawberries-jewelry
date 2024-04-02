import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        hoverA: {
          '0%, 100%': { transform: 'translate(0%,-10%) rotate(-12deg)' },
          '50%': { transform: 'translate(0%,0%) rotate(-10deg)' },
        },
        hoverB: {
          '0%, 100%': { transform: 'translate(0%,10%) rotate(12deg)' },
          '50%': { transform: 'translate(0%,0%) rotate(10deg)' },
        },
        hoverC: {
          '0%, 100%': { transform: 'translate(0%,-8%) rotate(13deg)' },
          '50%': { transform: 'translate(0%,2%) rotate(8deg)' },
        },
      },
      animation: {
        hoverA: 'hoverA 5s ease-in-out infinite',
        hoverB: 'hoverB 5s ease-in-out infinite',
        hoverC: 'hoverC 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
