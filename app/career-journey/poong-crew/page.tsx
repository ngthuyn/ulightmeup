import Link from "next/link";
import MediaEmbed from "@/components/MediaEmbed";

export default function PoongCrewPage() {
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
          POONG Crew
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-white/70">
          Thành viên Gen V
        </p>

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
              Minh Tân chính thức trở thành thành viên
              <span className="font-semibold text-sky-300"> Gen V của POONG Crew </span>
              sau khi vượt qua hai vòng casting vô cùng cạnh tranh.
            </p>

            <p>
              Hoạt động năng nổ cùng nhóm trong giai đoạn
              <span className="font-semibold text-white"> 2023 - 2025</span>,
              lighT liên tục góp mặt trong nhiều dự án đặc sắc, từ các sản phẩm
              dance cover chất lượng đến các dự án âm nhạc cùng
              L’Officiel Vietnam, rapper OSAD, ca sĩ Trúc Nhân...
            </p>

            <p>
              Đặc biệt, anh chàng còn có cơ hội đồng hành trong tiết mục biểu diễn
              của ca sĩ Hồ Ngọc Hà tại Đêm 1 Concert
              <span className="text-white">
                {" "}Anh Trai Vượt Ngàn Chông Gai 2024.
              </span>
            </p>

            <p>
              Trước khi bén duyên với Tân Binh Toàn Năng,
              POONG Crew chính là nơi giúp lighT tích lũy kinh nghiệm biểu diễn,
              rèn luyện kỹ năng và trưởng thành trên sân khấu.
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

        <section className="mt-24">

          <h2 className="mb-10 text-3xl font-bold">
            Dấu mốc
          </h2>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8">
            {/* 1 */}

            <div className="group">

              <img
                src="/images/poong/Casting-call.jpg"
                className="
                aspect-[3/4]
                w-full
                rounded-xl
                md:rounded-3xl
                object-cover
                transition
                duration-500
                group-hover:scale-105
              "
              />

              {/*<p className="mt-5 text-center text-lg">
                Thông báo tuyển thành viên
              </p>
            */}
            </div>

            {/* 2 */}

            <div className="group">

              <img
                src="/images/poong/Full-mail.jpg"
                alt=""
                className="
                  aspect-[3/4]
                  w-full
                  rounded-3xl
                  object-cover
                  transition
                  duration-500
                  group-hover:scale-105
                "
              />

              {/* <p className="mt-5 text-center text-lg">
                Thông báo vượt qua vòng 1
              </p>
              */}
            </div>

            {/* 3 */}

            <div className="group">

              <img
                src="/images/poong/Final-Announcement.jpg"
                alt=""
                className="
                  aspect-[3/4]
                  w-full
                  rounded-3xl
                  object-cover
                  transition
                  duration-500
                  group-hover:scale-105
                "
              />
              {/*
              <p className="mt-5 text-center text-lg">
                Thông báo trở thành thành viên Gen V
              </p>
              */}

            </div>

          </div>


          <div className="mt-10 flex justify-center">

            <p className="mt-5 text-center text-lg">
Thông báo trúng tuyển POONG Crew
              </p>
            
            </div>
          <div className="mt-10 flex justify-center">

            <a
              href="https://www.facebook.com/share/p/14g2wXxnYBA/"
              target="_blank"
              className="
                rounded-full
                border
                border-sky-300
                px-8
                py-3
                text-sky-300
                transition
                hover:bg-sky-300
                hover:text-black
              "
            >
              Xem thêm
            </a>

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
    </main>
  );
}