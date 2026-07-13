"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process: () => void;
      };
    };
  }
}

export default function ThreadsEmbed({
  url,
}: {
  url: string;
}) {
  useEffect(() => {
    const SCRIPT_ID = "threads-embed-script";

    const render = () => {
      // Đợi blockquote render xong rồi mới process
      requestAnimationFrame(() => {
        window.instgrm?.Embeds?.process?.();
      });
    };

    let script = document.getElementById(
      SCRIPT_ID
    ) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = "https://www.threads.com/embed.js";
      script.async = true;

      script.onload = () => {
        render();
      };

      document.body.appendChild(script);
    } else {
      render();
    }
  }, [url]);

  return (
    <blockquote
      className="text-post-media"
      data-text-post-permalink={url}
      data-text-post-version="0"
      style={{
        maxWidth: 650,
        width: "100%",
        margin: "0 auto",
      }}
    />
  );
}