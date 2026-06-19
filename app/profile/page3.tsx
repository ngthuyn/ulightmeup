import Link from "next/link";
import PageShell from "@/components/PageShell";

export default function ProfilePage() {
  return (
    <PageShell videoSrc="/videos/light-intro.mp4">
<main className="relative min-h-screen overflow-x-hidden bg-[#eef6ff] text-black">

        {/* GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

        {/* GLOW DESKTOP ONLY */}
<div className="hidden lg:block absolute left-[-10%] top-[-10%] h-[30rem] w-[30rem] rounded-full bg-sky-300/25 blur-3xl" />
<div className="hidden lg:block absolute right-[-10%] top-[10%] h-[25rem] w-[25rem] rounded-full bg-cyan-300/25 blur-3xl" />
        {/* HOME */}
        <Link
          href="/"
          className="
            absolute
            left-6
            top-6
            z-50
            flex
            items-center
            gap-2
            rounded-full
            bg-white/90
            px-5
            py-3
            text-sm
            font-semibold
            shadow-xl
            backdrop-blur
          "
        >
          ← 🏠 Home
        </Link>
<div className="hidden lg:block">
       {/* BIG LIGHT LOGO */}
      <img
        src="/images/lighT_logo.png"
        alt="lighT"
        className="
          absolute
          left-1/2
          top-12
          z-10
          w-[55vw]
          max-w-[900px]
          -translate-x-1/2
          opacity-90
          pointer-events-none
          select-none
        "
        draggable={false}
      />
      {/* SIDE WATERMARK */}


{/* COORDINATES */}
<div className="absolute left-12 bottom-10 z-10 text-[10px] tracking-[0.35em] text-zinc-400">
  LAT 20.0126° N {/* ra mắt nghệ sĩ độclập MV debut */}
  <br />
  LONG 28.1125° E {/* Đặt tên fandom */}
</div>

{/* STARS */}
<div className="absolute left-[20%] top-[52%] z-10 text-sky-400/40 text-xl">
  ✦
</div>

<div className="absolute right-[30%] top-[52%] z-10 text-sky-400/40 text-xl">
  ✦
</div>

<div className="absolute left-[30%] top-[10%] z-10 text-sky-400/40 text-xl">
  ✦
</div>

<div className="absolute right-[30%] top-[85%] z-10 text-sky-400/40 text-xl">
  ✦
</div>


        {/* LEFT TOP */}
        <div className="absolute left-12 top-40 z-30">
          <p className="text-[11px] tracking-[0.5em] text-sky-700">
            PROJECT DOSSIER
          </p>

          <p className="mt-2 text-4xl font-black">
            lighT
          </p>
        </div>

        {/* RIGHT TOP */}
        <div className="absolute right-12 top-40 z-30 text-right">
          <p className="text-[11px] tracking-[0.4em] text-sky-700">
            SUBJECT ID
          </p>

          <p className="mt-2 text-4xl font-black">
            LT-082904
          </p>
        </div>

        {/* MAIN IMAGE */}
        <img
  src="/images/lighT_pro5.png"
  alt="lighT"
  className="
    absolute
    bottom-0
    left-1/2
    z-20
    h-[65vh]
    lg:h-[85vh]
    -translate-x-1/2
    object-contain
    pointer-events-none
  "
  style={{
  filter: `
    drop-shadow(-1px 0 rgba(255,255,255,1))
    drop-shadow(1px 0 rgba(255,255,255,1))
    drop-shadow(0 -1px rgba(255,255,255,1))
    `,
  }}
/>

        {/* SUBJECT */}
        <div className="absolute left-12 top-[35%] z-30">
          <p className="text-[11px] tracking-[0.35em] text-zinc-500">
            SUBJECT
          </p>

          <p className="mt-2 text-4xl font-black">
            Đỗ Minh Tân
          </p>
        </div>

        {/* STAGE NAME */}
        <div className="absolute right-12 top-[35%] z-30 text-right">
          <p className="text-[11px] tracking-[0.35em] text-zinc-500">
            STAGE NAME
          </p>

          <p className="mt-2 text-4xl font-black">
            lighT
          </p>
        </div>

        {/* BARCODE */}
        <div className="absolute left-12 top-[48%] z-30 w-[240px] border-2 border-black bg-white/90 p-4">
          <p className="mb-3 font-mono text-xs">
            LT082904
          </p>

          <div className="h-16 bg-[repeating-linear-gradient(90deg,#000_0,#000_2px,transparent_2px,transparent_4px)]" />
        </div>

        {/* HEIGHT */}
        <div className="absolute right-12 top-[52%] z-30 text-right">
          <p className="text-[11px] tracking-[0.35em] text-zinc-500">
            HEIGHT
          </p>

          <p className="mt-2 text-5xl font-black">
            177 CM
          </p>
        </div>

        {/* DATA */}
        <div className="absolute left-12 top-[68%] z-30 max-w-[280px]">
          <p className="mb-3 text-xl font-black">
            BASIC DATA
          </p>

          <div className="space-y-2 text-sm">
            <p>D.O.B — 29.08.2004</p>
            <p>ZODIAC — VIRGO</p>
            <p>HOMETOWN — HCMC</p>
            <p>EMOJI — 🐵 ✨</p>
          </div>
        </div>

        {/* QUOTE */}
        <div className="absolute right-12 top-[68%] z-30 max-w-[280px] text-right">
          <p className="text-xl italic">
            "tinie ơiii 🐵"
          </p>
        </div>

        {/* TAGS */}
        <div className="absolute left-1/2 top-[55%] z-30 flex -translate-x-1/2 flex-col gap-2">
          {[
            "#lighT",
            "#SLAY",
            "Energy",
          ].map((item) => (
            <span
              key={item}
              className="
                bg-sky-500/60
                px-3
                py-1
                text-center
                text-xs
                font-black
                text-white
              "
            >
              {item}
            </span>
          ))}
        </div>

        
</div>
<div className="lg:hidden px-4 pb-10 pt-16">

  <img
    src="/images/lighT_mobile.png"
    alt="lighT"
    className="
      mx-auto
      w-full
      max-w-[520px]
      object-contain
      select-none
      pointer-events-none
    "
    draggable={false}
  />

  <div className="mt-6 text-center">
    <p className="text-xs tracking-[0.3em] text-sky-700">
      SUBJECT
    </p>

    <h2 className="mt-2 text-3xl font-black">
      Đỗ Minh Tân
    </h2>

    <p className="mt-2 text-xl font-semibold">
      lighT (lai-Ti)
    </p>

    <p className="mt-3">
      177 CM · VIRGO · 🐵 ✨
    </p>
  </div>

  <div className="mt-6 flex flex-wrap justify-center gap-2">
    {[
      "MOOD MAKER",
      "TREND CATCHER",
      "VISUAL",
      "FAN LOVER",
    ].map((item) => (
      <span
        key={item}
        className="rounded-full bg-sky-500 px-3 py-1 text-xs font-black text-white"
      >
        {item}
      </span>
    ))}
  </div>

  <p className="mt-8 text-center italic text-lg">
    "tinie ơiii 🐵"
  </p>

  <div className="mx-auto mt-8 w-[220px] border border-black bg-white p-4">
    <div className="mb-3 text-center font-mono text-xs">
      LT082904
    </div>

    <div className="h-12 bg-[repeating-linear-gradient(90deg,#000_0,#000_2px,transparent_2px,transparent_4px)]" />
  </div>
</div>
      </main>
    </PageShell>
  );
}