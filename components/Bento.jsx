"use client";

import React from "react";
import Tag from "./ui/Tag";
import Button from "./ui/Button";
import Link from "next/link";
import Image from "next/image";

const Bento = () => {
  const MotherProjects = [
    {
      title: "01 Oxford Progressive Schools Regd.",
      url: "/SocietyAndClubs",
    },
    {
      title: "02 IQRA Madinat-Ul-Atfal Group of Schools Regd.",
      url: "/SocietyAndClubs",
    },
    {
      title: "03 Tabassum I.T and Skills Center",
      url: "/SocietyAndClubs",
    },
    {
      title: "04 Idara Taleemat-e-Nabawia Lahore",
      url: "/SocietyAndClubs",
    },
    {
      title: "05 The Nest (National Educational School for Triumph)",
      url: "/SocietyAndClubs",
    },
  ];

  return (
    <section
      id="About"
      className="maxWSec px-6 sm:px-12 py-12 flex gap-12 flex-col"
    >
      <h2 className="h2 text-center text-slate-900">
        Welcome to <span className="text-main">Tabassum Educational Alliance Regd.</span>
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        <div className="sm:[grid-area:1/1/2/3] group/card p-6 rounded-3xl bg-main text-light relative overflow-hidden">
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

            <div className="flex justify-end">
              <Link href={"/OnlineAdmission"}>
                <Button btnType="sec">
                  <span>Online Admission</span>
                  <svg
                    className="h-auto w-4"
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

        <div className="sm:[grid-area:2/1/3/2] group/card flex-1 min-h-72 p-6 rounded-3xl bg-sec text-light relative overflow-hidden">
          <Image
            src="/speaker.svg"
            width="400"
            height="400"
            alt="speaker"
            className="transition-all duration-700 group-hover/card:scale-110 origin-bottom-right absolute right-0 bottom-0 w-40 translate-x-[5%] translate-y-[5%] opacity-15"
          />
          <div className="flex flex-col gap-4 relative z-10">
            <Tag><p className="font-bold">Mother Projects</p></Tag>
            <div className="flex flex-col gap-2">
              {MotherProjects.map((item, i) => {
                return (
                  <Link
                    key={i}
                    href={item.url}
                    name="detail link"
                    className="w-fit text-light text-sm sm:text-base flex items-center gap-2 hover:gap-3 hover:underline transition-all duration-300"
                  >
                    <span>{item.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

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

        <div className="sm:[grid-area:3/1/4/3] xl:[grid-area:2/2/3/3] group/card min-h-72 p-6 rounded-3xl bg-main relative overflow-hidden">
          <Image
            src="/spark.svg"
            width="400"
            height="400"
            alt="spark"
            className="transition-all duration-700 group-hover/card:scale-110 origin-bottom-right absolute right-0 bottom-0 w-44 translate-x-[5%] translate-y-[5%] opacity-15"
          />
          <div className="relative z-10 flex flex-col gap-4">
            <Tag><p className="font-bold">Our Allies</p></Tag>
            <p className="text-sm sm:text-base text-light leading-relaxed">
              Proud collaborative partners across Pakistan:
            </p>
            <ul className="list-disc list-inside text-sm sm:text-base text-light space-y-1">
              <li>01 Al Qalam School</li>
              <li>02 Kids Education School System</li>
              <li>03 Fikr e Raat</li>
              <li>04 National Ulama Council Pakistan</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bento;
