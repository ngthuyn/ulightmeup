import type { Metadata } from "next";
import { Be_Vietnam_Pro, Lilita_One } from "next/font/google";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const lilita = Lilita_One({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "u lighT me up!",
  description: "Fanpage profile for lighT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="h-full antialiased">
      <body
        className={`${beVietnam.className} min-h-full`}
      >
        {children}
      </body>
    </html>
  );
}