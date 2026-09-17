"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "School Leadership",
    title: "Academic guidance and school direction",
    image: "/tea_student1.jpg",
    description:
      "Our leadership team works to maintain discipline, educational quality, and a safe learning environment for every student.",
  },
  {
    name: "Administration",
    title: "Student support and parent coordination",
    image: "/tea_student3.jpg",
    description:
      "The administrative team helps families with admissions, communication, scheduling, and day-to-day school coordination.",
  },
  {
    name: "Teaching Team",
    title: "Dedicated classroom mentorship",
    image: "/tea_student2.jpg",
    description:
      "Our teachers focus on concept clarity, values, confidence building, and the personal progress of each learner.",
  },
];

export default function Team() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    const interval = setInterval(() => {
      if (!slider) return;

      slider.scrollLeft += 1;

      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        slider.scrollLeft = 0;
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="Team"
      className="maxWSec px-6 sm:px-12 py-12 flex flex-col gap-12"
    >
      <h2 className="h2 text-center text-slate-900">
        Meet the <span className="text-main">Leadership</span>
      </h2>

      <div ref={sliderRef} className="w-full overflow-x-hidden">
        <div className="flex gap-8 w-max">
          {[...teamMembers, ...teamMembers].map((member, index) => (
            <div
              key={index}
              className="min-w-[350px] flex flex-col items-center gap-4"
            >
              <div className="h-[29rem] w-full overflow-hidden rounded-2xl bg-slate-900 relative shadow-xl flex flex-col justify-end p-8 text-light group">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-[1]" />
                <div className="rounded-2xl border border-white/20 bg-black/40 backdrop-blur-md p-6 relative z-10 shadow-lg">
                  <p className="text-xs uppercase tracking-[0.2em] text-sky-300 font-semibold">
                    Tabassum Educational Alliance
                  </p>
                  <h4 className="font-berlin text-3xl leading-tight mt-2 text-white">
                    {member.name}
                  </h4>
                  <p className="text-sm text-white/90 mt-2 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>

              <div className="text-center">
                <h4 className="font-semibold text-lg text-slate-900">{member.name}</h4>
                <p className="text-sm text-slate-600">
                  {member.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
