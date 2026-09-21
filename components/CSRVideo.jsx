"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaXmark, FaYoutube, FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function CSRVideo() {
  const [isOpen, setIsOpen] = useState(false);
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
      {/* Outer Banner Card */}
      <div className="relative w-full min-h-[380px] sm:min-h-[440px] md:min-h-[500px] lg:min-h-[560px] rounded-3xl overflow-hidden shadow-2xl bg-slate-900 flex items-center justify-center border border-slate-700/40 group">
        {/* School Building Background Image */}
        <Image
          src="/hero7.jpg"
          alt="Tabassum Educational Alliance Campus Building"
          fill
          priority
          className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
        />

        {/* Ambient Overlay Gradients matching screenshot style */}
        <div className="absolute inset-0 bg-slate-950/50 backdrop-contrast-[1.05]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/40 via-transparent to-navy-950/40" />

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-8 py-10 flex flex-col items-center text-center gap-6 sm:gap-8">
          {/* Header Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-3 sm:gap-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-berlin font-bold text-white tracking-wide leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              Corporate Social <br /> Responsibility
            </h2>

            <p className="max-w-2xl text-xs sm:text-sm md:text-base text-slate-200/95 font-medium leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Tabassum Educational Alliance has always been a strong advocate of social responsibility and is committed to providing public and community services through wide-ranging activities.
            </p>
          </motion.div>

          {/* Central Pulsating Play Button */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex items-center justify-center my-2 sm:my-4"
          >
            {/* Outer Pulsing Wave Rings */}
            <span className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/20 animate-ping pointer-events-none" />
            <span className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-main/30 animate-pulse pointer-events-none" />

            {/* Clickable Play Button */}
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Play Corporate Social Responsibility Video"
              className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 hover:bg-white text-dark hover:text-main backdrop-blur-md shadow-[0_0_30px_rgba(0,162,232,0.6)] flex items-center justify-center transition-all duration-300 hover:scale-110 group/btn border-2 border-white/60"
            >
              <FaPlay className="text-xl sm:text-2xl ml-1 text-slate-800 group-hover/btn:text-main transition-colors" />
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
              className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-sky-200 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm transition inline-flex items-center gap-2"
            >
              <FaPlay className="text-[10px]" />
              <span>Watch Video</span>
            </button>

            <a
              href={officialChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white bg-red-600/90 hover:bg-red-600 px-4 py-2 rounded-full border border-red-500/40 shadow-lg transition inline-flex items-center gap-2 hover:scale-105"
            >
              <FaYoutube className="text-sm" />
              <span>Official YouTube Channel</span>
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
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
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
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-main text-white flex items-center justify-center transition-all duration-200 border border-white/30 backdrop-blur-sm shadow-md"
              >
                <FaXmark className="text-lg" />
              </button>

              {/* YouTube Player / Channel Stream */}
              <iframe
                src="https://www.youtube.com/embed?listType=user_uploads&list=tabassumeducationalalliancereg"
                title="Tabassum Educational Alliance Official YouTube"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />

              {/* Bottom Bar with Channel Link */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 flex items-center justify-between pointer-events-auto">
                <span className="text-xs text-slate-300 font-medium hidden sm:inline">
                  Tabassum Educational Alliance Regd.
                </span>
                <a
                  href={officialChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-white bg-red-600 hover:bg-red-700 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 ml-auto shadow-md transition"
                >
                  <FaYoutube />
                  <span>Subscribe on YouTube</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
