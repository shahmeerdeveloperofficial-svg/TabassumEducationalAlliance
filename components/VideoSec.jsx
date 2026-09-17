import React from "react";
import Button from "./ui/Button";
import Image from "next/image";

const VideoSec = () => {
  return (
    <section className="p-4 min-h-[34rem] w-full">
      <div
        className="w-full min-h-[32rem] relative overflow-hidden rounded-3xl maxW bg-slate-900 shadow-2xl"
        style={{ clipPath: "inset(0 0 0 0 round 1.5rem 1.5rem 1.5rem 1.5rem)" }}
      >
        {/* Bright Student Picture */}
        <Image
          src="/tea_student4.jpg"
          alt="Tabassum Educational Alliance Students"
          fill
          className="object-cover opacity-60 scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/60 to-slate-950/80 z-[1]"></div>
        <div className="min-h-[32rem] relative z-10 flex flex-col justify-center items-center gap-4 text-light px-6 text-center">
          <h1
            style={{ textShadow: "0 3px 16px rgba(0,0,0,0.9)" }}
            className="h1 text-center font-bold tracking-wide drop-shadow-xl text-white"
          >
            Learning That Inspires
            <br />
            For Life
          </h1>
          <h4
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.9)" }}
            className="mb-4 text-center max-w-[min(56ch,88%)] leading-relaxed text-sm sm:text-base md:text-lg text-white drop-shadow-md font-medium"
          >
            Tabassum Educational Alliance Regd. supports students across Pakistan with structured academics, character building, modern IT skills, and a welcoming school culture.
          </h4>
          <div className="flex gap-4 flex-wrap justify-center">
            <a href="tel:03008847670">
              <Button>Call 0300-8847670</Button>
            </a>
            <a
              href="/ContactUs"
            >
              <Button btnType="sec">Contact Head Office</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSec;
