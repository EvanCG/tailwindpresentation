"use client";
import { useState } from "react";
import NavArrows from "@/app/ui/NavArrows";
import CSSDivExample from "../CSSDivExample";
import TailwindDivExample from "../TailwindDivExample";
import SponsorSlide from "../SponsorSlide";

export default function Slide({ params }) {
  const currentSlide = params.slideId;

  // Passing in keys to keep linter happy
  const slideArray = [
    <SponsorSlide imageUrl={'/titlesponsor.png'} key='1'/>,
    <CSSDivExample key='1'/>,
    <TailwindDivExample key='1'/>,
    <SponsorSlide imageUrl={'/creditsponsor.png'} key='2'/>,
  ];

  slideArray.forEach

  return (
    <div className="flex h-dvh flex-col justify-between p-10 pb-5">
      <div>
        <h1>
        </h1>
      </div>
      {slideArray[Math.min(currentSlide, slideArray.length -1)]}
      <div className="self-end mt-5">
        <NavArrows currentSlide={currentSlide} slideCount={slideArray.length}/>
      </div>
    </div>
  );
}
