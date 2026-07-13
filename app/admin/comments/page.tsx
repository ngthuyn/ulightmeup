"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminCommentsPage() {
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);
const [checking, setChecking] = useState(true);
  const [comments, setComments] = useState<any[]>([]);

useEffect(() => {
  if (sessionStorage.getItem("admin") === "true") {
    setAuthorized(true);
  }

  setChecking(false);
}, []);

useEffect(() => {
  if (!authorized) return;

  loadComments();

  const channel = supabase
    .channel("admin-comments")
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
}, [authorized]);

// 👇 Đặt ở đây
if (checking) return null;

  async function loadComments() {
    const { data, error } = await supabase
      .from("comments")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.log(error);
      return;
    }

    setComments(data || []);
  }

async function approveComment(id: number) {
  console.log("Approve clicked:", id);

  const { data, error } = await supabase
    .from("comments")
    .update({
      status: "approved",
    })
    .eq("id", id)
    .select();

  console.log("DATA:", data);
  console.log("ERROR:", error);

  if (error) {
    alert(error.message);
    return;
  }

  loadComments();
}

  async function deleteComment(id: number) {
    if (!confirm("Delete this comment?")) return;

    await supabase
      .from("comments")
      .delete()
      .eq("id", id);

    loadComments();
  }

  function login() {
    if (
      password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD
    ) {
      sessionStorage.setItem("admin", "true");
      setAuthorized(true);
    } else {
      alert("Wrong password");
    }
  }

  function logout() {
    sessionStorage.removeItem("admin");
    setAuthorized(false);
    setPassword("");
  }

  // ================= LOGIN =================

  if (!authorized) {
    return (
      <main
        className="min-h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/videos/bg.gif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-black/20 p-8 backdrop-blur-xl">

          <h1 className="mb-6 text-center text-3xl font-bold">
            Admin Login
          </h1>

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none"
          />

          <button
            onClick={login}
            className="mt-5 w-full rounded-xl bg-sky-400 py-3 font-semibold"
          >
            Login
          </button>

        </div>
      </main>
    );
  }

  // ================= ADMIN =================

  return (
    <main
      className="min-h-screen text-white"
      style={{
        backgroundImage: "url('/videos/bg.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-5xl px-6 py-24">

        <div className="mb-10 flex items-center justify-between">

          <h1 className="text-4xl font-bold">
            Comment Management
          </h1>

          <button
            onClick={logout}
            className="rounded-xl bg-red-500 px-5 py-2"
          >
            Logout
          </button>

        </div>

        <div className="space-y-5">

          {comments.map((comment) => (

            <div
              key={comment.id}
              className="rounded-3xl border border-white/10 bg-black/20 p-6 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between">

                <div>

                  <h2 className="font-bold text-sky-300">
                    {comment.name}
                  </h2>

                  <p className="mt-2 text-white">
                    {comment.message}
                  </p>
<div className="mt-3 flex items-center gap-3">

  <span
    className={`rounded-full px-3 py-1 text-xs font-semibold ${
      comment.visibility === "private"
        ? "bg-purple-500/20 text-purple-300"
        : "bg-sky-500/20 text-sky-300"
    }`}
  >
    {comment.visibility === "private"
      ? "🔒 Only Tin Can Read"
      : "🌍 Public"}
  </span>

</div>
                  <p className="mt-3 text-sm text-white/50">
                    Status :
                    <span
                      className={`ml-2 ${
                        comment.status === "approved"
                          ? "text-green-400"
                          : "text-yellow-300"
                      }`}
                    >
                      {comment.status}
                    </span>
                  </p>

                </div>

                <div className="flex gap-3">

                  {comment.status !== "approved" && (

                    <button
                      onClick={() =>
                        approveComment(comment.id)
                      }
                      className="rounded-xl bg-green-500 px-5 py-2"
                    >
                      Approve
                    </button>

                  )}

                  <button
                    onClick={() =>
                      deleteComment(comment.id)
                    }
                    className="rounded-xl bg-red-500 px-5 py-2"
                  >
                    Delete
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </main>
  );
}