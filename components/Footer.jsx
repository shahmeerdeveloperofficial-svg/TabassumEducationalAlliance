"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import LinkEffect from "./ui/LinkEffect";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const contentRef = useRef();
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.offsetHeight);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Links = [
    {
      title: "Contact Information",
      content: [
        { title: "0300-8847670 / 0333-8133889", src: "tel:03008847670", blank: true },
        { title: "St.4 Mian Colony, Beghum Kot, Shahdara, Lahore", src: "/ContactUs" },
        { title: "tabassumeducationalalliance1@gmail.com", src: "mailto:tabassumeducationalalliance1@gmail.com", blank: true },
      ],
    },
    {
      title: "Explore",
      content: [
        { title: "About Us", src: "/AboutUs" },
        { title: "Chairman's Message", src: "/ChairmanMessage" },
        { title: "Our Journey (Since 2008)", src: "/OurJourney" },
        { title: "Our Philosophy", src: "/OurPhilosophy" },
        { title: "Contact Us", src: "/ContactUs" },
      ],
    },
    {
      title: "Network Projects",
      content: [
        { title: "Oxford Progressive Schools Regd.", src: "/SocietyAndClubs" },
        { title: "IQRA Madinat-Ul-Atfal Group", src: "/SocietyAndClubs" },
        { title: "Tabassum I.T and Skills Center", src: "/SocietyAndClubs" },
        { title: "Idara Taleemat-e-Nabawia", src: "/SocietyAndClubs" },
        { title: "The Nest (National Educational)", src: "/SocietyAndClubs" },
      ],
    },
  ];

  return (
    <footer
      id="Contact"
      className="w-full relative overflow-hidden bg-white"
      style={{ clipPath: "inset(2px 0% 0% 0%)" }}
    >
      <div
        style={{ height: contentHeight }}
        className="pointer-events-none w-full relative z-20 min-h-16"
      >
        <div className="h-16 bg-white rounded-[0_0_2rem_2rem] sm:rounded-[0_0_5rem_5rem] absolute inset-x-0 top-0"></div>
      </div>

      <div
        ref={contentRef}
        className="pt-16 bg-dark text-light w-full fixed -bottom-0.5 z-10"
      >
        <div className="maxWSec px-4 sm:px-12 py-6 sm:py-12 gap-6 sm:gap-12 flex max-sm:flex-col justify-between w-full">
          <div className="flex flex-col gap-4 max-sm:items-center">
            <Link href="/">
              <Image
                src="/tea-logo.png"
                width={600}
                height={600}
                alt="Tabassum Educational Alliance logo"
                priority
                className="w-28 sm:w-36 rounded-full object-contain aspect-square shadow-lg border-2 border-white/20"
              />
            </Link>

            <a
              href="https://www.facebook.com/share/1JgUk1Qoy7/" target="_blank" rel="noopener noreferrer"
              className="mt-2 inline-flex justify-center rounded-full bg-main px-5 py-2 text-sm font-semibold text-white hover:opacity-90 transition"
            >
              Follow Us
            </a>
          </div>

          <div className="flex max-sm:flex-col items-start flex-grow sm:max-w-[60%] gap-1 sm:gap-8">
            {Links.map((item, index) => (
              <div key={index} className="flex-1 text-gray">
                <h5 className="font-berlin font-medium text-xl text-white mb-1">
                  {item.title}
                </h5>
                {item.content.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    href={subItem.src}
                    target={subItem.blank ? "_blank" : "_self"}
                    rel={subItem.blank ? "noopener noreferrer" : ""}
                  >
                    <LinkEffect noicon text={subItem.title} />
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="border-t py-2 sm:py-4 border-[#333]">
          <div
            id="social"
            className="maxWSec max-sm:pb-8 text-sm sm:text-base flex flex-wrap justify-between items-center px-4"
          >
            <div>Copyright 2026 Tabassum Educational Alliance Regd. Since 2008</div>

            <div className="flex gap-3 sm:gap-4 items-center text-xl">
              <Link href="/" target="_blank"><FaLinkedin /></Link>

              <Link
                href="https://www.facebook.com/share/1JgUk1Qoy7/" target="_blank" rel="noopener noreferrer"><FaFacebook />
              </Link>

              <Link
                href="/ContactUs"
                target="_blank"
              >
                <FaInstagram />
              </Link>

              <Link
                href="/ContactUs"
                target="_blank"
              >
                <FaXTwitter />
              </Link>

              <Link
                href="https://youtube.com/@tabassumeducationalalliancereg?si=sm-YKvKdEI8tg5nf" target="_blank" rel="noopener noreferrer"><FaYoutube />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
