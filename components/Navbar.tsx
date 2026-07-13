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
    label: "Career",
    children: [
      {
        label: "POONG Crew",
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
        label: "Fan Cam",
        href: "/videos/fancam",
      },
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

const themes = [
  {
    id: "transparent",
    color: "rgba(255,255,255,.08)",
  },
  {
    id: "aurora",
    color: "linear-gradient(90deg,#ff8b5c,#ffd15c,#c07cff,#6ab8ff)",
  },
  {
    id: "blue",
    color: "linear-gradient(90deg,#0f3d70,#2b6fff,#6ab8ff)",
  },
  {
    id: "purple",
    color: "linear-gradient(90deg,#4c1d95,#8b5cf6,#c084fc)",
  },
  {
    id: "dark",
    color: "linear-gradient(90deg,#111,#222,#444)",
  },
];
export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  
  const [themeOpen, setThemeOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const [mobileOpen, setMobileOpen] =
    useState<Record<string, boolean>>({});

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("theme") || "aurora";

    document.body.dataset.theme = savedTheme;
  }, []);

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

  const changeTheme = (theme: string) => {
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
    setThemeOpen(false);
  };
  const isActive = (href?: string) => {
    if (!href) return false;

    return (
      pathname === href ||
      pathname.startsWith(href + "/")
      
    );
  };
  const renderMobileItem = (item: (typeof navItems)[number]) => {
  if (!item.children) {
    return (
      <button
        key={item.href}
        onClick={() => handleNavigate(item.href!)}
       className="
text-[28px]
sm:text-[32px]
font-light
uppercase
tracking-[0.06em]
leading-none
text-white
transition
hover:text-pink-100
"
      >
        {item.label}
      </button>
    );
  }

  return (
    <div
      key={item.label}
      className="flex flex-col items-center"
    >
      <button
        onClick={() =>
          setMobileOpen((prev) => ({
            ...prev,
            [item.label]: !prev[item.label],
          }))
        }
        className="
text-[28px]
sm:text-[32px]
font-light
uppercase
tracking-[0.06em]
leading-none
text-white
transition
hover:text-pink-100
"
      >
        {item.label}
      </button>

      {mobileOpen[item.label] && (
        <div className="mt-4 flex flex-col items-center gap-3">
          {item.children.map((child) => (
            <button
              key={child.href}
              onClick={() => handleNavigate(child.href)}
              className="
                text-xl
                text-white/70
                hover:text-white
                transition
              "
            >
              {"image" in child ? (
                <img
                  src={child.image}
                  className="h-8"
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
};
  const renderDesktopItem = (item: (typeof navItems)[number]) => {
  if (!item.children) {
    return (
      <button
        key={item.href}
        onClick={() => handleNavigate(item.href!)}
        className={`
          h-10
          flex
          items-center
          justify-center
          text-sm xl:text-base
          transition
          ${
            isActive(item.href)
              ? "pastel-light"
              : "text-white/80 hover:text-white"
          }
        `}
      >
        {item.label}
      </button>
    );
  }

  return (
    <div
      key={item.label}
      className="group relative flex h-10 items-center"
    >
      <button
        className={`
          h-10
          flex
          items-center
          justify-center
          text-sm xl:text-base
          transition
          ${
            item.children.some((c) => isActive(c.href))
              ? "pastel-light"
              : "text-white/80 hover:text-white"
          }
        `}
      >
        {item.label}
      </button>

      <div
        className="
          absolute
          left-1/2
          top-full
          -translate-x-1/2
          pt-2
          w-56
          pointer-events-none
          opacity-0
          transition
          group-hover:pointer-events-auto
          group-hover:opacity-100
        "
      >
        <div className="rounded-2xl border border-white/10 bg-black/70 backdrop-blur-2xl p-2">
          {item.children.map((child) => (
            <button
              key={child.href}
              onClick={() => handleNavigate(child.href)}
              className="flex w-full items-center rounded-xl px-4 py-3 text-left text-sm text-white/80 hover:bg-white/10"
            >
              {"image" in child ? (
                <img src={child.image} className="h-8" />
              ) : (
                child.label
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
  const renderItem = (item: (typeof navItems)[number]) => {
    if (!item.children) {
      return (
        <button
          key={item.href}
          onClick={() => handleNavigate(item.href!)}
          className={`
          h-10
          px-0
          text-sm xl:text-base
          transition
          ${isActive(item.href)
                        ? "pastel-light"
                        : "text-white/80 hover:text-white"
                      }
          `}
        >
          {item.label}
        </button>
        
      );
    }

    return (
      <div
  key={item.label}
  className="group relative flex h-10 items-center"
>
        <button
  className={`
    h-10
    flex
    items-center
    justify-center
    text-sm xl:text-base
    transition
    ${
      item.children.some((child) => isActive(child.href))
        ? "pastel-light"
        : "text-white/80 hover:text-white"
    }
  `}
>
  {item.label}
</button>
        <div
          className="
          absolute
          left-1/2
          top-full
          -translate-x-1/2

          pt-2
          w-56

          pointer-events-none
          opacity-0

          transition
          duration-200

          group-hover:pointer-events-auto
          group-hover:opacity-100
          "
        >
          <div
            className="
            rounded-2xl
            border
            border-white/10
            bg-black/70
            backdrop-blur-2xl
            p-2
            "
          >
            {item.children.map((child) => (
              <button
                key={child.href}
                onClick={() =>
                  handleNavigate(child.href)
                }
                className="flex w-full items-center rounded-xl px-4 py-3 text-left text-sm text-white/80 hover:bg-white/10"
              >
                {"image" in child ? (
                  <img
                    src={child.image}
                    className="h-8"
                  />
                ) : (
                  child.label
                )}
              </button>
            ))}
          </div>
        </div>
        </div> 
        );
      };
        return (
        <>
          <TransitionOverlay show={loading} />

          <header
                          className="
                  fixed
                  inset-x-0
                  top-0
                  z-[100]
                  h-20
                  text-white
  "
            /*style={{
              background:
                "linear-gradient(90deg,#2b0806 0%,#551a12 35%,#4a140e 65%,#240605 100%)",
              boxShadow: "0 10px 25px rgba(0,0,0,.35)",
            }}
              */
            /*style={{
            background: `
              radial-gradient(circle at 50% 45%, rgba(255,255,255,.75) 0%, rgba(255,255,255,.25) 25%, transparent 55%),
              radial-gradient(circle at 50% 0%, rgba(255,255,255,.18) 0%, transparent 45%),
              linear-gradient(
                90deg,
                #FF4500 0%,
                #FFA500 32%,
                #8A2BE2 66%,
                #4682B4 100%
              )
            `,
          }}*/
            style={{
              background: "var(--menu-bg)"
            }}
          >
            <div
              className="
                mx-auto
                flex
                h-20
                max-w-7xl
                items-center

                px-2
                md:px-3
                xl:px-8
                "
            >
              {/* LEFT */}
<nav
  className="
    hidden
    md:flex
    flex-1
    justify-end
    items-center
    gap-8
  "
>                
{navItems.slice(0,4).map(renderDesktopItem)}             
              </nav>

              {/* LOGO */}
              <button
                onClick={() => handleNavigate("/")}
                className="
                mr-3
                mx-10
                font-logo
                pastel-light

                text-3xl
                xl:text-5xl

                font-black
                tracking-tight
                "
              >
                lighT
              </button>

              {/* RIGHT */}
<nav
  className="
    hidden
    md:flex
    flex-1
    items-center
    gap-8
  "
>
{navItems.slice(4).map(renderDesktopItem)}                
                <div className="ml-2 flex items-center gap-2">
                  {themes.map((theme) => (
                    <button
                      key={theme.id}
                      onClick={() => changeTheme(theme.id)}
                      title={theme.id}
                      className="
                      h-4
                      w-4
                      rounded-full
                      border
                      border-white/40
                      transition
                      hover:scale-125
                    "
                      style={{
                        background: theme.color,
                      }}
                    />
                  ))}
                </div>
           
              </nav>




              {/* Mobile menu button */}
              <div className="mr-3 flex items-center gap-2 md:hidden">
                {themes.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => changeTheme(theme.id)}
                    className="
                      h-3.5
                      w-3.5
                      rounded-full
                      border
                      border-white/40
                    "
                    style={{
                      background: theme.color,
                    }}
                  />
                ))}
              </div>
              <button
                onClick={() => setOpen(!open)}
                className="ml-auto flex h-10 w-10 items-center justify-center md:hidden"
              >
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <defs>
                    <linearGradient id="menuGradient" x1="0" x2="1">
                      <stop offset="0%" stopColor="#dff8ff" />
                      <stop offset="50%" stopColor="#9ddcff" />
                      <stop offset="100%" stopColor="#69b8ff" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M3 6h18M3 12h18M3 18h18"
                    stroke="url(#menuGradient)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

            </div>

            {/* Mobile menu */}
            {open && (

              <div
                className="
                  fixed
                  inset-0
                  z-[300]
                  flex
                  flex-col
                  backdrop-blur-xl
                  "
                /*
                style={{
                  background:
                    "linear-gradient(135deg, rgba(102, 220, 250, 0.58), rgba(160,220,255,.48))",
                  backdropFilter: "blur(24px)",
                }}*/
                style={{
                  background: "var(--menu-bg)"
                }}
              >
                <button
                  onClick={() => setOpen(false)}
                  className="
                          absolute
                          top-5
                          right-8
                          z-50
                          h-10
                          w-10
                          flex
                          items-center
                          justify-center
                        "

                >
                  <svg
                    className="h-8 w-8 text-white transition-transform duration-300 rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 6L18 18" />
                    <path d="M18 6L6 18" />

                  </svg>
                </button>
<div
  className="
    flex-1
    overflow-y-auto
    overscroll-contain
  "
>
                 <div
  className="
    flex
    flex-col
    items-center
    pt-24
    pb-16
    space-y-5
    min-h-max
  "
>

                   {navItems.map(renderMobileItem)}
                    <div className="mb-8 flex justify-center gap-4">

                      {themes.map((theme) => (
                        <button
                          key={theme.id}
                          onClick={() => changeTheme(theme.id)}
                          className="
        h-9
        w-9
        rounded-full
        border
        border-white/40
      "
                          style={{
                            background: theme.color,
                          }}
                        />
                      ))}

                    </div>
<div className="pt-10 pb-12">                      
                      <div className="flex justify-center gap-6">

                        <a
                          href="https://www.facebook.com/lighT.sye"
                          target="_blank"
                        >

                          <img
                            src="/images/facebook.png"
                            className="h-8"
                          />

                        </a>

                        <a
                          href="https://www.instagram.com/do.nathnim"
                          target="_blank"
                        >

                          <img
                            src="/images/instagram.png"
                            className="h-8"
                          />

                        </a>

                        <a
                          href="https://www.tiktok.com/@do.nathnim_"
                          target="_blank"
                        >

                          <img
                            src="/images/tiktok.png"
                            className="h-8"
                          />

                        </a>

                        <a
                          href="https://www.youtube.com/@lighT-official-T"
                          target="_blank"
                        >

                          <img
                            src="/images/youtube.png"
                            className="h-8"
                          />

                        </a>
                        <a
                          href="https://www.threads.com/@do.nathnim"
                          target="_blank"
                        >

                          <img
                            src="/images/threads.png"
                            className="h-8"
                          />

                        </a>
                        <a
                          href="https://share.1creators.com/fandom-tinie-oiii"
                          target="_blank"
                        >

                          <img
                            src="/images/1creators.jpg"
                            className="h-8"
                          />

                        </a>
                      </div>

                    </div>

                  </div>
                </div>
              </div>

            )}

          </header>

        </>
        );
}