"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Tinie = {
  id: number;
  name: string;
  message: string;
  fanarts: string[];
  isPrivate: boolean;
};

/* =========================================================
   DECORATIVE STAR
========================================================= */

function Star({
  className = "",
  size = "text-sm",
}: {
  className?: string;
  size?: string;
}) {
  return (
    <span
      className={`
        pointer-events-none
        absolute
        select-none
        font-serif
        leading-none
        text-sky-500
        drop-shadow-[0_0_5px_rgba(120,210,255,.45)]
        ${size}
        ${className}
      `}
    >
      ✦
    </span>
  );
}

function TinyStar({
  className = "",
}: {
  className?: string;
}) {
  return (
    <span
      className={`
        pointer-events-none
        absolute
        select-none
        text-[9px]
        leading-none
        text-sky-400/80
        drop-shadow-[0_0_4px_rgba(120,210,255,.5)]
        ${className}
      `}
    >
      ✦
    </span>
  );
}

function Heart({
  className = "",
}: {
  className?: string;
}) {
  return (
    <span
      className={`
        pointer-events-none
        absolute
        select-none
        font-serif
        leading-none
        text-pink-300/75
        drop-shadow-[0_0_5px_rgba(255,170,200,.3)]
        ${className}
      `}
    >
      ♡
    </span>
  );
}

/* =========================================================
   CARD DECORATION

   Những decoration này nằm ở background của card,
   không ảnh hưởng tới text.
========================================================= */
{/*
function LetterDecoration() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">

      <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-pink-200/30 blur-3xl" />
      <div className="absolute -right-16 -bottom-16 h-52 w-52 rounded-full bg-violet-300/30 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-100/20 blur-3xl" />

      <Star className="right-[8%] top-[7%] text-yellow-300 opacity-80 drop-shadow-[0_0_7px_rgba(255,220,120,.55)]" size="text-xl" />
      <Star className="left-[6%] top-[13%] text-pink-300 opacity-75 drop-shadow-[0_0_7px_rgba(255,170,220,.5)]" size="text-sm" />
      <Star className="right-[6%] bottom-[16%] text-violet-400 opacity-65" size="text-sm" />
      <Star className="left-[10%] bottom-[9%] text-yellow-300 opacity-70" size="text-xs" />

      <TinyStar className="left-[18%] top-[6%]" />
      <TinyStar className="left-[30%] top-[10%]" />
      <TinyStar className="right-[19%] top-[18%]" />
      <TinyStar className="right-[30%] top-[38%]" />
      <TinyStar className="left-[14%] top-[45%]" />
      <TinyStar className="left-[25%] bottom-[15%]" />
      <TinyStar className="right-[25%] bottom-[9%]" />
      <TinyStar className="right-[10%] bottom-[30%]" />

      <Heart className="right-[17%] top-[22%] rotate-12 text-base text-pink-400/80" />
      <Heart className="left-[8%] top-[35%] -rotate-12 text-sm text-pink-300/70" />
      <Heart className="right-[8%] bottom-[9%] rotate-6 text-lg text-pink-400/75" />
      <Heart className="left-[28%] bottom-[6%] -rotate-6 text-xs text-violet-400/65" />
    </div>
  );
}
*/}

/* =========================================================
   PAPER MESSAGE

   QUAN TRỌNG:

   - Text và line dùng cùng line-height.
   - Line nằm ở đáy line box.
   - Không dùng underline.
   - Không cắt giữa một dòng.
========================================================= */

function PaperMessage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        relative
        w-full
        font-serif
        text-[16px]
        leading-[30px]
        text-[#fff3d6]
        drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]
        sm:text-[17px]
        sm:leading-[30px]
      "
      style={{
        backgroundImage:
          "repeating-linear-gradient(to bottom, transparent 0px, transparent 28px, rgba(255,220,150,0.42) 28px, rgba(255,220,150,0.42) 29px, transparent 29px, transparent 30px)",
        backgroundSize: "100% 30px",
      }}
    >
      <div
        className="
          relative
          z-10
          whitespace-pre-line
          break-words
          pb-0
        "
      >
        {children}
      </div>
    </div>
  );
}
/* =========================================================
   PAGE
========================================================= */

