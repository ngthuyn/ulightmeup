"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function TinPage() {
    const [authorized, setAuthorized] = useState(false);
const router = useRouter();

const [password, setPassword] = useState("");

const [comments, setComments] = useState<any[]>([]);
const [checking, setChecking] = useState(true);

useEffect(() => {
  const isLogin = sessionStorage.getItem("tin");

  if (isLogin === "true") {
    setAuthorized(true);
    loadComments();
  }

  setChecking(false);
}, []);

if (checking) return null;
async function loadComments() {
  const { data, error } = await supabase
    .from("comments")
    .select("*")
    .eq("visibility", "private")
    .eq("status", "approved");

  console.log("DATA:", data);
  console.log("ERROR:", error);

  if (error) return;

  setComments(data || []);
}
function login() {
  if (
    password === process.env.NEXT_PUBLIC_TIN_PASSWORD
  ) {
    sessionStorage.setItem("tin", "true");

    setAuthorized(true);

    loadComments();      // thêm
  } else {
    alert("Wrong password");
  }
}


function logout() {
  sessionStorage.removeItem("admin");
  sessionStorage.removeItem("tin");

  router.push("/tmi/tines-corner"); // hoặc "/" nếu TmiPage là trang chủ
}
if (!authorized) {
  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: "url('/videos/bg.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={login}>
        Login
      </button>
    </main>
  );
}

return (
  <main
    className="relative min-h-screen overflow-hidden text-white"
    style={{
      backgroundImage: "url('/videos/bg.gif')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="relative z-20 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

      {/* Header */}
      <div className="mx-auto mt-16 md:mt-10 max-w-4xl">
        <div className="flex items-center justify-between gap-4">

          <div className="flex-1">

            <p className="text-xs uppercase tracking-[0.35em] text-sky-200">
              Private Messages
            </p>

            <h2
              className="mt-2 text-2xl text-white sm:text-3xl md:text-4xl"
              style={{
                textShadow: "0 0 12px rgb(233,227,227)",
              }}
            >
              🔒 Only lighT Can Read
            </h2>

            <p className="mt-2 text-sm text-white/70">
              Messages that fans only want lighT to read.
            </p>

            <p className="mt-5 text-white/50">
              {comments.length} private message
              {comments.length !== 1 ? "s" : ""}
            </p>

          </div>

          <button
            onClick={logout}
            className="rounded-full bg-red-500 px-5 py-3 text-white hover:bg-red-600"
          >
            Logout
          </button>

        </div>
      </div>

      {/* Messages */}
      <div className="mx-auto mt-10 max-w-3xl space-y-5">

        {comments.map((comment) => (

          <div
            key={comment.id}
            className="rounded-3xl border border-white/10 bg-black/15 p-6 backdrop-blur-xl"
          >

            <div className="flex items-center justify-between">

              <p className="font-semibold text-sky-300">
                {comment.name}
              </p>

             

            </div>

            <p className="mt-4 whitespace-pre-wrap leading-7 text-white/90">
              {comment.message}
            </p>

          </div>

        ))}

        {comments.length === 0 && (
          <div className="rounded-3xl border border-white/10 bg-black/15 p-10 text-center backdrop-blur-xl">
            <p className="text-white/60">
              No private messages yet 💙
            </p>
          </div>
        )}

      </div>

    </div>
  </main>
);;

}