"use client";
import { useState } from "react";
import NavArrows from "@/app/ui/NavArrows";
import BackgroundAnimation from "@/app/ui/BackgroundAnimation";

/* Slides */
import SponsorSlide from "../SponsorSlide";
import TitleSlide from "../TitleSlide";
import WhatIsTailwind from "../WhatIsTailwind";
import TailwindHistory from "../TailwindHistory";
import ExampleDiv from "../ExampleDiv";
import VanillaCSSExample from "../VanillaCSSExample";
import TailwindCSSExample from "../TailwindCSSExample";
import TailwindCSSBenefits from "../TailwindCSSBenefits";
import WhatIsHappening from "../WhatIsHappening";
import HowToUseTailwind from "../HowToUseTailwind";
import Addons from "../Addons";
import ComponentLibraries from "../ComponentLIbraries";
import Practice from "../Practice";
import Questions from "../Questions";
import WorksCited from "../WorksCited";

/* Boilerplate slides & examples */
// import CSSDivExample from "../CSSDivExample";
// import TailwindDivExample from "../TailwindDivExample";
// import BasicSlide from "../BasicSlide";

export default function Slide({ params }) {
  const currentSlide = params.slideId;

  // Passing in keys to keep linter happy
  const slideArray = [
    <SponsorSlide imageUrl={"/titlesponsor.png"} key="1" />,
    <TitleSlide key="1" />,
    <WhatIsTailwind key="1" />,
    <TailwindHistory key="1" />,
    <ExampleDiv key="1" />,
    <VanillaCSSExample key="1" />,
    <TailwindCSSExample key="1" />,
    <TailwindCSSBenefits key="1" />,
    <WhatIsHappening key="1" />,
    <HowToUseTailwind key="1" />,
    <Addons key="1" />,
    <ComponentLibraries key="1" />,
    <Practice key="1" />,
    <HowToUseTailwind key="2" />,
    <Questions key="1" />,
    <WorksCited key="1" />,
    <SponsorSlide imageUrl={"/creditsponsor.png"} key="2" />,

    /* Boilerplate examples */
    // <CSSDivExample key="1" />,
    // <TailwindDivExample key="1" />,
    // <BasicSlide key="1" />,
  ];

  slideArray.forEach;

  return (
    <div>
      <BackgroundAnimation />
      <div className="z-20 flex h-dvh flex-col justify-between bg-neutral-50 p-10 pb-5">
        <div className="flex h-full max-h-[90%] shrink flex-col justify-center">
          {slideArray[Math.min(currentSlide, slideArray.length - 1)]}
        </div>
        <div className="mt-5 shrink-0 self-end">
          <NavArrows
            currentSlide={currentSlide}
            slideCount={slideArray.length}
          />
        </div>
      </div>
    </div>
  );
}
