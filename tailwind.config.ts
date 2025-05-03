import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
        unica: ["var(--font-unica-one)", "sans-serif"],
      },
      screen: {
        tall: { raw: "(min-width: 1536px) and (max-height: 890px)" },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

export default config;
