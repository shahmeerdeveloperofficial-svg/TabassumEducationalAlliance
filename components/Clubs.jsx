"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motherProjects } from "@/constants/projectsData";
import { FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";

const Clubs = () => {
  const sliderRef = useRef(null);

  // Smooth scroll left or right by exactly one card
  const scroll = (direction) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const firstCard = container.querySelector("[data-card-item]");
    const cardWidth = firstCard
      ? firstCard.getBoundingClientRect().width + 16
      : window.innerWidth < 640
      ? window.innerWidth * 0.84 + 16
      : 380;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const ArrayData = [...motherProjects, ...motherProjects, ...motherProjects];

  return (
    <section
      id="Curriculum"
      className="maxWSec px-4 sm:px-8 lg:px-12 py-14 flex gap-8 flex-col"
    >
      {/* Header section with Prev/Next buttons */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-main/10 border border-main/30 text-sec font-semibold text-xs tracking-wider uppercase w-max">
            <HiSparkles className="text-main" />
            <span>Network Projects</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-berlin font-bold text-slate-900 leading-tight">
            Mother Projects of <span className="text-main">TEA Regd.</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
            5 flagship academic and skills institutions operating under Tabassum Educational Alliance across Pakistan since 2008.
          </p>
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
          <Link
            href="/AboutUs"
            className="text-xs sm:text-sm font-semibold text-main hover:text-sec flex items-center gap-1 transition-colors mr-2"
          >
            <span>View All</span>
            <FaArrowRight className="text-xs" />
          </Link>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              type="button"
              aria-label="Previous Project"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-slate-700 active:scale-95 hover:bg-main hover:text-white hover:border-main transition-all duration-200 cursor-pointer touch-manipulation"
            >
              <FaChevronLeft className="text-sm" />
            </button>
            <button
              onClick={() => scroll("right")}
              type="button"
              aria-label="Next Project"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-slate-700 active:scale-95 hover:bg-main hover:text-white hover:border-main transition-all duration-200 cursor-pointer touch-manipulation"
            >
              <FaChevronRight className="text-sm" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Carousel (Butter-smooth Touch Swiping & Button Control) */}
      <div
        ref={sliderRef}
        className="w-full overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div className="flex gap-4 sm:gap-6 w-max py-2 px-1">
          {ArrayData.map((item, i) => (
            <Link
              key={i}
              href={item.slug}
              data-card-item="true"
              className="block shrink-0 snap-center select-none"
            >
              <div
                className="w-[84vw] max-w-[340px] sm:w-[360px] lg:w-[400px] h-[380px] sm:h-[440px] rounded-3xl overflow-hidden relative shadow-lg hover:shadow-2xl border border-slate-200/90 transition-all duration-300 group bg-slate-900 flex flex-col justify-between p-5 sm:p-7"
              >
                {/* Background Photo */}
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 84vw, 400px"
                  className="object-cover object-center opacity-95 transition-transform duration-700 group-hover:scale-105"
                />

                {/* Bottom Gradient for Text Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20 z-[1]" />

                {/* Card Top: Monogram & Tag */}
                <div className="relative z-10 flex items-center justify-between w-full">
                  {/* MONOGRAM EMBLEM */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white shadow-xl p-1.5 sm:p-2 border border-slate-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={item.monogram}
                      alt={`${item.name} monogram`}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold shadow-lg uppercase tracking-wider bg-black/75 backdrop-blur-md border border-white/30 text-white">
                    Project {item.number}
                  </span>
                </div>

                {/* Card Bottom: School Name & Tagline */}
                <div className="relative z-10 mt-auto pt-3 sm:pt-4">
                  <div className="text-[10px] sm:text-[11px] font-semibold text-sky-300 uppercase tracking-wider mb-1">
                    Tabassum Educational Alliance
                  </div>
                  <h3
                    style={{ textShadow: "0 2px 8px rgba(0,0,0,0.85)" }}
                    className="font-berlin text-lg sm:text-2xl lg:text-3xl leading-snug text-white font-bold group-hover:text-sky-300 transition-colors drop-shadow-md"
                  >
                    {item.name}
                  </h3>
                  <p
                    style={{ textShadow: "0 1px 6px rgba(0,0,0,0.85)" }}
                    className="mt-1 sm:mt-2 text-xs sm:text-sm text-white/95 line-clamp-2 leading-relaxed drop-shadow"
                  >
                    {item.tagline}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clubs;
