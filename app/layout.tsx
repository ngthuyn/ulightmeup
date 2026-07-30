import LayoutWrapper from "@/components/LayoutWrapper";
import type { Metadata } from "next";
import Script from "next/script";
import {
  Plus_Jakarta_Sans,
  Syne,
  EB_Garamond,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { DynaPuff } from "next/font/google";

export const dyna = DynaPuff({
  subsets:["latin"],
  variable:"--font-logo",
  weight:["600"],
});
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-quote",
display: "block",  
});
const ebGaramond = EB_Garamond({
  subsets: ["latin", "vietnamese"],
  variable: "--font-quote",
  style: ["normal", "italic"],
display: "block",
});

export const metadata: Metadata = {
  title: "lài tì lái ti!",
  description: "Fanpage profile for lighT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`
        ${playfair.variable}
        ${dyna.variable}
        ${ebGaramond.variable}
        h-full
        antialiased
      `}
    >
      <body className={`${ebGaramond.className} min-h-full bg-black
    text-white`}>
     
       <LayoutWrapper>

    {children}

  </LayoutWrapper>

        <Script
          src="https://www.tiktok.com/embed.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
