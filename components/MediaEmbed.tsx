"use client";

type Props = {
  platform:
    | "tiktok"
    | "facebook"
    | "youtube"
    | "instagram"
    | "threads"
    | "local";

  url?: string;
  videoFile?: string;
};

export default function MediaEmbed({
  platform,
  url,
  videoFile,
}: Props) {

  if (platform === "youtube") {

    const id =
      url?.match(
        /(?:youtu\.be\/|youtube\.com\/shorts\/|youtube\.com\/watch\?v=)([^?&]+)/
      )?.[1] ?? "";

    return (
      <iframe
        width="720"
        height="500"
        className="w-full rounded-2xl"
        src={`https://www.youtube.com/embed/${id}`}
        allowFullScreen
      />
    );
  }

  if (platform === "facebook") {
    return (
      <div className="flex justify-center">
        <iframe
          src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
            url ?? ""
          )}&show_text=false`}
          className="w-full max-w-md rounded-2xl"
          style={{
            aspectRatio: "9 / 16",
            border: "none",
            overflow: "hidden",
          }}
          scrolling="no"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  if (platform === "instagram") {
    return (
      <iframe
        className="w-full max-w-md rounded-2xl"
        height={720}
        src={`${url?.replace(/\/$/, "")}/embed`}
      />
    );
  }

  if (platform === "threads") {
    return (
      <iframe
        className="w-full max-w-md rounded-2xl"
        height={720}
        src={`${url}/embed`}
      />
    );
  }

  // ⭐ Video local
  if (platform === "local") {
    return (
      <video
        controls
        className="w-full rounded-2xl"
      >
        <source src={videoFile} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    );
  }

  return null;
}