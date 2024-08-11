"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter";

const HomePage = () => {
  const words = [
    {
      text: "Hi!",
    },
    {
      text: "I'm",
    },
    {
      text: "Tsotne",
    },
    {
      text: "and",
    },
    {
      text: "I",
    },
    {
      text: "am",
    },
    {
      text: "a",
    },
    {
      text: "Fullstack",
      className: " text-blue-500 dark:text-blue-500",
    },
    {
      text: "developer",
    },
  ];
  return (
    <div className="">
      <div className="s w-full h-[90dvh] flex flex-col items-center justify-center">
        <div className="flex gap-10">
          <h1 className=" text-6xl md:text-8xl text-center font-poppins font-bold">
            Building an
            <span className="text-blue-500"> Interactive </span> Experience!
          </h1>
        </div>
        <TypewriterEffectSmooth words={words} />
        <div className="flex justify-center mt-7">
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors ">
            Get started
          </button>
        </div>
      </div>
      {/* <Spotlight
        className="-top-40 left-16 md:left-60 md:-top-20"
        fill="blue"
      />
      <Spotlight
        className="-top-60 -right-16 md:-right-60 md:-top-40"
        fill="purple"
      /> */}
      <div className="w-full h-dvh fixed -z-10 top-0 left-0 right-0 bottom-0 backdrop-blur-[500px]" />
      <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-20">
        <div className="w-96 h-96 rounded-full animate-blob   bg-gradient-to-r from-blue-500 to-blue-900    blur-[500px] opacity-65  scale-x-100 scale-y-150 "></div>
      </div>
    </div>
  );
};

export default HomePage;
