"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function TmiPage() {
  console.log(
    "SUPABASE URL:",
    process.env.NEXT_PUBLIC_SUPABASE_URL
  );
  const [comments, setComments] = useState<any[]>([]);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

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

async function loadComments() {
  const { data, error } = await supabase
    .from("comments")
    .select("*")
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
  className="relative min-h-[100svh] overflow-x-hidden text-white"
  style={{
    backgroundImage: "url('/images/bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

  <div className="relative z-20 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between gap-4">
    <Link
  href="/home"
  className="
    fixed
    left-6
    top-6
    z-50
    flex
    h-12
    w-12
    items-center
    justify-center
    rounded-full
    border
    border-white/15
    bg-black/10
    text-xl
    text-white
    backdrop-blur-xl
    transition-all
    duration-300
    hover:scale-110
  "
>
  🏠
</Link>
    </div>
<div className="mx-auto mt-16 md:mt-4 max-w-4xl">
  <div className="flex items-center justify-between gap-4">
    
    <div className="flex-1">
      <p className="text-xs uppercase tracking-[0.35em] text-sky-200">
        Messages
      </p>

      <h2
        className="mt-2 text-2xl font-black sm:text-3xl md:text-4xl"
        style={{
          textShadow:
            "0 0 12px rgba(255,255,255,.25)",
        }}
      >
        💌 from tinies
      </h2>

      <p className="mt-2 text-sm text-white/70 sm:text-base">
        👇 Leave a message ✨
      </p>
    </div>

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
      onChange={(e) => setName(e.target.value)}
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
      onChange={(e) => setMessage(e.target.value)}
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
        },
      ]);

    console.log("DATA:", data);
    console.log("ERROR:", error);

    if (error) return;

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
</main>


);
}
