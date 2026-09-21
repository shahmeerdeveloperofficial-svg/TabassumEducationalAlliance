import dynamic from "next/dynamic";

import HeroHeader from "../components/HeroHeader";
import Bento from "../components/Bento";
import Leadership from "@/components/Leadership";
import Team from "@/components/Team";
import About from "@/components/About";

const Pipeline = dynamic(() => import("../components/Pipeline"));
const Marquee = dynamic(() => import("../components/Marquee"), { ssr: false });
const Clubs = dynamic(() => import("../components/Clubs"));
const CSRVideo = dynamic(() => import("../components/CSRVideo"));
const AccessLMS = dynamic(() => import("../components/AccessLMS"));
const Franchises = dynamic(() => import("../components/Franchises"));
const Stats2 = dynamic(() => import("../components/Stats2"));

export default function Home() {
  return (
    <main>
      <HeroHeader
        title={
          <>
            Tabassum Educational <br /> Alliance Regd.
          </>
        }
        description="The Fastest Growing Educational Network All Over Pakistan — Since 2008"
      />
      <Bento />
      <Marquee
        direction={"right"}
        speed={0.2}
        List={[
          "The Fastest Growing Educational Network All Over Pakistan.",
          "Quality Education, Character Building & Skills Development Since 2008.",
          "Empowering Learners & Educators Nationwide.",
        ]}
      />
      <Pipeline />
      <About />
      <Clubs direction={"right"} speed={0.2} />
      <CSRVideo />
      <Leadership />
      <Team />
      <AccessLMS />
      <Franchises />
      <Stats2 />
    </main>
  );
}
