"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import TransitionOverlay from "@/components/TransitionOverlay";

const navItems = [
  {
    label: "Home",
    href: "/home",
  },
  {
    label: "Profile",
    href: "/profile",
  },
  {
    label: "Career Journey",
    children: [
      {
        label: "Poong Crew",
        href: "/career-journey/poong-crew",
      },
      {
        label: "TV Shows",
        href: "/career-journey/tv-shows",
      },
    ],
  },
  {
    label: "Videos",
    children: [
      {
        label: "Focus Cam",
        href: "/videos/focus-cam",
      },
      {
        label: "Dance Compilation",
        href: "/videos/dance-compilation",
      },
      {
        label: "Song Cover",
        href: "/videos/song-cover",
      },
    ],
  },
  {
    label: "Gallery",
    
        href: "/gallery",
     
  
  },
  {
    label: "Newspaper",
    href: "/newspapers",
  },
  {
    label: "TMI",
    children: [
      {
        label: "lighT's FACT CHECK",
        href: "/tmi/fact-check",
      },
      {
  image: "/images/tinie_1.png",
  href: "/tmi/tinies-corner",
},
    ],
  },
];
export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const [mobileOpen, setMobileOpen] =
    useState<Record<string, boolean>>({});

  useEffect(() => {
    setLoading(false);
  }, [pathname]);

  const handleNavigate = (href: string) => {
    if (pathname === href) return;

    setOpen(false);
    setLoading(true);

    if (href === "/" || href === "/home") {
      sessionStorage.setItem("musicStarted", "true");
    }

    setTimeout(() => {
      router.push(href);
    }, 220);
  };

  const isActive = (href?: string) => {
    if (!href) return false;

    return (
      pathname === href ||
      pathname.startsWith(href + "/")
    );
  };
  return (
<>
<TransitionOverlay show={loading} />

<header className="fixed inset-x-0 top-0 z-[100] border-b border-white/5 bg-white/5 backdrop-blur-2xl text-white">

<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">

<button
onClick={() => handleNavigate("/")}
className="font-logo pastel-light text-3xl font-extrabold"
>
lighT
</button>

<nav className="hidden md:flex items-center gap-2">
{navItems.map((item) => {



if(!item.children){

return(

<button
key={item.href}
onClick={()=>handleNavigate(item.href!)}
className={`h-10 px-4 transition

${
isActive(item.href)
?

"pastel-light"

:

"text-white/80 hover:text-white"

}`}

>

{item.label}

</button>

);

}

return(

<div
key={item.label}
className="group relative"
>

<button
className={`flex h-10 items-center gap-1 px-4 transition ${
  item.children.some((child) => isActive(child.href))
    ? "pastel-light"
    : "text-white/80 hover:text-white"
}`}
>

{item.label}

<svg

className="h-3 w-3 transition group-hover:rotate-180"

viewBox="0 0 20 20"

fill="currentColor"

>

<path d="M5 7l5 5 5-5"/>

</svg>

</button>

<div

className="pointer-events-none absolute left-1/2 top-full mt-2 w-56 -translate-x-1/2 rounded-2xl border border-white/10 bg-black/70 p-2 opacity-0 backdrop-blur-2xl transition duration-300 group-hover:pointer-events-auto group-hover:opacity-100"

>

{item.children.map((child) => (
  <button
    key={child.href}
    onClick={() => handleNavigate(child.href)}
    className="flex w-full items-center rounded-xl px-4 py-3 text-left text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
  >
    {"image" in child ? (
      <img
        src={child.image}
        alt="Tinie"
        className="h-8 w-auto object-contain"
      />
    ) : (
      child.label
    )}
  </button>
))}

</div>

</div>

);

})}
</nav>

{/* Mobile menu button */}
<button
  onClick={() => setOpen(!open)}
  className="md:hidden flex h-10 w-10 items-center justify-center"
>
  <svg
    className="h-7 w-7"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    {open ? (
      <>
        <path d="M6 6L18 18" />
        <path d="M18 6L6 18" />
      </>
    ) : (
      <>
        <path d="M3 6h18" />
        <path d="M3 12h18" />
        <path d="M3 18h18" />
      </>
    )}
  </svg>
</button>

</div>

{/* Mobile menu */}
{open && (
  <div className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur-2xl">
    <div className="px-4 py-4 space-y-1">

      {navItems.map((item) => {


        // Menu không có submenu
        if (!item.children) {
          return (
            <button
              key={item.href}
              onClick={() => handleNavigate(item.href!)}
              className={`flex w-full justify-between rounded-xl px-4 py-3 text-left transition ${
                isActive(item.href)
                  ? "bg-white/10 pastel-light"
                  : "text-white/80 hover:bg-white/5"
              }`}
            >
              {item.label}
            </button>
          );
        }

        // Menu có submenu
        return (
          <div key={item.label}>
            <button
              onClick={() =>
                setMobileOpen((prev) => ({
                  ...prev,
                  [item.label!]: !prev[item.label!],
                }))
              }
              className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-white/90 hover:bg-white/5"
            >
              <span>{item.label}</span>

              <svg
                className={`h-4 w-4 transition ${
                  mobileOpen[item.label!] ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5 7l5 5 5-5" />
              </svg>
            </button>

            {mobileOpen[item.label!] && (
              <div className="ml-5 mt-1 space-y-1 border-l border-white/10 pl-3">
              {item.children.map((child) => (
  <button
    key={child.href}
    onClick={() => handleNavigate(child.href)}
    className="flex w-full items-center rounded-lg px-3 py-2 text-left text-sm text-white/70 hover:bg-white/5 hover:text-white"
  >
    {"image" in child ? (
      <img
        src={child.image}
        alt="Tinie"
        className="h-8 w-auto object-contain"
      />
    ) : (
      child.label
    )}
  </button>
))}
              </div>
            )}
          </div>
        );
      })}

    </div>
  </div>
)}

</header>

</>
);
}