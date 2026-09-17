"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import SidebarComp from "./ui/SidebarComp";
import Button from "./ui/Button";
import { NavList } from "@/constants/NavList";
import { FaChevronDown } from "react-icons/fa6";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const navItemRefs = useRef([]);

  const handleMouseEnter = (index, event) => {
    setActiveDropdown(index);
    const margin = 48;
    const navItemRect = event.currentTarget.getBoundingClientRect();
    const dropdownWidth = 16 * 14;
    const screenWidth = window.innerWidth;
    let leftPosition = navItemRect.left;

    if (leftPosition + dropdownWidth > screenWidth) {
      leftPosition = screenWidth - dropdownWidth - margin;
    }

    if (leftPosition < 10) {
      leftPosition = margin;
    }

    setDropdownPosition(leftPosition);
  };

  const handleNavOpen = () => {
    setIsOpen(true);
    document.body.classList.add("hide-scrollbar");
  };

  const handleNavClose = () => {
    setIsOpen(false);
  };

  const transition = {
    duration: 0.8,
    type: "tween",
    ease: [0.76, 0, 0.24, 1],
  };

  return (
    <motion.nav className="sticky -top-4 w-full z-50 h-0 max-w-full">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full maxW p-8">
        <div className="shadow-[0_0_0.5rem_0_#00000020] flex items-center justify-between rounded-xl h-16 bg-light text-dark px-3">
          <Link href={"/"} name="home link" className="mr-auto">
            <Image
              src={"/tea-logo.png"}
              width={300}
              height={200}
              alt="Tabassum Educational Alliance logo"
              className="h-10 sm:h-12 w-10 sm:w-12 rounded-full object-contain aspect-square shadow-sm"
            />
          </Link>
          <div
            onMouseLeave={() => setActiveDropdown(null)}
            className="max-lg:hidden"
          >
            <div className="flex items-center gap-0 font-medium text-sm">
              {NavList.map((item, index) => {
                const isDisabled = item.content?.length > 0;
                const linkProps = {
                  onMouseEnter: (event) => handleMouseEnter(index, event),
                  className: `text-center transition-colors duration-150 flex items-center gap-1 py-2 px-3 xl:px-4 rounded-lg select-none leading-[1.1] ${
                    activeDropdown === index
                      ? "bg-slate-100 hover:bg-slate-100"
                      : "hover:bg-slate-100"
                  }`,
                  target: item.blank ? "_blank" : "_self",
                  rel: item.blank ? "noopener noreferrer" : "",
                };

                return !isDisabled && item.slug ? (
                  <Link {...linkProps} key={index} href={item.slug}>
                    {item.title}
                  </Link>
                ) : (
                  <div {...linkProps} key={index}>
                    {item.title}{" "}
                    <FaChevronDown
                      className={`${
                        activeDropdown === index ? "rotate-180" : ""
                      } transition-transform duration-300 opacity-60 font-normal size-3 align-middle ml-1 mb-px`}
                    />
                  </div>
                );
              })}
            </div>
            <AnimatePresence>
              {activeDropdown != null && NavList[activeDropdown]?.content && (
                <motion.div
                  initial={{
                    opacity: 0,
                    left: dropdownPosition,
                    y: -20,
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    left: dropdownPosition,
                    transition: {
                      duration: 0.3,
                      ease: "easeOut",
                    },
                  }}
                  exit={{
                    opacity: 0,
                    y: 0,
                    scale: 0.95,
                    transition: {
                      duration: 0.2,
                      ease: "easeIn",
                    },
                  }}
                  className="origin-top w-[300px] max-w-full absolute pt-7 top-[calc(100%-3.5rem)] "
                >
                  <div className="bg-white shadow-[0_0.2rem_0.5rem_0_#00000020] rounded-lg p-2">
                    <ul className="flex flex-col divide-y divide-slate-200">
                      {NavList[activeDropdown]?.content.map(
                        (subItem, subIndex) => (
                          <li key={subIndex} className="flex">
                            <Link
                              className="p-2 flex-1 transition-colors duration-150 hover:bg-main hover:text-black rounded-lg text-sm"
                              href={`${subItem.slug}`}
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link
            href={"/OnlineAdmission"}
            name="admission link"
            className="max-sm:hidden ml-1"
          >
            <Button size="small">Online Admission</Button>
          </Link>
          <button
            onClick={handleNavOpen}
            className="lg:hidden transition-all duration-300 hover:bg-slate-100 h-10 w-10 grid place-content-center rounded-lg text-2xl"
          >
            <FiMenu />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={"Navbar"}
            className="fixed w-full h-screen z-[999] right-0 top-0"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transition}
              onClick={handleNavClose}
              className="absolute inset-0 bg-dark/50"
            ></motion.div>
            <motion.div
              initial={{ x: "0" }}
              animate={{ x: "-100%" }}
              exit={{
                x: "0",
              }}
              onAnimationComplete={(definition) => {
                if (definition.x === "0") {
                  document.body.classList.remove("hide-scrollbar");
                }
              }}
              transition={transition}
              data-lenis-prevent
              className="p-4 flex flex-col gap-2 absolute left-full top-0 z-10 bg-light h-full max-h-[100dvh] w-[min(380px,90%)] rounded-s-2xl overflow-y-scroll"
            >
              <div className="bg-main/20 px-2 py-4 mb-4 rounded-xl flex gap-2 items-center justify-between">
                <Link href={"/"} name="home link">
                  <Image
                    src={"/tea-logo.png"}
                    width={300}
                    height={200}
                    alt="Tabassum Educational Alliance logo"
                    className="h-12 w-12 rounded-full object-contain aspect-square shadow-sm"
                  />
                </Link>
                <button
                  onClick={handleNavClose}
                  className="transition-all text-dark duration-300 hover:bg-light h-10 w-10 grid place-content-center rounded-full text-2xl"
                >
                  <RxCross2 />
                </button>
              </div>
              <SidebarComp data={NavList} handleClose={handleNavClose} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