export default function TinieLettersPage() {
  const [letters, setLetters] = useState<Tinie[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedMessage, setSelectedMessage] =
    useState<Tinie | null>(null);

  const [selectedFanart, setSelectedFanart] =
    useState<string | null>(null);

  const [overflowing, setOverflowing] =
    useState<Record<number, boolean>>({});

  const messageRefs =
    useRef<Record<number, HTMLDivElement | null>>({});

  /* =====================================================
     PRIVATE LETTER
  ===================================================== */

  const [unlockingLetter, setUnlockingLetter] =
    useState<Tinie | null>(null);

  const [password, setPassword] =
    useState("");

  const [passwordError, setPasswordError] =
    useState("");

  const [unlocking, setUnlocking] =
    useState(false);

  /* =====================================================
     LOAD DATA
  ===================================================== */

  useEffect(() => {
    async function loadLetters() {
      try {
        const response = await fetch("/api/tinie", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(
            `Failed to fetch Tinie data: ${response.status}`
          );
        }

        const data = await response.json();

        if (Array.isArray(data)) {
          setLetters(data);
        } else {
          setLetters([]);
        }
      } catch (error) {
        console.error("TINIE LOAD ERROR:", error);
        setLetters([]);
      } finally {
        setLoading(false);
      }
    }

    loadLetters();
  }, []);

  /* =====================================================
     CHECK OVERFLOW

     7 dòng x 32px = 224px.

     Như vậy khi cắt:
     không bao giờ cắt giữa một dòng.
  ===================================================== */

  useEffect(() => {
    if (!letters.length) return;

    const checkOverflow = () => {
      const result: Record<number, boolean> = {};

      letters.forEach((item) => {
        const element =
          messageRefs.current[item.id];

        if (!element) return;

        result[item.id] =
          element.scrollHeight >
          element.clientHeight + 2;
      });

      setOverflowing(result);
    };

    const timer = window.setTimeout(
      checkOverflow,
      250
    );

    window.addEventListener(
      "resize",
      checkOverflow
    );

    return () => {
      window.clearTimeout(timer);

      window.removeEventListener(
        "resize",
        checkOverflow
      );
    };
  }, [letters]);

  /* =====================================================
     OPEN PRIVATE LETTER
  ===================================================== */

  function openPrivateLetter(item: Tinie) {
    setUnlockingLetter(item);
    setPassword("");
    setPasswordError("");
  }

  /* =====================================================
     UNLOCK PRIVATE LETTER
  ===================================================== */

  async function unlockLetter() {
    if (!unlockingLetter || unlocking) return;

    if (!password.trim()) {
      setPasswordError("Vui lòng nhập mật khẩu.");
      return;
    }

    try {
      setUnlocking(true);
      setPasswordError("");

      const response = await fetch("/api/tinie", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: unlockingLetter.id,
          password,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setPasswordError(
          result?.error || "Mật khẩu không đúng."
        );
        return;
      }

      const unlockedLetter: Tinie = {
        id: result.id,
        name: result.name || "",
        message: result.message || "",
        fanarts: Array.isArray(result.fanarts)
          ? result.fanarts
          : [],
        isPrivate: true,
      };

      setUnlockingLetter(null);
      setPassword("");
      setPasswordError("");
      setSelectedMessage(unlockedLetter);
    } catch (error) {
      console.error("TINIE UNLOCK ERROR:", error);
      setPasswordError(
        "Không thể mở thư lúc này."
      );
    } finally {
      setUnlocking(false);
    }
  }

  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        text-white
      "
      style={{
        backgroundImage:
          "url('/videos/bg.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >

      {/* =====================================================
          DARK OVERLAY
      ===================================================== */}

    
      

      {/* =====================================================
          BACKGROUND STARS + HEARTS
      ===================================================== */}
{/*
     <div
  className="
    pointer-events-none
    fixed
    inset-0
    z-0
    overflow-hidden
  "
>

        <Star
          className="
            left-[7%]
            top-[14%]
            animate-pulse
            opacity-80
          "
          size="text-2xl"
        />

        <Star
          className="
            right-[13%]
            top-[24%]
            animate-pulse
            opacity-70
          "
          size="text-xl"
        />

        <Star
          className="
            left-[32%]
            top-[7%]
            opacity-50
          "
          size="text-sm"
        />

        <Star
          className="
            right-[38%]
            bottom-[14%]
            opacity-45
          "
          size="text-lg"
        />

        <Star
          className="
            left-[15%]
            bottom-[20%]
            opacity-40
          "
          size="text-sm"
        />

        <TinyStar className="left-[14%] top-[30%]" />
        <TinyStar className="left-[23%] top-[12%]" />
        <TinyStar className="left-[41%] top-[23%]" />
        <TinyStar className="left-[55%] top-[11%]" />
        <TinyStar className="right-[28%] top-[12%]" />
        <TinyStar className="right-[8%] top-[40%]" />
        <TinyStar className="right-[18%] bottom-[26%]" />
        <TinyStar className="left-[34%] bottom-[10%]" />
        <TinyStar className="left-[4%] bottom-[34%]" />

        <Heart
          className="
            left-[5%]
            top-[38%]
            rotate-[-15deg]
            text-xl
          "
        />

        <Heart
          className="
            right-[6%]
            top-[52%]
            rotate-[15deg]
            text-2xl
          "
        />

        <Heart
          className="
            right-[24%]
            bottom-[9%]
            rotate-[-8deg]
            text-lg
          "
        />

      </div>
*/}
      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

     

        {/* =====================================================
            TINIE LOGO
        ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 pt-28 pb-24">
 <div className=" flex justify-center">
  <img
    src="/images/logo_web/logo-05.png"
    alt="lighT"
        className=" h-12 w-auto sm:h-14 md:h-15 transition duration-300 hover:scale-105"
  />
</div>

        {/* =====================================================
            TITLE
        ===================================================== */}

        <div className="mt-8">

          <p
            className="
              text-xs
              tracking-[0.35em]
              text-sky-300
              sm:text-sm
            "
          >
            tinie's corner
          </p>

          <h1
            className="
              mt-3
              font-serif
              text-3xl
              font-bold
              italic
              text-white
              sm:text-4xl
              md:text-5xl
            "
          >
            To lighT, with love 💗
          </h1>

        </div>

        {/* =====================================================
            LOADING
        ===================================================== */}

        {loading && (
          <div
            className="
              flex
              justify-center
              py-24
            "
          >
            <div
              className="
                h-10
                w-10
                animate-spin
                rounded-full
                border-2
                border-sky-300/30
                border-t-sky-300
              "
            />
          </div>
        )}

        {/* =====================================================
            EMPTY
        ===================================================== */}

        {!loading &&
          letters.length === 0 && (
            <div
              className="
                mx-auto
                mt-16
                max-w-xl
                rounded-3xl
                border
                border-white/10
                bg-[#0d1635]/80
                p-10
                text-center
                backdrop-blur-xl
              "
            >
              <p
                className="
                  font-serif
                  text-xl
                "
              >
                Chưa có lá thư nào
                được hiển thị.
              </p>

              <p
                className="
                  mt-3
                  text-sm
                  text-white/50
                "
              >
                Những lời nhắn được chọn
                công khai sẽ xuất hiện tại đây.
              </p>
            </div>
          )}

        {/* =====================================================
            LETTERS
            1ST LETTER — ENVELOPE STYLE
            The paper itself keeps the same letter layout.
            Only the outer presentation is special.
        ===================================================== */}

        {!loading && letters.length > 0 && (
          <>
            {/* =====================================================
                1ST LETTER
                Envelope body is behind the letter; the letter has
                the same typography/content structure as other cards.
            ===================================================== */}
            <div className="mt-14 w-full">
              <div className="w-full">

{/* The real letter */}
                <motion.article
                  key={letters[0].id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="
                    relative
                    z-20
                    mx-auto
                    w-full
                    max-w-3xl
                    sm:w-[82%]
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-sky-200/40
                    shadow-[0_14px_40px_rgba(0,0,0,.25)]
                  "
                  style={{
                    backgroundImage: "url('/images/letterbg.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className="
                      relative
                      z-10
                      px-5
                      pb-7
                      pt-6
                      sm:px-8
                      sm:pb-8
                      sm:pt-7
                    "
                  >
                    
                    {/* Logo */}
                    <div className="mb-5 flex justify-center">
                      <img
                        src="/images/tinie_1.png"
                        alt="tinie"
                        className="
                          h-10
                          w-auto
                          object-contain
                        "
                      />
                    </div>

                    {letters[0].isPrivate ? (
                      <div
                        className="
                          flex
                          min-h-[220px]
                          flex-col
                          items-center
                          justify-center
                          text-center
                        "
                      >
                        <div className="mb-4 text-4xl">🔒</div>

                        <button
                          type="button"
                          onClick={() =>
                            openPrivateLetter(letters[0])
                          }
                          className="
                            flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-[#b58b45]/50
                            bg-[#fff7df]/80
                            px-6
                            py-2.5
                            text-sm
                            font-semibold
                            text-[#6d5634]
                            shadow-sm
                            transition
                            hover:bg-[#fff7df]
                          "
                        >
                          🔒
                          <span>Mở thư</span>
                        </button>

                        <p
                          className="
                            mt-3
                            font-serif
                            text-sm
                            italic
                            text-[#806c4e]
                          "
                        >
                          Thư chỉ dành riêng cho lighT
                        </p>

                        <div
                          className="
                            mt-5
                            flex
                            w-full
                            justify-center
                            border-t
                            border-[#d7bc7d]/50
                            pt-3
                          "
                        >
                          <p
                            className="
                              text-center
                              font-serif
                              text-sm
                              italic
                              text-[#806c4e]
                            "
                          >
                            from:{" "}
                            <span className="font-semibold text-[#59472d]">
                              {letters[0].name || "TINcredible"}
                            </span>
                          </p>
                        </div>
                      </div>
                    ) : (
                      <>
                        {/* Same message layout as normal letters */}
                        <div
                          ref={(element) => {
                            messageRefs.current[letters[0].id] =
                              element;
                          }}
                          className="
                            relative
                          "
                        >
                          <PaperMessage>
                            {letters[0].message}
                          </PaperMessage>
                        </div>

                        {letters[0].fanarts &&
                          letters[0].fanarts.length > 0 && (
                            <div
                              className="
                                relative
                                z-30
                                mt-7
                              "
                            >
                              <div
                                className="
                                  flex
                                  flex-wrap
                                  justify-center
                                  gap-4
                                "
                              >
                                {letters[0].fanarts.map(
                                  (art, index) => {
                                    const isPdf = art
                                      .split("?")[0]
                                      .split("#")[0]
                                      .toLowerCase()
                                      .endsWith(".pdf");

                                    return (
                                      <button
                                        key={`${art}-${index}`}
                                        type="button"
                                        onClick={() =>
                                          setSelectedFanart(art)
                                        }
                                        className="
                                          group
                                          overflow-hidden
                                          rounded-xl
                                        "
                                      >
                                        {isPdf ? (
                                          <div
                                            className="
                                              flex
                                              min-h-[160px]
                                              flex-col
                                              items-center
                                              justify-center
                                              gap-2
                                              rounded-xl
                                              border
                                              border-white/20
                                              bg-black/20
                                            "
                                          >
                                            <span className="text-4xl">
                                              📄
                                            </span>
                                            <span
                                              className="
                                                text-sm
                                                font-semibold
                                                text-[#fff3d6]
                                              "
                                            >
                                              Fan Art PDF
                                            </span>
                                          </div>
                                        ) : (
                                          <img
                                            src={art}
                                            alt={`Fanart ${
                                              index + 1
                                            }`}
                                            loading="lazy"
                                            decoding="async"
                                            className="
                                              max-h-[500px]
                                              w-full
                                              object-contain
                                              transition
                                              duration-500
                                              group-hover:scale-105
                                            "
                                          />
                                        )}
                                      </button>
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          )}

                        {/* from is kept inside the paper */}
                        <div
                          className="
                            mt-6
                            flex
                            w-full
                            justify-center
                            border-t
                            border-white/30
                            pt-4
                          "
                        >
                          <p
                            className="
                              text-center
                              font-serif
                              text-sm
                              italic
                              text-[#e8d9bd]
                            "
                          >
                            from:{" "}
                            <span className="font-semibold text-[#fff0c7]">
                              {letters[0].name || "TINcredible"}
                            </span>
                          </p>
                        </div>
                      </>
                    )}

                    
                  </div>
                </motion.article>
              </div>
            </div>

            {/* =====================================================
                OTHER LETTERS — EXACT OLD LAYOUT
            ===================================================== */}
            {letters.length > 1 && (
              <div
                className="
                  mt-10
                  columns-1
                  md:columns-2
                  md:gap-8
                "
              >
                {letters.slice(1).map((item) => (
                <motion.article
                  key={item.id}

                  initial={{
                    opacity: 0,
                    y: 20,
                  }}

                  animate={{
                    opacity: 1,
                    y: 0,
                  }}

                  transition={{
                    duration: 0.45,
                  }}

                 className="
                relative
                mb-6
                break-inside-avoid
                overflow-hidden
                rounded-[24px]
                border
                border-sky-200/40
                shadow-[0_10px_40px_rgba(0,0,0,.25)]
              "
              style={{
                backgroundImage: "url('/images/letterbg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
                >

                  {/* DECORATION */}

                 {/* <LetterDecoration />*/}

                  {/* CONTENT */}

                    <div
                      className="
                        relative
                        z-10
                        px-5
                        pb-7
                        pt-6
                        sm:px-8
                        sm:pb-8
                        sm:pt-7
                      "
                    >
                      {item.isPrivate ? (
                        /* =================================================
                           PRIVATE LETTER
                           Chỉ hiện logo + khóa + from
                        ================================================= */
                        <div className="flex flex-col items-center">
                          <div
                            className="
                              mb-6
                              flex
                              justify-center
                            "
                          >
                            <img
                              src="/images/tinie_1.png"
                              alt="tinie"
                              className="
                                h-9
                                w-auto
                                object-contain
                                opacity-100
                              "
                            />
                          </div>

                          <button
                            type="button"
                            onClick={() =>
                              openPrivateLetter(item)
                            }
                            className="
                              flex
                              items-center
                              gap-2
                              rounded-full
                              border
                              border-white/50
                              bg-black/30
                              px-5
                              py-2.5
                              text-sm
                              font-semibold
                              text-white
                              shadow-sm
                              backdrop-blur-sm
                              transition
                              hover:bg-white/20
                              hover:text-white
                              hover:shadow-md
                            "
                          >
                            <span className="text-base">
                              🔒
                            </span>
                            <span>
                              Mở thư
                            </span>
                          </button>

                          <p
                            className="
                              mt-3
                              text-center
                              font-serif
                              text-sm
                              italic
text-white/70                            "
                          >
                            Thư chỉ dành riêng cho lighT
                          </p>

                          <div
                            className="
                              mt-6
                              flex
                              w-full
                              justify-end
                              border-t
                              border-sky-200/50
                              pt-4
                            "
                          >
                            <p
                              className="
                                font-serif
                                text-sm
                                italic
                                text-white/70
                                sm:text-base
                              "
                            >
                              from:{" "}
                              <span
                                className="
                                  font-semibold
                                  text-white/90
                                "
                              >
                                {item.name ||
                                  "TINcredible"}
                              </span>
                            </p>
                          </div>
                        </div>
                      ) : (
                        <>
                          {/* =================================================
                              LOGO
                          ================================================= */}

                          <div
                            className="
                              mb-6
                              flex
                              justify-center
                            "
                          >
                            <img
                              src="/images/tinie_1.png"
                              alt="tinie"
                              className="
                                h-9
                                w-auto
                                object-contain
                                opacity-100
                              "
                            />
                          </div>

                          {/* =================================================
                              MESSAGE
                          ================================================= */}

                          <div
                            ref={(element) => {
                              messageRefs.current[item.id] =
                                element;
                            }}
                            className="
                              relative
                              max-h-[210px]
                              overflow-hidden
                            "
                          >
                            <PaperMessage>
                              {item.message}
                            </PaperMessage>
                          </div>

                          {/* =================================================
                              XEM THÊM
                          ================================================= */}

                          {overflowing[item.id] && (
                            <button
                              type="button"
                              onClick={() =>
                                setSelectedMessage(item)
                              }
                             className="
                              relative
                              z-20
                              mt-1
                              block
                              text-sm
                              font-semibold
                              text-sky-200
                              transition
                              hover:text-white
                              hover:underline
                            "
                            >
                              ... Xem thêm
                            </button>
                          )}

                          {/* =================================================
                              FAN ART
                          ================================================= */}

                          {item.fanarts &&
                            item.fanarts.length > 0 && (
                              <div
                                className="
                                  relative
                                  z-20
                                  mt-7
                                "
                              >
                                <p
                                 className="
                                mb-3
                                text-xs
                                font-semibold
                                tracking-[0.2em]
                                text-sky-100
                              "
                                >
                                  tinie's GIFT
                                </p>

                                <div
                                  className="
                                    grid
                                    grid-cols-2
                                    gap-3
                                  "
                                >
                                  {item.fanarts.map(
                                    (art, index) => (
                                      <button
                                        key={`${art}-${index}`}
                                        type="button"
                                        onClick={() =>
                                          setSelectedFanart(
                                            art
                                          )
                                        }
                                        className="
                                          group
                                          overflow-hidden
                                          rounded-xl
                                        "
                                      >
                                        <img
                                          src={art}
                                          alt={`Fanart ${
                                            index + 1
                                          }`}
                                          className="
                                            max-h-[700px]
                                            w-full
                                            object-cover
                                            transition
                                            duration-500
                                            group-hover:scale-105
                                          "
                                        />
                                      </button>
                                    )
                                  )}
                                </div>
                              </div>
                            )}

                          {/* =================================================
                              FROM
                          ================================================= */}

                          <div
                              className="
                                relative
                                z-20
                                mt-6
                                flex
                                justify-end
                                border-t
                                border-white/30
                                pt-4
                              "
                            >
                           <p
                              className="
                                font-serif
                                text-sm
                                italic
                                text-white/70
                                sm:text-base
                              "
                            >
                              from:{" "}
                              <span
                                className="
                                  font-semibold
                                  text-white/90
                                "
                              >
                                {item.name ||
                                  "TINcredible"}
                              </span>
                            </p>
                          </div>
                        </>
                      )}
                    </div>

                </motion.article>
                ))}
              </div>
            )}
          </>
        )}
      </section>

      {/* =====================================================
          PRIVATE LETTER PASSWORD POPUP
      ===================================================== */}

      <AnimatePresence>
        {unlockingLetter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              if (unlocking) return;

              setUnlockingLetter(null);
              setPassword("");
              setPasswordError("");
            }}
            className="
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              bg-black/70
              p-5
              backdrop-blur-md
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              onClick={(e) =>
                e.stopPropagation()
              }
             className="
  relative
  w-full
  max-w-md
  overflow-hidden
  rounded-[24px]
  border
  border-white/40
  p-7
  text-center
  shadow-[0_20px_80px_rgba(0,0,0,.6)]
"
style={{
  backgroundImage: "url('/images/letterbg.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
}}
            >
              {/*<LetterDecoration />*/}

              <div className="relative z-10">
                <button
                  type="button"
                  disabled={unlocking}
                  onClick={() => {
                    setUnlockingLetter(null);
                    setPassword("");
                    setPasswordError("");
                  }}
                  className="
                    absolute
                    right-1
                    top-[-4px]
                    z-20
                    text-2xl
                    text-slate-500
                    transition
                    hover:text-slate-800
                  "
                >
                  ×
                </button>

                <img
                  src="/images/tinie_1.png"
                  alt="tinie"
                  className="
                    mx-auto
                    h-10
                    w-auto
                    object-contain
                    opacity-100
                  "
                />

                <div className="mt-4 text-3xl">
                  🔒
                </div>

                <h2
                  className="
                    mt-3
                    font-serif
                    text-xl
                    font-bold
text-white/90

                  "
                >
Dành riêng cho lighT                </h2>

                <p
                  className="
                    mt-2
                    font-serif
                    text-sm
                    italic
text-white/90
                  "
                >
                  from:{" "}
                  <span className="font-semibold text-white/90
">
                    {unlockingLetter.name ||
                      "TINcredible"}
                  </span>
                </p>

                <input
                  type="password"
                  autoFocus
                  value={password}
                  disabled={unlocking}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError("");
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      unlockLetter();
                    }
                  }}
                  placeholder="Nhập mật khẩu..."
                  className="
                    mt-6
                    w-full
                    rounded-full
                    border
                    border-sky-300/70
                    bg-sky/60
                    px-5
                    py-3
                    text-center
                    text-sky-300
                    outline-none
                    placeholder:text-slate-400
                    focus:border-sky-500
                    focus:ring-2
                    focus:ring-sky-300/30
                  "
                />

                {passwordError && (
                  <p
                    className="
                      mt-3
                      text-sm
                      font-medium
                      text-red-500
                    "
                  >
                    {passwordError}
                  </p>
                )}

                <button
                  type="button"
                  disabled={unlocking}
                  onClick={unlockLetter}
                  className="
                    mt-5
                    rounded-full
                    bg-sky-300
                    px-7
                    py-2.5
                    font-semibold
                    text-slate-800
                    transition
                    hover:bg-sky-200
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                  "
                >
                  {unlocking
                    ? "Đang mở..."
                    : "Mở thư"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          FULL LETTER POPUP
      ===================================================== */}

      <AnimatePresence>

        {selectedMessage && (
          <motion.div
            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            exit={{
              opacity: 0,
            }}

            className="
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              bg-black/70
              p-5
              backdrop-blur-md
              sm:p-8
            "

            onClick={() =>
              setSelectedMessage(null)
            }
          >

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}

              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}

              exit={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}

              transition={{
                duration: 0.25,
              }}

              onClick={(e) =>
                e.stopPropagation()
              }

              className="
                relative
                max-h-[88vh]
                w-full
                max-w-3xl
                overflow-y-auto
                rounded-[24px]
                border
                border-sky-200/50
                
                shadow-[0_20px_80px_rgba(0,0,0,.5)]
              "
              style={{
  backgroundImage: "url('/images/letter-bg.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
}}
            >

              {/* DECORATION */}

           {/*  <LetterDecoration />*/}

              {/* CLOSE */}

              <button
                type="button"
                onClick={() =>
                  setSelectedMessage(null)
                }
                className="
                  absolute
                  right-5
                  top-4
                  z-30
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-white/70
                  text-2xl
                  text-slate-500
                  transition
                  hover:bg-white
                  hover:text-slate-800
                "
              >
                ×
              </button>

              {/* FULL LETTER */}

              <div
                className="
                  relative
                  z-10
                  px-6
                  pb-9
                  pt-8
                  sm:px-10
                  sm:pb-12
                  sm:pt-10
                "
              >

                {/* LOGO */}

                <div
                  className="
                    mb-6
                    flex
                    justify-center
                  "
                >
                  <img
                    src="/images/tinie_1.png"
                    alt="tinie"
                    className="
                      h-9
                      w-auto
                      object-contain
                      opacity-100
                    "
                  />
                </div>

                {/* FULL MESSAGE */}

                <PaperMessage>
                  {selectedMessage.message}
                </PaperMessage>

                {/* FAN ART */}

                {selectedMessage.fanarts &&
                  selectedMessage.fanarts.length >
                    0 && (
                    <div
                      className="
                        relative
                        z-20
                        mt-8
                      "
                    >

                      <p
                        className="
                          mb-4
                          text-xs
                          font-semibold
                          tracking-[0.2em]
                          text-sky-700
                        "
                      >
                     tinie's GIFT

                      </p>

                      <div
                        className="
                          grid
                          grid-cols-2
                          gap-4
                        "
                      >

                        {selectedMessage.fanarts.map(
                          (
                            art,
                            index
                          ) => (
                            <button
                              key={`${art}-${index}`}
                              type="button"
                              onClick={() =>
                                setSelectedFanart(
                                  art
                                )
                              }
                              className="
                                group
                                overflow-hidden
                                rounded-xl
                               
                              "
                            >

                              <img
                                src={art}
                                alt={`Fanart ${
                                  index + 1
                                }`}
                                className="
                                  w-full
                                  object-cover
                                  transition
                                  duration-500
                                  group-hover:scale-105
                                "
                              />

                            </button>
                          )
                        )}

                      </div>

                    </div>
                  )}

                {/* FROM */}

                <div
                  className="
                    mt-8
                    flex
                    justify-end
                  "
                >

                  <p
                    className="
                      font-serif
                      text-sm
                      italic
                     text-white/70
                      sm:text-base
                    "
                  >
                    from:{" "}

                    <span
                      className="
                        font-semibold
                        text-white/90
                      "
                    >
                      {selectedMessage.name ||
                        "TINcredible"}
                    </span>
                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>
        )}

      </AnimatePresence>

      {/* =====================================================
          FAN ART POPUP
      ===================================================== */}

      <AnimatePresence>

        {selectedFanart && (
          <motion.div
            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            exit={{
              opacity: 0,
            }}

            className="
              fixed
              inset-0
              z-[10000]
              flex
              items-center
              justify-center
              bg-black/85
              p-5
              backdrop-blur-md
            "

            onClick={() =>
              setSelectedFanart(null)
            }
          >

            <motion.img
              initial={{
                opacity: 0,
                scale: 0.9,
              }}

              animate={{
                opacity: 1,
                scale: 1,
              }}

              exit={{
                opacity: 0,
                scale: 0.9,
              }}

              transition={{
                duration: 0.25,
              }}

              src={selectedFanart}
              alt="Fanart"

              onClick={(e) =>
                e.stopPropagation()
              }

              className="
                max-h-[90vh]
                max-w-[92vw]
                rounded-2xl
                object-contain
                shadow-[0_20px_80px_rgba(0,0,0,.7)]
              "
            />

            <button
              type="button"
              onClick={() =>
                setSelectedFanart(null)
              }
              className="
                absolute
                right-5
                top-5
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-black/40
                text-2xl
                text-white
                transition
                hover:bg-white/10
              "
            >
              ×
            </button>

          </motion.div>
        )}

      </AnimatePresence>

    </main>
  );
}