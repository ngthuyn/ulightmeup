"use client";

import { useState } from "react";
export default function FactCheckPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const facts = [
        {
  id: "01",
  title: "Bật mí profile học vấn và những fact thú vị",
  image: "/images/facts/fact01_7.jpg",
  href: "",
 

 intro: (
  <>
    <h3 className="text-xl font-bold text-sky-300">
      📝 
      <span className="font-semibold text-sky-300">lighT</span> FACT CHECK:
      Bật mí profile học vấn và những fact thú vị
    </h3>

    <p className="mt-5">
      Flex nhanh một vài fact về học vấn của nghệ sĩ nhà mình. Đọc xong những
      thông tin dưới đây, chắc hẳn các tinie sẽ hiểu vì sao{" "}
      <span className="font-semibold text-sky-300">lighT</span> luôn giữ được
      nguồn năng lượng tích cực, khả năng dẫn dắt khá ổn định cùng tư duy thẩm
      mỹ rõ nét trong công việc.
    </p>

    <h4 className="mt-8 text-lg font-bold text-sky-200">
      🎓 Học vấn
    </h4>

    <p className="mt-2">
      Sinh viên ngành{" "}
      <span className="font-semibold text-sky-300">
        Truyền thông Đa phương tiện (Multimedia Communication)
      </span>{" "}
      – Khoa Quan hệ Công chúng – Truyền thông,{" "}
      <span className="font-semibold text-sky-300">
        Đại học Văn Lang (VLU)
      </span>
      .
    </p>

    <h4 className="mt-8 text-lg font-bold text-sky-200">
      🏆 Thành tích hoạt động nổi bật
    </h4>

    <ul className="mt-3 list-disc space-y-4 pl-5">
      <li>
        <b>Gương mặt Thủ lĩnh trẻ:</b>{" "}
        <span className="font-semibold text-sky-300">lighT</span> từng đảm nhận
        vai trò Bí thư Đoàn trường và được tuyên dương danh hiệu{" "}
        <span className="font-semibold text-sky-300">
          "Gương mặt Thủ lĩnh trẻ TP.HCM năm 2022"
        </span>
        .
      </li>

      <li>
        <b>Quán quân MC:</b> Năm lớp 11,{" "}
        <span className="font-semibold text-sky-300">lighT</span> xuất sắc đạt
        giải Quán quân Hội thi{" "}
        <span className="font-semibold text-sky-300">
          "Tìm kiếm gương mặt Người dẫn chương trình"
        </span>{" "}
        năm học 2020–2021.
      </li>
    </ul>

    <h4 className="mt-8 text-lg font-bold text-sky-200">
      🎨 Thay đổi định hướng
    </h4>

    <p className="mt-2">
      <span className="font-semibold text-sky-300">lighT</span> từng dành thời
      gian học vẽ trang trí màu để chuẩn bị thi vào ngành{" "}
      <span className="font-semibold text-sky-300">
        Thiết kế Đồ họa
      </span>
      . Tuy nhiên, vì một số lý do không thể tham gia kỳ thi năng khiếu,{" "}
      <span className="font-semibold text-sky-300">Tin</span> đã chuyển hướng
      sang ngành{" "}
      <span className="font-semibold text-sky-300">
        Multimedia Communication
      </span>
      . Dù vậy, nền tảng hội họa này đã giúp{" "}
      <span className="font-semibold text-sky-300">lighT</span> giữ được gu
      thẩm mỹ rất riêng.
    </p>

    <h4 className="mt-8 text-lg font-bold text-sky-200">
      📚 Sở trường các môn học
    </h4>

    <ul className="mt-3 list-disc space-y-3 pl-5">
      <li>Lớp 8–9: Từng theo học chuyên Hóa.</li>
      <li>Môn Toán: Có thế mạnh và học tốt Toán Hình học hơn Đại số.</li>
      <li>Cấp 3: Học tốt môn Lịch sử.</li>
    </ul>

    <p className="mt-6">
      Chưa hết đâu nha, nếu từng xem livestream hồi tháng 3/2025, chắc hẳn mọi
      người còn nhớ khoảnh khắc{" "}
      <span className="font-semibold text-sky-300">lighT</span> thử sức giải
      lại đề thi các môn thế mạnh và dễ dàng đúng hết tất cả các câu. Có thể
      thấy, <span className="font-semibold text-sky-300">Tin</span> sở hữu một
      profile học tập với sự giao thoa rất thú vị giữa <b>Tư duy logic</b>,{" "}
      <b>Kiến thức xã hội</b> và <b>Năng khiếu nghệ thuật</b>. Trong số những
      môn này, các tinie có thấy mình giống với{" "}
      <span className="font-semibold text-sky-300">lighT</span> ở môn nào
      không? 😉
    </p>

    <p>Cùng nhìn lại một số khoảnh khắc đáng nhớ này nhé 👇!</p>
  </>
),

       images: [
    "/images/facts/fact01_1.JPG",
    "/images/facts/fact01_2.JPG",
    "/images/facts/fact01_3.JPG",
    "/images/facts/fact01_4.JPG",
    "/images/facts/fact01_5.jpg",
    "/images/facts/fact01_6.jpg",
        "/images/facts/fact01_8.jpg",
    "/images/IMG_8224.JPG",
    "/images/facts/fact01_7.jpg",
  ],
  outro: (
  <>
    <p className="mt-6">
      Tham gia ngay group{" "}
      <a
        href="https://zalo.me/g/hkjrlj645"
        target="_blank"
        className="font-semibold text-sky-300 underline hover:text-sky-200"
      >
        Nhà văn hoá tinie
      </a>{" "}
      và follow{" "}
      <a
        href="https://www.facebook.com/profile.php?id=61582766494305"
        target="_blank"
        className="font-semibold text-sky-300 underline hover:text-sky-200"
      >
        TINcredible
      </a>{" "}
      để cùng xem thêm các fun fact khác về{" "}
      <span className="font-semibold text-sky-300">lighT</span> nhé!
    </p>

    <p className="mt-8">
      👉 Đừng quên follow trang chính thức của{" "}
      <span className="font-semibold text-sky-300">lighT</span> tại{" "}
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
  href: "",

  intro: (
  <>
    <h3 className="text-xl font-bold text-sky-300">
      📝 
      <span className="font-semibold text-sky-300">lighT</span> FACT CHECK:
      Những mảnh ghép ấm áp về gia đình
    </h3>

    <p className="mt-5">
      Đằng sau một{" "}
      <span className="font-semibold text-sky-300">lighT</span> luôn cháy hết
      mình trên sân khấu hay qua các dự án nghệ thuật là một cậu con trai út vô
      cùng tình cảm. Cùng điểm qua những "fact" nhỏ nhưng cực kỳ đáng yêu về
      gia đình của cậu bạn nhé.
    </p>

    <h4 className="mt-8 text-lg font-bold text-sky-200">
      👨‍👩‍👦‍👦 Cậu út trong gia đình 4 người
    </h4>

    <p className="mt-2">
      Gia đình nhỏ của{" "}
      <span className="font-semibold text-sky-300">lighT</span> có 4 thành viên
      gồm ba mẹ, anh hai và{" "}
      <span className="font-semibold text-sky-300">lighT</span> là em út.
    </p>

    <h4 className="mt-8 text-lg font-bold text-sky-200">
      🌍 Thừa hưởng dòng máu lai Pháp
    </h4>

    <p className="mt-2">
      Một chi tiết khá đặc biệt là{" "}
      <span className="font-semibold text-sky-300">lighT</span> mang trong mình
      nét lai Pháp. Điểm thú vị này được thừa hưởng từ nhà ngoại của{" "}
      <span className="font-semibold text-sky-300">Tin</span> lai Pháp - Việt
      Nam.
    </p>

    <h4 className="mt-8 text-lg font-bold text-sky-200">
      🍳 Biết nấu ăn từ thời tiểu học
    </h4>

    <p className="mt-2">
      Từ khi mới học cấp 1,{" "}
      <span className="font-semibold text-sky-300">Tin</span> đã biết vào bếp.
      Kỹ năng nấu nướng được học từ ba, kết hợp với những ngày tháng chăm chú
      quan sát mẹ nấu ăn.
    </p>

    <h4 className="mt-8 text-lg font-bold text-sky-200">
      🤫 Bí mật mang tên Tân Binh Toàn Năng
    </h4>

    <p className="mt-2">
      Thời điểm quyết định tham gia chương trình{" "}
      <span className="font-semibold text-sky-300">
        Tân Binh Toàn Năng
      </span>
      , <span className="font-semibold text-sky-300">lighT</span> đã tự mình
      đăng ký và đi thi mà không cho gia đình biết.
    </p>

    <h4 className="mt-8 text-lg font-bold text-sky-200">
      🎁 Món quà từ tháng lương đầu tiên
    </h4>

    <p className="mt-2">
      Ngay từ khi nhận được khoản tiền lương đầu tiên nhờ công việc làm dancer,{" "}
      <span className="font-semibold text-sky-300">lighT</span> đã dùng số tiền
      đó để mua một chiếc máy massage tặng ba mẹ.
    </p>

    <p className="mt-6">
      Những chi tiết giản dị này cho thấy một góc nhìn rất khác về{" "}
      <span className="font-semibold text-sky-300">lighT</span> – không chỉ là
      một người trẻ cầu tiến mà còn là một cậu út rất ấm áp, tự lập và luôn
      hướng về gia đình.
    </p>

    <p className="mt-6">
      Cùng nhìn lại một số khoảnh khắc về gia đình của{" "}
      <span className="font-semibold text-sky-300">lighT</span> nhé 👇
    </p>
  </>
),

  images: [
    "/images/facts/fact02_1.PNG",
    "/images/facts/fact02_2.PNG",
    "/images/facts/fact02_3.jpg",
    "/images/tinbe_1.jpg",
    "/images/tinbe_2.jpg",

  ],
   
  video: "/videos/facts/fact02.mp4",


 outro: (
  <>
    <p className="mt-6">
      Tham gia ngay group{" "}
      <a
        href="https://zalo.me/g/hkjrlj645"
        target="_blank"
        className="font-semibold text-sky-300 underline hover:text-sky-200"
      >
        Nhà văn hoá tinie
      </a>{" "}
      và follow{" "}
      <a
        href="https://www.facebook.com/profile.php?id=61582766494305"
        target="_blank"
        className="font-semibold text-sky-300 underline hover:text-sky-200"
      >
        TINcredible
      </a>{" "}
      để cùng xem thêm các fun fact khác về{" "}
      <span className="font-semibold text-sky-300">lighT</span> nhé!
    </p>

    <p className="mt-8">
      👉 Đừng quên follow trang chính thức của{" "}
      <span className="font-semibold text-sky-300">lighT</span> tại{" "}
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
  id: "03",
  title: "lighT đã từng sở hữu những cái tên nào?",
  image: "/images/facts/fact03_1.jpe",
  href: "",

  intro: (
  <>
    <h3 className="text-xl font-bold text-sky-300">
      📝 
      <span className="font-semibold text-sky-300">lighT FACT CHECK:
 lighT</span> đã từng sở hữu
      những cái tên nào nhỉ?
    </h3>

    <p className="mt-5">
      Mỗi cái tên đều đánh dấu một cột mốc trưởng thành trong hành trình theo
      đuổi nghệ thuật của{" "}
      <span className="font-semibold text-sky-300">lighT</span>. Các tinie cùng
      điểm lại xem mình đã biết đến{" "}
      <span className="font-semibold text-sky-300">Tin</span> từ giai đoạn nào
      nhé.
    </p>

    <h4 className="mt-8 text-lg font-bold text-sky-200">
      🌟 Đỗ Minh Tân / Tin
    </h4>

    <p className="mt-2">
      Khởi đầu từ cái tên khai sinh{" "}
      <span className="font-semibold text-sky-300">Đỗ Minh Tân</span>, một em{" "}
      <span className="font-semibold text-sky-300">Tin</span> ngoan ngoãn, tình
      cảm và tự lập trong vòng tay gia đình.
    </p>

    <h4 className="mt-8 text-lg font-bold text-sky-200">
      🌟 minhtin
    </h4>

    <p className="mt-2">
      Hành trình tại{" "}
      <span className="font-semibold text-sky-300">
        Tân Binh Toàn Năng
      </span>{" "}
      đã đưa{" "}
      <span className="font-semibold text-sky-300">Tin</span> đến gần hơn với
      khán giả qua cái tên{" "}
      <span className="font-semibold text-sky-300">minhtin</span>, đánh dấu một
      giai đoạn học hỏi và trưởng thành.
    </p>

    <h4 className="mt-8 text-lg font-bold text-sky-200">
      🌟 lighT
    </h4>

    <p className="mt-2">
      Sau những trải nghiệm và thăng trầm, một nghệ sĩ độc lập đang từng bước
      tỏa sáng dưới ánh đèn sân khấu với nghệ danh{" "}
      <span className="font-semibold text-sky-300">lighT</span>.
    </p>

    <h4 className="mt-8 text-lg font-bold text-sky-200">
      💡 Fun fact
    </h4>

    <p className="mt-2">
      Trước khi được biết đến rộng rãi,{" "}
      <span className="font-semibold text-sky-300">lighT</span> năm 18 tuổi từng
      hoạt động trong các nhóm nhảy cover KPOP với nghệ danh{" "}
      <span className="font-semibold text-sky-300">KuL</span> hoặc{" "}
      <span className="font-semibold text-sky-300">Ryan</span>.
    </p>

    <p className="mt-6">
      💬 Trong suốt hành trình trưởng thành này, các tinie có kỷ niệm đặc biệt
      nào với những cái tên của{" "}
      <span className="font-semibold text-sky-300">lighT</span> không?
    </p>

    <p className="mt-6">
      Cùng nhìn lại hình ảnh của{" "}
      <span className="font-semibold text-sky-300">"lai-Ti"</span> qua từng giai
      đoạn nhé 👇
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
    "/images/Ryan.jpg",

  ],

 outro: (
  <>
    <p className="mt-6">
      Tham gia ngay group{" "}
      <a
        href="https://zalo.me/g/hkjrlj645"
        target="_blank"
        className="font-semibold text-sky-300 underline hover:text-sky-200"
      >
        Nhà văn hoá tinie
      </a>{" "}
      và follow{" "}
      <a
        href="https://www.facebook.com/profile.php?id=61582766494305"
        target="_blank"
        className="font-semibold text-sky-300 underline hover:text-sky-200"
      >
        TINcredible
      </a>{" "}
      để cùng xem thêm các fun fact khác về{" "}
      <span className="font-semibold text-sky-300">lighT</span> nhé!
    </p>

    <p className="mt-8">
      👉 Đừng quên follow trang chính thức của{" "}
      <span className="font-semibold text-sky-300">lighT</span> tại{" "}
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
   id: "04",
  title: "Bí mật đằng sau outfit High-end đầu tiên của lighT tại WECHOICE AWARDS 2025: Hơn cả một bộ trang phục, đó là sự trân trọng!",
  image:     "/images/Stylist/IMG_8070.JPG",
  href: "",
  intro: (
  <>
    <h3
      id="fact04-title"
      className="text-xl font-bold text-sky-300"
    >
       📝 
      <span className="font-semibold text-sky-300">lighT</span> FACT CHECK:
 Bí mật phía sau outfit High-end đầu tiên của{" "}
      <span className="font-semibold text-sky-300">lighT</span> tại{" "}
      <span className="font-semibold text-sky-300">
        WeChoice Awards 2025.
     
Hơn cả một bộ trang phục, đó là sự trân trọng! </span>
    </h3>

    <p id="fact04-intro-1" className="mt-5">
      Tại{" "}
      <span className="font-semibold text-sky-300">
        WeChoice Awards 2025
      </span>
      , các tinie chắc hẳn đã không khỏi "wow" trước màn xuất hiện đầy ấn tượng
      của{" "}
      <span className="font-semibold text-sky-300">lighT</span> trong lần đầu
      tiên thử sức với một thiết kế high-end. Với lợi thế vóc dáng cao ráo,
      thần thái sắc lạnh, khả năng pose dáng chuyên nghiệp cùng khí chất nổi
      bật,{" "}
      <span className="font-semibold text-sky-300">lighT</span> đã mang đến một
      diện mạo vừa sang trọng vừa cuốn hút trên thảm đỏ.
    </p>

    <p id="fact04-intro-2" className="mt-4">
      Nhưng phía sau outfit khiến bao người phải trầm trồ ấy lại là một câu
      chuyện hậu trường vô cùng ấm áp, được chính ekip chia sẻ sau sự kiện. Đó
      không chỉ là câu chuyện về thời trang, mà còn là câu chuyện về sự chuyên
      nghiệp, lòng biết ơn và sự trân trọng dành cho những con người đứng phía
      sau ánh đèn sân khấu.
    </p>

    <h4
      id="fact04-heading-1"
      className="mt-8 text-lg font-bold text-sky-200"
    >
      👖 Câu chuyện về hành động "xách quần" và lời hứa với ekip
    </h4>

    <p id="fact04-body-1" className="mt-2">
      Nếu từng theo dõi các fancam hay những đoạn hậu trường tại{" "}
      <span className="font-semibold text-sky-300">
        WeChoice Awards 2025
      </span>
      , chắc hẳn nhiều tinie đều từng thấy{" "}
      <span className="font-semibold text-sky-300">lighT</span> luôn cẩn thận
      xách phần ống quần mỗi khi di chuyển. Một hành động tưởng chừng rất đáng
      yêu, nhưng thực chất lại xuất phát từ sự chuyên nghiệp và lòng tôn trọng
      tuyệt đối dành cho công sức của những người đứng phía sau.
    </p>

    <p id="fact04-body-2" className="mt-4">
      Chị <span className="font-semibold text-sky-300">Pông Chuẩn</span> – stylist
      trực tiếp phụ trách trang phục của{" "}
      <span className="font-semibold text-sky-300">lighT</span> – đã có những
      chia sẻ đầy xúc động về khoảnh khắc này.
    </p>

    <blockquote
      id="fact04-quote"
      className="mt-5 rounded-2xl border-l-4 border-sky-300 bg-white/5 p-5 italic leading-8 text-white/80"
    >
      "Hôm qua ở WeChoice mình có thấy rất nhiều clip của fan quay cảnh{" "}
      <span className="font-semibold text-sky-300">lighT</span> xách quần.
      Đó là kiểu cảm xúc vô cùng cảm động khi một nghệ sĩ thật sự trân trọng
      những điều ekip dành cho mình.
      <br />
      <br />
      Giá trị của một outfit không chỉ nằm ở giá tiền. Đó còn là giá trị tinh
      thần của Nhà thiết kế. Có những bộ trang phục là thiết kế độc bản, được
      làm thủ công từ những chất liệu tốt và hiếm có. Bạn không thể trả lại họ
      chỉ bằng tiền. Đó là uy tín, trách nhiệm, sự tôn trọng và tình yêu dành
      cho tác phẩm.
      <br />
      <br />
      Mình thật sự quý nghệ sĩ trẻ{" "}
      <span className="font-semibold text-sky-300">lighT</span> ở điểm đó."
    </blockquote>

    <h4
      id="fact04-heading-2"
      className="mt-8 text-lg font-bold text-sky-200"
    >
      Sự đánh đổi để giữ trọn vẹn câu chuyện Việt Nam
    </h4>

    <p id="fact04-body-3" className="mt-2">
      Ít ai biết rằng trước khi sự kiện diễn ra, ekip từng cân nhắc phương án
      thay chiếc quần bằng một thiết kế khác để{" "}
      <span className="font-semibold text-sky-300">Tin</span> có thể di chuyển
      thuận tiện và thoải mái hơn.
    </p>

    <p id="fact04-body-4" className="mt-4">
      Tuy nhiên,{" "}
      chị <span className="font-semibold text-sky-300">Pông</span> vẫn mong
      muốn{" "}
      <span className="font-semibold text-sky-300">lighT</span> được diện trọn
      vẹn full-look của{" "}
      <span className="font-semibold text-sky-300">
        NTK Phan Đăng Hoàng
      </span>
      . Bởi theo chị, bộ trang phục không chỉ đẹp về mặt hình ảnh mà còn mang
      theo câu chuyện Việt Nam mà nhà thiết kế muốn truyền tải, đồng thời phù
      hợp với chủ đề của chương trình.
    </p>

    <p id="fact04-body-5" className="mt-4">
      Để hiện thực hóa điều đó, toàn bộ team stylist đã nhiều lần trao đổi,
      thuyết phục và cam kết với{" "}
      <span className="font-semibold text-sky-300">
        NTK Phan Đăng Hoàng
      </span>{" "}
      để{" "}
      <span className="font-semibold text-sky-300">lighT</span> được khoác lên
      mình trọn vẹn thiết kế này.
    </p>

    <h4
      id="fact04-heading-3"
      className="mt-8 text-lg font-bold text-sky-200"
    >
      🤝 Một lời hứa được giữ trọn
    </h4>

    <p id="fact04-body-6" className="mt-2">
      Sau khi nhận được sự tin tưởng ấy,{" "}
      <span className="font-semibold text-sky-300">lighT</span> luôn cẩn thận
      trong từng bước di chuyển. Việc chủ động nâng phần ống quần không chỉ để
      tránh làm ảnh hưởng đến bộ trang phục mà còn là cách{" "}
      <span className="font-semibold text-sky-300">Tin</span> giữ đúng lời hứa
      sẽ bảo vệ thành quả mà cả ekip đã dành rất nhiều tâm huyết để chuẩn bị.
    </p>

    <p id="fact04-body-7" className="mt-4">
      Có lẽ chính điều đó đã khiến rất nhiều người trong nghề dành sự yêu quý
      cho{" "}
      <span className="font-semibold text-sky-300">lighT</span>. Bởi phía sau
      ánh hào quang sân khấu, điều tạo nên giá trị của một nghệ sĩ không chỉ là
      tài năng hay ngoại hình, mà còn là thái độ làm việc tử tế và sự tôn trọng
      dành cho tất cả những người đồng hành phía sau.
    </p>

    <h4
      id="fact04-heading-4"
      className="mt-8 text-lg font-bold text-sky-200"
    >
      💙 Lời cảm ơn
    </h4>

    <p id="fact04-body-8" className="mt-2">
      Thay mặt các tinie,{" "}
      <span className="font-semibold text-sky-300">TINcredible</span> xin gửi
      lời cảm ơn chân thành nhất đến{" "}
      <span className="font-semibold text-sky-300">
        NTK Phan Đăng Hoàng
      </span>{" "}
      vì đã mang đến một thiết kế vừa đẳng cấp vừa giàu ý nghĩa. Đồng thời, xin
      gửi lời cảm ơn đến{" "}
      <span className="font-semibold text-sky-300">Pông Chuẩn</span> cùng toàn
      bộ team stylist đã tận tâm kết nối, nỗ lực hết mình để trao cho{" "}
      <span className="font-semibold text-sky-300">lighT</span> cơ hội được
      khoác lên mình trọn vẹn thiết kế đặc biệt này.
    </p>

    <p id="fact04-body-9" className="mt-4">
      Thái độ làm việc chuyên nghiệp, sự biết ơn và cách{" "}
      <span className="font-semibold text-sky-300">lighT</span> luôn trân trọng
      những giá trị thầm lặng phía sau ánh đèn sân khấu chính là minh chứng rõ
      nhất cho hình ảnh một nghệ sĩ trẻ nghiêm túc với nghề. Hy vọng trong
      tương lai,{" "}
      <span className="font-semibold text-sky-300">lighT</span> sẽ còn có thêm
      thật nhiều cơ hội được thử sức với những thiết kế chất lượng, đẳng cấp và
      tiếp tục tỏa sáng trên những sân khấu lớn.
    </p>

    <p id="fact04-end" className="mt-6">
      Cùng nhìn lại những khoảnh khắc đáng nhớ của outfit đặc biệt này nhé 👇
    </p>
  </>
),
 images: [
    "/images/Stylist/IMG_8070.JPG",
    "/images/Stylist/IMG_8071.JPG",
    "/images/Stylist/IMG_8072.JPG",
    "/images/Stylist/IMG_8217.PNG",
    "/images/Stylist/IMG_8218.JPG",
    "/images/Stylist/IMG_8219.PNG",
    "/images/Stylist/IMG_8221.JPG",
    "/images/Stylist/IMG_8222.JPG",
  ],

  outro: (
  <>
    <p className="mt-6">
      Tham gia ngay group{" "}
      <a
        href="https://zalo.me/g/hkjrlj645"
        target="_blank"
        className="font-semibold text-sky-300 underline hover:text-sky-200"
      >
        Nhà văn hoá tinie
      </a>{" "}
      và follow{" "}
      <a
        href="https://www.facebook.com/profile.php?id=61582766494305"
        target="_blank"
        className="font-semibold text-sky-300 underline hover:text-sky-200"
      >
        TINcredible
      </a>{" "}
      để cùng xem thêm các fun fact khác về{" "}
      <span className="font-semibold text-sky-300">lighT</span> nhé!
    </p>

    <p className="mt-8">
      👉 Đừng quên follow trang chính thức của{" "}
      <span className="font-semibold text-sky-300">lighT</span> tại{" "}
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
  id: "05",
  title: "Giải mã tỷ lệ cơ thể hài hòa của lighT",
  image:     "/images/Tyle/IMG_8058.JPG",
  href: "",

  intro: (
    <>
      <h3 className="text-xl font-bold text-sky-300">
        📝lighT FACT CHECK: Giải mã tỷ lệ cơ thể hài hòa của{" "}
        <span className="font-semibold text-sky-300">lighT</span>
      </h3>

      <p className="mt-5">
        Đừng để tính cách dễ thương thường ngày của{" "}
        <span className="font-semibold text-sky-300">lighT</span> đánh lừa,
        bởi bé <span className="font-semibold text-sky-300">Tin</span> chưa
        chắc đã là "em bé xíu" của các chị đâu nha! 🤭
      </p>

      <p className="mt-4">
        Bất cứ ai từng có cơ hội gặp{" "}
        <span className="font-semibold text-sky-300">lighT</span> ngoài đời
        hẳn đều có chút bất ngờ, bởi vóc dáng thực tế cao ráo và nổi bật hơn
        khá nhiều so với trên hình. Chính khung hình cân đối này, khi kết hợp
        cùng phong thái high-fashion, đã giúp{" "}
        <span className="font-semibold text-sky-300">lighT</span> luôn tạo được
        cảm giác tự tin và cuốn hút từ sân khấu trình diễn đến các thảm đỏ sự
        kiện.
      </p>

      <h4 className="mt-8 text-lg font-bold text-sky-200">
        📏 Những điểm nhấn về vóc dáng
      </h4>

      <ul className="mt-3 list-disc space-y-4 pl-5">
        <li>
          <b>Chiều cao:</b>{" "}
          <span className="font-semibold text-sky-300">1m80</span>.
        </li>

        <li>
          <b>Tỷ lệ 7 đầu:</b> Một tỷ lệ cơ thể hài hòa, được xem là khá lý tưởng
          đối với nam giới châu Á.
        </li>

        <li>
          <b>Tỷ lệ chân - lưng:</b> Đôi chân chiếm khoảng{" "}
          <span className="font-semibold text-sky-300">4/7</span> chiều cao
          tổng thể, tạo cảm giác cân đối và thanh thoát.
        </li>

        <li>
          <b>Thắt lưng gọn:</b> Khi kết hợp cùng tỷ lệ đôi chân giúp tạo hiệu
          ứng thị giác đẹp mắt, đồng thời khiến{" "}
          <span className="font-semibold text-sky-300">lighT</span> dễ dàng phù
          hợp với nhiều phom dáng trang phục khác nhau.
        </li>
      </ul>

      <h4 className="mt-8 text-lg font-bold text-sky-200">
        ✨ Tiềm năng từ thảm đỏ đến sàn diễn thời trang
      </h4>

      <p className="mt-2">
        Màn thể hiện của{" "}
        <span className="font-semibold text-sky-300">lighT</span> tại{" "}
        <span className="font-semibold text-sky-300">
          WeChoice Awards 2025
        </span>{" "}
        và{" "}
        <span className="font-semibold text-sky-300">
          Vietnam International Fashion Week 2026 (VIFW)
        </span>{" "}
        là những minh chứng rõ nét cho khả năng làm quen với trang phục, sân
        khấu và ống kính của cậu bạn.
      </p>

      <p className="mt-4">
        Không chỉ đơn thuần khoác lên mình những thiết kế đẹp,{" "}
        <span className="font-semibold text-sky-300">lighT</span> đang từng
        bước biết cách truyền tải tinh thần của từng bộ trang phục thông qua
        thần thái, cách tạo dáng và biểu cảm linh hoạt trước máy ảnh.
      </p>

      <p className="mt-4">
        Với vóc dáng sáng sân khấu, cùng tinh thần cầu tiến và luôn nghiêm túc
        học hỏi, hy vọng{" "}
        <span className="font-semibold text-sky-300">lighT</span> sẽ có thêm
        nhiều cơ hội đồng hành cùng các nhà thiết kế, thương hiệu thời trang và
        xuất hiện trong nhiều dự án ấn tượng hơn nữa trong tương lai.
      </p>

      <p className="mt-6">
        Cùng nhìn lại những khoảnh khắc nổi bật chứng minh "tỷ lệ vàng" của{" "}
        <span className="font-semibold text-sky-300">lighT</span> nhé 👇
      </p>
    </>
  ),

  images: [
    "/images/Tyle/IMG_8058.JPG",
    "/images/Tyle/IMG_8060.JPG",
    "/images/Tyle/IMG_8070.JPG",
    "/images/Tyle/IMG_8072.JPG",
        "/images/Tyle/IMG_8073.JPG",
    "/images/Tyle/IMG_8221.JPG",
    "/images/Tyle/IMG_8223.JPG",
    "/images/Tyle/design.png",

  ],

  outro: (
  <>
    <p className="mt-6">
      Tham gia ngay group{" "}
      <a
        href="https://zalo.me/g/hkjrlj645"
        target="_blank"
        className="font-semibold text-sky-300 underline hover:text-sky-200"
      >
        Nhà văn hoá tinie
      </a>{" "}
      và follow{" "}
      <a
        href="https://www.facebook.com/profile.php?id=61582766494305"
        target="_blank"
        className="font-semibold text-sky-300 underline hover:text-sky-200"
      >
        TINcredible
      </a>{" "}
      để cùng xem thêm các fun fact khác về{" "}
      <span className="font-semibold text-sky-300">lighT</span> nhé!
    </p>

    <p className="mt-8">
      👉 Đừng quên follow trang chính thức của{" "}
      <span className="font-semibold text-sky-300">lighT</span> tại{" "}
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
  <section className="mx-auto max-w-7xl px-6 pt-28 pb-24">
 <div className=" flex justify-center">
      <img
        src="/images/logo_web/logo-05.png" // đổi sang đường dẫn logo của bạn
        alt="lighT"
        className=" h-12 w-auto sm:h-14 md:h-15 transition duration-300 hover:scale-105"
      />
  </div>
        <h1 className="mt-4 text-center text-3xl font-black">

          lighT's FACT CHECK
        </h1>
<div className="mt-5"></div>
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
                  TMI  {fact.id}
                </p>

               <h2
  className="
    mt-2
    text-sm
    font-semibold
    leading-6
    text-white
    line-clamp-2
    md:line-clamp-3
  "
>
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

      </section>
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
        TMI {selectedFact.id}
      </p>

      

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