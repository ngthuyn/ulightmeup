"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import PageShell from "@/components/PageShell";
type MediaItem = {
  src: string;
  alt: string;
  title: string;
};

const mediaItems: MediaItem[] = [
  { src: "/images/lighT_ta_hanu.jpg", alt: "lighT", title: "" },
  { src: "/images/lighT_NA_18_05.jpg", alt: "lighT", title: "" },
  { src: "/images/lighT_na.jpg", alt: "lighT", title: "" },
  { src: "/images/lighT_TN.jpg", alt: "lighT", title: "" },
  { src: "/images/lighT_tamh2.jpg", alt: "lighT", title: "" },
  { src: "/images/lighT_ĐHHS.jpg", alt: "lighT", title: "ĐHS" },
  { src: "/images/lighT_dhhs2.jpg", alt: "lighT", title: "" },
  { src: "/images/lighT_TAMH_30_6.jpg", alt: "lighT", title: "" },
  { src: "/images/lighT_crocs.jpg", alt: "lighT", title: "" },
  { src: "/images/lighT_ssdd.jpg", alt: "lighT", title: "" },
  { src: "/images/lighT_ssdd1.jpg", alt: "lighT", title: "" },
  { src: "/images/lighT_ssdd2.jpg", alt: "lighT", title: "" },
  { src: "/images/LED_htl_hanu.jpg", alt: "lighT", title: "" },
  { src: "/images/LED_lighT_ssdd.jpg", alt: "lighT", title: "" },
  { src: "/images/LED_dhhs.jpg", alt: "lighT", title: "" },
  { src: "/images/led_co_hanu2.jpg", alt: "lighT", title: "" },
  { src: "/images/LED_TAMH.jpg", alt: "lighT", title: "" },
  { src: "/images/ulighTmeup.jpg", alt: "lighT", title: "" },

];

type TouchState = {
  startX: number;
  startY: number;
  moved: boolean;
};

