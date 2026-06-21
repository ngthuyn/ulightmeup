"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import PageShell from "@/components/PageShell";

type VideoItem = {
  title: string;
  url: string;
  image: string;
  preview: string;
};

const videos: VideoItem[] = [
  {
    title: "Chuyện đôi ta",
    url: "https://www.tiktok.com/@tincredible_allforlight/video/7646159440785181959?_r=1&_t=ZS-96s7XaVJNPF",
    image: "/images/lighT_ssdd.jpg",
    preview: "/videos/lighT_ssdd_preview.mp4",
  },
  {
    title: "Nhớ mãi chuyến đi này",
    url: "https://www.tiktok.com/@tincredible_allforlight/video/7645868133881810184",
    image: "/images/lighT_tamh2.jpg",
    preview: "/videos/lighT_tamh_preview.mp4",
  },
  {
    title: "Tôi người Việt Nam",
    url: "https://www.tiktok.com/@tincredible_allforlight/video/7641433710721518866",
    image: "/images/lighT_na.jpg",
    preview: "/videos/lighT_na_preview.mp4",
  },
  {
    title: "EXPOSURE",
    url: "https://www.tiktok.com/@tincredible_allforlight/video/7603752306613538056",
    image: "/images/lighT_TrungVuong.jpg",
    preview: "/videos/lighT_TrungVuong_preview.mp4",
  },
];

