import Navbar from "@/components/Navbar";

export default function ActivitiesPage() {
  const festival2025 = [
    "Concert All-Rounder The Final của Mentor SOOBIN",
    "TikTok Shop Fun Fest",
    "Y Concert",
    "Chương trình kỷ niệm 76 năm ngày truyền thống Học Sinh-Sinh Viên và Hội Sinh Viên Việt Nam",
  ];

  const festival2026 = [
    "Trưng Vương Festival - Tết Ơi",
    "Countdown Chào Xuân Bính Ngọ 2026 - Rạng Rỡ Thái Nguyên",
    "Alumni Concert Hoa Sen Homecoming 2026",
  ];

  const tvShows = [
    "Top 11 show truyền hình Tân Binh Toàn Năng 2025",
    "Khách mời chương trình Sinh viên thế hệ mới 2025",
    "Khách mời chương trình 12 Con Giáp - Sắc Việt 2026 của VTV",
  ];

  const events = [
    "Tham gia sự kiện Close Up",
    "Tham gia sự kiện Lễ bàn giao Tủ sách 25 năm VnExpress (03/2026)",
    "Tham gia sự kiện Đẹp Magazine x CROCS (04/2026)",
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f7f8fc] px-4 py-10 text-zinc-900 sm:px-6 md:px-12 lg:px-20">
        <div className="mx-auto w-full max-w-screen-2xl">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-sky-600 lg:text-sm">
              Activities
            </p>
            <h1 className="mt-2 text-5xl font-black md:text-6xl xl:text-7xl">
              Hoạt động nổi bật
            </h1>
          </div>

          <div className="grid gap-8 xl:grid-cols-2">
            <div className="rounded-[2rem] bg-gradient-to-br from-sky-50 to-white px-6 py-8 shadow-sm ring-1 ring-zinc-100 md:px-8 md:py-10">
              <p className="text-xs uppercase tracking-[0.3em] text-sky-600 lg:text-sm">
                Festival 2025
              </p>
              <ul className="mt-6 space-y-4 text-base leading-8 text-zinc-700 lg:text-lg lg:leading-9">
                {festival2025.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] bg-white px-6 py-8 shadow-sm ring-1 ring-zinc-100 md:px-8 md:py-10">
              <p className="text-xs uppercase tracking-[0.3em] text-sky-600 lg:text-sm">
                Festival 2026
              </p>
              <ul className="mt-6 space-y-4 text-base leading-8 text-zinc-700 lg:text-lg lg:leading-9">
                {festival2026.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] bg-white px-6 py-8 shadow-sm ring-1 ring-zinc-100 md:px-8 md:py-10">
              <p className="text-xs uppercase tracking-[0.3em] text-sky-600 lg:text-sm">
                TV Shows
              </p>
              <ul className="mt-6 space-y-4 text-base leading-8 text-zinc-700 lg:text-lg lg:leading-9">
                {tvShows.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] bg-gradient-to-br from-sky-50 to-white px-6 py-8 shadow-sm ring-1 ring-zinc-100 md:px-8 md:py-10">
              <p className="text-xs uppercase tracking-[0.3em] text-sky-600 lg:text-sm">
                Events
              </p>
              <ul className="mt-6 space-y-4 text-base leading-8 text-zinc-700 lg:text-lg lg:leading-9">
                {events.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}