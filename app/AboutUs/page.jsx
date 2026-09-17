import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

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
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Mother Projects of Tabassum Educational Alliance Regd.",
      },
      {
        type: "p",
        text: "1. Oxford Progressive Schools Regd.",
      },
      {
        type: "p",
        text: "2. IQRA Madinat-Ul-Atfal Group of Schools Regd.",
      },
      {
        type: "p",
        text: "3. Tabassum I.T and Skills Center",
      },
      {
        type: "p",
        text: "4. Idara Taleemat-e-Nabawia Lahore",
      },
      {
        type: "p",
        text: "5. The Nest (National Educational School for Triumph)",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Our Allies",
      },
      {
        type: "p",
        text: "1. Al Qalam School",
      },
      {
        type: "p",
        text: "2. Kids Education School System",
      },
      {
        type: "p",
        text: "3. Fikr e Raat",
      },
      {
        type: "p",
        text: "4. National Ulama Council Pakistan",
      },
    ],
  };

  return (
    <main>
      <HeroHeader title={"About Us"} description="Tabassum Educational Alliance Regd. — Since 2008" />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default AboutUs;
