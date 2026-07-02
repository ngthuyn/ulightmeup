"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useState } from "react";
import TransitionOverlay from "@/components/TransitionOverlay";
import { useEffect } from "react";

const navItems = [
  { label: "Home", href: "/home" },
  { label: "Profile", href: "/profile" },
  { label: "Gallery", href: "/gallery" },
  { label: "Fancam", href: "/fancam" },
  { label: "", href: "/tmi", image: "/images/tinie_1.png" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname?.startsWith(href + "/"));

const linkClass = (href: string) =>
  `flex h-10 items-center justify-center px-3 lg:px-4
   text-sm font-semibold tracking-wide transition
   ${
     isActive(href)
       ? "pastel-light"
       : "text-white/80 hover:text-white"
   }`;
 const handleNavigate = (href: string) => {
  if (pathname === href) return;

  setOpen(false);
  setLoading(true);

  // Khi quay về Home hoặc Landing vẫn giữ trạng thái phát nhạc
  if (href === "/" || href === "/home") {
    sessionStorage.setItem("musicStarted", "true");
  }

  setTimeout(() => {
    router.push(href);
  }, 250);
};
useEffect(() => {
  setLoading(false);
}, [pathname]);
  return (
      <>
    <TransitionOverlay show={loading} />

<header className="fixed inset-x-0 top-0 z-[100] border-b border-white/5 bg-white/5 backdrop-blur-2xl text-white">    
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
<button
  onClick={() => handleNavigate("/")}
  className="flex items-center gap-1"
>         
          <span className="font-logo pastel-light text-2xl font-extrabold tracking-tight">
     lighT
</span>
        </button>

        {/* Desktop nav */}
<nav className="hidden md:flex items-center gap-3 lg:gap-5">          
          {navItems.map((item) =>
            item.image ? (
             <button
  key={item.href}
  onClick={() => handleNavigate(item.href)}
  aria-label={item.label}
  className={`flex h-10 px-3 lg:px-4 items-center justify-center transition ${
    isActive(item.href)
      ? "opacity-100"
      : "opacity-70 hover:opacity-100"
  }`}
>
  <img
    src={item.image}
    alt="Tinie"
    className={`h-10 w-auto object-contain transition ${
      isActive(item.href)
        ? "drop-shadow-[0_0_10px_rgba(96,165,250,.8)]"
        : ""
    }`}
  />
</button>
            ) : (
              <button
  key={item.href}
  onClick={() => handleNavigate(item.href)}
  className={linkClass(item.href)}
>
  {item.label}
</button>
            )
          )}
        </nav>



        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-9 w-9 items-center justify-center rounded-full text-white md:hidden"
        >
          {open ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
<div className="border-t border-white/5 bg-white/5 backdrop-blur-2xl px-4 pb-4 md:hidden">         
          <nav className="flex flex-col gap-1 pt-2">
            {navItems.map((item) =>
              item.image ? (
         <button
  key={item.href}
  onClick={() => handleNavigate(item.href)}
  aria-label="Tinie"
  className={`flex h-12 w-full items-center justify-center rounded-lg transition ${
    isActive(item.href)
      ? "bg-white/5"
      : "hover:bg-white/10"
  }`}
>
  <img
    src={item.image}
    alt="Tinie"
    className={`h-8 w-auto object-contain transition ${
      isActive(item.href)
        ? "scale-105 drop-shadow-[0_0_8px_rgba(96,165,250,.8)]"
        : "opacity-85"
    }`}
  />
</button>
              ) : (
                <button
  key={item.href}
  onClick={() => handleNavigate(item.href)} 
                  className={`rounded-lg px-3 py-2 ${linkClass(item.href)} ${
                    isActive(item.href) ? "bg-white/5" : "hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </button>
              )
            )}
          </nav>

          
        </div>
      )}
    </header>
    </>
  );
}
