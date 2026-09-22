"use client";

import React from "react";
import Tag from "./ui/Tag";
import Button from "./ui/Button";
import Link from "next/link";
import Image from "next/image";
import { motherProjects, alliesProjects } from "@/constants/projectsData";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaAward,
  FaGlobe,
  FaArrowRight,
  FaSchool,
  FaBookOpen,
} from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";

const Bento = () => {
  return (
    <section
      id="About"
      className="maxWSec px-4 sm:px-8 lg:px-12 py-14 flex gap-10 flex-col"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center gap-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-main/10 border border-main/30 text-sec font-semibold text-xs sm:text-sm tracking-wide uppercase">
          <HiSparkles className="text-main text-base" />
          <span>About Tabassum Educational Alliance</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-berlin font-bold text-center text-slate-900 leading-tight">
          Welcome to <span className="text-main">Tabassum Educational Alliance Regd.</span>
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed">
          The Fastest Growing Educational Network All Over Pakistan — Delivering quality education, moral character, and future-ready skills since 2008.
        </p>
      </div>

      {/* TOP ROW: 2 Perfectly Equal-Height Cards (Mission Statement & TEA Flagship Vision) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Top Left: Mission Statement Card (7 cols) */}
        <div className="lg:col-span-7 group/card p-6 sm:p-8 rounded-3xl bg-main text-light relative overflow-hidden shadow-lg flex flex-col justify-between">
          <Image
            src="/book.svg"
            width="400"
            height="400"
            alt="book"
            className="transition-all duration-700 group-hover/card:scale-105 origin-bottom-right absolute right-0 bottom-0 w-80 translate-x-[5%] translate-y-[15%] opacity-15 pointer-events-none"
          />
          <div className="flex flex-col gap-3 relative z-10">
            <Tag><p className="font-bold">Mission Statement</p></Tag>
            <p className="text-sm sm:text-base leading-relaxed text-white font-medium">
              Our mission is to develop a progressive, accessible and value-based educational network that empowers learners with knowledge, character, confidence and practical skills necessary to succeed in a rapidly changing world.
            </p>
            <p className="font-semibold text-white text-xs sm:text-sm uppercase tracking-wider pt-1">
              We are committed to:
            </p>
            <ul className="leading-relaxed list-disc list-inside text-xs sm:text-sm space-y-1 text-white/95">
              <li><strong>Providing Quality Education</strong> through effective teaching & learner-focused environments.</li>
              <li><strong>Building Character</strong> by promoting discipline, integrity, respect and positive social values.</li>
              <li><strong>Developing Future-Ready Skills</strong> through technology, digital education & professional training.</li>
              <li><strong>Empowering Educators</strong> through collaboration & continuous improvement in teaching.</li>
              <li><strong>Promoting Innovation</strong> by embracing modern educational methods and technology.</li>
              <li><strong>Supporting Holistic Development</strong> giving equal importance to academic, moral & social growth.</li>
              <li><strong>Serving Society</strong> by making education a means of empowerment and national development.</li>
            </ul>
          </div>

          <div className="flex justify-end pt-4 relative z-10">
            <Link href={"/OnlineAdmission"}>
              <Button btnType="sec">
                <span>Online Admission</span>
                <svg
                  className="h-auto w-4 ml-1"
                  viewBox="0 0 18 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.7604 6.15482C18.0799 6.47301 18.0799 6.9889 17.7604 7.30709L12.5535 12.4923C12.234 12.8105 11.7159 12.8105 11.3964 12.4923C11.0769 12.1741 11.0769 11.6582 11.3964 11.34L15.2066 7.54574L0.818181 7.54574C0.366311 7.54574 -1.42215e-06 7.18095 -1.38281e-06 6.73096C-1.34347e-06 6.28097 0.366311 5.91618 0.818181 5.91618L15.2066 5.91618L11.3964 2.12187C11.0769 1.80368 11.0769 1.28779 11.3964 0.969602C11.7159 0.651411 12.234 0.651411 12.5535 0.969602L17.7604 6.15482Z"
                    fill="#fff"
                  />
                </svg>
              </Button>
            </Link>
          </div>
        </div>

        {/* Top Right: TEA Flagship Vision Card (5 cols - Exactly Matching Height) */}
        <div className="lg:col-span-5 rounded-3xl bg-slate-900 text-light overflow-hidden relative flex flex-col justify-between p-6 sm:p-8 shadow-xl border border-slate-800 group">
          {/* Background Campus Photo */}
          <Image
            src="/tea_student1.jpg"
            alt="TEA Campus Students"
            fill
            className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40 pointer-events-none" />

          {/* Top Header in Card */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-white p-1 shadow-md flex items-center justify-center">
                <Image
                  src="/monograms/tea_main.jpg"
                  alt="TEA Monogram"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-berlin text-xl font-bold text-white leading-none">TEA Regd.</span>
                <span className="text-[10px] font-semibold text-amber-400">Since 2008</span>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-main/20 border border-main/40 text-sky-300 text-[11px] font-bold uppercase tracking-wider">
              Apex Alliance
            </span>
          </div>

          {/* Center Content */}
          <div className="relative z-10 py-6 text-center sm:text-left flex flex-col gap-3">
            <p className="text-main font-berlin text-4xl sm:text-5xl font-bold tracking-tight drop-shadow-md">
              TEA <span className="text-white">Pakistan</span>
            </p>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed drop-shadow">
              The Fastest Growing Educational Network All Over Pakistan. Dedicated to academic excellence, digital empowerment, and values-based character development.
            </p>
          </div>

          {/* Key Metric Highlights Grid */}
          <div className="relative z-10 grid grid-cols-2 gap-2.5 pt-2 border-t border-white/10">
            <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center gap-2">
              <FaAward className="text-amber-400 text-lg shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white">16+ Years</span>
                <span className="text-[10px] text-slate-300">Of Educational Trust</span>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center gap-2">
              <FaSchool className="text-sky-400 text-lg shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white">10 Institutions</span>
                <span className="text-[10px] text-slate-300">Projects & Allies</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM ROW: 3 Symmetrical, Equal-Height Blocks (Mother Projects, Our Allies, Key Pillars) */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
        {/* Block 1: Mother Projects (Dark Navy Card) */}
        <div className="group/card rounded-3xl bg-sec text-light p-6 sm:p-7 relative overflow-hidden shadow-lg border border-slate-700/50 flex flex-col justify-between">
          <Image
            src="/speaker.svg"
            width="400"
            height="400"
            alt="speaker"
            className="transition-all duration-700 group-hover/card:scale-110 origin-bottom-right absolute right-0 bottom-0 w-36 translate-x-[5%] translate-y-[5%] opacity-10 pointer-events-none"
          />
          <div className="flex flex-col gap-4 relative z-10">
            <div className="flex items-center justify-between">
              <Tag><p className="font-bold">Mother Projects</p></Tag>
              <span className="text-[10px] font-semibold text-slate-300">TEA Network</span>
            </div>

            <div className="flex flex-col gap-2">
              {motherProjects.slice(0, 5).map((item) => (
                <Link
                  key={item.id}
                  href={item.slug}
                  className="w-full text-light flex items-center gap-3 p-2 rounded-xl bg-white/5 hover:bg-white/15 transition-all duration-300 border border-white/10 group/item"
                >
                  <div className="w-8 h-8 rounded-lg bg-white p-1 shrink-0 flex items-center justify-center shadow-sm">
                    <Image
                      src={item.monogram}
                      alt={item.name}
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs font-semibold group-hover/item:text-sky-300 transition-colors line-clamp-1">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex justify-end relative z-10">
            <Link
              href="/AboutUs"
              className="text-xs text-sky-200 hover:text-white font-semibold flex items-center gap-1.5 transition-colors"
            >
              <span>Explore All Projects</span>
              <FaArrowRight className="text-[10px]" />
            </Link>
          </div>
        </div>

        {/* Block 2: Our Allies (Sky Cyan Card) */}
        <div className="group/card rounded-3xl bg-main text-white p-6 sm:p-7 relative overflow-hidden shadow-lg flex flex-col justify-between">
          <Image
            src="/spark.svg"
            width="400"
            height="400"
            alt="spark"
            className="transition-all duration-700 group-hover/card:scale-110 origin-bottom-right absolute right-0 bottom-0 w-40 translate-x-[5%] translate-y-[5%] opacity-15 pointer-events-none"
          />
          <div className="relative z-10 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <Tag><p className="font-bold">Our Allies</p></Tag>
              <span className="text-[10px] font-semibold text-sky-100">Collaborative</span>
            </div>

            <p className="text-xs font-medium text-sky-50 leading-relaxed">
              Respected institutional allies and partner networks across Pakistan:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {alliesProjects.map((ally) => (
                <div
                  key={ally.id}
                  className="flex items-center gap-2.5 p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15"
                >
                  <div className="w-7 h-7 rounded-full bg-white p-1 shrink-0 flex items-center justify-center shadow-sm">
                    <Image
                      src={ally.monogram}
                      alt={ally.name}
                      width={28}
                      height={28}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs font-semibold line-clamp-1">{ally.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/15 flex justify-end relative z-10">
            <Link
              href="/AboutUs"
              className="text-xs text-white hover:text-slate-900 font-semibold flex items-center gap-1.5 transition-colors"
            >
              <span>View Partners</span>
              <FaArrowRight className="text-[10px]" />
            </Link>
          </div>
        </div>

        {/* Block 3: Key Pillars & Academic Excellence (Slate/Navy Card - Matching Height & Shape) */}
        <div className="group/card rounded-3xl bg-slate-900 text-white p-6 sm:p-7 relative overflow-hidden shadow-lg border border-slate-800 flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-48 h-48 bg-main/15 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <FaGraduationCap className="text-amber-400" />
                <span>Excellence Pillars</span>
              </div>
              <span className="text-[10px] font-semibold text-slate-400">TEA Standard</span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Core academic standards and progressive development frameworks:
            </p>

            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <FaBookOpen className="text-sm" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white">STEM & Concept Learning</span>
                  <span className="text-[10px] text-slate-400">Activity-based conceptual syllabus</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-sky-400/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <FaLaptopCode className="text-sm" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white">IT & AI Skills Training</span>
                  <span className="text-[10px] text-slate-400">Modern computing & software tools</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-400/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <FaGlobe className="text-sm" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white">Character & Moral Values</span>
                  <span className="text-[10px] text-slate-400">Ethical grooming & national leadership</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 flex justify-end relative z-10">
            <Link
              href="/OnlineAdmission"
              className="text-xs text-amber-300 hover:text-amber-200 font-semibold flex items-center gap-1.5 transition-colors"
            >
              <span>Apply for Admission</span>
              <FaArrowRight className="text-[10px]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bento;
