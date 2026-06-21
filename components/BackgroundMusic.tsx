"use client";

import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    console.log(
      "musicStarted:",
      sessionStorage.getItem("musicStarted")
    );

    if (
      sessionStorage.getItem("musicStarted") !==
      "true"
    ) {
      return;
    }

    const audio = new Audio(
      "/audio/NMCDN.mp3"
    );

    audio.loop = true;
    audio.volume = 0.35;

    audio
      .play()
      .then(() => {
        console.log("PLAY OK");
      })
      .catch((err) => {
        console.log("PLAY ERROR", err);
      });

    audioRef.current = audio;

    return () => {
      audio.pause();
    };
  }, []);

  return null;
}