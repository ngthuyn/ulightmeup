"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ShowItAllPage() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
className="space-y-11"    >
\
      {/* ================= HERO ================= */}

<section className="mx-auto max-w-4xl">
    

      <h2 className="text-center text-3xl font-black leading-tight md:text-5xl">
          Hành trình từ một thí sinh tiềm năng đến nghệ sĩ trẻ đầy triển vọng của
          <span className="text-sky-300"> lighT (Đỗ Minh Tân)</span>
        </h2>
        <h2 className="text-center text-3xl font-black leading-tight md:text-5xl">
           Phần 2
        </h2>

      </section>

      {/* ================= COVER ================= */}


      {/* ================= INTRO ================= */}

      <section className="mx-auto max-w-4xl">

       

        <div className="mt-14 space-y-8 text-lg leading-9 text-white/85">

          <p>
            Từ một <span className="text-sky-300"> minhtin </span> luôn nỗ lực trau dồi qua từng công diễn đến một
            <span className="text-sky-300"> lighT </span> đầy hứa hẹn của SYE Holdings, cùng nhìn lại hành trình chinh
            phục trái tim khán giả và đón chờ những bứt phá tiếp theo của <span className="text-sky-300"> Minh Tân </span> nhé.
          </p>

        </div>

      </section>

      {/* ================= SECTION 1 ================= */}

      <section className="mx-auto max-w-4xl">

        <h2 className="mt-3 text-2xl font-black">
            Tham gia Tân Binh Toàn Năng Show It All
            <br />
            <span className="text-sky-300">Giai đoạn chính thức</span>
          </h2>

        <div className="mt-12 space-y-8 text-lg leading-9 text-white/85">

          <p>
            Sau 100 ngày đào tạo và sát hạch khắt khe, Minh Tân đã chính thức
            ghi danh vào Top 11 <span className="text-sky-300"> Tân Binh Thăng Cấp</span>. Lựa chọn nghệ danh
            <span className="text-sky-300"> minhtin</span>, <span className="text-sky-300"> Tân </span> bước vào giai đoạn chính thức của
            <span className="text-sky-300"> Tân Binh Toàn Năng</span>, cùng 10 thành viên còn lại cọ xát với các
            nhóm nhạc quốc tế để học hỏi kinh nghiệm và từng bước khẳng định bản
            lĩnh.
          </p>

          <p>
            Trong suốt chặng đường này, <span className="text-sky-300"> minhtin </span> tiếp tục thể hiện sự linh hoạt
            qua những sân khấu trình diễn đa dạng về phong cách, cho thấy tinh
            thần cầu tiến và nỗ lực làm mới mình. Không chỉ tập trung phát huy
            thế mạnh vũ đạo, <span className="text-sky-300"> minhtin </span> còn nghiêm túc rèn luyện kỹ thuật thanh
            nhạc. Điển hình là việc <span className="text-sky-300"> Minh Tân </span> đã dũng cảm thử thách bản thân với phần
            bè nốt cao trong ca khúc <span className="text-sky-300">Exposure</span> dưới sự hướng dẫn
            tỉ mỉ của mentor <span className="text-sky-300">SOOBIN</span>.
          </p>

        </div>

      </section>
            {/* ================= TAKE A SHOT ================= */}

      <section className="mx-auto max-w-4xl">

  <div className="grid grid-cols-2 gap-4">

  <div>
    <Image
      src="/images/Take a shot.jpg"
      alt="Take A Shot"
      width={1600}
      height={900}
      className="h-auto w-full object-cover"
    />

    <p className="mt-2 text-center text-sm italic text-white/55">
      Take A Shot
    </p>
  </div>

  <div>
    <Image
      src="/images/Guong vo.jpg"
      alt="Gương Vỡ"
      width={1600}
      height={900}
      className="h-auto w-full object-cover"
    />

    <p className="mt-2 text-center text-sm italic text-white/55">
      Gương Vỡ Làm Lành
    </p>
  </div>

