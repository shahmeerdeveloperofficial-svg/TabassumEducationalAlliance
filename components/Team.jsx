"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { boardOfDirectors } from "@/constants/directorsData";
import { FaGraduationCap, FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";

export default function Team() {
  const sliderRef = useRef(null);

  // Smooth scroll left or right by exactly one card
  const scroll = (direction) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const firstCard = container.querySelector("[data-director-card]");
    const cardWidth = firstCard
      ? firstCard.getBoundingClientRect().width + 16
      : window.innerWidth < 640
      ? window.innerWidth * 0.84 + 16
      : 320;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
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

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-berlin font-bold text-slate-900 leading-tight">
          Board of <span className="text-main">Directors</span>
        </h2>

        <p className="max-w-2xl text-slate-600 text-xs sm:text-sm sm:text-base leading-relaxed">
          Distinguished academic leaders, legal advisors, and educators shaping the strategic vision, quality standards, and future of Tabassum Educational Alliance since 2008.
        </p>

        {/* Carousel Controls */}
        <div className="flex items-center justify-between w-full mt-2 sm:mt-4">
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
                type="button"
                aria-label="Previous director"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-slate-700 active:scale-95 hover:bg-main hover:text-white hover:border-main transition-all duration-200 cursor-pointer touch-manipulation"
              >
                <FaChevronLeft className="text-sm" />
              </button>
              <button
                onClick={() => scroll("right")}
                type="button"
                aria-label="Next director"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-slate-700 active:scale-95 hover:bg-main hover:text-white hover:border-main transition-all duration-200 cursor-pointer touch-manipulation"
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
        className="w-full overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div className="flex gap-4 sm:gap-6 w-max py-2 px-1">
          {boardOfDirectors.map((member, index) => (
            <div
              key={member.id}
              data-director-card="true"
              className="w-[84vw] max-w-[320px] sm:w-[310px] flex flex-col group select-none bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-2xl hover:shadow-sky-500/15 hover:border-sky-400/80 hover:-translate-y-1.5 transition-all duration-500 overflow-hidden shrink-0 snap-center relative"
            >
              {/* Director Photo Frame with Animated TEA Theme Background */}
              <div className="relative aspect-[6/7] w-full bg-gradient-to-b from-sky-50/90 via-slate-50/70 to-white overflow-hidden">
                {/* Dynamic Theme Glow Aura */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(0,162,232,0.22)_0%,rgba(0,59,122,0.08)_55%,transparent_100%)] opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700 ease-out pointer-events-none" />

                {/* Floating Subtle Ambient Color Orbs */}
                <div className="absolute -top-10 -right-10 w-36 h-36 bg-sky-400/25 rounded-full blur-2xl group-hover:bg-sky-400/40 group-hover:scale-110 transition-all duration-700 pointer-events-none" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-main/20 rounded-full blur-xl group-hover:bg-main/35 transition-all duration-700 pointer-events-none" />

                {/* Elegant Architectural Prestige Rings */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full border border-sky-300/30 group-hover:border-sky-400/60 group-hover:scale-110 transition-all duration-700 pointer-events-none" />
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full border border-dashed border-sky-200/40 group-hover:rotate-45 transition-transform duration-1000 pointer-events-none" />

                {/* Director Portrait Image */}
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 84vw, 310px"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 relative z-[2]"
                  priority={index < 3}
                />

                {/* Shimmer Light Sweep on Hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/35 to-transparent z-[3] pointer-events-none" />

                {/* Soft Bottom Gradient Seamless Blend */}
                <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white via-white/60 to-transparent z-[4] pointer-events-none" />
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
                  {member.qualification && (
                    <div className="mt-1 flex items-start gap-1.5 p-2 rounded-lg bg-amber-50 border border-amber-200/70 text-amber-900 text-xs font-medium">
                      <FaGraduationCap className="text-amber-600 text-sm shrink-0 mt-0.5" />
                      <span className="line-clamp-2 leading-tight font-semibold">
                        {member.qualification}
                      </span>
                    </div>
                  )}

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