export default function FancamPage() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const activeIndexRef = useRef<number | null>(null);
  const soundIndexRef = useRef<number | null>(null);
  const playTokenRef = useRef(0);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [soundIndex, setSoundIndex] = useState<number | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    soundIndexRef.current = soundIndex;
  }, [soundIndex]);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(hover: none), (pointer: coarse), (max-width: 768px)"
    );

    const update = () => setIsTouchDevice(mediaQuery.matches);
    update();

    mediaQuery.addEventListener?.("change", update);
    return () => mediaQuery.removeEventListener?.("change", update);
  }, []);

  const stopPreview = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (soundIndexRef.current === index) return;

    playTokenRef.current += 1;

    try {
      video.pause();
      video.currentTime = 0;
      video.muted = true;
    } catch {
      // ignore
    }

    if (activeIndexRef.current === index) {
      activeIndexRef.current = null;
      setActiveIndex(null);
    }
  };

  const stopVideo = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    playTokenRef.current += 1;

    try {
      video.pause();
      video.currentTime = 0;
      video.muted = true;
    } catch {
      // ignore
    }

    if (activeIndexRef.current === index) {
      activeIndexRef.current = null;
      setActiveIndex(null);
    }

    if (soundIndexRef.current === index) {
      soundIndexRef.current = null;
      setSoundIndex(null);
    }
  };

  const stopAllVideos = () => {
    playTokenRef.current += 1;

    videoRefs.current.forEach((video) => {
      if (!video) return;

      try {
        video.pause();
        video.currentTime = 0;
        video.muted = true;
      } catch {
        // ignore
      }
    });

    activeIndexRef.current = null;
    soundIndexRef.current = null;
    setActiveIndex(null);
    setSoundIndex(null);
  };

  const startPreview = async (index: number, withSound = false) => {

    const video = videoRefs.current[index];
    if (!video) return;

    const token = ++playTokenRef.current;

    if (activeIndexRef.current !== null && activeIndexRef.current !== index) {
      stopVideo(activeIndexRef.current);
    }

    try {
      video.currentTime = 0;

      if (soundIndexRef.current === index) {
        video.muted = false;
      } else {
        video.muted = !withSound;
      }

      const playPromise = video.play();
      if (playPromise) {
        await playPromise;
      }

      if (token !== playTokenRef.current) return;

      activeIndexRef.current = index;
      setActiveIndex(index);

      if (withSound || soundIndexRef.current === index) {
        soundIndexRef.current = index;
        setSoundIndex(index);
      } else {
        soundIndexRef.current = null;
        setSoundIndex(null);
      }
    } catch (err: any) {
      if (err?.name !== "AbortError") {
        console.error("Video play failed:", err);
      }
    }
  };

  const togglePreview = async (index: number) => {

    if (soundIndexRef.current === index) return;

    if (activeIndexRef.current === index) {
      stopPreview(index);
      return;
    }

    await startPreview(index, false);
  };

  const toggleSound = async (
    index: number,
    e: MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();


    const video = videoRefs.current[index];
    if (!video) return;

    if (soundIndexRef.current === index) {
      soundIndexRef.current = null;
      setSoundIndex(null);

      try {
        video.muted = true;
      } catch {
        // ignore
      }

      return;
    }

    soundIndexRef.current = index;
    setSoundIndex(index);

    try {
      if (activeIndexRef.current !== index) {
        await startPreview(index, true);
        return;
      }

      video.muted = false;

      const playPromise = video.play();
      if (playPromise) {
        await playPromise;
      }

      activeIndexRef.current = index;
      setActiveIndex(index);
    } catch (err: any) {
      if (err?.name !== "AbortError") {
        console.error("Enable sound failed:", err);
      }
    }
  };

  useEffect(() => {
    return () => {
      stopAllVideos();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openTikTok = (url: string) => {
    stopAllVideos();
    window.open(url, "_blank", "noopener,noreferrer");
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
  href="/home"
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
  FANCAM
</p>
            <h1
  className="mt-3 text-5xl font-black tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl"
  style={{
    textShadow: "0 0 15px rgba(255,255,255,.2)",
  }}
>
              Fancam Collection
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              {
                "Chạm vào card để xem preview. Bấm 🔊 để bật âm thanh. Bấm ↗ để mở TikTok."
                          }
                                      </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {videos.map((video, index) => {
              const isActive = activeIndex === index;
              const isSoundOn = soundIndex === index;

              return (
                <article
                  key={video.url}
                  className="overflow-hidden rounded-[2rem] border border-black/10 bg-white/75 shadow-[0_18px_40px_rgba(0,0,0,0.08)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/85 hover:shadow-2xl"
                  onMouseEnter={() => {
                    if (!isTouchDevice) {
                      startPreview(index, soundIndexRef.current === index);
                    }
                  }}
                  onMouseLeave={() => {
                    if (!isTouchDevice) {
                      stopPreview(index);
                    }
                  }}
                >
                  <div className="relative overflow-hidden">
                  <button
  type="button"
  onClick={() => togglePreview(index)}
  className="group relative block w-full touch-manipulation"
  aria-label={`Preview ${video.title}`}
>
  <img
    src={video.image}
    alt={video.title}
    className="aspect-[9/16] w-full object-cover"
    draggable={false}
  />

  <video
    ref={(el) => {
      videoRefs.current[index] = el;
    }}
    muted={!isSoundOn}
    loop
    playsInline
    preload="auto"
    poster={video.image}
    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
      isActive ? "opacity-100" : "opacity-0"
    }`}
  >
    <source src={video.preview} type="video/mp4" />
  </video>

  <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10" />

  <div className="absolute bottom-4 right-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
    {isActive
      ? isSoundOn
        ? "Preview + sound"
        : "Preview"
      : "Tap preview"}
  </div>
</button>

                    {
                      <button
                        type="button"
                        onMouseDown={(e) => {
                          e.stopPropagation();
                        }}
                        onClick={(e) => toggleSound(index, e)}
                        className="absolute right-4 top-4 z-10 rounded-full bg-black/65 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur transition hover:bg-black/80"
                        aria-label={
                          isSoundOn
                            ? `Mute ${video.title}`
                            : `Enable sound for ${video.title}`
                        }
                      >
                        {isSoundOn ? "🔇 Mute" : "🔊 Sound"}
                      </button>
                    }
                  </div>

                  <div className="p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-sky-700/70">
                      TikTok
                    </p>

                    <h2 className="mt-2 text-xl font-bold text-zinc-900">
                      {video.title}
                    </h2>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-zinc-500">
                        {isTouchDevice ? "Open on TikTok" : "Xem trên TikTok"}
                      </span>

                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-sky-700 transition hover:translate-x-1"
                        onClick={stopAllVideos}
                        aria-label={`Open ${video.title} on TikTok`}
                      >
                        ↗
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </main>
   
  );
}