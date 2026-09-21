"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaBookOpen,
  FaHeart,
  FaAward,
  FaHandshakeSimple,
  FaUserGraduate,
  FaTrophy,
  FaChartLine,
  FaBuildingColumns,
  FaArrowRight,
} from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";

const features = [
  {
    id: 1,
    title: "Foundational Learning",
    icon: FaBookOpen,
    accentColor: "from-rose-500/20 to-rose-500/5 text-rose-600 border-rose-200",
    iconBg: "bg-rose-500 text-white shadow-rose-500/30",
    desc: "Concept-based teaching in core STEM and language subjects so students build clear understanding, confidence, and steady academic progress.",
    tag: "Academic Excellence",
  },
  {
    id: 2,
    title: "Caring Environment",
    icon: FaHeart,
    accentColor: "from-sky-500/20 to-sky-500/5 text-sky-600 border-sky-200",
    iconBg: "bg-main text-white shadow-sky-500/30",
    desc: "A secure, respectful, and encouraging atmosphere where teachers mentor each student with patience, discipline, and personal care.",
    tag: "Student Well-being",
  },
  {
    id: 3,
    title: "Character Building",
    icon: FaAward,
    accentColor: "from-amber-500/20 to-amber-500/5 text-amber-600 border-amber-200",
    iconBg: "bg-amber-500 text-white shadow-amber-500/30",
    desc: "Strong manners, honesty, responsibility, and Islamic ethics woven into daily school life to nurture socially enlightened citizens.",
    tag: "Core Values",
  },
  {
    id: 4,
    title: "Parent Partnership",
    icon: FaHandshakeSimple,
    accentColor: "from-emerald-500/20 to-emerald-500/5 text-emerald-600 border-emerald-200",
    iconBg: "bg-emerald-500 text-white shadow-emerald-500/30",
    desc: "Transparent regular communication, parent-teacher collaboration, and active family involvement in every child's learning journey.",
    tag: "Family Support",
  },
  {
    id: 5,
    title: "Student Confidence",
    icon: FaUserGraduate,
    accentColor: "from-indigo-500/20 to-indigo-500/5 text-indigo-600 border-indigo-200",
    iconBg: "bg-indigo-600 text-white shadow-indigo-500/30",
    desc: "Interactive presentations, public speaking, debating, and leadership activities to develop self-belief and articulate communication.",
    tag: "Leadership",
  },
  {
    id: 6,
    title: "Activity-Based Growth",
    icon: FaTrophy,
    accentColor: "from-teal-500/20 to-teal-500/5 text-teal-600 border-teal-200",
    iconBg: "bg-teal-500 text-white shadow-teal-500/30",
    desc: "Sports competitions, science clubs, arts, and cultural festivals providing a balanced and energetic school experience beyond textbooks.",
    tag: "Holistic Life",
  },
  {
    id: 7,
    title: "Progress Monitoring",
    icon: FaChartLine,
    accentColor: "from-purple-500/20 to-purple-500/5 text-purple-600 border-purple-200",
    iconBg: "bg-purple-600 text-white shadow-purple-500/30",
    desc: "Continuous evaluation metrics, structured feedback, and individualized coaching to ensure every student achieves their fullest potential.",
    tag: "Smart Analytics",
  },
  {
    id: 8,
    title: "Community Values",
    icon: FaBuildingColumns,
    accentColor: "from-cyan-500/20 to-cyan-500/5 text-cyan-600 border-cyan-200",
    iconBg: "bg-sec text-white shadow-cyan-500/30",
    desc: "Dedicated to serving families across Pakistan with integrity, accessible high-standard education, and meaningful social development.",
    tag: "Nationwide Trust",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export default function About() {
  return (
    <section className="maxWSec px-4 sm:px-8 lg:px-12 py-16 flex gap-10 flex-col">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-main/10 border border-main/30 text-sec font-semibold text-xs sm:text-sm tracking-wide uppercase">
          <HiSparkles className="text-main text-base" />
          <span>Why Choose TEA</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-berlin font-bold text-slate-900 leading-tight">
          Why Families Choose <span className="text-main">Tabassum Educational Alliance</span>
        </h2>

        <p className="max-w-2xl text-slate-600 text-xs sm:text-sm sm:text-base leading-relaxed">
          A value-driven school experience designed for meaningful learning, character building, and modern academic excellence across Pakistan.
        </p>
      </div>

      {/* Grid of Feature Blocks */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, i) => {
          const IconComp = feature.icon;
          return (
            <motion.div
              key={feature.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="flex"
            >
              <div className="flex-1 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-main/50 transition-all duration-300 p-6 flex flex-col justify-between relative overflow-hidden group">
                {/* Subtle Ambient Background Gradient on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${feature.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                <div className="relative z-10 flex flex-col gap-4">
                  {/* Top Bar: Icon + Category Tag */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-2xl ${feature.iconBg} shadow-lg flex items-center justify-center text-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                    >
                      <IconComp />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 border border-slate-200/80 group-hover:bg-white/80 transition-colors">
                      {feature.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="flex flex-col gap-2 pt-1">
                    <h3 className="text-lg sm:text-xl font-bold font-berlin text-slate-900 group-hover:text-main transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="relative z-10 pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href="/AboutUs"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-main hover:text-sec transition-colors group/btn"
                  >
                    <span>Learn More</span>
                    <FaArrowRight className="text-[10px] group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  <span className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-main transition-colors" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
