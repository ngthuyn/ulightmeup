"use client";

import { useEffect, useRef } from "react";

export default function TikTokPlayer({
  url,
}: {
  url: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const videoId =
      url.match(/video\/(\d+)/)?.[1];

    if (!videoId) return;

    ref.current.innerHTML = `
      <blockquote
        class="tiktok-embed"
        cite="${url}"
        data-video-id="${videoId}"
        style="max-width:605px;min-width:325px;margin:auto;"
      >
        <section>
          <a href="${url}">
            TikTok
          </a>
        </section>
      </blockquote>
    `;

    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;

    script.onload = () => {
      console.log("loaded");
    };

    document.body.appendChild(script);

    return () => script.remove();
  }, [url]);

  return <div ref={ref} />;
}