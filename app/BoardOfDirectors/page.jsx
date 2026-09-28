"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeroHeader from "@/components/HeroHeader";
import { boardOfDirectors } from "@/constants/directorsData";
import {
  FaGraduationCap,
  FaAward,
  FaBuildingColumns,
  FaShieldHalved,
  FaUsersGear,
  FaArrowRight,
} from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";

export default function BoardOfDirectorsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeModalMember, setActiveModalMember] = useState(null);

  const categories = [
    { id: "all", label: "All Directors" },
    { id: "tech", label: "Technology & STEM" },
    { id: "academics", label: "Sciences & Higher Education" },
    { id: "legal", label: "Law & Governance" },
    { id: "commerce", label: "Commerce & Management" },
  ];

  const filteredDirectors = boardOfDirectors.filter((member) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "tech") {
      return (
        member.qualification.includes("Eng") ||
        member.qualification.includes("Math") ||
        member.qualification.includes("Artificial Intelligence") ||
        member.qualification.includes("I.T") ||
        member.department.includes("IT") ||
        member.department.includes("Artificial Intelligence")
      );
    }
    if (selectedCategory === "academics") {
      return (
        member.qualification.includes("Biological") ||
        member.qualification.includes("Physics") ||
        member.qualification.includes("Urdu") ||
        member.department.includes("Academic") ||
        member.department.includes("Student")
      );
    }
    if (selectedCategory === "legal") {
      return member.qualification.includes("L.L.B");
    }
    if (selectedCategory === "commerce") {
      return member.qualification.includes("M.Com");
    }
    return true;
  });

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Header */}
      <HeroHeader
        title="Board of Directors"
        description="Tabassum Educational Alliance Regd. — Established Since 2008"
      />

      <div className="maxWSec px-4 sm:px-8 lg:px-12 py-12 flex flex-col gap-12">
        {/* Intro Banner */}
        <div className="bg-gradient-to-br from-sec via-secD to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-72 h-72 bg-main/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-main/20 border border-main/40 text-sky-300 font-semibold text-xs tracking-wider uppercase w-max">
              <HiSparkles className="text-main" />
              <span>Leadership & Strategic Governance</span>
            </div>

            <h1 className="font-berlin text-3xl sm:text-5xl font-bold tracking-wide text-white">
              Guiding the Nation’s Fastest Growing Educational Network
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              The Board of Directors at Tabassum Educational Alliance Regd. comprises renowned educationists, legal luminaries, STEM professionals, AI specialists, and management experts dedicated to fostering academic excellence, moral integrity, and practical skills for thousands of students across Pakistan.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10 mt-2">
              <div className="flex flex-col">
                <span className="font-berlin text-3xl text-main font-bold">11</span>
                <span className="text-xs text-slate-300">Board Members</span>
              </div>
              <div className="flex flex-col">
                <span className="font-berlin text-3xl text-amber-400 font-bold">2008</span>
                <span className="text-xs text-slate-300">Founded Year</span>
              </div>
              <div className="flex flex-col">
                <span className="font-berlin text-3xl text-sky-400 font-bold">5+</span>
                <span className="text-xs text-slate-300">Mother Projects</span>
              </div>
              <div className="flex flex-col">
                <span className="font-berlin text-3xl text-emerald-400 font-bold">100%</span>
                <span className="text-xs text-slate-300">Registered & Accredited</span>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 shadow-sm ${
                selectedCategory === cat.id
                  ? "bg-main text-white shadow-main/20 shadow-md font-semibold"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Board of Directors Grid (9 Members) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDirectors.map((director) => (
            <div
              key={director.id}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-2xl hover:shadow-sky-500/15 hover:border-sky-400/80 hover:-translate-y-2 transition-all duration-500 flex flex-col overflow-hidden group relative"
            >
              {/* Image Container with Animated TEA Theme Background */}
              <div className="relative aspect-[6/7] w-full bg-gradient-to-b from-sky-50/90 via-slate-50/70 to-white overflow-hidden">
                {/* Dynamic Theme Glow Aura */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(0,162,232,0.22)_0%,rgba(0,59,122,0.08)_55%,transparent_100%)] opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700 ease-out pointer-events-none" />

                {/* Floating Subtle Ambient Color Orbs */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-sky-400/25 rounded-full blur-2xl group-hover:bg-sky-400/40 group-hover:scale-110 transition-all duration-700 pointer-events-none" />
                <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-main/20 rounded-full blur-xl group-hover:bg-main/35 transition-all duration-700 pointer-events-none" />

                {/* Elegant Architectural Prestige Rings */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-52 h-52 rounded-full border border-sky-300/30 group-hover:border-sky-400/60 group-hover:scale-110 transition-all duration-700 pointer-events-none" />
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-44 h-44 rounded-full border border-dashed border-sky-200/40 group-hover:rotate-45 transition-transform duration-1000 pointer-events-none" />

                {/* Director Portrait Image */}
                <Image
                  src={director.image}
                  alt={director.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 relative z-[2]"
                  priority={director.id <= 3}
                />

                {/* Shimmer Light Sweep on Hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/35 to-transparent z-[3] pointer-events-none" />

                {/* Soft Bottom Gradient Seamless Blend */}
                <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white via-white/60 to-transparent z-[4] pointer-events-none" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-main uppercase tracking-wider line-clamp-1">
                      {director.department}
                    </span>
                    <span className="shrink-0 px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-semibold text-slate-700">
                      Director
                    </span>
                  </div>

                  <h3 className="font-berlin text-2xl font-bold text-slate-900 group-hover:text-main transition-colors">
                    {director.name}
                  </h3>

                  {/* Qualification */}
                  {director.qualification && (
                    <div className="inline-flex items-start gap-2 p-2.5 rounded-xl bg-amber-50 border border-amber-200/70 text-amber-900 text-xs font-medium">
                      <FaGraduationCap className="text-amber-600 text-base shrink-0 mt-0.5" />
                      <span className="leading-tight font-semibold">{director.qualification}</span>
                    </div>
                  )}

                  <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                    {director.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-400">
                    Governance & Policy Council
                  </span>
                  <button
                    onClick={() => setActiveModalMember(director)}
                    className="text-xs font-semibold text-main hover:text-sec flex items-center gap-1 transition-colors"
                  >
                    <span>View Profile</span>
                    <FaArrowRight className="text-[10px]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Board Governance & Roles Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-3">
            <div className="w-12 h-12 rounded-xl bg-main/10 text-main flex items-center justify-center text-xl">
              <FaBuildingColumns />
            </div>
            <h4 className="font-berlin text-xl font-bold text-slate-900">
              Academic Excellence
            </h4>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Standardizing rigorous curriculum, STEM pedagogy, scientific laboratories, and examination methodologies across all affiliated campuses and partner institutions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center text-xl">
              <FaShieldHalved />
            </div>
            <h4 className="font-berlin text-xl font-bold text-slate-900">
              Governance & Integrity
            </h4>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Establishing institutional policies, compliance, ethical standards, student welfare protocols, and maintaining transparent administrative oversight.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center text-xl">
              <FaUsersGear />
            </div>
            <h4 className="font-berlin text-xl font-bold text-slate-900">
              Network Expansion
            </h4>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Driving sustainable growth of Oxford Progressive Schools, IQRA Madinat-Ul-Atfal, and Tabassum I.T & Skills Centers nationwide since 2008.
            </p>
          </div>
        </div>

        {/* Mother Projects Banner */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-main">
              <FaAward />
              <span>Network Affiliations & Projects</span>
            </div>
            <h3 className="font-berlin text-2xl sm:text-3xl font-bold text-slate-900">
              Supervising Quality Institutions Across Pakistan
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              The Board of Directors oversees Oxford Progressive Schools Regd., IQRA Madinat-Ul-Atfal Group of Schools Regd., Tabassum I.T & Skills Center, Idara Taleemat-e-Nabawia Lahore, and NEST (National Educational School for Triumph).
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/AboutUs"
              className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold text-center transition-colors"
            >
              Learn More About TEA
            </Link>
            <Link
              href="/ContactUs"
              className="px-6 py-3 rounded-xl bg-main hover:bg-mainD text-white text-sm font-semibold text-center shadow-md transition-colors"
            >
              Contact Board Office
            </Link>
          </div>
        </div>
      </div>

      {/* Modal Profile Popup */}
      {activeModalMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl sm:rounded-3xl max-w-lg w-full max-h-[90dvh] overflow-y-auto shadow-2xl border border-slate-100 relative animate-scaleUp">
            <button
              onClick={() => setActiveModalMember(null)}
              aria-label="Close modal"
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center transition"
            >
              ✕
            </button>

            <div className="relative aspect-[6/7] max-h-80 w-full bg-slate-100">
              <Image
                src={activeModalMember.image}
                alt={activeModalMember.name}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-widest text-sky-300 font-semibold">
                  Board of Directors
                </span>
                <h3 className="font-berlin text-3xl font-bold text-white">
                  {activeModalMember.name}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col gap-4">
              {activeModalMember.qualification && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm font-semibold">
                  <FaGraduationCap className="text-amber-600 text-lg shrink-0" />
                  <span>{activeModalMember.qualification}</span>
                </div>
              )}

              <div>
                <h5 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-1">
                  Focus Area / Department
                </h5>
                <p className="text-sm font-semibold text-slate-800">
                  {activeModalMember.department}
                </p>
              </div>

              <div>
                <h5 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-1">
                  Role & Contribution
                </h5>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {activeModalMember.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
                <button
                  onClick={() => setActiveModalMember(null)}
                  className="px-5 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition"
                >
                  Close Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
