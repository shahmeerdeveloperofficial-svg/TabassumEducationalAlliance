"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { patronInChief } from "@/constants/leadershipData";
import {
  FaBookOpen,
  FaTv,
  FaMosque,
  FaUsers,
  FaArrowRight,
  FaAward,
  FaBuildingColumns,
  FaShieldHalved,
} from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";

export default function Leadership() {
  const patronHighlights = [
    { title: "Renowned Religious Scholar", icon: FaBookOpen, color: "text-amber-500 bg-amber-500/10 border-amber-500/20" },
    { title: "Scholar ARY QTV", icon: FaTv, color: "text-sky-500 bg-sky-500/10 border-sky-500/20" },
    { title: "Chairman Idara Taleemat-e-Nabawia Lahore", icon: FaMosque, color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" },
    { title: "President National Ulama Council Pakistan", icon: FaUsers, color: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20" },
  ];

  return (
    <section id="Leadership" className="maxWSec px-4 sm:px-8 lg:px-12 py-16 flex flex-col gap-12">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-main/10 border border-main/30 text-sec font-semibold text-xs sm:text-sm tracking-wide uppercase">
          <HiSparkles className="text-main text-base" />
          <span>Executive Leadership & Patronage</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-berlin font-bold text-slate-900 leading-tight">
          Visionary <span className="text-main">Leadership</span>
        </h2>

        <p className="max-w-2xl text-slate-600 text-xs sm:text-sm sm:text-base leading-relaxed">
          Guiding Tabassum Educational Alliance Regd. with visionary patronage, principled governance, and modern institutional execution.
        </p>
      </div>

      {/* 1. Patron-in-Chief Grand Feature Card */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-sec to-slate-950 text-white shadow-2xl border border-slate-800">
        {/* Decorative Background Glows */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-main/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 lg:p-12 items-center">
          {/* Left / Poster Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-400/40 group">
              <div className="aspect-[3/4] relative w-full bg-slate-950">
                <Image
                  src={patronInChief.image}
                  alt={patronInChief.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-contain sm:object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-4 flex items-center justify-between text-xs">
                <span className="font-semibold text-amber-300 flex items-center gap-1.5">
                  <FaAward className="text-amber-400" />
                  Patron-in-Chief
                </span>
                <span className="text-slate-300 text-[11px]">TEA Regd.</span>
              </div>
            </div>
          </div>

          {/* Right / Details & Credentials */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-widest">
                <FaAward className="text-sm text-amber-400" />
                <span>Patron-in-Chief</span>
              </div>

              <h3 className="font-berlin text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-wide">
                {patronInChief.name}
              </h3>

              <p className="text-sky-200 text-xs sm:text-sm font-medium">
                {patronInChief.organization}
              </p>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {patronInChief.description}
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {patronHighlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-colors"
                  >
                    <div className={`p-2 rounded-lg border shrink-0 ${item.color}`}>
                      <IconComponent className="text-sm" />
                    </div>
                    <span className="text-xs font-semibold text-slate-200 leading-snug">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Quote banner */}
            <div className="p-4 rounded-2xl bg-white/[0.04] border-l-4 border-amber-400 text-xs text-slate-300 italic leading-relaxed">
              “Education combined with moral character is the highest foundation of individual and societal transformation.”
            </div>
          </div>
        </div>
      </div>

      {/* 2. Chairman Feature Card (Nazir Dhuddi) */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-[#002b5e] to-slate-950 text-white shadow-2xl border border-slate-800/90">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 lg:p-12 items-center">
          {/* Left / Portrait Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border-2 border-sky-400/40 group">
              <div className="aspect-[3/4] relative w-full bg-slate-950">
                <Image
                  src="/leadership/nazir_dhuddi.jpg"
                  alt="Nazir Dhuddi - Chairman TEA Regd."
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-4 flex items-center justify-between text-xs">
                <span className="font-semibold text-sky-300 flex items-center gap-1.5">
                  <FaBuildingColumns className="text-sky-400" />
                  Chairman
                </span>
                <span className="text-slate-300 text-[11px]">TEA Regd.</span>
              </div>
            </div>
          </div>

          {/* Right / Content & Message */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-sky-400/15 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-widest">
                <FaBuildingColumns className="text-sm text-sky-400" />
                <span>Chairman — Tabassum Educational Alliance Regd.</span>
              </div>

              <h3 className="font-berlin text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-wide">
                Nazir Dhuddi
              </h3>

              <p className="text-sky-200 text-xs sm:text-sm font-medium">
                Founding Visionary & Network Leadership — Since 2008
              </p>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Leading the founding mission, strategic governance, and nationwide expansion of Tabassum Educational Alliance Regd. with a steadfast commitment to accessible quality education, moral character building, and educational empowerment across Pakistan.
            </p>

            {/* Chairman Message Excerpt */}
            <div className="p-4 rounded-2xl bg-white/[0.05] border-l-4 border-sky-400 text-xs sm:text-sm text-slate-200 italic leading-relaxed">
              “Education is the foundation upon which individuals, communities and nations build their future. Since its establishment in 2008, TEA has been committed to serving education with sincerity, expanding opportunities for learners, and contributing positively to the future of Pakistan.”
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/ChairmanMessage"
                className="px-5 py-2.5 rounded-full bg-main hover:bg-mainD text-white text-xs font-bold shadow-lg transition-all flex items-center gap-2 hover:scale-105"
              >
                <span>Read Full Chairman's Message</span>
                <FaArrowRight className="text-[10px]" />
              </Link>
              <a
                href="tel:03008847670"
                className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white border border-white/20 text-xs font-semibold transition-all"
              >
                Contact Head Office
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 3. President (Honorary) & CEO Dual Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {/* President (Honorary) */}
        <div className="group rounded-3xl bg-white border border-slate-200 hover:border-main/50 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
          {/* Top header badge */}
          <div className="p-5 sm:p-6 pb-0 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sec/10 text-sec border border-sec/20 text-xs font-bold uppercase tracking-wider">
              <FaBuildingColumns className="text-xs text-sec" />
              President (Honorary)
            </span>
            <span className="text-[11px] font-medium text-slate-400">TEA Regd.</span>
          </div>

          <div className="p-5 sm:p-6 flex flex-col sm:flex-row gap-6 items-center sm:items-start flex-grow">
            {/* Image */}
            <div className="relative w-36 h-44 sm:w-40 sm:h-48 rounded-2xl overflow-hidden shadow-md shrink-0 bg-slate-100 border border-slate-200">
              <Image
                src="/leadership/muhammad_anwar_rasool.jpg"
                alt="Muhammad Anwar Ul Rasool Murtazai"
                fill
                sizes="(max-width: 640px) 144px, 160px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2.5 text-center sm:text-left flex-grow">
              <div>
                <h3 className="font-berlin text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-main transition-colors">
                  Muhammad Anwar Ul Rasool Murtazai
                </h3>
                <p className="text-xs font-semibold text-main mt-0.5">
                  President (Honorary) — Tabassum Educational Alliance Regd.
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Steering the honorary leadership, institutional ethics, and strategic direction of Tabassum Educational Alliance Regd. with wisdom and educational commitment.
              </p>

              <div className="pt-2 flex flex-col gap-1.5 text-left">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-sec shrink-0" />
                  <span>Honorary Leadership & Representation</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-sec shrink-0" />
                  <span>Values-Based Institutional Mentorship</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-sec shrink-0" />
                  <span>Community Engagement & Alliance Building</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CEO */}
        <div className="group rounded-3xl bg-white border border-slate-200 hover:border-main/50 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
          {/* Top header badge */}
          <div className="p-5 sm:p-6 pb-0 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-main/10 text-sec font-bold border border-main/30 text-xs uppercase tracking-wider">
              <FaShieldHalved className="text-xs text-main" />
              CEO (Chief Executive Officer)
            </span>
            <span className="text-[11px] font-medium text-slate-400">TEA Regd.</span>
          </div>

          <div className="p-5 sm:p-6 flex flex-col sm:flex-row gap-6 items-center sm:items-start flex-grow">
            {/* Image */}
            <div className="relative w-36 h-44 sm:w-40 sm:h-48 rounded-2xl overflow-hidden shadow-md shrink-0 bg-slate-100 border border-slate-200">
              <Image
                src="/leadership/hafiz_junaid_dhuddi.jpg"
                alt="Hafiz Junaid Dhuddi"
                fill
                sizes="(max-width: 640px) 144px, 160px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2.5 text-center sm:text-left flex-grow">
              <div>
                <h3 className="font-berlin text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-main transition-colors">
                  Hafiz Junaid Dhuddi
                </h3>
                <p className="text-xs font-semibold text-main mt-0.5">
                  CEO — Tabassum Educational Alliance Regd.
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Spearheading executive execution, nationwide campus expansion, operational excellence, and technological modernization of the TEA network.
              </p>

              <div className="pt-2 flex flex-col gap-1.5 text-left">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-main shrink-0" />
                  <span>Executive Administration & Strategy</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-main shrink-0" />
                  <span>Nationwide Institutional Expansion</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-main shrink-0" />
                  <span>Modern Academic & Digital Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Navigation to Chairman Message and Board of Directors */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sec text-white flex items-center justify-center font-bold text-lg">
            TEA
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-slate-900">Governance & Leadership Structure</span>
            <span className="text-[11px] text-slate-500">Explore messages, directors, and institutional leadership</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/ChairmanMessage"
            className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors flex items-center gap-1.5"
          >
            <span>Chairman's Message</span>
            <FaArrowRight className="text-[10px]" />
          </Link>
          <Link
            href="/BoardOfDirectors"
            className="px-4 py-2 rounded-xl bg-main hover:bg-mainD text-white text-xs font-semibold shadow-sm transition-colors flex items-center gap-1.5"
          >
            <span>Board of Directors (9)</span>
            <FaArrowRight className="text-[10px]" />
          </Link>
        </div>
      </div>
    </section>
  );
}

