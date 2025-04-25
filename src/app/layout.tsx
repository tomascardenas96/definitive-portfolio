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
  title: "Tomas Cardenas - Portafolio personal",
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
      className={`${montserrat.variable} ${unicaOne.variable}scrollbar-thumb-sky-700 scrollbar-track-sky-300`}
    >
      <body className="global-font xl:h-screen">
        <div id="presentation">
          <SessionWrapper>{children}</SessionWrapper>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
