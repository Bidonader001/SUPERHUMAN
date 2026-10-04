"use client";

import { useEffect, useState } from "react";

const heroFrames = [
  { src: "/images/omar-custom-plan.jpg", alt: "Omar coaching a Superhuman athlete" },
  { src: "/images/omar-hero-clipboard.jpg", alt: "Omar writing a Superhuman training plan" },
  { src: "/images/omar-hero-rooftop.jpg", alt: "Omar on the Superhuman rooftop" },
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
  "/images/omar-custom-plan.jpg",
  "/images/omar-hero-clipboard.jpg",
  "/images/omar-hero-rooftop.jpg",
  "/images/ladies-bta.jpg",
  "/images/omar-head-coach.jpg",
  "/images/omar-run-mountains.jpg",
  "/images/omar-hyrox-run.jpg",
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
