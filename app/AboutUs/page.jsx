import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";
import MotherProjects from "@/components/MotherProjects";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const AboutUs = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "About Tabassum Educational Alliance Regd.",
      },
      {
        type: "p",
        text: "Tabassum Educational Alliance Regd. is The Fastest Growing Educational Network All Over Pakistan, established in 2008. We are committed to contributing to the educational development of Pakistan through quality education, character building, skills development, and meaningful community service.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Our Mission Statement",
      },
      {
        type: "p",
        text: "Our mission is to develop a progressive, accessible and value-based educational network that empowers learners with knowledge, character, confidence and practical skills necessary to succeed in a rapidly changing world.",
      },
      {
        type: "br",
      },
      {
        type: "h3",
        text: "Our Core Commitments",
      },
      {
        type: "p",
        text: "• Providing Quality Education through effective teaching, strong academic standards and learner-focused environments.",
      },
      {
        type: "p",
        text: "• Building Character by promoting discipline, integrity, respect, responsibility and positive social values.",
      },
      {
        type: "p",
        text: "• Developing Future-Ready Skills through technology, digital education, communication, creativity and professional training.",
      },
      {
        type: "p",
        text: "• Empowering Educators by encouraging professional development, collaboration and continuous improvement in teaching practices.",
      },
      {
        type: "p",
        text: "• Promoting Innovation by embracing modern educational methods, technology and emerging opportunities.",
      },
      {
        type: "p",
        text: "• Supporting Holistic Development by giving equal importance to academic, intellectual, moral, social and practical growth.",
      },
      {
        type: "p",
        text: "• Building Educational Partnerships with institutions, organizations, professionals and communities to expand opportunities and impact.",
      },
      {
        type: "p",
        text: "• Serving Society by making education a means of empowerment, positive change and national development.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader title={"About Us"} description="Tabassum Educational Alliance Regd. — Since 2008" />
      <div className="flex flex-col gap-6 maxWSec px-4 sm:px-8 lg:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />

        {/* Visual Mother Projects & Allies Section with Monograms on Top & Names Below */}
        <div className="mt-8">
          <MotherProjects />
        </div>

        {/* Executive Leadership Spotlight */}
        <div className="mt-8 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-sec to-slate-950 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-300">
              Patronage & Apex Leadership
            </span>
            <h3 className="font-berlin text-3xl font-bold text-white">
              Executive Leadership
            </h3>
            <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
              Led by Patron-in-Chief Mufti Muhammad Tahir Tabassum Qadri, Chairman Nazir Dhuddi, President (Honorary) Muhammad Anwar Ul Rasool Murtazai, and CEO Hafiz Junaid Dhuddi.
            </p>
          </div>
          <Link
            href="/Leadership"
            className="shrink-0 px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm shadow-lg hover:shadow-amber-500/30 transition-all duration-300 flex items-center gap-2"
          >
            <span>View Executive Leadership</span>
            <FaArrowRight className="text-xs" />
          </Link>
        </div>

        {/* Board of Directors Spotlight Section */}
        <div className="mt-4 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-sec via-secD to-slate-950 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-sky-300">
              Strategic Governance
            </span>
            <h3 className="font-berlin text-3xl font-bold text-white">
              Board of Directors
            </h3>
            <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
              Meet the 9 visionary directors, academics, and legal leaders guiding the strategic growth, educational standards, and nation-wide impact of Tabassum Educational Alliance Regd.
            </p>
          </div>
          <Link
            href="/BoardOfDirectors"
            className="shrink-0 px-6 py-3 rounded-full bg-main hover:bg-mainD text-white text-sm font-semibold shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center gap-2"
          >
            <span>Explore Board Members</span>
            <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
