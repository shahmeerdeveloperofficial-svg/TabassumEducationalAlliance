"use client";

import React from "react";
import Tag from "./ui/Tag";
import Button from "./ui/Button";
import Link from "next/link";
import Image from "next/image";
import { motherProjects, alliesProjects } from "@/constants/projectsData";

const Bento = () => {
  return (
    <section
      id="About"
      className="maxWSec px-4 sm:px-8 lg:px-12 py-12 flex gap-12 flex-col"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-berlin font-bold text-center text-slate-900 leading-tight">
        Welcome to <span className="text-main">Tabassum Educational Alliance Regd.</span>
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {/* Mission Statement Card */}
        <div className="sm:[grid-area:1/1/2/3] group/card p-6 sm:p-8 rounded-3xl bg-main text-light relative overflow-hidden shadow-lg">
          <Image
            src="/book.svg"
            width="400"
            height="400"
            alt="book"
            className="transition-all duration-700 group-hover/card:scale-105 origin-bottom-right absolute right-0 bottom-0 w-96 translate-x-[5%] translate-y-[15%] opacity-15"
          />
          <div className="flex flex-col gap-4 relative z-10">
            <Tag><p className="font-bold">Mission Statement</p></Tag>
            <p className="text-base sm:text-lg">
              Our mission is to develop a progressive, accessible and value-based educational network that empowers learners with knowledge, character, confidence and practical skills necessary to succeed in a rapidly changing world.
            </p>
            <p className="font-semibold text-white mt-1">We are committed to:</p>
            <ul className="leading-relaxed list-disc list-inside text-sm sm:text-base space-y-1">
              <li><strong>Providing Quality Education</strong> through effective teaching & learner-focused environments.</li>
              <li><strong>Building Character</strong> by promoting discipline, integrity, respect and positive social values.</li>
              <li><strong>Developing Future-Ready Skills</strong> through technology, digital education & professional training.</li>
              <li><strong>Empowering Educators</strong> through collaboration & continuous improvement in teaching.</li>
              <li><strong>Promoting Innovation</strong> by embracing modern educational methods and technology.</li>
              <li><strong>Supporting Holistic Development</strong> giving equal importance to academic, moral & social growth.</li>
              <li><strong>Serving Society</strong> by making education a means of empowerment and national development.</li>
            </ul>

            <div className="flex justify-end pt-2">
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
        </div>

        {/* Mother Projects Visual Box (Monograms + Names) */}
        <div className="sm:[grid-area:2/1/3/2] group/card flex-1 min-h-72 p-6 sm:p-7 rounded-3xl bg-sec text-light relative overflow-hidden shadow-lg">
          <Image
            src="/speaker.svg"
            width="400"
            height="400"
            alt="speaker"
            className="transition-all duration-700 group-hover/card:scale-110 origin-bottom-right absolute right-0 bottom-0 w-40 translate-x-[5%] translate-y-[5%] opacity-10"
          />
          <div className="flex flex-col gap-4 relative z-10">
            <Tag><p className="font-bold">Mother Projects</p></Tag>
            <div className="flex flex-col gap-3">
              {motherProjects.map((item) => (
                <Link
                  key={item.id}
                  href={item.slug}
                  name="detail link"
                  className="w-full text-light flex items-center gap-3 p-2 rounded-xl bg-white/5 hover:bg-white/15 transition-all duration-300 border border-white/10 group/item"
                >
                  {/* Monogram */}
                  <div className="w-8 h-8 rounded-lg bg-white p-1 shrink-0 flex items-center justify-center shadow-sm">
                    <Image
                      src={item.monogram}
                      alt={item.name}
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold group-hover/item:text-sky-300 transition-colors line-clamp-1">
                    {item.number} {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* TEA Hero Banner Card */}
        <div className="sm:[grid-area:2/2/3/3] xl:[grid-area:1/3/3/4] min-h-72 rounded-3xl bg-slate-900 text-light overflow-hidden relative flex items-center justify-center p-8 shadow-xl">
          <Image
            src="/tea_student1.jpg"
            alt="TEA Campus Students"
            fill
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-slate-950/70" />
          <div className="text-center max-w-sm relative z-10">
            <p className="text-main font-berlin text-6xl font-bold mb-2 drop-shadow-lg">TEA</p>
            <p className="text-xl font-semibold mb-2 text-white drop-shadow">Since 2008</p>
            <p className="text-sm sm:text-base text-white/95 leading-relaxed drop-shadow">
              The Fastest Growing Educational Network All Over Pakistan. Dedicated to knowledge, character building, and empowerment.
            </p>
          </div>
        </div>

        {/* Our Allies Visual Box */}
        <div className="sm:[grid-area:3/1/4/3] xl:[grid-area:2/2/3/3] group/card min-h-72 p-6 sm:p-7 rounded-3xl bg-main relative overflow-hidden shadow-lg text-white">
          <Image
            src="/spark.svg"
            width="400"
            height="400"
            alt="spark"
            className="transition-all duration-700 group-hover/card:scale-110 origin-bottom-right absolute right-0 bottom-0 w-44 translate-x-[5%] translate-y-[5%] opacity-15"
          />
          <div className="relative z-10 flex flex-col gap-4">
            <Tag><p className="font-bold">Our Allies</p></Tag>
            <p className="text-sm font-medium leading-relaxed">
              Proud collaborative partners across Pakistan:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {alliesProjects.map((ally) => (
                <div
                  key={ally.id}
                  className="flex items-center gap-2.5 p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15"
                >
                  <div className="w-7 h-7 rounded-full bg-white p-1 shrink-0 flex items-center justify-center">
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
        </div>
      </div>
    </section>
  );
};

export default Bento;
