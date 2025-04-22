import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import SessionWrapper from "@/providers/SessionWrapper";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
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
      lang="en"
      className={`${montserrat.variable} scrollbar-thumb-sky-700 scrollbar-track-sky-300`}
      
    >
      <body className="xl:h-screen">
        <div id="presentation">
          <SessionWrapper>{children}</SessionWrapper>
        </div>
      </body>
    </html>
  );
}
