"use client";

import React from "react";
import HeroHeader from "@/components/HeroHeader";
import Leadership from "@/components/Leadership";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function LeadershipPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <HeroHeader
        title="Executive Leadership"
        description="Tabassum Educational Alliance Regd. — Apex Guidance & Executive Council"
      />

      <div className="py-6">
        <Leadership />
      </div>

      {/* Strategic Hierarchy Flow */}
      <div className="maxWSec px-4 sm:px-8 lg:px-12 pb-16 flex flex-col gap-10">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm flex flex-col gap-8">
          <div className="flex flex-col items-center text-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-main">
              Governance Framework
            </span>
            <h3 className="font-berlin text-3xl font-bold text-slate-900">
              TEA Institutional Hierarchy & Leadership
            </h3>
            <p className="text-sm text-slate-600 max-w-2xl">
              A cohesive governance structure ensuring spiritual wisdom, strategic vision, administrative excellence, and academic innovation across Pakistan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex flex-col gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700">Level 1 • Patronage</span>
              <h4 className="font-berlin text-lg font-bold text-slate-900">Patron-in-Chief</h4>
              <p className="text-xs text-slate-700 font-semibold">Mufti Muhammad Tahir Tabassum Qadri</p>
              <span className="text-[11px] text-amber-800 font-medium mt-auto pt-2">Spiritual Guidance & Patronage</span>
            </div>

            <div className="p-5 rounded-2xl bg-sky-50/70 border border-sky-200/80 flex flex-col gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700">Level 2 • Chair</span>
              <h4 className="font-berlin text-lg font-bold text-slate-900">Chairman</h4>
              <p className="text-xs text-slate-700 font-semibold">Nazir Dhuddi</p>
              <span className="text-[11px] text-sky-800 font-medium mt-auto pt-2">Founding Vision & Network Leadership</span>
            </div>

            <div className="p-5 rounded-2xl bg-indigo-50/70 border border-indigo-200/80 flex flex-col gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-700">Level 3 • Presidency</span>
              <h4 className="font-berlin text-lg font-bold text-slate-900">President (Honorary)</h4>
              <p className="text-xs text-slate-700 font-semibold">Muhammad Anwar Ul Rasool Murtazai</p>
              <span className="text-[11px] text-indigo-800 font-medium mt-auto pt-2">Honorary Representation & Mentorship</span>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 flex flex-col gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">Level 4 • Executive</span>
              <h4 className="font-berlin text-lg font-bold text-slate-900">CEO</h4>
              <p className="text-xs text-slate-700 font-semibold">Hafiz Junaid Dhuddi</p>
              <span className="text-[11px] text-emerald-800 font-medium mt-auto pt-2">Operations, Modernization & Scale</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-slate-900 text-white mt-4">
            <div className="flex flex-col gap-1">
              <h4 className="font-berlin text-xl font-bold text-white">Board of Directors</h4>
              <p className="text-xs text-slate-300">Supported by 10 specialized directors across STEM, AI & Technology, Law, Sciences, Commerce, and Pedagogy.</p>
            </div>
            <Link
              href="/BoardOfDirectors"
              className="shrink-0 px-6 py-2.5 rounded-full bg-main hover:bg-mainD text-white text-xs font-semibold shadow-md transition-colors flex items-center gap-2"
            >
              <span>View All 10 Directors</span>
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

