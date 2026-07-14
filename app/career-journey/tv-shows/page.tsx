"use client";
import Link from "next/link";
import TikTokPlayer from "@/components/TikTokPlayer";
import FacebookPlayer from "@/components/FacebookPlayer";
import MediaEmbed from "@/components/MediaEmbed";
import Gallery from "@/components/Gallery";

const journey = [
  {
    title: "Casting",
    date: "2025",
    description:
      '<span className="text-sky-300"> Minh Tân </span> chính thức tham gia casting chương trình <span className="text-sky-300"> Tân Binh Toàn Năng </span>. Đây là cột mốc đầu tiên mở ra hành trình theo đuổi ước mơ trở thành nghệ sĩ chuyên nghiệp.',
    platform: "youtube",
    url: "",
    gallery: [
      "/images/tbtn/casting/1.jpe",
      "/images/tbtn/casting/2.jpe",
    ],
    video: []
     
  },

  {
    title: "Top 30",
    date: "2025",
    description:
      'Sau vòng tuyển chọn, <span className="text-sky-300"> Minh Tân </span> trở thành một trong Top 30 thực tập sinh bước tiếp vào hành trình 100 ngày thăng cấp.  là thí sinh duy nhất được các chuyên gia đề xuất cân nhắc vào lớp A dù chưa nổi bật về truyền thông. Cậu được mệnh danh là “ngoại lệ đặc biệt” – một gương mặt không cần chiêu trò nhưng vẫn tỏa sáng bằng thực lực, thần thái và nội lực sân khấu không thể chối cãi.',
    platform: "facebook",
    url: "",
    gallery: [
      "/images/tbtn/top30/1.jpe",
      "/images/tbtn/top30/2.jpe",
      "/images/tbtn/top30/3.jpe",
    ],
    video: 
      [  "/videos/top30.mp4",
        "/videos/MINH TÂN_HÁT SÁT HẠCH.mp4",
        "/videos/MINH TÂN_SÁT HẠCH SHOW ME.mp4",
      ],
   
  },

  {
    title: "Top 11",
    date: "2025",
    description:
      'Sau nhiều tháng đào tạo và thử thách, <span className="text-sky-300"> Minh Tân </span> chính thức lọt vào top 11 của chương trình và tham gia "Tân Binh Toàn Năng - Giai đoạn chính thức" với nghệ danh <span className="text-sky-300"> minhtin</span>.',
    platform: "tiktok",
    url: "",
    video: [
  "/videos/top11.mp4",
],
    gallery: [
            "/images/tbtn/top11/6.jpg",

      "/images/tbtn/top11/1.jpg",
      
      "/images/tbtn/top11/5.jpe",

      "/images/tbtn/top11/2.jpe",
      "/images/tbtn/top11/3.jpe",
      "/images/tbtn/top11/4.jpe",
    ],
 


  },
   {
    title: "Trở thành nghệ sĩ độc lập",
    date: "2025",
    description:
'Dù hành trình tại Top 11 khép lại trong nhiều tiếc nuối, <span className="text-sky-300"> minhtin</span>  đã chứng minh khát vọng mãnh liệt được tỏa sáng trên sân khấu và khẳng định tiềm năng của một nghệ sĩ mang màu sắc rất riêng. Chính từ hành trình ấy, <span className="text-sky-300"> minhtin</span> chính thức bước sang một chương mới, hoạt động với tư cách nghệ sĩ độc lập dưới nghệ danh <span className="text-sky-300"> lighT</span>.',   
      platform: "tiktok",
    url: "",
    video: [
  "/videos/nghesidoclaplighT.mp4",
],
    gallery: [
      "/images/tbtn/debut/1.jpg",
      "/images/tbtn/debut/2.jpe",
      "/images/tbtn/debut/3.jpg",
      "/images/tbtn/debut/4.jpg",
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
          src="/images/tbtn/banner.jpe"
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
          {/*<p className="uppercase tracking-[0.25em] text-sky-300">
            ABOUT
          </p>*/}

          <h2 className="mt-4 text-3xl font-bold">
            Hành trình của <span className="text-sky-300"> lighT</span> 
          </h2>

          <div className="mt-8 space-y-6 leading-8 text-white/75">

            <p>
              <span className="text-sky-300"> Tân Binh Toàn Năng </span> là dấu mốc quan trọng trong hành trình nghệ thuật
              của <span className="text-sky-300"> Minh Tân </span>. Chương trình không chỉ là sân khấu để thể hiện khả năng
              ca hát và trình diễn, mà còn là nơi giúp <span className="text-sky-300"> Minh Tân </span> trưởng thành qua từng
              thử thách.
            </p>

            <p>
              Từ những ngày đầu tham gia casting, vượt qua các vòng tuyển chọn,
              trở thành Top 100 thực tập sinh và cuối cùng dừng chân tiếc nuối tại top 11. Sau chương trình <span className="text-sky-300"> Minh Tân </span> chính thức ra mắt truyền thông với nghệ danh
              <span className="text-sky-300"> lighT</span>, mỗi chặng đường đều
              ghi dấu sự nỗ lực không ngừng nghỉ.
            </p>

          </div>
        </section>

        {/* Timeline */}

        <section className="mt-24">

          <h2 className="text-3xl font-bold">
            Hành trình tại <span className="text-sky-300"> Tân Binh Toàn Năng </span>⭐
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
                Top 30
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
                Nghệ sĩ độc lập             <span className="text-sky-300    font-quote"> lighT </span>
 thuộc SYE Holdings
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

            {/*  <div className="flex justify-center">

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
              */}
            {item.video?.length > 0 && (

  <div className="mt-10 grid gap-8 justify-items-center">

    {item.video.map((video, index) => (

      <video
        key={index}
        controls
        playsInline
        preload="metadata"
        className="
          w-full
          sm:w-3/4
          lg:w-1/2
          xl:w-[45%]
          rounded-3xl
          border
          border-white/10
          shadow-xl
        "
      >
        <source src={video} type="video/mp4" />
      </video>

    ))}

  </div>

)}
              {/* Gallery */}

{item.gallery.length > 0 && (

  <>
    <div className="mt-16">
      <Gallery images={item.gallery} />
    </div>

    

  </>

)}

            </section>

          ))}

        </div>
