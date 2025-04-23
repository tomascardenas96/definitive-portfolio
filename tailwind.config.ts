import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
        unica: ["var(--font-unica-one)", "sans-serif"],
      },
      screens: {
        custom: { raw: "(min-width: 1536px) and (min-height: 960px)" },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
