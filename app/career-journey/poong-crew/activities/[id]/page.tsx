import Link from "next/link";

import { activities } from "../data";
import TikTokPlayer from "@/components/TikTokPlayer";
import FacebookPlayer  from "@/components/FacebookPlayer";
import Gallery from "@/components/Gallery";
import MediaEmbed from "@/components/MediaEmbed";

export default async function ActivityPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log("id =", id);

  const activity = activities.find(
    (item) => item.id === id
  );

  console.log(activity);

  if (!activity) {
    return (
      <main className="min-h-screen flex items-center justify-center text-white">
        Activity not found
      </main>
    );
  }

  

  const related = activities.filter((item) => {
    if (item.id === activity.id) return false;

    return item.category === activity.category;
  });

  return (
    <main
      className="min-h-screen text-white"
      style={{
        backgroundImage: "url('/videos/bg.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      
      <section className="mx-auto max-w-7xl px-6 pt-28 pb-24">

        {/* Banner */}
        {/* Title */}

        <p className="text-center uppercase tracking-[0.35em] text-sky-300">
          Poong Crew
        </p>

        <h1 className="mt-3 text-center text-4xl font-black">
          ACTIVITIES
        </h1>

    <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-start">

  {/* Banner */}

  <div>

    <img
      src={activity.banner}
      alt={activity.title}
      className="
        w-full
        rounded-[32px]
        object-cover
        max-h-[550px]
      "
    />

  </div>

  {/* Thông tin */}

  <div>

    <p className="uppercase tracking-[0.3em] text-sky-300">
      {activity.category}
    </p>

    <h1 className="mt-4 text-3xl md:text-5xl font-black">
      {activity.title}
    </h1>

    <p className="mt-3 text-white/60">
      {activity.year}
    </p>

   <div className="mt-10">
  <h2 className="text-2xl font-bold">
    About
  </h2>

  <p className="mt-5 leading-8 text-white/70">
    {activity.description}
  </p>

  {activity.source && (
    <p className="mt-6 text-white/70">
      <span className="font-semibold text-white">
        Nguồn:
      </span>{" "}
      <a
        href={activity.source}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-300 underline"
      >
        Link
      </a>
    </p>
  )}
</div>
            {/* Members */}

        <div className="mt-16">

          <h2 className="text-3xl font-bold">

            Members

          </h2>

          <div className="mt-6 flex flex-wrap gap-3">

            {activity.members.map((member) => (

              <span
                key={member}
                className="
rounded-full
border
border-sky-300/30
px-4
py-2
text-sky-300
"
              >
                {member}
              </span>

            ))}

          </div>

        </div>


  </div>

</div>


    {/* Videos */}

{activity.sections ? (
  activity.sections.map((section) => (
    <div key={section.title} className="mt-24">

      <h2 className="text-3xl font-bold">
        {section.title}
      </h2>

      {section.description && (
        <p className="mt-5 leading-8 text-white/70">
          {section.description}
        </p>
      )}

      {section.videos.length > 0 && (
        <div className="mt-10 space-y-20">
          {section.videos.map((video) => (
            <div key={video.url}>

              <div className="mb-5">
                <span
                  className="
                  rounded-full
                  bg-sky-500/15
                  px-4
                  py-2
                  text-sm
                  uppercase
                  tracking-[0.2em]
                  text-sky-300"
                >
                  {video.platform}
                </span>
              </div>

              {video.platform === "facebook" ? (
                <FacebookPlayer url={video.url} />
              ) : video.platform === "tiktok" ? (
                <TikTokPlayer url={video.url} />
              ) : (
                <MediaEmbed
                  platform={video.platform}
                  url={video.url}
                />
              )}

            </div>
          ))}
        </div>
      )}

      {section.gallery?.length > 0 && (
        <div className="mt-16">
          <Gallery images={section.gallery} />
        </div>
      )}

    </div>
  ))
) : (
  activity.videos.length > 0 && (
    <div className="mt-24">

      <h2 className="mb-10 text-3xl font-bold">
        Videos
      </h2>

      <div className="space-y-20">

        {activity.videos.map((video) => (
          <div key={`${video.platform}-${video.url}`}>

            <div className="mb-5">
              <span
                className="
                rounded-full
                bg-sky-500/15
                px-4
                py-2
                text-sm
                uppercase
                tracking-[0.2em]
                text-sky-300"
              >
                {video.platform}
              </span>
            </div>

            {video.platform === "facebook" ? (
              <FacebookPlayer url={video.url} />
            ) : video.platform === "tiktok" ? (
              <TikTokPlayer url={video.url} />
            ) : (
              <MediaEmbed
                platform={video.platform}
                url={video.url}
              />
            )}

          </div>
        ))}

      </div>

    </div>
  )
)}

        {/* Gallery */}

{!activity.sections && activity.gallery.length > 0 && (
  <div className="mt-24">

    <h2 className="mb-8 text-3xl font-bold">
      Gallery
    </h2>

    <Gallery images={activity.gallery} />

  </div>

)}
        {/* Related */}

        {related.length > 0 && (

          <div className="mt-24">

            <h2 className="mb-8 text-3xl font-bold">

              Related Activities

            </h2>

            <div
              className="
grid
grid-cols-2
gap-6
md:grid-cols-4
"
            >

              {related.map((item) => (

                <Link
                  key={item.id}
                  href={`/career-journey/poong-crew/activities/${item.id}`}
                  className="
group
overflow-hidden
rounded-2xl
border
border-white/10
bg-white/5
transition
hover:border-sky-300/40
"
                >

                  <div className="aspect-[3/4] overflow-hidden">

                    <img
                      src={item.thumbnail}
                      className="
h-full
w-full
object-cover
duration-500
group-hover:scale-105
"
                    />

                  </div>

                  <div className="p-4">

                    <h3
                      className="
line-clamp-2
text-center
text-sm
font-medium
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

          </div>

        )}

      </section>
    </main>
  );
}