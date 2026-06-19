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
  { src: "/images/lighT_sunsong1.jpg", alt: "lighT", title: "" },
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
 { src: "/images/lighT_dhhs2.jpg", alt: "lighT", title: "" },
  { src: "/images/lighT_sunsong2.jpg", alt: "lighT", title: "" },

];

type TouchState = {
  startX: number;
  startY: number;
  moved: boolean;
};

export default function GalleryPage() {
  useEffect(() => {
  const updateRadius = () => {
    setRadius(
 window.innerWidth < 768
  ? 320
    : 800
);
  };

  updateRadius();

  window.addEventListener(
    "resize",
    updateRadius
  );

  return () =>
    window.removeEventListener(
      "resize",
      updateRadius
    );
}, []);
  const items = useMemo(() => mediaItems, []);
  const outerItems = useMemo(
  () => items.slice(0, 12),
  [items]
);

const innerItems = useMemo(
  () => items.slice(12),
  [items]
);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [opened, setOpened] = useState(false);
  const [cameraOpen, setCameraOpen] = useState(false);
const [showGallery, setShowGallery] = useState(true);
  const [flash, setFlash] = useState(false);
  const mobileScrollRef = useRef<HTMLDivElement | null>(null);
  const touchRef = useRef<TouchState>({
    startX: 0,
    startY: 0,
    moved: false,
  });
  const suppressClickRef = useRef(false);

  const selectedItem = selectedIndex === null ? null : items[selectedIndex];
const [radius, setRadius] = useState(850);
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

<div className="mt-8 flex justify-center gap-4">
  
 
</div>

          <div className="mt-10">

            {showGallery && (
<div className="gallery-ring">

  {/* OUTER RING */}
  <div className="ring outer-ring">
    {outerItems.map((item, i) => {
      const angle =
        (360 / outerItems.length) * i;

      return (
        <button
          key={i}
          onClick={() =>
            openItem(
              mediaItems.findIndex(
                (x) => x.src === item.src
              )
            )
          }
          className="ring-card outer-card"
          style={{
           transform: `
            rotateY(${angle}deg)
        translateZ(700px)  
            rotateY(${-angle}deg)
          `
          }}
        >
          <img
            src={item.src}
            alt={item.alt}
          />
        </button>
      );
    })}
  </div>

  {/* INNER RING */}
  <div className="ring inner-ring">
    {innerItems.map((item, i) => {
      const angle =
        (360 / innerItems.length) * i;

      return (
        <button
          key={item.src}
          onClick={() =>
            openItem(
              mediaItems.findIndex(
                (x) => x.src === item.src
              )
            )
          }
          className="ring-card inner-card"
          style={{
            transform: `
  rotateY(${angle}deg)
  translateZ(450px)
  rotateY(${-angle}deg)
`
          }}
        >
          <img
            src={item.src}
            alt={item.alt}
          />
        </button>
      );
    })}
  </div>

  
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
            .floating-gallery{
  position:relative;
  width:100%;
  min-height:1200px;
}

.float-photo{
  position:absolute;

  overflow:hidden;

  border:6px solid white;
  border-bottom:24px solid white;

  background:white;

  opacity:0;

  box-shadow:
    0 15px 35px rgba(0,0,0,.18);

  transition:.35s;
}
@keyframes scatterIn{

  from{
    opacity:0;

    transform:
      translateY(120px)
      scale(.5)
      rotate(0deg);
  }

  to{
    opacity:1;

    transform:
      translateY(0)
      scale(1)
      rotate(var(--r));
  }
}

@keyframes shine{

  0%{
    transform:translateX(-150%);
  }

  20%{
    transform:translateX(150%);
  }

  100%{
    transform:translateX(150%);
  }
}
.show-photo{
  animation:
    scatterIn .8s ease forwards,
    floatPhoto 5s ease-in-out infinite;
}
.show-photo{
  animation:
    burstIn .9s ease forwards,
    floatPhoto 5s ease-in-out infinite;
}
.float-photo img{
  display:block;
  width:100%;
  height:100%;
  object-fit:cover;
}
.float-photo::after{
  content:"";

  position:absolute;
  inset:0;

  background:
    linear-gradient(
      120deg,
      transparent,
      rgba(255,255,255,.5),
      transparent
    );

  transform:translateX(-150%);

  animation:shine 6s infinite;
}
.float-photo:hover{
  transform:
    scale(1.12)
    rotate(0deg);

  z-index:100;

  box-shadow:
    0 25px 60px rgba(0,0,0,.35);
}

@keyframes floatPhoto{

  0%{
    transform:
      translateY(0)
      rotate(var(--r));
  }

  50%{
    transform:
      translateY(-18px)
      rotate(calc(var(--r) + 2deg));
  }

  100%{
    transform:
      translateY(0)
      rotate(var(--r));
  }
}
@keyframes burstIn{

  from{
    opacity:0;

    transform:
      translate(0,0)
      scale(.2)
      rotate(0deg);
  }

  to{
    opacity:1;
  }
}
  .burst-0{
  transform:
    translate(-280px,-140px)
    rotate(-12deg);
}

.burst-1{
  transform:
    translate(-150px,-90px)
    rotate(-6deg);
}

.burst-2{
  transform:
    translate(-20px,-120px)
    rotate(4deg);
}

.burst-3{
  transform:
    translate(120px,-100px)
    rotate(8deg);
}

.burst-4{
  transform:
    translate(260px,-130px)
    rotate(12deg);
}

.burst-5{
  transform:
    translate(-220px,120px)
    rotate(-10deg);
}

.burst-6{
  transform:
    translate(-50px,170px)
    rotate(-3deg);
}

.burst-7{
  transform:
    translate(120px,150px)
    rotate(5deg);
}

.burst-8{
  transform:
    translate(260px,110px)
    rotate(10deg);
}
 .gallery-ring{
  position:relative;
  width:100%;
  height:75vh;

  display:flex;
  justify-content:center;
  align-items:center;

  perspective:3500px;
  overflow:hidden;
}
.outer-ring{
  animation:spinOuter 60s linear infinite;
}

@keyframes spinOuter{
  from{
    transform:
      rotateX(-25deg)
      rotateY(0deg);
  }

  to{
    transform:
      rotateX(-25deg)
      rotateY(360deg);
  }
}
  .inner-ring{
  animation:
    spinInner 40s linear infinite reverse;
}
    @keyframes spinInner{
  from{
    transform:
      rotateX(-15deg)
      rotateY(0deg);
  }

  to{
    transform:
      rotateX(-15deg)
      rotateY(360deg);
  }
}
@keyframes spinRing{
  from{
    transform:
      rotateX(-12deg)
      rotateY(0deg);
  }

  to{
    transform:
      rotateX(-12deg)
      rotateY(360deg);
  }
}

.ring:hover{
  animation-play-state:paused;
}



.ring-card{
  position:absolute;
  

  width:160px;
  height:220px;

  margin-left:-80px;
  margin-top:-110px;

  transform-style:preserve-3d;



  overflow:hidden;   /* thêm */
}

.ring-card img{
  width:100%;
  height:100%;

  object-fit:cover;

  border:6px solid white;
  border-bottom:24px solid white;
  border-radius:12px;

  backface-visibility:hidden;
  -webkit-backface-visibility:hidden;

  display:block;
}
.ring-card:hover img{
  transform:
    scale(1.15);
}
 .center-planet{
  position:absolute;

  left:50%;
  top:50%;

  width:220px;
  height:220px;

  border-radius:50%;
  object-fit:cover;

  border:4px solid rgba(255,255,255,.9);

  transform:
    translate(-50%,-50%);

  z-index:999;

  box-shadow:
    0 0 60px rgba(96,165,250,.6),
    0 0 120px rgba(96,165,250,.25);
}
  @keyframes planetFloat{

  0%{
    transform:
      translate(-50%,-50%)
      rotateX(-15deg)
      translateZ(50px)
      translateY(0);
  }

  50%{
    transform:
      translate(-50%,-50%)
      rotateX(-15deg)
      translateZ(50px)
      translateY(-12px);
  }

  100%{
    transform:
      translate(-50%,-50%)
      rotateX(-15deg)
      translateZ(50px)
      translateY(0);
  }
}
@keyframes floatCard{

  0%{
    margin-top:0;
  }

  50%{
    margin-top:-18px;
  }

  100%{
    margin-top:0;
  }
}


@media (max-width:1024px){

  .floating-gallery{
    min-height:1500px;
  }

  .float-photo{
    width:170px !important;
  }
}

.ring{
  position:absolute;

  left:50%;
  top:50%;

  width:0;
  height:0;

  transform-style:preserve-3d;
}





@media (max-width:768px){

  .floating-gallery{
    min-height:2200px;
  }

  .float-photo{
    width:140px !important;
  }
}
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