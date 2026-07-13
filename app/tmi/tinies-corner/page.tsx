"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";


export default function TmiPage() {
  const router = useRouter();

const [showLogin, setShowLogin] = useState(false);
const [staffPassword, setStaffPassword] = useState("");
  console.log(
    "SUPABASE URL:",
    process.env.NEXT_PUBLIC_SUPABASE_URL
  );
  const [comments, setComments] = useState<any[]>([]);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
const [sent, setSent] = useState(false);
const [visibility, setVisibility] = useState<
  "public" | "private"
>("public");
 useEffect(() => {
  loadComments();

  const channel = supabase
    .channel("comments-realtime")
    .on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "comments",
      },
      () => {
        loadComments();
      }
    )
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
}, []);
function loginStaff() {

  if (
    staffPassword ===
    process.env.NEXT_PUBLIC_ADMIN_PASSWORD
  ) {

    sessionStorage.setItem("admin","true");

    router.push("/admin/comments");

    return;
  }

  if (
    staffPassword ===
    process.env.NEXT_PUBLIC_TIN_PASSWORD
  ) {

    sessionStorage.setItem("tin","true");

    router.push("/tin");

    return;
  }

  alert("Wrong password");

}
async function loadComments() {
 const { data, error } = await supabase
  .from("comments")
  .select("*")
.eq("status","approved")
.eq("visibility","public")  
  .order("created_at", {
    ascending: false,
  });

  if (error) {
    console.error(error);
    return;
  }

  setComments(data || []);
}
return ( <main
  className="relative min-h-screen overflow-hidden"
  style={{
    backgroundImage: "url('/videos/bg.gif')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    
  }}
>

  <div className="relative z-20 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
    
<div className="mx-auto mt-16 md:mt-20 max-w-4xl">
  <div className="flex items-center justify-between gap-4">
    {/* Title */}
<div className="relative z-20 mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
  <div className="relative mx-auto mt-[8vh] max-w-3xl text-center sm:mt-[10vh] lg:mt-[12vh]">
    <div
      className="text-white"
      style={{
        textShadow:
          "0 0 8px rgba(255,255,255,.8), 0 0 20px rgba(96,165,250,.8), 0 0 40px rgba(96,165,250,.5)",
      }}
    >
      <div className="flex items-center justify-center gap-1">
        <span className="text-[11px] font-medium tracking-[0.02em] sm:text-base lg:text-xl">
          The lighT in
        </span>

        <div className="flex items-center whitespace-nowrap">
          <img
            src="/images/tinie_1.png"
            alt="tinie"
            className="h-6 w-auto sm:h-9 lg:h-10"
          />
          <span className="ml-px text-sm font-medium tracking-[0.03em] sm:text-lg lg:text-xl">
            's
          </span>
        </div>

        <span className="text-sm font-medium tracking-[0.03em] sm:text-lg lg:text-xl">
          eyes
        </span>
      </div>

      <div className="mt-1 text-[11px] sm:text-sm lg:text-xl font-medium tracking-[0.03em] sm:text-lg lg:text-xl">
        ✨shines the brightest ✨
      </div>
    </div>
  </div>

</div>
   {/* <div className="flex-1">
      <p className="text-xs uppercase tracking-[0.35em] text-sky-200">
        Messages
      </p>

      <h2
        className="mt-2 text-2xl text-white sm:text-3xl md:text-4xl"
        style={{
          textShadow:
            "0 0 12px rgb(233, 227, 227)",
        }}
      >
        💌 from tinies
      </h2>

      <p className="mt-2 text-sm text-white/70 sm:text-base">
        👇 Leave a message ✨
      </p>
    </div>
    */}

    <div
      className="
        shrink-0
        rounded-2xl
        border border-white/10
        bg-black/15
        backdrop-blur-xl
        p-2
      "
    >
      <img
        src="/images/lighT_.jpg"
        alt="lighT"
        className="
          w-[120px]
          sm:w-[140px]
          md:w-[180px]
          rounded-xl
        "
      />
    </div>
  </div>
</div>
   {/* <div className="mt-10 text-center">
      <p className="text-xs uppercase tracking-[0.35em] text-sky-200 sm:text-sm">
        TMI
      </p>

      <h1 className="mt-3 text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl"
        style={{
  textShadow: "0 0 15px rgba(255,255,255,.2)",
}}>
        Ghi chú nhỏ của fan
      </h1>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8 lg:text-lg">
        Những điều nhỏ xíu nhưng rất “lighT”.
      </p>
    </div>*/}





  {/* MESSAGES FROM TINIES */}
<div className="mt-8 md:mt-10 mx-auto max-w-3xl">
{/* FORM */}
  <button
  onClick={() => setShowLogin(true)}
  className="
    mt-10
    rounded-full
    border border-white/10
    bg-white/5
    px-6
    py-3
    text-white/70
    transition
    hover:bg-white/10
  "
>
  🔐 Only lighT
</button>
  <div
    className="
      mt-8
      rounded-3xl
      border border-white/10
      bg-black/15
      backdrop-blur-xl
      p-6
    "
  >
    <input
      value={name}
onChange={(e) => {
  setName(e.target.value);
  setSent(false);
}}      
      placeholder="Your name (optional)"
      className="
        w-full
        rounded-xl
        border border-white/10
        bg-white/5
        px-4 py-3
        text-white
        outline-none
        placeholder:text-white/40
      "
    />

    <textarea
      rows={3}
      value={message}
onChange={(e) => {
  setMessage(e.target.value);
  setSent(false);
}}      
      placeholder="Write your message for lighT..."
      className="
        mt-4
        w-full
        rounded-xl
        border border-white/10
        bg-white/5
        px-4 py-3
        text-white
        outline-none
        placeholder:text-white/40
      "
    />
<div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">

  <p className="mb-3 text-sm text-white/70">
    Who can read this message?
  </p>

  <label className="flex cursor-pointer items-center gap-3">

    <input
      type="radio"
      checked={visibility === "public"}
      onChange={() => setVisibility("public")}
    />

    <div>

      <p className="font-medium text-white">
        🌍 Public
      </p>

      <p className="text-sm text-white/50">
        Everyone can read this.
      </p>

    </div>

  </label>

  <label className="mt-4 flex cursor-pointer items-center gap-3">

    <input
      type="radio"
      checked={visibility === "private"}
      onChange={() => setVisibility("private")}
    />

    <div>

      <p className="font-medium text-white">
        🔒 Only lighT Can Read
      </p>

      <p className="text-sm text-white/50">
        This message will only be visible to lighT.
      </p>

    </div>

  </label>

</div>
   <button
  onClick={async () => {
    console.log("SEND CLICKED");

    if (!message.trim()) {
      console.log("EMPTY MESSAGE");
      return;
    }

  const { data, error } = await supabase
  .from("comments")
  .insert([
    {
      name: name || "Anonymous",
      message,
      status: "pending",
       visibility,

    },
  ]);

console.log("DATA:", data);
console.log("ERROR:", error);

    if (error) return;
    setSent(true);
    setName("");
    setMessage("");

    loadComments();
  }}

  className="
    mt-4
    rounded-full
    bg-sky-400
    px-6
    py-3
    font-semibold
    text-white
    transition
    hover:scale-105
  "

>
  Send to lighT 💙
</button>
{sent && (
  <div className="mt-4 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-4 text-sm text-emerald-200">
    💙 Thank you! Your message has been received.
  </div>
)}
  </div>
  <h3 className="mt-12 mb-4 text-xl font-bold text-white">
  Recent Messages
</h3>
  {/* COMMENTS */}
  <div className="mt-8 space-y-4">
    {comments.map((comment, index) => (
      <div
        key={index}
        className="
          rounded-2xl
          border border-white/10
          bg-black/15
          backdrop-blur-xl
           p-5 md:p-6
        "
      >
        <p className="font-semibold text-sky-200">
          {comment.name}
        </p>

       <p className="mt-2 text-white/90">
  {comment.message}
</p>
      </div>
    ))}
  </div>

  
</div>
    <div className="mt-16 text-center">
    
      <img
  src="/images/ulightmeup.png"
  alt="u lighT me up"
  className="mx-auto w-[320px] sm:w-[420px]"
  style={{
    filter: "drop-shadow(0 0 12px rgba(255,255,255,.45))",
  }}
/>
      
    </div>
  </div>
  {showLogin && (

<div
  className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-md"
>

  <div className="w-full max-w-md rounded-3xl bg-black/30 p-8">

    <h2 className="mb-6 text-center text-3xl font-bold text-white">
      Staff Access
    </h2>

    <input
      type="password"
      value={staffPassword}
      onChange={(e) =>
        setStaffPassword(e.target.value)
      }
      placeholder="Password"
      className="
        w-full
        rounded-xl
        border
        border-white/10
        bg-white/5
        px-4
        py-3
        text-white
        outline-none
      "
    />

    <div className="mt-6 flex gap-3">

      <button
        onClick={() => {
          setShowLogin(false);
          setStaffPassword("");
        }}
        className="flex-1 rounded-xl bg-white/10 py-3"
      >
        Cancel
      </button>

      <button
        onClick={loginStaff}
        className="flex-1 rounded-xl bg-sky-400 py-3"
      >
        Enter
      </button>

    </div>

  </div>

</div>

)}
</main>


);
}
