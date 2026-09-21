"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLocationDot,
  FaPhone,
  FaArrowUpRightFromSquare,
  FaBuilding,
  FaSchool,
  FaCompass,
} from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";

const campuses = [
  {
    id: 1,
    name: "HEAD OFFICE (TEA Regd.)",
    code: "TEA-HQ",
    type: "Central Secretariat",
    location: "Mian Colony, Begum Kot, Shahdara, Lahore",
    fullAddress: "Street #4, Mian Colony, Begum Kot, Shahdara, Lahore, Punjab, Pakistan",
    phone: "0300-8847670 / 0333-8133889",
    mapQuery: "Begum Kot, Shahdara, Lahore, Pakistan",
    badge: "Head Office",
  },
  {
    id: 2,
    name: "OXFORD PROGRESSIVE SCHOOL",
    code: "OPS-01",
    type: "Flagship Campus",
    location: "Begum Kot, Shahdara, Lahore",
    fullAddress: "Oxford Progressive School, Main Begum Kot Road, Shahdara, Lahore, Pakistan",
    phone: "0300-8847670",
    mapQuery: "Begum Kot, Shahdara, Lahore, Pakistan",
    badge: "Campus I",
  },
  {
    id: 3,
    name: "IQRA MADINAT-UL-ATFAL",
    code: "IMA-01",
    type: "Islamic & Modern Education",
    location: "Jia Musa, Shahdara, Lahore",
    fullAddress: "IQRA Madinat-Ul-Atfal Campus, Jia Musa, Shahdara, Lahore, Pakistan",
    phone: "0333-8133889",
    mapQuery: "Jia Musa, Shahdara, Lahore, Pakistan",
    badge: "Branch",
  },
  {
    id: 4,
    name: "TABASSUM I.T & SKILLS CENTER",
    code: "TITC-01",
    type: "Technical & Vocational Institute",
    location: "Main G.T. Road, Shahdara, Lahore",
    fullAddress: "Tabassum I.T & Computer Training Institute, Main G.T. Road, Shahdara, Lahore",
    phone: "0300-8847670",
    mapQuery: "Shahdara Town, GT Road, Lahore, Pakistan",
    badge: "Skills Wing",
  },
  {
    id: 5,
    name: "THE NEST (NATIONAL EDUCATIONAL)",
    code: "NEST-01",
    type: "Primary & Middle Wing",
    location: "Kot Abdul Malik, Lahore",
    fullAddress: "The Nest Educational Campus, Near Kot Abdul Malik Interchange, Lahore",
    phone: "0333-8133889",
    mapQuery: "Kot Abdul Malik, Lahore, Pakistan",
    badge: "Branch",
  },
  {
    id: 6,
    name: "IDARA TALEEMAT-E-NABAWI",
    code: "ITN-01",
    type: "Hifz & Academic School",
    location: "Yousaf Park, Shahdara, Lahore",
    fullAddress: "Idara Taleemat-e-Nabawia Campus, Yousaf Park, Shahdara, Lahore, Pakistan",
    phone: "0300-8847670",
    mapQuery: "Yousaf Park, Shahdara, Lahore, Pakistan",
    badge: "Tahfeez Wing",
  },
  {
    id: 7,
    name: "OXFORD PROGRESSIVE (CAMPUS II)",
    code: "OPS-02",
    type: "Junior Campus",
    location: "Wandala Road, Shahdara, Lahore",
    fullAddress: "Oxford Progressive School, Wandala Road, Shahdara, Lahore, Pakistan",
    phone: "0300-8847670",
    mapQuery: "Wandala Road, Shahdara, Lahore, Pakistan",
    badge: "Campus II",
  },
  {
    id: 8,
    name: "RAAST MODEL CAMPUS",
    code: "RMC-01",
    type: "Allied Network Partner",
    location: "Ferozewala, Sheikhupura Road, Lahore",
    fullAddress: "Raast Model School, Ferozewala, Sheikhupura Road, Lahore, Pakistan",
    phone: "0333-8133889",
    mapQuery: "Ferozewala, Sheikhupura Road, Lahore, Pakistan",
    badge: "Franchise",
  },
];

