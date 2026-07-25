"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function IntroPage() {
  const router = useRouter();

  const text = "Welcome to lighT's Universe";

  const [typing, setTyping] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

 useEffect(() => {
  let i = 0;

  const interval = setInterval(() => {
    setTyping(text.slice(0, i + 1));
    i++;

    if (i >= text.length) {
      clearInterval(interval);
      setShowCursor(false);
    }
  }, 65);

  const fadeTimer = setTimeout(() => {
  setFadeOut(true);
}, 5000);

const pageTimer = setTimeout(() => {
  router.replace("/landing");
}, 5000);

  return () => {
    clearInterval(interval);
    clearTimeout(fadeTimer);
    clearTimeout(pageTimer);
  };
}, [router]);
  return (
    <main className={`intro ${fadeOut ? "fade-out" : ""}`}>
<div className="intro-content">
   <h1 className="intro-logo font-logo">
  <span className="logo-top">
    lài tì
    <span className="logo-stars">
      <span className="star star1"> ✦</span>
         </span>
  </span>

  <span className="logo-bottom">
  
   <span className="logo-stars">
      <span className="star star1"> ✦</span>
         </span>  lái ti
  </span>
</h1>
 

     <div className="intro-text">
  <span className="sparkle">✨</span>

  <p className="typing">
    {typing}
    {showCursor && <span className="cursor">▋</span>}
  </p>

  <span className="sparkle">✨</span>
</div>

      </div>
{/*
      <style jsx>{`

        .intro{
          min-height:100vh;
          display:flex;
          justify-content:center;
          align-items:center;
          overflow:hidden;

          background:
            linear-gradient(
              135deg,
              #7dd3fc 0%,
              #60a5fa 35%,
              #818cf8 70%,
              #a78bfa 100%
            );

          transition:opacity .7s ease;
        }

        .fade-out{
          opacity:0;
        }

        .content{
          text-align:center;
        }

        .intro-logo{

  font-size:7rem;
  font-weight:900;
  line-height:1;

  position:relative;

  animation:
    logoIntro .9s ease-out,
    floatLogo 4s ease-in-out .9s infinite,
    pastelFlow 8s linear infinite;

  background-size:300% auto;

  transform-style:preserve-3d;

  filter:
    drop-shadow(0 2px 2px rgba(255,255,255,.35))
    drop-shadow(0 8px 18px rgba(0,0,0,.12))
    drop-shadow(0 0 22px rgba(255,255,255,.55))
    drop-shadow(0 0 45px rgba(120,210,255,.45));

  text-shadow:
    0 1px 0 rgba(255,255,255,.45),
    0 2px 4px rgba(255,255,255,.18);

}
        .typing{

          margin-top:2.5rem;
          font-size:1.4rem;
          color:white;
          letter-spacing:.03em;
          font-weight:300;

        }

        .cursor{
          animation:blink .8s infinite;
        }

        @keyframes blink{

          50%{
            opacity:0;
          }

        }

        @keyframes logoIntro{

          from{

            opacity:0;

            transform:
              scale(.72)
              translateY(25px);

          }

          to{

            opacity:1;

            transform:
              scale(1)
              translateY(0);

          }

        }

        @keyframes floatLogo{

          0%{
            transform:
              translateY(0)
              rotateY(0deg);
          }

          25%{
            transform:
              translateY(-5px)
              rotateY(-8deg);
          }

          50%{
            transform:
              translateY(0)
              rotateY(0deg);
          }

          75%{
            transform:
              translateY(-5px)
              rotateY(8deg);
          }

          100%{
            transform:
              translateY(0)
              rotateY(0deg);
          }

        }

      `}</style>
      */}
    </main>
  );
}