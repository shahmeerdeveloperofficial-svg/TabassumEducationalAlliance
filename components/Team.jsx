"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { boardOfDirectors } from "@/constants/directorsData";
import { FaGraduationCap, FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";

export default function Team() {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      if (isPaused || !slider) return;

      slider.scrollLeft += 1;

      // Infinite loop effect when reaching halfway through duplicated items
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      }
    }, 28);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Smooth scroll left or right by exactly one card
  const scroll = (direction) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const cardWidth = window.innerWidth < 640 ? container.clientWidth * 0.88 + 16 : 330;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  // Track active card index for dots indicator on mobile
  const handleScroll = () => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const cardWidth = window.innerWidth < 640 ? container.clientWidth * 0.88 + 16 : 330;
    const newIndex = Math.round(container.scrollLeft / cardWidth) % boardOfDirectors.length;
    setCurrentIndex(newIndex);
  };

  return (
    <section
      id="BoardOfDirectors"
      className="maxWSec px-4 sm:px-8 lg:px-12 py-16 flex flex-col gap-10"
    >
      {/* Header section */}
      <div className="flex flex-col items-center text-center gap-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-main/10 border border-main/30 text-sec font-semibold text-xs sm:text-sm tracking-wide uppercase">
          <HiSparkles className="text-main text-base" />
          <span>Tabassum Educational Alliance Regd.</span>
        </div>

        <h2 className="h2 text-slate-900 leading-tight">
          Board of <span className="text-main">Directors</span>
        </h2>

        <p className="max-w-2xl text-slate-600 text-xs sm:text-sm sm:text-base">
          Distinguished academic leaders, legal advisors, and educators shaping the strategic vision, quality standards, and future of Tabassum Educational Alliance since 2008.
        </p>

        {/* Carousel Controls */}
        <div className="flex items-center justify-between w-full mt-4">
          <div className="text-xs sm:text-sm text-slate-500 font-medium hidden sm:block">
            Scroll or drag to explore all {boardOfDirectors.length} board members
          </div>
          <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto">
            <Link
              href="/BoardOfDirectors"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-main hover:text-sec transition-colors mr-2"
            >
              <span>View Full Directory</span>
              <FaArrowRight className="text-xs" />
            </Link>
            <div className="flex gap-2">
              <button
                onClick={() => scroll("left")}
                aria-label="Previous director"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-slate-700 hover:bg-main hover:text-white hover:border-main transition-all duration-200"
              >
                <FaChevronLeft className="text-sm" />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Next director"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-slate-700 hover:bg-main hover:text-white hover:border-main transition-all duration-200"
              >
                <FaChevronRight className="text-sm" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Carousel Slider (1 Card on Mobile, Responsive Cards on Desktop) */}
      <div
        ref={sliderRef}
        onScroll={handleScroll}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="w-full overflow-x-auto no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing pb-4 snap-x sm:snap-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex gap-4 sm:gap-6 w-max py-2">
          {[...boardOfDirectors, ...boardOfDirectors].map((member, index) => (
            <div
              key={`${member.id}-${index}`}
              className="w-[86vw] max-w-[320px] sm:w-[310px] flex flex-col group select-none bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-main/60 transition-all duration-300 overflow-hidden shrink-0 snap-center"
            >
              {/* Director Photo Frame */}
              <div className="relative aspect-[6/7] w-full bg-slate-50 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 86vw, 310px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  priority={index < 3}
                />
              </div>

              {/* Card Details */}
              <div className="p-5 flex flex-col flex-grow justify-between gap-3 bg-white">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-semibold text-main uppercase tracking-wider line-clamp-1">
                      {member.department}
                    </span>
                    <span className="shrink-0 px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-medium text-slate-600">
                      TEA Regd.
                    </span>
                  </div>

                  <h3 className="font-berlin text-xl font-bold text-slate-900 group-hover:text-main transition-colors">
                    {member.name}
                  </h3>

                  {/* Qualification Badge */}
                  <div className="mt-1 flex items-start gap-1.5 p-2 rounded-lg bg-amber-50 border border-amber-200/70 text-amber-900 text-xs font-medium">
                    <FaGraduationCap className="text-amber-600 text-sm shrink-0 mt-0.5" />
                    <span className="line-clamp-2 leading-tight font-semibold">
                      {member.qualification}
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {member.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 font-medium">Board of Directors</span>
                  <Link
                    href="/BoardOfDirectors"
                    className="font-semibold text-main hover:text-sec flex items-center gap-1"
                  >
                    <span>Details</span>
                    <FaArrowRight className="text-[9px]" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Dots Indicator */}
      <div className="flex sm:hidden items-center justify-center gap-1.5 pt-1">
        {boardOfDirectors.map((_, dotIdx) => (
          <div
            key={dotIdx}
            className={`h-2 rounded-full transition-all duration-300 ${
              dotIdx === currentIndex
                ? "w-6 bg-main"
                : "w-2 bg-slate-300"
            }`}
          />
        ))}
      </div>

      {/* Bottom Call to Action */}
      <div className="mt-2 flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-sec/90 via-sec to-secD text-white shadow-xl gap-4">
        <div className="flex flex-col gap-1 text-center sm:text-left">
          <h4 className="font-berlin text-2xl tracking-wide">
            Visionary Leadership for Quality Education
          </h4>
          <p className="text-xs sm:text-sm text-sky-100/80 max-w-xl">
            Our Board of Directors oversees Oxford Progressive Schools, IQRA Madinat-Ul-Atfal, Tabassum I.T & Skills Center, and affiliated educational programs across Pakistan.
          </p>
        </div>
        <Link
          href="/BoardOfDirectors"
          className="shrink-0 px-6 py-3 rounded-full bg-main hover:bg-mainD text-white text-xs sm:text-sm font-semibold shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center gap-2"
        >
          <span>Explore All 9 Directors</span>
          <FaArrowRight className="text-xs" />
        </Link>
      </div>
    </section>
  );
}
