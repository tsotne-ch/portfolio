"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { Indent } from "./About";
import {
  IconBrandCpp,
  IconBrandNodejs,
  IconBrandTypescript,
} from "@tabler/icons-react";
import Reveal from "./Reveal";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const Lang = ({ name }: { name: string }) => {
  return (
    <HoverBorderGradient
      containerClassName="rounded-full"
      as="button"
      className="bg-black text-white flex items-center space-x-4"
    >
      <span>{name}</span>
    </HoverBorderGradient>
  );
};

export function Details() {
  const langs = [
    "ReactJS",
    "NextJS",
    "MongoDB",
    "Tailwind CSS",
    "Express",
    "Typescript",
    "C",
    "SCSS/SASS",
    "React Native",
    "C++",
    "NodeJS",
    "Firebase",
    "JQuery",
    "JWT",
  ];
  return (
    <div className="py-24">
      <h1 className="font-poppins font-bold text-center text-5xl mt-4 mb-10">
        Tech stack
      </h1>
      <BentoGrid className="w-full p-5 md:p-0">
        <Reveal>
          <div className="md:col-span-1 hover:scale-105 transition-all ease duration-300 h-64 relative p-5 rounded-lg bg-black/[0.15] backdrop-blur-sm border-white/[0.2] border">
            <code>
              <span className=" text-purple-400">let </span>
              <span className=" text-gray-400">message</span>
              <span className=" text-purple-400">: </span>
              <span className=" text-yellow-500">string </span>
              <span className=" text-purple-400">= </span>
              <span className=" text-cyan-300">"</span>
              <span className=" text-lime-400">hello</span>
              <span className=" text-cyan-300">"</span>
              <span>;</span>
              <br></br>
              <br></br>
              <span className=" text-purple-400">interface </span>
              <span className=" text-gray-400">Human </span>
              <span>{"{"}</span>
              <Indent>
                <span className=" text-purple-400">name</span>
                <span className=" ">: </span>
                <span className=" text-yellow-500">string</span>
                <span className=" ">;</span>
                <br></br>
                <span className=" text-purple-400">age</span>
                <span className=" ">: </span>
                <span className=" text-yellow-500">number</span>
                <span className=" ">;</span>
              </Indent>
              <span>{"}"}</span>
            </code>
            <h1 className=" text-gray-300 flex items-center gap-2 font-poppins text-3xl absolute bottom-5 left-5 font-bold">
              <IconBrandTypescript /> Typescript
            </h1>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="md:col-span-1 hover:scale-105 hover: transition-all ease duration-300 h-64 relative p-5 rounded-lg bg-black/[0.15] backdrop-blur-sm border-white/[0.2] border">
            <code>
              <span className=" text-purple-400">const </span>
              <span className=" text-gray-400">express </span>
              <span className=" text-purple-400">= </span>
              <span className=" text-blue-400">require</span>
              <span>(</span>
              <span className=" text-cyan-300">"</span>
              <span className=" text-lime-400">express</span>
              <span className=" text-cyan-300">"</span>
              <span>);</span>
              <br></br>
              <span className=" text-purple-400">const </span>
              <span className=" text-gray-400">app </span>
              <span className=" text-purple-400">= </span>
              <span className=" text-blue-400">express</span>
              <span>();</span>
              <br></br>
              <br></br>
              <span className=" text-gray-400">app</span>
              <span>.</span>
              <span className=" text-blue-400">use</span>
              <span>(</span>
              <span className=" text-gray-400">express</span>
              <span>.</span>
              <span className=" text-blue-400">json</span>
              <span>()</span>
              <span>);</span>
            </code>
            <h1 className=" text-gray-300 flex items-center gap-2 font-poppins text-3xl absolute bottom-5 left-5 font-bold">
              <IconBrandNodejs /> Node.js w/ ExpressJS
            </h1>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="md:col-span-1 hover:scale-105 hover: transition-all ease duration-300 h-64 relative p-5 rounded-lg bg-black/[0.15] backdrop-blur-sm border-white/[0.2] border">
            <code>
              <span className=" text-lime-400">
                #include {"<bits/stdc++.h>"}
              </span>
              <br></br>
              <span className=" text-purple-400">using </span>
              <span className=" text-blue-400">namespace </span>
              <span className=" text-green-400">std</span>
              <span>;</span>
              <br></br>

              <span className=" text-blue-400">int </span>
              <span className=" text-blue-200">a</span>
              <span>, </span>
              <span className=" text-blue-200">b</span>
              <span>, </span>
              <span className=" text-blue-200">graph[1001][1001]</span>
              <span>;</span>
              <br></br>
              <br></br>
              <span className=" text-blue-400">void </span>
              <span className=" text-yellow-300">dfs</span>
              <span>(</span>
              <span className=" text-blue-400">int </span>
              <span className=" text-blue-200">ind</span>
              <span>) {"{"}</span>
            </code>
            <h1 className=" text-gray-300 flex items-center gap-2 font-poppins text-3xl absolute bottom-5 left-5 font-bold">
              <IconBrandCpp /> C and C++
            </h1>
          </div>
        </Reveal>
      </BentoGrid>
      <div className="mt-7 flex flex-wrap p-5 md:p-0 gap-3">
        {langs.map((name, index) => (
          <Lang key={index} name={name} />
        ))}
      </div>
    </div>
  );
}
