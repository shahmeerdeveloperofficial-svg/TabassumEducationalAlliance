"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import TiltCard from "./ui/TiltCard";
import Link from "next/link";
import Image from "next/image";

const List = [
  {
    slug: "/SocietyAndClubs",
    title: "Oxford Progressive Schools",
    desc: "Concept-based modern education and strong academic foundations.",
    image: "/tea_project_oxford.jpg",
    position: "object-[32%_center]",
    tag: "Mother Project 01",
    accent: "border-amber-400/40 shadow-amber-500/10",
    tagBg: "bg-amber-500 text-white",
  },
  {
    slug: "/SocietyAndClubs",
    title: "IQRA Madinat-Ul-Atfal Group",
    desc: "Character building, moral grooming and core ethical values.",
    image: "/tea_project_iqra.jpg",
    position: "object-[32%_center]",
    tag: "Mother Project 02",
    accent: "border-emerald-400/40 shadow-emerald-500/10",
    tagBg: "bg-emerald-600 text-white",
  },
  {
    slug: "/SocietyAndClubs",
    title: "Tabassum I.T & Skills Center",
    desc: "Future-ready technology, digital education, computing and training.",
    image: "/tea_project_it.jpg",
    position: "object-[32%_center]",
    tag: "Mother Project 03",
    accent: "border-violet-400/40 shadow-violet-500/10",
    tagBg: "bg-violet-600 text-white",
  },
  {
    slug: "/SocietyAndClubs",
    title: "Idara Taleemat-e-Nabawia Lahore",
    desc: "Value-based education, spiritual heritage and holistic development.",
    image: "/tea_project_idara.jpg",
    position: "object-[32%_center]",
    tag: "Mother Project 04",
    accent: "border-rose-400/40 shadow-rose-500/10",
    tagBg: "bg-rose-600 text-white",
  },
  {
    slug: "/SocietyAndClubs",
    title: "The Nest (National Educational)",
    desc: "School for Triumph, empowering learners with practical skills.",
    image: "/tea_project_nest.jpg",
    position: "object-[28%_center]",
    tag: "Mother Project 05",
    accent: "border-teal-400/40 shadow-teal-500/10",
    tagBg: "bg-teal-600 text-white",
  },
];

const Clubs = ({ direction = "left", speed = 1 }) => {
  const marquee = useRef(null);
  const first = useRef(null);
  const second = useRef(null);
  const xPercent = useRef(0);

  const ArrayData = [...List, ...List, ...List, ...List];

  useEffect(() => {
    if (!first.current || !second.current) return;

    let rafId;

    const animate = () => {
      if (!first.current || !second.current) return;

      if (direction === "left") {
        if (xPercent.current < -100) xPercent.current = 0;
        xPercent.current -= speed / 10;
      } else {
        if (xPercent.current > 0) xPercent.current = -100;
        xPercent.current += speed / 10;
      }

      gsap.set([first.current, second.current], {
        xPercent: xPercent.current,
      });

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, [direction, speed]);

  return (
    <section
      id="Curriculum"
      className="maxW sm:px-12 py-12 flex gap-12 flex-col"
    >
      <h2 className="max-sm:px-4 h2 text-center text-slate-900">
        Mother Projects of <span className="text-main">Tabassum Educational Alliance Regd.</span>
      </h2>

      <div className="flex gap-4 text-light">
        <section className="w-full overflow-hidden py-2 sm:py-8 lg:py-16">
          <div
            ref={marquee}
            className="h-fit w-fit flex-nowrap relative flex border-y border-slate-200"
          >
            <div
              ref={first}
              className="h-full flex-1 flex w-fit flex-nowrap items-center"
            >
              {ArrayData.map((item, i) => (
                <Link key={i} href={item.slug}>
                  <TiltCard
                    className={`w-[260px] sm:w-[350px] lg:w-[440px] aspect-[.9] sm:aspect-[1.1] rounded-3xl mx-1.5 sm:mx-3 overflow-hidden relative shadow-xl border ${item.accent} group/tilt bg-slate-900`}
                    innerClassName="rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden h-full"
                  >
                    {/* Unique Content-Specific Full-Color Picture Shifted Left for Balance */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className={`object-cover ${item.position || "object-[32%_center]"} transition-transform duration-700 group-hover/tilt:scale-105`}
                    />

                    {/* Bottom Vignette for High-Contrast Text Legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-[1]" />

                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold shadow-md ${item.tagBg}`}>
                          {item.tag}
                        </span>
                      </div>
                      <div className="mt-auto">
                        <h3 className="font-berlin text-2xl sm:text-3xl leading-[1.1] text-white drop-shadow-lg font-bold">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm text-white/95 max-w-[28ch] leading-relaxed drop-shadow">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </TiltCard>
                </Link>
              ))}
            </div>

            <div
              ref={second}
              className="absolute left-full top-0 h-full flex w-full flex-nowrap items-center"
            >
              {ArrayData.map((item, i) => (
                <Link key={i} href={item.slug}>
                  <TiltCard
                    className={`w-[260px] sm:w-[350px] lg:w-[440px] aspect-[.9] sm:aspect-[1.1] rounded-3xl mx-1.5 sm:mx-3 overflow-hidden relative shadow-xl border ${item.accent} group/tilt bg-slate-900`}
                    innerClassName="rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden h-full"
                  >
                    {/* Unique Content-Specific Full-Color Picture Shifted Left for Balance */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className={`object-cover ${item.position || "object-[32%_center]"} transition-transform duration-700 group-hover/tilt:scale-105`}
                    />

                    {/* Bottom Vignette for High-Contrast Text Legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-[1]" />

                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold shadow-md ${item.tagBg}`}>
                          {item.tag}
                        </span>
                      </div>
                      <div className="mt-auto">
                        <h3 className="font-berlin text-2xl sm:text-3xl leading-[1.1] text-white drop-shadow-lg font-bold">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm text-white/95 max-w-[28ch] leading-relaxed drop-shadow">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </TiltCard>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Clubs;
