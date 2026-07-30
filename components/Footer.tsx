"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useState } from "react";
const menu = [
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
        label: "FanCam",
        href: "/videos/fancam",
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
        label: "tinie",
        href: "/tmi/tinies-corner",
      },
    ],
  },
];

export default function Footer() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  return (
    <footer
      id="site-footer"
      className="border-t border-sky-200/30 py-8 md:py-10"
      style={{
        background: "var(--footer-bg)",
      }}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* Desktop */}
<div className="hidden lg:flex items-start justify-between gap-8 xl:gap-12">           
              {/* MENU */}
<div className="w-[240px] shrink-0">  
<h3 className="mb-5 text-center text-sm font-semibold tracking-[0.25em] uppercase text-sky-200">              
              Menu
            </h3>

<div className="grid grid-cols-2 gap-x-10 gap-y-3">              
           {menu.map((item) => {
if (!item.children) {
      return (
      <Link
        key={item.href}
        href={item.href}
        className="text-sm text-white/75 transition hover:text-white"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div key={item.label} className="relative">
      <button
        onClick={() =>
          setOpenMenu(
            openMenu === item.label ? null : item.label
          )
        }
        className="text-left text-sm text-white/75 transition hover:text-white"
      >
        {item.label}
      </button>

      {openMenu === item.label && (
        <div
          className="
            absolute
            left-0
            top-full
            z-30
            mt-2
            w-56
            rounded-xl
            border
            border-white/10
            bg-black/80
            p-2
            backdrop-blur-xl
          "
        >
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={() => setOpenMenu(null)}
              className="
                block
                rounded-lg
                px-3
                py-2
                text-sm
                text-white/75
                transition
                hover:bg-white/10
                hover:text-white
              "
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
})}
            </div>
          </div>

          {/* SNS */}
          
<div className="w-[320px] shrink-0">  
            <h2
  className="
    text-center
    pastel-light
    font-logo
    text-xl
    font-black
    tracking-[0.14em]
  "
>
              lighT's SNS
            </h2>

            <div className="mt-5 flex gap-4">
              
              <Social img="/images/facebook.png" href="https://www.facebook.com/lighT.sye" />
              <Social img="/images/instagram.png" href="https://www.instagram.com/do.nathnim" />
              <Social img="/images/tiktok.png" href="https://www.tiktok.com/@do.nathnim_" />
              <Social img="/images/youtube.png" href="https://www.youtube.com/@lighT-official-T" />
              <Social img="/images/threads.png" href="https://www.threads.com/@do.nathnim" />
              <Social img="/images/1creators.jpg" href="https://share.1creators.com/fandom-tinie-oiii" />
            </div>
{/*
            <p className="mt-5 max-w-sm text-center text-[12px] italic leading-6 text-white/65">
              Tham gia{" "}
              <a
                href="https://zalo.me/g/hkjrlj645"
                target="_blank"
                className="text-sky-200 hover:text-white"
              >
                Nhà Văn Hóa tinie
              </a>{" "}
              và theo dõi{" "}
              <a
                href="https://www.facebook.com/profile.php?id=61582766494305"
                target="_blank"
                className="text-sky-200 hover:text-white"
              >
                TINcredible
              </a>{" "}
              để cập nhật những thông tin mới nhất từ fandom.
            </p>*/}
          </div>

          {/* CTA */}
<div className="w-[320px] shrink-0">              
<h3 className="mb-5 text-center text-sm font-semibold tracking-[0.25em] uppercase text-sky-200">              
              Community
            </h3>
<div className="flex flex-col gap-3">
  <FooterButton href="https://zalo.me/g/hkjrlj645">
    Nhà Văn Hóa tinie
  </FooterButton>

  <FooterButton href="https://www.facebook.com/profile.php?id=61582766494305">
    TINcredible - All for lighT Facebook
  </FooterButton>

  <FooterButton href="https://www.tiktok.com/@tincredible_allforlight">
    TINcredible - All for lighT TikTok
  </FooterButton>
</div>
          </div>
        </div>

    {/* Mobile */}
<div className="lg:hidden flex flex-col items-center">
  <h2
    className="
      pastel-light
      font-logo
      text-xl
      font-black
      tracking-[0.12em]
    "
  >
    lighT's SNS
  </h2>

<div className="mt-6 flex justify-center gap-3">    
    <Social img="/images/facebook.png" href="https://www.facebook.com/lighT.sye" />
    <Social img="/images/instagram.png" href="https://www.instagram.com/do.nathnim" />
    <Social img="/images/tiktok.png" href="https://www.tiktok.com/@do.nathnim_" />
    <Social img="/images/youtube.png" href="https://www.youtube.com/@lighT-official-T" />
    <Social img="/images/threads.png" href="https://www.threads.com/@do.nathnim" />
    <Social img="/images/1creators.jpg" href="https://share.1creators.com/fandom-tinie-oiii" />
  </div>

  <p className="mt-6 max-w-xs text-center text-xs italic leading-7 text-white/60">
    Tham gia{" "}
    <a
      href="https://zalo.me/g/hkjrlj645"
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-sky-300"
    >
      Nhà Văn Hóa tinie
    </a>{" "}
    và theo dõi{" "}
    <a
      href="https://www.facebook.com/profile.php?id=61582766494305"
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-sky-300"
    >
      TINcredible
    </a>{" "}
    để cập nhật những thông tin mới nhất từ fandom.
  </p>

</div>

      </div>
    </footer>
  );
}
type SocialProps = {
  img: string;
  href: string;
};

function Social({ img, href }: SocialProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
  flex
  h-8 w-8
  lg:h-10 lg:w-10
  items-center
  justify-center
  rounded-full
  border border-white/10
  bg-white/5
  transition-all duration-300
  hover:-translate-y-1
  hover:border-sky-300/60
  hover:bg-sky-400/10
"
    >
      <img
        src={img}
        alt=""
        className="h-4 w-4 object-contain lg:h-5 lg:w-5"
      />
    </a>
  );
}

type FooterButtonProps = {
  href: string;
  children: ReactNode;
};

function FooterButton({
  href,
  children,
}: FooterButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        flex
        items-center
        justify-center

        rounded

        border
        border-white/10

        bg-white/[0.03]

        px-5
        py-2.5

        text-sm
        font-medium
        text-white/75

        transition-all
        duration-300

        hover:border-sky-300/40
        hover:bg-sky-400/10
        hover:text-white
      "
    >
      {children}
    </a>
  );
}