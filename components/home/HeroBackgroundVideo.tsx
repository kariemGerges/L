"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { HERO_POSTER_PATH, HERO_VIDEO_PATH } from "@/lib/constants";

function shouldUseStaticHero() {
  if (typeof window === "undefined") return true;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  return reducedMotion || isMobile;
}

export function HeroBackgroundVideo() {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (shouldUseStaticHero()) return;
    setShowVideo(true);
  }, []);

  useEffect(() => {
    if (!showVideo) return;
    const video = videoRef.current;
    if (!video) return;

    const play = () => {
      void video.play().catch(() => {});
    };

    play();
    video.addEventListener("loadeddata", play);
    return () => video.removeEventListener("loadeddata", play);
  }, [showVideo]);

  if (!showVideo) {
    return (
      <Image
        src={HERO_POSTER_PATH}
        alt=""
        fill
        priority
        fetchPriority="high"
        className="hero-video pointer-events-none absolute inset-0 h-full w-full object-cover"
        sizes="100vw"
        aria-hidden
      />
    );
  }

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={HERO_POSTER_PATH}
      className="hero-video pointer-events-none absolute inset-0 h-full w-full object-cover"
      aria-hidden
    >
      <source src={HERO_VIDEO_PATH} type="video/mp4" />
    </video>
  );
}
