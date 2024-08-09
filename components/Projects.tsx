"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { PinContainer } from "./ui/3d-pin";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import Reveal from "./Reveal";
import Link from "next/link";
import { IconLink } from "@tabler/icons-react";

export function Projects() {
  return (
    <div className="py-24 px-3 lg:px-0 container mx-auto">
      <Reveal>
        <h1 className="sm:text-6xl text-5xl font-poppins font-bold text-center">
          {"<"} Projects {"/>"}
        </h1>
      </Reveal>

      <div className="grid mt-14 lg:grid-cols-3 gap-5">
        <div className="shadow-[0_0_7rem_2rem_rgba(20,48,125,0.4)] backdrop-blur-sm  dark:bg-black/[0.15]  dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-full h-auto rounded-xl  p-0 sm:p-3 border">
          <CardContainer className="inter-var w-full p-2 sm:p-3">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black/[0.15]  dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-full h-auto rounded-xl p-3 border  ">
              <div className="flex-none mb-1 border-slate-500/30">
                <div className="flex items-center h-6 space-x-1.5 px-1">
                  <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                </div>
              </div>
              <CardItem translateZ={45}>
                <img src="/vek.png" className="w-full rounded-lg" />
              </CardItem>
              <CardItem>
                <Link href={"https://vekua42.edu.ge"}>
                  <h3 className="font-poppins flex items-center gap-2 font-bold mt-4 text-xl">
                    School Webpage <IconLink />
                  </h3>
                </Link>
                <p className="font-poppins text-sm mt-2">
                  With admin dashboard and cms.
                </p>
              </CardItem>
              <CardItem className="mt-3 flex" translateZ={30}>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  ReactJS
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                  MongoDB
                </span>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                  Express
                </span>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                  Firebase
                </span>
              </CardItem>
              <CardItem
                translateZ={45}
                className="dark:hover:shadow-2xl lg:block hidden w-20 h-20 absolute -bottom-4 -right-3 backdrop-blur-sm dark:hover:shadow-emerald-500/[0.1] dark:bg-black/[0.35]  dark:border-white/[0.2] border-black/[0.1] rounded-xl border"
              >
                <></>
              </CardItem>
              <CardItem
                translateZ={25}
                className="dark:hover:shadow-2xl lg:block hidden w-32 h-20 absolute -top-7 -right-7 backdrop-blur-sm dark:hover:shadow-emerald-500/[0.1] dark:bg-black/[0.35]  dark:border-white/[0.2] border-black/[0.1] rounded-xl border"
              >
                <></>
              </CardItem>
            </CardBody>
          </CardContainer>
          <code className="absolute top-6 left-6">
            <span className=" text-blue-400">import </span>
            <span className=" text-yellow-400">{"{"}</span>
            <span className=" text-gray-400"> vekua </span>
            <span className=" text-yellow-400">{"}"}</span>
            <span className=" text-blue-400"> from </span>
            <span className=" text-cyan-300">"</span>
            <span className=" text-lime-400">@vekua/node</span>
            <span className=" text-cyan-300">";</span>
            <br></br>
            <span className=" text-blue-400">const </span>
            <span className=" text-gray-300">instance </span>
            <span className=" text-purple-400">= </span>
            <span className=" text-gray-400">vekua</span>
            <span>.</span>
            <span className=" text-blue-400">init</span>
            <span>();</span>
          </code>
          <code className="absolute bottom-6 left-6">
            <span className=" text-blue-400">export </span>
            <span className=" text-blue-400">default </span>
            <span className=" text-gray-400">instance</span>
            <span>;</span>
          </code>
        </div>
        <div className="shadow-[0_0_7rem_2rem_rgba(20,48,125,0.4)] backdrop-blur-sm  dark:bg-black/[0.15]  dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-full h-auto rounded-xl p-0 sm:p-3 border">
          <CardContainer className="inter-var mt-2 w-full p-2 sm:p-3">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black/[0.15]  dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-full h-auto rounded-xl p-3 border  ">
              <div className="flex-none mb-1 border-slate-500/30">
                <div className="flex items-center h-6 space-x-1.5 px-1">
                  <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                </div>
              </div>
              <CardItem translateZ={45}>
                <img src="/geomedi.png" className="w-full rounded-lg" />
              </CardItem>
              <CardItem>
                <Link href={"https://geo-medi.ge/"}>
                  <h3 className="font-poppins flex items-center gap-2 font-bold mt-4 text-xl">
                    Home health-care <IconLink />
                  </h3>
                </Link>
                <p className="font-poppins text-sm mt-2">
                  With admin dashboard and cms.
                </p>
              </CardItem>
              <CardItem className="mt-3 flex" translateZ={30}>
                <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
                  JQuery
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                  MongoDB
                </span>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                  Express
                </span>
              </CardItem>
              <CardItem
                translateZ={45}
                className="dark:hover:shadow-2xl lg:block hidden w-24 h-20 absolute -bottom-4 right-16 backdrop-blur-sm dark:hover:shadow-emerald-500/[0.1] dark:bg-black/[0.35]  dark:border-white/[0.2] border-black/[0.1] rounded-xl border"
              >
                <></>
              </CardItem>
              {/* <CardItem
                translateZ={25}
                className="dark:hover:shadow-2xl w-32 h-20 absolute -top-7 -right-7 backdrop-blur-sm dark:hover:shadow-emerald-500/[0.1] dark:bg-black/[0.35]  dark:border-white/[0.2] border-black/[0.1] rounded-xl border"
              >
                <></>
              </CardItem> */}
            </CardBody>
          </CardContainer>
          <code className="absolute top-6 left-6">
            <span className=" text-blue-400">const </span>
            {/* <span className=" text-yellow-400">{"{"}</span> */}
            <span className=" text-gray-400">geomediApp </span>
            {/* <span className=" text-yellow-400">{"}"}</span> */}
            <span className=" text-purple-400">= </span>
            <span className=" text-blue-400">require</span>
            <span>(</span>
            <span className=" text-cyan-300">"</span>
            <span className=" text-lime-400">@geomedi/app</span>
            <span className=" text-cyan-300">"</span>
            <span>);</span>
            {/* <span className=" text-blue-400"> from </span> */}
            {/* <span className=" text-cyan-300">"</span>
            <span className=" text-lime-400">@vekua/node</span>
            <span className=" text-cyan-300">";</span> */}
            <br></br>
            <span className=" text-gray-400">app</span>
            <span>.</span>
            <span className=" text-blue-400">use</span>
            <span>(</span>
            <span className=" text-gray-400">geomediApp</span>
            <span>.</span>
            <span className=" text-blue-400">init</span>
            <span>()</span>
            <span>);</span>
            {/* <span className=" text-blue-400">const </span>
            <span className=" text-gray-300">instance </span>
            <span className=" text-purple-400">= </span>
            <span className=" text-gray-400">vekua</span>
            <span>.</span>
            <span className=" text-blue-400">init</span>
            <span>();</span> */}
          </code>
          <code className="absolute bottom-6 left-6">
            <span className=" text-blue-400">export </span>
            <span className=" text-blue-400">default </span>
            <span className=" text-gray-400">router</span>
            <span>;</span>
          </code>
        </div>
        <div className="shadow-[0_0_7rem_2rem_rgba(20,48,125,0.4)] backdrop-blur-sm  dark:bg-black/[0.15]  dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-full h-auto rounded-xl p-0 sm:p-3 border">
          <CardContainer className="inter-var w-full p-2 mt-2 sm:p-3">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black/[0.15]  dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-full h-auto rounded-xl p-3 border  ">
              <div className="flex-none mb-1 border-slate-500/30">
                <div className="flex items-center h-6 space-x-1.5 px-1">
                  <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                </div>
              </div>
              <CardItem translateZ={45}>
                <img src="/aesthetics.png" className="w-full rounded-lg" />
              </CardItem>
              <CardItem>
                <Link href={"https://aesthetics.geo-medi.ge"}>
                  <h3 className="font-poppins flex items-center gap-2 font-bold mt-4 text-xl">
                    Aesthetic clinic <IconLink />
                  </h3>
                </Link>
                <p className="font-poppins text-sm mt-2">
                  With admin dashboard and cms.
                </p>
              </CardItem>
              <CardItem className="mt-3 flex" translateZ={30}>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  ReactJS
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                  MongoDB
                </span>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                  Express
                </span>
              </CardItem>

              <CardItem
                translateZ={25}
                className="dark:hover:shadow-2xl lg:block hidden w-32 h-20 absolute -top-7 -right-7 backdrop-blur-sm dark:hover:shadow-emerald-500/[0.1] dark:bg-black/[0.35]  dark:border-white/[0.2] border-black/[0.1] rounded-xl border"
              >
                <></>
              </CardItem>
            </CardBody>
          </CardContainer>
          <code className="absolute top-6 left-6">
            <span className=" text-blue-400">import </span>
            <span className=" text-yellow-400">{"{"}</span>
            <span className=" text-gray-400"> aesthetic </span>
            <span className=" text-yellow-400">{"}"}</span>
            <span className=" text-blue-400"> from </span>
            <span className=" text-cyan-300">"</span>
            <span className=" text-lime-400">@/lib/aestheticmedi</span>
            <span className=" text-cyan-300">";</span>
            <br></br>
            <span className=" text-blue-400">const </span>
            <span className=" text-gray-400">app </span>
            <span className=" text-purple-400">= </span>
            <span className=" text-gray-400">aesthetic</span>
            <span>.</span>
            <span className=" text-blue-400">initialize</span>
            <span>();</span>
          </code>
          <code className="absolute bottom-6 left-6">
            <span className=" text-blue-400">export </span>
            <span className=" text-blue-400">default </span>
            <span className=" text-gray-400">app</span>
            <span>.</span>
            <span className=" text-blue-400">data</span>
            <span>();</span>
          </code>
        </div>
      </div>
    </div>
  );
}
