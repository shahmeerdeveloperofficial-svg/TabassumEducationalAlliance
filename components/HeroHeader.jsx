"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const heroImages = [
  "/tea_uniform_boy.png",
  "/tea_student1.jpg",
  "/tea_student2.jpg",
  "/tea_student3.jpg",
  "/tea_student4.jpg",
  "/tea_student5.jpg",
];

const HeroHeader = ({ title, description }) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!isHomePage) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isHomePage]);

  return (
    <header
      className={`p-4 flex h-[calc(100vh-0rem)] ${
        isHomePage
          ? "max-h-[calc(890px-0rem)] sm:max-h-[calc(1080px-0rem)]"
          : "max-h-[calc(620px-0rem)] sm:max-h-[calc(700px-0rem)]"
      }`}
    >
      <div className="bg-sec flex relative flex-1 rounded-3xl overflow-hidden maxW shadow-2xl">
        {isHomePage ? (
          <>
            {heroImages.map((src, index) => (
              <Image
                key={src}
                src={src}
                alt={`Tabassum Educational Alliance Student ${index + 1}`}
                fill
                priority={index === 0}
                className={`object-cover transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? "opacity-100 scale-100" : "opacity-0 scale-100"
                }`}
              />
            ))}
            {/* Subtle clean overlay so student photos and text are bright, crisp & clearly visible */}
            <div className="absolute inset-0 bg-slate-950/40 z-[2]" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/60 z-[3]" />
          </>
        ) : (
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,#00a2e8_0,transparent_35%),radial-gradient(circle_at_85%_85%,#003b7a_0,transparent_40%)]" />
        )}

        <div className="relative text-light z-10 flex-1 flex flex-col items-center justify-center gap-4 px-6 text-center pt-20 sm:pt-28 pb-16">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.3,
                duration: 0.8,
                type: "tween",
                ease: [0.76, 0, 0.24, 1],
              },
            }}
            style={{ textShadow: "0 4px 20px rgba(0,0,0,0.9), 0 2px 6px rgba(0,0,0,0.9)" }}
            className="h1 text-center font-bold tracking-wide drop-shadow-xl text-white"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.h4
              initial={{ y: -20, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.5,
                  duration: 0.8,
                  type: "tween",
                  ease: [0.76, 0, 0.24, 1],
                },
              }}
              style={{ textShadow: "0 2px 14px rgba(0,0,0,0.95), 0 1px 4px rgba(0,0,0,0.9)" }}
              className="text-center max-w-[min(58ch,90%)] leading-relaxed text-sm sm:text-base md:text-lg font-medium text-white drop-shadow-lg"
            >
              {description}
            </motion.h4>
          )}

          {isHomePage && <Sections />}
        </div>
      </div>
    </header>
  );
};

const Sections = () => {
  const sections = [
    {
      title: "About",
      icon: "/icons/About.svg",
      link: "#About",
      color: "bg-[#00a2e8] hover:bg-[#0086c4] shadow-sky-500/40",
    },
    {
      title: "Journey",
      icon: "/icons/Timeline.svg",
      link: "#Timeline",
      color: "bg-[#f59e0b] hover:bg-[#d97706] shadow-amber-500/40",
    },
    {
      title: "Student Life",
      icon: "/icons/Curriculum.svg",
      link: "#Curriculum",
      color: "bg-[#10b981] hover:bg-[#059669] shadow-emerald-500/40",
    },
    {
      title: "Admissions",
      icon: "/icons/LMS.svg",
      link: "#LMS",
      color: "bg-[#8b5cf6] hover:bg-[#7c3aed] shadow-purple-500/40",
    },
    {
      title: "Contact",
      icon: "/icons/Contact.svg",
      link: "#Contact",
      color: "bg-[#f43f5e] hover:bg-[#e11d48] shadow-rose-500/40",
    },
  ];

  const handleSectionClick = (link) => {
    const section = document.querySelector(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1,
          duration: 0.8,
          type: "tween",
          ease: [0.76, 0, 0.24, 1],
        },
      }}
      className="absolute h-9 sm:h-16 px-2 sm:px-5 rounded-t-2xl flex items-center bottom-0 left-1/2 -translate-x-1/2 bg-light text-dark shadow-xl"
    >
      <div className="z-[-1] rotate-90 absolute bottom-0 left-full h-6 sm:h-12 aspect-square rounded-br-2xl sm:shadow-[1.5rem_1.5rem_0_0_#fff] shadow-[0.5rem_0.5rem_0_0_#fff] bg-transparent"></div>
      <div className="z-[-1] absolute bottom-0 right-full h-6 sm:h-12 aspect-square rounded-br-2xl sm:shadow-[1.5rem_1.5rem_0_0_#fff] shadow-[0.5rem_0.5rem_0_0_#fff] bg-transparent"></div>

      {sections.map((item, index) => {
        return (
          <div
            key={index}
            className="group relative w-12 sm:w-24 h-full cursor-pointer"
            onClick={() => handleSectionClick(item.link)}
          >
            <div
              className={`w-11 sm:w-16 -top-6 sm:-top-8 aspect-square ${item.color} shadow-lg transition-all duration-300 group-hover:scale-110 left-1/2 -translate-x-1/2 absolute flex items-center justify-center rounded-full border-2 border-white`}
            >
              <Image
                src={item.icon}
                width={300}
                height={300}
                alt="icon"
                priority
                className="w-[60%] drop-shadow"
              />
            </div>
            <div className="max-sm:hidden whitespace-nowrap absolute top-10 w-full text-center text-sm leading-tight text-slate-800 font-medium">
              {item.title}
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default HeroHeader;
