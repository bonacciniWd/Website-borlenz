import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'metal-gradient': 'linear-gradient(90deg, var(--bgbrandWhite), #d4d4d4 15%, #a0a0a0 30%, #6c6c6c 45%, var(--bgbrandBlack) 60%, #6c6c6c 75%, #a0a0a0 90%, var(--bgbrandWhite))',
      },
      colors: {
        brandBlack: "#000000",
        brandBlue: "#514192",
        brandGreen: "#04d789",
        brandOrange: "#f07405",
        brandGray: "#161f24",
        brandWhite: "#ffffff",
        brandVrz: "#C836A3",
      },
      fontFamily: {
        sans: ["Sitka", "sans-serif"],
        heading: ["Brother-1816-ExtraBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
