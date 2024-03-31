"use client";
import { useState } from "react";
import NavArrows from "@/app/ui/NavArrows";
import CSSDivExample from "../CSSDivExample";
import TailwindDivExample from "../TailwindDivExample";
import SponsorSlide from "../SponsorSlide";
import BasicSlide from "../BasicSlide";
import WhatIsTailwind from "../WhatIsTailwind";
import TitleSlide from "../TitleSlide";

export default function Slide({ params }) {
  const currentSlide = params.slideId;

  // Passing in keys to keep linter happy
  const slideArray = [
    <SponsorSlide imageUrl={"/titlesponsor.png"} key="1" />,
    <TitleSlide key="1" />,
    <WhatIsTailwind key="1" />,
    <SponsorSlide imageUrl={"/creditsponsor.png"} key="2" />,
    <CSSDivExample key="1" />,
    <TailwindDivExample key="1" />,
    <BasicSlide key="1" />,
  ];

  slideArray.forEach;

  return (
    <div className="flex h-dvh flex-col justify-between bg-neutral-50 p-10 pb-5">
      <div className="flex h-full shrink flex-col justify-center">
        {slideArray[Math.min(currentSlide, slideArray.length - 1)]}
      </div>
      <div className="mt-5 shrink-0 self-end">
        <NavArrows currentSlide={currentSlide} slideCount={slideArray.length} />
      </div>
    </div>
  );
}
