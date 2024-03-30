"use client";
import { useState } from "react";
import NavArrows from "@/app/ui/NavArrows";
import Slide0 from "../Slide0";
import Slide1 from "../Slide1";
import Slide2 from "../Slide2";

export default function Slide({ params }) {
  const currentSlide = params.slideId;

  const slideArray = [
    <Slide0 key="0" />,
    <Slide1 key="1" />,
    <Slide2 key="2" />,
  ];

  return (
    <div className="flex h-dvh flex-col justify-between p-5">
      <div>
        {/* <h1>
          The Slide component is displaying component:
          {currentSlide}
        </h1> */}
      </div>
      {slideArray[currentSlide]}
      <div>{/* <NavArrows currentSlide={currentSlide} /> */}</div>
    </div>
  );
}
