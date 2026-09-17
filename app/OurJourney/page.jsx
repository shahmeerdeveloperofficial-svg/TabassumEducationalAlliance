import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const OurJourney = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Our Journey — Since 2008",
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
        text: "Through our diverse educational projects and collaborations, we have grown into The Fastest Growing Educational Network All Over Pakistan, building an integrated educational ecosystem that responds to the needs of the modern era while remaining firmly connected to our social, moral and cultural values.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "As we continue to grow, our commitment remains unchanged: to serve education with sincerity, expand opportunities for learners, empower educators, embrace innovation and contribute positively to the future of Pakistan.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader title={"Our Journey"} description="Tabassum Educational Alliance Regd. — Since 2008" />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default OurJourney;
