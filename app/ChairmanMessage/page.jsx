import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const ChairmanMessage = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Chairman's Message",
      },
      {
        type: "h3",
        text: "Message from the Chairman — Nazir Dhuddi",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "“Education is the foundation upon which individuals, communities and nations build their future.”",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "Since its establishment in 2008, Tabassum Educational Alliance Regd. has been committed to contributing to the educational development of Pakistan through quality education, character building, skills development and meaningful community service.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "Our journey is driven by a simple yet powerful belief: every learner deserves an opportunity to discover their potential, develop their abilities and become a responsible and successful member of society. We therefore strive to create educational environments where academic excellence is strengthened by discipline, ethical values, confidence, creativity and practical skills.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "Through our diverse educational projects and collaborations, we aim to build an integrated educational network that responds to the needs of the modern era while remaining firmly connected to our social, moral and cultural values.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "As we continue to grow, our commitment remains unchanged: to serve education with sincerity, expand opportunities for learners, empower educators, embrace innovation and contribute positively to the future of Pakistan.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "I sincerely appreciate the dedication of our teachers, staff, students, parents, partners and well-wishers who are part of this journey. Together, we aspire to transform education into a powerful means of knowledge, character, empowerment and national progress.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "Nazir Dhuddi",
      },
      {
        type: "p",
        text: "Chairman",
      },
      {
        type: "p",
        text: "Tabassum Educational Alliance Regd.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader title={"Chairman's Message"} description="Tabassum Educational Alliance Regd." />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default ChairmanMessage;
