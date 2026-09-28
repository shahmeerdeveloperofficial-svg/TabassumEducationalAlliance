"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaXmark, FaYoutube, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";

export default function CSRVideo() {
  const [isOpen, setIsOpen] = useState(false);
  const videoId = "I8e3KflkB1g";
  const videoUrl = `https://youtu.be/${videoId}?si=SYjlaJF4bzL-YMz2`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  const officialChannelUrl = "https://youtube.com/@tabassumeducationalalliancereg?si=1uA3hx--VnkgORG2";

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 py-12 maxWSec flex flex-col items-center gap-8">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center gap-3 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/10 border border-red-500/30 text-red-600 font-semibold text-xs sm:text-sm tracking-wide uppercase">
          <FaYoutube className="text-red-600 text-base" />
          <span>Corporate Social Responsibility</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-berlin font-bold text-slate-900 leading-tight">
          Annual Educational & <span className="text-main">Recreational Tour</span>
        </h2>

        <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
          Tabassum Educational Alliance has always been a strong advocate of social responsibility and is committed to providing public and community services through wide-ranging activities.
        </p>
      </div>

      {/* 16:9 Perfect Fitting Video Showcase Player Card */}
      <div className="relative w-full max-w-4xl aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl bg-slate-950 border border-slate-200/80 group cursor-pointer" onClick={() => setIsOpen(true)}>
        {/* Full 16:9 YouTube Thumbnail with Perfect Fit */}
        <Image
          src="/csr_youtube_thumb.jpg"
          alt="Tabassum Educational Alliance Annual Educational Tour Video"
          fill
          priority
          className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
        />

        {/* Subtle hover gradient overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-300" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

        {/* Top Badges */}
        <div className="absolute top-4 sm:top-6 inset-x-4 sm:inset-x-6 flex items-center justify-between z-10 pointer-events-none">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-white/20 text-white font-semibold text-xs tracking-wider uppercase backdrop-blur-md shadow-md">
            <FaYoutube className="text-red-500 text-base" />
            <span>Official Video</span>
          </div>

          <span className="px-3 py-1.5 rounded-full bg-black/60 text-white border border-white/20 text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-md flex items-center gap-1.5">
            <HiSparkles className="text-amber-400 text-sm" />
            HD
          </span>
        </div>

        {/* Center Pulsating YouTube Play Button */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="relative flex items-center justify-center">
            {/* Outer Pulsing Wave Rings */}
            <span className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-red-600/30 animate-ping pointer-events-none" />
            <span className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-red-600/40 animate-pulse pointer-events-none" />

            {/* Clickable Play Button */}
            <button
              aria-label="Play Video"
              className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600 hover:bg-red-500 text-white shadow-[0_0_35px_rgba(220,38,38,0.8)] flex items-center justify-center transition-all duration-300 group-hover:scale-110 border-2 border-white"
            >
              <FaPlay className="text-xl sm:text-2xl ml-1 text-white" />
            </button>
          </div>
        </div>

        {/* Bottom Bar Info */}
        <div className="absolute bottom-4 sm:bottom-6 inset-x-4 sm:inset-x-6 flex items-center justify-between z-10 pointer-events-none">
          <span className="text-xs sm:text-sm text-white font-semibold drop-shadow-md hidden sm:inline">
            Tabassum Educational Alliance (Regd.)
          </span>
          <span className="text-[11px] sm:text-xs text-slate-200 font-medium bg-black/60 px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm ml-auto">
            Click to Play Video
          </span>
        </div>
      </div>

      {/* Action Buttons Below the Video Frame */}
      <div className="flex items-center gap-3 flex-wrap justify-center mt-2">
        <button
          onClick={() => setIsOpen(true)}
          className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800 bg-white hover:bg-slate-50 px-6 py-3 rounded-full border border-slate-200 shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 hover:scale-105"
        >
          <FaPlay className="text-xs text-red-600" />
          <span>Watch Video</span>
        </button>

        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full border border-red-500/50 shadow-[0_4px_20px_rgba(220,38,38,0.35)] transition-all inline-flex items-center gap-2 hover:scale-105"
        >
          <FaYoutube className="text-base" />
          <span>Watch On YouTube</span>
          <FaArrowUpRightFromSquare className="text-[10px]" />
        </a>

        <a
          href={officialChannelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-5 py-3 rounded-full border border-slate-200 transition-all inline-flex items-center gap-1.5"
        >
          <span>Official Channel</span>
          <FaArrowUpRightFromSquare className="text-[10px]" />
        </a>
      </div>

      {/* Interactive YouTube Video Modal Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close Video Modal"
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-10 h-10 rounded-full bg-black/80 hover:bg-red-600 text-white flex items-center justify-center transition-all duration-200 border border-white/30 backdrop-blur-sm shadow-md"
              >
                <FaXmark className="text-lg" />
              </button>

              {/* YouTube Player */}
              <iframe
                src={embedUrl}
                title="Tabassum Educational Alliance Official Video"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />

              {/* Bottom Bar with Video & Channel Link */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 flex items-center justify-between pointer-events-auto">
                <span className="text-xs text-slate-300 font-medium hidden sm:inline">
                  Tabassum Educational Alliance Regd.
                </span>
                <a
                  href={videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-white bg-red-600 hover:bg-red-700 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 ml-auto shadow-md transition"
                >
                  <FaYoutube />
                  <span>Open in YouTube</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
