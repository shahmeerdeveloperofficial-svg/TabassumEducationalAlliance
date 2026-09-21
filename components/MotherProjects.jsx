"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motherProjects, alliesProjects } from "@/constants/projectsData";
import { FaBuildingColumns, FaHandshakeSimple, FaArrowRight } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";

export default function MotherProjects() {
  return (
    <section className="w-full flex flex-col gap-12 py-8">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-main/10 border border-main/30 text-sec font-semibold text-xs sm:text-sm tracking-wide uppercase">
          <HiSparkles className="text-main text-base" />
          <span>Institutional Network</span>
        </div>

        <h2 className="h2 text-slate-900 leading-tight">
          Mother Projects of <span className="text-main">Tabassum Educational Alliance</span>
        </h2>

        <p className="max-w-2xl text-slate-600 text-sm sm:text-base">
          Our core educational and skill-development institutions driving quality education, character building, and digital learning across Pakistan since 2008.
        </p>
      </div>

      {/* Mother Projects Grid (Monogram on Top, School Name Below) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {motherProjects.map((project) => (
          <div
            key={project.id}
            className={`group bg-white rounded-3xl p-6 border ${project.border} shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center justify-between relative overflow-hidden`}
          >
            {/* Soft Ambient Background Glow */}
            <div
              className={`absolute inset-0 bg-gradient-to-b ${project.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
            />

            {/* Top Project Tag */}
            <div className="relative z-10 w-full flex justify-between items-center mb-4">
              <span
                className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase border ${project.badgeColor}`}
              >
                Project {project.number}
              </span>
              <span className="text-[10px] font-semibold text-slate-400">TEA Regd.</span>
            </div>

            {/* MONOGRAM EMBLEM (TOP) */}
            <div className="relative z-10 my-2">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-white shadow-md border border-slate-100 p-3 flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                <Image
                  src={project.monogram}
                  alt={`${project.name} Monogram`}
                  width={120}
                  height={120}
                  className="w-full h-full object-contain drop-shadow"
                />
              </div>
            </div>

            {/* SCHOOL NAME (BELOW MONOGRAM) */}
            <div className="relative z-10 flex flex-col gap-2 mt-4 flex-grow justify-between">
              <div>
                <h3 className="font-berlin text-xl sm:text-2xl font-bold text-slate-900 leading-snug group-hover:text-main transition-colors">
                  {project.name}
                </h3>

                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {project.tagline}
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-slate-100/80 w-full flex items-center justify-center">
                <Link
                  href={project.slug}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-main hover:text-sec transition-colors"
                >
                  <span>Explore Project</span>
                  <FaArrowRight className="text-[10px]" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* OUR ALLIES SECTION */}
      <div className="mt-8 pt-10 border-t border-slate-200 flex flex-col gap-8">
        <div className="flex flex-col items-center text-center gap-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-main">
            <FaHandshakeSimple className="text-base" />
            <span>Collaborative Partners</span>
          </div>
          <h3 className="font-berlin text-3xl font-bold text-slate-900">
            Our Respected Allies
          </h3>
          <p className="text-slate-600 text-sm max-w-xl">
            Partner educational networks and organizations working collaboratively with Tabassum Educational Alliance.
          </p>
        </div>

        {/* Allies Grid (Monogram Top, Name Below) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {alliesProjects.map((ally) => (
            <div
              key={ally.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:border-main/50 transition-all duration-300 flex flex-col items-center text-center gap-4 group"
            >
              {/* Ally Monogram Top */}
              <div className="w-20 h-20 rounded-full bg-slate-50 border border-slate-200 p-2.5 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Image
                  src={ally.monogram}
                  alt={`${ally.name} Monogram`}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Ally Name Below */}
              <div>
                <h4 className="font-berlin text-lg font-bold text-slate-900 group-hover:text-main transition-colors">
                  {ally.name}
                </h4>
                <p className="text-xs text-slate-500 mt-1">{ally.tagline}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
