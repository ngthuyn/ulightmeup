"use client";

import TikTokPlayer from "@/components/TikTokPlayer";
import FacebookPlayer from "@/components/FacebookPlayer";
import MediaEmbed from "@/components/MediaEmbed";
import Gallery from "@/components/Gallery";

const journey = [
  {
    title: "Casting",
    date: "2025",
    description:
      "Minh Tân chính thức tham gia casting chương trình Tân Binh Toàn Năng. Đây là cột mốc đầu tiên mở ra hành trình theo đuổi ước mơ trở thành nghệ sĩ chuyên nghiệp.",
    platform: "youtube",
    url: "",
    gallery: [
      "/images/tbnn/casting/1.jpg",
      "/images/tbnn/casting/2.jpg",
      "/images/tbnn/casting/3.jpg",
    ],
  },

  {
    title: "Top 100",
    date: "2025",
    description:
      "Sau vòng tuyển chọn, Minh Tân trở thành một trong Top 100 thực tập sinh bước tiếp vào hành trình của chương trình.",
    platform: "facebook",
    url: "",
    gallery: [
      "/images/tbnn/top100/1.jpg",
      "/images/tbnn/top100/2.jpg",
      "/images/tbnn/top100/3.jpg",
    ],
  },

  {
    title: "Top 11",
    date: "2025",
    description:
      'Sau nhiều tháng đào tạo và thử thách, Minh Tân chính thức lọt vào top 11 của chương trình và tham gia "Tân Binh Toàn Năng - Giai đoạn chính thức" với nghệ danh minhtin.',
    platform: "tiktok",
    url: "",
    gallery: [
      "/images/tbnn/top11/1.jpg",
      "/images/tbnn/top11/2.jpg",
      "/images/tbnn/top11/3.jpg",
      "/images/tbnn/top11/4.jpg",
    ],
  },
   {
    title: "Trở thành nghệ sĩ độc lập",
    date: "2025",
    description:
"Dù hành trình tại Top 11 khép lại trong nhiều tiếc nuối, Minh Tin đã chứng minh khát vọng mãnh liệt được tỏa sáng trên sân khấu và khẳng định tiềm năng của một nghệ sĩ mang màu sắc rất riêng. Chính từ hành trình ấy, minhtin chính thức bước sang một chương mới, hoạt động với tư cách nghệ sĩ độc lập dưới nghệ danh lighT.",   
      platform: "tiktok",
    url: "",
    gallery: [
      "/images/tbnn/debut/1.jpg",
      "/images/tbnn/debut/2.jpg",
      "/images/tbnn/debut/3.jpg",
      "/images/tbnn/debut/4.jpg",
    ],
  },
];

