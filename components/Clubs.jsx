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
      ? firstCard.getBoundingClientRect().width + 20
      : window.innerWidth < 640
      ? window.innerWidth * 0.86 + 20
      : 360;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

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
            <span>Institutional Network</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-berlin font-bold text-slate-900 leading-tight">
            Mother Projects of <span className="text-main">TEA Regd.</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
            Flagship academic and skill institutions operating under Tabassum Educational Alliance across Pakistan.
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

      {/* Horizontal Carousel (Prominent Monogram Top + Name Below) */}
      <div
        ref={sliderRef}
        className="w-full overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-6 pt-2"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div className="flex gap-5 sm:gap-6 w-max py-2 px-1">
          {motherProjects.map((item) => (
            <div
              key={item.id}
              data-card-item="true"
              className="block shrink-0 snap-center select-none"
            >
              <div
                className={`w-[86vw] max-w-[330px] sm:w-[350px] lg:w-[370px] min-h-[420px] rounded-3xl bg-white border ${item.border} p-6 sm:p-7 flex flex-col items-center text-center justify-between relative overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group hover:-translate-y-1.5`}
              >
                {/* Ambient Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${item.gradient} opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                {/* Top Badge: Project Number */}
                <div className="relative z-10 w-full flex justify-between items-center mb-2">
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider uppercase border ${item.badgeColor}`}
                  >
                    Project {item.number}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400">TEA Regd.</span>
                </div>

                {/* 1. PROMINENT MONOGRAM / LOGO (TOP) */}
                <div className="relative z-10 my-3">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-white shadow-lg border border-slate-100 p-3 flex items-center justify-center group-hover:scale-110 group-hover:shadow-2xl transition-all duration-500">
                    <Image
                      src={item.monogram}
                      alt={`${item.name} monogram`}
                      width={128}
                      height={128}
                      className="w-full h-full object-contain drop-shadow"
                    />
                  </div>
                </div>

                {/* 2. SCHOOL NAME & DETAILS (BELOW LOGO) */}
                <div className="relative z-10 flex flex-col gap-2 mt-2 w-full flex-grow justify-between">
                  <div>
                    <h3 className="font-berlin text-xl sm:text-2xl font-bold text-slate-900 leading-snug group-hover:text-main transition-colors">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                      {item.tagline}
                    </p>
                  </div>

                  {/* Bottom Link */}
                  <div className="pt-4 mt-3 border-t border-slate-100 w-full flex items-center justify-center">
                    <Link
                      href={item.slug}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-main hover:text-sec transition-colors"
                    >
                      <span>Explore Details</span>
                      <FaArrowRight className="text-[10px]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clubs;
