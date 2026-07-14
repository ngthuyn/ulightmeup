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
console.log(id);
console.log(video);
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
          DANCE COMPILATION
        </h1>
 <h2 className="mt-10 text-2xl font-bold">
                    {video.title}
                </h2>
                <div className="flex justify-center">
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

               

                <h2 className="mt-20 mb-8 text-3xl font-bold text-white">
                     Video liên quan 
                </h2>

                <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                    {related.map((item) => (
                        <Link
                            key={item.id}
href={`/videos/dance-compilation/${item.id}`}                            
                            className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-lg
        transition
        hover:border-sky-300/40
        hover:bg-white/[0.05]"
                        >
                            {/* Thumbnail */}
                            <div className="aspect-[3/4] overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="
            h-full
            w-full
            object-cover
            transition
            duration-500
            group-hover:scale-105
          "
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <h3
                                    className="
            line-clamp-2
            text-center
            text-sm
            font-medium
            text-white
            transition
            group-hover:text-sky-300
          "
                                >
                                    {item.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>

            </section>
        </main>
    );
}