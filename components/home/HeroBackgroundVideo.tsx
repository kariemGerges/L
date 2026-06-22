"use client";

import { useEffect, useRef } from "react";
import { HERO_VIDEO_SOURCES } from "@/lib/constants";

export function HeroBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const play = () => {
      void video.play().catch(() => {});
    };

    play();

    if (video.readyState >= 2) return;

    video.addEventListener("loadeddata", play);
    return () => video.removeEventListener("loadeddata", play);
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className="hero-video pointer-events-none absolute inset-0 h-full w-full object-cover"
      aria-hidden
    >
      {HERO_VIDEO_SOURCES.map(({ src, type }) => (
        <source key={src} src={src} type={type} />
      ))}
    </video>
  );
}
