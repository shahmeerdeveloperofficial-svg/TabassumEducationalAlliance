import React from "react";
import Button from "./ui/Button";
import Image from "next/image";

const VideoSec = () => {
  return (
    <section className="p-4 min-h-[34rem] w-full">
      <div
        className="w-full min-h-[32rem] relative overflow-hidden rounded-3xl maxW shadow-2xl bg-slate-900"
        style={{ clipPath: "inset(0 0 0 0 round 1.5rem 1.5rem 1.5rem 1.5rem)" }}
      >
        {/* Bright, Vivid, High-Resolution Student Library Picture (No dark blue shade!) */}
        <Image
          src="/tea_student4.jpg"
          alt="Tabassum Educational Alliance Students"
          fill
          priority
          className="object-cover opacity-95 scale-100"
        />

        {/* Minimal clean transparent contrast overlay */}
        <div className="absolute inset-0 bg-black/40 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 z-[2]" />

        <div className="min-h-[32rem] relative z-10 flex flex-col justify-center items-center gap-4 text-light px-6 text-center">
          <h1
            style={{ textShadow: "0 4px 18px rgba(0,0,0,0.9), 0 2px 6px rgba(0,0,0,0.9)" }}
            className="h1 text-center font-bold tracking-wide drop-shadow-2xl text-white"
          >
            Learning That Inspires
            <br />
            For Life
          </h1>
          <h4
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.95), 0 1px 4px rgba(0,0,0,0.9)" }}
            className="mb-4 text-center max-w-[min(56ch,88%)] leading-relaxed text-sm sm:text-base md:text-lg text-white drop-shadow-xl font-medium"
          >
            Tabassum Educational Alliance Regd. supports students across Pakistan with structured academics, character building, modern IT skills, and a welcoming school culture.
          </h4>
          <div className="flex gap-4 flex-wrap justify-center">
            <a href="tel:03008847670">
              <Button>Call 0300-8847670</Button>
            </a>
            <a href="/ContactUs">
              <Button btnType="sec">Contact Head Office</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSec;
