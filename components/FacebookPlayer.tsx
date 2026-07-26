"use client";

type Props = {
  url: string;
  orientation?: "portrait" | "landscape";
};

export default function FacebookPlayer({
  url,
  orientation = "portrait",
}: Props) {
  let embedUrl = url;

  const watchId = url.match(/[?&]v=(\d+)/)?.[1];
  if (watchId) {
    embedUrl = `https://www.facebook.com/watch/?v=${watchId}`;
  }

  const reelId = url.match(/reel\/(\d+)/)?.[1];
  if (reelId) {
    embedUrl = `https://www.facebook.com/reel/${reelId}/`;
  }

  const videoId = url.match(/videos\/(\d+)/)?.[1];
  if (videoId) {
    embedUrl = url;
  }

  return (
    <div
      className={
        orientation === "portrait"
          ? "mx-auto w-full max-w-[420px] overflow-hidden rounded-[30px] border border-white/10"
          : "mx-auto w-full max-w-5xl overflow-hidden rounded-[30px] border border-white/10"
      }
    >
      <iframe
        src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
          embedUrl
        )}&show_text=false`}
        title="Facebook Video"
        className={
          orientation === "portrait"
            ? "w-full h-[450px] sm:h-[620px] md:h-[720px]"
            : "aspect-video w-full"
        }
        frameBorder={0}
        scrolling="no"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}