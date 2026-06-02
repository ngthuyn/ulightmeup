import Link from "next/link";

export default function Home() {
  const mediaFrame =
    "aspect-[9/16] w-[430px] overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-white/10";

  const mediaFill = "h-full w-full object-cover";

  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-black text-white">
      {/* Background video blur - chỉ laptop */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 hidden h-full w-full object-cover blur-xl scale-110 opacity-45 lg:block"
      >
        <source src="/videos/light-intro.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 py-8 sm:px-6 lg:px-8">
        {/* Mobile */}
        <div className="xl:hidden">
          <div className="flex justify-center">
            <div className="aspect-[9/16] w-[min(82vw,260px)] overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-white/10 sm:w-[min(72vw,300px)] md:w-[340px]">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              >
                <source src="/videos/light-intro.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="mb-3 text-xs tracking-[0.35em] text-white/70">
              u lighT me up!
            </p>

            <h1 className="text-6xl font-black">lighT</h1>

            <p className="mt-4 text-white/80">
              Profile Website for lighT (Đỗ Minh Tân)
              <br />
              by TINcredible — All for lighT ✨
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/profile"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-zinc-900"
              >
                View Profile
              </Link>

              <Link
                href="/activities"
                className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur"
              >
                Activities
              </Link>

              <Link
                href="/tmi"
                className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur"
              >
                TMI
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Fansite Layout */}
        <div className="hidden xl:block">
          <div className="flex items-center justify-center gap-8">
            {/* Left image */}
            <div className={mediaFrame}>
              <img
                src="/images/lighT_TAMH_30_6.jpg"
                alt="lighT"
                className={mediaFill}
              />
            </div>

            {/* Center video */}
            <div className={mediaFrame}>
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className={mediaFill}
              >
                <source src="/videos/light-intro.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Right image */}
            <div className={mediaFrame}>
              <img
                src="/images/lighT_NA_18_05.jpg"
                alt="lighT"
                className={mediaFill}
              />
            </div>
          </div>

          {/* Text */}
          <div className="mt-10 text-center">
            <p className="mb-3 text-sm tracking-[0.35em] text-white/70">
              u lighT me up!
            </p>

            <h1 className="text-8xl font-black tracking-tight">
              lighT
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/80">
              Profile Website for lighT (Đỗ Minh Tân)
              <br />
              by TINcredible — All for lighT ✨
            </p>

            <div className="mt-8 flex justify-center gap-3">
              <Link
                href="/profile"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:scale-[1.02]"
              >
                View Profile
              </Link>

              <Link
                href="/activities"
                className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                Activities
              </Link>

              <Link
                href="/tmi"
                className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                TMI
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}