export default function Franchises() {
  const [activeCampus, setActiveCampus] = useState(campuses[0]);

  return (
    <section className="maxWSec px-4 sm:px-8 lg:px-12 py-16 flex flex-col gap-10">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-main/10 border border-main/30 text-sec font-semibold text-xs sm:text-sm tracking-wide uppercase">
          <HiSparkles className="text-main text-base" />
          <span>Our Network & Presence</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-berlin font-bold text-slate-900 leading-tight flex items-center justify-center gap-3 flex-wrap">
          <FaLocationDot className="text-main text-2xl sm:text-3xl lg:text-4xl animate-bounce" />
          <span>
            Our <span className="text-main">Franchises & Campuses</span>
          </span>
        </h2>

        <p className="max-w-2xl text-slate-600 text-xs sm:text-sm sm:text-base leading-relaxed">
          Explore our network of schools, educational wings, and affiliated institutes serving communities with academic and moral excellence across Lahore and beyond.
        </p>
      </div>

      {/* Main Interactive Container */}
      <div className="bg-slate-50/90 rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: Campus List */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-4 mb-2 border-b border-slate-200">
              <div className="flex items-center gap-2 text-slate-900 font-berlin font-bold text-base sm:text-lg">
                <FaSchool className="text-main text-lg sm:text-xl" />
                <span>Our Franchises & Branches</span>
              </div>
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-main/15 text-sec border border-main/30">
                {campuses.length} Locations
              </span>
            </div>

            {/* List */}
            <div className="flex flex-col gap-2 max-h-[460px] overflow-y-auto pr-1 select-none">
              {campuses.map((campus) => {
                const isActive = activeCampus.id === campus.id;
                return (
                  <motion.div
                    key={campus.id}
                    onClick={() => setActiveCampus(campus)}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.15 }}
                    className={`cursor-pointer rounded-2xl p-3.5 sm:p-4 transition-all duration-200 flex items-center justify-between border ${
                      isActive
                        ? "bg-white text-dark shadow-md border-main/60 ring-2 ring-main/20"
                        : "bg-white/70 hover:bg-white text-slate-700 border-slate-200/80 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-start gap-3 min-w-0 pr-2">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold transition-colors ${
                          isActive
                            ? "bg-main text-white shadow-sm"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        <FaBuilding />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4
                            className={`font-berlin font-bold text-xs sm:text-sm tracking-wide truncate ${
                              isActive ? "text-sec font-extrabold" : "text-slate-900"
                            }`}
                          >
                            {campus.name}
                          </h4>
                        </div>
                        <p className="text-[11px] sm:text-xs text-slate-500 truncate mt-0.5">
                          {campus.location}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider shrink-0 transition-colors ${
                        isActive
                          ? "bg-main/15 text-sec border border-main/30"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {campus.badge}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Help / Franchise Application CTA */}
            <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between gap-3 bg-gradient-to-r from-main/10 via-sky-50 to-transparent p-3 rounded-2xl">
              <div>
                <p className="text-xs font-bold text-slate-800">
                  Interested in a Franchise?
                </p>
                <p className="text-[11px] text-slate-500">
                  Partner with TEA & expand your school network.
                </p>
              </div>
              <a
                href="tel:03008847670"
                className="shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full bg-main text-white hover:bg-sec transition shadow-sm"
              >
                Join Network
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Map & Live Campus Card */}
          <div className="lg:col-span-7 flex flex-col h-[400px] sm:h-[480px] lg:h-[560px] relative rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-200">
            {/* Google Maps Embed Iframe */}
            <iframe
              title={`Map of ${activeCampus.name}`}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                activeCampus.mapQuery
              )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              className="w-full h-full border-0 absolute inset-0 filter saturate-[1.1] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Floating Info Overlay Card (Rills Style) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCampus.id}
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-auto sm:max-w-xs md:max-w-sm bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-200/90 z-10"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      Active Campus
                    </span>
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      activeCampus.name + " " + activeCampus.fullAddress
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-main transition p-1 hover:bg-slate-100 rounded-lg"
                    title="Open in Google Maps"
                  >
                    <FaArrowUpRightFromSquare className="text-xs" />
                  </a>
                </div>

                <h3 className="font-berlin font-bold text-sm sm:text-base text-slate-900 mt-2">
                  {activeCampus.name}
                </h3>
                <p className="text-[11px] font-medium text-main">
                  {activeCampus.type}
                </p>

                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {activeCampus.fullAddress}
                </p>

                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                  <a
                    href={`tel:${activeCampus.phone.split("/")[0].trim()}`}
                    className="inline-flex items-center gap-1.5 font-semibold text-slate-700 hover:text-main transition"
                  >
                    <FaPhone className="text-[10px] text-main" />
                    <span>{activeCampus.phone}</span>
                  </a>

                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                      activeCampus.mapQuery
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-sec bg-main/15 hover:bg-main hover:text-white px-2.5 py-1 rounded-lg transition"
                  >
                    <FaCompass className="text-[10px]" />
                    <span>Directions</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Right Attribution / Status Pill */}
            <div className="absolute bottom-3 right-3 bg-dark/80 backdrop-blur text-white text-[10px] font-medium px-3 py-1 rounded-full shadow-lg pointer-events-none flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-main" />
              <span>Tabassum Educational Alliance Network</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
