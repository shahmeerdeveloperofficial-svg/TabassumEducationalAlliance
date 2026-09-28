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
    <section className="w-full px-4 sm:px-8 lg:px-12 py-8 sm:py-12 maxWSec">
      {/* Outer Video Showcase Card */}
      <div className="relative w-full min-h-[380px] sm:min-h-[440px] md:min-h-[500px] lg:min-h-[560px] rounded-3xl overflow-hidden shadow-2xl bg-slate-950 flex items-center justify-center border border-slate-700/50 group">
        {/* Background Image with YouTube Thumbnail & Campus Ambience */}
        <div className="absolute inset-0">
          <Image
            src="/csr_youtube_thumb.jpg"
            alt="Tabassum Educational Alliance Video Thumbnail"
            fill
            priority
            className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out opacity-85"
          />
        </div>

        {/* Ambient Overlay Gradients - brightened & decent */}
        <div className="absolute inset-0 bg-slate-950/25 backdrop-contrast-[1.05]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/45 via-transparent to-slate-950/45" />

        {/* Top Badges */}
        <div className="absolute top-4 sm:top-6 inset-x-4 sm:inset-x-8 flex items-center justify-between z-10">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-red-600/20 border border-red-500/40 text-red-400 font-semibold text-xs tracking-wider uppercase backdrop-blur-md">
            <FaYoutube className="text-red-500 text-sm" />
            <span>Featured Video</span>
          </div>

          <span className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 text-[11px] font-semibold tracking-wider uppercase backdrop-blur-md hidden sm:inline-flex items-center gap-1.5">
            <HiSparkles className="text-amber-400" />
            HD Quality
          </span>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-8 py-12 flex flex-col items-center text-center gap-6 sm:gap-8">
          {/* Header Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-3 sm:gap-4 mt-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-berlin font-bold text-white tracking-wide leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
              Corporate Social <br /> Responsibility
            </h2>

            <p className="max-w-2xl text-xs sm:text-sm md:text-base text-slate-200/95 font-medium leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Tabassum Educational Alliance has always been a strong advocate of social responsibility and is committed to providing public and community services through wide-ranging activities.
            </p>
          </motion.div>

          {/* Central Pulsating YouTube Play Button */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex items-center justify-center my-2 sm:my-4"
          >
            {/* Outer Pulsing Wave Rings */}
            <span className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-red-600/30 animate-ping pointer-events-none" />
            <span className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-main/40 animate-pulse pointer-events-none" />

            {/* Clickable Play Button */}
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Play Corporate Social Responsibility Video"
              className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600 hover:bg-red-500 text-white backdrop-blur-md shadow-[0_0_35px_rgba(220,38,38,0.7)] flex items-center justify-center transition-all duration-300 hover:scale-110 group/btn border-2 border-white/80"
            >
              <FaPlay className="text-xl sm:text-2xl ml-1 text-white group-hover/btn:scale-110 transition-transform" />
            </button>
          </motion.div>

          {/* Direct Channel & Video Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-3 flex-wrap justify-center"
          >
            <button
              onClick={() => setIsOpen(true)}
              className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white bg-white/15 hover:bg-white/25 px-5 py-2.5 rounded-full border border-white/30 backdrop-blur-md transition-all shadow-md inline-flex items-center gap-2 hover:scale-105"
            >
              <FaPlay className="text-[10px] text-red-400" />
              <span>Watch Video</span>
            </button>

            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 px-5 py-2.5 rounded-full border border-red-500/50 shadow-[0_4px_20px_rgba(220,38,38,0.4)] transition-all inline-flex items-center gap-2 hover:scale-105"
            >
              <FaYoutube className="text-base" />
              <span>Watch On YouTube</span>
              <FaArrowUpRightFromSquare className="text-[9px]" />
            </a>

            <a
              href={officialChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700 px-4 py-2.5 rounded-full border border-slate-600/50 transition-all inline-flex items-center gap-1.5"
            >
              <span>Official Channel</span>
              <FaArrowUpRightFromSquare className="text-[9px]" />
            </a>
          </motion.div>
        </div>
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
