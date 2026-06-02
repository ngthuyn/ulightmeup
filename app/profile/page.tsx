import Navbar from "@/components/Navbar";

const basicInfo = [
  ["Họ tên", "Đỗ Minh Tân"],
  ["Stage name", "lighT (lai-Ti)"],
  ["Nickname", "tin · hoàng tử lai · minhtin"],
  ["D.O.B", "29.08.2004"],
  ["Cung hoàng đạo", "Xử Nữ"],
  ["Chiều cao", "1m77"],
  ["Quê quán", "TP Hồ Chí Minh"],
  ["Emoji", "🐵 ✨"],
];

export default function ProfilePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f7f8fc] px-4 py-10 text-zinc-900 sm:px-6 md:px-12 lg:px-20">
        <div className="mx-auto w-full max-w-screen-2xl">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-sky-600 lg:text-sm">
              Profile
            </p>
            <h1 className="mt-2 text-5xl font-black md:text-6xl xl:text-7xl">
              Thông tin cơ bản của lighT
            </h1>
          </div>

          <div className="grid gap-8 xl:grid-cols-[1fr_1fr]">
            <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-zinc-100 md:p-8">
              <div className="grid grid-cols-2 gap-4">
                {basicInfo.map(([label, value]) => (
                  <div key={label} className="rounded-3xl bg-zinc-50 p-5">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 sm:text-xs lg:text-sm">
                      {label}
                    </p>
                    <p className="mt-3 text-sm font-semibold sm:text-base lg:text-lg">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-gradient-to-br from-sky-50 to-white p-6 shadow-sm ring-1 ring-zinc-100 md:p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-sky-600 lg:text-sm">
                About
              </p>

              <h2 className="mt-2 text-4xl font-black xl:text-5xl">
                u lighT me up! ✨
              </h2>

              <p className="mt-5 text-base leading-8 text-zinc-600 lg:text-lg lg:leading-9">
                Đỗ Minh Tân, nghệ danh lighT, là một trong những gương mặt nổi
                bật được khán giả yêu mến nhờ tính cách thân thiện, năng lượng
                tích cực và khả năng trình diễn cuốn hút.
              </p>

              <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-zinc-100">
                <p className="text-sm text-zinc-500 lg:text-base">
                  Fan note
                </p>
                <p className="mt-2 text-base font-medium text-zinc-800 lg:text-lg">
                  “Minhtin hát hay, nhảy giỏi và luôn mang lại năng lượng tích
                  cực.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}