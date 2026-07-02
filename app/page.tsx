"use client";

import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  
  return (
    <main
      className="flex min-h-screen items-center justify-center text-white"
      style={{
        backgroundImage: "url('/videos/bg1.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center">
        <p className="text-5xl">✨</p>

       <div className="mt-6 flex justify-center">
  <img
    src="/images/logo1.gif"
    alt="Shining lighT"
    className="w-[280px] sm:w-[360px] md:w-[430px] h-auto"
    draggable={false}
  />
</div>


        
      </div>
    </main>
  );
}