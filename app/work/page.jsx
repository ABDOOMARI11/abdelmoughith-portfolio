"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: " personal portfolio",
    description:
      "Welcome to my portfolio. Here, you'll find a snapshot of my skills and projects as a software developer, showcasing my expertise and commitment to delivering innovative web solutions.",
    stack: [{ name: "next js" }, { name: "framer motion" }],
    image: "/assets/portfolio/1.png",
    github: "https://github.com/ABDOOMARI11/abdelmoughith-portfolio.git",
    details: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: " lms project",
    description:
      "DAcademy is an online learning platform built with the MERN stack and Next.js. It offers intuitive tools for course creation, management, and student tracking, providing a modern and efficient educational experience.",
    stack: [
      { name: "nextJs" },
      { name: "mongoDb" },
      { name: "+... more" },
    ],
    image: "/assets/Dacademy/3.png",
    github: "https://github.com/ABDOOMARI11/lms-project.git",
    details: "",
  },
  {
    num: "03",
    category: "fullstack",
    title: " e-candidature",
    description:
      "This project digitizes the pre-enrollment process for Professional Bachelor’s programs using PHP and XML, streamlining administrative tasks for greater efficiency.",
    stack: [
      { name: "php" },
      { name: "html" },
      { name: "bootstrap" },
      { name: "xml" },
    ],
    image: "/assets/e-candidature/1.png",
    github: "https://github.com/ABDOOMARI11/e-candidature.git",
    details: "",
  },
  {
    num: "04",
    category: "fullstack",
    title: " private social network",
    description:
      "This project is a social network for students in the Professional Bachelor’s program, developed using HTML, CSS, and JavaScript, with Google Firebase services.",
    stack: [
      { name: "html" },
      { name: "css" },
      { name: "js" },
      { name: "firebase" },
    ],
    image: "/assets/firebase-project/1.png",
    details: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
      className="flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[20%] mb-8">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent capitalize">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.details}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] flex items-center justify-center rounded-full bg-white/5 group mt-2">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>Details page</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] flex items-center justify-center rounded-full bg-white/5 group mt-2">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>GitHub repository</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[55%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[250px] md:h-[350px] xl:h-[450px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute"></div>
                    <div className="relative w-full h-full bg-black/10 z-10">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt={project.title}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50% - 22px) xl:bottom-0 z-20 justify-between xl:w-max xl:justify-none"
                btnsStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
