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
    title: "Đi đu đưa đi",
    url: "https://www.tiktok.com/@tincredible_allforlight/video/7648345317116595474",
    image: "/images/lighT_SunSong3.jpg",
    preview: "/videos/lighT_ss_preview.mp4",
  },
  {

    title: "Chuyện đôi ta",
    url: "https://www.tiktok.com/@tincredible_allforlight/video/7646159440785181959?_r=1&_t=ZS-96s7XaVJNPF",
    image: "/images/lighT_ssdd.jpg",
    preview: "/videos/lighT_ssdd_preview.mp4",
  },
  {

    title: "99KISS",
    url: "https://www.tiktok.com/@tincredible_allforlight/video/7650501250710129938",
    image: "/images/lighT_ssdd1.jpg",
    preview: "/videos/lighT_99kiss_preview.mp4",
  },
  {
    title: "Nhớ mãi chuyến đi này",
    url: "https://www.tiktok.com/@tincredible_allforlight/video/7645868133881810184",
    image: "/images/lighT_tamh2.jpg",
    preview: "/videos/lighT_tamh_preview.mp4",
  },
  {
    title: "Đại lộ mặt trời",
    url: "https://www.tiktok.com/@tincredible_allforlight/video/7646324668034583816",
    image: "/images/lighT_tamh.jpg",
    preview: "/videos/lighT_tamh_preview2.mp4",
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
  {
    title: "SHOW ME",
    url: "https://www.tiktok.com/@tincredible_allforlight/video/7589311310429506834",
    image: "/images/lighT_tthssv_showme.jpg",
    preview: "/videos/lighT_tthssv_showme_preview.mp4",
  },
  {
    title: "TAKE A SHOT",
    url: "https://www.tiktok.com/@tincredible_allforlight/video/7588970584634084626",
    image: "/images/lighT_tthssv_takeashot.jpg",
    preview: "/videos/lighT_tthssv_takeashot_preview.mp4",
  },
  {
    title: "Một vòng Việt Nam",
    url: "https://www.tiktok.com/@tincredible_allforlight/video/7587461359969914120",
    image: "/images/lighT_ycc_mvvn.jpg",
    preview: "/videos/lighT_ycc_mvvn.mp4",
  },
  {
    title: "WE LIT THE SHOW",
    url: "https://www.tiktok.com/@tincredible_allforlight/video/7586038883809234184",
    image: "/images/lighT_wlts.jpg",
    preview: "/videos/lighT_wlts_preview.mp4",
  },
  {
    title: "Không cần nói nhiều",
    url: "https://www.tiktok.com/@tincredible_allforlight/video/7586312075387964690",
    image: "/images/lighT_YCC_kcnn.jpg",
    preview: "/videos/lighT_ycc_kcnn_preview.mp4",
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
  const [offset, setOffset] = useState(0);
  const [paused, setPaused] = useState(false);
  const [viewMode, setViewMode] =
  useState<"arc" | "grid">("arc");
 const popupVideoRef =
  useRef<HTMLVideoElement>(null);
  
  const [selectedVideo, setSelectedVideo] =
    useState<VideoItem | null>(null);
  
    useEffect(() => {
  if (popupVideoRef.current) {
    popupVideoRef.current.volume = 0.15;
  }
}, [selectedVideo]);
  useEffect(() => {
    if (paused) return;

    const id = setInterval(() => {
      setOffset((v) => v + 0.003);
    }, 16);

    return () => clearInterval(id);
  }, [paused]);
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
              "Tap a card for a quick preview, or click ↗ to watch the full video on TikTok."
            }
          </p>
          <div className="mt-6 flex justify-center gap-3">
  <button
    onClick={() => setViewMode("arc")}
    className={`rounded-full px-4 py-2 text-sm ${
      viewMode === "arc"
        ? "bg-sky-400 text-black"
        : "bg-white/10 text-white"
    }`}
  >
    🌀 Arc
  </button>

  <button
    onClick={() => setViewMode("grid")}
    className={`rounded-full px-4 py-2 text-sm ${
      viewMode === "grid"
        ? "bg-sky-400 text-black"
        : "bg-white/10 text-white"
    }`}
  >
    ⬜ Grid
  </button>
</div>
        </div>
{viewMode === "arc" ? (
        <div className="relative mt-6 h-[600px] overflow-visible perspective-[1000px]">
          <div
            className="absolute left-1/2 top-[25%]"
            style={{
              transformStyle: "preserve-3d",
              transform: "translate(-50%, -50%) translateX(-80px)",
            }}
          >
            {videos.map((video, index) => {
              const realIndex = index % videos.length;
              const isActive = activeIndex === realIndex;

              const isSoundOn = soundIndex === realIndex;
              const totalCards = videos.length;

              const virtualIndex =
                (index + offset) % totalCards;

              const angle =
                (virtualIndex - (totalCards - 1) / 2) * 16;
              const depth =
                Math.cos((angle * Math.PI) / 180);

              const scale =
                0.8 + depth * 0.15;

              const opacity =
                0.25 + depth * 0.75;



              if (depth < 0) return null;
              return (
                <div
                  key={video.url}
                  className="absolute"
                  style={{
                    transform: `
    rotateY(${angle}deg)
    translateZ(500px)
    scale(${scale})
  `,
                    opacity,
                    zIndex: Math.round(depth * 100),
                  }}
                >
                  <article

                    className="w-[120px] md:w-[140px] overflow-hidden border border-black/10 bg-white/75 shadow-[0_18px_40px_rgba(0,0,0,0.08)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/85 hover:shadow-2xl"
                    onMouseEnter={() => {
                      if (!isTouchDevice) {
                        startPreview(realIndex, soundIndexRef.current === realIndex);
                      }
                    }}
                    onMouseLeave={() => {
                      if (!isTouchDevice) {
                        stopPreview(realIndex);
                      }
                    }}
                  >
                    <div className="relative overflow-hidden">
                      <button
                        type="button"
                        onClick={() => {
                          setPaused(true);
                          setSelectedVideo(video);
                        }}
                        className="group relative block w-full touch-manipulation"
                        aria-label={`Preview ${video.title}`}
                      >
                        <img
                          src={video.image}
                          alt={video.title}
                          className="aspect-[3/4] w-full object-cover"
                          draggable={false}
                        />

                        <video
                          ref={(el) => {
                            videoRefs.current[realIndex] = el;
                          }}
                          muted={!isSoundOn}
                          loop
                          playsInline
                          preload="auto"
                          poster={video.image}
                          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"
                            }`}
                        >
                          <source src={video.preview} type="video/mp4" />
                        </video>

                        <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10" />


                      </button>


                    </div>

                    <div className="px-1 py-0.5">
                      <p className="text-[8px] uppercase tracking-[0.15em] text-sky-700/70">
                        TikTok
                      </p>

                      <h2 className="mt-0.5 text-[11px] md:text-xs font-semibold line-clamp-1 text-zinc-900">
                        {video.title}
                      </h2>

                      <div className="mt-1 flex justify-center">
                        <a
                          href={video.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/10 text-sky-700 transition hover:scale-110"
                          onClick={stopAllVideos}
                        >
                          ↗
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
        ) : (
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
  {videos.map((video, index) => (
    <article
      key={video.url}
      className="overflow-hidden bg-white/80 shadow-xl backdrop-blur transition hover:-translate-y-1 "
    >
      <button
        onClick={() => {
          setSelectedVideo(video);
        }}
        className="block w-full"
      >
        <img
          src={video.image}
          alt={video.title}
          className="aspect-[3/4] w-full object-cover"
        />
      </button>

      <div className="px-2 py-1">
        <p className="text-[8px] uppercase tracking-[0.15em] text-sky-700/70">
          TikTok
        </p>

        <h2 className="text-xs font-semibold text-black line-clamp-1">
          {video.title}
        </h2>

        <div className="mt-1 flex justify-center">
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/10 text-sky-700"
          >
            ↗
          </a>
        </div>
      </div>
    </article>
  ))}
</div>
            // Grid sẽ ở đây
)}
        <div className="mt-16 flex flex-col items-center justify-center gap-4 rounded-[2rem] px-6 py-8 text-center">
          <img
            src="/images/ulightmeup.png"
            alt="u lighT me up"
            className="mx-auto w-[320px] sm:w-[420px]"
            style={{
              filter: "drop-shadow(0 0 12px rgba(255,255,255,.45))",
            }}
          />


        </div>
        <style jsx global>{`

        `}</style>
      </div>   {/* đóng relative z-10 */}
      {selectedVideo && (
        <div
          className="
      fixed inset-0 z-[999]
      flex items-center justify-center
      bg-black/80 backdrop-blur-md
      p-4
    "
          onClick={() => {
            setSelectedVideo(null);
            setPaused(false);
          }}
        >
          <div
            className="
    relative
    w-full
    max-w-md
    max-h-[90vh]
    overflow-y-auto
    rounded-[2rem]
    bg-black
  "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="
          absolute right-4 top-4 z-20
          rounded-full bg-black/60
          px-3 py-1 text-white
        "
              onClick={() => {
                setSelectedVideo(null);
                setPaused(false);
              }}
            >
              ✕
            </button>

            <video
              src={selectedVideo.preview}
              ref={popupVideoRef}
              controls
              autoPlay
              loop
              playsInline
              className="
    max-h-[70vh]
    w-full
    object-contain
  "
            />

            <div className="p-4">
              <h3 className="text-xl font-bold">
                {selectedVideo.title}
              </h3>

              <a
                href={selectedVideo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
            mt-3 inline-flex
            rounded-full
            bg-sky-500
            px-4 py-2
            text-white
          "
              >
                Open TikTok ↗
              </a>
            </div>

          </div>

        </div>
      )}

    </main>
  );
}