export default function GalleryPage() {
  const items = useMemo(() => mediaItems, []);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [opened, setOpened] = useState(false);
  const [cameraOpen, setCameraOpen] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [flash, setFlash] = useState(false);
  const mobileScrollRef = useRef<HTMLDivElement | null>(null);
  const touchRef = useRef<TouchState>({
    startX: 0,
    startY: 0,
    moved: false,
  });
  const suppressClickRef = useRef(false);

  const selectedItem = selectedIndex === null ? null : items[selectedIndex];

  const rows = [
    items.slice(0, 6),
    items.slice(6, 12),
    items.slice(12, 18),
  ];

  const openItem = (index: number) => setSelectedIndex(index);
  const closeItem = () => setSelectedIndex(null);

  const scrollMobileToIndex = (
    index: number,
    behavior: ScrollBehavior = "smooth"
  ) => {
    const el = mobileScrollRef.current;
    if (!el) return;

    const clamped = ((index % items.length) + items.length) % items.length;
    const slideWidth = el.clientWidth;

    setMobileIndex(clamped);
    el.scrollTo({
      left: clamped * slideWidth,
      behavior,
    });
  };

  useEffect(() => {
    const el = mobileScrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const width = el.clientWidth;
      if (!width) return;

      const nextIndex = Math.round(el.scrollLeft / width);
      const clamped = Math.max(0, Math.min(items.length - 1, nextIndex));
      setMobileIndex(clamped);
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [items.length]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeItem();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleTouchStart = (e: React.TouchEvent<HTMLButtonElement>) => {
    touchRef.current = {
      startX: e.touches[0].clientX,
      startY: e.touches[0].clientY,
      moved: false,
    };
    suppressClickRef.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLButtonElement>) => {
    const dx = e.touches[0].clientX - touchRef.current.startX;
    const dy = e.touches[0].clientY - touchRef.current.startY;

    if (Math.abs(dx) > 10 || Math.abs(dy) > 10) {
      touchRef.current.moved = true;
    }
  };

  const handleTouchEnd = (index: number) => {
    if (!touchRef.current.moved) {
      suppressClickRef.current = true;
      openItem(index);

      window.setTimeout(() => {
        suppressClickRef.current = false;
      }, 220);
    }
  };

  return (
    
     <main
  className="relative min-h-[100svh] overflow-hidden text-white"
  style={{
    backgroundImage: "url('/images/bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="h-16">
            <Link
              href="/"
              className="
    fixed
    left-6
    top-6
    z-50
    flex
    h-12
    w-12
    items-center
    justify-center
    rounded-full
    border
    border-white/15
    bg-black/10
    text-xl
    text-white
    backdrop-blur-xl
    transition-all
    duration-300
    hover:scale-110
  "
            >
              🏠
            </Link>


          </div>

          <div className="mt-10 text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-sky-200 sm:text-sm">
  Gallery
</p>
            <h1
  className="mt-3 text-5xl font-black tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl"
  style={{
    textShadow: "0 0 15px rgba(255,255,255,.2)",
  }}
>
              lighT
            </h1>
            
          </div>



          <div className="mt-10">

            {!showGallery ?
              (
                <div
                  className="relative flex flex-col items-center cursor-pointer"
                  onClick={() => {
                    setFlash(true);

                    setTimeout(() => {
                      setFlash(false);
                      setCameraOpen(true);

                      setTimeout(() => {
                        setShowGallery(true);
                      }, 2500);
                    }, 0);
                  }}
                >
                  <img
                    src="/images/camera.jpg"
                    alt="camera"
                    className={`
    w-[280px] md:w-[360px]
    transition-all duration-200
    hover:scale-105
    ${cameraOpen ? "opacity-0 scale-50" : ""}
  `}
                  />
                  {cameraOpen && (
                    <div className="camera-burst">
                      {items.map((item, i) => {
                        const row = Math.floor(i / 6); // 3 hàng
                        const col = i % 6;

                        return (
                          <img
                            key={i}
                            src={item.src}
                            className="burst-photo"
                            style={
                              {
                                "--x": `${(col - 2.5) * 180}px`,
                                "--y": `${(row - 1) * 220}px`,
                                "--r": `${(Math.random() * 10 - 5).toFixed(1)}deg`,
                                "--delay": `${i * 0.03}s`,
                              } as React.CSSProperties
                            }
                          />
                        );
                      })}
                    </div>
                  )}
                  <p
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] text-white/70"
                  >
                    OPEN ARCHIVE
                  </p>
                </div>
              ) : (

                <div className="space-y-6">
                  {rows.map((row, rowIndex) => (
                    <div
                      key={rowIndex}
                      className={`marquee-row ${rowIndex % 2 === 1 ? "reverse" : ""}`}
                    >
                      <div className="marquee-track">
                        {[...row, ...row].map((item, i) => {
                          const realIndex = mediaItems.findIndex(
                            (x) => x.src === item.src
                          );

                          return (
                            <button
                              key={`${rowIndex}-${i}-${item.src}`}
                              type="button"
                              onClick={() =>
                                openItem(realIndex >= 0 ? realIndex : 0)
                              }
                              className="film-card group relative"
                            >
                              <div className="relative aspect-[3/4] w-[160px] sm:w-[160px] lg:w-[230px]">                            <img
                                src={item.src}
                                alt={item.alt}
                                className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.04]"
                                draggable={false}
                              />
                                <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/12" />
                              </div>


                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

              )}
          </div>
        </div>

        {selectedItem && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/10 px-4 py-6 backdrop-blur-md"
            onClick={closeItem}
          >
            <div
              className="relative w-full max-w-[92vw] max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeItem}
                className="absolute right-3 top-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-3xl font-light text-white backdrop-blur-md transition hover:bg-white/25"
                aria-label="Close"
              >
                ✕
              </button>

              <div className="overflow-hidden rounded-[2rem] bg-transparent shadow-none">
                <img
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  className="mx-auto block h-auto max-h-[92vh] w-auto max-w-full object-contain drop-shadow-[0_0_40px_rgba(0,0,0,0.22)]"
                  draggable={false}
                />
              </div>


            </div>
          </div>
        )}

        <style jsx global>{`
              .camera-flash{
  position:fixed;
  inset:0;
  background:white;
  z-index:9999;
  animation:flash .02s forwards;
}

@keyframes flash{
  from{
    opacity:1;
  }

  to{
    opacity:0;
  }
}

.camera-burst{
  position:absolute;
  inset:0;
  pointer-events:none;
}

.burst-photo{
  position:absolute;
  left:50%;
  top:50%;

  width:120px;
  aspect-ratio:3/4;
  object-fit:cover;

  border:6px solid white;
  border-bottom:24px solid white;

  box-shadow:0 12px 30px rgba(0,0,0,.18);

  opacity:0;

  animation:photoFly 1s ease-out forwards;
  animation-delay:var(--delay);
}
@keyframes photoFly{
  0%{
    opacity:0;
    transform:
      translate(-50%,-50%)
      scale(.2)
      rotate(0deg);
  }

  20%{
    opacity:1;
  }

  100%{
    opacity:1;
    transform:
      translate(
        calc(-50% + var(--x)),
        calc(-50% + var(--y))
      )
      rotate(var(--r))
      scale(1);
  }
}
 .film-card{
  position:relative;
  overflow:hidden;

  padding-top:18px;
  padding-bottom:18px;

  background:#111;

  margin-right:-1px;
}

.film-card::before,
.film-card::after{
  content:"";

  position:absolute;

  left:0;
  right:0;

  height:8px;

  background:
    repeating-linear-gradient(
      90deg,
      transparent 0 10px,
      white 10px 18px
    );

  z-index:30;
}

.film-card::before{
  top:5px;
}

.film-card::after{
  bottom:5px;
}
  
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }

          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

          .marquee-row{
          overflow-x:hidden;
          overflow-y:visible;
        }

          .marquee-track {
            display: flex;
            flex-wrap: nowrap;
            min-width: max-content;
            gap: 0px;
            animation: marquee-left 30s linear infinite;
            will-change: transform;
          }

          .marquee-row.reverse .marquee-track {
            animation-name: marquee-right;
          }

          @media (hover: hover) {
            .marquee-row:hover .marquee-track {
              animation-play-state: paused;
            }
          }

          .marquee-card {
            flex: 0 0 auto;
          }

          @keyframes marquee-left {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          @keyframes marquee-right {
            from {
              transform: translateX(-50%);
            }
            to {
              transform: translateX(0);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .marquee-track {
              animation: none;
            }
          }

          @media (max-width: 768px) {
            .marquee-track {
              gap: 1px;
              animation-duration: 24s;
            }
          }
        `}</style>
      </main>
    
  );
}