export default function TVShowPage() {
  return (
    <main
      className="min-h-screen text-white"
      style={{
        backgroundImage: "url('/videos/bg.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="mx-auto max-w-6xl px-6 pt-28 pb-24">

        {/* Hero */}

        <p className="text-center uppercase tracking-[0.35em] text-sky-300">
          Career Journey
        </p>

        <h1 className="mt-3 text-center text-6xl font-black">
          TV SHOW
        </h1>

        <p className="mt-8 text-center text-3xl font-quote italic">
          Tân Binh Toàn Năng
        </p>

        <p className="mx-auto mt-6 max-w-3xl text-center leading-8 text-white/70">
          Hành trình từ một thí sinh tiềm năng đến nghệ sĩ trẻ đầy triển vọng
          <span className="text-sky-300"> lighT</span>.
        </p>

        <img
          src="/images/tbtn/banner.jpg"
          className="mt-16 w-full rounded-[32px] object-cover"
        />

        {/* About */}

        <section
          className="
            mt-20
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.05]
            p-8
            backdrop-blur-xl
          "
        >
          <p className="uppercase tracking-[0.25em] text-sky-300">
            ABOUT
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            The Beginning of lighT
          </h2>

          <div className="mt-8 space-y-6 leading-8 text-white/75">

            <p>
              Tân Binh Toàn Năng là dấu mốc quan trọng trong hành trình nghệ thuật
              của Minh Tân. Chương trình không chỉ là sân khấu để thể hiện khả năng
              ca hát và trình diễn, mà còn là nơi giúp anh trưởng thành qua từng
              thử thách.
            </p>

            <p>
              Từ những ngày đầu tham gia casting, vượt qua các vòng tuyển chọn,
              trở thành Top 100 thực tập sinh và cuối cùng dừng chân tiếc nuối tại top 11. Sau chương trình Minh Tân chính thức ra mắt truyền thông với nghệ danh
              <span className="text-sky-300"> lighT</span>, mỗi chặng đường đều
              ghi dấu sự nỗ lực không ngừng.
            </p>

          </div>
        </section>

        {/* Timeline */}

        <section className="mt-24">

          <h2 className="text-3xl font-bold">
            Journey
          </h2>

          <div className="mt-10 border-l border-sky-400/40 pl-8 space-y-10">

            <div>
              <p className="text-sky-300 font-semibold">
                Casting
              </p>

              <h3 className="mt-2 text-xl">
                Bắt đầu hành trình
              </h3>
            </div>

            <div>
              <p className="text-sky-300 font-semibold">
                Top 100
              </p>

              <h3 className="mt-2 text-xl">
Tham gia "Project 100%" Tân Binh Toàn Năng
              </h3>
            </div>
              <div>
              <p className="text-sky-300 font-semibold">
                Top 11
              </p>

              <h3 className="mt-2 text-xl">
                Tân Binh Toàn Năng - Giai đoạn chính thức
              </h3>
            </div>

            <div>
              <p className="text-sky-300 font-semibold">
                Trở thành nghệ sĩ độc lập
              </p>

              <h3 className="mt-2 text-xl">
                Nghệ sĩ độc lập lighT thuộc SYE Holdings
              </h3>
            </div>

          </div>

        </section>
                {/* Journey Chapters */}

        <div className="mt-24 space-y-32">

          {journey.map((item) => (

            <section
              key={item.title}
              className="
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.04]
                p-8
                backdrop-blur-xl
              "
            >

              {/* Header */}

              <div className="mb-12">

                <p className="uppercase tracking-[0.25em] text-sky-300">
                  {item.date}
                </p>

                <h2 className="mt-3 text-4xl font-black">
                  {item.title}
                </h2>

                <p className="mt-6 max-w-4xl leading-8 text-white/70">
                  {item.description}
                </p>

              </div>

              {/* Video */}

              <div className="flex justify-center">

                {item.platform === "tiktok" && item.url && (
                  <TikTokPlayer url={item.url} />
                )}

                {item.platform === "facebook" && item.url && (
                  <FacebookPlayer url={item.url} />
                )}

                {item.platform === "youtube" && item.url && (
                  <MediaEmbed
                    platform="youtube"
                    url={item.url}
                  />
                )}

              </div>

              {/* Gallery */}

              {item.gallery.length > 0 && (

                <div className="mt-16">

                  <Gallery images={item.gallery} />

                </div>

              )}

            </section>

          ))}

        </div>

        {/* Quote */}

        <section className="mt-28 text-center">

          <p
            className="
              mx-auto
              max-w-4xl
              text-3xl
              italic
              font-quote
              leading-relaxed
              text-white/80
            "
          >
            “Every stage, every challenge, every performance
            became another step toward becoming
            <span className="text-sky-300"> lighT</span>”
          </p>

        </section>
        {/* Ending 

        <div className="mt-24 flex justify-center">

          <img
            src="/images/ulightmeup.png"
            alt="u lighT me up"
            className="w-[320px] sm:w-[420px]"
            style={{
              filter:
                "drop-shadow(0 0 12px rgba(255,255,255,.45))",
            }}
          />

        </div>
*/}
      </section>

    </main>

  );
}