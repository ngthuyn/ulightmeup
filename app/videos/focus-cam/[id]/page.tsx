import { videos } from "../data";
import TikTokPlayer from "@/components/TikTokPlayer";
import MediaEmbed from "@/components/MediaEmbed";
import Link from "next/link";
import FacebookPlayer from "@/components/FacebookPlayer";
import ThreadsEmbed from "@/components/ThreadsEmbed";

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const video = videos.find((v) => v.id === id);

    if (!video) {
        return <div>Video not found</div>;
    }

  const related = videos.filter((v) => {
    if (v.id === video.id) return false;

    return v.keywords.some((k) =>
        video.keywords.includes(k)
    );
});

    return (
        <main className="min-h-screen text-white">
         
<section className="mx-auto max-w-7xl px-6 pt-28 pb-24">
 <h1 className="mt-3 text-center text-4xl font-black">
  FOCUS CAM
        </h1>
 <p className="mt-10 uppercase tracking-[0.25em] text-sky-300">
  {video.event}
</p>

<h2 className="mt-3 text-4xl font-quote italic">
  {video.title}
</h2>

<p className="mt-4 text-white/60">
  {video.date}
</p>
<div className="mt-12 flex justify-center">                    
                    <div className="space-y-12">

 {video.sources.map((source) => (
  <div
    key={source.url}
    className="flex flex-col items-center"
  >
    <div className="mb-5 text-xl font-semibold">
      {source.platform.toUpperCase()}
    </div>

    {source.platform === "tiktok" && (
      <TikTokPlayer url={source.url} />
    )}

    {source.platform === "youtube" && (
      <MediaEmbed
        platform="youtube"
        url={source.url}
      />
    )}

    {source.platform === "facebook" && (
      <FacebookPlayer url={source.url} />
    )}

    {source.platform === "instagram" && (
      <MediaEmbed
        platform="instagram"
        url={source.url}
      />
    )}

    {source.platform === "threads" && (
  <ThreadsEmbed url={source.url} />
)}
  </div>
))}

</div>
                </div>

               <div className="mt-20 flex justify-center">
  <Link
    href="/videos/focus-cam"
    className="
      rounded-full
      border
      border-sky-300/30
      px-8
      py-3
      text-sky-300
      transition
      hover:bg-sky-400/10
    "
  >
    ← Quay lại 
  </Link>
</div>


            </section>
        </main>
    );
}