</div>

        

      </section>

      {/* ================= ARTICLE CONTINUE ================= */}

      <section className="mx-auto max-w-4xl">

        <div className="space-y-8 text-lg leading-9 text-white/85">

          <p>
            Bên cạnh đó, qua các thước phim hậu trường ghi âm
            (<span className="text-sky-300">Recording Behind</span>), khán giả còn được nhìn thấy
            một <span className="text-sky-300">minhtin</span> đầy nhiệt huyết, luôn giữ thái độ tích
            cực và sẵn lòng san sẻ, hỗ trợ các đồng đội.
          </p>

          <p>
            Dù việc <span className="text-sky-300"> minhtin </span> phải dừng chân tại <span className="text-sky-300">Công diễn 3</span> đã
            để lại sự bàng hoàng và lấy đi không ít giọt nước mắt tiếc nuối
            nhưng hành trình nỗ lực bền bỉ ấy đã thực sự chạm đến trái tim khán
            giả. Chặng đường thi đấu khép lại và mở ra một không gian đọng lại
            vô vàn tình cảm yêu thương sâu sắc dành cho một người trẻ luôn làm
            nghề bằng tất cả sự chân thành.
          </p>

        </div>

      </section>

     

      {/* ================= FACEBOOK REEL ================= */}

      <section className="mx-auto max-w-4xl">


        <div>

          <iframe
            src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/4100026973593119"
           className="w-full h-[320px] sm:h-[620px] md:h-[700px]"
  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
  allowFullScreen
          />

        </div>

<p className="mt-2 text-center text-sm italic text-white/55">
Khoảnh khắc <span className="text-sky-300"> minhtin </span> trốn vào góc khóc nấc & bố <span className="text-sky-300"> SOOBIN </span> gục mặt trước kết quả đau lòng của công diễn 3 
        </p>

      </section>
            {/* ================= CONTINUE EXPLORING ================= */}

      <section className="mx-auto max-w-4xl">
  <div className="text-center">
    {/*
    <p className="uppercase tracking-[0.35em] text-sky-300">
      Continue Exploring
    </p>
    */}

    <h2 className="mt-4 text-2xl font-black">
      Khám phá thêm
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-white/60">
      SIA Highlights, SIA Behind the Scenes và Focus Cam & Recording Behind
    </p>
  </div>

  <div className="mt-16 grid grid-cols-3 gap-3 md:gap-6 lg:gap-8">

    {/* CARD 1 */}
    <Link
      href="/career-journey/tv-shows/sia_highlights"
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        border
        border-white/10
        bg-white/[0.03]
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-sky-300/40
      "
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src="/images/SIA_Highlight.jpg"
          alt="SIA Highlights"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex min-h-[80px] items-center justify-center p-3 md:min-h-[110px] md:p-5 lg:min-h-[130px] lg:p-8">
        <h3 className="text-center text-[11px] font-semibold leading-4 md:text-lg md:leading-6 lg:text-2xl lg:leading-tight">
          SIA Highlights
        </h3>
      </div>
    </Link>

    {/* CARD 2 */}
    <Link
      href="/career-journey/tv-shows/sia_behind"
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        border
        border-white/10
        bg-white/[0.03]
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-sky-300/40
      "
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src="/images/SIA_BTS.jpeg"
          alt="SIA Behind the Scenes"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex min-h-[80px] items-center justify-center p-3 md:min-h-[110px] md:p-5 lg:min-h-[130px] lg:p-8">
        <h3 className="text-center text-[11px] font-semibold leading-4 md:text-lg md:leading-6 lg:text-2xl lg:leading-tight">
          SIA Behind the Scenes
        </h3>
      </div>
    </Link>

    {/* CARD 3 */}
    <Link
      href="/career-journey/tv-shows/sia_focus-cam"
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        border
        border-white/10
        bg-white/[0.03]
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-sky-300/40
      "
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src="/images/SIA_Focus Cam.jpg"
          alt="Focus Cam & Recording Behind"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex min-h-[80px] items-center justify-center p-3 md:min-h-[110px] md:p-5 lg:min-h-[130px] lg:p-8">
        <h3 className="text-center text-[11px] font-semibold leading-4 md:text-lg md:leading-6 lg:text-2xl lg:leading-tight">
          Focus Cam &amp; Recording Behind
        </h3>
      </div>
    </Link>

  </div>
