// tailwind.config.js
const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Habilita el modo oscuro vía class
  theme: {
    extend: {
      colors: {
        // Ejemplo con variables CSS (usadas en globals.css)
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      // Breakpoints estándar (puedes sobreescribirlos)
      screens: {
        "2xs": "320px",
        xs: "480px",
      },
    },
  },
  plugins: [
    // Plugin para breakpoints personalizados (ancho + alto)
    plugin(function ({ addVariant }: { addVariant: any }) {
      // Breakpoint: 1536px de ancho Y 880px de alto máximo
      addVariant(
        "custom-bp",
        "@media (min-width: 1536px) and (max-height: 880px)"
      );

      // Más breakpoints personalizados si los necesitas
      addVariant("h-sm", "@media (min-height: 640px)");
    }),

    // Plugin para utilidades adicionales
    plugin(function ({ addUtilities }: { addUtilities: any }) {
      addUtilities({
        // Ejemplo: Utilidad para texto con sombra
        ".text-shadow": {
          "text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.5)",
        },
      });
    }),
  ],
};
