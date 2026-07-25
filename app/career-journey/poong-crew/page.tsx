"use client";
import Link from "next/link";
import MediaEmbed from "@/components/MediaEmbed";
import { useState } from "react";
export default function PoongCrewPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const gallery = [
  "/images/poong/Casting-call.jpg",
  "/images/poong/Full-mail.jpg",
  "/images/poong/Final-Announcement.jpg",
];
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

      

        <h1 className="mt-3 text-center text-3xl font-black">
          POONG Crew
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-white/70">
Dancer        </p>

        {/* Hành trình gia nhập */}

        <section
          className="
            mt-20
            rounded-[32px]
            border border-white/10
            bg-white/[0.05]
            p-8
            backdrop-blur-xl
          "
        >
          <p className="uppercase tracking-[0.2em] text-sky-300">
            HÀNH TRÌNH GIA NHẬP
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Thành viên chính thức Gen V
          </h2>

          <div className="mt-8 space-y-6 text-sm leading-9 text-white/75">

            <p>
              Vào ngày <span className="font-semibold text-white">01/12/2022</span>,
                           <span className="text-sky-300">
 {""} Minh Tân
 </span> chính thức trở thành thành viên Gen V của
              <span className="font-semibold text-sky-300">  POONG Crew </span>
              sau khi vượt qua hai vòng tuyển chọn khốc liệt.

            </p>

            <p>
             Trong giai đoạn
              <span className="font-semibold text-white"> 2023 - 2025</span>,
                   <span className="text-sky-300">
 {" "}lighT </span> đã hoạt động vô cùng năng nổ và liên tục góp mặt trong nhiều dự án nghệ thuật đặc sắc. Không chỉ khẳng định tài năng qua các sản phẩm dance cover ấn tượng, lighT còn cùng nhóm tham gia nhiều dự án âm nhạc chất lượng cao cùng L'Officiel Vietnam, rapper OSAD và ca sĩ Trúc Nhân dưới vai trò vũ công phụ họa…

            </p>

            <p>
              Đặc biệt, anh chàng còn có cơ hội hỗ trợ biểu diễn cho ca sĩ Hồ Ngọc Hà tại Đêm 1 
              <span className="font-semibold text-sky-300">
                {" "} Concert Anh Trai Vượt Ngàn Chông Gai 2024.
              </span>
            </p>

            <p>
             Có thể nói,               <span className="font-semibold text-sky-300">  POONG Crew </span>
 chính là nơi giúp   <span className="text-sky-300">
 {" "}lighT </span> rèn luyện kỹ năng trình diễn và bản lĩnh làm chủ sân khấu trước khi thử sức tại chương trình <span className="font-semibold text-sky-300">
                {" "}Tân Binh Toàn Năng 2025. 
              </span>
            </p>

          </div>
        </section>

        {/* Timeline */}

        <section className="mt-24">

          <h2 className="text-3xl font-bold">
            Hành trình
          </h2>

          <div className="mt-10 border-l border-sky-400/40 pl-8 space-y-10">

            <div>
              <p className="font-semibold text-sky-300">
                11/2022
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Thông báo tuyển thành viên
              </h3>
            </div>

            <div>
              <p className="font-semibold text-sky-300">
                11/2022
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Vượt qua vòng 1
              </h3>
            </div>

            <div>
              <p className="font-semibold text-sky-300">
                01/12/2022
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Chính thức trở thành thành viên Gen V
              </h3>
            </div>

          </div>

        </section>

        {/* Gallery */}

        <section className="mt-20">

          

          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8">
  {gallery.map((image) => (
    <button
      key={image}
      onClick={() => setSelectedImage(image)}
      className="group overflow-hidden rounded-3xl"
    >
      <img
        src={image}
        className="
          aspect-[3/4]
          w-full
          object-cover
          transition
          duration-500
          group-hover:scale-105
        "
      />
    </button>
  ))}
</div>


          <div className="mt-4 text-center">

  <p className="text-base md:text-lg">
    Thông báo trúng tuyển POONG Crew
  </p>
{/*
  <a
    href="https://www.facebook.com/share/p/14g2wXxnYBA/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      mt-1
      inline-block
      text-sm
      text-sky-300
      underline
      underline-offset-4
      transition
      hover:text-sky-200
    "
  >
    Xem thêm
  </a>
*/}
</div>

        </section>
{/* Facebook Video */}

<section className="mt-16">

  <h2 className="mb-15 text-3xl font-bold text-center">
  "Niềm tự hào của POONG"  </h2>

  <div className="flex justify-center">

    <MediaEmbed
      platform="facebook"
      url="https://www.facebook.com/watch/?v=1282673076616194"
    />

  </div>

</section>
        {/* Activities */}

        <section className="-mt-75">

          <h2 className="mb-5 text-4xl font-bold">
            Hoạt động
          </h2>

          <Link
            href="/career-journey/poong-crew/activities"
            className="
              group
              block
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.05]
              backdrop-blur-xl
              transition
              hover:border-sky-300/40
              hover:bg-white/[0.08]
            "
          >

           <div className="relative overflow-hidden rounded-[32px]">

  <img
    src="/images/poong/activities-banner.jpg"
    alt=""
    className="
      aspect-[6/5]
      w-full
      object-cover
      transition
      duration-500
      group-hover:scale-105
    "
  />

  {/* overlay tối nhẹ */}
  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />

  {/* nút Khám phá */}
  <div className="absolute bottom-6 right-6">

    <span
      className="
        rounded-full
        border
        border-sky-300
        bg-black/40
        backdrop-blur-md
        px-6
        py-2
        text-sky-300
        font-semibold
        transition
        group-hover:bg-sky-300
        group-hover:text-black
      "
    >
      Khám phá →
    </span>

  </div>

</div>


             {/* <h3 className="text-4xl font-bold">
                Hoạt động
              </h3>

              <p className="mt-3 text-white/60">
                Dance Cover • Performance
              </p>
              */}

              

            

          </Link>

        </section>

      </section>
      {selectedImage && (
  <div
    onClick={() => setSelectedImage(null)}
    className="
      fixed
      inset-0
      z-[9999]
      flex
      items-center
      justify-center
      bg-black/80
      backdrop-blur-sm
      p-6
    "
  >
    <img
      src={selectedImage}
      alt=""
      onClick={(e) => e.stopPropagation()}
      className="
        max-h-[90vh]
        max-w-[90vw]
        rounded-2xl
        shadow-2xl
      "
    />

    <button
      onClick={() => setSelectedImage(null)}
      className="
        absolute
        top-6
        right-6
        text-4xl
        text-white
        hover:text-sky-300
        transition
      "
    >
      ×
    </button>
  </div>
)}
    </main>
  );
}