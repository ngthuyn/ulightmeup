export default function AuditionPage() {
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
          Poong Crew
        </p>

        <h1 className="mt-3 text-center text-6xl font-black">
          AUDITION
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-white/70 leading-8">
          Official Member of <span className="text-sky-300">Gen V</span>
          <br />
          01 December 2022
        </p>

        {/* Story */}

        <div
          className="
mt-16
rounded-[32px]
border
border-white/10
bg-white/[0.05]
p-8
backdrop-blur-xl
"
        >
          <h2 className="text-3xl font-bold">
            Official Member of Gen V
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-9 text-white/75">

            <p>
              On <span className="font-semibold text-white">01 December 2022</span>,
              Minh Tân officially became a
              <span className="text-sky-300 font-semibold">
                {" "}Gen V member of Poong Crew
              </span>
              {" "}after successfully passing two highly competitive audition rounds.
            </p>

            <p>
              Throughout <span className="font-semibold text-white">2023–2025</span>,
              lighT actively participated in numerous dance projects,
              from high-quality dance covers to collaborations with
              <span className="text-white"> L’Officiel Vietnam</span>,
              rapper
              <span className="text-white"> OSAD</span>,
              singer
              <span className="text-white"> Trúc Nhân</span>,
              and many more.
            </p>

            <p>
              One of the most memorable milestones was performing alongside
              singer
              <span className="text-white"> Hồ Ngọc Hà</span>
              during Night 1 of
              <span className="text-white">
                {" "}Anh Trai Vượt Ngàn Chông Gai Concert 2024.
              </span>
            </p>

            <p>
              Before joining
              <span className="text-sky-300 font-semibold">
                {" "}Tân Binh Toàn Năng
              </span>,
              Poong Crew was where lighT developed his
              performance skills and stage experience.
            </p>

          </div>
        </div>

        {/* Timeline */}

        <div className="mt-20">

          <h2 className="text-3xl font-bold">
            Timeline
          </h2>

          <div className="mt-10 space-y-8">

            <div className="flex gap-6">
              <div className="text-sky-300 font-semibold w-36">
                Nov 2022
              </div>

              <div>
                <h3 className="font-semibold text-xl">
                  Recruitment Opens
                </h3>

                <p className="mt-2 text-white/60">
                  Official recruitment announcement for Gen V.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-sky-300 font-semibold w-36">
                Nov 2022
              </div>

              <div>
                <h3 className="font-semibold text-xl">
                  Round 1 Qualified
                </h3>

                <p className="mt-2 text-white/60">
                  Successfully passed the first audition round.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-sky-300 font-semibold w-36">
                01 Dec 2022
              </div>

              <div>
                <h3 className="font-semibold text-xl">
                  Official Gen V Member
                </h3>

                <p className="mt-2 text-white/60">
                  Officially joined Poong Crew as a Gen V member.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Gallery */}

        <div className="mt-24">

          <h2 className="text-3xl font-bold mb-10">
            Gallery
          </h2>

          <div className="grid gap-8 md:grid-cols-3">

            {/* Card 1 */}

            <div className="group">

              <img
                src="/images/poong/audition1.jpg"
                className="aspect-[3/4] w-full rounded-2xl object-cover transition duration-300 group-hover:scale-105"
              />

              <h3 className="mt-5 text-lg font-semibold">
                Recruitment Announcement
              </h3>

            </div>

            {/* Card 2 */}

            <div className="group">

              <img
                src="/images/poong/audition2.jpg"
                className="aspect-[3/4] w-full rounded-2xl object-cover transition duration-300 group-hover:scale-105"
              />

              <h3 className="mt-5 text-lg font-semibold">
                Round 1 Qualification Notice
              </h3>

            </div>

            {/* Card 3 */}

            <div className="group">

              <img
                src="/images/poong/audition3.jpg"
                className="aspect-[3/4] w-full rounded-2xl object-cover transition duration-300 group-hover:scale-105"
              />

              <h3 className="mt-5 text-lg font-semibold">
                Official Gen V Member Announcement
              </h3>

            </div>

          </div>

        </div>

        {/* CTA */}

        <div className="mt-20 text-center">

          <a
            href="https://www.facebook.com/share/p/14g2wXxnYBA/"
            target="_blank"
            className="
inline-flex
items-center
gap-3
rounded-full
border
border-sky-300
px-8
py-4
text-sky-300
transition
hover:bg-sky-300
hover:text-black
"
          >
            View Original Announcement ↗
          </a>

        </div>

      </section>
    </main>
  );
}