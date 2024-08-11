"use client";

import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import Reveal from "./Reveal";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { TypewriterEffectSmooth } from "./ui/typewriter";

export function Indent({ children }: any) {
  return <div className=" ml-4">{children}</div>;
}

export function About() {
  const [copied, setCopied] = React.useState<boolean>(false);

  return (
    <div
      className="flex mt-7 rounded-lg backdrop-blur-sm dark:border-white/[0.2] border-black/[0.1] border xl:px-16 py-7"
      id="about"
    >
      <div className=" basis-full md:basis-1/2 p-5">
        <Reveal>
          <h1 className="font-poppins text-7xl font-bold">About me</h1>
        </Reveal>
        <Reveal delay={0.2} className="mt-10">
          <p className="font-poppins text-xl">
            Hey there, I am a Full stack web developer based in Georgia,
            currently working on improving Android/IOS app development with
            React Native and Data Structures and Algorithms with C and C++.
          </p>
        </Reveal>
        <Reveal delay={0.25} className="mt-10">
          <p className="font-poppins text-xl">
            I currently don't take commissions and just made this portfolio page
            for fun. Im totally not stretching this text cuz why not idk what
            else to put. i have ur ip btw this website stores ips lmfao.
            dumbass.
          </p>
        </Reveal>
        <Reveal delay={0.3} className="mt-10">
          <p className="font-poppins text-xl">
            so yeah expect to be ddosed today. drake drake go away rizz up kids
            another day mommy says its not okay drake drake go away. imagine
            being dissed by the entire internet. couldnt be me fr
          </p>
        </Reveal>
        <Reveal delay={0.35} className="mt-10">
          <p className="font-poppins text-xl">
            anyways back on track. i have always been interested in computer
            science and development my whole life. I am an aspiring developer
            who strives to always be better. Overcoming obstacles as a developer
            is my favorite free time activity and I will continue to work on
            myself to be better. ong
          </p>
        </Reveal>
        <Reveal delay={0.4} className="mt-10">
          <HoverBorderGradient
            onClick={() => {
              navigator.clipboard.writeText("tchavtchavadze.ts@gmail.com");
              setCopied(true);
            }}
            containerClassName="rounded-full"
            as="button"
            className="bg-black py-5 px-7 text-white flex items-center space-x-4"
          >
            <span>Click to copy email</span>
          </HoverBorderGradient>
        </Reveal>
        {copied ? (
          <div className="flex mt-7 ml-3 gap-2">
            <Reveal>
              <p className="font-poppins font-semibold text-lg">
                Copied to clipboard{" "}
              </p>
            </Reveal>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className=" basis-full md:basis-1/2 hidden md:block py-5 px-16">
        <Reveal className="">
          <CardContainer className="inter-var w-full ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black/[0.15]  dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-full h-auto rounded-xl p-1 border  ">
              <div className="">
                <div className="flex-none border-b border-slate-500/30">
                  <div className="flex items-center h-8 space-x-1.5 px-3">
                    <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                  </div>
                </div>
                <CardItem className="p-3" translateZ={35}>
                  <code className=" text-gray-500">
                    {"<"}
                    <span className=" text-pink-400">{"!DOCTYPE "}</span>
                    <span className=" text-orange-400 ">{"html"}</span>
                    {">"}
                  </code>
                  <br></br>
                  <code className=" text-gray-500">
                    {"<"}
                    <span className=" text-pink-400">{"html"}</span>
                    {">"}
                  </code>
                  <br></br>
                  <code className=" text-gray-500">
                    {"<"}
                    <span className=" text-pink-400">{"head"}</span>
                    {">"}
                  </code>
                  <br></br>
                  <Indent>
                    <code className=" text-gray-500">
                      {"<"}
                      <span className=" text-pink-400">{"meta "}</span>
                      <span className=" text-orange-400 ">{"charset"}</span>
                      <span className="text-white">{"="}</span>
                      <span className=" text-lime-400">{'"UTF-8"'}</span>
                      {">"}
                    </code>
                  </Indent>
                  <Indent>
                    <code className=" text-gray-500">
                      {"<"}
                      <span className=" text-pink-400">{"link "}</span>
                      <span className=" text-orange-400 ">{"href"}</span>
                      <span className="text-white">{"="}</span>
                      <span className=" text-lime-400">
                        {'"./styles/main.css" '}
                      </span>
                      <span className=" text-orange-400 ">{"rel"}</span>
                      <span className="text-white">{"="}</span>
                      <span className=" text-lime-400">{'"stylesheet" '}</span>
                      <span className=" text-orange-400 ">{"type"}</span>
                      <span className="text-white">{"="}</span>
                      <span className=" text-lime-400">{'"text/css"'}</span>
                      {">"}
                    </code>
                  </Indent>
                  <Indent>
                    <code className=" text-gray-500">
                      {"<"}
                      <span className=" text-pink-400">{"title"}</span>
                      {">"}
                    </code>
                    <code>Awesome title!</code>
                    <code className=" text-gray-500">
                      {"</"}
                      <span className=" text-pink-400">{"title"}</span>
                      {">"}
                    </code>
                  </Indent>
                  <code className=" text-gray-500">
                    {"</"}
                    <span className=" text-pink-400">{"head"}</span>
                    {">"}
                  </code>
                  <br></br>
                  <code className=" text-gray-500">
                    {"<"}
                    <span className=" text-pink-400">{"body"}</span>
                    {">"}
                  </code>
                  <Indent>
                    <code className=" text-gray-500">
                      {"<"}
                      <span className=" text-pink-400">{"h1"}</span>
                      {">"}
                    </code>
                    <code>Blogpost #6999</code>
                    <code className=" text-gray-500">
                      {"</"}
                      <span className=" text-pink-400">{"h1"}</span>
                      {">"}
                    </code>
                    <br></br>
                    <code className=" text-gray-500">
                      {"<"}
                      <span className=" text-pink-400">{"main"}</span>
                      {">"}
                    </code>
                    <Indent>
                      <code className=" text-gray-500">
                        {"<"}
                        <span className=" text-pink-400">{"article"}</span>
                        {">"}
                      </code>
                      <Indent>
                        <code className=" text-gray-500">
                          {"<"}
                          <span className=" text-pink-400">{"p"}</span>
                          {">"}
                        </code>

                        <Indent>
                          <code className="">
                            Hello hi ok so i have been kidnapped by this strange
                            man named paata idk what to do. his discord is
                            vikiismydogs namne stay away from him plss he is a
                            pidarast aht can be seen from anyhwere. he also has
                            a lot of kittens?? not cats human e girls but on his
                            phone not irl lmao he doesnt get any bitches
                          </code>
                        </Indent>

                        <code className=" text-gray-500">
                          {"</"}
                          <span className=" text-pink-400">{"p"}</span>
                          {">"}
                        </code>
                      </Indent>

                      <code className=" text-gray-500">
                        {"</"}
                        <span className=" text-pink-400">{"article"}</span>
                        {">"}
                      </code>
                    </Indent>
                    <code className=" text-gray-500">
                      {"</"}
                      <span className=" text-pink-400">{"main"}</span>
                      {">"}
                    </code>
                    <br></br>
                    <code className=" text-gray-500">
                      {"<"}
                      <span className=" text-pink-400">{"script "}</span>
                      <span className=" text-orange-400 ">{"href"}</span>
                      <span className="text-white">{"="}</span>
                      <span className=" text-lime-400">
                        {'"./scripts/main.js"'}
                      </span>
                      {">"}
                    </code>
                    <code className=" text-gray-500">
                      {"</"}
                      <span className=" text-pink-400">{"script"}</span>
                      {">"}
                    </code>
                    <br></br>
                  </Indent>
                  <code className=" text-gray-500">
                    {"</"}
                    <span className=" text-pink-400">{"body"}</span>
                    {">"}
                  </code>
                </CardItem>
              </div>
            </CardBody>
            {/* <CardItem translateZ={50} className="bottom-4 absolute left-4">
            <img src="/logonext.png" className="h-10" />
          </CardItem> */}
          </CardContainer>
        </Reveal>
      </div>
    </div>
  );
}
