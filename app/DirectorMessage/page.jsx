import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const DirectorMessage = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Director's Message",
      },
      {
        type: "p",
        text: "At Tabassum Educational Alliance, our focus is to create a learning experience that is organized, caring, and purposeful. We want every child to feel encouraged to participate, improve, and believe in their own ability.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "A strong school is built on clear teaching, healthy discipline, and consistent support. Our classrooms are designed to help students strengthen their fundamentals, build confidence, and grow into responsible members of society.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "We also recognize that education goes beyond textbooks. Mentoring, parent engagement, co-curricular activities, and character building all play an important role in helping students develop in a balanced way.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "Thank you for your interest in Tabassum Educational Alliance. We look forward to welcoming your family and working together for your child's bright future.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "Director",
      },
      {
        type: "p",
        text: "Tabassum Educational Alliance",
      },
    ],
  };

  return (
    <main>
      <HeroHeader title={"Director's Message"} description="Tabassum Educational Alliance" />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default DirectorMessage;
