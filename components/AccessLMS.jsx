"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";

const AccessLMS = () => {
  return (
    <section id="LMS" className="maxWSec w-full px-4 sm:px-8 lg:px-12 py-14 flex">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between rounded-3xl bg-[#fdfbf7] border border-amber-200/60 shadow-lg overflow-hidden p-6 sm:p-10 lg:p-14 gap-8 relative group">
        {/* Soft Background Decorative Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-main/10 rounded-full blur-3xl pointer-events-none" />

        {/* Left Content Area */}
        <div className="flex-1 flex flex-col justify-center gap-5 z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 font-semibold text-xs tracking-wider uppercase w-max">
            <HiSparkles className="text-amber-500" />
            <span>Smart Campus & LMS Portal</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-berlin font-bold text-slate-900 leading-tight">
            Digitizing <br />
            <span className="text-main">TEA Regd.</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
            Empowering students with essential digital skills while also modelling exemplary social and moral behavior, preparing them to be responsible, triumphant leaders on a national and worldwide scale.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/OnlineAdmission"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm sm:text-base shadow-md hover:shadow-amber-500/30 transition-all duration-300 group/btn"
            >
              <span>Access Parent Portal</span>
              <FaArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/Careers"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-slate-950 hover:bg-slate-800 text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-slate-900/30 transition-all duration-300 group/btn"
            >
              <span>Access Staff Portal</span>
              <FaArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right Animated LMS Graphic Area */}
        <div className="flex-1 w-full flex justify-center items-center z-10">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [-6, 6, -6] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-full max-w-[460px] aspect-square flex items-center justify-center p-4"
          >
            <Image
              src="/lms.png"
              alt="Digitizing TEA Learning Management System"
              width={500}
              height={500}
              className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AccessLMS;
