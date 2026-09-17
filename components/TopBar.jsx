import Link from "next/link";
import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const TopBar = () => {
  return (
    <header className="text-base text-light relative px-5 w-full min-h-12 py-2 h-fit bg-main flex items-center">
      <div className="flex-1 flex justify-between items-center maxW flex-wrap gap-x-3 gap-y-2">
        <div className="max-lg:flex-grow justify-center flex gap-4 items-center sm:text-base text-sm">
          <Link href={"tel:03008847670"}>0300-8847670</Link>
          <span className="opacity-70">|</span>
          <Link href={"/ContactUs"}>Shahdara, Lahore</Link>
        </div>
        <div className="max-lg:flex-grow justify-center sm:text-xl text-lg lg:absolute left-1/2 top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 flex gap-5 items-center">
          <Link
            href={"https://www.facebook.com/share/1JgUk1Qoy7/"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            <FaFacebook />
          </Link>
          <Link
            href={"https://youtube.com/@tabassumeducationalalliancereg?si=sm-YKvKdEI8tg5nf"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            <FaYoutube />
          </Link>
        </div>
        <div className="max-lg:flex-grow justify-center flex gap-4 items-center sm:text-base text-sm">
          <Link href={"/AboutUs"}>Since 2008</Link>
          <Link href={"/OnlineAdmission"}>Online Admission</Link>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
