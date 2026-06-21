import type { Metadata } from "next";
import {
  Noto_Sans,
  Lilita_One,
} from "next/font/google";

import "./globals.css";

const lilita = Lilita_One({
  subsets: ["latin"],
  weight: "400",
});

const notoSans = Noto_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
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
      <body className={`${notoSans.className} min-h-full`}>
        {children}
      </body>
    </html>
  );
}