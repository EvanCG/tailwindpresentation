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
        <div className="flex h-full shrink flex-col justify-center">
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