</section>
            {/* ================= INDEPENDENT ARTIST ================= */}

      <section className="mx-auto max-w-4xl">

        <h2 className="text-2xl font-black leading-tight">
          Nghệ sĩ độc lập lighT thuộc SYE Holdings
        </h2>

        <div className="mt-12 space-y-8 text-lg leading-9 text-white/85">

          <p>
            Dù cánh cửa tại <span className="text-sky-300">Show It All</span> đã khép lại với nhiều
            nuối tiếc nhưng chặng đường vừa qua là minh chứng rõ nét cho một
            ngọn lửa đam mê bền bỉ và sự trân trọng sân khấu tuyệt đối của
            <span className="text-sky-300"> minhtin</span>.
          </p>

          <p>
            Không để sự dang dở làm chùn bước, những trải nghiệm quý giá ấy đã
            trở thành hành trang để <span className="text-sky-300"> minhtin</span> vững vàng bước sang một chương mới.
            Bắt đầu hoạt động với tư cách nghệ sĩ độc lập dưới nghệ danh
            <span className="text-sky-300"> lighT</span>, con đường phía trước có thể sẽ còn nhiều
            thử thách.
          </p>

          <p>
            Thế nhưng với thái độ làm nghề nghiêm túc, tinh thần không ngừng học
            hỏi và một trái tim luôn hướng về khán giả, <span className="text-sky-300"> lighT</span> chắc chắn là một
            người nghệ sĩ xứng đáng để chúng ta đặt niềm tin và dõi theo bước
            chân.
          </p>

        </div>

      </section>

      {/* ================= GALLERY ================= */}

      <section className="mx-auto max-w-4xl">

<div className="grid grid-cols-2 gap-3 md:gap-6">
          <div className="overflow-hidden rounded-[28px] border border-white/10">
            <Image
              src="/images/tbtn/debut/1.jpg"
              alt="Show It All"
              width={1200}
              height={800}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div className="overflow-hidden rounded-[28px] border border-white/10">
            <Image
              src="/images/tbtn/debut/2.jpe"
              alt="Show It All"
              width={1200}
              height={800}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div className="overflow-hidden rounded-[28px] border border-white/10">
            <Image
              src="/images/tbtn/debut/3.jpg"
              alt="Show It All"
              width={1200}
              height={800}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div className="overflow-hidden rounded-[28px] border border-white/10">
            <Image
              src="/images/tbtn/debut/4.jpg"
              alt="Independent Artist Press Conference"
              width={1200}
              height={800}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

        </div>

      

      </section>

      {/* ================= ENDING ================= */}
      <section className="mx-auto max-w-4xl">
  <div
    className="
      rounded-3xl
      md:rounded-[32px]
      border
      border-sky-400/20
      bg-sky-400/5
      p-6
      sm:p-8
      md:p-10
      text-center
    "
  >
    <h2 className="text-2xl font-black leading-tight md:text-3xl">
      Một chương khép lại, một hành trình mới bắt đầu.
    </h2>

    <p
      className="
        mx-auto
        mt-6
        max-w-3xl
        text-base
        leading-8
        text-white/80
        sm:text-lg
        sm:leading-9
      "
    >
      Cùng chờ đón những sự chuyển mình đầy hứa hẹn tiếp theo từ
      <span className="font-semibold text-sky-300">
        {" "}lighT (Đỗ Minh Tân)
      </span>
      , và hãy tiếp tục đồng hành trên hành trình chinh phục những sân khấu
      mới trong tương lai.
    </p>
  </div>
</section>
        </motion.article>

  );
}