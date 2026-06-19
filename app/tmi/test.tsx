import Link from "next/link";

export default function TmiPage() {
const tmi = [
"Rất thích giỡn, ông hoàng bắt trend, siêu thân thiện, lanh lẹ.",
"Có tài làm host, giả giọng, mood maker kiêm bảo mẫu, dạy nhảy của mọi người.",
"Là Xử Nữ nên có gu thẩm mỹ cao; tặng quần áo cho tin nhớ để ý gu của tin nha.",
"Tin hầu hết sẽ dùng đồ fan tặng cực kì cẩn thận 🥹",
"Minhtin hát hay, minhtin nhảy giỏi, minhtin siêu ngoan.",
"Từ hồi nhỏ xíu ẻm đã biết phụ người nhà bán bánh mì.",
"Minhtin trốn ba mẹ đi thi TBTN nha.",
];

return ( <main
  className="relative min-h-[100svh] overflow-x-hidden text-white"
  style={{
    backgroundImage: "url('/images/bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

  <div className="relative z-20 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between gap-4">
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
        TMI
      </p>

      <h1 className="mt-3 text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl"
        style={{
  textShadow: "0 0 15px rgba(255,255,255,.2)",
}}>
        Ghi chú nhỏ của fan
      </h1>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8 lg:text-lg">
        Những điều nhỏ xíu nhưng rất “lighT”.
      </p>
    </div>

<div className="hidden lg:block relative mx-auto mt-12 max-w-6xl">
  {/* HERO PHOTO */}
  <div className="mx-auto w-fit rotate-[-3deg] rounded-2xl
border
border-white/10
bg-black/15
backdrop-blur-xl
p-3">
    <img
      src="/images/lighT_.jpg"
      alt="lighT"
      className="h-[450px] object-cover"
    />

    <p className="mt-3 text-center text-xl font-black">
      TIN's Guide 🐵
    </p>
  </div>

  {/* NOTE 1 */}
  <div
    className="
      absolute
      left-0
      top-12
      max-w-[280px]
      rotate-[-4deg]
      rounded-2xl
      rounded-2xl
border
border-white/10
bg-black/15
backdrop-blur-xl
p-5
    "
  >
    <p className="font-black mb-2">
      TMI #01
    </p>

    <p className="text-sm leading-7">
      Rất thích giỡn, ông hoàng bắt trend,
      siêu thân thiện, lanh lẹ 🐵
    </p>
  </div>

  {/* NOTE 2 */}
  <div
    className="
      absolute
      right-0
      top-32
      max-w-[280px]
      rotate-[4deg]
      rounded-2xl
     rounded-2xl
border
border-white/10
bg-black/15
backdrop-blur-xl
p-5
    "
  >
    <p className="font-black mb-2">
      TMI #02
    </p>

    <p className="text-sm leading-7">
      Tin hầu hết sẽ dùng đồ fan tặng
      cực kì cẩn thận 🥹
    </p>
  </div>

  {/* CHAT BOX */}
  <div
    className="
      absolute
      left-8
      bottom-24
      max-w-[320px]
      rounded-2xl
      rounded-2xl
border
border-white/10
bg-black/15
backdrop-blur-xl
p-5
    "
  >
    <p className="font-black">
      message 💬
    </p>

    <p className="mt-2 text-sm leading-7">
      minhtin hát hay, minhtin nhảy giỏi,
      minhtin siêu ngoan.
    </p>
  </div>

  {/* MUSIC PLAYER */}
  <div
    className="
      absolute
      right-8
      bottom-12
      w-[320px]
      rounded-2xl
border
border-white/10
bg-black/15
backdrop-blur-xl
p-5
    "
  >
    <p className="text-xs text-white/60">
      ✨
    </p>

    <p className="font-black">
      u lighT me up!
    </p>

    <div className="mt-3 h-2 rounded-full bg-zinc-200">
      <div className="h-2 w-full rounded-full bg-sky-400" />
    </div>
  </div>

  {/* STICKERS 
  <div className="absolute left-[22%] top-[10%] text-4xl">
    ✨
  </div>

  <div className="absolute right-[20%] top-[25%] text-4xl">
    🐵
  </div>

  <div className="absolute left-[18%] bottom-[25%] text-4xl">
    💙
  </div>

  <div className="absolute right-[25%] bottom-[20%] text-4xl">
    🎤
  </div>
*/}
</div>
{/* QUẾ ANH DESKTOP */}
<div className="hidden lg:block mt-24">
  

  <div className="flex items-start justify-center gap-10">
    <div className="mt-16">
      <img
        src="/images/QA_1.jpg"
        alt="QA 1"
        className="
          w-[260px]
          rotate-[-6deg]
          rounded-3xl
          rounded-2xl
border
border-white/10
bg-black/15
backdrop-blur-xl
p-2
          transition
          hover:rotate-[-3deg]
        "
      />
    </div>

    <div>
      <img
        src="/images/QA_2.jpg"
        alt="QA 2"
        className="
          w-[320px]
          rotate-[2deg]
          rounded-3xl
          rounded-2xl
border
border-white/10
bg-black/15
backdrop-blur-xl
p-2
          transition
          hover:rotate-0
        "
      />
    </div>

    <div className="mt-10">
      <img
        src="/images/QA_3.jpg"
        alt="QA 3"
        className="
          w-[260px]
          rotate-[5deg]
          rounded-3xl
         rounded-2xl
border
border-white/10
bg-black/15
backdrop-blur-xl
p-2
          transition
          hover:rotate-[2deg]
        "
      />
    </div>
  </div>

  <p
  className="mt-8 text-center text-xl font-semibold italic text-white"
  style={{
    textShadow:
      "0 0 10px rgba(255,255,255,.5), 0 0 20px rgba(96,165,250,.35)",
  }}
>
  "Con gái cưng của ba Tin" 💙
</p>
</div>

<div className="lg:hidden mt-10 space-y-5">
  <div className="rotate-[-2deg] rounded-3xl rounded-2xl
border
border-white/10
bg-black/15
backdrop-blur-xl
p-3">
  <img
    src="/images/lighT_.jpg"
    alt="lighT"
    className="w-full rounded-2xl"
  />

  <p className="mt-3 text-center text-lg font-black">
    TIN's Guide 🐵
  </p>
</div>
<div className="rotate-[-1deg] rounded-3xl rounded-2xl
border
border-white/10
bg-black/15
backdrop-blur-xl
p-5">
  <p className="mb-2 font-black">
    🐵 TMI #01
  </p>

  <p>
    Rất thích giỡn, ông hoàng bắt trend,
    siêu thân thiện, lanh lẹ.
  </p>
</div>
<div className="rotate-[1deg] rounded-3xl rounded-2xl
border
border-white/10
bg-black/15
backdrop-blur-xl
p-5">
  <p className="mb-2 font-black">
    ✨ TMI #02
  </p>

  <p>
    Tin hầu hết sẽ dùng đồ fan tặng
    cực kì cẩn thận 🥹
  </p>
</div>
<div className="rotate-[-1deg] rounded-3xl brounded-2xl
border
border-white/10
bg-black/15
backdrop-blur-xl
p-5">
  <p className="font-black">
    💬 Message
  </p>

  <p className="mt-2">
   minhtin hát hay, minhtin nhảy giỏi,
   minhtin siêu ngoan.
  </p>
</div>
<div className="rotate-[1deg] rounded-3xl rounded-2xl
border
border-white/10
bg-black/15
backdrop-blur-xl
p-5">
  <p className="text-xs text-white/60">
  ✨
  </p>

  <p className="font-black">
    u lighT me up!
  </p>

  <div className="mt-3 h-2 rounded-full bg-zinc-200">
    <div className="h-2 w-full rounded-full bg-sky-400" />
  </div>
</div>

</div>
{/* QUẾ ANH MOBILE */}
<div className="lg:hidden mt-12">
  

  <div className="space-y-4">
    <img
      src="/images/QA_1.jpg"
      className="w-full rounded-3xl shadow-xl"
    />

    <img
      src="/images/QA_2.jpg"
      className="w-full rounded-3xl shadow-xl"
    />

    <img
      src="/images/QA_3.jpg"
      className="w-full rounded-3xl shadow-xl"
    />
  </div>

  <p
  className="mt-6 text-center text-lg font-semibold italic text-white"
  style={{
    textShadow:
      "0 0 8px rgba(255,255,255,.4), 0 0 16px rgba(96,165,250,.25)",
  }}
>
  "Con gái cưng của ba Tin" 💙
</p>
</div>
    <div className="mt-16 text-center">
      <img
  src="/images/ulightmeup.png"
  alt="u lighT me up"
  className="mx-auto w-[320px] sm:w-[420px]"
  style={{
    filter: "drop-shadow(0 0 12px rgba(255,255,255,.45))",
  }}
/>
      
    </div>
  </div>
</main>


);
}
