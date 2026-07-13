"use client";
import type { ReactNode } from "react";
export default function Footer() {
  return (
    <footer
  id="site-footer"
  className="
      

    mt-0
    border-t border-sky-200/40
    py-14
  "
  /*style={{
    background:
      "linear-gradient(180deg,#dff8ff 0%,#c8eeff 40%,#bde5ff 100%)",
  }}*/
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
}}
  */
 style={{
    background: "var(--footer-bg)"
}}
>
      <div className="mx-auto max-w-6xl px-6">

        {/* LINK */}
        <div className="text-center">
   {  /*  <p
  className="
    font-logo
    text-3xl
    font-extrabold
    tracking-[0.08em]
    pastel-light

  "
  style={{
    background:
      "linear-gradient(90deg,#FF4500,#FFA500,#8A2BE2,#4682B4)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 0 20px rgba(255,255,255,.2)",
  }}
>
  lighT's SNS Links
</p>
*/}
{/*
<p
  className="
    font-logo
    text-3xl
    font-extrabold
    tracking-[0.08em]
    text-white
  "
  style={{
    textShadow:
      "0 0 10px rgba(255,255,255,.6), 0 0 25px rgba(138,43,226,.35)",
  }}
>
  lighT's SNS Links
</p>
*/}

<p
  className="
    pastel-light
    text-2xl
        font-logo

    font-black
    tracking-[0.12em]
    text-white
  "
  style={{
    textShadow:
      "0 2px 8px rgba(0,0,0,.18),0 0 15px rgba(255,255,255,.5)",
  }}
>
  lighT's SNS Links
</p>

{/*<p
  className="
      pastel-light

    font-logo
    text-3xl
    font-extrabold
    tracking-[0.08em]
  "
  style={{
    background:
      "linear-gradient(90deg,#FF4500,#FFA500,#8A2BE2,#4682B4)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 0 20px rgba(255,255,255,.2)",
  }}
>
  lighT's SNS Links
</p>
*/}

          <div className="mx-auto mt-3 h-px w-8 bg-white/0" />
        </div>

        {/* SOCIAL */}
        <div className="mt-8 flex flex-wrap justify-center gap-5">

          <Social
            img="/images/facebook.png"
            href="https://www.facebook.com/lighT.sye"
          />

          <Social
            img="/images/instagram.png"
            href="https://www.instagram.com/do.nathnim"
          />

          <Social
            img="/images/tiktok.png"
            href="https://www.tiktok.com/@do.nathnim_"
          />

          <Social
            img="/images/youtube.png"
            href="https://www.youtube.com/@lighT-official-T"
          />

          <Social
            img="/images/threads.png"
            href="https://www.threads.com/@do.nathnim"
          />

          <Social
            img="/images/1creators.jpg"
            href="https://share.1creators.com/fandom-tinie-oiii"
          />

        </div>

        {/* BUTTONS */}

        <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-5">

          <FooterButton 
          logo="/images/zalo.png"
          href="https://zalo.me/g/hkjrlj645">
           Nhà văn hóa tinie
          </FooterButton>
          <FooterButton
          logo="/images/facebook.png"
            href="https://www.facebook.com/profile.php?id=61582766494305"
          >
           TINcredible - All for Đỗ Minh Tân

          </FooterButton>

          <FooterButton
          logo="/images/threads.png"
            href="https://www.threads.com/@tincredible_allforlight"
          >
TINcredible - All for lighT
          </FooterButton>

                    <FooterButton
          logo="/images/tiktok.png"
            href="https://www.tiktok.com/@tincredible_allforlight"
          >
TINcredible - All for lighT
          </FooterButton>


        </div>

      </div>
    </footer>
  );
}

function Social({
  img,
  href,
}: {
  img: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="
        flex
        h-8
        w-8
        items-center
        justify-center
        rounded-full
        bg-transparent
        transition
        hover:bg-sky-200
        hover:scale-110
      "
    >
      <img
        src={img}
        className="h-7 w-7 object-contain"
      />
    </a>
  );
}

function FooterButton({
  href,
  children,
  logo,
}: {
  href: string;
  children: ReactNode;
  logo?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="
        flex
        items-center
        gap-5
        rounded-xl
        border
        border-sky-200/50
        bg-white/55
        px-8
        py-5
        transition
        hover:bg-white/80
        hover:scale-[1.02]
      "
    >
      {logo && (
        <img
          src={logo}
          className="h-10 w-10 object-contain shrink-0"
        />
      )}

      <span
        className="
          flex-1
          text-center
          text-sm
          tracking-[0.15em]
          font-semibold
          text-slate-700
        "
      >
        {children}
      </span>
    </a>
  );
}