<section
  className="
    mt-28
    rounded-[32px]
    border
    border-white/10
    bg-white/[0.04]
    p-10
    backdrop-blur-xl
    text-center
  "
>

  

<h2 className="mt-3 text-3xl font-bold">
Khám phá thêm về <span className="text-sky-300"> lighT</span>
</h2>

<p className="mx-auto mt-5 max-w-3xl leading-8 text-white/70">
  Khám phá thêm những video Focus Cam, Dance Compilation, Song Cover cùng các bài báo để nhìn lại những dấu ấn đáng nhớ và theo dõi hành trình phát triển của <span className="text-sky-300"> lighT</span>.
</p>

  <div className="mt-10 flex flex-wrap justify-center gap-5">

    <Link
      href="/videos/focus-cam"
      className="
        rounded-full
        border border-sky-300/20
        bg-white/[0.05]
        px-6 py-3
        transition
        hover:bg-sky-400/10
        hover:border-sky-300
      "
    >
      🎥 Focus Cam
    </Link>

    <Link
      href="/videos/dance-compilation"
      className="
        rounded-full
        border border-sky-300/20
        bg-white/[0.05]
        px-6 py-3
        transition
        hover:bg-sky-400/10
        hover:border-sky-300
      "
    >
      💃 Dance Compilation
    </Link>
<Link
      href="/videos/song-cover"
      className="
        rounded-full
        border border-sky-300/20
        bg-white/[0.05]
        px-6 py-3
        transition
        hover:bg-sky-400/10
        hover:border-sky-300
      "
    >
      🎶 Song Cover
    </Link>

   

    <Link
      href="/newspapers"
      className="
        rounded-full
        border border-sky-300/20
        bg-white/[0.05]
        px-6 py-3
        transition
        hover:bg-sky-400/10
        hover:border-sky-300
      "
    >
      📰 Newspaper
    </Link>

  </div>

</section>
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