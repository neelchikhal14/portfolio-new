"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "Sunt esse adipisicing aliquip id enim amet dolor deserunt culpa minim ut.",
    stack: [
      {
        name: "HTML5",
      },
      {
        name: "CSS3",
      },
      {
        name: "JS",
      },
      {
        name: "REACT",
      },
    ],
    image: "/assests/work/thumb1.png",
    live: "https://www.sample.com",
    github: "https://www.sample.com",
  },
  {
    num: "02",
    category: "backend",
    title: "project 2",
    description:
      "Sunt esse adipisicing aliquip id enim amet dolor deserunt culpa minim ut.",
    stack: [
      {
        name: "HTML5",
      },
      {
        name: "CSS3",
      },
      {
        name: "JS",
      },
      {
        name: "REACT",
      },
    ],
    image: "/assests/work/thumb1.png",
    live: "https://www.sample.com",
    github: "https://www.sample.com",
  },
  {
    num: "03",
    category: "full-stack",
    title: "project 3",
    description:
      "Sunt esse adipisicing aliquip id enim amet dolor deserunt culpa minim ut.",
    stack: [
      {
        name: "HTML5",
      },
      {
        name: "CSS3",
      },
      {
        name: "JS",
      },
      {
        name: "REACT",
      },
    ],
    image: "/assests/work/thumb1.png",
    live: "https://www.sample.com",
    github: "https://www.sample.com",
  },
];
const Work = () => {
  const [project, setProject] = useState<any>(projects[0]);

  const handleSlideChange = (swiper: any) => {
    const currentIdx = swiper.activeIndex;

    setProject(project[currentIdx]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num ?? "01"}
              </div>
              <h2
                className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all
              duration-500 capitalize
              "
              >
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul>
                {project.stack.map((st: any, idx: number) => (
                  <li key={idx} className="text-xl text-accent">
                    {st.name}
                    {idx !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((pr, idx) => (
                <SwiperSlide key={idx} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={pr.image}
                        fill
                        className="object-cover"
                        alt=""
                      ></Image>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
