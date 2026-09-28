"use client";

import { useEffect, useState } from "react";

const heroFrames = [
  { src: "/images/omar-head-coach.jpg", alt: "Omar Zoromba, Superhuman head coach" },
  { src: "/images/omar-body-recomp.jpg", alt: "Omar in a Superhuman physique session" },
  { src: "/images/omar-run-mountains.jpg", alt: "Omar running in the mountains" },
  { src: "/images/omar-hyrox-run.jpg", alt: "Omar racing HYROX" },
  { src: "/images/omar-pullup.jpg", alt: "Omar performing a pull-up" },
  { src: "/images/omar-founder-medal.jpg", alt: "Omar after an open-water win" },
];

export function HeroReel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = window.setInterval(() => setI((n) => (n + 1) % heroFrames.length), 4200);
    return () => window.clearInterval(t);
  }, []);

  return (
    <div className="hero-reel" aria-hidden="true">
      {heroFrames.map((frame, n) => (
        <img
          key={frame.src}
          className={`hero-reel-img ${n === i ? "is-active" : ""}`}
          src={frame.src}
          alt=""
        />
      ))}
      <div className="hero-shade" />
    </div>
  );
}

const marquee = [
  "/images/omar-head-coach.jpg",
  "/images/omar-body-recomp.jpg",
  "/images/omar-run-mountains.jpg",
  "/images/omar-hyrox-run.jpg",
  "/images/omar-pullup.jpg",
  "/images/omar-founder-medal.jpg",
  "/images/omar-first-place.jpg",
];

export function PhotoMarquee() {
  const loop = [...marquee, ...marquee];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((src, n) => (
          <div className="marquee-item" key={`${src}-${n}`}>
            <img className="photo" src={src} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
