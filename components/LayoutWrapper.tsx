"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  const isIntro = pathname === "/";

  return (
    <>
      {!isIntro && <Navbar />}
      {children}
      {!isIntro && <Footer />}
    </>
  );
}