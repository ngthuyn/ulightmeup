import Navbar from "@/components/Navbar";

export default function TmiPage() {
  const tmi = [
    "Rất thích giỡn, ông hoàng bắt trend, siêu thân thiện, lanh lẹ.",
    "Có tài làm host, giả giọng, mood maker kiêm bảo mẫu, dạy nhảy của mọi người.",
    "Là Xử Nữ nên có gu thẩm mỹ cao; tặng quần áo cho tin nhớ để ý gu của tin nha.",
    "Tin hầu hết sẽ dùng đồ fan tặng cực kì cẩn thận 🥹",
    "Minhtin hát hay, minhtin nhảy giỏi, minhtin siêu ngoan.",
    "Từ hồi nhỏ xíu ẻm đã biết phụ người nhà bán bánh mì.",
    "Minhtin trốn ba mẹ đi thi TBTN nha.",
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f7f8fc] px-4 py-10 text-zinc-900 sm:px-6 md:px-12 lg:px-20">
        <div className="mx-auto w-full max-w-screen-2xl">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-sky-600 lg:text-sm">
              TMI
            </p>
            <h1 className="mt-2 text-5xl font-black md:text-6xl xl:text-7xl">
              Ghi chú nhỏ của fan
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-600 lg:text-lg lg:leading-9">
              Những điều nhỏ xíu nhưng rất “lighT”.
            </p>
          </div>

          <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-zinc-100 md:p-8">
              <div className="space-y-4">
                {tmi.map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl bg-sky-50 p-5 text-base leading-8 text-zinc-700 lg:p-6 lg:text-lg lg:leading-9"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-gradient-to-br from-sky-50 to-white p-6 shadow-sm ring-1 ring-zinc-100 md:p-8">
              <p className="text-xs tracking-[0.3em] text-sky-600 lg:text-sm">
                ABOUT lighT
              </p>

              <h2 className="mt-2 text-4xl font-black xl:text-5xl">
                u lighT me up! ✨
              </h2>

              <p className="mt-5 text-base leading-8 text-zinc-600 lg:text-lg lg:leading-9">
                Fanpage profile for lighT (Đỗ Minh Tân)
                <br />
                by TINcredible — All for lighT ✨
              </p>

              <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-zinc-100">
                <p className="text-sm text-zinc-500 lg:text-base">
                  Fan note
                </p>
                <p className="mt-2 text-base font-medium text-zinc-800 lg:text-lg">
                  Ông hoàng bắt trend, mood maker, lanh lẹ và siêu thân thiện.
                </p>
              </div>

              <div className="mt-4 rounded-3xl bg-sky-50 p-6">
                <p className="text-sm text-zinc-500 lg:text-base">
                  Favorite things
                </p>
                <p className="mt-2 text-base font-medium text-zinc-800 lg:text-lg">
                  Bún đậu · Hải sản · Trà sữa · Đà Lạt · Pop Mart
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}