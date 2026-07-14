"use client";

import { useState } from "react";
export default function FactCheckPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const facts = [
        {
  id: "01",
  title: "Bật mí profile học vấn và những fact thú vị",
  image: "/images/facts/fact01_7.jpg",
  href: "https://facebook.com/...",
 

  intro: (
    <>
      <h3 className="text-xl font-bold text-sky-300">
        📝 [TMI] lighT FACT CHECK: Bật mí profile học vấn và những fact thú vị
      </h3>

      <p className="mt-5">
        Flex nhanh một vài fact về học vấn của nghệ sĩ nhà mình. Đọc xong những
        thông tin dưới đây, chắc hẳn các tine sẽ hiểu vì sao lighT luôn giữ được
        nguồn năng lượng tích cực, khả năng dẫn dắt khá ổn định cùng tư duy thẩm
        mỹ rõ nét trong công việc.
      </p>

      <h4 className="mt-8 font-bold text-lg text-sky-200">
        🎓 Học vấn
      </h4>

      <p className="mt-2">
        Sinh viên ngành <b>Truyền thông Đa phương tiện (Multimedia Communication)</b>
        {" "}– Khoa Quan hệ Công chúng – Truyền thông, trường Đại học Văn Lang (VLU).
      </p>

      <h4 className="mt-8 font-bold text-lg text-sky-200">
        🏆 Thành tích hoạt động nổi bật
      </h4>

      <ul className="mt-3 space-y-4 list-disc pl-5">
        <li>
          <b>Gương mặt Thủ lĩnh trẻ:</b> Thời cấp 3, lighT từng đảm nhận vai trò
          Bí thư Đoàn trường năng nổ và được tuyên dương danh hiệu
          "Gương mặt Thủ lĩnh trẻ TP.HCM năm 2022".
        </li>

        <li>
          <b>Quán quân MC:</b> Năm lớp 11, lighT xuất sắc đạt giải Quán quân Hội thi
          "Tìm kiếm gương mặt Người dẫn chương trình" năm học 2020–2021.
        </li>
      </ul>

      <h4 className="mt-8 font-bold text-lg text-sky-200">
        🎨 Thay đổi định hướng
      </h4>

      <p className="mt-2">
        lighT từng dành thời gian học vẽ trang trí màu để chuẩn bị thi vào ngành
        Thiết kế Đồ hoạ. Tuy nhiên, vì một số lý do không thể tham gia kỳ thi
        năng khiếu, Tin đã chuyển hướng sang ngành Multimedia Communication.
        Dù vậy, nền tảng hội họa này đã giúp lighT giữ được gu thẩm mỹ rất riêng.
      </p>

      <h4 className="mt-8 font-bold text-lg text-sky-200">
        📚 Sở trường các môn học
      </h4>

      <ul className="mt-3 space-y-3 list-disc pl-5">
        <li>Lớp 8–9: Từng theo học chuyên Hóa.</li>
        <li>Môn Toán: Có thế mạnh và học tốt Toán Hình học hơn Đại số.</li>
        <li>Cấp 3: Học tốt môn Lịch sử.</li>
      </ul>

      <p className="mt-6">
        Chưa hết đâu nha, nếu từng xem livestream hồi tháng 3/2025, chắc hẳn mọi
        người còn nhớ khoảnh khắc lighT thử sức giải lại đề thi các môn thế mạnh
        và dễ dàng đúng hết tất cả các câu. Có thể thấy, Tin sở hữu một profile
        học tập với sự giao thoa rất thú vị giữa <b>Tư duy logic</b>,
        <b> Kiến thức xã hội</b> và <b>Năng khiếu nghệ thuật</b>. Trong số những
        môn này, các tinie có thấy mình giống với lighT ở môn nào không? 😉
      </p>
      <p>
        Cùng nhìn lại một số khoảnh khắc đáng nhớ này nhé 👇!
      </p>
      </>

  ),

       images: [
    "/images/facts/fact01_1.JPG",
    "/images/facts/fact01_2.JPG",
    "/images/facts/fact01_3.JPG",
    "/images/facts/fact01_4.JPG",
    "/images/facts/fact01_5.jpg",
    "/images/facts/fact01_6.jpg",
    "/images/facts/fact01_7.jpg",
  ],
  outro: (
    <>
      <p className="mt-6">
        Tham gia ngay group {" "}
        <a href="https://zalo.me/g/hkjrlj645"  
        target="_blank"
          className="font-semibold text-sky-300 underline hover:text-sky-200">
        Nhà văn hoá tinie </a> 
          
        và follow {" "}

        <a href="https://www.facebook.com/profile.php?id=61582766494305"  
        target="_blank"
          className="font-semibold text-sky-300 underline hover:text-sky-200">
        TINcredible </a> 
         
        để cùng xem thêm các fun fact khác về lighT nhé!
      </p>

      <p className="mt-8">
        👉 Đừng quên follow trang chính thức của lighT tại {" "}
        <a
          href="https://www.facebook.com/lighT.sye"
          target="_blank"
          className="font-semibold text-sky-300 underline hover:text-sky-200"
        >
          LighT LighT
        </a>{" "}
        để cập nhật những hoạt động mới nhất.
      </p>
    </>
  ),
},
    {
  id: "02",
  title: "Những mảnh ghép ấm áp về gia đình",
  image: "/images/facts/fact02_1.PNG",
  href: "https://facebook.com/...",

  intro: (
    <>
      <h3 className="text-xl font-bold text-sky-300">
        📝 [TMI] lighT FACT CHECK: Những mảnh ghép ấm áp về gia đình
      </h3>

      <p className="mt-5">
        Đằng sau một lighT luôn cháy hết mình trên sân khấu hay qua các dự án
        nghệ thuật là một cậu con trai út vô cùng tình cảm. Cùng điểm qua
        những "fact" nhỏ nhưng cực kỳ đáng yêu về gia đình của cậu bạn nhé.
      </p>

      <h4 className="mt-8 text-lg font-bold text-sky-200">
        👨‍👩‍👦‍👦 Cậu út trong gia đình 4 người
      </h4>

      <p className="mt-2">
        Gia đình nhỏ của lighT có 4 thành viên gồm ba mẹ, anh hai và lighT là em út.
      </p>

      <h4 className="mt-8 text-lg font-bold text-sky-200">
        🌍 Thừa hưởng dòng máu lai Pháp
      </h4>

      <p className="mt-2">
        Một chi tiết khá đặc biệt là lighT mang trong mình nét lai Pháp.
        Điểm thú vị này được thừa hưởng từ nhà ngoại của Tin lai Pháp - Việt Nam.
      </p>

      <h4 className="mt-8 text-lg font-bold text-sky-200">
        🍳 Biết nấu ăn từ thời tiểu học
      </h4>

      <p className="mt-2">
        Từ khi mới học cấp 1, Tin đã biết vào bếp.
        Kỹ năng nấu nướng được học từ ba, kết hợp với những ngày tháng chăm chú
        quan sát mẹ nấu ăn.
      </p>
     <h4 className="mt-8 text-lg font-bold text-sky-200">
        🤫 Bí mật mang tên Tân Binh Toàn Năng
      </h4>

      <p className="mt-2">
        Thời điểm quyết định tham gia chương trình Tân Binh Toàn Năng,
        lighT đã tự mình đăng ký và đi thi mà không cho gia đình biết.
      </p>
        
      <h4 className="mt-8 text-lg font-bold text-sky-200">
        🎁 Món quà từ tháng lương đầu tiên
      </h4>

      <p className="mt-2">
        Ngay từ khi nhận được khoản tiền lương đầu tiên nhờ công việc làm dancer,
        lighT đã dùng số tiền đó để mua một chiếc máy massage tặng ba mẹ.
      </p>

      <p className="mt-6">
        Những chi tiết giản dị này cho thấy một góc nhìn rất khác về lighT –
        không chỉ là một người trẻ cầu tiến mà còn là một cậu út rất ấm áp,
        tự lập và luôn hướng về gia đình.
      </p>

      <p className="mt-6">
        Cùng nhìn lại một số khoảnh khắc về gia đình của lighT nhé 👇
      </p>
    </>
  ),

  images: [
    "/images/facts/fact02_1.PNG",
    "/images/facts/fact02_2.PNG",
    "/images/facts/fact02_3.jpg",

  ],
   
  video: "/videos/facts/fact02.mp4",


  outro: (
    <>
  
      <p className="mt-6">
        Tham gia ngay group{" "}
        <a
          href="https://zalo.me/g/hkjrlj645"
          target="_blank"
          className="font-semibold text-sky-300 underline"
        >
          Nhà văn hoá tinie
        </a>{" "}
        và follow{" "}
        <a
          href="https://www.facebook.com/profile.php?id=61582766494305"
          target="_blank"
          className="font-semibold text-sky-300 underline"
        >
          TINcredible
        </a>{" "}
        để cùng xem thêm các fun fact khác nhé!
      </p>

      <p className="mt-8">
        👉 Đừng quên follow{" "}
        <a
          href="https://www.facebook.com/lighT.sye"
          target="_blank"
          className="font-semibold text-sky-300 underline"
        >
          LighT LighT
        </a>
        .
      </p>
    </>
  ),
},
  {
  id: "03",
  title: "lighT đã từng sở hữu những cái tên nào?",
  image: "/images/facts/fact03_1.jpe",
  href: "https://facebook.com/...",

  intro: (
    <>
      <h3 className="text-xl font-bold text-sky-300">
        📝 FACT CHECK: lighT đã từng sở hữu những cái tên nào nhỉ?
      </h3>

      <p className="mt-5">
        Mỗi cái tên đều đánh dấu một cột mốc trưởng thành trong hành trình
        theo đuổi nghệ thuật của lighT. Các tinie cùng điểm lại xem mình đã
        biết đến Tin từ giai đoạn nào nhé.
      </p>

      <h4 className="mt-8 text-lg font-bold text-sky-200">
        🌟 Đỗ Minh Tân / Tin
      </h4>

      <p className="mt-2">
        Khởi đầu từ cái tên khai sinh Đỗ Minh Tân, một em Tin ngoan ngoãn,
        tình cảm và tự lập trong vòng tay gia đình.
      </p>

      <h4 className="mt-8 text-lg font-bold text-sky-200">
        🌟 minhtin
      </h4>

      <p className="mt-2">
        Hành trình tại Tân Binh Toàn Năng đã đưa Tin đến gần hơn với khán giả
        qua cái tên <b>minhtin</b>, đánh dấu giai đoạn học hỏi và trưởng thành.
      </p>
     <h4 className="mt-8 text-lg font-bold text-sky-200">
        🌟 lighT
      </h4>

      <p className="mt-2">
        Sau những trải nghiệm và thăng trầm, một nghệ sĩ độc lập đang từng bước
        toả sáng dưới ánh đèn sân khấu với nghệ danh <b>lighT</b>.
      </p>

      <h4 className="mt-8 text-lg font-bold text-sky-200">
        💡 Fun fact
      </h4>

      <p className="mt-2">
        Trước khi được biết đến rộng rãi, lighT năm 18 tuổi từng hoạt động
        trong các nhóm nhảy cover KPOP với nghệ danh <b>KuL</b> hoặc <b>Ryan</b>.
      </p>

      <p className="mt-6">
        💬 Trong suốt hành trình trưởng thành này, các tinie có kỷ niệm đặc biệt
        nào với những cái tên của lighT không?
      </p>
      <p className="mt-6">
        Cùng nhìn lại từng giai đoạn nhé 👇
      </p>
    </>
  ),

  images: [
    "/images/facts/fact03_1.jpe",
    "/images/facts/fact03_2.jpe",
    "/images/facts/fact03_3.jpe",
    "/images/facts/fact03_4.jpg",
    "/images/facts/fact03_5.jpe",
    "/images/facts/fact03_6.jpe",

  ],

  outro: (
    <>
      

      <p className="mt-6">
        Tham gia ngay group{" "}
        <a
          href="https://zalo.me/g/hkjrlj645"
          target="_blank"
          className="font-semibold text-sky-300 underline"
        >
          Nhà văn hoá tinie
        </a>{" "}
        và follow{" "}
        <a
          href="https://www.facebook.com/profile.php?id=61582766494305"
          target="_blank"
          className="font-semibold text-sky-300 underline"
        >
          TINcredible
        </a>{" "}
        để cùng xem thêm các fun fact khác nhé!
      </p>

      <p className="mt-8">
        👉 Đừng quên follow{" "}
        <a
          href="https://www.facebook.com/lighT.sye"
          target="_blank"
          className="font-semibold text-sky-300 underline"
        >
          LighT LighT
        </a>
        .
      </p>
    </>
  ),
},
   
 
  ]as const;
