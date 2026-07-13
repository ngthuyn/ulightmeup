"use client";

type Props = {
  url: string;
};

export default function FacebookPlayer({ url }: Props) {
  let embedUrl = url;

  // watch?v=xxxx -> videos/xxxx
  const watchId = url.match(/[?&]v=(\d+)/)?.[1];

  if (watchId) {
    embedUrl = `https://www.facebook.com/watch/?v=${watchId}`;
  }

  // reel/xxxx
  const reelId = url.match(/reel\/(\d+)/)?.[1];

  if (reelId) {
    embedUrl = `https://www.facebook.com/reel/${reelId}/`;
  }

  // videos/xxxx
  const videoId = url.match(/videos\/(\d+)/)?.[1];

  if (videoId) {
    embedUrl = url;
  }

   return (
  <div
    className="mx-auto max-w-md overflow-hidden rounded-2xl"
    style={{
      width: "100%",
      height: "360px",
    }}
  >
    <iframe
      src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
        embedUrl
      )}&show_text=false`}
      className="h-full w-full border-0"
      scrolling="no"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      allowFullScreen
    />
  </div>
);
}