import type { Metadata } from "next";
import { Montserrat, Unica_One } from "next/font/google";

import SessionWrapper from "@/providers/SessionWrapper";
import "./globals.css";
import { Toaster } from "sonner";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const unicaOne = Unica_One({
  subsets: ["latin"],
  variable: "--font-unica-one",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Tomas Cardenas - Desarrollador Web Full Stack",
  description: "Portafolio personal de Tomas Cardenas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${unicaOne.variable}scrollbar-thumb-sky-700 scrollbar-track-sky-300 dark`}
    >
      <body
        className="
          w-full 
          xl:min-h-[46.875rem] 
          global-font 
          xl:h-screen 
          bg-[var(--background)] 
          dark:bg-[var(--background-dark)] 
          dark:text-[var(--font-color-dark)] 
          transition-all 
          duration-400
          "
      >
        <div id="presentation" className=" max-w-[28.125rem] xl:min-w-max">
          <SessionWrapper>{children}</SessionWrapper>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