const [selectedFact, setSelectedFact] = useState<
  (typeof facts)[number] | null
>(null);
const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: "url('/videos/bg.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-20 mx-auto max-w-7xl px-6 pt-24 pb-16">

        <h1
          className="mb-12 text-center text-3xl font-bold text-white md:text-5xl"
          style={{
            textShadow: "0 0 12px rgba(255,255,255,.45)",
          }}
        >
          lighT's FACT CHECK
        </h1>

<div className="grid grid-cols-2 gap-4 md:grid-cols-2 xl:grid-cols-3">        
          {facts.map((fact) => (
            <button
  key={fact.id}
  onClick={() => setSelectedFact(fact)}
  className="
  
    overflow-hidden
    rounded-3xl
    border border-white/10
    bg-black/15
    backdrop-blur-xl
    transition
    duration-300
    hover:-translate-y-2
    hover:border-sky-300/30
    hover:shadow-[0_0_40px_rgba(96,165,250,.25)]
    text-left
  "
>
              <img
                src={fact.image}
                className="aspect-[4/5] w-full object-cover"
              />

              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-sky-200">
                  EP {fact.id}
                </p>

                <h2 className="mt-2 text-sm font-semibold text-white">
                  {fact.title}
                </h2>
              {/*
                <p className="mt-2 text-sm leading-6 text-white/70">
                  {fact.content}
                </p>
                */}
              </div>
            </button>
          ))}
        </div>

      </div>
      {selectedFact && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
   <div
  className="
    popup-scroll
    relative
    mt-25
    w-[92%]
    max-w-3xl
    max-h-[calc(100vh-6rem)]
    max-h-[90vh]
    overflow-y-auto
    pr-4
    rounded-3xl
    border border-white/10
    bg-[#111]/90
    p-8
    text-white
  "
>
      {/* Close */}
      <button
        onClick={() => setSelectedFact(null)}
        className="absolute right-5 top-5 text-2xl text-white/60 hover:text-white"
      >
        ✕
      </button>

      <img
        src={selectedFact.image}
        className="mb-5 h-full w-full rounded-2xl object-cover"
      />

      <p className="text-xs uppercase tracking-[0.3em] text-sky-300">
        EP {selectedFact.id}
      </p>

      <h2 className="mt-2 text-2xl font-bold">
        {selectedFact.title}
      </h2>

   <div className="mt-5 space-y-4 leading-8 text-white/80">
{"intro" in selectedFact && selectedFact.intro}

{"video" in selectedFact && selectedFact.video && (
  <div className="my-8 overflow-hidden rounded-2xl border border-white/10">
    <video
      src={selectedFact.video}
      controls
      playsInline
      preload="metadata"
      className="w-full"
    />
  </div>
)}

{"images" in selectedFact && selectedFact.images && (
  <div className="my-8 grid grid-cols-2 gap-3 md:grid-cols-3">
    
    {selectedFact.images.map((img, index) => (
      <img
        key={index}
        src={img}
        onClick={() => setSelectedImage(img)}
        className="
          aspect-square
          w-full
          cursor-pointer
          rounded-2xl
          object-cover
          border
          border-white/10
          transition
          duration-300
          hover:scale-[1.02]
          hover:border-sky-300/50
        "
      />
    ))}
  </div>
)}

{"outro" in selectedFact && selectedFact.outro}
</div>
      <div className="mt-8 flex justify-end gap-3">
        <button
          onClick={() => setSelectedFact(null)}
          className="rounded-full border border-white/10 px-5 py-2 hover:bg-white/10"
        >
          Close
        </button>
   {/*
        <a
          href={selectedFact.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-sky-500 px-5 py-2 font-medium transition hover:bg-sky-400"
        >
          Read more →
        </a>
        */}
      </div>
    </div>
  </div>
)}
{selectedImage && (
  <div
    className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/80 backdrop-blur-md"
    onClick={() => setSelectedImage(null)}
  >
    <div
      className="relative"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => setSelectedImage(null)}
        className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-2xl text-white"
      >
        ✕
      </button>

      <img
        src={selectedImage}
        className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain"
      />
    </div>
  </div>
)}
    </main>
  );
}