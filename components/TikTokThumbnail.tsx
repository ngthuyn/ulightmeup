"use client";

import { useEffect, useState } from "react";

export default function TikTokThumbnail({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const [thumb, setThumb] = useState("");

  useEffect(() => {
    fetch(
      `/api/tiktok-thumbnail?url=${encodeURIComponent(url)}`
    )
      .then((r) => r.json())
      .then((data) => {
        setThumb(data.thumbnail_url);
      });
  }, [url]);

  if (!thumb) {
    return (
      <div className="aspect-[3/4] rounded-xl bg-neutral-800 animate-pulse" />
    );
  }

  return (
    <img
      src={thumb}
      alt={title}
      className="aspect-[3/4] w-full rounded-xl object-cover"
    />
  );
}