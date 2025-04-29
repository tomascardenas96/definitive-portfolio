import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
        unica: ["var(--font-unica-one)", "sans-serif"],
      },
      screens: {
        "tall": { raw: "(min-width: 1536px) and (max-height: 890px)" },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
