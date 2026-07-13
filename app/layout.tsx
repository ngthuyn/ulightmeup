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



const syne = Syne({
  subsets: ["latin"],
  variable: "--font-logo",
  display: "block",
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
  title: "u lighT me up!",
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
        ${syne.variable}
        ${ebGaramond.variable}
        h-full
        antialiased
      `}
    >
      <body className={`${playfair.className} min-h-full`}>
        <div
          className="fixed inset-0 -z-10"
          style={{
            backgroundImage: "url('/videos/bg.gif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

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