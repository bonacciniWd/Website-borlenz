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
        heading: ["Brother-1816-ExtraBold", "sans-serif"], // Usando a fonte aqui
      },
    },
  },
  plugins: [],
};

export default config;
