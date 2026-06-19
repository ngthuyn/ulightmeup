import Link from "next/link";
import PageShell from "@/components/PageShell";

export default function ProfilePage() {
  return (
    <PageShell videoSrc="/videos/light-intro.mp4">
<main className="relative min-h-screen overflow-x-hidden site-bg text-black">

        {/* GRID */}
       {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
*/}
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
          ← 🏠
        </Link>
<div className="hidden lg:block">
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
<div
  className="
    absolute
    left-1/2
    top-10
    z-20
    flex
    -translate-x-1/2
    flex-col
    items-center
  "
>
  <img
  src="/images/lighT_logo.png"
  className="
    w-[550px]
    max-w-[75vw]
    select-none
    pointer-events-none
  "
/>

<img
  src="/images/lighT_pro5_.png"
  className="
    -mt-30
    h-[80vh]
    object-contain
    pointer-events-none
  "

  
  style={{
    filter: `
      drop-shadow(-1px 0 rgba(255,255,255,1))
      drop-shadow(1px 0 rgba(255,255,255,1))
      drop-shadow(0 -1px rgba(255,255,255,1))
      drop-shadow(0 1px rgba(255,255,255,1))
    `,
  }}
/>
</div>
        {/* SUBJECT */}
        <div className="absolute left-12 top-[35%] z-30">
          <p className="text-[11px] tracking-[0.35em] text-zinc-500">
            FULL NAME
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
<div className="absolute right-12 top-[80%] z-30 text-right">  
 
  <p className="text-[11px] tracking-[0.35em] text-zinc-500">
    SOCIAL
  </p>

<div className="mt-3 flex justify-end gap-3">    
    <a href="https://www.facebook.com/lighT.sye" target="_blank">
      <img
              src="/images/facebook.png"
              className="h-5 w-5 transition hover:scale-110"
            />

         
    </a>

    <a href="https://www.instagram.com/do.nathnim" target="_blank">
      <img
              src="/images/instagram.png"
              className="h-5 w-5 transition hover:scale-110"
            />
             
    </a>

    <a href="https://www.tiktok.com/@do.nathnim_" target="_blank">
      <img
              src="/images/tiktok.png"
              className="h-5 w-5 transition hover:scale-110"
            />
             
    </a>

    <a href="https://www.threads.com/@do.nathnim" target="_blank">
      <img
              src="/images/threads.png"
              className="h-5 w-5 transition hover:scale-110"
            />
       
    </a>

    <a href="https://www.youtube.com/@lighT-official-T" target="_blank">
      <img
              src="/images/youtube.jpg"
              className="h-5 w-5 transition hover:scale-110"
            />
    </a>
  </div>
</div>
        {/* QUOTE */}
        <div className="absolute right-12 top-[68%] z-30 max-w-[280px] text-right">
          <p className="text-xl italic">
            "tinie ơiii 🐵"
          </p>
        </div>

        {/* TAGS 
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
        </div>*/}

        
</div>
<div className="lg:hidden px-4 pb-10 pt-16">

  <div className="flex flex-col items-center">
  <img
    src="/images/lighT_logo.png"
    alt="lighT"
className="w-[80vw] max-w-[500px]"
   
   />

  <img
    src="/images/lighT_pro5_.png"
    alt="lighT"
    className="
      -mt-27
      h-[70vh]
      object-contain
    "
    style={{
      filter: `
        drop-shadow(-1px 0 rgba(255,255,255,1))
        drop-shadow(1px 0 rgba(255,255,255,1))
        drop-shadow(0 -1px rgba(255,255,255,1))
      `,
    }}
  />
</div>
{/* COORDINATES */}


{/* STARS */}
<div className="absolute left-[12%] top-[42%] z-10 text-sky-400/40 text-xl">
  ✦
</div>

<div className="absolute right-[15%] top-[22%] z-10 text-sky-400/40 text-xl">
  ✦
</div>

<div className="absolute left-[20%] top-[60%] z-10 text-sky-400/40 text-xl">
  ✦
</div>

<div className="absolute right-[20%] top-[55%] z-10 text-sky-400/40 text-xl">
  ✦
</div>
  <div className="mt-6 text-center">
    <p className="text-xs tracking-[0.3em] text-sky-700">
      FULL NAME
    </p>

    <h2 className="mt-2 text-3xl font-black">
      Đỗ Minh Tân
    </h2>
    <p className="mt-3 text-[11px] tracking-[0.35em] text-sky-700">
  SUBJECT ID
    </p>

    <p className="text-xl font-black">
      LT-082904
    </p>
    <p className="mt-4 text-[11px] tracking-[0.35em] text-zinc-500">
  STAGE NAME
</p>

<p className="mt-1 text-3xl font-black">
  lighT
</p>

<p className="mt-1 text-sm text-zinc-500">
  (lai-Ti)
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
<div className="mt-8">
  <p className="mb-4 text-center text-lg font-black">
    BASIC DATA
  </p>

  <div className="space-y-2 text-center text-sm">
    <p>D.O.B — 29.08.2004</p>
    <p>ZODIAC — VIRGO</p>
    <p>HOMETOWN — HCMC</p>
    <p>EMOJI — 🐵 ✨</p>
  </div>
</div>
<div className="relative z-[999] mt-8">  
  <p className="mb-4 text-center text-lg font-black">
    SOCIAL
  </p>

<div className="relative z-[999] flex justify-center gap-5">    
    <a href="https://www.facebook.com/lighT.sye" target="_blank">
      <img src="/images/facebook.png" className="h-7 w-7" />
    </a>

    <a href="https://www.instagram.com/do.nathnim" target="_blank">
      <img src="/images/instagram.png" className="h-7 w-7" />
    </a>

    <a href="https://www.tiktok.com/@do.nathnim_" target="_blank">
      <img src="/images/tiktok.png" className="h-7 w-7" />
    </a>

    <a href="https://www.threads.com/@do.nathnim" target="_blank">
      <img src="/images/threads.png" className="h-7 w-7" />
    </a>

    <a href="https://www.youtube.com/@lighT-official-T" target="_blank">
      <img src="/images/youtube.jpg" className="h-7 w-7" />
    </a>
  </div>
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
  <div className="mt-8 text-center text-[10px] tracking-[0.35em] text-zinc-400">
  LAT 20.0126° N
  <br />
  LONG 28.1125° E
</div>
</div>
      </main>
    </PageShell>
  );
}