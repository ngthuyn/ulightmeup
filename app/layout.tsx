import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Syne,
  Cormorant_Garamond,
} from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  variable: "--font-body",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-logo",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "vietnamese"],
  variable: "--font-quote",
  style: ["normal", "italic"],
  display: "swap",
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
    <html lang="vi" className="h-full antialiased">
      <body className={`${cormorant.className} min-h-full`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
<html
  lang="vi"
  className={`${plusJakarta.variable} ${syne.variable} ${cormorant.variable} h-full antialiased`}
></html>