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
        <main  className="relative min-h-[100svh] overflow-hidden text-white"
      style={{
        backgroundImage: "url('/videos/bg.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
         
<section className="mx-auto max-w-7xl px-6 pt-28 pb-24">
 <h1 className="mt-3 text-center text-xl font-black">
          DANCE COMPILATION
        </h1>
<h3 className="mt-4 text-sm italic font-serif leading-tight">
  {video.title.includes("(") ? (
    <>
      {video.title.split("(")[0].trim()}
      <br />
      <span className="text-lg text-white/70">
        ({video.title.split("(")[1]}
      </span>
    </>
  ) : (
    video.title
  )}
</h3>
                <div className="flex justify-center">
                    <div className="space-y-12">

 {video.sources.map((source) => (
  <div
    key={source.url}
    className="flex flex-col items-center"
  >
    <div className="mb-5 text-sm font-semibold">
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

        <Link
  href="/videos/dance-compilation"
  className="
  mt-10
    inline-flex
    items-center
    gap-2
    rounded-full
    border
    border-white/10
    bg-white/5
    px-5
    py-2.5
    text-sm
    text-white/80
    transition
    hover:border-sky-300/40
    hover:text-sky-300
  "
>
  ← Quay về
</Link>       

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
    text-center
    text-sm
    font-medium
    text-white
    transition
    group-hover:text-sky-300
    leading-tight
  "
>
  {item.title.includes("(") ? (
    <>
      {item.title.split("(")[0].trim()}
      <br />
      <span className="text-xs text-white/70">
        ({item.title.split("(")[1]}
      </span>
    </>
  ) : (
    item.title
  )}
</h3>
                            </div>
                        </Link>
                    ))}
                </div>

            </section>
        </main>
    );
}